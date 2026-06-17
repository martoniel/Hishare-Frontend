import PageHeader from '../components/PageHeader'
import StatCard from '../components/StatCard'
import FeatureCard from '../components/FeatureCard'

export default function ReportPage() {
  return (
    <div className="grid gap-6">
      <PageHeader
        title="Data Report"
        subtitle="Review analytics and insights about your health data sharing and research participation."
        badge="Report"
      />

      <div className="grid gap-6 lg:grid-cols-[0.9fr_0.6fr]">
        <div className="rounded-[36px] border border-slate-200 bg-white p-6 shadow-sm">
          <div className="grid gap-5 sm:grid-cols-3">
            <StatCard label="Records Shared" value="18" />
            <StatCard label="Studies Applied" value="5" />
            <StatCard label="Rewards Pending" value="$45" />
          </div>

          <div className="mt-8 rounded-[32px] border border-slate-200 bg-slate-50 p-5">
            <p className="text-sm uppercase tracking-[0.18em] text-slate-500">Engagement Timeline</p>
            <div className="mt-4 grid gap-4">
              <FeatureCard title="Health sharing frequency" description="Most patients share records weekly with research teams." />
              <FeatureCard title="Consent approvals" description="Approval rate for record access requests." />
              <FeatureCard title="Study completion" description="Average completion time for active trials." />
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-[36px] border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-950">Health Metrics Snapshot</h2>
            <p className="mt-3 text-sm text-slate-600">Track the progress of your personal data health and security posture.</p>
            <div className="mt-6 grid gap-4">
              <FeatureCard title="Profile completeness" description="Update required medical fields to maximize trust and opportunity." />
              <FeatureCard title="Permission status" description="Review which organizations have active access to your records." />
            </div>
          </div>
          <div className="rounded-[36px] border border-slate-200 bg-slate-50 p-6 text-slate-700 shadow-sm">
            <h3 className="text-lg font-semibold">Report highlights</h3>
            <ul className="mt-5 space-y-3 text-sm leading-6">
              <li>• 92% of requests resolved within 24 hours.</li>
              <li>• 4.9/5 average researcher trust score.</li>
              <li>• 15 studies completed by contributors.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
