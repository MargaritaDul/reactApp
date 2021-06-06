import { Switch, Route } from "react-router-dom";

import CounterPageContainer from "../pages/CounterPage/containers/CounterPageContainer";
import HomePageContainer from "../pages/HomePage/containers/HomePageContainer";
import HookCounterContainer from "../pages/HookCounter/containers/HookCounterContainer";
import CounterManagerContainer from "../pages/CountersManagerPage/containers/CounterManagerContainer";
import FormPageContainer from "../pages/FormPage/containers/FormPageContainer";
import { ROUTES } from "./routeNames";
import ReduxCountersPageContainer from "../pages/ReduxCounters/containers/ReduxCountersPageContainer";

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
      <Route
        exact
        path={ROUTES.COUNTER_MANAGER_PAGE}
        component={CounterManagerContainer}
      />
      <Route exact path={ROUTES.FORMS} component={FormPageContainer} />
      <Route
        exact
        path={ROUTES.REDUX_COUNTERS_PAGE}
        component={ReduxCountersPageContainer}
      />
    </Switch>
  );
};

export default Routes;
