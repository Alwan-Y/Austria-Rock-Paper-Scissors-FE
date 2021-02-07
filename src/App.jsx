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
        <Route path={ROUTES.FEEDBACK} exact>
          <Pages.Feedback />
        </Route>
        <Route path={ROUTES.REGISTER} exact>
          <Pages.Register />
        </Route>
        <Route path={ROUTES.REGISTERBIO} exact>
          <Pages.RegisterBio />
        </Route>
        <Route path={ROUTES.LOGIN} exact>
          <Pages.Login />
        </Route>
        <Route path={ROUTES.JOINROOM} exact>
          <Pages.JoinRoom />
        </Route>
        <Route path={ROUTES.GAME}>
          <Pages.Game />
        </Route>
        <Route path={ROUTES.PAGENOTFOUND} exact>
          <Pages.PageNotFound />
<<<<<<< HEAD
=======
        </Route> */}
        <Route path={ROUTES.FORGOTPASSWORD} exact>
          <Pages.ForgotPassword />
>>>>>>> secces create forgot password
        </Route>
        <Redirect to={ROUTES.PAGENOTFOUND} />
      </Switch>
    </Router>
  );
}

export default App;
