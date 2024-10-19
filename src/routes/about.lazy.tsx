import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/about")({
  component: About,
});

function About() {
  return <h1 className="text-blue-400">About, MimsAI</h1>;
}
