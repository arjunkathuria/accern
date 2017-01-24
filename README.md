# Accern in React

The Accern Assignment, implemented entirely in React.js.

## Live Deployment.
The site is deployed `live` and can be accessed at:-
```
https://arjun-accern.surge.sh
```

## How Code is organised.
The code is nicely organised in `pages`, with each page being a master React Component, consisting of several atomic components.

Each page and component in /src directory has it's stylesheets neatly placed in the /styles folder with the same Name for clarity and consistency.

```
/ (app root)
|
|----/dist (final bundled distributables and assets)
|
|----/src (source files here)
|    |
|    |----/components (React components that make up the app)
|    |
|    |----/config (routes file mainly, routing by react-router)
|    |
|    |----/containers (Container components)
|    |
|    |----/pages (Pages that make up the App.)
|    |
|    |----/styles (stylesheets, consistenly Named)
|
|---- project config files (.edtiorconf, .gitignore, webpack config. package.json)
```

## Libraries Used

Most of the work in the project is done by hand, as was the point of the Assignment. Some selected features from select libraries have been used, given the time constraint.

- React.js 
- React-Dom, Rendering react app to the DOM.
- React-Router:- for routing needs.
- React-semantic-ui:- For the single accordian component on the home page.
- Bootstrap:- For the bootstrap grid system.
- Babel:- For transpiling the javascript.
- Webpack:-  for bundling all this javascript.