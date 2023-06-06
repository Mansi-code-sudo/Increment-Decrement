const countValue=document.querySelector("#counter");

//they are basically acting like functions.. acc to me

// const increment=() =>{
//     //we took the value i.e. 0 and converted it into integer because it was in string form
//     let value=parseInt(countValue.innerText);
//     //here we have incremented the value from 0 to 1.
//     value=value+1;
//     ////whatever changes we made, is now added to the innerHTML of div i.e. counter
//     countValue.innerText=value;
// };

// const decrement=()=>{
//     let value=parseInt(countValue.innerText);
//     value=value-1;
//     countValue.innerText=value;
// };


function increment(){
     //we took the value i.e. 0 and converted it into integer because it was in string form
     let value=parseInt(countValue.innerText);
     //here we have incremented the value from 0 to 1.
     value=value+1;
     ////whatever changes we made, is now added to the innerHTML of div i.e. counter
     countValue.innerText=value;
};

function decrement(){
    let value=parseInt(countValue.innerText);
    value=value-1;
    countValue.innerText=value;
};