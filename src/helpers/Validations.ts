
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