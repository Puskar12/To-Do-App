let todoList = [
  {
    item:'Milk niye aste hobe',
    dueDate:'02/07/2024',
  },
  {
    item:'College jete hobe',
    dueDate:'03/07/2024',
  }
];
displayItems();
function addTodo(){
  let inputElement = document.querySelector('#todoInput');
  let dateElement = document.querySelector('#todoDate')
  let todoItem = inputElement.value ;
  let todoDate = dateElement.value ;
  if (todoItem === '' || todoDate === '') {
    alert('Please enter both task and date!');
    return;
  }
  todoList.push({item:todoItem, dueDate:todoDate});
  inputElement.value = '';
  dateElement.value = '';
  displayItems();
  
}

function displayItems(){
  let containerElement = document.querySelector('.todoContainer');
  let newHtml = '';
  for (i = 0; i < todoList.length ; i++ ){
    let {item,dueDate} = todoList[i];
    newHtml += `
    
    <span>${item}</span>
    <span>${dueDate}</span>
    <button id = "deleteButton" onclick = "todoList.splice(${[i]}, 1);
    displayItems();">Delete</button>
     `;
    }
    containerElement.innerHTML= newHtml;
  }