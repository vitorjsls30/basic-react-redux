// actions

export const WATCH_LESSON = 'WATCH_LESSON';

// action creators
export const watchLesson = (item) => {
    return { type: WATCH_LESSON,
        item:{ ...item }
    };
};