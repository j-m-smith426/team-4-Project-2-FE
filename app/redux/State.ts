
//LogIn information
export interface Ilogin{
    username: string,
    //to be updated
}
//Page componets
export interface IPageState{
    PageName:string,
    ParentID:string,
   
}

export interface IAppState {
    ILogin: Ilogin,
    IPageState:IPageState
}


export const initialState:IAppState = {
    ILogin:{
        username: 'Guest'
    },
    IPageState:{
        PageName:'Login',
        ParentID:''
       
    },
}