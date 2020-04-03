import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { IntlProvider } from "react-intl";
import createHistory from "history/createBrowserHistory";
import './index.css';
import App from './App';

import configureStore from "./reduxStates/store";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { WebSocketLink } from 'apollo-link-ws';


// const wsLink = new WebSocketLink({
//   uri: `ws://localhost:5000/`,
//   options: {
//     reconnect: true
//   }
// });
// const httpLink = new HttpLink({
//   uri: 'http://localhost:3000/graphql'
// });
// const link = split(
//   // split based on operation type
//   ({ query }) => {
//     const definition = getMainDefinition(query);
//     return (
//       definition.kind === 'OperationDefinition' &&
//       definition.operation === 'subscription'
//     );
//   },
//   wsLink,
//   httpLink,
// );
const client = new ApolloClient({
  uri: "http://localhost:5000/graphQl"
});

const basename = process.env.REACT_APP_ROUTER_BASENAME || "";
const history = createHistory({ basename });

const store = configureStore({}, history);

const rootElement = document.getElementById("root");

// ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render(
  <IntlProvider locale="en">
    <ApolloProvider client={client} >
      <Provider store={store}>
        <App history={history} />
      </Provider>
    </ApolloProvider>
  </IntlProvider>,
  rootElement
);

if (module.hot) {
  module.hot.accept("./App", () => {
    // eslint-disable-next-line global-require
    const NextApp = require("./App").default;
    ReactDOM.render(
      <IntlProvider locale="en">
        <ApolloProvider client={client} >
          <Provider store={store}>
            <NextApp history={history} />
          </Provider>
        </ApolloProvider>
      </IntlProvider>,
      rootElement
    );
  });
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
