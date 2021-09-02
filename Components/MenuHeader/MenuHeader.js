import React from "react";
import {Appbar, Menu} from "react-native-paper";
import moment from "moment";
import i18next from "i18next";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function MenuHeader (){
    const [visible, setVisible] = React.useState(false);

    const openMenu = () => setVisible(true);

    const closeMenu = () => setVisible(false);
    return(
        <Menu
            visible={visible}
            onDismiss={closeMenu}
            anchor={<Appbar.Action onPress={openMenu} icon="dots-vertical" />}
        >
            <Menu.Item
                onPress={async () => {
                    moment.locale("ru");
                    i18next.changeLanguage("ru");
                    await AsyncStorage.setItem("lang", "ru");
                    closeMenu();
                }}
                title="RU"
            />
            <Menu.Item
                onPress={async () => {
                    moment.locale("kk");
                    i18next.changeLanguage("kk");
                    await AsyncStorage.setItem("lang", "kk");
                    closeMenu();
                }}
                title="KK"
            />
        </Menu>

    )
}
