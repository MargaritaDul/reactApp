import { Switch, Route } from "react-router-dom";

import CounterPageContainer from "../pages/CounterPage/containers/CounterPageContainer";
import HomePageContainer from "../pages/HomePage/containers/HomePageContainer";
import HookCounterContainer from "../pages/HookCounter/containers/HookCounterContainer";
import { ROUTES } from "./routeNames";

const Routes = () => {
  return (
    <Switch>
      <Route exact path={ROUTES.HOME_PAGE} component={HomePageContainer} />
      <Route
        exact
        path={ROUTES.COUNTER_PAGE}
        component={CounterPageContainer}
      />
      <Route
        exact
        path={ROUTES.HOOK_COUNTER_PAGE}
        component={HookCounterContainer}
      />
    </Switch>
  );
};

export default Routes;
