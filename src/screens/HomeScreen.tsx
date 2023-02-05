import type { FC } from 'react';
import { Button, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ROUTES, useRootStackNavigation } from '../navigation';

export const HomeScreen: FC = () => {
  const navigation = useRootStackNavigation();

  const navigateToSimpleModule = () => {
    navigation.navigate(ROUTES.SIMPLE_MODULE);
  };

  const navigateToSimpleModuleClassic = () => {
    navigation.navigate(ROUTES.SIMPLE_MODULE, { isClassic: true });
  };

  const navigateToSimpleUIModule = () => {
    navigation.navigate(ROUTES.SIMPLE_UI_MODULE);
  };

  const navigateToSimpleUIModuleClassic = () => {
    navigation.navigate(ROUTES.SIMPLE_UI_MODULE, { isClassic: true });
  };

  const navigateToSimpleEventModule = () => {
    navigation.navigate(ROUTES.SIMPLE_EVENT_MODULE);
  };

  const navigateToSimpleReactView = () => {
    navigation.navigate(ROUTES.SIMPLE_REACT_VIEW);
  };

  const navigateToSimpleReactViewClassic = () => {
    navigation.navigate(ROUTES.SIMPLE_REACT_VIEW, { isClassic: true });
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <Text style={styles.titleBarText}>Demo</Text>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Bridging tutorial</Text>
        </View>
        <ScrollView contentContainerStyle={styles.bodyContent} style={styles.body}>
          <View style={styles.navigateLink}>
            <Button onPress={navigateToSimpleModule} title="Simple module (Modern)" />
          </View>
          <View style={styles.navigateLink}>
            <Button onPress={navigateToSimpleModuleClassic} title="Simple module (Classic)" />
          </View>
          <View style={styles.navigateLink}>
            <Button onPress={navigateToSimpleUIModule} title="Simple UI module (Modern)" />
          </View>
          <View style={styles.navigateLink}>
            <Button onPress={navigateToSimpleUIModuleClassic} title="Simple UI module (Classic)" />
          </View>
          <View style={styles.navigateLink}>
            <Button onPress={navigateToSimpleEventModule} title="Simple event module (Modern & Classic)" />
          </View>
          <View style={styles.navigateLink}>
            <Button onPress={navigateToSimpleReactView} title="Simple extended React View (Modern)" />
          </View>
          <View style={styles.navigateLink}>
            <Button onPress={navigateToSimpleReactViewClassic} title="Simple extended React View (Classic)" />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  body: {
    alignSelf: 'stretch',
    flex: 1,
  },
  bodyContent: {
    alignItems: 'center',
    alignSelf: 'stretch',
    flexGrow: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  container: {
    alignItems: 'center',
    alignSelf: 'stretch',
    flex: 1,
    justifyContent: 'center',
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 40,
    paddingHorizontal: 20,
  },
  headerText: {
    fontSize: 30,
    fontWeight: 'bold',
    paddingVertical: 20,
    textTransform: 'capitalize',
  },
  navigateLink: {
    alignSelf: 'stretch',
    paddingVertical: 20,
  },
  safeArea: {
    alignSelf: 'stretch',
    flex: 1,
  },
  titleBarText: {
    fontSize: 16,
    fontWeight: 'bold',
    margin: 20,
  },
});
