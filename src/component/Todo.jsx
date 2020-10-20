import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addTodos } from '../redux/actions/index'
import List from './List'

const Todo = ({a}) => {
    const [value, setValue] = useState('')
    
    return (
        <div className="Todo">
            <input type="text" onChange={(e) => setValue(e.target.value) }/>
            <button type="button" onClick={() => a(value)}>Add</button>
            {/* <button type="button" onClick={() => props.completeAll()}>Complete All</button> */}
            <List />
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    a: todo => dispatch(addTodos({
        text: todo,
        completed: false,
        date:new Date(),
        edit:false
    }))
})

export default connect(null, mapDispatchToProps)(Todo)
