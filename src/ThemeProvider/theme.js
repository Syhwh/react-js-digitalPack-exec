export const theme = {
  breakpoints: ['40em', '52em', '64em'],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fonts: {
    body: 'Roboto, "Helvetica Neue", sans-serif',
    heading: 'inherit',
  },
  fontSizes: [10, 12, 14, 16, 18, 20, 24],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  colors: {
    text: '#000',
    background: '#FCF9EC',
    primary: '#113034',
    secondary: '#88979A',
    muted: '#EAE4CE',
  },
  text: {
    heading: {
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
    },
    subHeading: {
      fontFamily: 'heading',
      letterSpacing: '0.18em',
    },
  },
  styles: {
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
    },
    h1: {
      variant: 'text.heading',
    },
    h2: {
      variant: 'text.subHeading',
      fontSize: 1,
    },
    h3: {
      variant: 'text.heading',
      fontSize: 3,
    },
  },
};
