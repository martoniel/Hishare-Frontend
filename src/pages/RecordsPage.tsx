import PageHeader from '../components/PageHeader'
import FeatureCard from '../components/FeatureCard'
import RecordCard from '../components/RecordCard'

export default function RecordsPage() {
  return (
    <div className="grid gap-6">
      <PageHeader
        title="Health Records"
        subtitle="Manage your medical history, prescriptions, and lab data securely."
        badge="Records"
      />

      <div className="grid gap-6">
        <div className="rounded-[36px] border border-slate-200 bg-white p-5 shadow-sm">
          <label className="block text-sm font-medium text-slate-700">Search</label>
          <input
            type="search"
            placeholder="Search records, doctors, or clinics..."
            className="mt-3 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
          />
        </div>

        <div className="grid gap-4">
          <FeatureCard
            title="Medical History"
            description="Comprehensive timeline of your past diagnoses and treatments."
            badge="12 Entries"
            tone="neutral"
          />
          <FeatureCard
            title="Prescriptions"
            description="Active and past medications with refill reminders."
            badge="3 Active"
            tone="info"
          />
          <FeatureCard
            title="Lab Results"
            description="Blood tests, urinalysis, and pathology reports."
            tone="neutral"
          />
          <FeatureCard
            title="Imaging"
            description="X-Rays, MRIs, and CT scans in high resolution."
            tone="neutral"
          />
          <FeatureCard
            title="Vaccinations"
            description="Immunization records and booster schedules."
            tone="neutral"
          />
          <FeatureCard
            title="Allergies"
            description="Critical alerts for medications and environment."
            tone="warning"
          />
        </div>

        <section className="rounded-[36px] border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm text-slate-500">Recent Records</p>
              <h2 className="mt-2 text-xl font-semibold text-slate-950">Latest updates</h2>
            </div>
            <button className="rounded-3xl bg-slate-100 px-4 py-3 text-sm font-semibold text-slate-700">View All</button>
          </div>
          <div className="mt-6 space-y-4">
            <RecordCard
              title="Annual Health Screening Report"
              subtitle="St. Luke's Medical Center · Oct 12, 2023"
              status="Verified"
              date="Today"
            />
            <RecordCard
              title="Lisinopril 10mg Prescription"
              subtitle="Dr. Sarah Jenkins · Sep 28, 2023"
              status="Archived"
              date="Sep 28"
            />
            <RecordCard
              title="Lipid Panel & CBC"
              subtitle="Quest Diagnostics · Sep 15, 2023"
              status="Action Required"
              date="Sep 15"
            />
          </div>
        </section>
      </div>
    </div>
  )
}
