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
var option = ()=> {
        var select = document.getElementById('region');
				return select.options[select.selectedIndex].value;
}
        console.log(region); 

        function checkAll() {  
          var inputs = document.querySelectorAll('.dietary');   
          for (var i = 0; i < inputs.length; i++) {   
              inputs[i].checked = true;   
          }   
  }  
  
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
 
/*  function getCheckboxValue() {  
    var checkboxes = 
    document.getElementsByClassName('dietary');

    var result = " ";
  
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            result= result +checkboxes[i].value + " "  ;
            console.log("ak" ,result)
            return result.toString();
                ;
        }
    }
    
    
  }/*




 
    
    var l1 = document.getElementById("halal");  
    var l2 = document.getElementById("vegan");  
    var l3 = document.getElementById("vegetarian");  
    var l4 = document.getElementById("gluten-free");  
    var l5 = document.getElementById("dairy-free");  
    var l6 = document.getElementById("sugar-free");  
       
    var res=" ";   
    if (l1.checked == true){  
      var dietary1 = document.getElementById("halal").value;  
      res += dietary1 + ",";   
    }   
    else if (l2.checked == true){  
      var dietary2 = document.getElementById("vegan").value;  
       res += dietary2 + ",";   
    }  
    else if (l3.checked == true){  
      
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
    return document.getElementById("result").innerHTML = "You have not selected anything";  
    }  
    return res;  
  }  
  */
  
  

const addnewrecipe= (e) =>{
   
        e.preventDefault();
     
          
        
        
        //const ingredientsArr=document.querySelectorAll("#ingredients").value;
        console.log("submit");
        const recipeObj = {
            dish_name:document.querySelector("#dish_name").value,
            instructions:document.querySelector("#instructions").value,
            ingredients:"ingredientsArr",
            regions:"option",
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

