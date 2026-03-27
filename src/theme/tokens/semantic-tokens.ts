export const semanticTokens = {
  // Domain-specific semantic mappings
  risk: {
    high: '#ef4444',    // error.main
    medium: '#d97706',  // warning.main  
    low: '#16a34a',     // success.main
  },
  
  status: {
    active: '#16a34a',     // success.main
    inactive: '#7a9e8e',   // text.tertiary
    pending: '#d97706',    // warning.main
    error: '#ef4444',      // error.main
  },

  feedback: {
    success: {
      background: '#f0fdf4',
      border: '#bbf7d0',
      text: '#166534',
    },
    warning: {
      background: '#fffbeb',
      border: '#fde68a',
      text: '#92400e',
    },
    error: {
      background: '#fef2f2',
      border: '#fecaca',
      text: '#991b1b',
    },
    info: {
      background: '#eff6ff',
      border: '#bfdbfe',
      text: '#1e40af',
    },
  },

  interaction: {
    hover: {
      subtle: 'rgba(15, 31, 20, 0.04)',
      medium: 'rgba(15, 31, 20, 0.08)',
      strong: 'rgba(15, 31, 20, 0.12)',
    },
    active: {
      subtle: 'rgba(15, 31, 20, 0.08)',
      medium: 'rgba(15, 31, 20, 0.12)',
      strong: 'rgba(15, 31, 20, 0.16)',
    },
    focus: {
      ring: 'rgba(34, 197, 94, 0.5)',
    },
  },
}
