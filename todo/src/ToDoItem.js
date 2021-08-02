import React, { Component } from 'react';

class ToDoItem extends Component {
    constructor(props) {
        super(props);

        this.createTask = this.createTask.bind(this);
    }
    delete(key) {
        this.props.delete(key);
    }

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