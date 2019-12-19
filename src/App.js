import React from 'react';
import Todos from './components/Todos';
import './App.css';
import AddTodo from './components/AddTodo';
import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AssignmentIcon from '@material-ui/icons/Assignment';
import uuid from 'uuid';

class App extends React.Component {
  state = {
    todos: []
  };

  completeTodo = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (id === todo.id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  };

  deleteTodo = id => {
    this.setState({
      todos: this.state.todos.filter(todo => (id !== todo.id ? true : false))
    });
  };

  addTodo = title => {
    const todo = { id: uuid.v4(), title: title, completed: false };
    this.setState({ todos: [...this.state.todos, todo] });
  };

  render = () => {
    return (
      <Container maxWidth='sm'>
        <AppBar position='static' style={{ marginTop: '10px' }}>
          <Toolbar variant='dense'>
            <IconButton edge='start' color='inherit' aria-label='menu'>
              <AssignmentIcon />
            </IconButton>
            <Typography variant='h4' color='inherit'>
              Todo
            </Typography>
          </Toolbar>
        </AppBar>

        <AddTodo addTodo={this.addTodo} />
        {this.state.todos.length > 0 ? (
          <Typography variant='h4' style={{ color: '#002984' }}>
            Your Todo are here.
          </Typography>
        ) : null}

        <Todos
          todos={this.state.todos}
          completeTodo={this.completeTodo}
          deleteTodo={this.deleteTodo}
        />
      </Container>
    );
  };
}

export default App;
