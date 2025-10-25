// Simple Task Manager logic: add tasks and render them to the page

(function () {
    /** @type {Array<{id:string,title:string,details:string,completed:boolean,createdAt:number}>} */
    const tasks = [];
    /** @type {string|null} */
    let editingTaskId = null;

    const form = document.getElementById('task-form');
    const titleInput = document.getElementById('task-title');
    const detailsInput = document.getElementById('task-details');
    const taskListEl = document.getElementById('task-list');
    const addBtn = document.getElementById('add-task-btn');

    if (!form || !titleInput || !detailsInput || !taskListEl) {
        console.error('Required DOM elements not found.');
        return;
    }

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const title = (titleInput.value || '').trim();
        const details = (detailsInput.value || '').trim();
        if (!title) {
            // Friendly early return; future prompt will add visible validation UI
            titleInput.focus();
            return;
        }

        if (editingTaskId) {
            const task = tasks.find(function (t) { return t.id === editingTaskId; });
            if (task) {
                task.title = title;
                task.details = details;
            }
            editingTaskId = null;
            if (addBtn) addBtn.textContent = 'Add Task';
        } else {
            const newTask = createTask(title, details);
            tasks.push(newTask);
        }

        renderTasks(tasks);

        form.reset();
        titleInput.focus();
    });

    function createTask(title, details) {
        return {
            id: generateId(),
            title: title,
            details: details,
            completed: false,
            createdAt: Date.now()
        };
    }

    function generateId() {
        return 't_' + Math.random().toString(36).slice(2, 10) + Date.now().toString(36);
    }

    function formatTimestamp(ts) {
        try {
            const d = new Date(ts);
            return d.toLocaleString();
        } catch (e) {
            return '';
        }
    }

    function renderTasks(taskArray) {
        const fragment = document.createDocumentFragment();
        taskArray.forEach(function (task) {
            fragment.appendChild(renderTaskItem(task));
        });
        taskListEl.innerHTML = '';
        taskListEl.appendChild(fragment);
    }

    function renderTaskItem(task) {
        const li = document.createElement('li');
        li.className = 'task-item';
        li.dataset.taskId = task.id;

        const row = document.createElement('div');
        row.className = 'task-row';

        const left = document.createElement('div');
        left.className = 'task-left';

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.className = 'task-checkbox';
        checkbox.checked = !!task.completed;
        checkbox.addEventListener('change', function () {
            task.completed = checkbox.checked;
            // Re-render for now to keep DOM state consistent
            renderTasks(tasks);
        });

        const content = document.createElement('div');
        content.className = 'task-content';

        const titleEl = document.createElement('h3');
        titleEl.className = 'task-title';
        titleEl.textContent = task.title;

        const detailsEl = document.createElement('p');
        detailsEl.className = 'task-details';
        detailsEl.textContent = task.details;

        const metaEl = document.createElement('small');
        metaEl.className = 'task-meta';
        metaEl.textContent = 'Added ' + formatTimestamp(task.createdAt);

        content.appendChild(titleEl);
        if (task.details) content.appendChild(detailsEl);
        content.appendChild(metaEl);

        left.appendChild(checkbox);
        left.appendChild(content);

        const right = document.createElement('div');
        right.className = 'task-actions';

        const deleteBtn = document.createElement('button');
        deleteBtn.type = 'button';
        deleteBtn.className = 'btn btn-danger delete-task-btn';
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', function () {
            const idx = tasks.findIndex(function (t) { return t.id === task.id; });
            if (idx !== -1) {
                tasks.splice(idx, 1);
                renderTasks(tasks);
            }
        });

        const editBtn = document.createElement('button');
        editBtn.type = 'button';
        editBtn.className = 'btn edit-task-btn';
        editBtn.textContent = 'Edit';
        editBtn.addEventListener('click', function () {
            editingTaskId = task.id;
            titleInput.value = task.title;
            detailsInput.value = task.details || '';
            if (addBtn) addBtn.textContent = 'Update Task';
            titleInput.focus();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });

        right.appendChild(editBtn);
        right.appendChild(deleteBtn);

        row.appendChild(left);
        row.appendChild(right);

        li.appendChild(row);

        if (task.completed) li.classList.add('is-completed');

        return li;
    }
})();
