// actions

export const WATCH_LESSON = 'WATCH_LESSON';

// action creators
export const watchLesson = (moduleTitle, lessonName) => {
    console.log('inside watchLesson...', moduleTitle, '/', lessonName);
    return { 
        type: WATCH_LESSON,
        payload:{ 
            module: moduleTitle,
            lesson: lessonName
        }
    };
};