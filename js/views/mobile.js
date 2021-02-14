import {element} from './base'
const mediaQuery = window.matchMedia("(max-width:768px)")
const detailsLenght = (e) => {
    if(e.matches){
    const recipeContainerHeight= element.dataList.getBoundingClientRect().height;
    // element.leftContainer.style.height= `${recipeContainerHeight}`;
    // const leftHeight= element.leftContainer.getBoundingClientRect().height + 20;

    window.pageYOffset();
    console.log(window.pageYOffset);
}
}

export const addEvent = () => {
    let a = document.querySelector('body')
    console.log(a)
}
mediaQuery.addListener(detailsLenght(mediaQuery));