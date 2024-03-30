import React from "react";
import { Link } from "react-router-dom";
import startWarsimg from "../../img/start-wars.jpg";
import { useEffect, useContext } from "react";
import { Context } from "../store/appContext.js";
import { FaGithub } from "react-icons/fa";
import "../../styles/nav.css"
import "../../styles/global.css"





export const Navbar = () => {
	
	const {store, actions} = useContext(Context)

	return (
		<div className="container">
			<nav className="navbar navbar-light bg-light mb-3">
				<Link to="/">
					<span className="navbar-brand mb-0 h1"> <img src={startWarsimg} style={{ width: '100px', height: '10px,' }} />  </span>
				</Link>
				<div className="ml-auto">
				<div className="dropdown d-flex justify-content-center">
					<button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
						Favorites: <span style={{color: 'white', background: 'grey', border: '2px'}}>{store.favorites.length}</span>
					</button>
					
					<ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
						{store.favorites.length === 0 && <li key={0}><div className="dropdown-item">No favorites</div></li>}
						{
						store.favorites.map((item) => {
							return (
								<li key={item.uid} className="d-flex justify-content-between" style={{width:"250px"}}>
									<span className="dropdown-item">{item.properties.name}</span>
									<span className="dropdown-item" onClick={() => actions.deleteFavorite(item.uid)}>🗑️</span>
								</li>
							)
						})
						}
					</ul>
				</div>
			</div>
		</nav>
     </div>



	);

};
