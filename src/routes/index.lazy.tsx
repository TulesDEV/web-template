import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="p-2">
      <h1 className="text-blue-400">Hello, MimsAI</h1>
    </div>
  );
}
