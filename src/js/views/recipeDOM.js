import { loader } from './addLoader';
import { element } from './base';

// VARIABLE FOR PAGINTION
let recipe__Data = [];
let numberOfPage = 0;
let numberOfRecipePerPage = 10;
let currentPage = 1;


// const mediaQuery = window.matchMedia("(max-width:768px)");
// const detailsLenght = (e) => {
//     if (e.matches) {
//         numberOfPage = 5;
//         // element.leftContainer.style.height= `${recipeContainerHeight}`;
//         // const leftHeight= element.lef
//     }
// };

// mediaQuery.addListener(detailsLenght(mediaQuery));

export const displayRecipeData = (recipeData) => {
    numberOfPage = getPageNumber(recipeData);

    getDataByIndex(recipeData);

};


// RECIPE IMAGE PAGINATION



/**steps:
 * calculate the number of pages
 * get the button
 * get the number of  data per page from the index 
 * the next and prev function
 * using slice method to the the data per page
 * display to the DOM
 * add the functionality
 * 
 */

// CALCULATE THE NUMBER OF PAGES PER THE TOTAL ITEMS FROM THE DATA

const getPageNumber = (recipeData) => {
    return Math.ceil(recipeData.length / numberOfRecipePerPage);
};



// OBTAIN THE NUMBER OF PRODUCT PER PAGE
const getDataByIndex = (recipeData) => {
    const start = ((currentPage - 1) * numberOfRecipePerPage);

    const stop = start + numberOfRecipePerPage;

    recipe__Data = recipeData.slice(start, stop);

    displayData();
    getBtn(recipeData);
    checkBtns();
};

const nextPage = (recipeData) => {
    currentPage += 1;
    // console.log(recipeData);
    getDataByIndex(recipeData);

};


const prevPage = (recipeData) => {
    currentPage -= 1;
    getDataByIndex(recipeData);
};






// DISPLAY THE RECIPE IMAGE 
const displayData = () => {
    // console.log(recipe__Data);
    const displayData = recipe__Data.map(recipe => {
        return `
                <li class="recipe__list">
                <img src=${recipe.image} alt=${recipe.title} id=${recipe.recipe_id}>
       </li>  
       `;
    }).join("");

    clearDOM(displayRecipeData, displayData, element.dataList);

};


// ADD THE PAGINATION BUTTON
const getBtn = (recipeData) => {
    element.pagination.innerHTML = `
          <button class="pagination" id="prev">prev</button>
          <button class="pagination" id="next">next</button>
    `;
    document.getElementById('next').addEventListener('click', () => {
        nextPage(recipeData);
    });

    document.getElementById('prev').addEventListener('click', () => {
        prevPage(recipeData);
    });
};

// CHECK THE BUTTON WITH THE NUMBER OF THE PRODUCT GOTTEN
const checkBtns = () => {
    // console.log(numberOfPage);
    // console.log(currentPage);
    if (currentPage === numberOfPage) {
        document.querySelector('#next').disabled = true;
        // console.log(document.getElementById('next'));
    }
    if (currentPage === 1) {
        document.getElementById('prev').disabled = true;
    }
};
// CLEAR RECIPE IMAGE DOM WHEN ANOTHER SEARCH IS MADE
const clearDOM = (recipe, data, elem) => {
    if (recipe) {
        EmptyDOM(elem);
        elem.insertAdjacentHTML('afterbegin', data);
    } else {
        elem.insertAdjacentHTML('afterbegin', data);
    }

};

// SET RECIPE IMAGE DOM TO EMPTY
const EmptyDOM = (elem) => {
    elem.innerHTML = '';
};





// ADDING THE NEXT AND THE PREV BUTTON


/** DISPLAY RECIPE DETAILS */
export const recipeDetails_DOM = (recipe) => {
    loadObj(recipe);
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
`;
    // clearDetails(element.detailSection.appendChild(creatElem),creatElem);
    if (!creatElem) {
        element.detailSection.appendChild(creatElem);
    } else {
        EmptyDOM(element.detailSection);
        element.detailSection.appendChild(creatElem);

    }
};

/** ADDING EACH RECIPE IMAGE AS FAVE AND ADDING TO THE LOCAL STORAGE */

// ARRAY TO DATA TO LOCAL STORAGE
let localStorageArr = [];

export const loadObj = (data) => {
    element.detailSection.addEventListener('click', (e) => {
        const targetID = e.target.id;

        const delete_Class = document.querySelector('.delete');

        if (targetID) {
            delete_Class.classList.add('visible');

            delete_Class.addEventListener('click', (e) => {

                const deleteID = delete_Class.id;

                // GETTING THE RECIPE OBJECT OF THE SELECTED RECIPE IMAGE DATAILS
                if (data.recipe_id === deleteID) {
                    localStorageArr = [data];

                    clearFaveList(localStorageArr);

                    // SEND THE ARRAY TO LOCAL STORAGE
                    pushLocalStorage(localStorageArr);

                    //    remove the delete button
                    delete_Class.style.visibility = 'hidden';
                }
            });
        };


    });

};

//   GETTING THE SELECTED IMAGE ID

// SEND THE ARRAY TO LOCAL STORAGE
const pushLocalStorage = (val) => {
    // SEND THE ARRAY TO LOCAL STORAGE
    localStorage.setItem('faveRecipe', JSON.stringify(val));
    const data__returned = getFavelist();
    faveDOM(data__returned);
};
export const getFavelist = () => {
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
      <a href=${ingredientList.source_url} target="blank">source</a>
  </small>
  <button>clear</button>

  
  `;
    }).join('');
    element.fave__list.innerHTML = dataArr;
};

const clearFaveList = (arr) => {
    document.querySelector('button').addEventListener('click', (e) => {
        const remove__faveDetails = arr.pop();
        // delete from the array that house the object
        // remove the child element containing the list
    });


};

// ITERATING OVER THE INGREDIENT ARRAY AND DISPLAYING THE DATA
const saved_Ingredient = (data) => {
    const savedIngredient = data.ingredients.map(data => {
        return `<li>${data}</li>`;
    }).join('');
    return savedIngredient;
};



/**DISPLAY FAVE RECIPE LIST WHEN PAGE LOADS */

window.addEventListener('load', () => {
    const data__returned = getFavelist();
    faveDOM(data__returned);
});