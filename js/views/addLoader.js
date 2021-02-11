import {element} from './base';
import {displayRecipeData} from './recipeDOM';


 export const loader = (recipeData)=> {
    element.recipeLoader.classList.add("hide");
    setTimeout(()=> {
        element.recipeLoader.classList.remove("hide");
        setTimeout(()=> {
        })
    },3000);
};

export const detailsLoader = () => {
    element.detailsLoader.classList.add('hide');
    setTimeout(() => {
        element.detailsLoader.classList.remove('hide')
        setTimeout(() => {
        })
    },3000)
}
// element.detailsLoader.classList.add('hide');
