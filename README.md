# Thinking in React

This is the result following the steps in the article [Thinking in React](https://facebook.github.io/react/docs/thinking-in-react.html).

## Steps of Designing a React Component

### Step 1: break the UI into a component hierarchy
### Step 2: Build a static version in React

*Don't use state at all.*

### Step 3: Identify the minimal (but complete) representation of UI state

#### 3 Question to ask: is a piece of data state?

1. Is it passed in from a parent via props? If so, it probably isn't state.
2. Does it change over time? If not, it probably isn't state.
3. Can you compute it based on any other state or props in your component? If so, it's not state.

### Step 4: Identify where your state should live

1. Identify every component that renders something based on that state.
2. Find a common owner component (a single component above all the components that need the state in the hierarchy).
3. Either the common owner or another component higher up in the hierarchy should own the state.
4. If you can't find a component where it makes sense to own the state, create a new component simply for holding the state and add it somewhere in the hierarchy above the common owner component.

### Step 5: Add inverse data flow