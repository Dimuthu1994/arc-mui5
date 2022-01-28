import { createTheme } from "@mui/material/styles";

const arcBlue = "#0B72B9";
const arcOrange = "#FFBA60";
let theme = createTheme();
export const myTheme = createTheme(theme, {
  palette: {
    common: {
      blue: `${arcBlue}`,
      orange: `${arcOrange}`,
    },

    primary: {
      main: `${arcBlue}`,
    },
    secondary: {
      main: `${arcOrange}`,
    },
  },

  typography: {
    tab: {
      fontFamily: "Raleway",
      textTransform: "None",
      fontWeight: "700",
      fontSize: "0.8rem",
    },
    estimateButton: {
      fontFamily: "Pacifico",
      fontSize: "0.8rem",
      textTransform: "none",
    },
    grid: {
      color: "white",
      fontFamily: "Arial",
      fontSize: "0.75rem",
      fontWeight: "bold",
      textDecoration: "none",
    },
    h2: {
      fontFamily: "Raleway",
      color: `${arcBlue}`,
      fontWeight: "700",
      fontSize: "2.5rem",
      lineHeight: "1.5",
    },
  },

  tabContainer: {
    marginLeft: "auto",
  },

  footer: {
    width: "100%",
    backgroundColor: `${arcBlue}`,
    zIndex: 1302,
    position: "relative",
  },
  drawer: {
    backgroundColor: `${arcBlue}`,
  },
  drawerItemEstimate: {
    backgroundColor: `${arcOrange}`,
  },
  appbar: {
    zIndex: [theme.zIndex.modal + 1],
  },
  footerIcons: {
    height: "3em",
    width: "3em",

    [theme.breakpoints.down("sm")]: {
      width: "2em",
      height: "2em",
    },
  },

  animation: {
    maxWidth: "50em",
    minWidth: "21em",
    marginTop: "2em",
    marginLeft: "10%",
  },
});

export default myTheme;
