
const titele1 =document.getElementById('noahkhali').innerText
const titele2 =document.getElementById('fani').innerText
const titele3 =document.getElementById('quota').innerText

const downAmount =document.getElementById('totalAmount').innerText

document.getElementById('donate').addEventListener('click',function(){
     // console.log('click')
     document.getElementById('defoultSee').classList.remove("hidden")
     document.getElementById('hiddenFile').classList.add('hidden')
     document.getElementById("donate").classList.add('bg-gradient-to-r', 'from-yellow-200', 'to-rose-600')
     document.getElementById("history").classList.remove('bg-gradient-to-r', 'from-yellow-200', 'to-rose-600')
})
document.getElementById('history').addEventListener('click',function(){
     document.getElementById('hiddenFile').classList.remove('hidden')
     document.getElementById('defoultSee').classList.add("hidden")
     document.getElementById('faq').classList.add('hidden')
     document.getElementById("donate").classList.remove('bg-gradient-to-r', 'from-yellow-200', 'to-rose-600')
     document.getElementById("history").classList.add('bg-gradient-to-r', 'from-yellow-200', 'to-rose-600')
})
document.getElementById('blogBtn').addEventListener('click',function(){
     // console.log('click') 
     document.getElementById('hiddenFile').classList.add("hidden")
     document.getElementById('faq').classList.remove('hidden')
     document.getElementById('defoultSee').classList.add('hidden')
     document.getElementById('blogBtn0').classList.remove('hidden')
     document.getElementById('blogBtn').classList.add('hidden')
     document.getElementById("history").classList.remove('bg-gradient-to-r', 'from-yellow-200', 'to-rose-600')
})
document.getElementById('blogBtn0').addEventListener('click',function(){
    // console.log('click') 
    document.getElementById('faq').classList.add('hidden')
    document.getElementById('defoultSee').classList.remove('hidden')
    document.getElementById('blogBtn0').classList.add('hidden')
     document.getElementById('blogBtn').classList.remove('hidden')
     document.getElementById("history").classList.remove('bg-gradient-to-r', 'from-yellow-200', 'to-rose-600')
     document.getElementById("donate").classList.add('bg-gradient-to-r', 'from-yellow-200', 'to-rose-600')
})
document.getElementById('donateBtn').addEventListener('click',function(){
const inputText1 =getInputValus('inputFild1')
const fixed =document.getElementById('totalAmount').innerText
if( isNaN(inputText1)|| inputText1 <= 0 || inputText1>fixed){
    return alert('Pleace type a valid amount')
}
else {
    const inputText1= getInputValus('inputFild1')
    const tansfarMoney= amount('addMomey1')
    const getMomey= tansfarMoney + inputText1 
    const tansfarMoneyTotal= document.getElementById('addMomey1').innerText=getMomey.toFixed(2)
    const cush =amount('totalAmount')
    const cushRemain =cush-inputText1
    const pregentCush= document.getElementById('totalAmount').textContent=cushRemain.toFixed(2)
    document.getElementById('my_modal_1'). showModal()
    const div = document.createElement('div');
    const now = new Date()
    const StandardTime = now.toString();
    div.classList.add( 'flex', 'flex-col', 'gap-4', 'md:p-8', 'p-4', 'border-2', 'rounded-xl');
    div.innerHTML = `

        <h3 class="md:text-xl font-extrabold text-black">
            ${inputText1} Taka is ${titele1}
        </h3>

        <p class="text-gray-700 bg-gray-100 rounded-lg px-4 py-2">Date : 
            ${StandardTime}
        </p>   
    `;
    document.getElementById('history_containt').appendChild(div);
}
})
document.getElementById('donateBtn2').addEventListener('click',function(){
const inputText2 =getInputValus('inputFild2')
const fixed =document.getElementById('totalAmount').innerText
if(isNaN(inputText2) || inputText2 <= 0 || inputText2>fixed){
    return alert('Pleace type a valid amount')
}
else{
     const inputText2= getInputValus('inputFild2')
     const tansfarMoney= amount('addMomey2')
     const getMomey= tansfarMoney +inputText2
     const tansfarMoneyTotal= document.getElementById('addMomey2').innerText=getMomey.toFixed(2)
     const cush =amount('totalAmount')
     const cushRemain =cush-inputText2
     const pregentCush= document.getElementById('totalAmount').textContent=cushRemain.toFixed(2)
     document.getElementById('my_modal_1'). showModal()

     const div = document.createElement('div');
     const now = new Date()
     const StandardTime = now.toString();
     div.classList.add( 'flex', 'flex-col', 'gap-4', 'md:p-8', 'p-4', 'border-2', 'rounded-xl');
     div.innerHTML = `

         <h3 class="md:text-xl font-extrabold text-black">
             ${inputText2} Taka is ${titele2}
         </h3>

         <p class="text-gray-700 bg-gray-100 rounded-lg px-4 py-2">Date : 
             ${StandardTime}
         </p>   
     `;
     document.getElementById('history_containt').appendChild(div);
} 
})
document.getElementById('donateBtn3').addEventListener('click',function(){
const inputText3 =getInputValus('inputFild3')
const fixed =document.getElementById('totalAmount').innerText
if(isNaN(inputText3) || inputText3 <= 0 || inputText3>fixed){
    return alert('Pleace type a valid amount')
}
   else{
     const inputText3= getInputValus('inputFild3')
     const tansfarMoney= amount('addMomey3')
     const getMomey= tansfarMoney +inputText3
     const tansfarMoneyTotal= document.getElementById('addMomey3').innerText=getMomey.toFixed(2)
     const cush =amount('totalAmount')
     const cushRemain =cush-inputText3
     const pregentCush= document.getElementById('totalAmount').textContent=cushRemain.toFixed(2)
     document.getElementById('my_modal_1'). showModal()
     const div = document.createElement('div');
     const now = new Date()
     const StandardTime = now.toString();
     div.classList.add( 'flex', 'flex-col', 'gap-4', 'md:p-8', 'p-4', 'border-2', 'rounded-xl');
     div.innerHTML = `

         <h3 class="md:text-xl font-extrabold text-black">
             ${inputText3} Taka is ${titele3}
         </h3>

         <p class="text-gray-700 bg-gray-100 rounded-lg px-4 py-2">Date : 
             ${StandardTime}
         </p>   
     `;
     document.getElementById('history_containt').appendChild(div);
   }
})
 document.getElementById('history').addEventListener('click',function(){
     console.log('click')
    
 })