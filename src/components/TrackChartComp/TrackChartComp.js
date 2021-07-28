import './TrackChartComp.css';
const TrackChartComp = () => {
    const trackChartData = [{ month: "Jan", amt: 100, },
        { month: "Feb", amt: 300, },
        { month: "Mar", amt: 50, },
        { month: "Apr", amt: 500, },
        { month: "May", amt: 600, },
        { month: "Jun", amt: 200, },
        { month: "Jul", amt: 800, },
        { month: "Aug", amt: 600, },
        { month: "Sep", amt: 300, },
        { month: "Oct", amt: 200, },
        { month: "Nov", amt: 900, },
        { month: "Dec", amt: 1000, }];
    var high = 1000;
    var low = 100;
    var points = [ high / 3 ,high / 2 ,high / 1.5];
    
    return (
        <div className="TrackChartComp">
            <div>
                {trackChartData.map((e) => {
                    return (<div style={
                        e.amt >= points[0] && e.amt <= points[1] ? { color: "red" } : e.amt >= points[1] && e.amt <= points[2] ? { color: "orange" } : e.amt >= points[2] ? { color: "green" } : {color: "red"}                    }>
                        { }
                    </div>);
                    
                })}
                asdasdasd
                    asdasdasd
            </div>
        </div>
    );
};

export default TrackChartComp;