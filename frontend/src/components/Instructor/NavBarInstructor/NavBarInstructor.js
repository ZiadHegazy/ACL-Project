import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom';

import {BiSearch} from 'react-icons/bi'
import {BsPerson} from 'react-icons/bs'
import {HiOutlineMenuAlt4} from 'react-icons/hi'
import {AiOutlineClose} from 'react-icons/ai'
import {AiOutlineSearch} from 'react-icons/ai'

import {FaFacebook,FaInstagram,FaTwitter,FaPinterest,FaYoutube} from 'react-icons/fa'

import './NavBarInstructor.css'

import {Link} from 'react-scroll'
export {default as NavBarInstructor} from './NavBarInstructor';

function NavBarInstructor() {
    const [nav,setNav] = useState(false)
    const handleNav = () => setNav(!nav)
    const [searchBar,setSearchBar] = useState(false)
    const handleSearchBar = () => setSearchBar(!searchBar)
    const navigate = useNavigate();

  return (
    <div className={nav? 'navbar navbar-bg' : 'navbar'}>
        <div className={nav? 'logo dark' : 'logo'}>
            <h2>Learn.</h2>
        </div>
        <ul className="nav-menu">            
            <Link to='home' smooth={true} duration="500"><li>Home</li></Link>
            <Link to='instCourses' smooth={true} duration="500" onClick = {()=> navigate("/InstructorCourse")}><li>My Courses</li></Link>
            {/* <Link to='' smooth={true} duration="500"><li>Calendar</li></Link> */}
            <Link to='' smooth={true} duration="500"><li>About Us</li></Link>
        </ul>
        <div className="nav-icons">
            <BiSearch className="icon" onClick={handleSearchBar} style={{marginRight: '1rem'}}/>
            <BsPerson className="icon" style={{marginRight: '1rem'}} onClick={()=> navigate('/courses')} />
        </div>
            <div className="hamburger" onClick={handleNav}>
                {!nav ? (<HiOutlineMenuAlt4 className="icon" />):(<AiOutlineClose className="icon" style={{color:"#000"}} />)}
            </div>

            <div className={nav? 'mobile-menu active' : "mobile-menu"}>
                <ul className="mobile-nav">
                <Link to='home' smooth={true} duration="500" ><li>Home</li></Link>
            <Link to='instCourses' smooth={true} duration="500"><li>Courses</li></Link>
            {/* <Link to='' smooth={true} duration="500"><li>Calendar</li></Link> */}
            <Link to='' smooth={true} duration="500"><li>About Us</li></Link>
                </ul>
                <div className='mobile-menu-bottom'> 
                    <div className="menu-icons">
                        <button>Search</button>
                        <button>Account</button>
                    </div>
                    <div className="social-icons">
                        <FaFacebook className="icon" />
                        <FaInstagram className="icon" />
                        <FaTwitter className="icon" />
                        <FaPinterest className="icon" />
                        <FaYoutube className="icon" />
                    </div>
                </div>
            </div>
            <div className={searchBar? 'SearchDiv' : 'nonSearchDiv'}>
                <div className="searchBarForm">

            <form className="form">
              <button className="filterButton">
                Filter
              </button>
            <div>
                <input type="text" placeholder="Enter Course name"/>
            </div>
        <div>
            <button><AiOutlineSearch className='icon'/></button>
        </div>
        </form>
                </div>
                </div>
              

    </div>
    
  )
}

export default NavBarInstructor