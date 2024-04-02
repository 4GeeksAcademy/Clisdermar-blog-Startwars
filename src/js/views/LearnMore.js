import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { Context } from "../store/appContext";


const LearnMore = () => {

    const { id } = useParams()

    const [learnMore, setLearnMore] = useState(null)

    const fetchLearMore = async () => {
        const response = await fetch(`https://www.swapi.tech/api/people/${id}`)
        const data = await response.json()
        setLearnMore(data.result)

    }



    useEffect(() => {
        fetchLearMore()
    }, [])


    return (


        <div className="container">

                <div className="body ">
                                <div className="row">
                                    <div className="col-12 col-md-6 ">
                                        <img src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} className="w-90 img-thumbnail h-100px"  />
                                    </div>
                                    <div className="col-12 col-md-6 ">
                                        {learnMore &&
                                            <div style={{ textAlign: 'center', padding: '40px' }}>
                                                <h1>{learnMore.properties.name}</h1>
                                                <p>{learnMore.description}</p>
                                            </div>
                                        }
                                    </div>
                                </div>
                            </div>
                            
            <div className="footer" style={{ display: 'flex', justifyContent: 'center', marginTop: '20px', }}>
                {learnMore &&
                 
                    <div className="row" style={{ width: '95%', color: 'red' }}>
                        <div id="linea-horizontal" class="border-top border-danger border-2" style={{marginBottom: '10px'}}></div>
                        <div className="col-2"><h4 style={{ color: 'red' }}>Name </h4><p style={{ color: 'red' }}>{learnMore.properties.name}</p> </div>
                        <div className="col-2"> <h4 style={{ color: 'red' }}>Birth Year </h4> <p style={{ color: 'red' }}>{learnMore.properties.birth_year} </p>      </div>
                        <div className="col-2"> <h4 style={{ color: 'red' }}>Gender</h4> <p style={{ color: 'red' }}>{learnMore.properties.gender}  </p> </div>
                        <div className="col-2"> <h4 style={{ color: 'red' }} >Height </h4>  <p style={{ color: 'red' }}>{learnMore.properties.height}  </p>  </div>
                        <div className="col-2"> <h4 style={{ color: 'red' }}>Skin Color</h4> <p style={{ color: 'red' }} >{learnMore.properties.skin_color} </p>   </div>
                        <div className="col-2"> <h4 style={{ color: 'red' }}>Eye Color</h4><p style={{ color: 'red' }}>{learnMore.properties.eye_color} </p>  </div>
                    </div>
                }
            </div>

        </div>

    )
}


export default LearnMore;




