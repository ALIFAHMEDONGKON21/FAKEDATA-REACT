import { useEffect } from "react";
import { useState } from "react";

import Countrry from "./compunent/countres/Countrry";


const Countr = () => {
    const [ countries, setcountires]=useState([])
    useEffect(()=>{
        fetch`https://restcountries.com/v3.1/all`
        .then(res=>res.json())
        .then(data=>setcountires(data))
    },[])
    return (
        <div>
            <p>country:{countries.length}</p>
            <h1>hello{countries.length}</h1>
            {
                countries.map(countrry=><Countrry key={countrry.cca2} countrry={countrry}></Countrry> )
            }

        </div>
    );
};

export default Countr;