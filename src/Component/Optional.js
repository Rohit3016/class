import optBanner from '../Images/Banner_optional.jpg'
import CourseDescription from './CourseDescription'

function Optional(){
    return(
        <>
        <div className="container-fluid">
                    {/* banner */}
        <div className="row mt-5 ">
            <div className="col-md-12">
            <img src={optBanner} alt="opt_banner" width="100%"/>
            </div>
        </div>


        <div className="row mt-2">
        <div><hr/></div>
        <h1 className="text-center text-dark p-3 bg-info">About Optional Course</h1>
        </div>
        <CourseDescription/>

            
    </div>    {/* Last Div tag of container*/}
       
        </>
    )
}
export default Optional 