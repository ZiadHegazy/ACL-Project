import {Routes, Route, useNavigate} from 'react-router-dom';
import {Navbar} from './components/navbar/Navbar'
import {Bgvid} from './components/bgvid/Bgvid'
import {Courses} from './components/courses/Courses'
import {AllCourses} from './components/courses/AllCourses'
import { BiLogIn } from 'react-icons/bi';

export default function App() {
  const navigate = useNavigate();


  return (
    <div>
      <div>
        <Routes>
          <Route path="/courses" element={<Navbar items={["Home"]} select="Home" nav={["/home"]}/>} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}

function Home() {
  return <div>
    <Navbar items={["Home","About","Caleneder"]} select="Home" nav={["/home","/courses"]} />
  <Bgvid />
  <Courses />
    </div>
}

