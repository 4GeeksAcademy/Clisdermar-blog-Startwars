import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";


  const LearnMorePlanets = () => {

    const {id} = useParams()

    const [learnMorePlanets, setLearnMorePlanets] = useState(null)

    const fetchLearnMorePlanets = async () => {
        console.log(id)
        const response = await fetch(`https://www.swapi.tech/api/planets/${id}`)
        const data = await response.json()
        setLearnMorePlanets(data.result)
        console.log(data.result)
    }

    useEffect(() => {
        fetchLearnMorePlanets()
    },[])


    return(

        <div className="container">

        <div className="body ">
                        <div className="row">
                            <div className="col-12 col-md-6 ">
                                <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} className="w-90 img-thumbnail h-100px"  />
                            </div>
                            <div className="col-12 col-md-6 ">
                             {learnMorePlanets &&
                                    <div style={{textAlign: 'center', padding: '40px'}}>
                                        <h1>{learnMorePlanets.properties.name}</h1>
                                        <p>{learnMorePlanets.description}</p>
                                    </div>

                                }
                            </div>
                        </div>
                    </div>
      
     
            <div className="footer" style={{ display: 'flex', justifyContent: 'center', marginTop: '20px', }}>
                {learnMorePlanets &&
                 
                    <div className="row" style={{ width: '95%', color: 'red' }}>
                        <div id="linea-horizontal" class="border-top border-danger border-2" style={{marginBottom: '10px'}}></div>
                        <div className="col-2"><h4 style={{ color: 'red' }}>Name </h4><p style={{ color: 'red' }}>{learnMorePlanets.properties.name}</p> </div>
                        <div className="col-2"> <h4 style={{ color: 'red' }}>Climate </h4> <p style={{ color: 'red' }}>{learnMorePlanets.properties.climate} </p>      </div>
                        <div className="col-2"> <h4 style={{ color: 'red' }}>Population</h4> <p style={{ color: 'red' }}>{learnMorePlanets.properties.population}  </p> </div>
                        <div className="col-2"> <h4 style={{ color: 'red' }} >Orbital Period </h4>  <p style={{ color: 'red' }}>{learnMorePlanets.properties.orbital_period}  </p>  </div>
                        <div className="col-2"> <h4 style={{ color: 'red' }}>Rotation Period</h4> <p style={{ color: 'red' }} >{learnMorePlanets.properties.rotation_period} </p>   </div>
                        <div className="col-2"> <h4 style={{ color: 'red' }}>Diameter</h4><p style={{ color: 'red' }}>{learnMorePlanets.properties.diameter} </p>  </div>
                    </div>
                }
            </div>

        </div>






    )
}
  export default LearnMorePlanets;

