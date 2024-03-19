import {Routes,Route, BrowserRouter} from "react-router-dom";
import LoginPage from "./pages/login";
import SignupPage from "./pages/signup";
import HomePage from "./pages/home";
import About from "./pages/about";
import Services from "./pages/services";
import Contact from "./pages/contact";
import Footer from "./pages/footer";
import Sidebar from "./pages/adminnav";
import Adminhome from "./pages/adminhome";
import { useState } from 'react'
import CourseList from "./pages/course";
import StudentDashboard from "./pages/student";
import StudentDetailTable from "./pages/studentlist";
import AdminCourseList from "./pages/admincourse";
import CollegeList from "./pages/college";
import AdminCollege from "./pages/admincollege";
import AdminApprove from "./pages/adminapprove";
import ApplyForm from "./pages/applyform";
function App() {
  
  return (
    
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<LoginPage/>}/>
      <Route path='/signup' element={<SignupPage/>}/>
      <Route path='home' element={<HomePage/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='services' element={<Services/>}/>
      <Route path='footer' element={<Footer/>}/>
      <Route path='collegelist' element={<CollegeList/>}/>
      <Route path='course' element={<CourseList/>}/>
      <Route path='adminnav' element={<Sidebar/>}/>
      <Route path='adminhome' element={<Adminhome/>}/>
      <Route path='student' element={<StudentDashboard/>}/>
      <Route path='studentlist' element={<StudentDetailTable/>}/>
      <Route path='admincourse' element={<AdminCourseList/>}/>
      <Route path='admincollege' element={<AdminCollege/>}/>
      <Route path='adminapprove' element={<AdminApprove/>}/>
      <Route path='applyform' element={<ApplyForm/>}/>

      </Routes>
    </BrowserRouter>
    
  )
}
export default App