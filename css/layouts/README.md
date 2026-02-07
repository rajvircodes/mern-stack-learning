# CSS Layouts

Learning different layout techniques in CSS.

## Files in this folder

### 1. flexbox-guide.css

Flexbox is a 1D layout method for arranging items in rows or columns.

**What I learned:**

**Display Flex**
- `display: flex` - Makes container a flex container

**Flex Direction**
- `flex-direction: row` - Items in a row (default)
- `flex-direction: column` - Items in a column

**Justify Content (horizontal alignment)**
- `justify-content: center` - Center items
- `justify-content: space-between` - Space between items
- `justify-content: space-around` - Space around items

**Align Items (vertical alignment)**
- `align-items: center` - Center items vertically

**Flex Grow**
- `flex-grow: 1` - Item grows to fill space

**Flex Wrap**
- `flex-wrap: wrap` - Items wrap to next line

**Gap**
- `gap: 10px` - Space between items

**Examples covered:**
- Navigation bar
- Card layout
- Centered content
- Three column layout

### 2. grid-guide.css

CSS Grid is a 2D layout method for arranging items in rows and columns.

**What I learned:**

**Display Grid**
- `display: grid` - Makes container a grid container

**Grid Columns**
- `grid-template-columns: 1fr 1fr 1fr` - Three equal columns
- `grid-template-columns: 2fr 1fr` - Two columns, first is twice as wide

**Grid Gap**
- `gap: 20px` - Space between grid items

**Auto-fit (Responsive)**
- `grid-template-columns: repeat(auto-fit, minmax(200px, 1fr))` - Responsive grid

**Sidebar Layout**
- Main + sidebar layout using grid

**Dashboard Layout**
- Multiple cards layout

**Named Grid Areas**
- Using grid-template-areas for layout structure

**Examples covered:**
- 2 column layout
- 3 column layout
- Responsive grid
- Sidebar layout
- Header/Footer layout
- Dashboard layout
- Product grid

## Key Differences

**Flexbox:**
- 1 dimensional (row or column)
- Good for navigation, cards in a row
- Content-first approach

**Grid:**
- 2 dimensional (rows and columns)
- Good for page layouts, dashboards
- Layout-first approach

## Practice

Study these CSS files and understand:
- When to use Flexbox vs Grid
- How to center items
- How to create responsive layouts
- How to use gap for spacing

---

**Status:** ✅ Complete