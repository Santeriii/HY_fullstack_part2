import React from 'react'

const Course = ({ courses }) => {
    return (
        courses.map(course =>
            <>
                <h1>{course.name}</h1>
                {course.parts.map(part => 
                    <li key={part.id}>{part.name} {part.exercises}</li>
                )}
                <h2>Total of {course.parts.reduce((sum, exercises) => sum + exercises.exercises, 0)} exercises</h2>
            </>
        )
    )
}

export default Course