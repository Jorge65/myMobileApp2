import { Text, View, Image, StyleSheet, Pressable } from "react-native";

const styles = StyleSheet.create({
    separator: {
      height: 10,
    },
  });


const RepositoryItem = ({ props }) => {
    console.log("...", props)
    return (
        <View style={styles.item}>
        <Text>Full name: {props.fullName}</Text>
        <Text>Description: {props.description}</Text>
        <Text>Language: {props.language}</Text>
        <Text>Starts: {props.stargazersCount}</Text>
        <Text>Forks: {props.forksCount}</Text>
        <Text>Reviews: {props.reviewCount}</Text>
        <Text>Rating: {props.ratingAverage}</Text>
        </View>
    );
}
  
export default RepositoryItem;
  