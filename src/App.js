//import logo from './logo.svg';
import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomeFeature from "./features/Home";
import CourseFeature from "./features/Course";
import QuestionFeature from "./features/Question";
import ConsultantFeature from "./features/Consultant";
import ContactFeature from "./features/Contact";
import BlogFeature from "./features/Blog";
import BlogDetailsPage from "./features/Blog/BlogDetailsPage";
import AuthenLayoutRoot from "./features/Authentication/AuthenLayoutRoot";
import Login from "./features/Authentication/Login";
import Register from "./features/Authentication/Register";
import RootLayout from "./features/Layout/RootLayout";
import PrivateRootLayout from "./features/Layout/PrivateRootLayout";
import FilteredBlogs from "./features/Blog/FilteredBlogs";
import FilteredBlogRootLayout from "./features/Layout/FilteredBlogRootLayout";
import FeaturedBlogs from "./features/Blog/FeaturedBlogs";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<HomeFeature />} />
          <Route path="/khoa-hoc" element={<CourseFeature />} />
          <Route path="/cau-hoi-thuong-gap" element={<QuestionFeature />} />
          <Route path="/tu-van" element={<ConsultantFeature />} />
          <Route path="/lien-he" element={<ContactFeature />} />
          <Route path="/thu-vien" element={<BlogFeature />} />
          <Route path="/thu-vien/:id" element={<BlogDetailsPage />} />
          <Route path="/thu-vien/chu-de" element={<FilteredBlogRootLayout />}>
            <Route index element={<FilteredBlogs />} />
            <Route
              path="/thu-vien/chu-de/bai-viet-noi-bat"
              element={<FeaturedBlogs />}
            />
          </Route>
        </Route>

        <Route
          path="/xac-thuc"
          element={
            <PrivateRootLayout>
              <AuthenLayoutRoot />
            </PrivateRootLayout>
          }
        >
          <Route index element={<Login />} />
          <Route path="/xac-thuc/dang-ky" element={<Register />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
