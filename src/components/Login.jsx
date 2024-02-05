// import { useState } from "react";
// import scss from "./Login.module.scss";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import { Link } from "react-router-dom";

// const url =
// 	"https://api.elchocrud.pro/api/v1/62575360e1d245307b2764c6cbc98e08/project";

// const Login = () => {
// 	// const [state, setState] = useState([]);
// 	const [title, setName] = useState("");
// 	const [password, setPassword] = useState("");

// 	const navigate = useNavigate();
// 	const handleResult = async () => {
// 		if (title === "" || password === "") {
// 			alert("write something");
// 		} else {

//       navigate('/')

// 			const response = await axios.get(url);
// 			const responseData = response.data;

//       const findUser = responseData.find(
//         (item) => item.title === title && item.password === password
//       )
      
//       if (findUser) {
//         localStorage.setItem("isAuth", "" + findUser._id);
//         console.log("Found" , findUser);
//         navigate("/")
//       } else {
//         alert("Неверный пароль или логин")
//       }
//     }
// 	};

// 	return (
// 		<section>
// 			<div className={scss.container}>
// 				<div className={scss.content}>
// 					<img
// 						className={scss.img}
// 						src="https://media1.tenor.com/m/EGJ8NGJn4D8AAAAC/twitter-logo-twitter.gif"
// 						alt=""
// 					/>
// 					<div className={scss.divIn}>
// 						<h1>Name:</h1>

// 						<input
// 							value={title}
// 							onChange={(e) => setName(e.target.value)}
// 							type="text"
// 						/>
// 						<h1>Password:</h1>
// 						<input
// 							value={password}
// 							onChange={(e) => setPassword(e.target.value)}
// 							type="text"
// 						/>
// 						<button onClick={() => handleResult}>
// 							<Link to="/">Home</Link>
// 						</button>
// 					</div>
// 				</div>
// 			</div>
// 		</section>
// 	);
// };

// export default Login;
import { useState } from "react";
import scss from "./Login.module.scss";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from 'react-router-dom'

const url =
  "https://api.elchocrud.pro/api/v1/62575360e1d245307b2764c6cbc98e08/project";

const Login = () => {
  const [title, setTitle] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (title === "" || password === "") {
      alert("Please enter username and password");
    } else {
      navigate("/home")
      try {
        const response = await axios.get(url);
        const responseData = response.data;
        const findUser = responseData.find(
          (item) => item.title === title && item.password === password
        );
        if (findUser) {
          localStorage.setItem("isAuth", findUser._id);
          console.log("Found", findUser);
          navigate("/home");
        } else {
          alert("Invalid username or password");
        }
      } catch (error) {
        console.error("Error logging in:", error);
        alert("An error occurred while logging in. Please try again later.");
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
          <div className={scss.divIn}>
            <h1>Name:</h1>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              type="text"
            />
            <h1>Password:</h1>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
            />
            <button onClick={handleLogin}>
            <Link to="/home">home</Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
