document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const formElem=document.querySelector("form" )
  formElem.addEventListener('submit',function(e){
    e.preventDefault()
    todoFUn(e.target['new-task-description'].value)
  })
})

function todoFUn(todo){   
  const p=document.createElement('p')
  p.textContent=todo
  console.log(p)
  document.querySelector("#create-task-form").appendChild(p)
  
  const btn=document.createElement('button')
  btn.addEventListener('click',(e)=>{
    e.target.parentNode.remove();
  })
  btn.textContent='x'
  p.appendChild(btn) 

}



