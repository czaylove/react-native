/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import Transaction from './views/Transaction';
AppRegistry.registerComponent(appName, () => Transaction);
