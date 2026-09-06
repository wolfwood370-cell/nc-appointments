import { createFileRoute, Navigate } from "@tanstack/react-router";
import { useAuth, pathForRole } from "@/lib/auth";
import { Loader2 } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NC Training Systems | Allenamento personalizzato" },
      {
        name: "description",
        content:
          "Piattaforma NC Training Systems: prenota sessioni PT, percorsi mensili e BIA con il tuo coach.",
      },
      { property: "og:title", content: "NC Training Systems | Allenamento personalizzato" },
      {
        property: "og:description",
        content:
          "Piattaforma NC Training Systems: prenota sessioni PT, percorsi mensili e BIA con il tuo coach.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const { session, role, loading } = useAuth();
  if (loading)
    return (
      <div className="min-h-screen grid place-items-center">
        <Loader2 className="size-5 animate-spin text-muted-foreground" />
      </div>
    );
  if (!session) return <Navigate to="/auth" />;
  return <Navigate to={pathForRole(role)} />;
}
