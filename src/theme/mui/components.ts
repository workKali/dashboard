import { buttonTokens, cardTokens, tooltipTokens } from '../tokens'

export const muiComponentOverrides = {
  MuiButton: {
    styleOverrides: {
      root: {
        textTransform: 'none',
        fontFamily: "'Poppins', sans-serif",
        borderRadius: '8px',
        fontWeight: 600,
        transition: 'all 0.15s ease-in-out',
        fontSize: '10px',
      },
    },
    variants: [
      {
        props: { variant: 'appExport' } as any,
        style: buttonTokens.appExport,
      },
      {
        props: { variant: 'appToggle' } as any,
        style: buttonTokens.appToggle,
      },
      {
        props: { variant: 'appAction' } as any,
        style: buttonTokens.appAction,
      },
      {
        props: { variant: 'appPill' } as any,
        style: buttonTokens.appPill,
      },
      {
        props: { variant: 'appFilter' } as any,
        style: buttonTokens.appFilter,
      },
      {
        props: { variant: 'appModal' } as any,
        style: buttonTokens.appModal,
      },
      {
        props: { variant: 'appInline' } as any,
        style: buttonTokens.appInline,
      },
      {
        props: { variant: 'appPrimary' } as any,
        style: buttonTokens.appPrimary,
      },
      {
        props: { variant: 'appNavigation' } as any,
        style: buttonTokens.appNavigation,
      },
      {
        props: { variant: 'appDrilldown' } as any,
        style: buttonTokens.appDrilldown,
      },
      {
        props: { variant: 'appClose' } as any,
        style: buttonTokens.appClose,
      },
    ],
  },
  MuiCard: {
    styleOverrides: {
      root: {
        ...cardTokens.default,
      },
    },
  },
  MuiTooltip: {
    styleOverrides: {
      tooltip: {
        ...tooltipTokens.default,
      },
    },
  },
}
