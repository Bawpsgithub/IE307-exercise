import React, {useState} from 'react';
import { Text, View, StyleSheet, Image, Button, TouchableOpacity, ScrollView } from 'react-native';
import Header from './components/Header'
import Post from './components/Post'
// 20520541 - Ngô Nhật Huy
const postsData = [
  {
    id: 1,
    avatar: 'https://scontent.fsgn5-5.fna.fbcdn.net/v/t39.30808-6/398034239_1016369333185736_4061647672676513040_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=5f2048&_nc_ohc=gY02-XK8U7UAX_0HghE&_nc_ht=scontent.fsgn5-5.fna&oh=00_AfCJyl7GnxKA2hjC2S1e8BxPkHHsr239ftDin9o09Oo33A&oe=654F6B7A',
    username: "Binz Da Poet",
    text: "Tối mai 20:00 ngày 19/10, MV chính thức của HIT ME UP sẽ được lên sóng, đây là sản phẩm đầu tiên trong EP nhạc tình ca sắp tới, mang tên “Đan Xinh in Love”.\n \nShout out to anh Touliver cùng band Nomovodka đã đồng hành Binz xuyên suốt dự án EP này. Binz hy vọng mọi người sẽ đón nhận Xuân Đan và yêu thương món quà này.\nThank you all. Peace & love. 🌼💩🐷",
    image: 'https://scontent.fsgn5-9.fna.fbcdn.net/v/t39.30808-6/393487488_1008151137340889_8600113158686503382_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=KCAUqUyNl0AAX_o-mAa&_nc_ht=scontent.fsgn5-9.fna&oh=00_AfABga5zEVTWo3l6Z1Lcp6U4Or4dVWv5VZmi_ZUljd6Pzw&oe=654F69E3',
    likes: 1279,
    comments: 521,
    shares: 219,
  },
  {
    id: 2,
    avatar: 'https://scontent.fsgn5-8.fna.fbcdn.net/v/t39.30808-6/386734808_856594939167559_2719593831440199357_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=LuEf3vS4daIAX-qZ5Ve&_nc_ht=scontent.fsgn5-8.fna&oh=00_AfBbNF6dDdcw6DrhCcOiUx1ztWdZyQeVB4hnJG9_NcSCRg&oe=6550BD1B',
    username: "Anh lập trình viên",
    text: "Test liền, test liền anh ưi 😍",
    image: 'https://scontent.fsgn5-15.fna.fbcdn.net/v/t39.30808-6/385074145_854200069407046_3894686873770571847_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=g7hYcqgCdtoAX-Ma2YI&_nc_ht=scontent.fsgn5-15.fna&oh=00_AfChCIIiqffTWOPxdCmTP7LZONiynl7LLIPPewT2au1nlA&oe=6550F0D7',
    likes: 10234,
    comments: 9065,
    shares: 7432,
  },
  {
    id: 3,
    avatar: 'https://scontent.fsgn5-5.fna.fbcdn.net/v/t39.30808-6/399334504_727936106044394_8445206654286392176_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=5f2048&_nc_ohc=vXYw-Z3gnR4AX9sjRKe&_nc_ht=scontent.fsgn5-5.fna&oh=00_AfBgExKQkYuZ-dHzkn2lt0Tz_imPs8oCP6KGd4SlJqeIrA&oe=65500B95',
    username: "Hội hâm mộ Marvel",
    text: "Ơ lại thay cast à :v",
    image: 'https://scontent.fsgn5-10.fna.fbcdn.net/v/t39.30808-6/391583196_716322177205787_6331359114269164578_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=iR84OZxsN0oAX_M8pqm&_nc_ht=scontent.fsgn5-10.fna&oh=00_AfCxTqQoaHYn12r5B_OlniMGJgrKgr7TOD4MYI_WZ95chw&oe=654FD2C3',
    likes: 1700,
    comments: 268,
    shares: 13,
  },
];

export default function App() {
  const [posts, setPosts] = useState([...postsData]);

  function handleOnLikeClick(postId) {
    const updatedPosts = posts.map(post => {
      if (post.id === postId) {
        return {
          ...post,
          likes: post.liked ? post.likes - 1 : post.likes + 1,
          liked: !post.liked,
        };
      }
      return post;
    });

    setPosts(updatedPosts);
  }
// 20520541 - Ngô Nhật Huy
  function handleOnCommentClick(postId) {
    const updatedPosts = posts.map(post => {
      if (post.id === postId) {
        return {
          ...post,
          comments: post.comments + 1,
        }
      }
      return post;
    });

    setPosts(updatedPosts);
  }

  function handleOnShareClick(postId) {
    const updatedPosts = posts.map(post => {
      if (post.id === postId) {
        return {
          ...post,
          shares: post.shares + 1,
        }
      }
      return post;
    });

    setPosts(updatedPosts);
  }

  return (
    <ScrollView style={styles.container}>
      <Header />
      <View style={styles.feed}>
      {posts.map(post => (
        <Post key={post.id}
          post = {post}
          handleOnLikeClick = {handleOnLikeClick}
          handleOnCommentClick = {handleOnCommentClick}
          handleOnShareClick = {handleOnShareClick}
        />
      ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    backgroundColor: '#ccc',
  },
  feed: {
    flex: 1,
    marginHorizontal: 10,
  },
  
});