import React from 'react'
import {Field, reduxForm} from 'redux-form'


let LoginForm = function(props){
    const { handleSubmit } = props;
    return (
        <form onSubmit={handleSubmit}>
            <Field name="firstName" component="input" type="text" />
            <Field name="lastName" component="input" type="text" />
            <Field name="email" component="input" type="text" />
            <button type="submit">Submit</button>
        </form>
)
};

LoginForm = reduxForm({
    form: 'login'

})(LoginForm);

export default LoginForm