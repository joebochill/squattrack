import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';

import LoginScreen from '../components/screens/LoginScreen';
import MainScreen from '../components/screens/MainScreen';
import ProfileScreen from '../components/screens/ProfileScreen';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

import { addListener } from '../utils/redux';

export const AppNavigator = StackNavigator(
  {
    Main: { 
      screen: MainScreen,
      // path: 'Main',
      navigationOptions: {
        title: 'SquaTracK',
        headerStyle:{
          backgroundColor: '#333333'
        },
        headerTitleStyle:{
          //color: 'rgba(255,51,51,1)',
          color: 'rgba(255,255,255,0.7)',
          fontSize: 22
        },
        headerLeft: <MaterialIcons name="menu" 
                        size={28} 
                        style={{ color: 'rgba(255,255,255,0.7)', paddingLeft: 15 }} 
                        onPress={ () => alert('menu')}/>,
        headerRight: <MaterialIcons name="settings" 
                        size={28} 
                        style={{ color: 'rgba(255,255,255,0.7)', paddingRight: 15 }} 
                        onPress={ () => alert('settings')}/>
      }
    },
    Login: { screen: LoginScreen },
    Profile: { screen: ProfileScreen }
  },
  {initialRouteName: 'Main'}
);

class AppWithNavigationState extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    nav: PropTypes.object.isRequired
  };

  render() {
    const { dispatch, nav } = this.props;
    return (
      <AppNavigator
        navigation={addNavigationHelpers({
          dispatch,
          state: nav,
          addListener
        })}
      />
    );
  }
}

const mapStateToProps = state => ({
  nav: state.nav
});

export default connect(mapStateToProps)(AppWithNavigationState);
