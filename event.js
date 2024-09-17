console.log("Event of dom");

// option1
function makered() {
    document.body.style.background = 'red';
}

// option2
// id
const makeBlue = document.getElementById('make_blue');
makeBlue.onclick = makeBlueFunction;
function makeBlueFunction() {
    document.body.style.background = 'blue';

}

// option3 another [we will use some time ]
const makeParple=document.getElementById('make-parple')
makeParple.onclick=function mkp()
{
    document.body.style.background='purple';
}




// option4
const makePink=document.getElementById('make-pink');
makePink.addEventListener('click',mpink)

function mpink()
{
    document.body.style.background='pink';
}
// option4 another
const makeGreen=document.getElementById('make-green')
makeGreen.addEventListener('click',function mgreen(){
    
    document.body.style.background='green';




});

// we will use most of the time=====================================
// =================================================
// ============================================================
// option4 final

const makeOrange=document.getElementById('make-orange').addEventListener('click',function(){


    document.body.style.background='orange';

});