import React from 'react'
import career from '../Images/Career-01.png'
import f1 from '../Images/1.png'
import f2 from '../Images/2.png'
import f3 from '../Images/03.svg'
import f4 from '../Images/4.png'
import f5 from '../Images/5.png'
import f6 from '../Images/6.png'
import VideoComp from './VideoComp'
const Features = () => {
  return (
    <div>
                          {/* Why Us */}


                          <div className="row mt-5">
           
           <div className="col-md-1"></div>
           <div className="col-md-10">
           <h1 className="text-center text-danger">Why Us</h1>
            <p className="text-center fs-5 mt-3">Being Best Coaching Institute for UPSC in India, Vajirao Institute has the responsibility to deliver the Best UPSC Coaching in India and Affordable UPSC coaching fees. We develop our systematic teaching method for all our students. Our faculty encourages students to develop a positive attitude to clear UPSC exam. Prepare your dream career with the help of our high-quality mentorship. With the passion of crossing, we are constantly working hard to provide unique learning experiences.</p> 
            <div className="row mt-2">
               
               <div className="col-md-1"></div>
               <div className="col-md-10">
                   <div className="row mt-2">
                   <div className="col-md-4">
                       <div className="card text-center m-3">
                         <a href="pre.html"><img src={f1} className="card-img-top p-5" alt="Preliminary"/></a>
                         <div className="card-body">
                           <h5 className="card-title text-center">32 years</h5>
                         </div>
                       </div>
                     </div>
               
                     <div className="col-md-4">
                       <div className="card text-center m-3">
                         <a href="mains.html"><img src={f2} className="card-img-top p-5" alt="Mains"/></a>
                         <div className="card-body">
                           <h5 className="card-title text-center">Leaders in UPSC</h5>
                         </div>
                       </div>
                     </div>
               
                     <div className="col-md-4 ">
                       <div className="card text-center m-3">
                         <a href="interview.html"><img src={f3} className="card-img-top p-5" alt="Interview"/></a>
                         <div className="card-body">
                           <h5 className="card-title text-center">Qualified Faculty</h5>
                         </div>
                       </div>
                     </div>
                   </div>

                   <div className="row mt-2">
            <div className="col-md-4">
                <div className="card text-center m-3">
                  <a href="pre.html"><img src={f4} className="card-img-top p-5" alt="Preliminary"/></a>
                  <div className="card-body">
                    <h5 className="card-title text-center">Quality Study Materials</h5>
                  </div>
                </div>
              </div>
        
              <div className="col-md-4">
                <div className="card text-center m-3">
                  <a href="mains.html"><img src={f5} className="card-img-top p-5" alt="Mains"/></a>
                  <div className="card-body">
                    <h5 className="card-title text-center">Personal Attention</h5>
                  </div>
                </div>
              </div>
        
              <div className="col-md-4 ">
                <div className="card text-center m-3">
                  <a href="interview.html"><img src={f6} className="card-img-top p-5" alt="Interview"/></a>
                  <div className="card-body">
                    <h5 className="card-title text-center">Topper’s Seminar</h5>
                  </div>
                </div>
              </div>
            </div>
           
               </div>
               </div>
               <div className="col-md-1"></div>

        
            </div>     
        </div>

        <VideoComp/>

                        {/* Career With Us */}


        <div className="row mt-5 mb-5 p-5 bg-secondary">

            <div className="col-md-1"></div>
            <div className="col-md-5 p-3">
                <br/>
                <h1 className="text-center text-emphasis-dark">Career With Us</h1>
                <br/>
                <p className="fs-5 text-emphasis-dark"> 
                    We are committed to quality and integrity, and strongly believe the success of our students depend greatly on the competence and attitude of our experts. If you feel that you have the right mindset and also passion and dedication, do contact us. We always welcome fresh talent.</p>  
                <br/>
                
                  <p className="fs-6 text-emphasis-dark">To become a part of R.P. Classes Team, Please send your resume to  talent@rpclasses.in</p>
            </div>
            <div className="col-md-1"></div>
            <div className="col-md-4">
                <br/>
                <img src={career} className="border" alt="Our_Team" width="100%"/>
                <br/>
                <br/>
            </div>
            
            <div className="col-md-1"></div>
            </div>
    </div>
  )
}

export default Features
