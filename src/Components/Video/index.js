import React from 'react';
import { connect } from 'react-redux';

const Video = ({ currentLesson }) => {
    return(
        <div>
            <div><b>Section:</b>{ currentLesson.module }</div>
            <div><b>Lesson Name:</b>{ currentLesson.lesson }</div>
        </div>
    );
};

const mapStateToProps = state => {
    return { currentLesson: state.currentLesson };
}

export default connect(mapStateToProps)(Video);