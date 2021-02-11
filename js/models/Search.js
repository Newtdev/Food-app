import axios from "axios";
import {reuseFunt} from './Fetch';
// import {newRequest} from './recipeDetails';

export default class SearchTerm {
    constructor (query){
        this.query = query;
    }
    async fetchData (){
        try {
            let response = await axios(`https://forkify-api.herokuapp.com/api/search?q=${this.query}`);
            // const savedResponse = getData(response);
            const savedResponse = reuseFunt(response);
            return savedResponse;
        } catch (error) {
            console.log(error)
            throw error
            
        }
}
}

