import React, { useEffect, useState } from "react";

function UseLocalStorage(key, initialValue) {
  const [data, setData] = useState(localStorage.getItem(key) || initialValue);

  useEffect(() => {
    localStorage.setItem(key, data);
  }, [key, data]);

  return [data, setData];
}

export default UseLocalStorage;
