import React from 'react'

const Register = () => {
  return (
    <div>
      <div className="register mb-0 text-dark">
        <div className="container-fluid">
        <div>
            <h1 className="text-center p-3 text-light" >
                Form For Registration
            </h1>
        </div>

        <div className="row mt-5 mb-5"> 
            <div className="col-md-2"></div>
            <div className="col-md-8">
 
                    <h6>  First Name:</h6>
                    <div className="col form-floating mb-3 p-1">
                        <input type="text" className="form-control" id="floatingInput" placeholder="First Name"/>
                        <label for="floatingInput">First Name</label>
                    </div>
                    <h6>  Fathers Name:</h6>
                    <div className="col form-floating mb-3 p-1">
                        <input type="text" className="form-control" id="floatingInput" placeholder="Father's Name"/>
                        <label for="floatingInput">Father's Name</label>
                    </div>
                    <h6>  Last Name:</h6>
                    <div className="col form-floating mb-3 p-1">
                        <input type="text" className="form-control" id="floatingInput" placeholder="Father's Name"/>
                        <label for="floatingInput">Last Name</label>
                    </div>
            
                    <div>
                        <h6>Gender:</h6>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                            <label className="form-check-label" for="flexRadioDefault1">
                            Male
                            </label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
                            <label className="form-check-label" for="flexRadioDefault2">
                            Female
                            </label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
                            <label className="form-check-label" for="flexRadioDefault2">
                            Other
                            </label>
                        </div>
                        <br/>
                        <br/>
                    
                </div>
                <h6>  Phone Number:</h6>
                <div className="input-group flex-nowrap mb-3">
                    <span className="input-group-text" id="addon-wrapping">+91</span>
                    <input type="text" className="form-control" placeholder="Contact No." aria-label="Username" aria-describedby="addon-wrapping"/>
                    
                  </div>

                <h6>  Email ID:</h6>
                <div className="input-group mb-3">            
                <input type="text" className="form-control" placeholder="Email Address" aria-label="email" aria-describedby="basic-addon2"/>
                <span className="input-group-text" id="basic-addon2">@gmail.com</span>
                </div>

                <div className="row">
                    <div className="mb-3">
                        <label for="exampleFormControlTextarea1" className="form-label"><h6>Address</h6></label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                      </div>
                </div>
                <div className='row'>
                <div className="col-md-4"></div>
                <div className="col-md-4">
                <div className="col-12 p-4 ">
                <button className="btn btn-primary" type="submit">Submit form</button>
                </div>
                </div>
                <div className="col-md-4"></div>
                
                </div>
                

            </div>
            
            <div className="col-md-2"></div>
        </div>
    </div>
      </div>
    </div>
  )
}

export default Register
