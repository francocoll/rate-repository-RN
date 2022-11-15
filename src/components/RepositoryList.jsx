import React from "react";
import { FlatList, Text } from 'react-native'
import repositories from "../data/repositories";
import RepositoryItem from "./RepositoryItem";

const ReposList = () => {
    return (
        <FlatList
            data={repositories}
            ItemSeparatorComponent={() => <Text> </Text>}
            renderItem={({ item: repo }) => (
                <RepositoryItem {...repo} />
            )}
        />
    )
}

export default ReposList