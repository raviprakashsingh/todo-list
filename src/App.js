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

class App extends React.Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'todo list app',
        completed: false
      },
      {
        id: 2,
        title: 'Udemy React course',
        completed: false
      },
      {
        id: 3,
        title: 'Faculties Update',
        completed: false
      }
    ]
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
    const todo = { id: 7, title: title, completed: false };
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
