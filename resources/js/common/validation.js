export const required = value => {
    return value && value.length > 0 ||  'Required';
};
export const emailVailidator = value => {
   return  value && /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value) || 'Invalid email address';
}
export const passwordValidator = password => {
    /* eslint-disable no-useless-escape */
    const regExp = /(?=.*[a-z])(?=.*[~`!@#$%^&*()--+={}[]|:;"'<>,_₹]){8}/
    const regExp2 = /(?=.*\d)(?=.*[a-z]){8}/
    const regExp3 = /(?=.*\d)(?=.*[~`!@#$%^&*()--+={}[]|:;"'<>,_₹]){8}/
    /* eslint-enable no-useless-escape */
    const validPassword = regExp.test(password)
    const validPassword2 = regExp2.test(password)
    const validPassword3 = regExp3.test(password)

    return (validPassword || validPassword2 || validPassword3) || 'Password must contain at least one number, one lowercase and one uppercase letter, and at least 8 or more characters';

}

