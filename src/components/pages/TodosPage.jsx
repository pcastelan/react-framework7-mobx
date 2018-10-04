import React from 'react';

import {observer, inject} from 'mobx-react';
import {
    Page,
    Button,
    List,
    ListItem,
    Row,
    Col,
} from 'framework7-react';


@inject('stores') @observer
class TodosPage extends React.Component{
    constructor(props){
        super(props);
        this.addTodo=React.createRef();
        //console.log(props.rootProvider);
    }
    newTodo(){
        if(this.addTodo.current.value != ''){
            this.props.stores.todo.createTodo(this.addTodo.current.value);
            this.addTodo.current.value = '';
            this.addTodo.current.focus();
        }
    }

    toggleComplete(id){
        this.props.stores.todo.toggleComplete(id);
    }
    render(){
        const{filter, todos, toggleComplete} = this.props.stores.todo;

        return(
            <Page>
                <List>
                    <ListItem>
                        <Row>
                            <Col width="80">
                                <input type="text" placeholder="Task" ref={this.addTodo} id="uee"/>
                            </Col>
                            <Col width="20"><Button fill onClick={this.newTodo.bind(this)}>+</Button></Col>
                        </Row>
                    </ListItem>
                </List>
                <List>
                    {todos.map((todo) =>{
                        return(
                            <ListItem key={todo.id} className={todo.complete ? 'disabled': ''}>
                                <input type="checkbox" value={todo.complete} checked={todo.complete} onChange={() => {todo.toggleComplete()}}/>
                                {todo.value}
                            </ListItem>
                        );
                    })}


                </List>
            </Page>
        );
    }

};

export default TodosPage;