let addButton = document.getElementById('add')    
let inputTask = document.getElementById('new-task')
let inputSearch = document.getElementById('search')
let unfinishedTasks = document.getElementById('unfinished-tasks') 
let prior = document.getElementById('priority')
let NewTodoArr = [];
let index = 0;
let count = 0;


function addTask () {
    if (inputTask.value === ''){
        return alert ('Введите текст задачи!') 
    }
    
    let NewTodo = {
        text: inputTask.value, 
        priority: prior.value,
        date: new Date().toLocaleString()
    }
    NewTodoArr.push(NewTodo)   //добавляет элемент в начало массива и возвращает новую длину
    saveTask(NewTodo)
    inputTask.value = ''  //обнулим значение строки

}    

function swap(task) { 
    switch (task.priority) {
        case 'low':
            priority = `<font color="red">низкий</font>`;
            break;

        case 'middle':
            priority = `<font color="blue">средний</font>`;
            break;
              
        case 'high':
            priority = `<font color="green">высокий</font>`;
            break;
    } 
} 

function saveTask (task) {
    swap(task); 
    console.log(task)
    let  div = document.createElement("div");
    div.classList.add('tasks') 
    div.id = count++
    div.innerHTML = `
    <li class = "priors"> ${priority}</li>
    <li class = "text"> ${task.text} </li>  
    <li class = "text"> ${task.date}  </li> 
    <i class= 'material-icons checkbox'>checkbox</i>
    <i class= 'material-icons close'>close</i> 
    <i class= 'material-icons delete' id="${index}" onclick = "deleteTask(${div.id})">delete</i>`
    unfinishedTasks.appendChild(div)
}    


function deleteTask(id) {
    let del = document.querySelectorAll('.tasks')
    //let del = document.getElementById('div.id')
    NewTodoArr.splice(id, 1)
    del[id].remove()
    //NewTodoArr.forEach((task, id) => {
       // NewTodoArr.splice(id,1) //начиная с элемента с индексом i  удаляем 1 элемент
    //})
    //saveTask(task)
    if (NewTodoArr.length === 0) unfinishedTasks.innerHTML = '' //если массив пустой, то удаляем и из визуала
    console.log(NewTodoArr)    
}


document.querySelector('#search').oninput = function() {
    let search = this.value.trim()  //удаляет пробелы с начала и конца строки
     ArrFilter = NewTodoArr.filter((task) => task.text.includes(search))  //создаем новый массив, значение которого равно отфильтрованному старому массиву 
                                                                         //фильтрация осуществляется по поиску в старом массиве введенного элемента
    if (search != '') {
    for (let i=0; i<search.length; i++) {
        saveTask(ArrFilter)
    }   
    } else {
        saveTask(NewTodoArr)
    }


// let inputSearch = document.getElementById('search')
// search = '/'+inputSearch+'/g';  //делаем из строки регуярное выражение
// if (search != '') {
//     let pr = unfinishedTasks.innerHTML;
//     let result = pr.match(/>(.*?)</g);  //отсекаем все теги и получаем только текст
//     let result_arr = []

//     let warning = true
//     for(let i=0; i<result.length; i++) {
//         if(result[i].match(eval(search))!=null) {
//             warning = false;
//         }
//     }
//     if(warning == true) {
//         alert('Не найдено ни одного совпадения');
//     }

//     for(var i=0; i<result.length;i++) {
//         result_arr[i] = result[i].replace(eval(search))//находим нужные элементы, задаем стиль и сохраняем в новый массив
//     }

//     for(var i=0; i<result.length;i++) {
//         pr=pr.replace(result[i],result_arr[i])  //заменяем в переменной с html текст на новый из новогом ассива
//     }
//     unfinishedTasks.innerHTML = pr;  //заменяем html код
}

function priorsFiltr() {
    let select = document.getElementById('filters')
    let getValue = select.value;
    switch (getValue) {
        case 'filter-any':
            console.log('любой');
            break;

        case 'filter-low':
            let ArrFilterLow = NewTodoArr.filter((task) => task.priority.includes('low'))
            console.log(ArrFilterLow);
            break;
              
        case 'filter-middle':
            let ArrFilterMiddle = NewTodoArr.filter((task) => task.priority.includes('middle'))
            console.log(ArrFilterMiddle);
            break;

        case 'filter-high':
            let ArrFilterHigh = NewTodoArr.filter((task) => task.priority.includes('high'))
            console.log(ArrFilterHigh);
            break;
    } 
    
}
