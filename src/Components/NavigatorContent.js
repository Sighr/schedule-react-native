import React from 'react';
import {DrawerContentScrollView, DrawerItem, DrawerItemList} from "@react-navigation/drawer";
import {Text} from "react-native";

const NavigatorContent = (props) => {
    return (
        <DrawerContentScrollView {...props}>
            <Text>Здесь должна быть аватарка, но пока её нет, как и авторизации в целом</Text>
            <DrawerItemList {...props} labelStyle={{fontFamily: 'Roboto', fontSize: 30}}
                            activeBackgroundColor='black' activeTintColor='white'/>
        </DrawerContentScrollView>
    );
}

export default NavigatorContent;