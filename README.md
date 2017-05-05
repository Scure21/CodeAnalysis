# Code Analysis

See comments in `index.html` for instructions.

## Run
I'm using yarn package manager. If you have yarn installed just type `yarn` in your cli to install project dependencies.


If you don't have yarn you can isntall it by typing `brew update 
brew install yarn`


After you have yarn, open the two cli windows, type `yarn build` in one and `yarn start` in the other.

## Comments on the changes
I decided to change the code to have the latest ES6 and React features. The steps I followed where:

1. Set up web pack to handle the bundle, add loaders for the transformations, specify extensions to be resolved.
2. Set up babel to handle code transpilation. Add presets for ES6 and react.
3. Add script to the HTML and specify the source for the bundled code. This is the starting point where browsers will start reading the code.
4. Create a main.jsx component, this is where we specify the entry point for our react components so they can be attached to the DOM.
5. Create the App component that holds the view and receives the information that will be rendered. 
6. Since this is a very simple react list view, add the componentDidMount hook lifecycle where the ajax fetch method will send a request for the information. In a more complex app this call can be done in a dispatch when using redux. (I changed the API to be the same one provided for the [NameGame](https://github.com/lolakiller/TheNameGame), the one provided for this analysis didn't seem to be working)
7. Add binding to the class methods in the App component.
8. In the render, I decided to join all the provided components to compose the table and make the props chaining easier.
9. Add lodash library and change the data transform methods to use loadsh methods to make them simpler. 
10. Add the styles provided to an object in the same App component and set the corresponding styles. 
