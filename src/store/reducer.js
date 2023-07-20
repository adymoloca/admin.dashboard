import { combineReducers } from 'redux';

// reducer import
import customizationReducer from './customizationReducer';
import membersReducer from './reducers/membersReducer';
import userReducer from './reducers/userReducer';
import postsReducer from './reducers/postsReducer';
import projectsReducer from './reducers/projectsReducer';
import servicesReducer from './reducers/servicesReducer';
import quizzesReducer from './reducers/quizzesReducer';
import coursesReducer from './reducers/coursesReducer';
import studentsReducer from './reducers/studentsReducer';
import appliersReducer from './reducers/appliersReducer';
import utilReducer from './reducers/utilReducer';
// ==============================|| COMBINE REDUCER ||============================== //

const reducer = combineReducers({
    customization: customizationReducer,
    membersState: membersReducer,
    userState: userReducer,
    postsState: postsReducer,
    projectsState: projectsReducer,
    servicesState: servicesReducer,
    quizzesState: quizzesReducer,
    coursesState: coursesReducer,
    studentsState: studentsReducer,
    appliersState: appliersReducer,
    utilState: utilReducer,
});

export default reducer;
