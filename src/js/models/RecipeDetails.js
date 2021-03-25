import { get_Details } from "./Fetch";
import axios from 'axios';




export const new_data = async (id) => {
    try {
        const res = await axios(`https://forkify-api.herokuapp.com/api/get?rId=${id}`);
        return res;
        // reuseFunt(res); 
        // get_Details(res) ;
        
    } catch (error) {
        throw error
        
    }
}


//    ADDING IMAGE TO THE FAVE CONTAINER BY ID

// export const loadObj= (data,id)=> {
//     const getObjData = data.find(data => data.recipe_id === id)
//     console.log(getObjData);
//   }