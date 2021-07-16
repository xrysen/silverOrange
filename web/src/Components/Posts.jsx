import { useState, useEffect } from 'react';
import PostItem from './PostItem';
import './Posts.css';
import FullPost from './FullPost';
import Loader from './Loader';

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [postOpen, setPostOpen] = useState(false);
  const [singlePost, setSinglePost] = useState({
    title: '',
    author: '',
    body: '',
    date: '',
  });

  useEffect(() => {
    fetch('http://localhost:4000/posts', {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setPosts(
          res.sort(function (a, b) {
            return (
              new Date(b.publishedAt).getTime() -
              new Date(a.publishedAt).getTime()
            );
          })
        );
        setIsLoaded(true);
      });
  }, []);

  function handleTitleClick(title, author, body, date) {
    setSinglePost({ title, author, body, date });
    setPostOpen(true);
  }

  function closePost() {
    setPostOpen(false);
  }

  function sortByAuthor() {
    const tempPosts = [...posts];
    tempPosts.sort(function (a, b) {
      if (a.author.name < b.author.name) {
        return -1;
      }
      if (a.author.name > b.author.name) {
        return 1;
      }
      return 0;
    });
    setPosts(tempPosts);
  }

  if (!isLoaded) {
    return (
      <div className="posts-container">
        <Loader />
      </div>
    );
  }

  return (
    <div className="posts-container">
      <h3>Latest Posts</h3>
      <table className="post-table">
        <thead className="post-header">
          <tr>
            <th>Title</th>
            <th onClick={() => sortByAuthor()} className="author-filter">
              Author
            </th>
            <th>Summary</th>
            <th>Published On</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => {
            return (
              <PostItem
                key={post.id}
                onClick={() =>
                  handleTitleClick(
                    post.title,
                    post.author.name,
                    post.body,
                    post.publishedAt
                  )
                }
                title={post.title}
                summary={post.body}
                author={post.author.name}
                date={post.publishedAt}
              />
            );
          })}
        </tbody>
      </table>
      {postOpen ? (
        <FullPost
          close={closePost}
          title={singlePost.title}
          author={singlePost.author}
          body={singlePost.body}
          date={singlePost.date}
        />
      ) : null}
    </div>
  );
}
