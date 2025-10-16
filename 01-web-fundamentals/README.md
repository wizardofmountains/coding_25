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

### Prompt 1: Create the Basic Page Layout
```
Help me create a to-do list app! I need to build the basic structure in index.html.

I want my page to have:
- A header at the top with the title "My Task Manager"
- A form where I can type in new tasks (with a text field for the task name, a bigger text box for details, and an "Add Task" button)
- Three buttons to filter tasks: "All", "Active", and "Completed"
- An area where all my tasks will show up
- A footer at the bottom with my name

Can you help me set this up using proper HTML? Make sure to use good class names so we can style it later!
```

### Prompt 2: Make It Look Beautiful
```
Now I need to style my to-do list app in css/styles.css to make it look modern and professional!

Here's what I'm imagining:
- Pick a nice color scheme for me (maybe something calming and modern?)
- Center everything on the page with some nice spacing
- Give the header a cool gradient background
- Make the input fields and buttons look modern with:
  - Rounded corners
  - Subtle shadows
  - Nice effects when I hover over buttons
  - A glowing effect when I click in the input fields
- Use lots of white space so it doesn't feel cramped
- Pick a clean, easy-to-read font

I want it to look like a professional app! Feel free to be creative with the design.
```

### Prompt 3: Make It Work on Phones and Tablets
```
I want my to-do list app to look great on any device - phones, tablets, and computers!

Can you update the CSS in css/styles.css to:
- Make sure everything looks good when the browser window is small (like on a phone)
- Stack the form fields vertically on small screens so they're easier to use
- Make the text bigger on phones so it's easy to read
- Adjust the spacing so nothing feels cramped on small screens
- Keep everything looking nice on tablets and big screens too

I want to be able to use this app whether I'm on my phone or my laptop!
```

### Prompt 4: Make the "Add Task" Button Actually Work
```
Now I need to make my app actually do something! In js/script.js, help me make it so when I type a task and click "Add Task", it shows up on the page.

Here's what should happen:
- When I click "Add Task", grab what I typed in the form
- Create a new task item with:
  - The task title and description I entered
  - A checkbox so I can mark it complete later
  - A delete button to remove it
  - Maybe a timestamp so I know when I added it
- Show this new task in the task list area
- Clear out the form so I can add another task

Also, keep all my tasks stored in a list so I can work with them later. Each task should appear on the page with its title, description, a checkbox, and a delete button.
```

### Prompt 5: Make Tasks Interactive (Complete, Delete, Edit)
```
Now I want to be able to interact with my tasks in js/script.js! Help me add these features:

**Completing tasks:**
- When I click the checkbox next to a task, it should get crossed out (strikethrough style)
- The task should stay on the list but look "done"

**Deleting tasks:**
- When I click the delete button, that task should disappear from my list completely

**Editing tasks:**
- Add an "Edit" button to each task
- When I click it, the task's info should fill back into the form at the top
- When I click "Add Task" again, it should update that task instead of creating a new one

Make sure the list updates on the page after I do any of these actions!
```

### Prompt 6: Add Filtering Buttons
```
I want to be able to filter my tasks in js/script.js!

When I click the filter buttons at the top:
- "All" should show all my tasks (both done and not done)
- "Active" should only show tasks I haven't completed yet
- "Completed" should only show tasks I've checked off

Also:
- Highlight whichever filter button I'm currently using so I know what I'm looking at
- Show me a count of how many active (not completed) tasks I have left

The filter should just show/hide tasks without actually deleting them!
```

### Prompt 7: Save My Tasks So They Don't Disappear
```
Right now, if I refresh the page, all my tasks disappear! I need help in js/script.js to save them.

Can you make it so:
- Whenever I add, complete, edit, or delete a task, it gets automatically saved
- When I open the app again (even after closing the browser), all my tasks are still there
- The tasks are saved in my browser's storage

Basically, I want my task list to remember everything, just like a real app would!
```

### Prompt 8: Add the Final Polish
```
Let's make this app feel really professional and smooth!

**Animations:**
- Add smooth transitions when I hover over buttons
- Make tasks fade in nicely when I add them
- Make tasks slide out smoothly when I delete them
- Add a subtle animation when I check off a task

**Prevent mistakes:**
- Don't let me add a task if the title is empty - show me a friendly error message
- Give me a visual cue (like a red border) if I try to submit an empty form

**Nice extras:**
- Add a "Clear Completed" button that removes all the checked-off tasks at once
- Show a friendly message like "No tasks yet! Add one above" when my list is empty
- Display how many tasks I have left to complete

I want the app to feel smooth and professional, like apps I use every day!
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

Once you complete the main project, try asking your AI assistant to add these cool features:

1. **Priority levels:** Color-code tasks as High (red), Medium (orange), or Low (green) priority
2. **Due dates:** Add a date picker so you can set when tasks are due, and sort them by date
3. **Categories:** Tag tasks like "Work", "Personal", "School" and filter by category
4. **Search bar:** Find specific tasks by typing keywords
5. **Statistics dashboard:** Show cool stats like "You've completed 75% of your tasks this week!"
6. **Dark mode:** Add a toggle button to switch between light and dark themes
7. **Drag and drop:** Let yourself reorder tasks by dragging them around
8. **Task notes:** Add a section where you can write longer notes about each task

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
