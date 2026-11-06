import Link from "next/link";

const stats = [
  { label: "Total Screens", value: "24", change: "+3 this month" },
  { label: "Online Now", value: "21", change: "87.5% healthy" },
  { label: "Media Assets", value: "148", change: "12 added recently" },
  { label: "Active Playlists", value: "9", change: "2 scheduled" },
];

const screens = [
  { name: "Lobby Display", location: "HQ — Floor 1", status: "Online", updated: "Just now" },
  { name: "Storefront", location: "Downtown — Main St", status: "Online", updated: "2 min ago" },
  { name: "Event Hall", location: "Convention Center", status: "Online", updated: "5 min ago" },
  { name: "Warehouse Board", location: "Logistics Hub", status: "Offline", updated: "1 hr ago" },
];

export default function DashboardPage() {
  return (
    <div className="mx-auto max-w-6xl">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight text-heading">
            Dashboard
          </h1>
          <p className="mt-1 text-sm text-paragraph">
            Here&apos;s what&apos;s happening across your screens.
          </p>
        </div>
        <Link
          href="/dashboard/screens"
          className="inline-flex items-center justify-center rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-ice hover:text-background"
        >
          Manage Screens
        </Link>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-xl border border-border bg-card p-5"
          >
            <p className="text-sm text-paragraph">{stat.label}</p>
            <p className="mt-2 text-3xl font-semibold tracking-tight text-heading">
              {stat.value}
            </p>
            <p className="mt-1 text-xs text-label">{stat.change}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 rounded-xl border border-border bg-card">
        <div className="flex items-center justify-between border-b border-border px-5 py-4">
          <h2 className="text-sm font-semibold text-heading">Screen Status</h2>
          <Link
            href="/dashboard/screens"
            className="text-xs font-medium text-primary transition-colors hover:text-ice"
          >
            View all
          </Link>
        </div>

        <div className="divide-y divide-border">
          {screens.map((screen) => (
            <div
              key={screen.name}
              className="flex flex-col gap-3 px-5 py-4 sm:flex-row sm:items-center sm:justify-between"
            >
              <div className="min-w-0">
                <p className="truncate text-sm font-medium text-text">
                  {screen.name}
                </p>
                <p className="mt-0.5 truncate text-xs text-paragraph">
                  {screen.location}
                </p>
              </div>
              <div className="flex items-center gap-6">
                <span className="text-xs text-label">{screen.updated}</span>
                <span
                  className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium ${
                    screen.status === "Online"
                      ? "border-live/30 bg-live/10 text-live"
                      : "border-offline/30 bg-offline/10 text-offline"
                  }`}
                >
                  <span
                    className={`size-1.5 rounded-full ${
                      screen.status === "Online" ? "bg-live" : "bg-offline"
                    }`}
                  />
                  {screen.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
