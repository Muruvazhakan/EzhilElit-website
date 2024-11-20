import React, { useState } from "react";
import * as Datas from "../../Datas/Datas";
import EmptyBlogList from "../EmptyBlogList/EmptyBlogList";
import BlogListDetails from "../BlogDetails/BlogListDetails";
import SearchBar from "../SearchBar/SearchBar";
import './HomeBlog.css';

const HomeBlog = () => {

    const [blogs, setBlogs] = useState(Datas.lenspost);
    const [searchKey, setSearchKey] = useState('');

    // Search submit
    const handleSearchBar = (e) => {
        e.preventDefault();
        handleSearchResults();
    };

    // Search for blog by category
    const handleSearchResults = () => {
        const allBlogs = Datas.lenspost;
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
        setBlogs(Datas.lenspost);
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