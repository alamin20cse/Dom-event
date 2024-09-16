
// option1
function handelButton()
{
    const TextSet=document.getElementById('defult-id')
    
    TextSet.innerText='Inner text is setted';

    const myName=document.getElementById('my-name');
    myName.style.color='red';
}


// option2
document.getElementById('add-lisitner').addEventListener('click',function(){


const textSetByAddlisitner=document.getElementById('defult-id');
textSetByAddlisitner.innerText='text is setted by Add listener'
textSetByAddlisitner.style.color='red';

});

// option2 recap
// document.getElementById('button-update').addEventListener('click',function(){
// document.getElementById('button-update').addEventListener('focus',function(){
// document.getElementById('button-update').addEventListener('keydown',function(Event){

//     const inputFild=document.getElementById('input-fild');
   
//     const inputUp=document.getElementById('defult-input');
//    const getinput=inputFild.value;
//    inputUp.innerText=getinput;
//    inputFild.value='';
//    console.log(Event);


// });


// document.getElementById('input-fild').addEventListener('keydown',function(Event){

//     console.log(Event.target.value);

// })



document.getElementById('input-fild').addEventListener('key',function(Event){

    console.log(Event.target.value);

})



// propagation


// document.getElementById('input-fild').addEventListener('key',function(Event){

//   Event.stopPropagation

// })


