import React, { useEffect } from "react";
import Sidebar from "../components/Sidebar";
import axios from "axios";
const Home = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/home");
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="bg-[#17181F]">
      <Sidebar />
      <div className="home-main"></div>
    </div>
  );
};

export default Home;
