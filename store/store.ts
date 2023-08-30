import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit"
import { apidata } from "./features/fetchData"


const store = configureStore({
  reducer: {
    [apidata.reducerPath]: apidata.reducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(apidata.middleware)

})


export default store