import React, { Component } from 'react';

class ToDoItem extends Component {

    createTask(item) {
        return <li onClick={() => this.delete(item.key)} key={item.key}>{item.text}</li>
    }

    render() {
        var todoEntries = this.props.entries;
        var listItens = todoEntries.map(this.createTask);
        return (
            <ul className="theList">
                {listItens}
            </ul>
        )
    }
}

export default ToDoItem;