import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import routes from "./utils/routes";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        {routes.map((route, i) => {
          return (
            <Route
              key={i}
              path={route.path}
              exact={route.exact}
              component={route.component}
            />
          );
        })}
      </Switch>
    </Router>
  );
};

export default App;
