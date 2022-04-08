import axios from "axios";
import { useState, useEffect } from "react";
import Post from "../../components/post/Post";
import PostModel from "../../models/post.model";

const Timeline = () => {
  const [posts, setPosts] = useState<PostModel[]>([]);

  useEffect(() => {
    axios.get("http://localhost:5000/posts").then((response) => {
      setPosts(response.data);
    });
  }, []);

  return (
    <div className='timeline'>
      {posts.map((post) => (
        <Post
          key={post.caption}
          username={post.username}
          caption={post.caption}
          imageUrl={post.imageUrl}
        />
      ))}
    </div>
  );
};

export default Timeline;
