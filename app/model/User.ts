interface IUser {
    
    REFERENCE: string,
    userId: string,
    name: string,
    bio:{
        greeting:string,
        description:string
     }
    image:string,
    watchlist: [],
    followed:[],
    favorites: [],


}
export default IUser