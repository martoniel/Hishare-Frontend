import PageHeader from '../components/PageHeader'
import StatCard from '../components/StatCard'
import RecordCard from '../components/RecordCard'

export default function RewardsPage() {
  return (
    <div className="grid gap-6">
      <PageHeader
        title="Total Earnings"
        subtitle="Track your compensation, study history, and reward status."
        badge="Rewards"
      />

      <section className="grid gap-6 lg:grid-cols-[0.9fr_0.9fr]">
        <div className="rounded-[36px] border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Available Balance</p>
          <h2 className="mt-4 text-4xl font-semibold text-slate-950">$340</h2>
          <button className="mt-6 rounded-3xl bg-emerald-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-800">
            Withdrawal
          </button>
          <p className="mt-4 text-sm text-slate-500">Last payout: Oct 12, 2023</p>
        </div>

        <div className="rounded-[36px] border border-slate-200 bg-slate-950 p-6 text-white shadow-sm">
          <div className="grid gap-5 sm:grid-cols-2">
            <StatCard label="Studies Completed" value="12" highlight />
            <StatCard label="Active Trials" value="2" highlight />
          </div>
          <div className="mt-5 grid gap-5 sm:grid-cols-2">
            <StatCard label="Data Compliance" value="100%" highlight />
            <StatCard label="Researcher Rating" value="4.9" highlight />
          </div>
        </div>
      </section>

      <section className="rounded-[36px] border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-sm text-slate-500">Recent Rewards</p>
            <h2 className="mt-2 text-xl font-semibold text-slate-950">Earnings summary</h2>
          </div>
          <button className="rounded-3xl bg-slate-100 px-4 py-3 text-sm font-semibold text-slate-700">View All</button>
        </div>
        <div className="mt-6 space-y-4">
          <RecordCard
            title="Cardiovascular Health Baseline"
            subtitle="Completed Oct 24, 2023"
            status="$120.00 Paid"
            date="Paid"
          />
          <RecordCard
            title="Cognitive Focus Assessment - Phase 2"
            subtitle="Pending Approval (Oct 28, 2023)"
            status="$45.00 Pending"
            date="Pending"
          />
          <RecordCard
            title="Glucose Monitoring Survey"
            subtitle="Completed Oct 15, 2023"
            status="$25.00 Paid"
            date="Paid"
          />
          <RecordCard
            title="Sleep Quality Long-form Study"
            subtitle="Completed Oct 02, 2023"
            status="$150.00 Paid"
            date="Paid"
          />
        </div>
      </section>
    </div>
  )
}
