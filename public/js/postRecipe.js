/*let addIngredientsBtn = document.getElementById('addIngredientsBtn');
let ingredientList = document.querySelector('.ingredientList');
let ingredeintDiv = document.querySelectorAll('.ingredeintDiv')[0];


var ingredientsArray=[];
addIngredientsBtn.addEventListener('click', function(){
  ingredientsArray.push(document.getElementById('ingredients').value);
  let newIngredients = ingredeintDiv.cloneNode(true);
  let input = newIngredients.getElementsByTagName('input')[0];
  input.value = '';
  ingredientList.appendChild(newIngredients);
});*/






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
//selected region
var region="";
function getSelectValue(){
        region = document.getElementById('region').value;
			
}
  //      console.log(region); 

    
  
  var checkboxes=document.querySelectorAll('.dietary');
  var listArray=[];

  for(var checkbox of checkboxes)
  {
      checkbox.addEventListener('click',function(){
        if(this.checked == true)
        {
          console.log(this.value);
          listArray.push(this.value);
        }
        else{
          console.log("You unchecked");
          listArray =listArray.filter(e=> e !== this.value)
        }
      })
  }
 


const addnewrecipe= (e) =>{
   
        e.preventDefault();
     
        console.log("submit");
        const recipeObj = {
            dish_name:document.querySelector("#dish_name").value,
            instructions:document.querySelector("#instructions").value,
            ingredients:document.querySelector("#ingredients").value,
            regions:region,
            dietary:listArray.toString(),
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
        console.log("akchoices "+listArray);

}
document.getElementById("upload_widget").addEventListener("click", function(){
    myWidget.open();
  }, false);
document.querySelector("#newRecipeForm").addEventListener("submit",addnewrecipe);

