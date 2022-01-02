import React,{useState, useEffect} from 'react';
import SelectedPost from './SelectedPost';
import axios from 'axios';
import PostList from './PostList';

const App = () => {
  const[selectedPost, setSelectedPost] = useState(null);
  const[selectedComments, setSelectedComments] = useState([]);
  const[posts, setPosts] = useState([]);

  useEffect(() => {
    //console.log('i hit use effect');
    const getPosts = async () => {
      //console.log('i am inside get posts');
      const posts = await axios.get("http://localhost:5000/api/v1/consumer/fetch/posts");
      setPosts(posts.data);
      //console.log(posts);
      onPostSelect(posts.data[0]);
    }
    getPosts();
  }, []);

  const onPostSelect = (post) => {
    //console.log(post);
    setSelectedPost(post);
    const getComments = async(post) => {
      const comments = await axios.get(`http://localhost:5000/api/v1/consumer/fetch/comments/${post._id}`);
      setSelectedComments(comments.data);
    }
    getComments(post);
  }

  const isLoading = selectedPost == null ? true : false;
  // || posts.length === 0 

  return (
    <div className = "ui container">
        <div className = "ui grid">
          <div className = "ui row">
            <div className = "eleven wide column">
              {
                isLoading ? <h1> Loading </h1> : <SelectedPost selectedPost = {selectedPost} comments = {selectedComments} />
              }
            </div>
            <div className = "five wide column">
              <PostList 
                posts = {posts}
                onPostSelect = {onPostSelect}
              />
            </div>
          </div>
        </div>
      </div>
  )
}

export default App;