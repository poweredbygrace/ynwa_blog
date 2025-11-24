import { useState } from "react";
import "../styles/CreatePost.css";

const CreatePostPage = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleCreatePost = (e) => {
    e.preventDefault();

    // Later this will be saved to Firebase Firestore
    console.log({
      title,
      content,
      author: "Anonymous (until Firebase Auth)",
      timestamp: new Date().toISOString()
    });

    alert("Post would be saved to Firestore soon!");

    setTitle("");
    setContent("");
  };

  return (
    <div className="create-container">
      <h2>Create a Post</h2>

      <form onSubmit={handleCreatePost} className="create-form">
        <label>Title</label>
        <input 
          type="text" 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <label>Content</label>
        <textarea 
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows="6"
          required
        />

        <button className="btn">Publish</button>
      </form>
    </div>
  );
};

export default CreatePostPage;
