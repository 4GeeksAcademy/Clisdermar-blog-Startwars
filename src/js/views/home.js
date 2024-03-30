import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Link } from "react-router-dom";


export const Home = () => {
	//funcion
	const { store, actions } = useContext(Context)

	return (
		<>

			<div className="container">
				<h1 className="text-danger">Characters</h1>
				<div className="carrusel">

					{store.characters.map((item) => {

						return (
							<div className="row" style={{ margin: '4px' }}>
								<div className="card" style={{ width: '18rem', }}>
									<img src={`https://starwars-visualguide.com/assets/img/characters/${item.uid}.jpg`} className="card-img-top" alt="..."></img>
									<div className="card-body">
										<h5 className="card-title"> {item.properties.name} </h5>
										<p className="card-text"><b>Gender:</b> {item.properties.gender} </p>
										<p className="card-text"><b>Hair Color:</b> {item.properties.hair_color} </p>
										<p className="card-text"><b>Eye-Color:</b> {item.properties.eye_color} </p>


										<div className="botones" style={{ display: 'flex', justifyContent: 'space-between' }}>
										<Link to={`/characters/${item.uid}`}>
												<span className="btn btn-outline-primary"> Learn More!  </span>
											</Link>
											<div className="btn btn-outline-warning" onClick={()=> {
												const searchItem = store.favorites.find(search => search == item)
												if (!searchItem){
													
													actions.addFavorite(item)
												}
												else {
													actions.deleteFavorite(item.uid)
												}
											
											
											
											}}  > <i className={"fa fa-heart " + (store.favorites.find(search => search == item) ? "text-danger" : "text-warning")} /> </div>
										</div>
									</div>
								</div>
							</div>


						)


					})}
				</div>
			</div>

			<div className="container" style={{ marginTop: '50px' }}>
				<h1 className="text-danger">Planets</h1>
				<div className="carrusel">
					{store.planets.map((item2) => {

						return (
							<div className="row" style={{ margin: '4px' }}>
								<div className="card" style={{ width: '18rem', }}>
									<img src={`https://starwars-visualguide.com/assets/img/planets/${item2.uid}.jpg`} className="card-img-top" alt="..." style={{ marginRight: '0px', marginLeft: '0px' }}></img>
									<div className="card-body-" >
										<h5 className="card-title">  </h5>
										<p className="card-text"><b>Terrain: {item2.properties.terrain} </b>  </p>
										<p className="card-text"><b>Population: {item2.properties.population}</b>  </p>

										<div className="botones" style={{ display: 'flex', justifyContent: 'space-between', marginTop: '5px' }}>
											<Link to={`/planets/${item2.uid}`}>
												<span className="btn btn-outline-primary"> Learn More!  </span>
											</Link>
											<div className="btn btn-outline-warning" onClick={()=> {
												const searchItem = store.favorites.find(search => search == item2)
												if (!searchItem){
													
													actions.addFavorite(item2)
												}
												else {
													actions.deleteFavorite(item2.uid)
												}
											
											
											
											}}  > <i className={"fa fa-heart " + (store.favorites.find(search => search == item2) ? "text-danger" : "text-warning")} /> </div>
										</div>
									</div>
								</div>
							</div>


						)


					})}
				</div>
			</div>



		</>
	);
}

