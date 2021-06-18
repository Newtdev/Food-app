import { element } from './base';
import { saved_Ingredient } from './recipeDOM';

export const pushLocalStorage = (data) => {
    // SEND THE ARRAY TO LOCAL STORAGE
    localStorage.setItem('faveRecipe', JSON.stringify(data));
    const data__returned = getFavelist();
    faveDOM(data__returned);
    clearFaveList();
};
const getFavelist = () => {
    // RETRIVING THE FROM THE LOCAL STORAGE
    return localStorage.getItem('faveRecipe') ? JSON.parse(localStorage.getItem('faveRecipe')) : [];
};

//   DISPLAYING FAVE RECIPE TO THE DOM FROM LOCAL STORAGE
const faveDOM = (data) => {
    const dataArr = data.map(ingredientList => {
        return ` 
          <small>
          <h1>${ingredientList.title}</h1>
      </small>
      <ul>
      ${saved_Ingredient(ingredientList)}
  </ul>
  <small>
      <a href=${ingredientList.source_url} target="blank">how to cook</a>
  </small>
  <button class="delete__button">clear</button>
  `;
    }).join('');
    element.fave__list.innerHTML = dataArr;
};



const clearFaveList = () => {
    document.querySelector('.delete__button').addEventListener('click', (e) => {
        localStorage.removeItem('faveRecipe');
        element.fave__list.innerHTML = '';
    });


};

/**DISPLAY FAVE RECIPE LIST WHEN PAGE LOADS */

window.addEventListener('load', () => {
    const data__returned = getFavelist();
    faveDOM(data__returned);
});