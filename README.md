## Installation
To test it out, clone down this repo and run:
- `cd fetch-rewards-coding-challenge`
then run 
- `yarn start` 

## Process 

To beging the challenge I assessed what components I would need to reach MVP. Once that was completed I made routes that matched the instructions for the challenge. I then though about how I would want to save an access the information. After some research and trial and error, I settled on using local storage because this application would not be too hefty. Once that was settled, I began working on the application component by componenet. Get the balance was the easiest part as well as listing out the transactions. However, the SpendPoints component was where I spent most of my time as I really had to work out how I was going to take out points in the correct order, specify what payers the points were coming from, record the transactions, and update my database , local storage, accordingly. Finally, I added a bit of styling to make sure it was all presentable. 

## What I Would Have Done Differently 

1.) I would have spent more time planning before diving into my code. Admittedly I love to get started coding right away. However, I would have saved myself a lot of time if I had made myself a game plan before hand. 
2.) The spendingCalculations function in SpendPoints is very hefty, I definitely approached it with a brute force mentality. I would have taken the time to break up the function into many smaller functions to adhere to the single responsibility principle. 
