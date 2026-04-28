import { useEffect, useState } from "react";
import { getSupabaseBrowserClient } from "@/lib/supabase";

export interface GlobalVoteStat {
  vote_key: string;
  total: number;
}

export interface GlobalOverview {
  total_sessions: number;
  total_users: number;
  total_votes: number;
}

export function useGlobalStats() {
  const [voteStats, setVoteStats] = useState<GlobalVoteStat[]>([]);
  const [overview, setOverview] = useState<GlobalOverview | null>(null);
  const [loading, setLoading] = useState(true);

  const refresh = async () => {
    const supabase = getSupabaseBrowserClient();

    const [{ data: votes }, { data: ov }] = await Promise.all([
      supabase.rpc("get_global_vote_stats"),
      supabase.rpc("get_global_overview"),
    ]);

    if (votes) setVoteStats(votes as GlobalVoteStat[]);
    if (ov && (ov as GlobalOverview[])[0]) setOverview((ov as GlobalOverview[])[0]);
    setLoading(false);
  };

  useEffect(() => {
    refresh();
  }, []);

  return { voteStats, overview, loading, refresh };
}
