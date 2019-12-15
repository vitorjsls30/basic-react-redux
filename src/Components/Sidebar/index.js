import React from 'react';
import { connect } from 'react-redux';

const Sidebar = ({modules}) => {
    return(
        <div>
            {
                modules.map(module => {
                    return (
                        <div key={ module.id }>
                            <div><b>{ module.title }</b></div>
                            {
                                module.lessons.map(lesson => {
                                    return(
                                        <div key={ lesson.id }>
                                            { lesson.name }
                                            <button>Watch it</button>
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

export default connect(mapStateToProps)(Sidebar);