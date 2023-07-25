import React, { useState } from 'react';
import QuillToolbar from './QuillToolbar';

const CreateBlog = () => {
  const [content, setContent] = useState('');

  const handleBlogChange = (text) => {
    setContent(text);
  };

  const handleSaveBlog = () => {
    // Save the blog content to localStorage.
    localStorage.setItem('blogContent', content);
    alert('Blog saved successfully!');
  };

  return (
    <div>
      <h1>Create Blogs</h1>
      <QuillToolbar value={content} onChange={handleBlogChange} />
      <button onClick={handleSaveBlog}>Save Blog</button>
    </div>
  );
};

export default CreateBlog;
