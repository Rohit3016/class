import ContactStyle from '../CSS/ContactStyle.css'
import contactBanner from '../Images/contact-banner (1).jpg'
function Contact(){
    return(
        <>
        <div className="container-fluid">


                          {/* Contact Banner */}
        <div className="row mt-4 mb-4">
            <div className="col-md-12">
            <img src={contactBanner} alt="contact-us-banner" width="100%"/>
            </div>
        </div>


        <div className="row mb-5 mt-5 p-5 contactBack" >
            <h1 className="text-center text-emphasis-dark fs-1">Contact Us</h1>
            <div className="col-md-1"></div>
            <div className="col-md-4">
                <hr/>
                <h2 className="text-danger" >Address :</h2>
                <p className="text-light fs-5 text-bg-dark">Jitoji Apartment , Bibvavewadi, Pune, Mahrashtra 411009</p>
                <hr/>
                <h2 className="text-danger" >Email :</h2>
                <p className="text-light fs-5 text-bg-dark">rpclasses@gmail.com</p>
                <hr/>
                <h2 className="text-danger" >Contact no. :</h2>
                <p className="text-light fs-5 text-bg-dark">+919685743214</p>
                <hr/>
            </div>
            <div className="col-md-1"></div>
                       
                       
                       {/* Form  */}


            <div className="col-md-5">
                <hr/>
                <h2 className="text-danger" >Get a call back from us</h2>
                <div className="row">
                    <div className="col form-floating mb-3 p-1">
                        <input type="text" className="form-control" id="floatingInput" placeholder="First Name"/>
                        <label for="floatingInput">First Name</label>
                    </div>
                    <div className="col form-floating mb-3 p-1">
                        <input type="text" className="form-control" id="floatingInput" placeholder="Last Name"/>
                        <label for="floatingInput">Last Name</label>
                    </div>
                  </div>
                <div className="row "> 
                    <div className="input-group flex-nowrap mb-3">
                        <span className="input-group-text" id="addon-wrapping">+91</span>
                        <input type="text" className="form-control" placeholder="Contact No." aria-label="Username" aria-describedby="addon-wrapping"/>
                        
                      </div>
                </div>
                <div className="row">
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Email Address" aria-label="email" aria-describedby="basic-addon2"/>
                        <span className="input-group-text" id="basic-addon2">@gmail.com</span>
                      </div>
                      
                </div>
                <div className="row">
                    <div className="mb-3">
                        <label for="exampleFormControlTextarea1" className="form-label">Reason of contact</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                      </div>
                </div>
                <div className='row'>
                <div className="col-md-4"></div>
                <div className="col-md-4">
                <div className="col-12 p-4 ">
                <button className="btn btn-primary" type="submit">Submit</button>
                </div>
                </div>
                <div className="col-md-4"></div>
                
                </div>


            </div>
            <div className="col-md-1"></div>
        </div>
        



        </div>              {/* Last Div tag of container*/}
        </>
    )
}
export default Contact