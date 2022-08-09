document.querySelector("#newRecipeForm").addEventListener("submit",e=>{
    e.preventDefault();
    const recipeObj = {
        dish_name:document.querySelector("#recipe-dish_name").value,
        instructions:document.querySelector("#recipe-instructions").value,
        ingredients:document.querySelector("#recipe-ingredients").value,
        region:document.querySelector("#recipe-region").value,
        dietary:document.querySelector("#dietary-region").value,
    }

    fetch("/api/recipes",{
        method:"GET",
        body:JSON.stringify(recipeObj),
        headers:{
            "Content-Type":"application/json"
        }
    }).then(res=>{
        if(res.ok){
           location.reload()
        } else {
            alert("Error posting recipe")
        }
    })

    fetch("/api/recipes",{
        method:"POST",
        body:JSON.stringify(recipeObj),
        headers:{
            "Content-Type":"application/json"
        }
    }).then(res=>{
        if(res.ok){
           location.reload()
        } else {
            alert("Error posting recipe")
        }
    })
})

