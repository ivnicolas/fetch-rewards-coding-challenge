 export default (state = [],action) => {
     switch(action.type){
         case 'ADD_TRANSACTION':
             debugger 
             return {
                ...state,
                transactions: [action.payload , ...state.transactions,]
             }
         default:
             return state
     }
 }