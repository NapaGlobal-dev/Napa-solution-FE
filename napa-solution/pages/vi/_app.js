import VILayout from 'components/vi/layout';
import { Route, Switch } from 'react-router';
import routes from 'utils/routes';
import './_app.module.css';

const VIApp = () => {
  return (
    <VILayout>
      <Switch>
        {routes['VI'].map(
          (route, index) => (
            // route.isDynamic ? (
            //   <VILayout key={index}>
            //     <Route
            //       path={route.path}
            //       render={(props) => <route.component {...props} />}
            //     />
            //   </VILayout>
            // ) : (
            <Route key={index} path={route.path} exact={route.exact}>
              <route.component />
            </Route>
          )
          // )
        )}
      </Switch>
    </VILayout>
  );
};

export default VIApp;
