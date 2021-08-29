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

