import { Link } from "react-router-dom";

import styles from "./styles.module.scss";
import { ROUTES } from "../../../../routes/routeNames";

const CounterPageLayout = () => {
  return (
    <div className={styles.paddingbtn}>
      {
        <Link to={ROUTES.HOME_PAGE}>
          <button>Home page</button>
        </Link>
      }
    </div>
  );
};
export default CounterPageLayout;
