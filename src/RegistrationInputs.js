import React from 'react'


class TextBox extends React.Component{

    render(){
        const {input, label, type, meta: {touched, error, warning}} = this.props;
        return (
            <div>
                <input {...input} placeholder={label} type={type} />
                {touched &&
                    ((error && <span>{error}</span>) ||
                    (warning && <span>{warning}</span>))}
            </div>
        )

    }
}

export {TextBox}

