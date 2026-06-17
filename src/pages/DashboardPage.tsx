import PageHeader from '../components/PageHeader'
import StatCard from '../components/StatCard'
import ActivityItem from '../components/ActivityItem'
import FeatureCard from '../components/FeatureCard'

export default function DashboardPage() {
  return (
    <div className="grid gap-6">
      <PageHeader
        title="Welcome back, Alex"
        subtitle="Your health ecosystem is secure and up to date."
        badge="Dashboard"
      />

      <section className="grid gap-6 xl:grid-cols-[1.4fr_0.9fr]">
        <div className="grid gap-6">
          <div className="rounded-[36px] border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm text-slate-500">Health Profile</p>
                <h2 className="mt-2 text-2xl font-semibold text-slate-950">Alex Johnson, 34 · Type 1 Diabetes</h2>
              </div>
              <span className="rounded-3xl bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700">Profile 85% Complete</span>
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <StatCard label="Blood Sugar" value="104 mg/dL" />
              <StatCard label="A1C Level" value="6.4%" />
              <StatCard label="Weight" value="178 lbs" />
              <StatCard label="BP" value="118/76" />
            </div>
          </div>

          <div className="rounded-[36px] border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Permissions</p>
                <p className="mt-3 text-2xl font-semibold text-slate-950">Consent summary</p>
              </div>
              <div className="rounded-3xl bg-slate-100 p-4 text-slate-500">🔒</div>
            </div>
            <div className="mt-6 grid gap-3 border border-slate-100 bg-slate-50 p-5 rounded-3xl">
              <p className="flex items-center gap-3 text-sm text-slate-700"><span className="h-2 w-2 rounded-full bg-emerald-500" /> Active Shares: 3</p>
              <p className="flex items-center gap-3 text-sm text-slate-700"><span className="h-2 w-2 rounded-full bg-amber-500" /> Pending Requests: 1</p>
              <p className="flex items-center gap-3 text-sm text-slate-700"><span className="h-2 w-2 rounded-full bg-rose-500" /> Expired: 2</p>
            </div>
            <button className="mt-6 w-full rounded-3xl bg-emerald-600 px-5 py-4 text-sm font-semibold text-white transition hover:bg-emerald-700">
              Manage Consent
            </button>
          </div>

          <div className="rounded-[36px] border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm text-slate-500">Records</p>
                <h2 className="mt-2 text-2xl font-semibold text-slate-950">12 Total</h2>
              </div>
              <button className="rounded-3xl bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">View All</button>
            </div>
            <div className="mt-6 rounded-[28px] border border-slate-200 bg-slate-50 p-5">
              <p className="text-sm font-semibold text-slate-900">Lab Results</p>
              <p className="mt-2 text-sm text-slate-600">Metabolic Panel · Oct 12</p>
              <p className="mt-4 text-xs uppercase tracking-[0.2em] text-slate-400">Last update: 2 hours ago</p>
            </div>
          </div>

          <div className="rounded-[36px] border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-sm text-slate-500">Research Opportunities</p>
                <h2 className="mt-2 text-2xl font-semibold text-slate-950">Available Studies (4)</h2>
              </div>
              <span className="inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 text-sm font-semibold text-emerald-700">Eligible</span>
            </div>
            <div className="mt-6 rounded-[28px] border border-emerald-100 bg-emerald-50 p-5">
              <p className="text-lg font-semibold text-slate-950">Continuous Glucose Monitoring Study</p>
              <p className="mt-2 text-sm text-slate-600">Status: Eligible · Potential Reward: $250</p>
              <button className="mt-5 rounded-3xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-[36px] border border-slate-200 bg-white p-6 shadow-sm">
            <PageHeader title="Recent Activity" subtitle="Track the latest changes in your health data and consent flow." />
            <div className="space-y-4">
              <ActivityItem
                title="Access request from Mayo Clinic"
                detail="Cardiology Department requested access to historical lab results."
                time="Today · 10:45 AM"
                actionLabel="Approve"
              />
              <ActivityItem
                title="New lab result uploaded"
                detail="Blood Panel results from City General Hospital are now available in your records."
                time="Today · 09:30 AM"
              />
              <ActivityItem
                title="Profile security audit"
                detail="Monthly security check completed. No unauthorized access attempts detected."
                time="Oct 14 · 09:00 AM"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
