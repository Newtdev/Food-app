import {element} from './base'
const mediaQuery = window.matchMedia("(max-width:768px)")
const detailsLenght = (e) => {
    if(e.matches){
    const recipeContainerHeight= element.dataList.getBoundingClientRect().height;
    // element.leftContainer.style.height= `${recipeContainerHeight}`;
    const leftHeight= element.leftContainer.getBoundingClientRect().height + 100;
}
}
mediaQuery.addListener(detailsLenght(mediaQuery));

export const addEvent = () => {
    // element.detailSection.classList.add('hide_page')
}