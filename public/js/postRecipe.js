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
//selected region
        var select = document.getElementById('region');
        var region = select.options[select.selectedIndex].value;
       
        console.log(region); 

        function checkAll() {  
          var inputs = document.querySelectorAll('.dietary');   
          for (var i = 0; i < inputs.length; i++) {   
              inputs[i].checked = true;   
          }   
  }  
  const dietary="";
  function getCheckboxValue() {  
    
    var l1 = document.getElementById("halal");  
    var l2 = document.getElementById("vegan");  
    var l3 = document.getElementById("vegetarian");  
    var l4 = document.getElementById("gluten-free");  
    var l5 = document.getElementById("dairy-free");  
    var l6 = document.getElementById("sugar-free");  
       
    var res=" ";   
    if (l1.checked == true){  
      var dietary1 = document.getElementById("halal").value;  
      res = dietary1 + ",";   
    }   
    else if (l2.checked == true){  
      var dietary2 = document.getElementById("vegan").value;  
       res += dietary2 + ",";   
    }  
    else if (l3.checked == true){  
    document.write(res);  
      var dietary3 = document.getElementById("vegetarian").value;  
      res += dietary3 + ",";   
    }  
    else if (l4.checked == true){  
      var dietary4 = document.getElementById("gluten-free").value;  
       res += dietary4 + ",";   
    }  
    else if (l5.checked == true){  
      var dietary5 = document.getElementById("dairy-free").value;  
      res += dietary5 + ",";   
    }  
    else if (l6.checked == true){  
      var dietary6 = document.getElementById("sugar-free").value;  
      res += dietary6;   
    } else {  
    //return document.getElementById("result").innerHTML = "You have not selected //anything";  
  //  }  
  //  return document.getElementById("result").innerHTML = "You have selected " + //res + " dietary";  
    return res;
  }  
  }
  dietarychecked=getCheckboxValue();
  console.log(dietarychecked);
const addnewrecipe= (e) =>{
   
        e.preventDefault();
     
          
         
        
        //const ingredientsArr=document.querySelectorAll("#ingredients").value;
        console.log("submit");
        const recipeObj = {
            dish_name:document.querySelector("#dish_name").value,
            instructions:document.querySelector("#instructions").value,
            ingredients:document.querySelector("#ingredients").value,
            regions:region,
            dietary:dietarychecked,
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

