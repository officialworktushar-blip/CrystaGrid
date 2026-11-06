export default function MediaPage() {
  return (
    <div className="mx-auto max-w-6xl">
      <h1 className="text-2xl font-semibold tracking-tight text-heading">
        Media
      </h1>
      <p className="mt-1 text-sm text-paragraph">
        Upload and manage images, videos, and creatives for your screens.
      </p>

      <div className="mt-8 rounded-xl border border-dashed border-border bg-card p-12 text-center">
        <p className="text-sm font-medium text-text">Your library is empty</p>
        <p className="mt-1 text-sm text-paragraph">
          Upload your first asset to build a playlist.
        </p>
      </div>
    </div>
  );
}
