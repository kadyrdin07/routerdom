import { useState } from "react";
import scss from "./Login.module.scss";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const url =
	"https://api.elchocrud.pro/api/v1/62575360e1d245307b2764c6cbc98e08/project";

const Login = () => {
	const [name, setName] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();

	const handleLogin = async () => {
		if (name === "" || password === "") {
			alert("Please enter username and password");

		} else {
			navigate("/");
			try {
				const response = await axios.get(url);
				const responseData = response.data;
				const findUser = responseData.find(
					(item) => item.name === name && item.password === password
				);
				if (findUser) {
					localStorage.setItem("isAuth", + findUser._id);
					navigate("/");
					
					alert("note found");
				} else {
					navigate("/")
				}
			} catch (error) {
				console.error(error);
			}
		}
	};

	return (
		<section>
			<div className={scss.container}>
				<div className={scss.content}>
					<img
						className={scss.img}
						src="https://media1.tenor.com/m/EGJ8NGJn4D8AAAAC/twitter-logo-twitter.gif"
						alt=""
					/>
					<h1></h1>
					<div className={scss.divIn}>
						<h1>Name:</h1>
						<input
							value={name}
							onChange={(e) => setName(e.target.value)}
							type="text"
						/>
						<h1>Password:</h1>
						<input
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							type="password"
						/>
						<Button onClick={handleLogin} variant="contained">
							<Link to="/regestrcd ">Home</Link>
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Login;
