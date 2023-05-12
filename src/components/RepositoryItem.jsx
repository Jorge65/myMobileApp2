import { Text, View, Image, StyleSheet, Pressable } from "react-native";

const styles = StyleSheet.create({
    item: {
      backgroundColor: '#bbbb',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
  });


const RepositoryItem = ({ props }) => {
    //console.log("...", props)
    //console.log("...")    
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
  