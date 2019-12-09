import {article_url, _api_key,count_code} from '../config/rest_config'

export async function getArticles(category='general'){
    try{
        let articles = await fetch(`${article_url}?country=${count_code}&category=${category}`,{
            headers:{
                'X-API-KEY':_api_key
            }
        });
        let result = await articles.json();
        articles = null;
        return result.articles;
    }
    catch(error){
    throw error;
    }
}