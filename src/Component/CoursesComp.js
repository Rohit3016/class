import React from 'react'
import Pre from './Pre';
import pre from '../Images/Pre.png'
import Mains from './Mains'
import mains from '../Images/mains.jpg'
import Interview from './Interview'
import interview from '../Images/Interview-final.png'
import Comprehensive from './Comprehensive'
import comprehensive from '../Images/Comprehensive.png'
import Test from './Test'
import test from '../Images/Test_series.png'
import Optional from './Optional'
import optional from '../Images/Optional.png'
import { Link } from 'react-router-dom';

const CoursesComp = () => {
  return (
    <div>
      <div className="alert alert-danger text-dark text-center fs-1 mt-5" role="alert">
          Our Courses</div>
        
          <div className="row mt-2">
            
              <div className="col-md-1"></div>
              <div className="col-md-10">

              <div className="row mt-2">

                <div className="col-md-4 p-5">
                  <div className="card text-center">
                    <Link to="/Pre"><img src={pre} className="card-img-top" alt="Preliminary"/></Link>
                    <div className="card-body">
                      <h5 className="card-title text-center">Prelims Preparation</h5>
                      <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt saepe laudantium nemo rerum quam iusto, ab omnis porro, voluptatibus distinctio aliquid alias reprehenderit corrupti eveniet libero quae?</p>
                      <Link to="/Pre" className="btn btn-primary">Know More</Link>
                    </div>
                  </div>
                </div>


                <div className="col-md-4 p-5">
                  <div className="card text-center">
                    <Link to="/Mains"><img src={mains}className="card-img-top" alt="Mains"/></Link>
                    <div className="card-body">
                      <h5 className="card-title text-center">Mains Preparation</h5>
                      <p className="card-text ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt saepe laudantium nemo rerum quam iusto, ab omnis porro, voluptatibus distinctio aliquid alias reprehenderit corrupti eveniet libero quae?</p>
                      <Link to="/Mains" className="btn btn-primary">Know More</Link>
                    </div>
                  </div>
                </div>


                <div className="col-md-4 p-5">
                  <div className="card text-center">
                    <Link to="/Interview"><img src={interview} className="card-img-top" alt="Interview"/></Link>
                    <div className="card-body">
                      <h5 className="card-title text-center">Mock Interviews</h5>
                      <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt saepe laudantium nemo rerum quam iusto, ab omnis porro, voluptatibus distinctio aliquid alias reprehenderit corrupti eveniet libero quae?</p>
                      <Link to="/Interview" className="btn btn-primary"> know More</Link>
                    </div>
                  </div>
                </div>

              </div>

              <div className="row mt-2">

              <div className="col-md-4 p-5">
                  <div className="card text-center">
                    <Link to='/Comprehensive'><img src={comprehensive} className="card-img-top" alt="Comprehensive"/></Link>
                    <div className="card-body">
                      <h5 className="card-title text-center">Comprehensive</h5>
                      <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt saepe laudantium nemo rerum quam iusto, ab omnis porro, voluptatibus distinctio aliquid alias reprehenderit corrupti eveniet libero quae?</p>
                      <Link to='/Comprehensive' className="btn btn-primary">Know More</Link>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 p-5">
                  <div className="card text-center">
                  <Link to='/Test'><img src={test} className="card-img-top" alt="Test"/></Link>
                    <div className="card-body">
                      <h5 className="card-title text-center">Test-Series</h5>
                      <p className="card-text ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt saepe laudantium nemo rerum quam iusto, ab omnis porro, voluptatibus distinctio aliquid alias reprehenderit corrupti eveniet libero quae?</p>
                      <Link to='/Test' className="btn btn-primary">Know More</Link>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 p-5">
                  <div className="card text-center">
                  <Link to='/Optional'><img src={optional} className="card-img-top" alt="Optional"/></Link>
                    <div className="card-body">
                      <h5 className="card-title text-center">Optional</h5>
                      <p className="card-text ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt saepe laudantium nemo rerum quam iusto, ab omnis porro, voluptatibus distinctio aliquid alias reprehenderit corrupti eveniet libero quae?</p>
                      <Link to='/Optional' className="btn btn-primary">Know More</Link>
                    </div>
                  </div>
                </div>

              </div>


              </div>
              <div className="col-md-1"></div>

          </div>
    </div>
  )
}

export default CoursesComp
