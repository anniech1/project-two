document.querySelector("#editBtn").addEventListener("click",e=>{
    console.log(e.target);
    const new_dish_name = e.target.getAttribute("data-recipe-dish_name");
    console.log(new_dish_name)
    const new_instructions = e.target.getAttribute("data-recipe-instructions");
    console.log(new_instructions)
    const new_ingredients = e.target.getAttribute("data-recipe-ingredients");
    console.log(new_instructions)
    const new_region = e.target.getAttribute("data-recipe-region");
    console.log(new_instructions)
    const new_dietary = e.target.getAttribute("data-recipe-dietary");
    console.log(new_instructions)
    const recipe = e.target.getAttribute("data-recipeid");
    console.log(recipeId)
    fetch(`/api/recipe/${recipeId}`,{
        method:"PUT",
        body:JSON.stringify({
            dish_name:new_dish_name,
            instructions:new_instructions,
            ingredients:new_ingredients,
            region:new_region,
            dietary:new_dietary
        }),
        headers:{
            "Content-Type":"application/json"
        }
    }).then(res=>{
        if(res.ok){
           location.reload()
        } else {
            alert("Error editing recipe")
        }
    })
})