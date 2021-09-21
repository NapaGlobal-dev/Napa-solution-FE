import ENLayout from 'components/en/layout';
import { Route, Switch } from 'react-router';
import routes from 'utils/routes';
import './_app.module.css';

const ENApp = () => {
  return (
    <ENLayout>
      <Switch>
        {routes['EN'].map((route, index) =>
          route.isDynamic ? (
            <Route
              path={route.path}
              render={(props) => <route.component {...props} />}
              key={index}
            />
          ) : (
            <Route path={route.path} exact={route.exact} key={index}>
              <route.component />
            </Route>
          )
        )}
      </Switch>
    </ENLayout>
  );
};

export default ENApp;
