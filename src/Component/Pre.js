import preBanner from '../Images/Banner_Pre.png'
import CourseDescription from './CourseDescription'

function Pre(){
    return(
    <>
    <div className="container-fluid">
                    {/* banner */}
        <div className="row mt-5 ">
            <div className="col-md-12">
            <img src={preBanner} alt="pre_banner" width="100%"/>
            </div>
        </div>

        <div className="row mt-2">
        <div><hr/></div>
        <h1 className="text-center text-dark p-3 bg-info">About Prelims Course</h1>
        <CourseDescription/>
        </div>
        

            
    </div>    {/* Last Div tag of container*/}
    </>
    )
}
export default Pre 