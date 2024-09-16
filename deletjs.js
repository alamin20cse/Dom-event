const items=document.getElementsByClassName('item');
for(const i of items)
{
    i.addEventListener('click',function(event){
        event.target.parentNode.removeChild(event.target);


    })
}