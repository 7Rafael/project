export const LightColors = {
  primary: '#db7e00',
  background: '#ffffff',
  textPrimary: '#000000',
  textSecondary: '#6a6666',
  backgroundProfile: '#F0F2F2',
  hoverFocus: '#CCCCCC',
  white: '#ffffff',
  error: '#dc3545',
  success: '#28a745',
  border: '#e0e0e0',
  shadow: 'rgba(0, 0, 0, 0.1)',
  primaryLight: '#db7e0020',
  warning: '#db7e00',
};

export const DarkColors = {
  primary: '#ff9500',
  background: '#1a1a1a',
  textPrimary: '#ffffff',
  textSecondary: '#a0a0a0',
  backgroundProfile: '#2a2a2a',
  hoverFocus: '#404040',
  white: '#ffffff',
  error: '#ff4757',
  success: '#2ed573',
  border: '#404040',
  shadow: 'rgba(0, 0, 0, 0.3)',
  primaryLight: '#ff950020',
  warning: '#ff9500',
};

// Dynamic colors that change based on theme
export let Colors = LightColors;

export const updateColors = (isDark: boolean) => {
  Colors = isDark ? DarkColors : LightColors;
};

// Legacy compatibility - keeping these for components that might still reference them
export const getColors = (isDark: boolean) => ({
  ...isDark ? DarkColors : LightColors,
  text: {
    primary: isDark ? '#ffffff' : '#000000',
    secondary: isDark ? '#a0a0a0' : '#6a6666',
    light: isDark ? '#a0a0a0' : '#6a6666',
    white: '#ffffff'
  },
  background: {
    primary: isDark ? '#1a1a1a' : '#ffffff',
    secondary: isDark ? '#2a2a2a' : '#F0F2F2',
    accent: isDark ? '#2a2a2a' : '#F0F2F2'
  },
});

export const Fonts = {
  regular: 'Inter-Regular',
  medium: 'Inter-Medium',
  semiBold: 'Inter-SemiBold',
  bold: 'Inter-Bold',
};

export default Colors;