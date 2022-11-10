import React from "react";
import { View } from 'react-native'
import Constants from 'expo-constants'
import ReposList from "./RepositoryList";

const Main = () => {
    return (
        <View style={{ marginTop: Constants.statusBarHeight, flexGrow: 1 }}>

            <ReposList />
        </View>
    )
}

export default Main