import { useNavigate } from "react-router-dom";
import scss from "./Regest.module.scss";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
const url =
	"https://api.elchocrud.pro/api/v1/62575360e1d245307b2764c6cbc98e08/project";
const Regest = () => {
	const [name, setName] = useState("");
	const [password, setPassword] = useState("");

	const navigate = useNavigate();

	const handle = async () => {
		if (name === "" || password === "") {
			alert("writing ");
		} else {
			const response = await axios.get(url);
			const responseData = response.data;
			const findUser = responseData.find(
				(item) => item.name === name && item.password === password
			);

			if (findUser) {
				navigate("/Login");
				localStorage.setItem("isAuth","" +findUser._id);
			} else {
				alert("node found");
			}
		}

		try {
			const response = await axios.post(url, { name, password });

			if (response.status === 200 || response.status === 201) {
				localStorage.setItem("title", name);
				localStorage.setItem("password", password);
				navigate("/");
			}
		} catch (error) {
			console.error("Ошибка при выполнении запроса:", error);
			alert("Произошла ошибка при регистрации. Попробуйте снова.");
		}
	};

	return (
		<section>
			<div className={scss.container}>
				<div className={scss.contant}>
					<img
						className={scss.image}
						src="https://media1.tenor.com/m/EGJ8NGJn4D8AAAAC/twitter-logo-twitter.gif"
						alt=""
					/>
					<div className={scss.div}>
						<h3>Name:</h3>
						<input
							className={scss.input}
							placeholder="Name:"
							type="text"
							value={name}
							onChange={(e) => setName(e.target.value)}
						/>
						<h3>Password:</h3>
						<div className={scss.inputBut}>
							<input
								className={scss.input1}
								placeholder="Password:"
								type="text"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
							/>
						</div>
					</div>
					<Button onClick={() => handle()} variant="contained">
						<Link to="/">CONTAINED</Link>
					</Button>
				</div>
			</div>
		</section>
	);
};

export default Regest;
