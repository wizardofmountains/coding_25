# 📚 Project 1: Web Fundamentals

**Focus:** HTML, CSS, JavaScript Basics

Welcome to your first hands-on project! In this project, you'll build a complete interactive web page using HTML, CSS, and JavaScript with the help of your AI assistant.

## Learning Objectives

By the end of this project, you will understand:
- Semantic HTML structure
- CSS styling (Flexbox, Grid, Responsive Design)
- JavaScript DOM manipulation
- Event handling
- Form validation
- Local storage

## Project Goal

Build an **Interactive Task Manager** web application with the following features:
- Add, edit, and delete tasks
- Mark tasks as complete
- Filter tasks (all, active, completed)
- Save tasks to local storage
- Responsive design
- Beautiful UI

## Getting Started

1. Open this folder in your code editor
2. You'll find three empty files:
   - `index.html` - Your HTML structure
   - `css/styles.css` - Your styles
   - `js/script.js` - Your JavaScript logic

3. Follow the prompts below, copying them into your AI assistant (Cursor AI) one at a time

## AI Prompts - Copy & Paste These Step-by-Step

### Prompt 1: HTML Structure
```
I'm working on a task manager web application. In the index.html file, create a semantic HTML structure with the following elements:

1. A header with the app title "My Task Manager"
2. A form to add new tasks with:
   - An input field for the task title
   - A textarea for task description
   - A submit button
3. A filter section with buttons: "All", "Active", "Completed"
4. A container to display the list of tasks
5. A footer with your name and the current year

Use semantic HTML5 tags (header, main, section, footer, etc.). Add appropriate classes and IDs for styling and JavaScript manipulation.
```

### Prompt 2: Basic CSS Styling
```
Style the task manager application in css/styles.css with these requirements:

1. Use a modern color scheme (suggest a good palette)
2. Center the app container with a max-width of 800px
3. Style the header with a gradient background
4. Make the form inputs and buttons look modern with:
   - Border-radius
   - Box-shadow
   - Hover effects
   - Focus states
5. Add spacing and padding throughout
6. Use a clean, readable font

Make it look professional and modern. Use your creativity!
```

### Prompt 3: Responsive Design
```
Make the task manager fully responsive in css/styles.css:

1. Use Flexbox or CSS Grid for layout
2. Add media queries for:
   - Mobile devices (max-width: 480px)
   - Tablets (max-width: 768px)
   - Desktop (larger screens)
3. Ensure text is readable on all screen sizes
4. Stack form elements vertically on mobile
5. Adjust padding and font sizes for smaller screens

Test the responsive design by resizing the browser window.
```

### Prompt 4: JavaScript - Adding Tasks
```
In js/script.js, implement the functionality to add tasks:

1. Select the form and input elements
2. Create an array to store tasks
3. Add an event listener to the form submit event
4. On submit:
   - Prevent default form behavior
   - Get the input values
   - Create a task object with: id, title, description, completed status, and timestamp
   - Add the task to the array
   - Clear the form inputs
   - Render the tasks to the DOM

Create a renderTasks() function that displays all tasks in the task list container. Each task should show the title, description, and have a checkbox and delete button.
```

### Prompt 5: JavaScript - Task Actions
```
Implement the following task actions in js/script.js:

1. Mark task as complete:
   - Add click event to checkboxes
   - Toggle the completed status
   - Add a strikethrough style to completed tasks
   - Update the task in the array
   - Re-render the tasks

2. Delete task:
   - Add click event to delete buttons
   - Remove the task from the array
   - Re-render the tasks

3. Edit task:
   - Add an edit button to each task
   - When clicked, populate the form with the task data
   - Update the task when the form is submitted again

Make sure to update the display after each action.
```

### Prompt 6: JavaScript - Filtering
```
Implement task filtering in js/script.js:

1. Add event listeners to the filter buttons (All, Active, Completed)
2. Create a filterTasks(status) function that:
   - Filters the tasks array based on the status
   - Renders only the filtered tasks
3. Highlight the active filter button
4. Show a count of active tasks

Update the renderTasks() function to accept a filtered array.
```

### Prompt 7: JavaScript - Local Storage
```
Add local storage functionality in js/script.js:

1. Save tasks to localStorage whenever the tasks array changes
2. Load tasks from localStorage when the page loads
3. Create helper functions:
   - saveTasks() - Save to localStorage
   - loadTasks() - Retrieve from localStorage
4. Initialize the tasks array with saved data on page load

Make sure all CRUD operations (Create, Read, Update, Delete) persist across page refreshes.
```

### Prompt 8: Final Touches & Polish
```
Add the final touches to make the task manager shine:

1. Add smooth CSS transitions for:
   - Button hovers
   - Task additions and removals
   - Checkbox toggles

2. Add form validation:
   - Prevent empty tasks
   - Show error messages for invalid input
   - Add visual feedback

3. Improve UX:
   - Add a "Clear completed tasks" button
   - Show empty state when no tasks exist
   - Add task count display
   - Improve accessibility (ARIA labels, keyboard navigation)

4. Add micro-interactions and animations to make the app feel polished.
```

## Testing Your Application

After completing all prompts, test these scenarios:

1. ✅ Add multiple tasks
2. ✅ Mark tasks as complete
3. ✅ Filter between All, Active, and Completed
4. ✅ Edit existing tasks
5. ✅ Delete tasks
6. ✅ Refresh the page - tasks should persist
7. ✅ Resize the browser - app should be responsive
8. ✅ Try to add an empty task - should show error

## How to Run

Simply open `index.html` in your web browser:
- Double-click the file, or
- Right-click and select "Open with" → Your browser, or
- Use the Live Server extension in VS Code

## Tips for Success

1. **Go step-by-step:** Complete one prompt before moving to the next
2. **Understand the code:** Read what the AI generates and ask questions
3. **Experiment:** Try modifying the code to add your own features
4. **Debug:** Use browser DevTools (F12) to inspect and debug
5. **Customize:** Change colors, add features, make it your own!

## Bonus Challenges

Once you complete the main project, try these:

1. **Add task priority levels** (High, Medium, Low) with color coding
2. **Add due dates** and sort by date
3. **Add categories/tags** for tasks
4. **Add a search feature** to filter tasks by keyword
5. **Add task statistics** (total tasks, completion rate, etc.)
6. **Add dark mode toggle**
7. **Add animations** when tasks are added/removed
8. **Add drag-and-drop** to reorder tasks

## Key Concepts You'll Learn

- ✅ HTML5 semantic elements
- ✅ CSS Flexbox and Grid
- ✅ CSS animations and transitions
- ✅ Responsive design with media queries
- ✅ JavaScript DOM manipulation
- ✅ Event listeners and handlers
- ✅ Array methods (map, filter, find)
- ✅ LocalStorage API
- ✅ Form handling and validation
- ✅ CRUD operations

## Next Steps

After completing this project:
- Review the code and make sure you understand each part
- Experiment with modifications
- Move on to [Project 2: React Modern Frontend](../02-react-modern-frontend/README.md)

## Need Help?

- Use your AI assistant to explain any concepts
- Check the browser console for errors (F12)
- Review Project 0 for reference on modern web development
- Don't hesitate to ask your AI assistant for clarifications!

---

**Ready?** Start with Prompt 1 and work your way through! 🚀
