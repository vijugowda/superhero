import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {useNavigate, Link} from 'react-router-dom'

const HeroList = () => {
    const navigate = useNavigate();

    const[data, setData] = useState([]);
    const [tabledark, setTableDark] = useState("");

    const getData =() =>{
        axios.get(`https://akabab.github.io/superhero-api/api/all.json`)
        .then((res)=> {
        // console.log(res.data);
        setData(res.data);
        });
    }

  useEffect(()=>{
    getData();
  }, [])

  const redirect = (id) =>{
   navigate(`/details/${id}`)
  }


  return (
    <>
    <div className='container'>
    {/* app header */}
    <div className='app'>
    <h2 className='app-header-title text-center' style={{color:'var(--red-color)'}}>List of SuperHeros</h2>
    {/* switch starts */}
    <div className="form-check form-switch">
        <input
          className="form-check-input"
          id="flexSwitchCheckDefault"
          type="checkbox"
           onClick={() => {
            if (tabledark === "table-dark") setTableDark("");
            else setTableDark("table-dark");
          }}
        />
      </div>
{/* end of the switch */}
{/* table starts */}
    <table className={`table ${tabledark}`}>
        <thead>
            <tr>
                <th scope= 'col'></th>
                <th scope= 'col'>Name</th>
                <th scope= 'col'></th>
                <th scope= 'col'></th>
            </tr>
        </thead>
        {data.map((eachData)=>{
            return (
                <tbody key={eachData.id}>
                    <tr>
                        <td scope='row'>{eachData.id}</td>
                        <td style={{color:'#fff'}}>{eachData.name}</td>
                        <td>
                            <button className='tab-head-single'  onClick={() =>redirect(eachData.id)}>
                                Show Details
                            </button>
                        </td>
                       
                    </tr>
                </tbody>
            )
        })}
    </table>
    {/* end of the table */}
    </div>
    </div>
    </>
  )
}

export default HeroList