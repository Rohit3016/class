import intBanner from '../Images/Banner_interview.png'
import CourseDescription from './CourseDescription'

function Interview(){
    return(
        <>
        <div className="container-fluid">
                    {/* banner */}
        <div className="row mt-5 ">
            <div className="col-md-12">
            <img src={intBanner} alt="int_banner" width="100%"/>
            </div>
        </div>


        <div className="row mt-2">
        <div><hr/></div>
        <h1 className="text-center text-dark p-3 bg-info">About Interview Course</h1>
        </div>
        <CourseDescription/>

            
    </div>    {/* Last Div tag of container*/}
       
        </>
    )
}
export default Interview 