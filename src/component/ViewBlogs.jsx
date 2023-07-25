import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ViewBlogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    // Retrieve all blogs from localStorage and store them in the 'blogs' state.
    const storedBlogs = Object.keys(localStorage).map((key) => ({
      id: key,
      content: localStorage.getItem(key),
    }));

    setBlogs(storedBlogs);
  }, []);

  const handleDeleteBlog = (id) => {
    // Delete the selected blog from localStorage based on its id.
    localStorage.removeItem(id);

    // Update the 'blogs' state to remove the deleted blog from the view.
    setBlogs((prevBlogs) => prevBlogs.filter((blog) => blog.id !== id));
  };

  return (
    <div>
      <h1>View Blogs</h1>
      <nav>
        <Link to="/">Go back to Create Blogs</Link>
      </nav>
      {blogs.length > 0 ? (
        <div>
          {blogs.map((blog) => (
            <div key={blog.id}>
              <div dangerouslySetInnerHTML={{ __html: blog.content }} />
              <button onClick={() => handleDeleteBlog(blog.id)}>Delete</button>
              <hr />
            </div>
          ))}
        </div>
      ) : (
        <p>No blogs found.</p>
      )}
    </div>
  );
};

export default ViewBlogs;
