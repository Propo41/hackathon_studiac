// ----------------------------------------------------------------------

function pxToRem(value) {
  return `${value / 16}rem`;
}

function responsiveFontSizes({ sm, md, lg }) {
  return {
    "@media (min-width:200px)": {
      fontSize: pxToRem(sm),
    },
    "@media (min-width:900px)": {
      fontSize: pxToRem(md),
    },
    "@media (min-width:1200px)": {
      fontSize: pxToRem(lg),
    },
  };
}

const FONT_PRIMARY = "Josefin Sans, sans-serif";

const FONT_WEIGHT_BOLD = 700;
const FONT_WEIGHT_MEDIUM = 500;
const FONT_WEIGHT_REGULAR = 400;
const FONT_WEIGHT_LIGHT = 300;

const FONT_SIZE_EXTRA_SMALL = 14;
const FONT_SIZE_SMALL = 20;
const FONT_SIZE_MEDIUM = 25;
const FONT_SIZE_LARGE = 30;
const FONT_SIZE_EXTRA_LARGE = 35;
const RATIO_SM = 0.75;
const RATIO_MD = 0.9;

const typography = {
  fontFamily: FONT_PRIMARY,
  fontWeightRegular: FONT_WEIGHT_REGULAR,
  fontWeightMedium: FONT_WEIGHT_MEDIUM,
  fontWeightBold: FONT_WEIGHT_BOLD, // for semi bold, use 600
  h1: {
    fontWeight: FONT_WEIGHT_BOLD,
    lineHeight: 80 / 64,
    fontSize: pxToRem(FONT_SIZE_EXTRA_LARGE),
    ...responsiveFontSizes({
      sm: FONT_SIZE_EXTRA_LARGE * RATIO_SM,
      md: FONT_SIZE_EXTRA_LARGE * RATIO_MD,
      lg: FONT_SIZE_EXTRA_LARGE,
    }),
  },
  h2: {
    fontWeight: FONT_WEIGHT_BOLD,
    lineHeight: 64 / 48,
    fontSize: pxToRem(FONT_SIZE_LARGE),
    ...responsiveFontSizes({
      sm: FONT_SIZE_LARGE * RATIO_SM,
      md: FONT_SIZE_LARGE * RATIO_MD,
      lg: FONT_SIZE_LARGE,
    }),
  },
  h3: {
    fontWeight: FONT_WEIGHT_REGULAR,
    lineHeight: 1.5,
    fontSize: pxToRem(FONT_SIZE_SMALL),
    ...responsiveFontSizes({
      sm: FONT_SIZE_SMALL * RATIO_SM,
      md: FONT_SIZE_SMALL * RATIO_MD,
      lg: FONT_SIZE_SMALL,
    }),
  },
  h4: {
    fontWeight: FONT_WEIGHT_BOLD,
    lineHeight: 1.5,
    fontSize: pxToRem(FONT_SIZE_MEDIUM),
    ...responsiveFontSizes({
      sm: FONT_SIZE_MEDIUM * RATIO_SM,
      md: FONT_SIZE_MEDIUM * RATIO_MD,
      lg: FONT_SIZE_MEDIUM,
    }),
  },
  h5: {
    fontWeight: FONT_WEIGHT_REGULAR,
    lineHeight: 1.5,
    fontSize: pxToRem(FONT_SIZE_MEDIUM),
    ...responsiveFontSizes({
      sm: FONT_SIZE_MEDIUM * RATIO_SM,
      md: FONT_SIZE_MEDIUM * RATIO_MD,
      lg: FONT_SIZE_MEDIUM,
    }),
  },
  h6: {
    fontWeight: FONT_WEIGHT_BOLD,
    lineHeight: 28 / 18,
    fontSize: pxToRem(FONT_SIZE_SMALL),
    ...responsiveFontSizes({
      sm: FONT_SIZE_SMALL * RATIO_SM,
      md: FONT_SIZE_SMALL * RATIO_MD,
      lg: FONT_SIZE_SMALL,
    }),
  },
  // used for label texts or navbar
  subtitle1: {
    fontWeight: 600,
    lineHeight: 1.5,
    fontSize: pxToRem(FONT_SIZE_EXTRA_SMALL),
  },
  // unused
  subtitle2: {
    fontWeight: 600,
    lineHeight: 22 / 14,
    fontSize: pxToRem(14),
  },
  body1: {
    fontWeight: FONT_WEIGHT_REGULAR,
    lineHeight: 1.5,
    fontSize: pxToRem(FONT_SIZE_SMALL),
    ...responsiveFontSizes({
      sm: FONT_SIZE_SMALL * RATIO_SM,
      md: FONT_SIZE_SMALL * RATIO_MD,
      lg: FONT_SIZE_SMALL,
    }),
  },
  // unused
  body2: {
    lineHeight: 22 / 14,
    fontSize: pxToRem(14),
  },
  // unused
  caption: {
    lineHeight: 1.5,
    fontSize: pxToRem(12),
  },
  // unused
  overline: {
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pxToRem(12),
    letterSpacing: 1.1,
    textTransform: "uppercase",
  },
  button: {
    fontWeight: FONT_WEIGHT_BOLD,
    lineHeight: 24 / 14,
    fontSize: pxToRem(FONT_SIZE_MEDIUM),
    /* textTransform: "capitalize", */
  },
  buttonDropdown: {
    fontWeight: FONT_WEIGHT_REGULAR,
    lineHeight: 24 / 14,
    fontSize: pxToRem(FONT_SIZE_EXTRA_SMALL),
    /* textTransform: "capitalize", */
  },
};

export default typography;
