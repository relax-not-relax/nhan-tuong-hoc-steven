//import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import HomeFeature from './features/Home';
import CourseFeature from './features/Course';
import QuestionFeature from './features/Question';
import ConsultantFeature from './features/Consultant';
import ContactFeature from './features/Contact';
import BlogFeature from './features/Blog';
import BlogDetailsPage from './features/Blog/BlogDetailsPage';


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<HomeFeature />} />
        <Route path='/khoa-hoc' element={<CourseFeature />} />
        <Route path='/cau-hoi-thuong-gap' element={<QuestionFeature />} />
        <Route path='/tu-van' element={<ConsultantFeature />} />
        <Route path='/lien-he' element={<ContactFeature />} />
        <Route path='/thu-vien' element={<BlogFeature />} />
        <Route path='/thu-vien/:id' element={< BlogDetailsPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
