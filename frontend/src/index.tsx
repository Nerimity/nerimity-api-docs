/* @refresh reload */
import { render } from "solid-js/web";
import "./index.css";
import App from "./App.tsx";
import { Route, Router } from "@solidjs/router";
import { ThemeProvider } from "./theme.tsx";

const root = document.getElementById("root");

render(
  () => (
    <ThemeProvider>
      <Router>
        <Route path="/*" component={App} />
      </Router>
    </ThemeProvider>
  ),
  root!
);
