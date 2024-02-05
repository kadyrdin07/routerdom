import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Regest from "./components/Regest";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const App = () => {
	const navigate = useNavigate();
	let { pathname } = useLocation();

	const isAuth = localStorage.getItem("isAuth");

	useEffect(() => {
		if (!!isAuth && pathname === "/Login") {
			navigate("/home");
		} else if (!isAuth && pathname === "/home") {
			navigate("/Login");
		}
	}, [pathname]);
	return (
		<div>
			<Routes>
				<Route path="/home" element={<Home />} />
				<Route path="/Login" element={<Login />} />
				<Route path="/Regest" element={<Regest />} />
			</Routes>
		</div>
	);
};

export default App;
