import Home from './components/Home/home';
import Explore from './components/Explore/explore';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import NaviBar from './components/Navbar/navbar';
import CoursesCards from './components/Course/coursesCards';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  



  return (
    <div>
<NaviBar/>
<Routes>
  <Route path='/' element={<Home />} />
  {/* Other specific routes */}
  <Route path='/courses/:id' element={<CoursesCards />} />
  <Route path='/Explore/*' element={<Explore />} />
</Routes>

    </div>
  );
}

export default App;
