import { Routes, Route } from "react-router-dom";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Home from "../pages/home/Home";
import Login from "../pages/home/Login";
import Regest from "../pages/home/Regest";

const Layout = () => {
	const navigate = useNavigate();
	let { pathname } = useLocation();

	const isAuth = localStorage.getItem("isAuth");

	useEffect(() => {
		if (!!isAuth && pathname === "/Login") {
			navigate("/");
		} else if (!isAuth && pathname === "/") {
			navigate("/Login");
		}
	}, [pathname]);
	return (
		<div>
			<Header />
			<main>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/Login" element={<Login />} />
					<Route path="/Regest" element={<Regest />} />
				</Routes>
				<Footer />
			</main>
		</div>
	);
};

export default Layout;
