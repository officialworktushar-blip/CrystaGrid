export default function ScreensPage() {
  return (
    <div className="mx-auto max-w-6xl">
      <h1 className="text-2xl font-semibold tracking-tight text-heading">
        Screens
      </h1>
      <p className="mt-1 text-sm text-paragraph">
        Pair, organize, and monitor every display in your network.
      </p>

      <div className="mt-8 rounded-xl border border-dashed border-border bg-card p-12 text-center">
        <p className="text-sm font-medium text-text">No screens paired yet</p>
        <p className="mt-1 text-sm text-paragraph">
          Pair your first screen to start publishing content.
        </p>
      </div>
    </div>
  );
}
