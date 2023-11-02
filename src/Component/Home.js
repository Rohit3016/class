import HomeStyle from '../CSS/HomeStyle.css'
import admission from '../Images/admissions_open.jpg'
import result0 from  '../Images/Results-Banner-0.jpg'
import Features from './Features'
import Description from './DescriptionComp'
import CentersComp from './CentersComp'
import CoursesComp from './CoursesComp'

function Home(){
    return(
        <>
                {/* Admission-Banner */}
    
    <div className="container-fluid">
        <div className='admissionBanner'>
          <img src={admission} width='100%' alt='admissionBanner' />
        </div>

        <hr/>
        <div className='container'>
        <Description/>
        </div>
        <hr/>

        <CoursesComp/> 

                          {/* Result Banner */}

          <div className="row mt-3 mb-5">
            
            <div className="col-md-12">
            <img src={result0} width='100%' alt="result"/>
            </div>

          </div>

        <Features />
        <CentersComp/>
      

    </div>   {/* container last div tag   */}


        


        
        </>
    )
}
export default Home