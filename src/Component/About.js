import AboutStyle from '../CSS/AboutStyle.css'
import aboutBanner from '../Images/about-us-banner.jpg'
import director from '../Images/Company-Director.jpg'
import faculty from '../Images/Faculty.jpg'
import Features from './Features'
import Description from './DescriptionComp'
function About(){
    return(
    <>
    <div className="container-fluid">
            <div className="row mt-5">
            <div className="col-md-12">
            <img src={aboutBanner} alt="about-us-banner" width="100%"/>
            </div>
            </div> 


                        {/* Short Description */}
      
      
            <div className="row mt-2 bg-body-tertiary"> 
                <div className="col-md-12">
                    <div><hr/></div>
                    
                    <Description/>

                    <div><hr/></div>
                </div>    
            </div>

                    {/* Directors Note */}


        <div className="row mt-5 mb-5 p-5 bg-secondary">
            
        <div className="col-md-1"></div>
        <div className="col-md-4">
            <br/>
            <br/>
            <br/>
            <br/>
            <img src={director} alt="director" width="100%"/>
            <br/>
            <hr/>
            <h2 className="text-center">S. S. Chaudhary</h2>
            <h6 className="text-center">R. P. Classes Director</h6>
            <hr/>
            </div>
        
        <div className="col-md-1"></div>
        <div className="col-md-5 p-3">
            <h1 className="text-center text-emphasis-dark"> Directors Note </h1><br/>
            <p className="fs-5 text-emphasis-dark"> 
                R.P.Classes is India’s well-known Institute preparing candidates for the Civil Services Examination at all the three levels – Preliminary Test, Main Examination and Personality Test. The Institute of R.P.Classes was founded in 1989 by S. S. Chaudhary Sir with the aim of empowering IAS candidates to enhance thier skills to Clear UPSC Civil Services Examination like IAS, IFS, IRS, IPS and State Level PCS examinations. A Journey of pride and passion starts with one step in the right direction and we are with you in this journey Institute's Vice Chairman S.S. Chaudhary Sir has been guiding the students for the last 33 years.</p>  
              
              
        </div>
        <div className="col-md-1"></div>
        </div>



                            {/* OUR FACULTY */}


        <div className="row mb-5 mt-5 p-5 faculty" >

        <div className="col-md-1"></div>
        <div className="col-md-6 text-light fs-5 ">
            <h1 className="text-center">Our Faculty</h1>
            <br/>
            <p>It is the quality of teachers that determines the quality of students. Guided by this thought, R.P.Classes has an experienced pool of faculty members comprising highly acclaimed retired professors, dynamic individuals, scholars, academicians, and subject matter experts. They are well known all over India for their easy, student-friendly, and effective teaching methodologies. The vast experience, in-depth knowledge of the content, and grasp of the UPSC's pattern of examination, combined with the ability to customize the teaching as per individual needs make our faculty the most sought-after in the field.</p>
           
        </div>

        <div className="col-md-4">
            <br/><br/>
            <br/><br/>
            <img src={faculty} alt="faculty" className="border" width="100%"/>
        </div>
        <div className="col-md-1"></div>
        
        </div>

      <Features />

    </div>          {/*   container closing tag */}
    </>
    )
}
export default About 