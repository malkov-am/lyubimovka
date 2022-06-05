import React, { useEffect } from "react";

const Page404 = () => {
  useEffect(() => {
    document.title = "404 | Любимовка";
  }, []);
  return <div>Page 404</div>;
};

export default Page404;
