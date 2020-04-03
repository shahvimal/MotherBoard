import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { routerMiddleware } from "react-router-redux";
import rootReducer from "./reducers";

export default function configureStore(initialState, history) {
  const middlewares = [thunk, routerMiddleware(history)];
  const storeEnhancers = [];

  const isDev = process.env.NODE_ENV !== "production";
  if (isDev) {
    // eslint-disable-next-line global-require
    // const DevTools = require("../components/ReduxDevTools").default;

    // allow devs to use their own plugged in browser redux dev tool instead of the builtin component
    // const devToolsEnhancer = window.devToolsExtension()
    // storeEnhancers.push(devToolsEnhancer);
  }

  const middlewareEnhancer = applyMiddleware(...middlewares);
  storeEnhancers.unshift(middlewareEnhancer);

  const store = createStore(
    rootReducer,
    initialState,
    compose(...storeEnhancers)
  );

  if (isDev && module.hot && module.hot.accept) {
    module.hot.accept("./reducers", () => {
      // eslint-disable-next-line global-require
      const nextRootReducer = require("./reducers").default;

      store.replaceReducer(nextRootReducer);
    });
  }
  return store;
}
