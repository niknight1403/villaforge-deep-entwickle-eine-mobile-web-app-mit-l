document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('todoInput');
    const btn = document.getElementById('addBtn');
    const list = document.getElementById('todoList');

    let todos = JSON.parse(localStorage.getItem('todos') || '[]');

    const render = () => {
        list.innerHTML = '';
        todos.forEach((todo, index) => {
            const li = document.createElement('li');
            li.className = todo.done ? 'done' : '';
            li.innerHTML = `
                <span onclick="toggleTodo(${index})">${todo.text}</span>
                <button onclick="deleteTodo(${index})">Löschen</button>
            `;
            list.appendChild(li);
        });
        localStorage.setItem('todos', JSON.stringify(todos));
    };

    window.toggleTodo = (index) => {
        todos[index].done = !todos[index].done;
        render();
    };

    window.deleteTodo = (index) => {
        todos.splice(index, 1);
        render();
    };

    btn.addEventListener('click', () => {
        if (input.value.trim()) {
            todos.push({ text: input.value, done: false });
            input.value = '';
            render();
        }
    });

    render();
});