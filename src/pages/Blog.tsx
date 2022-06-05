import React, { useEffect } from "react";

const Blog = () => {
  useEffect(() => {
    document.title = "Блог | Любимовка";
  }, []);
  return <div>Blog</div>;
};

export default Blog;
