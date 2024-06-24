import './ProgressBar.css'
import React from 'react';

export default function ProgressBar({percentage}){
    
    // const [percent,setPercent] = useState(0);

    // useEffect(() => {
    //     const interval =setInterval(() => {
    //         setPercent((prev) => (prev < 100)?prev=prev+10:prev=0)
    //     })
    // })
    
    return(

        <div className="container">
            <div className="progress-bar" style={{width :`{percentage}%`}}>
                <span className="progress">{percentage}</span>
            </div>
        </div>
    );
}