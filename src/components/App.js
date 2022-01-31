import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import ServicesPage from "./Pages/ServicesPage";
import CustomSoftwarePage from "./Pages/CustomSoftwarePage";
import myTheme from "./ui/Theme";
import Header from "./ui/Header";
import Footer from "./ui/Footer";
import { useState } from "react";

function App() {
  const [value, setValue] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <>
      <ThemeProvider theme={myTheme}>
        <BrowserRouter>
          <CssBaseline />
          <Header
            value={value}
            setValue={setValue}
            selectedIndex={selectedIndex}
            setSelectedIndex={setSelectedIndex}
          />
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => (
                <LandingPage
                  {...props}
                  setValue={setValue}
                  setSelectedIndex={setSelectedIndex}
                />
              )}
            />
            <Route
              path="/services"
              render={(props) => (
                <ServicesPage
                  {...props}
                  setValue={setValue}
                  setSelectedIndex={setSelectedIndex}
                />
              )}
            />
            <Route
              path="/customSoftware"
              render={(props) => (
                <CustomSoftwarePage
                  {...props}
                  setValue={setValue}
                  setSelectedIndex={setSelectedIndex}
                />
              )}
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
          <Footer setValue={setValue} setSelectedIndex={setSelectedIndex} />
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
