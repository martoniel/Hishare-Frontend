import PageHeader from '../components/PageHeader'
import StudyCard from '../components/StudyCard'

export default function MarketplacePage() {
  return (
    <div className="grid gap-6">
      <PageHeader
        title="Research Marketplace"
        subtitle="Contribute to science while earning rewards with secure, anonymous data sharing."
        badge="Marketplace"
      />

      <section className="grid gap-6">
        <div className="rounded-[36px] border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <input
              type="search"
              placeholder="Search studies, organizations, or conditions"
              className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm text-slate-900 outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 sm:w-3/4"
            />
            <button className="rounded-3xl border border-slate-200 bg-slate-100 px-5 py-4 text-sm font-semibold text-slate-700 transition hover:bg-slate-200">
              Filters
            </button>
          </div>
        </div>

        <div className="grid gap-5">
          <StudyCard
            title="Sleep Pattern Study"
            org="NeuroGen Institute"
            status="Eligible"
            reward="$50"
            duration="3 months"
            commitment="Weekly Sync"
          />
          <StudyCard
            title="Cardio Health Monitoring"
            org="Metro Heart Center"
            status="In Review"
            reward="$120"
            duration="6 months"
            commitment="Wearable Required"
          />
          <StudyCard
            title="Mental Wellness App Pilot"
            org="University Behavioral Lab"
            status="Eligible"
            reward="$75"
            duration="4 weeks"
            commitment="Daily Check-in"
          />
          <StudyCard
            title="Rare Condition Genetics"
            org="Genomix Health"
            status="Eligible"
            reward="$200"
            duration="Once"
            commitment="Sample Kit"
          />
        </div>

        <div className="rounded-[36px] border border-slate-200 bg-slate-950 p-6 text-white shadow-sm">
          <p className="text-sm uppercase tracking-[0.2em] text-emerald-200">Your Data, Your Impact.</p>
          <h2 className="mt-4 text-2xl font-semibold">Join over 15,000 contributors shaping the future of medicine.</h2>
          <p className="mt-4 text-sm leading-6 text-slate-300">
            Our secure Research Network makes it easy to participate without compromising privacy. Members can join verified studies, manage consent, and receive instant rewards.
          </p>
          <button className="mt-6 rounded-3xl bg-emerald-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300">
            Start Your Journey
          </button>
        </div>

        <div className="grid gap-3 rounded-[36px] border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">Trusted Research Partners</p>
          <div className="grid gap-3 sm:grid-cols-2">
            <span className="rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700">Stanford Health</span>
            <span className="rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700">Mayo Clinic</span>
            <span className="rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700">NHS Research</span>
            <span className="rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700">MindState Lab</span>
          </div>
        </div>
      </section>
    </div>
  )
}
