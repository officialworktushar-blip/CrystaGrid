export default function PlaylistsPage() {
  return (
    <div className="mx-auto max-w-6xl">
      <h1 className="text-2xl font-semibold tracking-tight text-heading">
        Playlists
      </h1>
      <p className="mt-1 text-sm text-paragraph">
        Schedule and loop content across one or many screens.
      </p>

      <div className="mt-8 rounded-xl border border-dashed border-border bg-card p-12 text-center">
        <p className="text-sm font-medium text-text">No playlists yet</p>
        <p className="mt-1 text-sm text-paragraph">
          Create a playlist to start scheduling content.
        </p>
      </div>
    </div>
  );
}
