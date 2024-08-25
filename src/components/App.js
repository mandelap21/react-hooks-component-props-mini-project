import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";
import Article from "./Article";

console.log(blogData);

function App() {
  return (
    <div className="App">
<Header name={"coffee"}/>
<About about={"drink"}/>
<ArticleList posts={blogData?.posts}/>
<Article title={"coffee shop"} preview={blogData?.posts[0].preview}/>
    </div>
  );
}

export default App;