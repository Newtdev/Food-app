import { loader } from './addLoader';
import {element} from './base';

// DISPLAY THE RECIPE IMAGE 
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


/** DISPLAY RECIPE DETAILS */
export const recipeDetails_DOM = (recipe)=>{
    loadObj(recipe)
    const creatElem = document.createElement('article');
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
    // ITERATING OVER THE INGREDIENT ARRAY AND DISPLAYING THE DATA
    // const saved_Ingredient = (data) => {
    //     const savedIngredient = data.ingredients.map(data => {
    //         return `<li>${data}</li>`
    //     }).join('');
    //     return savedIngredient;
    // };
    
    /** ADDING EACH RECIPE IMAGE AS FAVE AND ADDING TO THE LOCAL STORAGE */
    // ARRAY TO DATA TO LOCAL STORAGE
    // let localStorageArr = [];

     export const loadObj= (data)=> {
        element.detailSection.addEventListener('click', (e) => {
            const targetID = e.target.id;

            const delete_Class = document.querySelector('.delete');

            if(targetID){
               delete_Class.classList.add('visible');
               
               delete_Class.addEventListener('click', (e) => {
                   
                   const deleteID = delete_Class.id;
                   
                   // GETTING THE RECIPE OBJECT OF THE SELECTED RECIPE IMAGE DATAILS
                   if(data.recipe_id === deleteID){
                    //    localStorageArr = [...localStorageArr,data];
                    //    localStorageArr = [data];
                       
                       // SEND THE ARRAY TO LOCAL STORAGE
                       pushLocalStorage(data);
                       delete_Class.style.visibility = 'hidden';
                }
            });
            };


          });

  }

//   GETTING THE SELECTED IMAGE ID

// SEND THE ARRAY TO LOCAL STORAGE
const pushLocalStorage = (val) => {
    // SEND THE ARRAY TO LOCAL STORAGE
    localStorage.setItem('faveRecipe', JSON.stringify(val));
    // if(val){
    //     localStorage.setItem('faveRecipe', JSON.stringify(''));
    // }
    getFaveImage()
};


 const getFaveImage= ()=> {
    
    // RETRIVING THE FROM THE LOCAL STORAGE
    const faveImage = JSON.parse(localStorage.getItem('faveRecipe'));
    // console.log(faveImage);
    faveDOM(faveImage)
  };

  //   DISPLAYING FAVE RECIPE TO THE DOM FROM LOCAL STORAGE
  const faveDOM = (data) => {
    const createDiv = document.createElement('div');
    createDiv.classList.add('fave__list');
    createDiv.innerHTML = `
    <h1>Favourite Recipe</h1>
<small>
    <h1>${data.title}</h1>
</small>
<ul> 
${saved_Ingredient(data)}
</ul>
<small>
<h1>${data.publisher}</h1>
</small>
<button>remove</button>
`
element.displayFave.appendChild(createDiv)
};

// ITERATING OVER THE INGREDIENT ARRAY AND DISPLAYING THE DATA
const saved_Ingredient = (data) => {
    const savedIngredient = data.ingredients.map(data => {
        return `<li>${data}</li>`
    }).join('');
    return savedIngredient;
};

window.addEventListener('DOMContentLoaded', () => {
//  getFaveImage()
});