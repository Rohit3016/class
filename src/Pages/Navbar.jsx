import { NavLink } from 'react-router-dom'
import CurrentAffairsBanner from '../Images/current_affairs_banner.jpg'
function Navbar(){
    return(
        <>
        {/* <h1 className="text-center">Imp News</h1> */}
        <div className="row ">
            <div className="col-md-12">
            <img src={CurrentAffairsBanner} alt="banner" width="100%"/>
            </div>
        </div>

        <header>
            <div className="newsContainer container-flex">
                
                <nav>
                    <div className='list '>
                        <NavLink to="/CurrentAffairs/News_Home" className="listItem">Home</NavLink>
                        {/* <NavLink  to="/CurrentAffairs/general" className="listItem" >General</NavLink> */}
                        <NavLink  to="/CurrentAffairs/Business" className="listItem" >Business</NavLink>
                        <NavLink  to="/CurrentAffairs/Entertainment" className="listItem" >Entertainment</NavLink>
                        <NavLink  to="/CurrentAffairs/Health" className="listItem" >Health</NavLink>
                        <NavLink  to="/CurrentAffairs/Science" className="listItem" >Science</NavLink>
                        <NavLink  to="/CurrentAffairs/Sports" className="listItem" >Sports</NavLink>
                        <NavLink  to="/CurrentAffairs/Technology" className="listItem" >Technology</NavLink>
                    </div>
                </nav>

            </div>

        </header>
 {/* <nav className="navbar navbar-expand-lg bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand text-white" href="#">
        News Section</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active text-white" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <NavLink to="/CurrentAffairs/Newshome" className="nav-link text-white" activeClassName="activeItem">News_Home</NavLink>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#">General</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#">Business</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#">Entertainment</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#">Health</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#">Science</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#">Sports</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#">Technology</a>
        </li>
        
        
      </ul>
      
    </div>
  </div>
</nav> */}
        </>
    )
}
export default Navbar