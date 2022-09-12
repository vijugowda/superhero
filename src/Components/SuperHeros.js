import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {useNavigate, useParams} from 'react-router-dom'
import './SuperHero.css'

const SuperHeros = (props) => {
    const params = useParams();
    // console.log('abc', params)

    const navigate = useNavigate();

const [id, setId] = useState(params.id);
const [data, setData]= useState([]);
const [appearance,setAppearance] = useState(false)
const [biography,setBiography] = useState(false)
const [powerstats,setPowerstats] = useState(true)
const [connections,setConnections] = useState(false)
const [work,setWork] = useState(false)

const getData = ()=>{
    axios.get(`https://akabab.github.io/superhero-api/api/id/${id}.json`)
    .then(res=>{
        console.log('answer' ,res.data)
        setData(res.data)
    })
    .catch(err=>err)
}
const connectionss=()=>{
    setConnections(!connections);
    setAppearance(false)
    setBiography(false)
    setWork(false);
    setPowerstats(false)
}
const powerStatt=()=>{
    setPowerstats(!powerstats)
    setAppearance(false)
    setBiography(false)
    setWork(false);
    setConnections(false);
}
const workk=()=>{
    setWork(!work);
    setAppearance(false)
    setBiography(false)
    setConnections(false);
    setPowerstats(false)
}
const biographyy=()=>{
    setBiography(!biography)
    setAppearance(false)
    setWork(false);
    setConnections(false);
    setPowerstats(false)
}
const appearancee=()=>{
    setAppearance(!appearance)
    setBiography(false)
    setWork(false);
    setConnections(false);
    setPowerstats(false)
}


useEffect(()=>{
    getData()
},[])



return (
    <>
        {(data.length !== 0)?

     ( <div className='main-wrapper'>
            <div className='app'>
                {/* app header */}
                <div className='app-header'>
                    <h2 className='app-header-title'>Super<span>Hero</span></h2>
                    <button className='tab-head-single' onClick={()=>{navigate('/')}}>Back</button>
                </div>
                   {/* end of app header */}

                   <div className='app-body'>
                    <div className='app-body-content'>
                         {/* app body starts */}
                        <div className='app-body-content-thumbnail'>
                            <img src={data.images.md} />
                        </div>
                        {/* end of the app body */}

                        <div className='app-body-content-list'>
                            <div className='name'>
                                {data.name}
                            </div>
                            <div className='slug'>slug: {data.slug}</div>
                            {/* tabs head */}
                            <div className='app-body-tabs-head'>
                            <button type='button' className='tab-head-single' onClick={()=>powerStatt()}>
                                <span>Powerstats</span>
                            </button>
                            <button type='button' className='tab-head-single' onClick={()=> biographyy()}>
                                <span>Biography</span>
                            </button>
                            <button type='button' className='tab-head-single'  onClick={()=> appearancee()}>
                                <span >Appearance</span>
                            </button>
                            <button type='button' className='tab-head-single'  onClick={()=> connectionss()}>
                                <span>Connections</span>
                            </button>
                            <button type='button' className='tab-head-single'  onClick={()=> workk()}>
                                <span>Work</span>
                            </button>
                            </div> 
                            {/* end of tabs head */}

                            {/* tab body */}
                            <div className='app-body-tabs-body'>
                                {/* powerstats tab */}
                                {(powerstats!=false) ? (
                                <ul className='tab-body-single powerstats'>
                                    <li>
                                        <div>
                                            <i className='fa-solid fa-shield-halved'></i>
                                            <span>intelligence</span>
                                        </div>
                                         <span>{ data.powerstats.intelligence}</span>
                                     </li>
                                    <li>
                                        <div>
                                            <i className='fa-solid fa-shield-halved'></i>
                                            <span>strength</span>
                                        </div> 
                                     <span>{data.powerstats.strength}</span>
                                </li>
                                    <li>
                                        <div>
                                            <i className='fa-solid fa-shield-halved'></i>
                                            <span>speed</span>
                                        </div>
                                        <span>{data.powerstats.speed}</span>
                                    </li>
                                    <li>
                                        <div>
                                            <i className='fa-solid fa-shield-halved'></i>
                                            <span>durability</span>
                                        </div>
                                        <span>{data.powerstats.durability}</span>
                                    </li>
                                    <li>
                                        <div>
                                            <i className='fa-solid fa-shield-halved'></i>
                                            <span>power</span>
                                        </div>
                                        <span>{data.powerstats.power}</span>
                                    </li>
                                    <li>
                                        <div>
                                            <i className='fa-solid fa-shield-halved'></i>
                                            <span>combat</span>
                                        </div>
                                        <span>{data.powerstats.combat}</span>
                                    </li>
                                </ul>) : null }
                                {/* end of the powerstats body */}

                                {/* appereance */}
                                {(appearance != false) ? (
                                <ul className='tab-body-single appearance'>
                                    <li>
                                        <span>
                                            <i className='fas fa-star'></i>
                                            gender
                                        </span>
                                        <span>{data.appearance.gender}</span>
                                    </li>
                                
                                    <li>
                                        <span>
                                            <i className='fas fa-star'></i>
                                            race
                                        </span>
                                        <span>{data.appearance.race}</span>
                                    </li>
                                    <li>
                                        <span>
                                            <i className='fas fa-star'></i>
                                            height
                                        </span>
                                        <span>{data.appearance.height[0]+"  , "+data.appearance.height[1]}</span>
                                    </li>
                                    <li>
                                        <span>
                                            <i className='fas fa-star'></i>
                                            weight
                                        </span>
                                        <span>{data.appearance.weight[0]+" , "+data.appearance.weight[1]}</span>
                                    </li>
                                    <li>
                                        <span>
                                            <i className='fas fa-star'></i>
                                            eye-color
                                        </span>
                                        <span>{data.appearance.eyeColor}</span>
                                    </li>
                                    <li>
                                        <span>
                                            <i className='fas fa-star'></i>
                                            hair-color
                                        </span>
                                        <span>{data.appearance.hairColor}</span>
                                    </li>
                                </ul>) : null } 
                                {/* end of the apperance */}

                                {/* Biography tab */}
                         {(biography!=false) ? (
                               <ul className='tab-body-single biography'>
                                <li>
                                    <span> <i className='fas fa-star'></i>full name : </span>
                                    <span>{data.biography.fullName}</span>
                                </li>
                                <li>
                                    <span> <i className='fas fa-star'></i>alert-egos : </span>
                                    <span>{data.biography.alterEgos}</span>
                                </li>
                                <li>
                                    <span> <i className='fas fa-star'></i>aliases : </span>
                                    <span>{data.biography.aliases[0]}</span>
                                </li>
                                <li>
                                    <span> <i className='fas fa-star'></i>place-of-birth : </span>
                                    <span>{data.biography.placeOfBirth}</span>
                                </li>
                                <li>
                                    <span> <i className='fas fa-star'></i>first apperance : </span>
                                    <span>{data.biography.firstAppearance}</span>
                                </li>
                                <li>
                                    <span> <i className='fas fa-star'></i>publisher : </span>
                                    <span>{data.biography.publisher}</span>
                                </li>
                                <li>
                                    <span> <i className='fas fa-star'></i>alignment : </span>
                                    <span>{data.biography.alignment}</span>
                                </li>
                                </ul> ) : null}
                                {/* end of the Biography tab */}

                                
                                {/* Connections */}
                                {(connections!=false)?(
                                <ul className='tab-body-single connections'>
                                    <li>
                                        <span>group-affilation</span>
                                        <span>{data.connections.groupAffiliation}</span>
                                    </li>
                                    <li>
                                        <span>relatives</span>
                                        <span>{data.connections.relatives}</span>
                                    </li>
                                </ul>) : null}
                                {/* end of the Connections */}
                                {(work!=false)? (
                                 <ul className='tab-body-single work'>
                                    <li>
                                        <span>occupation</span>
                                        <span>{data.work.occupation}</span>
                                    </li>
                                    <li>
                                        <span>base</span>
                                        <span>{data.work.base}</span>
                                    </li>
                                </ul>) : null}
                            </div>
                            {/* end of the body tabs */}
                        </div>

                    </div>
                   </div>
            </div>

        </div>):null}
    </>
  )
}

export default SuperHeros