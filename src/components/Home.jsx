import { useState } from "react";
import scss from "./Home.module.scss";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

const url = "https://api.elchocrud.pro/api/v1/62575360e1d245307b2764c6cbc98e08/project";

const Home = () => {
  const [data, setData] = useState([]);
  const [userProfile, setUserProfile] = useState({});

  const getUserProfile = async () => {
    const resposne = await axios.get(url);
    const userProfile = resposne.data;
    const getUserIdLocalStorage = localStorage.getItem("isAuth");
    const findUser = userProfile.find(
      (item) => item._id === +getUserIdLocalStorage
    );
    setUserProfile(findUser);
  };

  const getTodos = async () => {
    const response = await axios.get(url);
    setData(response.data);
  };

  useEffect(() => {
    getUserProfile();
    getTodos();
  }, []);

  const navigate = useNavigate();
  const handleExit = () => {
    localStorage.removeItem("title");
    localStorage.removeItem("password");
    localStorage.removeItem("isAuth");
    navigate("/Login");
  };

  return (
    <div className={scss.Home}>
      {data.map((item) => (
        <div className={scss.cards} key={item.id}>
          <h1>{item.name}</h1>
          <p>{item.password}</p>
        </div>
      ))}
      <div className={scss.button_exit}>
        <button onClick={handleExit}>Exit</button>
      </div>
    </div>
  );
};

export default Home;