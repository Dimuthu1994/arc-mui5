import { createTheme } from "@mui/material/styles";

const arcBlue = "#0B72B9";
const arcOrange = "#FFBA60";
export const myTheme = createTheme({
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
  },

  tabContainer: {
    marginLeft: "auto",
  },

  footer: {
    width: "100%",
    backgroundColor: `${arcBlue}`,
  },
});

export default myTheme;
