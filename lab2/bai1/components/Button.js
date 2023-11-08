import React from 'react';
import { View, StyleSheet } from 'react-native';
import CustomButton from './CustomButton'
// 20520541 - Ngô Nhật Huy
const InteractiveButtons = ({post, handleOnLikeClick, handleOnCommentClick, handleOnShareClick}) => {

  return (
    <View style={styles.interactiveContainer}>
      <CustomButton
        post = {post}
        style_blue={{ color: post.liked ? 'blue' : '#000' }}
        image = {require('../assets/like.png')}
        text = "Likes"
        handleOnClick = {handleOnLikeClick}
      />
      
      <CustomButton
        post = {post}
        image = {require('../assets/comment.png')}
        text = "Comments"
        handleOnClick = {handleOnCommentClick}
      />
      
      <CustomButton
        post = {post}
        image = {require('../assets/share.png')}
        text = "Shares"
        handleOnClick = {handleOnShareClick}
      />
    </View>
  );
}

export default InteractiveButtons;

const styles = StyleSheet.create({
  interactiveContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});