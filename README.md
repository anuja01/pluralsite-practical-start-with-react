# pluralsite-practical-start-with-react
Tutorial on https://app.pluralsight.com/library/courses/react-practical-start/table-of-contents

React is smart with updating the browser dom

### react - react engine

### react-dom -> browser support

Those two are separated. 👆 👆

## Tree Reconciliation
When change occurs, react compares new object tree and the old object tree which kept from previous render, and will draw only that element.

## JSX to JavaScript to HTML conversion
JSX -(Babel)-> Javascript object tree -(react-dom)-> HTML to render in browser (only the updated elements are rendered)

## Webpack
Smart bundler that packages the components of the application

## Babel
Translate JSX into Javascript
Tranform ES6 syntax to ES5 to support all browsers

## Production Build
```npm run build``` and deploy the bundle folder

## Extensions
### - Chrome debugger - can debug react app with chrome 👍👍
### - Simple React Snippets

## using Bootstrap for css
install ```npm install bootstrap@4 --save```

import in ```public/index.js``` file and css classes will be available throughout the app