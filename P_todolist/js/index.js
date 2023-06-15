const user = JSON.parse(localStorage.getItem('login_success')) || false
if(!user){
    window.location.href = 'login.html'
}

const logout = document.querySelector('#logout')
logout.addEventListener('click', ()=>{
    Swal.fire({
        title: 'Success!',
        text: 'Sesion terminada',
        icon: 'success',
        timer: 3000
        })
    localStorage.removeItem('login_success')
    setTimeout(() => {
        window.location.href = 'login.html'
    }, 1500);
})
window.addEventListener('load', () => {
	const form = document.querySelector("#new-task-form");
	const input = document.querySelector("#new-task-input");
	const list_el = document.querySelector("#tasks");


	form.addEventListener('submit', (e) => {
		e.preventDefault();
		const tasksuser = JSON.parse(localStorage.getItem('tasksuser')) || []
		const task = input.value;
		tasksuser.push({task:task, id: Date.now()})
		localStorage.setItem('tasksuser', JSON.stringify(tasksuser))

		const task_el = document.createElement('div');
		task_el.classList.add('task');

		const task_content_el = document.createElement('div');
		task_content_el.classList.add('content');

		task_el.appendChild(task_content_el);

		const task_input_el = document.createElement('input');
		task_input_el.classList.add('text');
		task_input_el.type = 'text';
		task_input_el.value = task;
		task_input_el.setAttribute('readonly', 'readonly');
		task_content_el.appendChild(task_input_el);

		const task_actions_el = document.createElement('div');
		task_actions_el.classList.add('actions');
		
		const task_edit_el = document.createElement('button');
		task_edit_el.classList.add('edit');
		task_edit_el.innerText = 'Edit';

		const task_delete_el = document.createElement('button');
		task_delete_el.classList.add('delete');
		task_delete_el.innerText = 'Delete';

		const task_done_el = document.createElement('button');
		task_done_el.classList.add('done');
		task_done_el.innerText = 'Done';

		task_actions_el.appendChild(task_edit_el);
		task_actions_el.appendChild(task_delete_el);
		task_actions_el.appendChild(task_done_el);

		task_el.appendChild(task_actions_el);

		list_el.appendChild(task_el);

		input.value = '';

		task_edit_el.addEventListener('click', (e) => {
			if (task_edit_el.innerText.toLowerCase() == "edit") {
				task_edit_el.innerText = "Save";
				task_input_el.removeAttribute("readonly");
				task_input_el.focus();
			} else {
				task_edit_el.innerText = "Edit";
				task_input_el.setAttribute("readonly", "readonly");
			}
		});

		task_delete_el.addEventListener('click', (e) => {
			list_el.removeChild(task_el);
		});
		task_done_el.addEventListener('click', (e)=>{
			if (task_done_el.innerText.toLowerCase() == "done") {
				task_done_el.innerText = "no done";
				task_done_el.style.color = "black";
				task_input_el.style.color = "black";
				task_el.style.backgroundColor = 'green';
				task_input_el.style.textDecoration = 'line-through';
			} else {
				task_done_el.innerText = "done";
				task_done_el.style.color = "green";
				task_input_el.style.color = "";
				task_el.style.backgroundColor = '';
				task_input_el.style.textDecoration = '';
			}
		});
	});
});
