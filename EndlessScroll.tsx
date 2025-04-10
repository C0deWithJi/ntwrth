import React, { useState } from 'react';
import { FlatList, ActivityIndicator, View, Text, StyleSheet } from 'react-native';

export default function EndlessScroll({ data, fetchMoreData, renderItem }) {
    const [loading, setLoading] = useState(false);
    
    const handleLoadMore = async () => {
        if (!loading) {
        setLoading(true);
        await fetchMoreData();
        setLoading(false);
        }
    };
    
    return (
        <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.5}
        ListFooterComponent={
            loading ? <ActivityIndicator size="large" color="#FF6F61" /> : null
        } />
    );
}

const styles = StyleSheet.create({
    loader: {
        marginVertical: 20,
    },
});