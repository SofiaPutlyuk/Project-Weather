
export const SendInfo = (userData) => {
fetch("http://localhost:3000/users",{
    method:"POST",
    headers:{
        "Content-Type": "apllication/json"
    },
    body:JSON.stringify(userData)
})
.then(responsive => responsive.json())
.then(info => {
    console.log(info)
})
}