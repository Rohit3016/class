import FooterStyle from '../CSS/FooterStyle.css'
import social from '../Images/social.png'

function Footer(){
    return(
        <>
        <div className="container1">
            <div className='socialMedia'>
            <img src={social}  className='img-fluid img-footer' alt=''/>
            </div>
            <div className='copy'>
                <hr/>
            <h3>CopyRight @2023</h3>
                <hr/>
            </div>
            <div className='made'>
            <hr/>
            <h3 >Made By -Rohit Patil</h3>
            <hr/>
            </div>
        </div>
        </>
    )
}
export default Footer