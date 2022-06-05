import React, { useEffect } from "react";

const History = () => {
  useEffect(() => {
    document.title = "История | Любимовка";
  }, []);
  return <div>History</div>;
};

export default History;
