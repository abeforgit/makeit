function required(value) {
    return value ? undefined : 'Required';
}

function matchPW(value, allValues) {
    return value === allValues.createPass ? undefined : "Passwords must match!";
}

function validEmail(value) {
    return value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
        ? 'Invalid email address'
        : undefined;
}

export { required, matchPW, validEmail}