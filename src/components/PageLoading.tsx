/** Full-page loading UI for route transitions */
export default function PageLoading() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center gap-6 px-4">
      <div className="relative flex items-center justify-center">
        <div className="w-12 h-12 rounded-full border-4 border-primary/15 border-t-accent animate-spin" />
        <div className="absolute w-8 h-8 rounded-full border-2 border-primary/10 border-b-accent/70 animate-spin" style={{ animationDuration: "0.8s" }} />
      </div>
      <p className="text-sm font-medium text-primary-light animate-pulse">Loading...</p>
    </div>
  );
}
