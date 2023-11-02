import React from 'react'
import details from '../pdf/Details.pdf'

import { Link } from 'react-router-dom'

const Description = () => {
  return (
    <div>
      <div className='row text-center '>
                  <p className='text-danger fs-1 fw-bolder'>R. P. Classes</p>
                </div>
                <div className='row mt-3 mb-3 fs-4'>
                    <p>
                    R. P. classes offers top UPSC Courses and finest carefully chosen Study material to help you clear UPSC Civil Services examinations. We have uniquely designed our programs to create maximum focus by limiting the classroom strength to minimum and providing Smart projector technology-based visuals Live classes for better understanding & approach.
                    </p>
                    <p>R.P.Classes is India’s well-known Institute preparing candidates for the Civil Services Examination at all the three levels – Preliminary Test, Main Examination and Personality Test. The Institute of R.P.Classes was founded in 1989 by S. S. Chaudhary Sir with the aim of empowering IAS candidates to enhance thier skills to Clear UPSC Civil Services Examination like IAS, IFS, IRS, IPS and State Level PCS examinations. A Journey of pride and passion starts with one step in the right direction and we are with you in this journey Institute's Vice Chairman S.S. Chaudhary Sir has been guiding the students for the last 33 years.</p>
                </div>

                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-3"> <a href={details} className="btn btn-outline-danger" target='_blank' > Get Details</a></div>
                    <div className="col-md-3"> <Link to="/Register" className="btn btn-outline-danger" >Register Now</Link></div>
                    <div className="col-md-3"></div>
                    
              </div>
    </div>
  )
}

export default Description
