import React, { Component } from 'react';

class Balance extends Component {
   
   getTotal(){
       if(localStorage.length !== 0){
           let points = 0 
        for(let i = 0 ; i<localStorage.length ; i++){
            points += JSON.parse(localStorage[localStorage.key(i)]).points
        }

        return points
       }else{
           return 0
       }
   }

    render() {
        return (
            
              <h4>{this.getTotal()} POINTS</h4>  
           
        );
    }
}

export default Balance;


// import React, { Component } from 'react';

// class Balance extends Component {
    // I need to iterate through local storage, which is an object of stringifyed objects


   
//    getTotal(){

//     if(localStorage !==0){
//         for(let i= 0 ; i<localStorage.length; i++){

//         }
//     }else{
//         return 0
//     }
    
//     }
            // if(localStorage.length === 0) { return 0 }
            // else(
            //     for(let i = 0 ; i<=localStorage.length ; i++){
            //         hh
            //     }
            // )
            // else(
            //     for(let i =0 ; i<localStorage.length ; i++){
            //                     JSON.parse(localStorage["newTrans"])
            //                 }
            // )
       
    // }
    
//     render(){

       
//         return (
//             <div>
//                 <h4>POINTS</h4>
//             </div>
//         );
//     }
// };

// export default Balance;


// import React, {useContext } from 'react';
// import {GlobalContext} from '../context/GlobalState';

// const Balance = () => {

//     const total = 0 

//     const getTotal(){
        
//     }

//     // const {transactions }= useContext(GlobalContext);

//     // const amount = transactions.map( transaction => transaction.points)
//     // const total = amount.reduce((acc, item) => (acc +=item),0)


//     // let result = Object.keys(data)
//     //                .map(key => ({id: Number(key), name: data[key]}));

//     // let results = Object.key
    
//     return (
//         <div>
//             <h2>Your Balance</h2>
//                 <h4>{total} POINTS</h4>
//         </div>
//     );
// };

// export default Balance;

