# Votey
###### A live multi-user voting app in real time.

A tutorial located [here]('http://teropa.info/blog/2015/09/10/full-stack-redux-tutorial.html').

* This is a voting app that has a back and front end.
* We will use Redux on both ends of the opp.
* The organizer has the ability to call NEXT when users are done voting.
* Users will have their own Redux store for making votes.



## **The Architecture**
* consist of two applications:
  * Browser with 2 intefaces:
    * `React` / `Redux` / `Immutable`
  * Server app that handles the voting logic.
    * `Node` / `Redux`
* Communication between the two using `WebSockets`.


Use of Redux to organize the application code both on the client and on the server. For holding the state we'll use Immutable data structures.

==Both== Front and back end will use Redux.

### The Server
Redux is NOT just for React. It is very useful in many cases.

* To start, we must start to design the App state tree. This should evolve over time, most likely in parallel with the app dev process.


#### Redux state tree
We have `entries`. Entries will have a `vote`. Vote may `pair` and `tally`. As the votes are counted, the losing entry will be removed from entries.


##### Immutable.js
* `setEntries()` used to give state a `entries` point with entries

* `next()`: uses take() and skip() to return the next two choices and remove

* `vote()`: adds `tally` map if not there and runs a function to add 1
** state.updateIn([...nested_paths], initial_value, function )

`state.merge()`, `state.take()`, `state.skip()`, `state.updateIn`

"It is important to have morph the old state into the new state. This will future proof your tests."

Unit testing these without mocks, stubs, or setup is what makes pure-functions really good.

`reduce` function can be used

`finalState = actions.reduce( reducer , INITIAL_VALUE );`
* reducer is the function used.
* First arg is INITIAL_VALUE or Map()
* will iterate through entire list of actions
* each return from reduce first replaces `INITIAL_VALUE` then  
* send only the state used.
** excess can cause code to be brittle when it scales

http://teropa.info/blog/2015/09/10/full-stack-redux-tutorial.html#a-taste-of-reducer-composition



### Redux
`npm i --save redux`
`{ createStore } from 'redux'`

`createStore()` tokes a reducer to make a store. You can then at any time `getState()` and `dispatch()` actions.

`store.getState();`
`store.dispatch({ type: SOME_ACTION, payload: <data> });`




* A client sends an action to the server.
* The server hands the action to the Redux Store.
* The Store calls the reducer and the reducer executes the logic related to the action.
* The Store updates its state based on the return value of the reducer.
* The Store executes the listener function subscribed by the server.
* The server emits a 'state' event.
* All connected clients - including the one that initiated the original action - receive the new state.



### The client-server
http://teropa.info/blog/2015/09/10/full-stack-redux-tutorial.html#the-client-application



# questions
* What is navigator?
* what is module?
