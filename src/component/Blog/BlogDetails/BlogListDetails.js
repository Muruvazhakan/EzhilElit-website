import React from 'react';
import './BlogListDetails.css';
import BlogDetails from './BlogDetails';

const BlogListDetails = ({ blogs }) => {
  return (
    <div className='blogList-wrap'>
      {blogs.map((blog) => (
        <BlogDetails blog={blog} />
      ))}
    </div>
  );
};

export default BlogListDetails;
