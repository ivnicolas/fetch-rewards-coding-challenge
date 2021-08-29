 export default (state = [],action) => {
     switch(action.type){
         case 'ADD_TRANSACTION':
             debugger 
             return {
                ...state,
                transactions: state.transactions.concat(action.payload)
             }
         default:
             return state
     }
 }