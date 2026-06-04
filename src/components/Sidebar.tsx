import { cn } from '@/lib/utils'
import {
  Menu,
  X,
  GraduationCap,
  Sparkles,
  FileSignature,
  BookOpenText,
} from 'lucide-react'

interface SidebarProps {
  activeTab: string
  onTabChange: (tab: string) => void
  isOpen: boolean
  onToggle: () => void
}

const navItems = [
  { id: 'classes', label: 'Applied Grammar', icon: BookOpenText, description: 'Text-based grammar rules' },
  { id: 'mock-test', label: 'IFSP Mock Test', icon: FileSignature, description: 'Exam emulator' },
]

export function Sidebar({ activeTab, onTabChange, isOpen, onToggle }: SidebarProps) {
  return (
    <>
      {/* Mobile overlay scrim — §4: blur-purpose (background dismissal) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm md:hidden"
          style={{ zIndex: 'var(--z-overlay)' }}
          onClick={onToggle}
          aria-hidden="true"
        />
      )}

      {/* Mobile toggle — §2: ≥44px touch target */}
      <button
        onClick={onToggle}
        aria-label={isOpen ? 'Close navigation' : 'Open navigation'}
        className={cn(
          'fixed top-4 left-4 md:hidden',
          'h-11 w-11 flex items-center justify-center',
          'rounded-lg glass-surface shadow-md',
          'text-text-secondary hover:text-text-primary',
          'transition-all duration-fast cursor-pointer',
          'active:scale-95 focus-ring',
        )}
        style={{ zIndex: 'var(--z-modal)' }}
      >
        {isOpen ? <X size={18} /> : <Menu size={18} />}
      </button>

      {/* Sidebar — §9: persistent-nav, adaptive-navigation */}
      <aside
        className={cn(
          'fixed md:sticky top-0 left-0 h-screen h-[100dvh] flex flex-col',
          'w-[264px] bg-surface-1 border-r border-border-subtle',
          'transition-transform duration-300 ease-out',
          'md:translate-x-0',
          isOpen ? 'translate-x-0' : '-translate-x-full',
        )}
        style={{ zIndex: 'var(--z-overlay)' }}
        role="navigation"
        aria-label="Main navigation"
      >
        {/* Brand */}
        <div className="flex items-center gap-3 px-5 h-16 border-b border-border-subtle flex-shrink-0">
          <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-gradient-to-br from-primary-500 to-accent-purple-500 shadow-sm">
            <GraduationCap size={18} className="text-white" />
          </div>
          <div className="min-w-0">
            <h1 className="text-[13px] font-bold text-text-primary tracking-tight leading-tight truncate">
              ConcursoFederal
            </h1>
            <p className="text-[9px] font-semibold text-text-muted uppercase tracking-[0.15em]">
              Professor EBTT
            </p>
          </div>
        </div>

        {/* Nav items — §9: nav-label-icon, nav-state-active */}
        <nav className="flex-1 px-3 py-5 space-y-1 overflow-y-auto">
          <p className="px-3 mb-4 text-[9px] font-bold text-text-ghost uppercase tracking-[0.2em]">
            Study Hub
          </p>
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = activeTab === item.id
            return (
              <button
                key={item.id}
                onClick={() => {
                  onTabChange(item.id)
                  if (window.innerWidth < 768) onToggle()
                }}
                className={cn(
                  'w-full flex items-center gap-3 px-3 py-3 rounded-lg text-left',
                  'transition-all duration-fast ease-out group',
                  'focus-ring cursor-pointer',
                  'active:scale-[0.97] active:transition-none',
                  isActive
                    ? [
                        'bg-gradient-to-r from-primary-muted to-transparent',
                        'text-primary-400',
                        'shadow-xs',
                        'border border-primary-500/10',
                      ]
                    : [
                        'text-text-muted',
                        'hover:text-text-secondary',
                        'hover:bg-surface-2',
                        'border border-transparent',
                      ]
                )}
              >
                <Icon
                  size={18}
                  strokeWidth={isActive ? 2.2 : 1.8}
                  className={cn(
                    'flex-shrink-0 transition-all duration-fast',
                    isActive
                      ? 'text-primary-400'
                      : 'text-text-ghost group-hover:text-text-muted'
                  )}
                />
                <div className="min-w-0 flex-1">
                  <p className="text-[13px] font-semibold truncate">{item.label}</p>
                  <p className={cn(
                    'text-[10px] truncate transition-colors',
                    isActive ? 'text-primary-400/50' : 'text-text-ghost'
                  )}>
                    {item.description}
                  </p>
                </div>
                {isActive && (
                  <div className="ml-auto w-1.5 h-1.5 rounded-full bg-primary-400 animate-pulse-soft flex-shrink-0" />
                )}
              </button>
            )
          })}
        </nav>

        {/* Bottom — user info + decoration */}
        <div className="px-4 py-4 border-t border-border-subtle flex-shrink-0">
          {/* Exam countdown accent bar */}
          <div className="flex items-center gap-2 px-3 py-2 rounded-md bg-surface-2 mb-3">
            <Sparkles size={12} className="text-warning-400 flex-shrink-0" />
            <p className="text-[10px] text-text-muted font-medium">
              Exam: <span className="text-warning-400 font-bold">Aug 15, 2026</span>
            </p>
          </div>
          <div className="flex items-center gap-3 px-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary-500 to-accent-purple-500 flex items-center justify-center text-white text-[11px] font-bold flex-shrink-0 shadow-xs">
              S
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-[12px] font-semibold text-text-primary truncate">Student</p>
              <p className="text-[10px] text-text-ghost truncate">Inglês – EBTT</p>
            </div>
          </div>
        </div>
      </aside>
    </>
  )
}
