import React, { useState } from "react";

const useToggle = (props = true) => {
  const [isOpen, setisOpen] = useState(props);
  const toggle = () => {
    setisOpen((prevState) => !prevState);
  };
  return {
    isOpen,
    toggle,
  };
};

export default useToggle;
