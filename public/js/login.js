const loginForm = document.querySelector("#login-form");
document.querySelector("#login").addEventListener("submit",e=>{
    e.preventDefault();
    const userObj = {
        username:document.querySelector("#login-username").value,
        password:document.querySelector("#login-password").value,
    }
    console.log(userObj)
    fetch("/api/users/login",{
        method:"POST",
        body:JSON.stringify(userObj),
        headers:{
            "Content-Type":"application/json"
        }
    }).then(res=>{
        if(res.ok){
           location.href = "/profile"
        } else {
            alert("Error logging in!")
        }
    })
})

const signupForm = document.querySelector("#signup-form");
signupForm.addEventListener("submit",e=>{
    e.preventDefault();
        const userObj = {
            name:signupForm.querySelector("#signup-user_name").value,
            email:signupForm.querySelector("#signup-userEmail").value,
            username:signupForm.querySelector("#signup-username").value,
            password:signupForm.querySelector("#signup-password").value,
            
        };
        console.log(userObj);
        const loginUrl = `/api/${document.querySelector("#acct-type-signup").value}s`
        console.log(loginUrl);
        fetch(loginUrl,{
            method:"POST",
            body:JSON.stringify(userObj),
            headers:{
                "Content-Type":"application/json"
            }
        }).then(res=>{
            if(res.ok){
                location.href = "/profile"
            } else {
                alert("Error signing up!")
            }
        })
    })
