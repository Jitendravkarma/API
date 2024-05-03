const initialState = {
  products:[],
}
const Reducer = (state = initialState, actions)=>{
    switch(actions.type){
        case 'GET_DATA':
            return {...state, products:actions.payload};
        default:
            return state;
    }
}
export default Reducer;