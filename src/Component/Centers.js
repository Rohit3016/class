import CentersComp from './CentersComp'
import mapBanner from '../Images/map-banner.jpg'

function Centers (){
    return(
        <>
        <div className="row mt-5 ">
            <div className="col-md-12">
            <img src={mapBanner} alt="map_banner" width="100%"/>
            </div>
        </div>
        <CentersComp/>
        
       
        </>
    )
}
export default Centers  