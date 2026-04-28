import { useEffect, useState, useCallback } from "react";
import { getSupabaseBrowserClient } from "@/lib/supabase";

export interface SessionRecord {
  id: string;
  prompt: string;
  models: string[];
  created_at: string;
}

export interface GroupedSessions {
  label: string;
  sessions: SessionRecord[];
}

function groupByDate(sessions: SessionRecord[]): GroupedSessions[] {
  const now = new Date();
  const todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const yesterdayStart = new Date(todayStart.getTime() - 86400000);
  const weekStart = new Date(todayStart.getTime() - 6 * 86400000);

  const groups: Record<string, SessionRecord[]> = {
    "Bugün": [],
    "Dün": [],
    "Bu Hafta": [],
    "Daha Önce": [],
  };

  sessions.forEach((s) => {
    const d = new Date(s.created_at);
    const dayStart = new Date(d.getFullYear(), d.getMonth(), d.getDate());
    if (dayStart >= todayStart) groups["Bugün"].push(s);
    else if (dayStart >= yesterdayStart) groups["Dün"].push(s);
    else if (dayStart >= weekStart) groups["Bu Hafta"].push(s);
    else groups["Daha Önce"].push(s);
  });

  return Object.entries(groups)
    .filter(([, sessions]) => sessions.length > 0)
    .map(([label, sessions]) => ({ label, sessions }));
}

export function useSessionHistory(userId: string | null) {
  const [grouped, setGrouped] = useState<GroupedSessions[]>([]);
  const [loading, setLoading] = useState(false);

  const fetch = useCallback(async () => {
    if (!userId) { setGrouped([]); return; }
    setLoading(true);
    const supabase = getSupabaseBrowserClient();
    const { data } = await supabase
      .from("sessions")
      .select("id, prompt, models, created_at")
      .eq("user_id", userId)
      .order("created_at", { ascending: false })
      .limit(30);

    if (data) setGrouped(groupByDate(data as SessionRecord[]));
    setLoading(false);
  }, [userId]);

  useEffect(() => {
    fetch();
  }, [fetch]);

  return { grouped, loading, refresh: fetch };
}
