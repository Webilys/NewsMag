import React, { useState } from "react";
import Navbar from "./components/navbar.jsx";
import Newsboard from "./components/newsboard.jsx";
import Footer from "./components/footer.jsx";

export const App = () => {
  const [category, setCategory] = useState("general");
  return (
    <div>
      <Navbar setCategory={setCategory} />
      <Newsboard category={category} />
      <Footer />
    </div>
  );
};

export default App;
