let user={
    name:"pranay",
    email:"jyothipranay@gmail.com",

};
let details={
    address:"43-a,banglore-64",

};
let userDetails={
    ...user,
    ...details,
    phoneNum:9000768759,

};
console.log(userDetails);