import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from "react-native";

const postData = [
  {
    id: 1,
    username: "Binz Da Poet",
    avatar: require("./assets/post/avatar1.jpg"),
    postText: "Tối mai 20:00 ngày 19/10, MV chính thức của HIT ME UP sẽ được lên sóng, đây là sản phẩm đầu tiên trong EP nhạc tình ca sắp tới, mang tên “Đan Xinh in Love”.\n \nShout out to anh Touliver cùng band Nomovodka đã đồng hành Binz xuyên suốt dự án EP này. Binz hy vọng mọi người sẽ đón nhận Xuân Đan và yêu thương món quà này.\nThank you all. Peace & love. 🌼💩🐷",
    postImage: require("./assets/post/postimage1.jpg"),
    likes: 1279,
    comments: 521,
    shares: 219,
    likeIcon: require("./assets/post/like.png"),
    commentIcon: require("./assets/post/comment.png"),
    shareIcon: require("./assets/post/share.png"),
    isLiked: false,
  },
  {
    id: 2,
    username: "Anh lập trình viên",
    avatar: require("./assets/post/avatar2.jpg"),
    postText: "Test liền, test liền anh ưi 😍",
    postImage: require("./assets/post/postimage2.jpg"),
    likes: 10234,
    comments: 9065,
    shares: 7432,
    likeIcon: require("./assets/post/like.png"),
    commentIcon: require("./assets/post/comment.png"),
    shareIcon: require("./assets/post/share.png"),
    isLiked: false,
  },
  {
    id: 3,
    username: "Hội hâm mộ Marvel",
    avatar: require("./assets/post/avatar3.jpg"),
    postText:
      "Ơ lại thay cast à :v",
    postImage: require("./assets/post/postimage3.jpg"),
    likes: 1700,
    comments: 268,
    shares: 13,
    likeIcon: require("./assets/post/like.png"),
    commentIcon: require("./assets/post/comment.png"),
    shareIcon: require("./assets/post/share.png"),
    isLiked: false,
  },
];

export default function App() {
  const [post, setPost] = useState([...postData]);
  const commentClick = (postID) => {
    const updatedPost = post.map((post) => {
      if (post.id === postID) {
        return {
          ...post,
          comments: post.comments + 1,
        };
      }
      return post;
    });
    setPost(updatedPost);
  };
  const shareClick = (postID) => {
    const updatedPost = post.map((post) => {
      if (post.id === postID) {
        return {
          ...post,
          shares: post.shares + 1,
        };
      }
      return post;
    });
    setPost(updatedPost);
  };
  const likeClick = (postID) => {
    const updatedPost = post.map((post) => {
      if (post.id === postID) {
        return {
          ...post,
          likes: post.likes + (post.isLiked ? -1 : 1),
          isLiked: !post.isLiked,
        };
      }
      return post;
    });
    setPost(updatedPost);
  };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Social Media Feed</Text>
      </View>
      {post.map((index) => (
        <View style={styles.postContainer} key={index.id}>
          <View style={styles.postHeader}>
            <Image style={styles.avatar} source={index.avatar} />
            <Text style={styles.username}>{index.username}</Text>
          </View>

          <View style={styles.imageContainer}>
            <Text style={styles.postText}>{index.postText}</Text>
            <Image style={styles.postImage} source={index.postImage} />
            <View style={styles.statsContainer}>
              <Text style={styles.statsDecor}>{index.likes} Likes</Text>
              <Text style={styles.statsDecor}>{index.comments} Comments</Text>
              <Text style={styles.statsDecor}>{index.shares} Shares</Text>
            </View>
          </View>

          <View style={styles.lineContainer}>
            <View style={styles.line} />
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={() => likeClick(index.id)}
              hitSlop={{ top: 15, bottom: 15, left: 15, right: 15 }}
            >
              <View
                style={[
                  styles.buttonContent,
                  index.isLiked && styles.buttonContentLiked,
                ]}
              >
                <Image
                  style={styles.buttonIcon}
                  source={
                    index.isLiked
                      ? require("./assets/post/like_blue.png")
                      : index.likeIcon
                  }
                />
                <Text
                  style={[
                    styles.buttonText,
                    index.isLiked && styles.buttonTextLiked,
                  ]}
                >
                  Likes
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => commentClick(index.id)}
              hitSlop={{ top: 15, bottom: 15, left: 15, right: 15 }}
            >
              <View style={styles.buttonContent}>
                <Image style={styles.buttonIcon} source={index.commentIcon} />
                <Text style={styles.buttonText}>Comments</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => shareClick(index.id)}
              hitSlop={{ top: 15, bottom: 15, left: 15, right: 15 }}
            >
              <View style={styles.buttonContent}>
                <Image style={styles.buttonIcon} source={index.shareIcon} />
                <Text style={styles.buttonText}>Shares</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  postContainer: {
    flex: 1,
    marginTop: 20,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 50,
    margin: 10,
  },
  postHeader: {
    flexDirection: "row",
    alignItems: "center",
  },
  username: {
    fontWeight: "bold",
  },
  postText: {
    marginBottom: 10,
    lineHeight: 20,
  },
  postImage: {
    width: "100%",
    height: undefined,
    resizeMode: "contain",
    borderRadius: 10,
    aspectRatio: 1.33,
  },
  imageContainer: {
    padding: 10,
  },
  statsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
  },
  statsDecor: {
    color: "gray",
    opacity: 0.3,
  },
  lineContainer: {
    padding: 5,
  },
  line: {
    backgroundColor: "gray",
    opacity: 0.3,
    height: 1,
    width: "100%",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  buttonIcon: {
    width: 20,
    height: 20,
  },
  buttonContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  buttonText: {
    marginLeft: 5,
    fontWeight: "bold",
  },
  buttonContentLiked: {
    flexDirection: "row",
    alignItems: "center",
  },

  buttonTextLiked: {
    marginLeft: 5,
    fontWeight: "bold",
    color: "blue",
  },

  header: {
    backgroundColor: "#0084FF", 
    padding: 40, 
    alignItems: "center", 
  },
  headerText: {
    color: "white", 
    fontSize: 20, 
    fontWeight: "bold", 
  },
});
