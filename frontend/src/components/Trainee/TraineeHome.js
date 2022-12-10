import Navbar from "../navbar/Navbar";
import React, { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom';
import { NewCourse } from '../courses/NewCourse';
import Avatar from '@mui/material/Avatar';
import EditIcon from '@mui/icons-material/Edit';

import {getTraineeCourses, getTraineeDetails} from '../../API/TraineeAPI';
import "./TraineeHome.css";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';




    
export function TraineeHome (){
    const navigate = useNavigate();
  const [courses,setCourses] = useState([]);
  const [details,setDetails]=useState("");
  const getCourses = async () =>{
    
    setCourses ((await getTraineeCourses(localStorage.getItem("token"))).slice(0,3));
    // alert(courses);
  }
  const [countryNumber,setCountryNumber]=useState();
  const handleCountryNumber = (x) =>{
    setCountryNumber(x);
  }
  const getDetails=async ()=>{
    setDetails(await getTraineeDetails())
  }
  useEffect(()=>{
    getCourses();
  getDetails()
  },[courses,details])

 
    return(
        <div className = "TraineeHomeMain">
          
    
        <div>
             <Navbar items={["Home","My Courses","All Courses"]}
               handleCountryNumber={handleCountryNumber}
               select="Home" nav={["/TraineeHome","/TraineeCourses","/TraineeAllCourses"]} scroll={["","",""]}  />
        </div>
        <div className="mainDetailsTrainee">
        <div className="homeCoursesTrainee">
          {courses.map((course) => <NewCourse course={course}   country={countryNumber}/>)}

          </div>

        <div className="traineeDitails">
        <Avatar className="TraineeAvatar"
       sx={{ backgroundColor: '#0277bd' ,width: 100, height: 100 ,fontSize:55}}
        >
          { details && details.Name.substring(0,1) }
            {/* {instructor && instructor.Name.substring(0,1)+instructor.Name.split(" ")[1].substring(0,1)} */}
            
        </Avatar>
           <h5 className="traineeName">{details && details.Name}</h5>
           <h5 className="traineeEmail">{details && details.Email}</h5>
           <button className="AccountCircleButton" onClick={() => navigate('/instructorProfile')}>
       <AccountCircleIcon  color="primary" sx={{ fontSize: 35  }} className="AccountIconClick"/>
       </button>

        </div>
        </div>
        </div>
    );
}