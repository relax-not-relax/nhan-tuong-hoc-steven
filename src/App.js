//import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import HomeFeature from './features/Home';
import CourseFeature from './features/Course';


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<HomeFeature />} />
        <Route path='/khoa-hoc' element={<CourseFeature />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
