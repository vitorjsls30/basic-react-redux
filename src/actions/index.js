// actions

export const WATCH_LESSON = 'WATCH_LESSON';

// action creators
export const watchLesson = (lesson) => {
    return { type: WATCH_LESSON, lesson};
}