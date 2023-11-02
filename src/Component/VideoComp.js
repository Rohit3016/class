import React from 'react'

const VideoComp = () => {
  return (
    <div>
                              {/* TOPPERS TALK */}

                              <div className="row mt-5 mb-5">
            <h1 className="text-center border bg-info">Toppers Talk</h1>
            <div className="col-md-1"></div>
            <div className="col-md-10">
                
                <div className="row">
                    <div className="col-md-4 p-5">
                        <div className="card text-center">
                          <iframe width="560" height="315" src="https://www.youtube.com/embed/V_6_HgSaI9s" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"  className="card-img-top" style={{border:0}}></iframe>
                            <div className="card-body p-3">
                              <h5 className="card-title ">Utkarsh Dwivedi</h5>
                              
                              <a href="https://youtu.be/V_6_HgSaI9s" className="btn btn-primary">Watch on You-Tube</a>
                            </div>
                          </div>
                    </div>
                    <div className="col-md-4 p-5">
                        <div className="card text-center">
                          <iframe width="560" height="315" src="https://www.youtube.com/embed/mlPKAcBn3BY" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                          className="card-img-top" style={{border:0}}></iframe>
                
                            <div className="card-body p-3">
                              <h5 className="card-title ">Aishwarya Verma</h5>
                              
                              <a href="https://youtu.be/OhJWg-0qdI0" className="btn btn-primary">Watch on You-Tube</a>
                            </div>
                          </div>
                    </div>
                    <div className="col-md-4 p-5">
                      <div className="card text-center">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/n0ykhRL3Vik" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        className="card-img-top" style={{border:0}}></iframe>
                          <div className="card-body">
                            <h5 className="card-title ">Gamini Singla</h5>
                            
                          <a href="https://youtu.be/n0ykhRL3Vik" className="btn btn-primary">Watch on You-Tube</a>
                          </div>
                        </div>
                  </div>

                </div>

            </div>
            <div className="col-md-1"></div>
          </div> 



                    {/* Mock Interviews */}


          <div className="row mt-5 mb-5">
          <h1 className="text-center border bg-info">Mock Interviews</h1>
            <div className="col-md-1"></div>
            <div className="col-md-10">
                
                <div className="row">
                    <div className="col-md-4 p-5">
                        <div className="card text-center">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/lsJBGvyiAHI" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"  className="card-img-top" style={{border:0}}></iframe>
                            <div className="card-body">
                              <h5 className="card-title ">Akshat Jain</h5>
                              
                              <a href="https://youtu.be/lsJBGvyiAHI" className="btn btn-primary">Watch on You-Tube</a>
                            </div>
                          </div>
                    </div>
                    <div className="col-md-4 p-5">
                        <div className="card text-center">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/OhJWg-0qdI0" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"  className="card-img-top" style={{border:0}}></iframe>
                            <div className="card-body">
                              <h5 className="card-title ">Srushthi Deshmukh</h5>
                              
                              <a href="https://youtu.be/OhJWg-0qdI0" className="btn btn-primary">Watch on You-Tube</a>
                            </div>
                          </div>
                    </div>
                    <div className="col-md-4 p-5">
                        <div className="card text-center">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/hnDaisrMeWc" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            className="card-img-top" style={{border:0}}></iframe>
                            <div className="card-body">
                              <h5 className="card-title ">Shreyans Kumat</h5>
                              
                              <a href="https://youtu.be/hnDaisrMeWc" className="btn btn-primary">Watch on You-Tube</a>
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

export default VideoComp
