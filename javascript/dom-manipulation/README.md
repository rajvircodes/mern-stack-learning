# DOM Manipulation & Events

Learning to interact with HTML elements using JavaScript.

## 📂 Files in this folder

### 1. dom-selectors.js

**Selecting Elements**
- `getElementById()` - Select by ID
- `getElementsByClassName()` - Select by class
- `getElementsByTagName()` - Select by tag name
- `querySelector()` - Select first matching element
- `querySelectorAll()` - Select all matching elements

**Accessing Content**
- `textContent` - Get/set text only
- `innerHTML` - Get/set HTML
- `innerText` - Get visible text

**Modifying Styles**
- `element.style.property = "value"`
- Multiple style properties

**Class Manipulation**
- `classList.add()` - Add class
- `classList.remove()` - Remove class
- `classList.toggle()` - Add/remove toggle
- `classList.contains()` - Check if has class

**Navigating DOM**
- `parentElement` - Get parent
- `children` - Get child elements
- `nextElementSibling` - Get next sibling
- `previousElementSibling` - Get previous sibling

### 2. event-handling.js

**Event Types**
- `click` - Mouse click
- `dblclick` - Double click
- `mouseover` - Mouse enters
- `mouseout` - Mouse leaves
- `input` - Input value changes
- `change` - Input loses focus
- `focus` - Element gets focus
- `blur` - Element loses focus
- `keydown` - Key pressed down
- `keyup` - Key released
- `keypress` - Key pressed
- `submit` - Form submitted
- `reset` - Form reset

**Event Listeners**
```javascript
element.addEventListener("eventName", function() {
    // code
});
```

**Event Object**
- `event.type` - Event type
- `event.target` - Element that triggered
- `event.key` - Which key pressed
- `event.clientX, clientY` - Mouse position

**Event Delegation**
Listen on parent, handle child clicks

### 3. index.html

Interactive demo file with 10 practical examples.

**How to Use:**
1. Open in browser
2. Interact with elements
3. Check console (F12) for logs

## 📝 Concepts

**DOM = Document Object Model**
The tree structure of HTML elements

**Selectors vs QuerySelector**
- Old: `getElementById`, `getElementsByClassName`
- New: `querySelector`, `querySelectorAll` (better)

**textContent vs innerHTML**
- `textContent` - Plain text only
- `innerHTML` - Includes HTML tags

**addEventListener Benefits**
- Multiple listeners on same event
- Easy to remove listeners
- Better than onclick attribute

## ✅ What I Practiced

- Selecting DOM elements
- Getting element content
- Changing content and styles
- Adding/removing classes
- Click events
- Mouse events
- Input events
- Form events
- Keyboard events
- Event delegation

## 💡 Key Points

✅ Use `querySelector` for modern selection
✅ Modify `style` to change CSS
✅ Use `classList` for class management
✅ `addEventListener` better than onclick
✅ `event.target` tells which element triggered
✅ Prevent default with `event.preventDefault()`
✅ Use event delegation for dynamic elements

## 🎓 Practice Exercises

- Create buttons that change page colors
- Build a to-do list with add/remove
- Make image gallery with next/previous
- Create form validation
- Build a modal popup
- Make countdown timer
- Create a toggle menu
- Build click counter