
document.getElementById('card-1').addEventListener('click', function(){
    const card1= document.getElementById('card-1').innerHTML;
    const newDiv = document.createElement('div');
    newDiv.innerHTML=`${card1}`;
    newDiv.classList.add('p-5','rounded-lg', 'bg-base-100', 'shadow','space-y-5')

    const cardBox =document.getElementById('card-box');
    cardBox.appendChild(newDiv)
})