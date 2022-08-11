const newFormHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#recipe-name').value.trim();
    
    const ingredients = document.querySelector('#recipe-ingredients').value.trim();
  
}
  
  
  document
    .querySelector('.new-project-form')
    .addEventListener('submit', newFormHandler);
