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


            <div className="body" style={{ display: 'flex', justifyContent: 'space-between' }}>



                <img src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} />
                {learnMore &&
                    <div style={{textAlign: 'center', padding: '40px'}}>
                        <h1>{learnMore.properties.name}</h1>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit volutatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae hjdue ndhu nsbsh ki nsbgtwsk nklspw ngdyej pspjses nhuk njshy.Nysmdujd kzops nb jshhi bsgwu ñapw ndhd bhd, njdkieue hkwamsndhe dkdkc.bhuiwuoijjdhui bigiuqwdohudjd mhduihie nchud kjduihuedebe hbduhdhbuygc jhbdhudb,jkhbdhuhuijew.Nhbhchchiuwhfi hbdij mncjd jkurbfhh. hfytruei mjlspwo btyudwa klaoi avada kedavra poty, jutrup lo sare, nvcuiop loyatr. Zataop liytr vceml cuiopsl cytresa mcl oairyel ncñange. Ertyu nbmvk olips lo sdaeq dghcb ncmkgu aldkdu sncb lo kjahg usoe tscabf ñsow bgsfw fadwrw uytrdk oliu yt poln bcdaew.</p>
                    </div>

                }
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




