import {
  Route,
  Switch,
  BrowserRouter as Router,
  Redirect,
} from "react-router-dom";
import ROUTES from "configs/routes";
import Pages from "pages";

function App() {
  return (
    <Router>
      <Switch>
        <Route path={ROUTES.ROOT} exact>
          <Redirect to={ROUTES.HOMEPAGE} />
        </Route>
        <Route path={ROUTES.HOMEPAGE} exact>
          <Pages.Home />
        </Route>
        {/* <Route path={ROUTES.LOGIN} exact>
          <Pages.LoginPage />
        </Route> */}
        <Route path={ROUTES.JOINROOM} exact>
          <Pages.JoinRoom />
        </Route>
        <Route path={ROUTES.GAME}>
          <Pages.Game />
        </Route>
        {/* <Route path={ROUTES.PAGENOTFOUND} exact>
          <Pages.PageNotFound />
        </Route> */}
        <Redirect to={ROUTES.PAGENOTFOUND} />
      </Switch>
    </Router>
  );
}

export default App;
