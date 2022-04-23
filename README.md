### Redux ToolKit Demo

Step 1 : Create a Redux store

```JS
const store =  configureStore({
    reducer: {}
})
```

Step 2 : Provide Redux store to React
```JS
 <Provider store={store}>
    <App />
 </Provider>
```

Step 3 : Create Redux State Slice
```Js

const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0,
    },
    reducers: {

        increment: (state) => {
            state.value += 1
        } ,

        decrement: (state) => {
            state.value -= 1
        },

        addBy: (state, action) => {
            state.value += action.payload
        },


    },
})
```

Step 4 : Add Slice Reducer to Store
```Js 
const store =  configureStore({
    reducer:{
        counter: counterSlice.reducer
    }
})
```
Step 5 : Use Redux State using `useSelector` and actions using `useDispatch` in React Component

```Js
 const count = useSelector(state => state.counter.value);
    const dispatch = useDispatch();

    const increase = () => {
        dispatch(counterSlice.actions.increment());
    }
```
Reference : [react-redux.js.org](https://react-redux.js.org/tutorials/quick-start)