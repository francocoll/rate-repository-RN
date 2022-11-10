import React from "react";
import { FlatList, View, Text } from 'react-native'
import repositories from "../data/repositories";

const ReposList = () => {
    return (
        <FlatList
            data={repositories}
            ItemSeparatorComponent={() => <Text> </Text>}
            renderItem={({ item: repo }) => (
                <View key={repo.id} style={{padding: 20, paddingBottom: 5, paddingTop: 5}}>
                    <Text style={{fontWeight: 'bold', marginBottom: 5}}>Language: {repo.language}</Text>
                    <Text>Fullname: {repo.fullName}</Text>
                    <Text>Description: {repo.description}</Text>
                    <Text>Stars: {repo.stargazersCount}</Text>
                    <Text>Forks: {repo.forksCount}</Text>
                    <Text>Reviews: {repo.reviewCount}</Text>
                    <Text>Rating: {repo.ratingAverage}</Text>
                    
                </View>
            )}
        />
    )
}

export default ReposList