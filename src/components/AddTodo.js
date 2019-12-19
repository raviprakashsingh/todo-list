import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';

class AddTodo extends Component {
  state = {
    title: ''
  };

  fieldChange = e => {
    if (e.target.value.trim() === '') {
      e.target.value = '';
    }
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
            error
            required={true}
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
