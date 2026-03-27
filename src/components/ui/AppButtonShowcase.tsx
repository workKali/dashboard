'use client'
import { AppButton, AppButtonVariant } from './index'

export default function AppButtonShowcase() {
  const variants: AppButtonVariant[] = [
    'appExport',
    'appToggle', 
    'appAction',
    'appPill',
    'appFilter',
    'appModal',
    'appInline',
    'appPrimary',
    'appNavigation',
    'appDrilldown',
    'appClose'
  ]

  return (
    <div className="p-6 space-y-6 bg-background min-h-screen">
      <h1 className="text-xl font-semibold text-primary mb-6">AppButton Variants Showcase</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {variants.map((variant) => (
          <div key={variant} className="bg-surface p-4 rounded-lg border border-border">
            <h3 className="text-sm font-medium text-secondary mb-3">{variant}</h3>
            <div className="space-y-3">
              <AppButton variant={variant}>
                {variant} Button
              </AppButton>
              <AppButton variant={variant} disabled>
                Disabled
              </AppButton>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-surface p-6 rounded-lg border border-border">
        <h2 className="text-lg font-semibold text-primary mb-4">Usage Examples</h2>
        
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <AppButton variant="appExport">Exportar</AppButton>
            <span className="text-sm text-tertiary">Export button style</span>
          </div>

          <div className="flex items-center gap-3">
            <AppButton variant="appToggle">Consultas</AppButton>
            <AppButton variant="appToggle">Monto</AppButton>
            <span className="text-sm text-tertiary">Toggle/tab navigation</span>
          </div>

          <div className="flex items-center gap-3">
            <AppButton variant="appAction">Activar todos</AppButton>
            <AppButton variant="appAction">Ocultar todos</AppButton>
            <span className="text-sm text-tertiary">Action buttons</span>
          </div>

          <div className="flex items-center gap-3">
            <AppButton variant="appModal">Aplicar y cerrar</AppButton>
            <span className="text-sm text-tertiary">Full-width modal button</span>
          </div>

          <div className="flex items-center gap-3">
            <AppButton variant="appNavigation">‹ Anterior</AppButton>
            <AppButton variant="appNavigation">Siguiente ›</AppButton>
            <span className="text-sm text-tertiary">Pagination navigation</span>
          </div>

          <div className="flex items-center gap-3">
            <AppButton variant="appDrilldown">Ver ficha</AppButton>
            <AppButton variant="appDrilldown">↗ Ficha</AppButton>
            <span className="text-sm text-tertiary">Drill-down links</span>
          </div>
        </div>
      </div>
    </div>
  )
}
