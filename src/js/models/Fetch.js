/** GETTING THE FETCHED DATA FROM THE CLASS */
const usedFunct = (data)=> {
    const recipe_data = data.data;
    return recipe_data;
}
export const reuseFunt=(data)=> {
    const res_data = usedFunct(data)
    const {recipes} = res_data;
    const allData = getRecipeData(recipes);
    return allData;
}

/**Fetch recipe data */
export const getRecipeData= (hits) => {   
    const getRecipe = hits.map(data => {
        return { 
            image:data.image_url,
            recipe_id:data.recipe_id
        }   
    })
    return getRecipe;
}

/**FETCH RECIPE DETAILS DATA */
export const get_Details = (data) => {
    const recipe_data = usedFunct(data)
    const {recipe} = recipe_data;
    return recipe;
    // const returnedData = fetchRecipeDetails(recipe);
    // console.log(returnedData);
    // return returnedData;
}

//  const fetchRecipeDetails = (data)=> {
//      return{
//          image_url:data.image_url,
//          title:data.title,
//          ingredients:[...data.ingredients],
//          publisher: data.publisher
//      }
//  }
//  console.log(fetchRecipeDetails())
