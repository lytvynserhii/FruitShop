import { View } from 'react-native';
import { Provider } from 'react-redux';

import { NavigationContainer } from '@react-navigation/native';

import { ErrorBoundary } from 'components/ErrorBoundary/ErrorBoundary';

import { store } from 'store/store';

export const App = () => (
  <ErrorBoundary>
    <Provider store={store}>
      <NavigationContainer>
        <View />
      </NavigationContainer>
    </Provider>
  </ErrorBoundary>
);
