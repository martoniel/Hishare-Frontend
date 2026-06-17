import type { ReactNode } from 'react'
import { NavLink } from 'react-router-dom'

const pages = [
  { label: 'Dashboard', href: '/dashboard' },
  { label: 'Records', href: '/records' },
  { label: 'Marketplace', href: '/marketplace' },
  { label: 'Rewards', href: '/rewards' },
  { label: 'Report', href: '/report' },
]

export default function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="border-b border-slate-200 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-900 text-white">HS</div>
            <div>
              <p className="text-sm text-slate-500">HiShare</p>
              <p className="text-base font-semibold text-slate-900">Patient-owned health data</p>
            </div>
          </div>
          <button className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-100 text-slate-700 transition hover:bg-slate-200">
            <span className="sr-only">Notifications</span>
            🔔
          </button>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8">{children}</main>

      <nav className="fixed inset-x-0 bottom-0 border-t border-slate-200 bg-white/95 py-3 backdrop-blur-md sm:hidden">
        <div className="mx-auto flex max-w-6xl justify-between px-4">
          {pages.slice(0, 4).map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              className={({ isActive }) =>
                `flex flex-col items-center gap-1 text-xs font-medium ${
                  isActive ? 'text-emerald-700' : 'text-slate-500'
                }`
              }
            >
              <span>•</span>
              {item.label}
            </NavLink>
          ))}
        </div>
      </nav>
    </div>
  )
}
