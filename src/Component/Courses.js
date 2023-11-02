import courseBanner from '../Images/course_banner.jpg'
import CoursesComp from './CoursesComp'

function Courses(){
    return(
        <>

        <div className="row mt-5 ">
            <div className="col-md-12">
            <img src={courseBanner} alt="course_banner" width="100%"/>
            </div>
        </div>

        <CoursesComp/>

        
       
        </>
    )
}
export default Courses 