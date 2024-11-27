import React, { useEffect, useState } from "react";
import * as Datas from "../../Datas/Datas";
import EmptyBlogList from "../EmptyBlogList/EmptyBlogList";
import BlogListDetails from "../BlogDetails/BlogListDetails";
import SearchBar from "../SearchBar/SearchBar";
import './HomeBlog.css';
import axios from "axios";

const HomeBlog = () => {

    const [blogs, setBlogs] = useState([]);
    const [Orgblogs, setOrgBlogs] = useState([]);
    const [searchKey, setSearchKey] = useState('');

    useEffect(() =>{
        getPost()
    },[])

    const getPost = () => {
    
        getPostinDB();
      }
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const getPostinDB = async () => {
        try {
          let response = await axios.get(Datas.Create_Post, config);
          // return response;
          console.log(response);
         
          if (response.data == "User already exist") {
            alert('User already exist');
            
          }
          else if (response.status === 200) {
            
            console.log(response.data);
            setBlogs(response.data);
            setOrgBlogs(response.data);
            //console.log(userExsist.data);
          }
          else {
            alert('Something went wrong!');
          }
        } catch (err) {
          console.log(err);
          alert('Something went wrong!');
          return err;
        }
      }

    // Search submit
    const handleSearchBar = (e) => {
        e.preventDefault();
        handleSearchResults();
    };

    // Search for blog by category
    const handleSearchResults = () => {
        const allBlogs = Orgblogs;
        console.log(searchKey);
        const filteredBlogs = allBlogs.filter((blog) => {
            console.log(blog.category);

            return blog.category.toLowerCase().includes(searchKey.toLowerCase().trim())
        }
        );
        setBlogs(filteredBlogs);
    };

    // Clear search and show all blogs
    const handleClearSearch = () => {
        setBlogs(Orgblogs);
        setSearchKey('');
    };


    return (
        <div className="container">
            <h1 className="blog-title">Ezhil Blog</h1>
            <SearchBar
                value={searchKey}
                clearSearch={handleClearSearch}
                formSubmit={handleSearchBar}
                handleSearchKey={(e) => setSearchKey(e.target.value)}
            />

            {/* Blog List & Empty View */}
            {!blogs.length ? <EmptyBlogList /> : <BlogListDetails blogs={blogs} />}
        </div>
    )
}

export default HomeBlog;