import { ThemeProps } from '..';

export const getLightTheme = (): ThemeProps => {
  return {
    screens: {
      sMobile: '640px',
      mobile: '768px',
      tablet: '1024px',
      desktop: '1280px',
      lgDesktop: '1536px',
    },
    typography: {
      btn: {
        xs: '12px',
        sm: '14px',
        base: '14px',
        ml: '14px',
        lg: '14px',
        xl: '16px',
        lineHeight: {
          xs: '16px',
          sm: '20px',
          base: '20px',
          ml: '20px',
          lg: '20px',
          xl: '28px',
        },
      },
      fontFamily: {
        serif: 'serif',
        sansSerif: 'sans-serif',
        monospace: 'monospace',
        primaryHeader: 'helveticaNeue',
        secondaryHeader: 'georgia',
        tertiaryHeader: 'cambria',
        quaternaryHeader: 'roboto',
        lead: 'arial',
        body: 'georgia',
        subtext: 'roboto',
        cambria: 'cambria',
        georgia: 'georgia',
        arial: 'arial',
        helveticaNeue: 'helveticaNeue',
        roboto: 'roboto',
        courierNew: 'courierNew',
        menlo: 'menlo',
        monaco: 'monaco',
      },
      size: {
        xs: '12px',
        sm: '14px',
        base: '16px',
        lg: '18px',
        xl: '20px',
        xxl: '24px',
        xxxl: '30px',
        ivxl: '36px',
        vxl: '48px',
      },
      lineHeight: {
        xs: '12px',
        sm: '16px',
        base: '24px',
        lg: '28px',
        xl: '28px',
        xxl: '32px',
        xxxl: '36px',
        ivxl: '40px',
        vxl: '60px',
      },
      weight: {
        light: '300',
        base: '400',
        md: '500',
        semibold: '600',
        bold: '700',
      },
    },
    colors: {
      bglvl0: '#f8fafc',
      // base colors
      primary: '#4f46e5',
      primeAccent: '#726BE7',
      secondary: '#23B5D3',
      secondAccent: '#2B6CB0',
      tertiary: '#F1F5F9',
      tertAccent: '#C3BDDA',
      quaternary: '#6B7280',
      quatAccent: '#8E97AB',
      gradient:
        'linear-gradient(90deg, rgba(147,51,234,1) 10%, rgba(79,70,229,1) 58%, rgba(37,99,235,1) 87%)',
      gradAccent:
        'linear-gradient(90deg, rgba(168,85,247,1) 10%, rgba(59,130,246,1) 87%)',
      transparent: 'transparent',
      trAccent: 'rgba(114, 107, 231, 0.4)',

      // util colors
      confirm: '#34D399',
      cfmAccent: '#45E7AC',
      destroy: '#CC3340',
      dstrAccent: '#A01D2E',
      warning: '#F59E0B',
      warnAccent: '#C05621',

      // text colors
      font: {
        primary: '#0f172a',
        secondary: '#334155',
        tertiary: '#64748b',
        contrast: 'white',
        interactive: '#2F57D0',
        heading: {
          primary: '#020617',
          secondary: '#0f172a',
          tertiary: '#334155',
          quaternary: '#64748b',
        },
        btn: {
          primary: 'white',
          primeAccent: 'white',
          secondary: '#23B5D',
          secondAccent: 'white',
          tertiary: '#111827',
          tertAccent: '#111827',
          quaternary: 'white',
          quatAccent: '#111827',
          gradient: 'white',
          gradAccent: 'white',
          transparent: '#111827',
          trAccent: '#111827',

          // util colors
          confirm: '#111827',
          cfmAccent: '#111827',
          destroy: 'white',
          dstrAccent: 'white',
          warning: '#111827',
          warnAccent: '#111827',
        },
      },
    },
    borderRadius: {
      none: '0px',
      sm: '4px',
      base: '6px',
      lg: '8px',
      round: '9999px',
    },
    boxShadow: {
      none: 'none',
      sm: '0px 4px 8px rgba(0, 0, 0, 0.1)',
      lg: '2px 4px 16px  rgba(0,0,0,0.2)',
      inset: 'inset 0px 2px 4px rgba(0, 0, 0, 0.05)',
    },
  };
};
