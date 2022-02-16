import Lottie from 'react-lottie';
import * as animationData from '../components/assets/animations/history.json';


const History = () => {

    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid'
        }
      };

    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}>
            <Lottie options={defaultOptions}
                    height={350}
                    isStopped={false}
                    isPaused={false}/>
        </div>
    )

}

export default History