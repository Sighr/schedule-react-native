import React from 'react';
import {DrawerContentScrollView, DrawerItem, DrawerItemList} from "@react-navigation/drawer";
import {Image, Pressable, StyleSheet, Text} from "react-native";
import {DrawerActions, useNavigation} from "@react-navigation/native";
import {View} from "react-native-web";

const NavigatorContent = (props) => {
    return (
        <DrawerContentScrollView {...props}>
            <Pressable onPress={() => props.navigation.dispatch(DrawerActions.closeDrawer())}>
                <Image style={styles.image}
                       source={require('../../assets/x.png')}
                />
            </Pressable>

            <Image style={styles.photo}
                 source={require('../../assets/photo.png')}
            />
            <Text style={styles.name}>Johanna Dou</Text>
            <Text style={styles.email}>johanna@sfedu.ru</Text>
            <DrawerItemList {...props} labelStyle={styles.text}
                            activeBackgroundColor='#FEEFF0'/>
        </DrawerContentScrollView>
    );
};


const styles = StyleSheet.create({
    text: {
        fontFamily: 'Roboto',
        fontSize: 20,
        color: 'black',
    },

    name: {
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        fontSize: 25,
        color: 'black',
        textAlign: 'center',
    },

    email: {
        fontFamily: 'Roboto',
        fontSize: 16,
        color: 'gray',
        marginBottom: 50,
        textAlign: 'center',
    },

    image: {
        width: 25,
        height: 25,
        marginBottom: 100,
        marginRight: 10,
        marginLeft: 'auto',
    },

    photo: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginLeft: 'auto',
        marginRight: 'auto',
        }

});

export default NavigatorContent;
