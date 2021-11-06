import React from "react";
import "./Blog.css";
import { InputGroup } from "react-bootstrap";
import { IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import blog from "../../Images/blog.png";
import { useState } from "react";

const Blog = () => {
  const [selected, setSelected] = useState(0);
  const topics = ["All Topics", "Website Updates", "Skills"];
  const blogs = [
    {
      topic: "How to use track your progress feature of OSCA",
      featured: "WEBSITE UPDATES",
      data: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
      author: "Chinmay Srivastava",
      date: "September 29, 2021",
      image: blog,
    },
    {
      topic: "How to use track your progress feature of OSCA",
      featured: "Skills",
      data: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
      author: "Chinmay Srivastava",
      date: "September 29, 2021",
      image: blog,
    },
  ];

  return (
    <div className="blogStructure">
      <h1>OSCA BLOGS</h1>
      <p>
        Tips to choose a suitable skill, new updates launch announcements and
        many more interesting blogs.
      </p>
      <div className="blogContainer">
        <div className="containerHeader">
          <div className="blogTopics">
            {topics.map((data, idx) => {
              return (
                <div
                  onClick={() => setSelected(idx)}
                  style={{ color: `${selected === idx ? "#8750a9" : ""}` }}
                >
                  {data}
                </div>
              );
            })}
          </div>
          <div className="blogSearch">
            <input type="text" placeholder="Search" />
            <InputGroup.Append className="search-btn">
              <IconButton
                aria-label="Search"
                size="small"
                // onClick={() => fetchData()}
              >
                <SearchIcon style={{ color: "#586060" }} />
              </IconButton>
            </InputGroup.Append>
          </div>
        </div>
        <hr />
        {blogs.map((blogData) => {
          return (
            <>
              <div className="blogCard">
                <div className="leftBlog">
                  <h6>
                    FEATURED : <span>{blogData.featured}</span>
                  </h6>
                  <h1>{blogData.topic}</h1>
                  <p>{blogData.data}</p>
                  <ul>
                    By {blogData.author} <li>{blogData.date}</li>
                  </ul>
                </div>
                <img src={blogData.image} alt="" />
              </div>
              <hr />
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Blog;
