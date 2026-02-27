const text = document.getElementById('text')
const btn = document.getElementById('btn')
const list = document.getElementById('list');
btn.onclick=()=>{
  if(!text.value==''){
    const li = document.createElement('li');
    const deleteBtn = document.createElement('button');
    const btn = document.querySelector('#delete');
    
    li.className="flex justify-between items-center flex-wrap mt-4 font-mono font-medium text-[20px]"
    li.textContent=`${text.value}`

    deleteBtn.innerHTML= `<button id='delete'><i class="fa-duotone text-red-400 fa-solid fa-trash"></i></button>`
    deleteBtn.addEventListener('click',()=>li.remove())

    li.appendChild(deleteBtn);    
    list.appendChild(li)
    text.value=''
  }else{
    alert('You enter empty task')
  }
}