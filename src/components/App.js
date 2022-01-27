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
            <Route
              exact
              path="/"
              component={() => <div style={{ height: "2000px" }}>Home</div>}
            />
            <Route path="/services" component={() => <div>Services</div>} />
            <Route
              path="/customSoftware"
              component={() => <div>Custom Software</div>}
            />
            <Route
              path="/mobileapps"
              component={() => <div>Mobile Apps</div>}
            />
            <Route path="/websites" component={() => <div>Websites</div>} />
            <Route
              path="/revolution"
              component={() => <div>The Revoluton</div>}
            />
            <Route path="/about" component={() => <div>About us</div>} />
            <Route path="/contacts" component={() => <div>Contacts Us</div>} />
            <Route path="/estimate" component={() => <div>Estimate</div>} />
          </Switch>
          <Footer />
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
