import React, { Component } from 'react';
import ToDoItem from './ToDoItem'

class ToDoList extends Component {
    constructor(props) {
        super(props);
        
        
        this.state = {
            items:[]
        };

        this.addItem = this.addItem.bind(this);
    }

    addItem(e) {
        if (this._inputElement.value !== "") {
            var newItem = {
                text: this._inputElement.value,
                key: Date.now()

            };

            this.setState((previouslyState) => {
                return {
                    items: previouslyState.items.concat(newItem)
                };
            });

            this._inputElement.value = "";
        }

        e.preventDefault();
    }

    


    

    render() {
        return (
            <>
            <div className = "todoListMain">
                <form onSubmit={ this.addItem }>
                <input ref={ (a) => this._inputElement = a} placeholder= "Digite aqui sua tarefa" />
                <button type="submit">Enviar</button>
                </form>
                <ToDoItem entries={this.state.items} />
            </div>

            </>
        );

        
    };
}

export default ToDoList;