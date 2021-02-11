import { loader } from './addLoader';
import {element} from './base';
export const displayRecipeData= (recipeData) => {
    const displayData = recipeData.map (recipe => {
                return `
                <li class="recipe__list">
                <img src=${recipe.image} alt=${recipe.title} id=${recipe.recipe_id}>
       </li>  
       `
}).join("");

clearDOM(displayRecipeData,displayData,element.dataList)
}


// CLEAR RECIPE IMAGE DOM WHEN ANOTHER SEARCH IS MADE
 const clearDOM = (recipe,data,elem)=> {
    if(recipe){
        EmptyDOM(elem)
        elem.insertAdjacentHTML('afterbegin',data);
    } else{
        elem.insertAdjacentHTML('afterbegin',data);
    }
    
}
// SET RECIPE IMAGE DOM TO EMPTY
const EmptyDOM = (elem) => {
    elem.innerHTML = '';    
}


const a = (words) => {

}
a('thisisthenameofmyschool')

/** DISPLAY RECIPE DETAILS */
export const recipeDetails_DOM = (recipe)=>{
    loadObj(recipe)
    const creatElem = document.createElement('article');
    // creatElem.classList.add('details_container')
    creatElem.innerHTML = `
    <div class="image_container">
    <img src=${recipe.image_url} alt="heart">
    <div class="delete__container">
                        <div class="cycle"id='details__cycle'>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <div class="delete" id='${recipe.recipe_id}'>
                            To Fave
                        </div>
                    </div>
    <div class="recipe_details_container">
     <span class="recipe__label">
        <h1>${recipe.title}</h1>
    </span>
    <span class="calories">
        <h1>Publisher: <small>${recipe.publisher}</small></h1>
    </span>
    <span class="ingredient__list">
        <span>
            <h1>Ingredient List</h1>
        </span>
        <ul> 
        ${saved_Ingredient(recipe)}
        </ul>
    </span>
</div>
`
    // clearDetails(element.detailSection.appendChild(creatElem),creatElem);
    if(!creatElem){
        element.detailSection.appendChild(creatElem);
    } else {
        EmptyDOM(element.detailSection)
        element.detailSection.appendChild(creatElem);
        
    }
}


// export const clearDetails = (details,child)=> {
    // }
    
    const saved_Ingredient = (data) => {
        const savedIngredient = data.ingredients.map(data => {
            return `<li>${data}</li>`
        }).join('');
        return savedIngredient;
    };
    

    let localStorageArr = [];
     export const loadObj= (data)=> {
        element.detailSection.addEventListener('click', (e) => {
            const targetID = e.target.id;
            const delete_Class = document.querySelector('.delete');
            if(targetID){
               delete_Class.classList.add('visible');
            };

            delete_Class.addEventListener('click', (e) => {
                const deleteID = delete_Class.id;
                if(data.recipe_id === deleteID){
                    // faveDOM(data);
                    localStorageArr = [...localStorageArr,data];
                    console.log(localStorageArr);
                    pushLocalStorage(localStorageArr);

                }
            });
            // new_data(deleteID);
            // awaitRecipeDetails(deleteID);
          });
  }

  const pushLocalStorage = (val) => {
    localStorage.setItem('Fave Recipe', JSON.Stringify(val))
  }

  const faveDOM = (data) => {
      const create_Element = document.createElement('ul');
      create_Element.classList.add('fave_images_container');
      create_Element.innerHTML = `
      <li>
                    <img src=${data.image_url} alt="fave">
                    <div class="delete__container">
                        <div class="cycle" id='fave__delete'>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <div class="delete">
                            delete
                        </div>
                    </div>
                </li>
      `
      element.addFave.appendChild(create_Element);
  }