import { Component, PropsWithChildren } from 'react';
import { SafeAreaView, Text, View } from 'react-native';

import { ErrorIcon } from 'components/svg/ErrorIcon';

import { styles } from './errorBoundary.styles';
import { ErrorBoundaryState } from './errorBoundary.types';

export class ErrorBoundary extends Component<
  PropsWithChildren<{}>,
  ErrorBoundaryState
> {
  state = {
    hasError: false,
  };
  static getDerivedStateFromError() {
    return {
      hasError: true,
    };
  }

  componentDidCatch(error: Error) {
    console.error(error);
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;

    if (hasError) {
      return (
        <SafeAreaView style={styles.safeAreaView}>
          <View style={styles.container}>
            <ErrorIcon />
            <Text style={styles.title}>
              {'Something went wrong,\nplease restart your application'}
            </Text>
          </View>
        </SafeAreaView>
      );
    }

    return children;
  }
}
