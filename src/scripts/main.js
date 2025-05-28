import React from "react";
import { createRoot } from "react-dom/client";
import SearchBox from "../javascript/SearchBox";

import Library from './Library.js'

ReactDOM.createRoot(document.getElementById('react-library')).render(
  <React.StrictMode>
    <Library />
  </React.StrictMode>
)

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("react-search");
  if (container) {
    const root = createRoot(container);
    root.render(<SearchBox />);
  }
});
