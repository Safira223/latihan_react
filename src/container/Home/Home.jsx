// libraries
import React, { Component } from "react";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";

// pages
import BlogPost from "../pages/BlogPost/BlogPost";
import DetailPost from "../pages/BlogPost/DetailPost/DetailPost";
import LifeCycleComp from "../pages/LifeCycleComp/LifeCycleComp";
import YoutubePage from "../pages/YoutubeComp/YoutubeComp";
import Product from "../pages/Product/Product";
import Hooks from "../pages/Hooks/Hooks";

// style
import "./Home.css";

class Home extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="navigation">
          <Link to="/">Blog Post</Link>
          <Link to="/youtube">YoutubeComp</Link>
          <Link to="/product">Product</Link>
          <Link to="/lifecycle">LifeCycle</Link>
          <Link to="/hooks">Hooks</Link>
        </div>
        <Routes>
          <Route path="/" exact element={<BlogPost />} />
          <Route path="/detail-post/:id" element={<DetailPost/>} />
          <Route path="/youtube" element={<YoutubePage />} />
          <Route path="/product" element={<Product />} />
          <Route path="/lifecycle" element={<LifeCycleComp />} />
          <Route path="/hooks" element={<Hooks />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default Home;
