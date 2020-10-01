import React from 'react'
import {useParams} from 'react-router-dom';

export default function About() {
    let { a } = useParams();
    return (
        <div>
            About aku dong {a}
        </div>
    )
}
