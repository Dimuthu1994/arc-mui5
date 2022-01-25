import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import myTheme from "./ui/Theme";
import Header from "./ui/Header";

function App() {
  return (
    <>
      <ThemeProvider theme={myTheme}>
        <CssBaseline />
        <Header /> Hellooooo
      </ThemeProvider>
    </>
  );
}

export default App;
