import React, { Component } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';

class TodoItem extends Component {
  getStyle = () => {
    return {
      textDecoration: this.props.todo.completed ? 'line-through' : 'none'
    };
  };

  render = () => {
    return (
      <div style={this.getStyle()}>
        <Typography variant='h4' color='inherit'>
          <Checkbox
            value='primary'
            color='primary'
            inputProps={{ 'aria-label': 'primary checkbox' }}
            onClick={this.props.completeTodo.bind(this, this.props.todo.id)}
          />
          {this.props.todo.title}

          <Button
            onClick={this.props.deleteTodo.bind(this, this.props.todo.id)}
          >
            <DeleteIcon
              color='secondary'
              onClick={this.props.deleteTodo.bind(this, this.props.todo.id)}
            />
          </Button>
        </Typography>
      </div>
    );
  };
}

export default TodoItem;
