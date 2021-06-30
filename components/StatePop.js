import React, { useState } from 'react';
import axios from 'axios';
// import PopulateField from './PopulateField';

const StatePop = (props) => {
    const [covid, setCovid] = useState(null);
    const [dataItems, setDataItems] = useState([]);
    const loopStates = props.results;

    // console.log(loopStates);

    const loopTest = () => {
        // console.log('hello');
        return loopStates.map((st) => (
            <option value={st.Country} key={st.Country}>
                {st.Country}
            </option>
        ));
    };

    function GrabSt(e) {

        const fetchConData = async () => {
            // console.log(passCountry)
            // const response = await axios.get(
            //     `https://api.covid19api.com/live/country/${covid}/status/confirmed`
            // );
            // console.log(response.data);
            // setDataItems(response.data);

        };

        e.preventDefault();
        const stTarget = e.target.value;
        loopStates.map((state) => {
            if (stTarget === state.Country) {
                setCovid(state.Country);
                fetchConData()
            }
        });

        // try {
        //     props.fetchConData(covid)
        // } catch (error) {
        //     console.log(error)
        // }
        // props.fetchConData(covid)
    }



    console.log(covid)
    // console.log(dataItems)

    return (
        <div className="state-dropdown">
            <select onChange={(e) => GrabSt(e)}>
                {loopTest()}
            // //
            </select>

            {/* <PopulateField feilds={covid} /> */}
        </div>
    );
};

export default StatePop;