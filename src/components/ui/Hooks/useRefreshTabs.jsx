import React, { useEffect } from "react";

function useRefreshTabs(value, setValue, setSelectedIndex) {
  useEffect(() => {
    if (window.location.pathname === "/" && value !== 0) {
      setValue(0);
    } else if (window.location.pathname === "/services" && value !== 1) {
      setValue(1);
      setSelectedIndex(0);
    } else if (window.location.pathname === "/revolution" && value !== 2) {
      setValue(2);
    } else if (window.location.pathname === "/about" && value !== 3) {
      setValue(3);
    } else if (window.location.pathname === "/contacts" && value !== 4) {
      setValue(4);
    } else if (window.location.pathname === "/estimate" && value !== 5) {
      setValue(5);
    } else if (window.location.pathname === "/customSoftware" && value !== 1) {
      setValue(1);
      setSelectedIndex(1);
    } else if (window.location.pathname === "/mobileapps" && value !== 1) {
      setValue(1);
      setSelectedIndex(2);
    } else if (window.location.pathname === "/websites" && value !== 1) {
      setValue(1);
      setSelectedIndex(3);
    }
  }, [value]);
}

export default useRefreshTabs;
