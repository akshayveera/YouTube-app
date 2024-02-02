# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)



### Debouncing : 
    - controls the API call considering the time diff b/w two keys press

    typing slow = 200ms time diff b/w key press
    typing fast = 50ms time diff b/w key press

    performace : 
        - iphone pro max = 14 letters * 1000(members) = 14000
        - with debouncing = 3 API calls * 1000(members) = 3000

    Debouncing with 200ms
        - if (diff b/w two key strokes < 200ms) : decline API call
        - if (diff b/w two key strokes >= 200ms) : make API call


### Cache :

    - time complexity of search in array : O(n)
    - time complexity of search in object : O(1)

    - so it better to store the search results in object, rather than array
    - map is more optimised than object, but for the sake of simplicity we are using object here

    - there is also LRU cache - Least Recently Used Cache
    - we can limit the no.of items we store in cache using this
    - like we can limit it to only 100 and if the count increases, we remove the old stored items just like queue


### search bar

    - now our search bar is so powerful because
        - we used live API
        - we used debouncing
        - we used caching
        - we used redux store
        - we used states 

### live chat feature in YouTube

    - there are two ways dealing with live data
        1) WebSocket :
            - in WebSockets bi-directional connection (or a handshake) is established between data layer of UI and server
            - WebSockets is used in time critical applications like trading apps(zerodtha), messenger apps(whatsapp, insta) etc

        2) API polling :
            - API polling is where the client sends requests to an endpoint repeatedly. It then compares the requests to see if any of the information has changed. The requests can be at regular intervals or made with randomised delays or exponential backoff
            - This is used if some delay of updation in live data is accepted like cricbuzz

    - Which strategy is used in YouTube live chat ?
        - YouTube live chat uses API polling with a regular intervavl around 1.5 sec

    - We too used API polling for developing the live chat feature

### difference between const,let, state and useRef in react

    - when we try to update const variable it throws an error Type error : Assignment to constant variable
    - when we update let variable in a component using a button, it updates in the memory but it doesn't render it to UI, because react doesn't track let and const variables it only tracks state variables
    - when we update state variable, as react tracks state variable react renders the whole component and the UI is updated, but as re-rendering happens let variable is re-initalized to its initial value (the value of let is reset)
    - when we update useRef variable, it doesn't render it to UI, but react tracks the variable, so when re-render happens it doesn't reset like let variable, the updated value of the ref variable is rendered to UI

    - when the particular variable is updated 
        - let : react doesn't tracks it, doesn't render to UI and resets when component is rendered(the updated value gets lost)
        - state : react tracks it (so the updated value doesn't get lost) and renders to UI (when state variable is updated whole component gets re-rendered)
        - useRef : react tracks it (so the updated value doesn't get lost), but it doesn't rendered to UI, but when the component is rendered the updated value of useRef is also rendered to UI 


### challenge faced while developing search suggetions

    - Challenge : I got the list of search suggetions appearing when I type some query in search bar but the problem is when I click on one of the suggestion the app should search videos and show with the search query as the search suggestion I have clicked but that's not happening even appropriate routing is done.

    - Where is the issue ?
    - The issue is that onBlur event handler is used on search bar input tag to remove the suggestions when it loses focus and when I click on any search suggestion, what's happening is firstly onBlur event is getting executed, that means firstly suggestion is getting removed and next the click is being done (not on the suggestion but on some random point behind the suggestion clicked ) but as this happens with in milli-seconds it appears as we clicked on the search suggestion.

    - Solution ?
    - I have created some milli-seconds of delay on onBlur event using setTimeout(), to ensure that search suggestion is clicked before removing the suggestions from DOM 






