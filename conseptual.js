 // Get the ul element by its ID
 const Item_all = document.getElementById('Item-ul').children;
 var ckitem=null;
var lastvisit=null;
 // Loop through the list items (li) using for...of
 for (let i of Item_all) {
     i.addEventListener('click', function() {
         // Correct the typo in 'style'
       
         if(lastvisit==null)
         {
            i.style.background = 'red';
            lastvisit=i;

         }
         else
         {
            lastvisit.style.background='transparent';
            i.style.background='red';
            lastvisit=i;

         }
     });
 }
// ============================================================

const Itemsingle=document.getElementsByClassName('Iteam');



  var   lastvisit=null;
  for (let i of Itemsingle) {
    i.addEventListener('click', function() {
      
       
 

        if(lastvisit==null)
        {
            i.style.background = 'red';
            lastvisit=i;
        }
        else
        {
            lastvisit.style.background='transparent';
            i.style.background='red';
            lastvisit=i;
        }
    });
}