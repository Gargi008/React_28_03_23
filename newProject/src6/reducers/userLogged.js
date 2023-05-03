const userLogged = (state=false , action) =>{
    switch(action.type){
        case 'Log_In':
            return !state
        default : 
            return state;
    }
}


export default userLogged;

//false - not logged in 
// 