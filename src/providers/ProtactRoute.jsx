// import { useEffect } from "react";
// import { useLocation, useNavigate } from "react-router-dom";

// const ProtactRoute = ({ children }) => {

//   const navigate = useNavigate()
//   const {pathname} = useLocation()
//   const isAuth = localStorage.getItem("isAuth")
//   const isAuthBoolean = !!isAuth
//   useEffect( () => {
//     if(isAuthBoolean && pathname === '/Login'){
//       navigate('/')
//     }else if (isAuthBoolean && pathname === '/Regestr'){
//       navigate('/')
//     }
//     else if (!isAuthBoolean && pathname === '/'){
//       navigate('/login')
//     }

//   },[pathname])
//   return children;

// }

// export default ProtactRoute
