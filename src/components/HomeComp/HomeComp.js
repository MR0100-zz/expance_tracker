import NewExpanceComp from '../NewExpanceComp/NewExpanceComp';
import TrackChartComp from '../TrackChartComp/TrackChartComp';
import './HomeComp.css';
const HomeComp = () => {
    return (
        <>
            <div className="HomeComp">
                <div className="WebTitle"> EXPANCE TRACKER </div>
                <NewExpanceComp />
                <br/><br />
                <TrackChartComp />
            </div>
        </>
    );
};


export default HomeComp;