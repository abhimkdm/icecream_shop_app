//Error messages
export const errorMessages = {
    name: "Please enter name",
    email: "Please enter valid email id",
    password: "Please enter valid password",
    confirmPassword: "Password and confirm password should be same",
    mobileNo: "Please enter valid mobile number",
    address: "Please eneter valid address",
    country: "Please select a country",
    state: "Please select a state",
    city: "Please enter valid city",
    zipcode: "Please enter valid zip code",
}

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

export const _IsValidAddress = (address: string) => {
    const addressRegEx = /^[a-zA-Z]+$/;
    return addressRegEx.test(address);
}

export const _IsValidCountry = (country: string) => {
    const countryRegEx = /^[a-zA-Z]+$/;
    return countryRegEx.test(country);
}

export const _IsValidState = (state: string) => {
    const stateRegEx = /^[a-zA-Z]+$/;
    return stateRegEx.test(state);
}

export const _IsValidCity = (city: string) => {
    const cityRegEx = /^[a-zA-Z]+$/;
    return cityRegEx.test(city);
}

export const _IsValidZipcode = (zipcode: string) => {
    const zipcodeRegEx =/^[0-9]{6}$/;
    return zipcodeRegEx.test(zipcode);
}