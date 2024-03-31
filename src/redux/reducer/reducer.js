let initialState = {
    num : 0
}


function reducer(state=initialState,action){
    if(action.type==='INCREMENT'){
        return {...state,num: state.num + 1}
    }else if (action.type==='DECREMENT'){
        return {...state,num: state.num - 1}
    }else if (action.type==='DECREMENTMORE'){
        return {...state,num: state.num - action.payload.number}
    }
    return {...state}
}

export default reducer