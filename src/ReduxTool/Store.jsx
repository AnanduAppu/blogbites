import { configureStore} from '@reduxjs/toolkit';

import infoReducer from './CreateSlice';


const store = configureStore({
  reducer: {
    infoData: infoReducer
  },
 
});

export default store;