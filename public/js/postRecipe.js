let addIngredientsBtn = document.getElementById('addIngredientsBtn');
let ingredientList = document.querySelector('.ingredientList');
let ingredeintDiv = document.querySelectorAll('.ingredeintDiv')[0];

addIngredientsBtn.addEventListener('click', function(){
  let newIngredients = ingredeintDiv.cloneNode(true);
  let input = newIngredients.getElementsByTagName('input')[0];
  input.value = '';
  ingredientList.appendChild(newIngredients);
});

const samplerecipe=  {
      
    "dish_name": "Mawalahqqqqqqqqqq",
    "ingredients": "eggs ,flour,water, sugar, salt",
    "instructions": "to be announced",
    "regions": "East Africa",
    "dietary": "Halal",
    "img_url":"https://res.cloudinary.com/dbusqnlkm/image/upload/v1659985915/cld-sample-4.jpg"
    
  }
        console.log("submit1");
const addnewrecipe= (e) =>{
   
        e.preventDefault();
    
        console.log("submit");
        const recipeObj = {
            dish_name:document.querySelector("#recipe-dish_name").value,
            instructions:document.querySelector("#recipe-instructions").value,
            ingredients:document.querySelector("#recipe-ingredients").value,
           // region:document.querySelector("#recipe-region").value,
           // dietary:document.querySelector("#dietary-region").value,
             
        }
    
        fetch("/api/recipes",{
            method:"POST",
            body:JSON.stringify(samplerecipe),
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
    

}
document.querySelector("#newRecipeForm").addEventListener("submit",addnewrecipe);

