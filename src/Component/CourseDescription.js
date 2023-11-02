import React from 'react'
import det from '../Images/details.jpg'
import reg from '../Images/Register.jpg'
import con from '../Images/Contact.jpg'
import details from '../pdf/Details.pdf'

import { Link } from 'react-router-dom'

const CourseDescription = () => {
  return (  
    <div>
                            {/* Short Description */}
    <div className="row">
        
        <div className="col-md-1 bg-body-tertiary"></div>
        <div className="col-md-10 bg-body-tertiary">
            
            <p className="text-dark p-5 pb-0 fs-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. At reiciendis delectus ipsum aspernatur ad quaerat iure voluptate ut corrupti nisi quas mollitia magni excepturi, ea neque, repellendus sint et quam dicta dolor nam natus numquam! Porro sit, illo blanditiis dolorum in minima at ipsum commodi facere illum, recusandae unde cumque reiciendis incidunt adipisci possimus quisquam non quia molestias nobis est ut quae atque quaerat! Maxime pariatur adipisci corporis laborum repellat nam obcaecati voluptate aut exercitationem tenetur rerum ad aperiam doloribus quos, iste corrupti tempora itaque mollitia assumenda voluptatem ducimus? Expedita laudantium sint voluptate, repellat sit iure velit quasi soluta quos voluptas modi praesentium possimus. Magni nam, amet sunt fugit rerum laborum fuga culpa blanditiis laudantium? Vitae alias rem recusandae, id dignissimos inventore veniam corrupti labore assumenda cumque earum possimus dolorem esse eum ullam harum? Animi, accusamus rem tempore deserunt officia id laboriosam et harum saepe amet repudiandae esse? Odit, cum!</p>
            <p className="text-dark p-5 pt-0 pb-0 fs-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. At reiciendis delectus ipsum aspernatur ad quaerat iure voluptate ut corrupti nisi quas mollitia magni excepturi, ea neque, repellendus sint et quam dicta dolor nam natus numquam! Porro sit, illo blanditiis dolorum in minima at ipsum commodi facere illum, recusandae unde cumque reiciendis incidunt adipisci possimus quisquam non quia molestias nobis est ut quae atque quaerat! Maxime pariatur adipisci corporis laborum repellat nam obcaecati voluptate aut exercitationem tenetur rerum ad aperiam doloribus quos, iste corrupti tempora itaque mollitia assumenda voluptatem ducimus? Expedita laudantium sint voluptate, repellat sit iure velit quasi soluta quos voluptas modi praesentium possimus. Magni nam, amet sunt fugit rerum laborum fuga culpa blanditiis laudantium? Vitae alias rem recusandae, id dignissimos inventore veniam corrupti labore assumenda cumque earum possimus dolorem esse eum ullam harum? Animi, accusamus rem tempore deserunt officia id laboriosam et harum saepe amet repudiandae esse? Odit, cum!</p>
            
        </div>   
        <div className="col-md-1 bg-body-tertiary"></div>
        </div>


            {/* Cards */}

        <div className="row bg-body-tertiary">
        <div className="col-md-1 p-5"></div>
        <div className="col-md-10 p-5">
          <div className="row mt-2">
          <div className="col-md-4 p-5">
            <div className="card text-center">
              <a href="pdf/Details.pdf"><img src={det} className="card-img-top" alt="Preliminary"/></a>
              <div className="card-body">
                <a href={details} className="btn btn-primary">Get Details</a>
              </div>
            </div>
          </div>
    
          <div className="col-md-4 p-5">
            <div className="card text-center">
              <a href="contact_us.html"><img src={con} className="card-img-top" alt="Mains"/></a>
              <div className="card-body">
                <Link to='/Contact' className="btn btn-primary">Contact Us</Link>
              </div>
            </div>
          </div>
    
          <div className="col-md-4 p-5">
            <div className="card text-center">
              <a href="contact_us.html"><img src={reg} className="card-img-top" alt="Interview"/></a>
              <div className="card-body">
              <Link to="/Register" className="btn btn-primary" >Register Now</Link>
              </div>
            </div>
          </div>
        </div>
        </div>
        
      </div> 
      <div><hr/></div>
      
    </div>
  )
}

export default CourseDescription
