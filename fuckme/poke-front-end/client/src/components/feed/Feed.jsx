import "./feed.css";
import { useState, useEffect } from "react";
import Share from "../share/Share";
import Post from "../post/Post";
// import {Posts} from "../../dummyData"
///Fetch posts
export default function Feed() {
  const [allPosts, setAllPosts] = useState([]);

  const addPost = (newPost) => {
    setAllPosts([...allPosts, newPost]);
  };


  useEffect(() => {
    fetch("/posts")
      .then((response) => response.json())
      .then((allPosts) => {
        setAllPosts(allPosts);
      });
  }, []);


  const handleDelete = (deletedPost) => {
    fetch(`/posts/${deletedPost.id}`, {
      method: "Delete",
      headers: { "Content-Type": "application/json" },
    }).then(() => {
      const updatedPosts = allPosts.filter((post) => post.id !== deletedPost.id);
      setAllPosts(updatedPosts);
    });
  };
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share addPost={addPost}/>
        {allPosts.slice(0).reverse().map((post) => (
          <Post key={post.id}  post={post} handleDelete={handleDelete} allPosts={allPosts}  addPost={addPost} />
          
        ))}
      </div>
    </div>
  );
}
