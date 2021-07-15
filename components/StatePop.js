import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PopulateField from './PopulateField';

const StatePop = (props) => {
    const [covid, setCovid] = useState('Sweden');
    const [dataItems, setDataItems] = useState([]);
    const loopStates = props.results;
    let today = new Date();
    let day = today.getDate()
    let month = today.getMonth()
    let year = today.getFullYear()

    // console.log(loopStates);

    const loopTest = () => {
        // console.log('hello');
        return loopStates.map((st) => (
            <option value={st.Country} key={st.Country}>
                {st.Country}
            </option>
        ));
    };

    const fetchConData = async () => {
        // console.log(passCountry)
        const response = await axios.get(
            `https://api.covid19api.com/live/country/${covid}/status/confirmed/date/${year}-${month}-${day}T00:00:00Z`
        );
        // console.log(response.data[0]);
        setDataItems(response.data[0]);

    };

    useEffect(() => {
        fetchConData()
    }, [covid])

    function GrabSt(e) {
        e.preventDefault();



        const stTarget = e.target.value;
        loopStates.map((state) => {
            if (stTarget === state.Country) {
                setCovid(state.Country);

            }
        });




        // try {
        //     props.fetchConData(covid)
        // } catch (error) {
        //     console.log(error)
        // }
        // props.fetchConData(covid)

    }



    // console.log(covid)
    // console.log(year, month, day)
    // console.log(dataItems)fetchConData()

    return (
        <div className="state-dropdown">
            <select onChange={(e) => GrabSt(e)}>
                {loopTest()}
            // //
            </select>

            <PopulateField feilds={dataItems} />
        </div>
    );
};

export default StatePop;