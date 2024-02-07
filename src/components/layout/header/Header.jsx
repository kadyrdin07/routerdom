import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import scss from "./Header.module.scss";
const url =
	"https://api.elchocrud.pro/api/v1/62575360e1d245307b2764c6cbc98e08/project";

const Header = () => {
	const navigate = useNavigate();
	const [userProfile, setUserProfile] = useState({});
	const links = [
		{
			name: "Home",
			href: "/",
		},

		{
			name: "Login",
			href: "/Login",
		},
		{
			name: "Regestration",
			href: "/Regest",
		},
	];
	const getUserId = localStorage.getItem("isAuth");
	console.log(getUserId);
	const getUserProfil = async () => {
		try {
			const response = await axios(url);
			const reponseData = await response.data;

			if (getUserId) {
				const findUser = reponseData.find((item) => item._id === +getUserId);
				setUserProfile(findUser);
			} else {
				console.log("hover");
				navigate("/");
			}
		} catch (e) {
			console.error(e);
		}
	};

	useEffect(() => {
		getUserProfil();
	}, []);

	return (
		<section className={scss.sectionHeader}>
			<div className={scss.container}>
				<div className={scss.cont}>
					<div className={scss.aaaaa}>
						{links.map((item, index) => (
							<div className={scss.Links} key={index}>
								<Link className={scss.link} key={index} to={item.href}>
									{item.name}
								</Link>
							</div>
						))}
					</div>
				</div>
				<div>
					<h1>{userProfile.login}</h1>
				</div>
			</div>
		</section>
	);
};

export default Header;
