import { Provider } from 'react-redux';

import { NavigationContainer } from '@react-navigation/native';

import { ErrorBoundary } from 'components/ErrorBoundary/ErrorBoundary';

import { AppStack as AppStackNavigator } from 'navigation/Navigation';
import { store } from 'store/store';

export const App = () => (
  <ErrorBoundary>
    <Provider store={store}>
      <NavigationContainer>
        <AppStackNavigator />
      </NavigationContainer>
    </Provider>
  </ErrorBoundary>
);
