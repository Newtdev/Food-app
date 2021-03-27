import 'regenerator-runtime/runtime';
import Tab from "./views/Tab";
import SearchTerm from "./models/Search";
import { element } from './views/base';
import { get_Details } from './models/Fetch';
import { displayRecipeData, recipeDetails_DOM, getFaveImage } from './views/recipeDOM';
import { new_data } from './models/RecipeDetails';
import { loader, detailsLoader } from './views/addLoader';
import mobile from './views/mobile';
// let searchValue = element.searchQuery;
let appState = {};

element.submitText.addEventListener('submit', (e) => {
  e.preventDefault();
  //    GET THE INPUTED VALUE
  queryValue();
  // CLEAR INPUT ON CLICK OF SUBMIT BUTTON
  element.searchQuery.value = '';

});
//  GET SEARCHED RECIPE INPUTS
export const queryValue = () => {
  if (element.searchQuery.value.trim() == '') {
    alert('input a food recipe of your choice');
  } else {

    //   ADD LOADER AND FETCH DATA
    const displayAfterLoader = fetchQuery(element.searchQuery.value);

    loader(displayAfterLoader, element.recipeLoader);


  }
};

/**RECIPE DETAILS  */
//  GET ALL DATA FROM THE NEW OBJECTS AND SAVED TO THE APP STATE
const fetchQuery = async (term) => {
  appState.term = new SearchTerm(term);
  // UPDATE APP STATE
  let getQuery = await appState.term.fetchData();
  // DISPLAY RECIPE
  displayRecipeData(getQuery);
  // return getQuery;
};

element.dataList.addEventListener('click', (e) => {
  const targetList = e.target.id;

  // FETCH THE DATA BY THE ID
  if (targetList) {

    awaitRecipeDetails(targetList);

    // ADD MEDIA QUERY FUNCTION
    mediaQuery.addListener(detailsLenght(mediaQuery));

    // ADD LOADER AND FETCH DATA

  }
});

let detailsArr = [];
const awaitRecipeDetails = async (id) => {
  // GET PRODUCT BY ID AND SAVE IN THE APP STATE
  appState = await new_data(id);

  let getDetail = get_Details(appState);

  // SAVE IN AN ARRAY TO AVOID DISPLAYING TWO DETAILS AT A TIME
  detailsArr = [getDetail];
  // // ADD TO THE RECIPE DOM TO DISPLAY
  loader(detailsArr[0], element.detailsLoader);
  recipeDetails_DOM(detailsArr[0]);


};

/**  ADD THE RECIPE DETAILS CONTAINER IN THE MOBILE VIEW */
const mediaQuery = window.matchMedia("(max-width:768px)");
const detailsLenght = (e) => {
  if (e.matches) {
    // REMOVE THE RECIPE IMAGE CONTAINER ON CLICK ON THE IMAGE LIST
    element.dataContainer.classList.remove('hide_page');

    // ADD THE RECIPE DETAILS CONTAINER ON CLICK ON THE IMAGE LIST
    element.detailSection.classList.add('add__transform');
  };
};
element.home.addEventListener('click', e => {
  const targetIcon = e.target;
  if (targetIcon.classList.contains('home__image')) {

    element.detailSection.classList.remove('add__transform');

  }
});
element.heart.addEventListener('click', e => {
  const targetIcon = e.target.closest('.fa-heart');
  if (targetIcon) {
    element.detailSection.classList.remove('add__transform');
  }
});


/** WHEN PAGE LOADS */
window.addEventListener('DOMContentLoaded', () => {
  // getFaveImage()
  //  fetchQuery('pasta')
});

