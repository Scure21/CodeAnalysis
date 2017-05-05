# Code Analysis

See comments in `index.html` for instructions.

## Run
I'm using yarn package manager. If you have yarn installed just type `yarn` in your cli.
If you don't have yarn you can isntall it by typing `brew update 
brew install yarn`


2. set up web pack to handle the bundle, add loaders for the transformations, specify extensions to be resolved.
3. set up babel to handle code transpilation. Add presets for ES6 and react.
4. Add script to the HTML and specify the source for the bundled code. This is the starting point where browsers will start reading the code.
5. Create a main.jsx component, this is where we specify the entry point for our react components so the can be attached to the DOM.
6. Create the App component that holds the view and receives the information that will be rendered. 
7. Since this is a very simple react list view, the ajax fetch method, add the componentDidMount hook lifecycle, in a more complex app this call can be done in a dispatch when using redux.
8. Add lodash library and change the data transform methods to use loadsh methods, to make them simpler.
9. Add binding to the class methods in the App component.
10. Remove 


## Style Guide

### Git Commit Messages

- Use the present tense ("Add feature" not "Added feature")
- Use the imperative mood ("Move cursor to..." not "Moves cursor to...")
- Limit the first line to 72 characters or less
- Reference issues and pull requests liberally
- Consider starting the commit message with an applicable emoji:
    - **Improvements**
        - :art: `:art:` when improving the format/structure of the code
        - :fire: `:fire:` when removing code or files
        - :tada: `:tada:` when adding a feature
        - :goat: `:goat:` when improving performance
    - **Misc**
        - :memo: `:memo:` when writing docs
    - **Dependencies**
        - :arrow_up: `:arrow_up:` when upgrading dependencies
        - :arrow_down: `:arrow_down:` when downgrading dependencies

### React Styles

- Always favor stateless components
