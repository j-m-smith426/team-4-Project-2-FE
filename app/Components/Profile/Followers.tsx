import React from "react";
import { View, Image, Text, ScrollView, StyleSheet, FlatList } from "react-native";

const Followers = () => {
    return(
        <ScrollView>

            <View style={styles.container}>
                <Image
                    style={styles.follower}
                    source={{
                        uri: `https://images.theconversation.com/files/284721/original/file-20190718-116547-1kbpq3t.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop`
                    }}
                />
                <View style={styles.infoContainer}>
                    <Text style={styles.followerName} numberOfLines={1}>@literally anything</Text>
                </View>
            </View>

            <View style={styles.container}>
                <Image
                    style={styles.follower}
                    source={{
                        uri: `https://images.theconversation.com/files/284721/original/file-20190718-116547-1kbpq3t.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop`
                    }}
                />
                <View style={styles.infoContainer}>
                    <Text style={styles.followerName} numberOfLines={1}>@clifford</Text>
                </View>
            </View>

            <View style={styles.container}>
                <Image
                    style={styles.follower}
                    source={{
                        uri: `https://images.theconversation.com/files/284721/original/file-20190718-116547-1kbpq3t.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop`
                    }}
                />
                <View style={styles.infoContainer}>
                    <Text style={styles.followerName} numberOfLines={1}>@follower name</Text>
                </View>
            </View>

            <View style={styles.container}>
                <Image
                    style={styles.follower}
                    source={{
                        uri: `https://images.theconversation.com/files/284721/original/file-20190718-116547-1kbpq3t.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop`
                    }}
                />
                <View style={styles.infoContainer}>
                    <Text style={styles.followerName} numberOfLines={1}>@follower name</Text>
                </View>
            </View>

            <View style={styles.container}>
                <Image
                    style={styles.follower}
                    source={{
                        uri: `https://images.theconversation.com/files/284721/original/file-20190718-116547-1kbpq3t.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop`
                    }}
                />
                <View style={styles.infoContainer}>
                    <Text style={styles.followerName} numberOfLines={1}>@follower name</Text>
                </View>
            </View>

            <View style={styles.container}>
                <Image
                    style={styles.follower}
                    source={{
                        uri: `https://images.theconversation.com/files/284721/original/file-20190718-116547-1kbpq3t.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop`
                    }}
                />
                <View style={styles.infoContainer}>
                    <Text style={styles.followerName} numberOfLines={1}>@follower name</Text>
                </View>
            </View>

            <View style={styles.container}>
                <Image
                    style={styles.follower}
                    source={{
                        uri: `https://images.theconversation.com/files/284721/original/file-20190718-116547-1kbpq3t.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop`
                    }}
                />
                <View style={styles.infoContainer}>
                    <Text style={styles.followerName} numberOfLines={1}>@follower name</Text>
                </View>
            </View>
            
        </ScrollView>
        
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        paddingHorizontal: "5%",
        paddingVertical: "2%",
        //justifyContent: "space-between"
        borderBottomWidth: 1,
        borderBottomColor: "grey",
    },

    follower: {
        width: "22%",
        height: "100%",
        //paddingBottom: "25%",
        borderWidth: 2,
        //borderColor: "grey",
        borderRadius: 80/2,
        resizeMode: 'stretch',
    },

    infoContainer: {
        paddingHorizontal: "5%",
        paddingVertical: "8%",
        flex: 1,
    },

    followerName: {
        fontSize: 18,
        fontStyle: "italic",
        flex: 0.5,
    },
});

export default Followers;