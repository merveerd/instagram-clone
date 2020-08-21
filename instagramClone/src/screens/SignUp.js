import React, { useState, useEffect } from 'react';
import { Text, View, ScrollView, ActivityIndicator } from 'react-native';

import { Input, Button } from '../components'
import { connect } from 'react-redux';
import { sign } from '../actions';

const SignUp = (props) => {

    const [firstName, setFirstname] = useState('Merve')
    const [lastName, setLastname] = useState('Erdogmus')
    const [email, setEmail] = useState('erdogmus.merve@gmail.com')
    const [password, setPassword] = useState('123456')

    return (
        <ScrollView>
            <View style={{
                alignItems: 'center',
                paddingTop: 30,
                flex: 1
            }}>

                <Input
                    placeholder='firstname'
                    value={firstName}
                    onChangeText={(value) => setFirstname(value)}
                />

                <Input
                    placeholder='lastname'
                    value={lastName}
                    onChangeText={(value) => setLastname(value)}
                />

                <Input
                    placeholder='email'
                    value={email}
                    onChangeText={(value) => setEmail(value)}
                />

                <Input
                    placeholder='password'
                    value={password}
                    onChangeText={(value) => setPassword(value)}
                    secureTextEntry
                />

                <Button
                    text={'Sign Up'}
                    loading={props.loading}
                    style={{ height: 40 }}
                    onPress={() => {
                        const params = {
                            email,
                            password,
                            firstName,
                            lastName
                        } 
                      props.sign(params, 'signUp')
                    }}
                />

            </View>
        </ScrollView>
    )
}


const mapStateToProps = ({ authResponse }) => {
    const { user } = authResponse;
    return { user };
};

export default connect(mapStateToProps, { sign })(SignUp);
