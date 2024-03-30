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


            <div className="body" style={{ display: 'flex', justifyContent: 'space-between' }}>



                <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} />
                {learnMorePlanets &&
                    <div style={{textAlign: 'center', padding: '40px'}}>
                        <h1>{learnMorePlanets.properties.name}</h1>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit volutatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae hjdue ndhu nsbsh ki nsbgtwsk nklspw ngdyej pspjses nhuk njshy.Nysmdujd kzops nb jshhi bsgwu ñapw ndhd bhd, njdkieue hkwamsndhe dkdkc.bhuiwuoijjdhui bigiuqwdohudjd mhduihie nchud kjduihuedebe hbduhdhbuygc jhbdhudb,jkhbdhuhuijew.Nhbhchchiuwhfi hbdij mncjd jkurbfhh. hfytruei mjlspwo btyudwa klaoi avada kedavra poty, jutrup lo sare, nvcuiop loyatr. Zataop liytr vceml cuiopsl cytresa mcl oairyel ncñange. Ertyu nbmvk olips lo sdaeq dghcb ncmkgu aldkdu sncb lo kjahg usoe tscabf ñsow bgsfw fadwrw uytrdk oliu yt poln bcdaew.</p>
                    </div>

                }
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

