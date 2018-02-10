import React from 'react'
import { CountryDropdown } from 'react-country-region-selector'


class CountrySelection extends React.Component {
    render() {
        const {input: { value, onChange }, meta:{ touched, error, warning}} = this.props;
        return (
            <div>
                <CountryDropdown value={value} onChange={onChange} defaultOptionLabel="Country of Residence"/>
                    {touched &&
                    ((error && <span>{error}</span>) ||
                    (warning && <span>{warning}</span>))}
            </div>
        )
    }

}

export default CountrySelection