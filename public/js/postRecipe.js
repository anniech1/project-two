let addIngredientsBtn = document.getElementById('addIngredientsBtn');
let ingredientList = document.querySelector('.ingredientList');
let ingredeintDiv = document.querySelectorAll('.ingredeintDiv')[0];

addIngredientsBtn.addEventListener('click', function(){
  let newIngredients = ingredeintDiv.cloneNode(true);
  let input = newIngredients.getElementsByTagName('input')[0];
  input.value = '';
  ingredientList.appendChild(newIngredients);
});

var imgurl="";
var myWidget = cloudinary.createUploadWidget({
    cloudName: 'dbusqnlkm', 
    uploadPreset: 'axaukuzt'}, (error, result) => { 
      if (!error && result && result.event === "success") { 
        console.log('Done! Here is the image info: ', result); 
       
      console.log("ak ", result.info.secure_url);
     imgurl= result.info.secure_url;
      }
    }
  )


        console.log("s" +imgurl);
const addnewrecipe= (e) =>{
   
        e.preventDefault();
     
          
         
        
        const ingredientsArr=document.querySelectorAll("#ingredients").value;
        console.log("submit");
        const recipeObj = {
            dish_name:document.querySelector("#dish_name").value,
            instructions:document.querySelector("#instructions").value,
            ingredients:"ingredientsArr",
            regions:"df",
            dietary:"halal",
            img_url:imgurl  
        }
    
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
    

}
document.getElementById("upload_widget").addEventListener("click", function(){
    myWidget.open();
  }, false);
document.querySelector("#newRecipeForm").addEventListener("submit",addnewrecipe);

