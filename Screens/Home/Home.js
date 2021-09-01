import React, {useEffect} from "react";
import {FlatList, ScrollView, StyleSheet, Text, View} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import {getUsers, userModule} from "./UserReduc";
import { Button, List } from 'react-native-paper';

export const Home = ({navigation }) => {
    const users = useSelector((state) => state[userModule].data)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getUsers())
    }, [])

    return (
        <ScrollView>
            <View style={styles.container}>
                {users.map(el=> <List.Item
                    key={el.id}
                    title={el.name}
                    onPress={() => navigation.navigate('Details',{
                        name:el.name
                    })}
                    description="Item description"
                    left={props => <List.Icon {...props} icon="folder" />}
                />)}

                <Button icon="camera" mode="contained"
                    onPress={() => navigation.navigate('Details',{
                        name:'Details'
                    })}
                >
                    Go to Details
                </Button>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
});
