/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import DrawerNaviagter from './src/Navigation/DrawerNavigation';

AppRegistry.registerComponent(appName, () => DrawerNaviagter);
