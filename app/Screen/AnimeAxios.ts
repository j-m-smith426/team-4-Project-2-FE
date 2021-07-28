import axiosConfig from "../../axiosConfig"

const getAnime = async (name:string) =>{
    //using axios to retrieve the anime data
    let anime:any = 'null'; 
    axiosConfig.get('/Anime/'+name).then(response =>{
       anime = response.data;
       console.log(anime);
       return anime;
   })   
   return anime;
}
export default getAnime;