document.querySelector("#deleteBtn").addEventListener("submit",e=>{
    e.preventDefault();
    fetch(`/api/recipe/${recipeId}`,{
        method:"DELETE",
        body:JSON.stringify(recipeObj),
       
    }).then(res=>{
        if(res.ok){
           location.reload()
        } else {
            alert("Error delete recipe")
        }
    })
})