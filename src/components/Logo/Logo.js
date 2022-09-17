import eye from './uchiha-eyes-0-64.png';
import Tilt from 'react-parallax-tilt';

const Logo = () => {
    return(
        <div className="ma4 mt0">
             <Tilt style={{height: '150px', width: '150px'}} className='br2 shadow-2'>
                {/* <div style={{ height: '150px',   background: 'linear-gradient(89deg, #A5FECB 0%, #20BDFF 50%, #5433FF 100%)'}}> */}
                <div style={{ height: '150px',   background: 'linear-gradient(89deg, #f5af19 0%, #f12711 100%)'}}>
                    <img src={eye} alt="eye-logo" style={{paddingTop: '25px'}}></img>
                    <h1 style={{marginTop: '-15px'}}>Gaze.AI</h1>
                </div>
            </Tilt>
        </div>
    )
}

// 'linear-gradient(89deg, #A5FECB 0%, #20BDFF 50%, #5433FF 100%)'

export default Logo;