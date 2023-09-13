import Home from './components/Home/home';
import Explore from './components/Explore/explore';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import NaviBar from './components/Navbar/navbar';
import CoursesCards from './components/Course/coursesCards';
import 'bootstrap/dist/css/bootstrap.min.css';
import Classes from './components/Classes/classes';
import Schedule from './components/Schedule/schedule';

function App() {
  



  return (
    <div>
<NaviBar/>
<Routes>
  <Route path='/' element={<Home />} />
  {/* Other specific routes */}
  <Route path='/courses/:id/*' element={<CoursesCards />} />
  <Route path='/classes/:id' element={<Classes />} />
  <Route path='/Explore/*' element={<Explore />} />
  <Route path='/Schedule' element={<Schedule />} />
</Routes>

    </div>
  );
}

export default App;
