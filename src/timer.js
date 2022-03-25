import React from 'react';

function TimerComponent(){
    const [time, setTime] = React.useState(0);
    console.log('컴포넌트 업데이트');
    
    React.useEffect(function(){
        setTime(time+1);
    },[]);
    return(
    <div>
        <h3>{time} seconds</h3>
        <button> go up by one second</button>
    </div>

    );
}

export default TimerComponent;