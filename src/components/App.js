import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import myTheme from "./ui/Theme";
import Header from "./ui/Header";
import Footer from "./ui/Footer";

function App() {
  return (
    <>
      <ThemeProvider theme={myTheme}>
        <BrowserRouter>
          <CssBaseline />
          <Header />
          <Switch>
            <Route exact path="/" component={() => <div>Home</div>} />
            <Route
              exact
              path="/services"
              component={() => <div>Services</div>}
            />
            <Route
              exact
              path="/customSoftware"
              component={() => <div>Custom Software</div>}
            />
            <Route
              exact
              path="/mobileapps"
              component={() => <div>Mobile Apps</div>}
            />
            <Route
              exact
              path="/websites"
              component={() => <div>Websites</div>}
            />
            <Route
              exact
              path="/revolution"
              component={() => <div>The Revoluton</div>}
            />
            <Route exact path="/about" component={() => <div>About us</div>} />
            <Route
              exact
              path="/contacts"
              component={() => <div>Contacts Us</div>}
            />
            <Route
              exact
              path="/estimate"
              component={() => <div>Estimate</div>}
            />
          </Switch>
        </BrowserRouter>
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
