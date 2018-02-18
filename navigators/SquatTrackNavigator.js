import React from 'react';
// import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {addNavigationHelpers, StackNavigator, DrawerNavigator, DrawerItems} from 'react-navigation';
import {
    createReduxBoundAddListener,
    createReactNavigationReduxMiddleware,
  } from 'react-navigation-redux-helpers';

import {ScrollView, Text, View} from 'react-native';

import Login from '../components/screens/Login.js';
import YourLessons from '../components/screens/YourLessons.js';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

import CustomDrawer from '../components/CustomDrawer.js'; //This is our custom drawer component

// Primary Navigation is a drawer
export const AppNavigator = DrawerNavigator(
    {
        Login: {
            screen: Login,
            path: '/login',
            navigationOptions: true ? {
                drawerLabel: () => null //prevents this element from showing in the drawer if we are logged in
            } : {}
        },
        // Each page that has several pages that you can step through is rendered as a StackNavigator
        // Stack Navigator gives you a header component for free, we inject an icon there to open the drawer
        // Lessons: {
        //     screen: StackNavigator({
        //         YourLessons: {
        //             screen: YourLessons,
        //             path: '/lessons',
        //             navigationOptions:({ navigation }) => ({
        //                 title: 'Your Lessons',
        //                 headerLeft: <MaterialIcons name="move-to-inbox" size={24} style={{ color: '#e91e63' }} onPress={ () => navigation.navigate('DrawerOpen')}/>
        //             })
        //         }
        //     },{
        //         initialRouteName: 'YourLessons',
        //         contentOptions:{activeTintColor: '#e91e63'}
        //     }),
        //     navigationOptions:{
        //         drawerLabel: 'Your Lessons',
        //         drawerIcon: <MaterialIcons name="move-to-inbox" size={24} style={{ color: '#e91e63' }}/>
        //     }  
        // }
    }, 
    {
        initialRouteName: 'Login',
        contentOptions:{activeTintColor: '#e91e63'},
        contentComponent: CustomDrawer
    }
);

const addListener = createReduxBoundAddListener("root");

class SquatTrackNavigator extends React.Component {
    render(){
        return(
            <AppNavigator 
                navigation={addNavigationHelpers({
                    dispatch: this.props.dispatch,
                    state: this.props.nav,
                    addListener
                })} 
            />
        );
    }
}

const mapStateToProps = state => ({
    nav: state.nav
});

export default connect(mapStateToProps)(SquatTrackNavigator);