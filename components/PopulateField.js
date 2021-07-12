import React from 'react';
// import './PopulateField.css';
import styles from '../styles/PopulateField.module.css'

const PopulateField = (props) => {
    const { Country, Confirmed, Active, Recovered, Deaths } = props.feilds;

    // const mortRatePre = (death / positive) * 100;
    // const mortRate = mortRatePre.toFixed(2);

    const CheckFields = () => {
        if (props.feilds === []) {
            return <h1>Select Country for details</h1>;
        } else {
            // console.log('value changed to: ', state);
            return (
                <div className={styles.popContainer}>
                    <h1>State: {Country === null ? 'N/A' : Country} </h1>
                    <h2>Positive: {Confirmed === null ? 'N/A' : Confirmed} </h2>
                    <h2>Hospitalized :{Active === null ? 'N/A' : Active}</h2>
                    <h2>Deaths: {Recovered === null ? 'N/A' : Recovered} </h2>
                    <h2>Mortality: {Deaths === 'NaN' ? 'N/A' : Deaths} </h2>
                </div>
            );
        }
    };

    const ShowStateData = () => {
        return <CheckFields />;
    };
    return <ShowStateData />;

};

export default PopulateField;


 // console.log(props.feilds);
    // return (
    //     <div className={styles.popContainer}>
    //         <h1>Cases in Country {Country} </h1>
    //         <h2>Confirmed: {Confirmed} </h2>
    //         <h2>Active: {Active} </h2>
    //         <h2>Recovered: {Recovered} </h2>
    //         <h2>Deaths: {Deaths} </h2>
    //     </div>
    // )