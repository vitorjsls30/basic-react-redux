import { WATCH_LESSON } from '../actions';

const defaultState = {
    modules: [
        {
            id: 1,
            title: 'Introduction',
            lessons: [
                {
                    id: 1,
                    name: 'What is React'
                },
                {
                    id: 2,
                    name: 'Your first component'
                },
            ]
        },
        {
            id: 2,
            title: 'Advanced Topics',
            lessons: [
                {
                    id: 1,
                    name: 'Stateful Components'
                },
                {
                    id: 2,
                    name: 'High-Order Components'
                },
            ]
        },
    ],
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
                currentLesson: { ...action.payload }
            };
        default:
            return state;
    }
}

export default lessonsApp;