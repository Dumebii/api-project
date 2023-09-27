import data from './data.json'
import {useParams, useNavigate } from "react-router-dom";

let name = data.name;


export default function CountryDetails() {

    const { name } = useParams
    return(<div>
       <h3>pppp</h3>
    </div>)
} 