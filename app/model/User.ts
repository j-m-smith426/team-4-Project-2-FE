interface IUser {
    
    REFERENCE: string,
    userId: string,
    name: string,
    bio:{
        greeting:string,
        description:string
     }
    image:string,
    watchlist: string[],
    followed:string[],
    favorites: string[],


}
export default IUser