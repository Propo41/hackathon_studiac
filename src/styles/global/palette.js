import { alpha } from "@material-ui/core/styles";

// ----------------------------------------------------------------------

function createGradient(color1, color2) {
  return `linear-gradient(to bottom, ${color1}, ${color2})`;
}

// SETUP COLORS
const GREY = {
  0: "#FFFFFF", // white
  100: "#E8E9EB", // lightash
  200: "#969696", // darkash
  300: "#484848", // black
  400: "#C4CDD5",
  500: "#919EAB",
  600: "#637381",
  700: "#454F5B",
  800: "#212B36",
  900: "#161C24",
  500_8: alpha("#919EAB", 0.08),
  500_12: alpha("#919EAB", 0.12),
  500_16: alpha("#919EAB", 0.16),
  500_24: alpha("#919EAB", 0.24),
  500_32: alpha("#919EAB", 0.32),
  500_48: alpha("#919EAB", 0.48),
  500_56: alpha("#919EAB", 0.56),
  500_80: alpha("#919EAB", 0.8),
};

const PRIMARY = {
  lighter: "#A5B5F8",
  light: "#4159C0",
  main: "#162874", // navyblue
  dark: "#484848", // black
  darker: "#031664",
  contrastText: "#fff",
};
const SECONDARY = {
  lighter: "#D6E4FF",
  light: "#FFD27A", // orange-light
  main: "#FFC758", // orange
  dark: "#1939B7",
  darker: "#091A7A",
  contrastText: "#fff",
};
const INFO = {
  lighter: "#D0F2FF",
  light: "#74CAFF",
  main: "#1890FF",
  dark: "#0C53B7",
  darker: "#04297A",
  contrastText: "#fff",
};
const SUCCESS = {
  lighter: "#00EDAB",
  light: "#50E2BA", // light-gree
  main: "#00C890", // green
  dark: "#00A678",
  darker: "#008963",
  contrastText: GREY[800],
};
const WARNING = {
  lighter: "#FFF7CD",
  light: "#FFE16A",
  main: "#FFC107",
  dark: "#B78103",
  darker: "#7A4F01",
  contrastText: GREY[800],
};
const ERROR = {
  lighter: "#FFE7D9",
  light: "#FFA48D",
  main: "#FF4842",
  dark: "#B72136",
  darker: "#7A0C2E",
  contrastText: "#fff",
};

const GRADIENTS = {
  primary:
    "radial-gradient(114.63% 1595.82% at 20.62% 18.55%, #26F5BC 21.11%, #66CEF7 57.86%)",
  info: createGradient(INFO.light, INFO.main),
  success: createGradient(SUCCESS.light, SUCCESS.main),
  warning: createGradient(WARNING.light, WARNING.main),
  error: createGradient(ERROR.light, ERROR.main),
};

const palette = {
  common: { black: "#484848", white: "#fff" },
  white: "#fff",
  ash: "#F3F3F3",
  darkash: "#969696",
  purple: "#54499E",
  lightash: "#E8E9EB",
  lightash2: "#F5F7FA",
  red: "#D67979",
  navyblue: "#162874", // navyblue
  black: "#484848", // black
  orangelight: "#FFD27A", // orange-light
  orange: "#FFC758", // orange
  lightgreen: "#50E2BA", // light-gree
  green: "#00C890", // green
  softgreen: "#C8FACD",
  softblue: "#D0F2FF",
  softyellow: "#FFF7CD",
  primary: { ...PRIMARY },
  secondary: { ...SECONDARY },
  info: { ...INFO },
  success: { ...SUCCESS },
  warning: { ...WARNING },
  error: { ...ERROR },
  grey: GREY,
  gradients: GRADIENTS,
  divider: GREY[500_24],
  // primary: black
  // secondary: darkash
  text: { primary: "#484848", secondary: "#969696", disabled: "#E8E9EB" },
  background: { paper: "#fff", default: "#fff", neutral: GREY[200] },
  action: {
    active: GREY[600],
    hover: GREY[500_8],
    selected: GREY[500_16],
    disabled: GREY[500_80],
    disabledBackground: GREY[500_24],
    focus: GREY[500_24],
    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
  },
};

export default palette;
