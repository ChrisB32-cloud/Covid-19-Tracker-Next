import React, { useState } from 'react';
// import PopulateField from './PopulateField';

const StatePop = (props) => {
    const [covid, setCovid] = useState([]);
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
        e.preventDefault();
        const stTarget = e.target.value;
        loopStates.map((state) => {
            if (stTarget === state.Country) {
                setCovid(state);
            }
        });
    }

    // console.log(props.results)

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