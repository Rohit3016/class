import '../node_modules/bootstrap/dist/css/bootstrap.css'
import {Route,Routes} from 'react-router-dom'
import Home from './Component/Home'
import About from './Component/About'
import Courses from './Component/Courses'
import Contact from './Component/Contact'
import Centers from './Component/Centers'
import Footer from './Component/Footer'
import Pre from './Component/Pre'
import Mains from './Component/Mains'
import Interview from './Component/Interview'
import Comprehensive from './Component/Comprehensive'
import Test from './Component/Test'
import Optional from './Component/Optional'
import CurrentAffairs from './Pages/CurrentAffairs'
import News_Home from './Pages/News_Home'
import Categories from './Pages/Categories'
import Register from './Component/Register'

// import Footer from './Component/Footer'

import Error from './Component/Error'
import Menu from './Component/Menu'
const App = () => {
    return (
        <>
        <Menu/>    
        <Routes>
        
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>}/>
        <Route path='/Courses' element={<Courses/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/Centers' element={<Centers/>}/>
        <Route path='/Pre' element={<Pre/>}/>
        <Route path='/Mains' element={<Mains/>}/>
        <Route path='/Interview' element={<Interview/>}/>
        <Route path='/Comprehensive' element={<Comprehensive/>}/>
        <Route path='/Test' element={<Test/>}/>
        <Route path='/Optional' element={<Optional/>}/>
        <Route path='/CurrentAffairs' element={<CurrentAffairs/>}/>
        <Route path='/Register' element={<Register/>}/>
        <Route path='/CurrentAffairs/' element={<News_Home/>}/>
        <Route path='/CurrentAffairs/News_Home' element={<News_Home/>}/>
        <Route path='/CurrentAffairs/General' element={<Categories cat="general"/>}/>
        <Route path='/CurrentAffairs/Business' element={<Categories cat="business"/>}/>
        <Route path='/CurrentAffairs/Entertainment' element={<Categories cat="entertainment"/>}/>
        <Route path='/CurrentAffairs/Health' element={<Categories cat="health"/>}/>
        <Route path='/CurrentAffairs/Science' element={<Categories cat="science"/>}/>
        <Route path='/CurrentAffairs/Sports' element={<Categories cat="sports"/>}/>
        <Route path='/CurrentAffairs/Technology' element={<Categories cat="technology"/>}/>
        <Route path='*' element={<Error/>}/>
        
        </Routes>
        <Footer/> 
        </>
    )
}

export default App