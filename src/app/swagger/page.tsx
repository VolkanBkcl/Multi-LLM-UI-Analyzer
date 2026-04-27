import { getApiDocs } from "@/lib/swagger";
import ReactSwagger from "./react-swagger";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "API Documentation | Multi-LLM UI Analyzer",
  description: "Swagger UI for Multi-LLM UI Analyzer API",
};

export default async function SwaggerPage() {
  const spec = await getApiDocs();
  
  return (
    <div className="bg-white text-black min-h-screen">
      <div className="container mx-auto py-8 max-w-7xl">
        <h1 className="text-3xl font-bold mb-4 px-4">API Dokümantasyonu</h1>
        <ReactSwagger spec={spec} />
      </div>
    </div>
  );
}
