import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/product")({
  component: ProductPage,
});

function ProductPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-24">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-8">
          Product <span className="text-primary">Details</span>
        </h1>
        <p className="text-muted-foreground text-lg mb-8 max-w-2xl">
          This is a dummy product page. The actual content will be updated later.
        </p>
        <div className="h-96 bg-card border border-border/50 shadow-sm rounded-[2rem] flex items-center justify-center">
          <p className="text-muted-foreground font-mono text-sm">Product Content Placeholder</p>
        </div>
      </div>
    </div>
  );
}
