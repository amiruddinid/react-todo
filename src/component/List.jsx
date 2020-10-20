import React, { Component } from 'react'
import { connect } from 'react-redux'

const List = ({todos}) => {
    return (
        <ul>
            {
                todos.map((el, i) => (
                    <li>
                        {
                            !el.edit ?
                                <>
                                    {el.completed ? <s>{el.text}</s> : el.text}
                                    <span onClick={() => this.props.remove(i)}>X</span>
                                    <span onClick={() => this.handleEdit(el.text, i)}>Edit</span>
                                    <span onClick={() => this.props.complete(i)}>Complete</span>
                                </>
                                :
                                <>
                                    <input type="text" value={this.state.value} onChange={(e) => this.setState({ value: e.target.value })} />
                                    <button onClick={() => this.props.edit(this.state.value, i)}>Save</button>
                                </>
                        }
                    </li>
                ))
            }
        </ul>
    )
}

const mapStateToProps = (state) => ({
    todos: state.todos
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(List)
