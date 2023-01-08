

let countEl = document.getElementById("count-el")
console.log(countEl)
let count=0

 function increment(){
    count+=1
    countEl.textContent = count

 }
 function save()
{
    let saveEl=document.getElementById("save-el")
    let countstr=count + " - " 
    saveEl.textContent+=countstr
    console.log(count)
    countEl.textContent=0
    count=0

    
}
save()
