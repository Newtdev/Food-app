import {element} from './base';
import {displayRecipeData,recipeDetails_DOM} from './recipeDOM';


 export const loader = (recipeData,elem)=> {
    elem.classList.add("hide");
    setTimeout(()=> {
        elem.classList.remove("hide");
        setTimeout(()=> {
            recipeData;
        })
    },3000);
};

// export const detailsLoader = () => {
//     element.detailsLoader.classList.add('hide');
//     setTimeout(() => {
//         element.detailsLoader.classList.remove('hide')
//         setTimeout(() => {
//         })
//     },3000)
// }
// element.detailsLoader.classList.add('hide');
