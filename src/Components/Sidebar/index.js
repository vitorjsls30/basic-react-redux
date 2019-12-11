import React from 'react';

const Sidebar = () => {
    const modules = [
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
    ]
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

export default Sidebar;