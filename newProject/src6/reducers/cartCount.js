const cartCount = (state = 0, action) => { 
    switch (action.type){
        case 'addProducts' :
            return state + 1;  // 0 + 1 = 1
        default :
            return state;
    }
}
export default cartCount;


