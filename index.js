
document.querySelector('form').addEventListener('submit', addTodo)


function removeTodo(event){
  event.target.parentNode.remove()
  event.target.setAttribute('aria-checked', 'true')
}


function addTodo(event){
  event.preventDefault()
  let item = document.createElement('li')
  item.innerText = document.getElementById('item').value
  item.addEventListener('click', completeTodo)
  let button = document.createElement('button')
  button.innerText = 'X'
  button.addEventListener('click', removeTodo )
  item.appendChild(button)
  let list = document.querySelector('ul')
  list.appendChild(item)
}

let message = document.getElementById("completed-message").innerHTML
function completeTodo(event){
  let condition = event.target.getAttribute('aria-checked')
  if(!condition){
    event.target.setAttribute("aria-checked", "true");
    function alertWindow(){
      alert(message)
    }
    setTimeout(alertWindow, 2000)
    console.log(message.innerText)
  } else {
    event.target.setAttribute("aria-checked", "false");
  }
  
}
