# ✨ CSS Animations and Transitions

Learning smooth animations and transitions to make websites interactive and engaging.

## 📂 Files in this folder

### index.html & css-animations.css

## 📚 Concepts I Learned

### 1. Transitions

**What are Transitions?**
Smooth change from one CSS state to another.

**Basic Syntax:**
```css
transition: property duration timing-function delay;
```

**Transition Properties:**
- `transition-property` - Which property to animate (e.g., background-color)
- `transition-duration` - How long (e.g., 0.3s)
- `transition-timing-function` - Speed curve
- `transition-delay` - Wait before starting

**Shorthand:**
```css
transition: background-color 0.3s ease 0s;
```

**Multiple Properties:**
```css
transition: width 0.3s, height 0.3s, background-color 0.3s;
/* OR */
transition: all 0.3s;  /* Animate all properties */
```

**Timing Functions:**
- `ease` - Slow start, fast middle, slow end (default)
- `linear` - Constant speed throughout
- `ease-in` - Slow start, fast end
- `ease-out` - Fast start, slow end
- `ease-in-out` - Slow start and end

**Examples I Practiced:**
✅ Color change on hover
✅ Size change on hover
✅ Multiple property changes
✅ Different timing functions

---

### 2. Animations with @keyframes

**What are Animations?**
More complex than transitions. Can have multiple steps and repeat infinitely.

**Basic Syntax:**
```css
@keyframes myAnimation {
    0% {
        opacity: 0;
    }
    50% {
        opacity: 0.5;
    }
    100% {
        opacity: 1;
    }
}

.element {
    animation: myAnimation 2s ease-in;
}
```

**Animation Properties:**
- `animation-name` - Name of @keyframes
- `animation-duration` - How long the animation takes
- `animation-timing-function` - Speed curve
- `animation-iteration-count` - How many times (or infinite)
- `animation-delay` - Wait before starting
- `animation-direction` - Normal, reverse, alternate
- `animation-fill-mode` - Before/after animation state

**Shorthand:**
```css
animation: myAnimation 2s ease-in 0s infinite;
```

---

## 🎬 Animations I Created

### Fade In
```css
@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}
```
**Use:** Fade in elements when page loads

### Slide In
```css
@keyframes slideIn {
    from {
        transform: translateX(-100px);
        opacity: 0;
    }
    to {
        transform: translateX(0);
        opacity: 1;
    }
}
```
**Use:** Slide elements in from side

### Bounce
```css
@keyframes bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-20px); }
}
.bounce {
    animation: bounce 1s infinite;
}
```
**Use:** Bouncing effect

### Rotate
```css
@keyframes rotate {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
}
.rotate {
    animation: rotate 2s linear infinite;
}
```
**Use:** Spinning loader icons

### Scale
```css
@keyframes scale {
    from { transform: scale(1); }
    to { transform: scale(1.5); }
}
```
**Use:** Growing and shrinking elements

### Color Change
```css
@keyframes colorChange {
    0% { background-color: red; }
    25% { background-color: yellow; }
    50% { background-color: green; }
    75% { background-color: blue; }
    100% { background-color: red; }
}
```
**Use:** Color transitions

### Pulse
```css
@keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
}
```
**Use:** Blinking effect

### Glow
```css
@keyframes glow {
    0%, 100% { box-shadow: 0 0 5px rgba(255,255,255,0.5); }
    50% { box-shadow: 0 0 20px rgba(255,255,255,1); }
}
```
**Use:** Glowing text/boxes

### Shake
```css
@keyframes shake {
    0%, 100% { transform: translateX(0); }
    10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
    20%, 40%, 60%, 80% { transform: translateX(5px); }
}
```
**Use:** Vibration/warning effects

---

## 🎯 Transform Functions

**These work with both transitions and animations:**

- `translate(x, y)` - Move element
- `rotate(angle)` - Spin element
- `scale(x, y)` - Resize element
- `skew(x, y)` - Tilt element
- `translateX(x)` - Move horizontally
- `translateY(y)` - Move vertically
- `scaleX(x)` - Resize horizontally
- `scaleY(y)` - Resize vertically

**Examples:**
```css
transform: translateX(-100px);     /* Move left 100px */
transform: rotate(360deg);         /* Spin 360 degrees */
transform: scale(1.5);             /* Grow to 150% */
transform: translateX(0) scale(1.05); /* Combine transforms */
```

---

## 📝 Timing Functions Explained

**ease** (default)
- Slow start → Fast middle → Slow end
- Best for general animations
- Most natural feeling

**linear**
- Constant speed throughout
- Best for continuous rotating/moving
- Example: Loading spinners

**ease-in**
- Slow start, accelerates
- Best for hiding/disappearing
- Feels like falling

**ease-out**
- Fast start, decelerates
- Best for appearing/entering
- Feels like bouncing

**ease-in-out**
- Slow at both ends
- Best for smooth back-and-forth
- Feels elegant

---

## 🎨 Animation Properties Table

| Property | Values | Default |
|----------|--------|---------|
| animation-duration | 0.5s, 1s, 2s, etc | 0s |
| animation-timing-function | ease, linear, ease-in, ease-out | ease |
| animation-delay | 0s, 0.5s, 1s, etc | 0s |
| animation-iteration-count | 1, 2, 3, infinite | 1 |
| animation-direction | normal, reverse, alternate | normal |
| animation-fill-mode | none, forwards, backwards, both | none |

---

## 💡 Practical Examples

**Button Hover:**
```css
.button {
    transition: all 0.3s ease;
}
.button:hover {
    background-color: #764ba2;
    transform: scale(1.05);
}
```

**Loading Spinner:**
```css
.spinner {
    animation: rotate 2s linear infinite;
}
```

**Fade In on Page Load:**
```css
.fade-in {
    animation: fadeIn 2s ease-in;
}
```

**Infinite Pulse:**
```css
.pulse {
    animation: pulse 1.5s infinite;
}
```

---

## 🚀 Performance Tips

✅ Use `transform` and `opacity` for best performance
❌ Avoid animating: `width`, `height`, `left`, `top`, `margin`, `padding`
✅ Use `transform: scale()` instead of changing `width`
✅ Use `transform: translateX()` instead of changing `left`
✅ Use `opacity` for fade effects
✅ GPU accelerates transforms

---

## 📝 What I Practiced

**Transitions:**
✅ Hover effects
✅ Color changes
✅ Size changes
✅ Multiple properties
✅ Different timing functions

**Animations:**
✅ Keyframe animations
✅ Infinite animations
✅ Animation delays
✅ Multiple animations
✅ Transform effects

**Real-World Uses:**
✅ Button hover effects
✅ Loading spinners
✅ Fade in/slide in effects
✅ Interactive elements
✅ Page transitions

---

## 🎓 Practice Exercises

- Create a button with hover animation
- Make a rotating loading spinner
- Build a bouncing ball animation
- Create a fade-in effect for page elements
- Make elements pulse indefinitely
- Create a shake effect for errors
- Build a glow animation
- Make a slide-in animation for navigation

---

**Status:** ✅ Complete
**Author:** Rajvir