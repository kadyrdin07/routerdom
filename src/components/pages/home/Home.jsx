import { useState } from "react";
import scss from "./Home.module.scss";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { Button } from "@mui/material";

const url =
	"https://api.elchocrud.pro/api/v1/62575360e1d245307b2764c6cbc98e08/project";

const Home = () => {
	const [state, setState] = useState([]);

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
		setState(response.data);
	};

	useEffect(() => {
		getUserProfile();
		getTodos();
	}, []);

	const navigate = useNavigate();
	const handleExit = () => {
		localStorage.removeItem("name");
		localStorage.removeItem("password");
		localStorage.removeItem("isAuth");
		navigate("/");
		navigate("/Login");
	};

	const Delete = async () => {
		const response = await axios.delete(url);
		setState(response.data);
	};
	return (
		<div className={scss.Home}>
			<img
				className={scss.imager}
				src="https://cdn.dribbble.com/users/2652449/screenshots/14764078/media/2b620382444946ce84aac0a132c40063.gif"
				alt=""
			/>
			{state.map((item) => (
				<div className={scss.cards} key={item._id}>
					<h1>{item.name}</h1>
					<p>{item.password}</p>
					<Button onClick={Delete} variant="contained">
						Delete
					</Button>
				</div>
			))}

			<div className={scss.button_exit}>
				<Button onClick={handleExit} variant="outlined">
					Open
				</Button>
			</div>
		</div>
	);
};

export default Home;
