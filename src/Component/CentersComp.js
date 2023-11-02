import React from 'react'
import Records from '../centers.json'
const CentersComp = () => {
  return (
    <div>
      <div className="row mt-5" >
                
                <div className="col-md-12"><h1 className="text-center mt-3 mb-5 border text-dark bg-danger">Our Centers </h1></div>
                
              </div>

              <div className="row mt-2">
                  
                  <div className="col-md-1"></div>
                  <div className="col-md-10">
                      <div className="row mt-2">
            {Records.map((record)=>{
                return(            
                      <div className="col-md-4">
                          <div className="card text-center m-3">
                          <div key={record.id}></div>
                            <img src={record.city} className="card-img-top "  alt="location_Image"/>
                            <div className="card-body">
                              <a href="https://goo.gl/maps/WxzX24B5UAgrrEwx8" className="btn btn-outline-danger" target="_blank">{record.name}</a>
                              
                            </div>
                          </div>
                        </div>
                        )
            })}      
                    </div>
                    </div>
                    </div>

                <div className="col-md-1"></div>
            
                
                
                


                {/* Embedded Map */}

      <div className="row mt-5 mb-5 bg-body-tertiary">
            <h1 className="text-center mt-3 mb-5 border bg-info">
                 Main Center
                </h1>
              <div className="col-md-1"></div>
              <div className="col-md-10">
                
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d448200.9790557505!2d76.81303166047277!3d28.642642477723296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce2c493267ab3%3A0xe1a5cde8f030ff83!2sUnion%20Public%20Service%20Commission!5e0!3m2!1sen!2sin!4v1675595183168!5m2!1sen!2sin" width="100%" height="400" style={{border:0}}></iframe>
              </div>
              <div className="col-md-1"></div>
        </div>
    </div>
  )
}

export default CentersComp
