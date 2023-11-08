import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Button from './Button'
// 20520541 - Ngô Nhật Huy
const Post = ({post, handleOnLikeClick, handleOnCommentClick, handleOnShareClick}) => {

  return (
    <View style={styles.post} key={post.id}>
      <View style={styles.postHeader}>
        <Image source={{uri: post.avatar}} style={styles.profileImage} />
        <Text style={styles.text}>{post.username}</Text>
      </View>
      <Text>{post.text}</Text>
      <Image source={{uri: post.image}} style={styles.contentImage} />
      <View style={styles.statContainer}>
        <Text style={{ color: post.liked ? 'blue' : 'black' }}><Text>{post.likes}</Text> Likes</Text>
        <Text><Text>{post.comments}</Text> Comments</Text>
        <Text><Text>{post.shares}</Text> Shares</Text>
      </View>

      <View style={styles.horizontalLine}></View>
      <Button
        post = {post}
        handleOnLikeClick = {handleOnLikeClick}
        handleOnCommentClick = {handleOnCommentClick}
        handleOnShareClick = {handleOnShareClick} 
      />
    </View>
  );
}

export default Post;
// 20520541 - Ngô Nhật Huy
const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  post: {
    flex: 1,
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginTop: 10,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  contentImage: {
    width: '100%',
    height: undefined,
    resizeMode: "contain",
    borderRadius: 10,
    aspectRatio: 1.33,
  },
  statContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  horizontalLine: {
    height: 1,
    backgroundColor: '#ccc',
    marginVertical: 10,
  },
});