import { useState } from "react";
import "../styles/Feed.css";

const dummyPosts = [
  {
    id: 1,
    title: "Liverpool vs Chelsea — What a Game!",
    author: "Michael",
    date: "2025-01-24",
    content: "Liverpool dominated possession and created so many chances..."
  },
  {
    id: 2,
    title: "Why Trent Is the Best Right Back in the World",
    author: "Grace",
    date: "2025-01-20",
    content: "His passing range is unreal. No defender comes close..."
  }
];

const FeedPage = () => {
  const [posts] = useState(dummyPosts);

  return (
    <div className="feed-container">
      <h2 className="feed-title">Fan Posts</h2>

      <div className="post-grid">
        {posts.map((post) => (
          <div className="post-card" key={post.id}>
            <h3>{post.title}</h3>
            <p className="meta">
              {post.author} • {post.date}
            </p>
            <p className="preview">
              {post.content.substring(0, 120)}...
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeedPage;
