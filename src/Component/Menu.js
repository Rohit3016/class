import { NavLink } from 'react-router-dom'
import logo from '../Images/logo.jpg'
import MenuStyle from '../CSS/MenuStyle.css'

function Menu(){
    return(
        <>
        <header>
            <div className="container container-flex">
                <div className='logocontainer'>
                    <img src={logo} alt="Logo" className='logo' />
                </div>
                <nav>
                    <div className='list'>
                        <NavLink to="/" className="listItem" >Home</NavLink>
                        <NavLink  to="/About" className="listItem" >About Us</NavLink>
                        <NavLink  to="/Courses" className="listItem" >Courses</NavLink>
                        <NavLink  to="/Contact" className="listItem" >Contact Us</NavLink>
                        <NavLink  to="/Centers" className="listItem" >Our Centers</NavLink>
                        <NavLink  to="/CurrentAffairs" className="listItem" >Current Affairs</NavLink>
                    </div>
                </nav>

            </div>

        </header>
        </>
    )
}
export default Menu