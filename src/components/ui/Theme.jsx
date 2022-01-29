import { createTheme } from "@mui/material/styles";

const arcBlue = "#0B72B9";
const arcOrange = "#ffba60";
const arcGrey = "#868686";

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
      light: "#ffc77f",
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

    h4: {
      fontFamily: "Raleway",
      color: `${arcBlue}`,
      fontWeight: "700",
      fontSize: "1.7rem",
    },

    subtitle1: {
      color: `${arcGrey}`,
      fontWeight: "300",
      fontSize: "1.25rem",
    },

    specialText: {
      fontFamily: "Pacifico",
      color: `${arcOrange}`,
    },

    learnButton: {
      borderColor: theme.palette.common.blue,
      color: theme.palette.common.blue,
      borderWidth: 2,
      textTransform: "none",
      borderRadius: "50px",
      fontFamily: "Roboto",
      fontWeight: "bold",
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
    [theme.breakpoints.down("md")]: {
      maxWidth: "30em",
    },
  },

  buttonContainer: {
    marginTop: "1em",
  },

  heroTextContainer: {
    minWidth: "21.5em",
    marginLeft: "1em",
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
    },
  },

  subtitle: {
    marginBottom: "1em",
  },

  iconService: {
    marginLeft: "2em",
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
    },
  },

  serviceContainer: {
    marginTop: "12em",
    [theme.breakpoints.down("sm")]: {
      padding: "25px",
    },
  },
});

export default myTheme;
