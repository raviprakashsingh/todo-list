import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';

class AddTodo extends Component {
  state = {
    title: ''
  };

  fieldChange = e => {
    this.setState({
      title: e.target.value
    });
  };

  submit = e => {
    e.preventDefault();

    this.props.addTodo(this.state.title);

    this.setState({
      title: ''
    });
  };

  render = () => {
    return (
      <div>
        <form onSubmit={this.submit}>
          <TextField
            label='AddTodo'
            value={this.state.title}
            onChange={this.fieldChange}
            style={{ margin: '30px 0 30px 0' }}
          />
        </form>
      </div>
    );
  };
}

export default AddTodo;
