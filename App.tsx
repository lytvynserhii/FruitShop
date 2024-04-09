import { View } from 'react-native';
import { Provider } from 'react-redux';

import { ErrorBoundary } from 'components/ErrorBoundary/ErrorBoundary';

import { store } from 'store/store';

export const App = () => (
  <ErrorBoundary>
    <Provider store={store}>
      <View />
    </Provider>
  </ErrorBoundary>
);
