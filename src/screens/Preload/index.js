import React, { useEffect } from 'react';
import  { Container, LoadingIcon } from './styles';
import AsyncStorage from '@react-native-community/async-storage';
import { useNavigation } from '@react-navigation/native';
import UserContext from '../../contexts/UserContext';

import Api from '../../Api';

import BarberLogo from '../../assets/barber.svg';

export default () => {
    /* const { dispatch: userDispatch } = useContext(UserContext); */

    const navigation = useNavigation();

    useEffect(()=>{
        const checkToken = async () => {
            const token = await AsyncStorage.getItem('token');
            if(token !==null) {
                //validar o token - como não tem API, aqui fica só a estrutura mesmo
                /* let res = await Api.checkToken(token);
                if(res.token) {
                    await AsyncStorage.setItem('token', json.token);
                
                    userDispatch({
                        type: 'setAvatar',
                        payload:{
                            avatar: json.data.avatar
                        }
                    });
    
                    navigation.reset({
                        routes: [{name: 'MainTab'}]
                    }); 

                } else{
                    navigation.navigate('SignIn');
                } */
                
            } else {
                //manda o cara pro login
                navigation.navigate('SignIn');
            }
        }
        checkToken();
    }, []);


    return (
        <Container>
            <BarberLogo width ="100%" height="160"/>
            <LoadingIcon size="extra-large" color="white"/>
        </Container>
    );


}