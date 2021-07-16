import { useState, useEffect } from 'react';
import PostItem from './PostItem';
import './Posts.css';

export default function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/posts', {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((res) => setPosts(res));
  }, []);

  return (
    <div className="posts-container">
      <h3>Latest Posts</h3>
      {posts.map((post) => {
        return (
          <PostItem
            key={post.id}
            title={post.title}
            summary={post.body}
            author={post.author.name}
            date={post.publishedAt}
          />
        );
      })}
    </div>
  );
}
