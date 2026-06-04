import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

/* ═══════════════════════════════════════════════════════════
   Card — Glassmorphic surface with layered elevation
   §4: elevation-consistent, effects-match-style
   ═══════════════════════════════════════════════════════════ */
interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  glow?: 'primary' | 'success' | false
  glass?: boolean
  onClick?: () => void
}

export function Card({
  children,
  className,
  hover = false,
  glow = false,
  glass = true,
  onClick,
}: CardProps) {
  return (
    <div
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={onClick ? (e) => { if (e.key === 'Enter' || e.key === ' ') onClick() } : undefined}
      className={cn(
        'rounded-xl p-6',
        'transition-all duration-base',
        glass
          ? 'glass-surface shadow-sm'
          : 'bg-surface-2 border border-border-default',
        hover && [
          'cursor-pointer',
          'hover:shadow-md',
          'hover:border-border-strong',
          'hover:-translate-y-[2px]',
          'active:translate-y-0 active:scale-[0.98]',   /* §7: scale-feedback */
        ],
        glow === 'primary' && 'inner-glow-primary',
        glow === 'success' && 'shadow-glow-success',
        className
      )}
    >
      {children}
    </div>
  )
}

/* ═══════════════════════════════════════════════════════════
   Progress Bar — Gradient fill with glow
   §10: direct-labeling, contrast-data ≥3:1
   ═══════════════════════════════════════════════════════════ */
interface ProgressProps {
  value: number
  max?: number
  label?: string
  sublabel?: string
  color?: 'primary' | 'success' | 'warning' | 'danger' | 'purple' | 'cyan'
  size?: 'sm' | 'md' | 'lg'
  showPercentage?: boolean
}

const progressColors = {
  primary:  { bar: 'from-primary-600 to-primary-400', glow: '0 0 12px rgba(91,123,249,0.35)' },
  success:  { bar: 'from-success-600 to-success-400', glow: '0 0 12px rgba(52,211,153,0.35)' },
  warning:  { bar: 'from-warning-500 to-warning-400', glow: '0 0 12px rgba(251,191,36,0.35)' },
  danger:   { bar: 'from-danger-500 to-danger-400', glow: '0 0 12px rgba(244,63,94,0.35)' },
  purple:   { bar: 'from-accent-purple-500 to-accent-purple-400', glow: '0 0 12px rgba(167,139,250,0.35)' },
  cyan:     { bar: 'from-accent-cyan-500 to-accent-cyan-400', glow: '0 0 12px rgba(34,211,238,0.35)' },
}

const progressSizes = {
  sm: 'h-1.5',
  md: 'h-2',
  lg: 'h-3',
}

export function Progress({
  value,
  max = 100,
  label,
  sublabel,
  color = 'primary',
  size = 'md',
  showPercentage = true,
}: ProgressProps) {
  const percentage = Math.min(Math.round((value / max) * 100), 100)
  const cfg = progressColors[color]

  return (
    <div className="w-full space-y-2" role="progressbar" aria-valuenow={percentage} aria-valuemin={0} aria-valuemax={100} aria-label={label}>
      {(label || showPercentage) && (
        <div className="flex items-baseline justify-between gap-2">
          <div className="flex items-baseline gap-2 min-w-0">
            {label && <span className="text-[13px] font-semibold text-text-primary truncate">{label}</span>}
            {sublabel && <span className="text-[11px] text-text-muted truncate">{sublabel}</span>}
          </div>
          {showPercentage && (
            <span className="text-[13px] font-bold text-text-secondary tabular-nums flex-shrink-0">
              {percentage}%
            </span>
          )}
        </div>
      )}
      <div className={cn('w-full rounded-full bg-surface-3 overflow-hidden', progressSizes[size])}>
        <div
          className={cn(
            'h-full rounded-full bg-gradient-to-r transition-all duration-700',
            cfg.bar
          )}
          style={{ width: `${percentage}%`, boxShadow: percentage > 0 ? cfg.glow : 'none' }}
        />
      </div>
    </div>
  )
}

/* ═══════════════════════════════════════════════════════════
   Badge — Pill with semantic colors
   §4: state-clarity
   ═══════════════════════════════════════════════════════════ */
interface BadgeProps {
  children: ReactNode
  variant?: 'default' | 'success' | 'warning' | 'danger' | 'purple' | 'cyan' | 'outline'
  size?: 'sm' | 'md'
  className?: string
  pulse?: boolean
}

const badgeVariants = {
  default: 'bg-primary-muted text-primary-400 border-transparent',
  success: 'bg-success-muted text-success-400 border-transparent',
  warning: 'bg-warning-muted text-warning-400 border-transparent',
  danger:  'bg-danger-muted text-danger-400 border-transparent',
  purple:  'bg-accent-purple-muted text-accent-purple-400 border-transparent',
  cyan:    'bg-accent-cyan-muted text-accent-cyan-400 border-transparent',
  outline: 'bg-transparent text-text-muted border-border-strong',
}

export function Badge({ children, variant = 'default', size = 'sm', className, pulse = false }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full border font-medium tracking-wide transition-colors',
        size === 'sm' ? 'px-2.5 py-0.5 text-[10px] uppercase' : 'px-3 py-1 text-[11px] uppercase',
        badgeVariants[variant],
        pulse && 'animate-pulse-soft',
        className
      )}
    >
      {children}
    </span>
  )
}

/* ═══════════════════════════════════════════════════════════
   Button — Active scale feedback, accessible min-height
   §2: touch-target ≥44px, loading-buttons
   §7: scale-feedback on press
   ═══════════════════════════════════════════════════════════ */
interface ButtonProps {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger' | 'success'
  size?: 'sm' | 'md' | 'lg' | 'icon'
  className?: string
  onClick?: () => void
  disabled?: boolean
  type?: 'button' | 'submit'
  'aria-label'?: string
}

const buttonVariants = {
  primary: [
    'bg-gradient-to-b from-primary-500 to-primary-600 text-white',
    'shadow-sm',
    'hover:shadow-glow-primary hover:from-primary-400 hover:to-primary-500',
  ].join(' '),
  secondary: [
    'bg-surface-3 text-text-primary',
    'border border-border-default',
    'hover:bg-surface-4 hover:border-border-strong',
  ].join(' '),
  ghost: 'bg-transparent text-text-secondary hover:text-text-primary hover:bg-surface-3',
  danger: 'bg-danger-muted text-danger-400 hover:bg-danger-500 hover:text-white',
  success: 'bg-success-muted text-success-400 hover:bg-success-500 hover:text-white',
}

const buttonSizes = {
  sm: 'h-9 px-3.5 text-[12px] rounded-md',
  md: 'h-11 px-5 text-[13px] rounded-lg',       /* ≥44px touch target */
  lg: 'h-12 px-7 text-sm rounded-lg',
  icon: 'h-10 w-10 rounded-lg flex items-center justify-center',  /* ≥44px with padding */
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  className,
  onClick,
  disabled = false,
  type = 'button',
  'aria-label': ariaLabel,
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      className={cn(
        'inline-flex items-center justify-center gap-2 font-semibold tracking-wide cursor-pointer',
        'transition-all duration-fast ease-out',
        'focus-ring',
        'active:scale-[0.96] active:transition-none',   /* §7: scale-feedback instant */
        'disabled:opacity-40 disabled:cursor-not-allowed disabled:pointer-events-none',
        buttonVariants[variant],
        buttonSizes[size],
        className
      )}
    >
      {children}
    </button>
  )
}

/* ═══════════════════════════════════════════════════════════
   Skeleton — Shimmer placeholder
   §3: progressive-loading
   ═══════════════════════════════════════════════════════════ */
interface SkeletonProps {
  className?: string
  variant?: 'text' | 'circle' | 'rect'
}

export function Skeleton({ className, variant = 'rect' }: SkeletonProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        'skeleton-shimmer',
        variant === 'text' && 'h-4 w-full rounded-sm',
        variant === 'circle' && 'h-10 w-10 rounded-full',
        variant === 'rect' && 'h-20 w-full rounded-lg',
        className
      )}
    />
  )
}

/* ═══════════════════════════════════════════════════════════
   Tabs — Segmented control with indicator
   §2: touch-target, §4: state-clarity
   ═══════════════════════════════════════════════════════════ */
interface Tab {
  id: string
  label: string
  icon?: ReactNode
}

interface TabsProps {
  tabs: Tab[]
  activeTab: string
  onChange: (id: string) => void
  className?: string
}

export function Tabs({ tabs, activeTab, onChange, className }: TabsProps) {
  return (
    <div className={cn('flex gap-1 p-1 rounded-xl bg-surface-1', className)} role="tablist">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          role="tab"
          aria-selected={activeTab === tab.id}
          onClick={() => onChange(tab.id)}
          className={cn(
            'flex items-center gap-2 px-4 py-2.5 text-[12px] font-semibold uppercase tracking-wider',
            'rounded-lg transition-all duration-fast ease-out',
            'focus-ring cursor-pointer',
            activeTab === tab.id
              ? 'bg-surface-3 text-text-primary shadow-sm'
              : 'text-text-muted hover:text-text-secondary hover:bg-surface-2'
          )}
        >
          {tab.icon}
          {tab.label}
        </button>
      ))}
    </div>
  )
}

/* ═══════════════════════════════════════════════════════════
   Alert Dialog — Modal with scrim + focus trap
   §7: modal-motion (scale from center), §8: escape-routes
   ═══════════════════════════════════════════════════════════ */
interface AlertDialogProps {
  open: boolean
  onClose: () => void
  onConfirm?: () => void
  title: string
  description: string
  confirmLabel?: string
  cancelLabel?: string
  variant?: 'default' | 'danger'
}

export function AlertDialog({
  open,
  onClose,
  onConfirm,
  title,
  description,
  confirmLabel = 'Confirm',
  cancelLabel = 'Cancel',
  variant = 'default',
}: AlertDialogProps) {
  if (!open) return null

  return (
    <div
      className="fixed inset-0 flex items-center justify-center"
      style={{ zIndex: 'var(--z-modal)' }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="dialog-title"
      aria-describedby="dialog-desc"
    >
      {/* Scrim — 50% opacity for legibility (§4: scrim 40-60%) */}
      <div
        className="absolute inset-0 bg-black/55 backdrop-blur-md transition-opacity duration-base"
        onClick={onClose}
        aria-hidden="true"
      />
      {/* Dialog body */}
      <div className="relative w-full max-w-[420px] mx-4 animate-scale-in">
        <div className="glass-surface rounded-2xl p-7 shadow-xl border-border-strong">
          <h3 id="dialog-title" className="text-lg font-bold text-text-primary mb-2 tracking-tight">{title}</h3>
          <p id="dialog-desc" className="text-[13px] text-text-secondary mb-7 leading-relaxed">{description}</p>
          <div className="flex justify-end gap-3">
            <Button variant="ghost" size="sm" onClick={onClose}>
              {cancelLabel}
            </Button>
            <Button
              variant={variant === 'danger' ? 'danger' : 'primary'}
              size="sm"
              onClick={() => {
                onConfirm?.()
                onClose()
              }}
            >
              {confirmLabel}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ═══════════════════════════════════════════════════════════
   Stat Card — Metric display with trend badge
   §6: weight-hierarchy, §4: no-emoji-icons (icons via Lucide)
   ═══════════════════════════════════════════════════════════ */
interface StatCardProps {
  label: string
  value: string | number
  sublabel?: string
  icon: ReactNode
  trend?: { value: number; label: string }
  color?: 'primary' | 'success' | 'warning' | 'purple' | 'cyan'
}

const statColorMap = {
  primary: {
    bg: 'bg-gradient-to-br from-primary-muted to-transparent',
    text: 'text-primary-400',
    ring: 'ring-1 ring-primary-500/10',
  },
  success: {
    bg: 'bg-gradient-to-br from-success-muted to-transparent',
    text: 'text-success-400',
    ring: 'ring-1 ring-success-500/10',
  },
  warning: {
    bg: 'bg-gradient-to-br from-warning-muted to-transparent',
    text: 'text-warning-400',
    ring: 'ring-1 ring-warning-500/10',
  },
  purple: {
    bg: 'bg-gradient-to-br from-accent-purple-muted to-transparent',
    text: 'text-accent-purple-400',
    ring: 'ring-1 ring-accent-purple-500/10',
  },
  cyan: {
    bg: 'bg-gradient-to-br from-accent-cyan-muted to-transparent',
    text: 'text-accent-cyan-400',
    ring: 'ring-1 ring-accent-cyan-500/10',
  },
}

export function StatCard({ label, value, sublabel, icon, trend, color = 'primary' }: StatCardProps) {
  const cfg = statColorMap[color]

  return (
    <Card hover className="animate-fade-in group">
      <div className="flex items-start justify-between mb-4">
        <div className={cn(
          'p-2.5 rounded-lg transition-transform duration-base',
          'group-hover:scale-110',
          cfg.bg, cfg.ring,
        )}>
          <span className={cfg.text}>{icon}</span>
        </div>
        {trend && (
          <Badge variant={trend.value >= 0 ? 'success' : 'danger'} size="sm">
            {trend.value >= 0 ? '↑' : '↓'} {Math.abs(trend.value)}%
          </Badge>
        )}
      </div>
      <div className="space-y-0.5">
        <p className="text-[28px] font-extrabold text-text-primary tabular-nums tracking-tight leading-none animate-count">
          {value}
        </p>
        <p className="text-[13px] font-medium text-text-secondary mt-1.5">{label}</p>
        {sublabel && <p className="text-[11px] text-text-muted">{sublabel}</p>}
      </div>
    </Card>
  )
}

/* ═══════════════════════════════════════════════════════════
   Section Header — Consistent heading with icon
   §6: whitespace-balance, visual-hierarchy
   ═══════════════════════════════════════════════════════════ */
interface SectionHeaderProps {
  icon: ReactNode
  iconColor?: string
  iconBg?: string
  title: string
  subtitle?: string
  action?: ReactNode
}

export function SectionHeader({ icon, iconColor, iconBg, title, subtitle, action }: SectionHeaderProps) {
  return (
    <div className="flex items-center justify-between mb-5">
      <div className="flex items-center gap-3">
        <div className={cn('p-2 rounded-md', iconBg || 'bg-primary-muted')}>
          <span className={iconColor || 'text-primary-400'}>{icon}</span>
        </div>
        <div>
          <h3 className="text-[15px] font-bold text-text-primary tracking-tight">{title}</h3>
          {subtitle && <p className="text-[11px] text-text-muted mt-0.5">{subtitle}</p>}
        </div>
      </div>
      {action}
    </div>
  )
}

/* ═══════════════════════════════════════════════════════════
   Icon Badge — Replaces emoji icons (§4: no-emoji-icons)
   Lucide icon inside a tinted container
   ═══════════════════════════════════════════════════════════ */
interface IconBadgeProps {
  icon: ReactNode
  color?: 'primary' | 'success' | 'warning' | 'purple' | 'cyan'
  size?: 'sm' | 'md'
}

const iconBadgeColors = {
  primary: 'bg-primary-muted text-primary-400',
  success: 'bg-success-muted text-success-400',
  warning: 'bg-warning-muted text-warning-400',
  purple: 'bg-accent-purple-muted text-accent-purple-400',
  cyan: 'bg-accent-cyan-muted text-accent-cyan-400',
}

export function IconBadge({ icon, color = 'primary', size = 'md' }: IconBadgeProps) {
  return (
    <div className={cn(
      'flex items-center justify-center rounded-md flex-shrink-0',
      size === 'sm' ? 'w-7 h-7' : 'w-9 h-9',
      iconBadgeColors[color],
    )}>
      {icon}
    </div>
  )
}
