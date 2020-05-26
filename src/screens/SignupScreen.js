import React, {useState, useContext} from 'react';
import {View, StyleSheet} from 'react-native';
import { Text, Input, Button } from 'react-native-elements'; //This automatically gives styling for basic things in react
import Spacer from '../components/Spacer';
import {Context as AuthContext} from '../context/AuthContext';

const SignupScreen = ({ navigation }) => {
    const {state, signup} = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')


    return (
    <View style={styles.container}>
    <Spacer>
        <Text h3>Sign Up for Tracker</Text>
    </Spacer>
        <Input 
            label="Email" 
            value={email} 
            onChangeText={setEmail}
            autoCapitalize="none"
            autoCorrect={false}
            />
    <Spacer />
        <Input 
            secureTextEntry
            label="Password" 
            value={password} 
            onChangeText={setPassword}
            autoCapitalize="none"
            autoCorrect={false}
            />
        {state.errorMessage ? <Text style={styles.errorMessage}>{state.errorMessage}</Text> : null}
    <Spacer>
        <Button 
            title="Sign Up"
            onPress={() => signup({email, password})}
            />
    </Spacer>

    </View>
    )
}

SignupScreen.navigationOptions = () => {
    return {
        header: null
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1, //This makes it so the <View> fills all vertical space available
        justifyContent:'center', 
        marginBottom: 250 // this makes it so the flex: 1 end 250 px before the bottom of screen
    },
    errorMessage: {
        fontSize: 16,
        color: 'red',
        marginLeft: 15,
    }
})

export default SignupScreen;