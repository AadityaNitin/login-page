import styles from "./styles.module.css";
import axios from "axios";
import { useState,useEffect } from 'react';

const Main = () => {
	const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};
	const [data,setData] = useState([]);
	useEffect(()=> {
	const fetchdata = async() =>
		{
			try {
				const data = await axios.get("http://localhost:8080/api/getusers");
				console.log(data.data);
				setData(data.data);
			} catch (e) {
						console.log(e)
			}

		}
		fetchdata();


	},[])
	return (
		<div className={styles.main_container}>
			<nav className={styles.navbar}>
				<h1>Website</h1>
				<button className={styles.white_btn} onClick={handleLogout}>
					Logout
				</button>
			</nav>
			<h1>{data.map((data)=>( <div>{data.firstName}</div>	)	)}</h1>
		</div>
	);
};

export default Main;
