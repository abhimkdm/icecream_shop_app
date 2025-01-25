//Name validation
export const _IsValidFname = (fname: string) => {
    const nameRegEx = /^[a-zA-Z]+$/;
    return nameRegEx.test(fname);
}

//Email validation
export const _IsValidEmail = (email : string) => {
    //pattern matching
    const emailRegEX = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    return emailRegEX.test(email);
}

//Password validation
export const _IsValidPass = (password : string) => {
    const passRegEx = /^[a-zA-Z]\w{3,14}$/;
    return passRegEx.test(password);
}

//Confirm Password Validation / compare the passwords
export const _IsValidConfirmPass = (password: string, confirmPassword: string) => {
    if (password === confirmPassword) return confirmPassword;
}

//Mobile Number validation
export const _IsValidMobileNo = (mobileNo: string) => {
    const mobileRegEx =/^[0-9]{10}$/;
    return mobileRegEx.test(mobileNo);
}