import React, { Component } from 'react';

class ToDoList extends Component {
    constructor(props) {
        super(props);
        this.addItem = this.addItem.bind(this);
        
        this.state = {
            Item:[]
        };
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
                <form onSubmit={ this.addItem }>
                <input ref={ (e) => this.inputElement = e} placeholder= "Digite aqui sua tarefa" />
                <button type="submit">Enviar</button>
                </form>
            </>
        );

        
    };
}

export default ToDoList;