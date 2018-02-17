import rootReducer from '../../store/reducers/index'
import { createStore } from 'redux';

const teststore = createStore(rootReducer);

export default teststore;