import React from "react";
//import {Link} from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import {FaLongArrowAltRight} from "react-icons/fa"
import NavBar from "../Component/Navbar123";

const Home = () => {
    const navigate = useNavigate();
    return ( 
        <div className="my-container">
            <NavBar/>
            <div className="content-description">
                Building digital solutions that empower your business
            </div>
            <div className="text-center">
                <button 
                    className="btn btn-success get-started-button"
                    onClick={() => navigate("/projects")}> Get Started <FaLongArrowAltRight/> </button>
            </div>
        </div>
    );
}
 
export default Home;