const buttonMoin=document.querySelectorAll('.minus');
const buttonplus=document.querySelectorAll('.plus');
const qt=document.querySelectorAll('.quantity');
const totals=document.querySelector('#total-sum');
const price=document.querySelectorAll('.price');
const reseat=document.querySelectorAll('.delete');
const bigdivcontent=document.querySelectorAll('.card');




for (let i=0;i<buttonplus.length;i++){
    buttonplus[i].addEventListener('click',function(){
        qt[i].innerHTML++;
        totals.textContent=parseInt(totals.textContent)+parseInt(price[i].textContent);
}     
    )};
    for (let i=0;i<reseat.length;i++){
        reseat[i].addEventListener('click',function(){
            bigdivcontent[i].remove();
            totals.innerHTML=parseInt(totals.innerHTML)-parseInt(price[i].innerHTML)*parseInt(qt[i].innerHTML);
        });
    }


for (let i=0 ;i<buttonMoin.length;i++){
    buttonMoin[i].addEventListener('click',function(){
        if(qt[i].innerHtml>0){
        qt[i].innerHTML--;   
        totals.textContent=parseInt(totals.textContent)+parseInt(price[i].textContent);   
    }   
    }
)};