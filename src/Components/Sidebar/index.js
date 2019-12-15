import React from 'react';
import { connect } from 'react-redux';
import { watchLesson } from '../../actions';

const Sidebar = ({ modules, onLessonClick }) => {
  return (
    <div>
      {
        modules.map(module => {
          return (
            <div key={module.id}>
              <div><b>{module.title}</b></div>
              {
                module.lessons.map(lesson => {
                  return (
                    <div key={lesson.id}>
                      {lesson.name}
                      <button 
                        onClick={
                          () => onLessonClick(module.title, lesson.name)
                        }>
                        Watch it
                      </button>
                    </div>
                  );
                })
              }
            </div>
          );
        })
      }
    </div>
  );
};

const mapStateToProps = state => {
  return {
    modules: state.modules
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onLessonClick: (moduleTitle, lessonName) => {
      dispatch(watchLesson(moduleTitle, lessonName))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);