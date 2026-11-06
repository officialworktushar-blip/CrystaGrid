export default function SettingsPage() {
  return (
    <div className="mx-auto max-w-6xl">
      <h1 className="text-2xl font-semibold tracking-tight text-heading">
        Settings
      </h1>
      <p className="mt-1 text-sm text-paragraph">
        Manage your account, organization, and preferences.
      </p>

      <div className="mt-8 rounded-xl border border-border bg-card p-6">
        <h2 className="text-sm font-semibold text-heading">Profile</h2>
        <p className="mt-1 text-sm text-paragraph">
          Account settings will appear here.
        </p>
      </div>
    </div>
  );
}
