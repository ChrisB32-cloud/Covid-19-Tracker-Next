import React from 'react';
// import './PopulateField.css';

const PopulateField = (props) => {
    // const { state, positive, hospitalized, death } = props.feilds;

    // const mortRatePre = (death / positive) * 100;
    // const mortRate = mortRatePre.toFixed(2);

    // const CheckFields = () => {
    //     if (!state) {
    //         return <h1>Select State for details</h1>;
    //     } else {
    //         // console.log('value changed to: ', state);
    //         return (
    //             <div className="popFieldBox">
    //                 <h1>State: {state === null ? 'N/A' : state} </h1>
    //                 <h2>Positive: {positive === null ? 'N/A' : positive} </h2>
    //                 <h2>Hospitalized :{hospitalized === null ? 'N/A' : hospitalized}</h2>
    //                 <h2>Deaths: {death === null ? 'N/A' : death} </h2>
    //                 <h2>Mortality: {mortRate === 'NaN' ? 'N/A' : mortRate}% </h2>
    //             </div>
    //         );
    //     }
    // };

    // const ShowStateData = () => {
    //     return <CheckFields />;
    // };
    // return <ShowStateData />;
    console.log(props.feilds);
    return (
        <div>
            <h1>Cases in Country</h1>
        </div>
    )
};

export default PopulateField;