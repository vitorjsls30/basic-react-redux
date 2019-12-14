import { WATCH_LESSON } from '../actions';

const defaultState = {
    modules: [],
    currentLesson: {
        module: 'Default Module Name',
        lesson: 'Default Lesson Name',
    }
};

function lessonsApp(state=defaultState, action) {
    switch(action.type) {
        case WATCH_LESSON:
            return {
                ...state, 
                currentLesson: { ...action.item }
            };
        default:
            return state;
    }
}

export default lessonsApp;