import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
// import * as Actions from '../../actions/actions.js';

import {Text, View, Button} from 'react-native';

function mapStateToProps(state){
    return {
        username: state.userData.username
    };
}
function mapDispatchToProps(dispatch){
    return{};// return bindActionCreators(Actions, dispatch);
}

class Lessons extends React.Component{
    render(){
        return(
            <View>
                <Text>{`Your Lessons Pending, Completed, + Redeem a Lesson`}</Text>
                <Button onPress={() => this.props.navigation.navigate('Redeem')} title="Redeem Lesson" />
                <Button onPress={() => this.props.navigation.navigate('Lesson')} title="View a Lesson" />
            </View>

        );
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Lessons);