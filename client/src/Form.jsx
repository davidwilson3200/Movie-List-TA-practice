import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.movieAdder(this.state.value);
    this.setState({value: ''});
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} class="nav" >
        <label>
          <input type="text" placeholder="Add movie title here..." value={this.state.value} onChange={this.handleChange} />
        </label>
          <input type="submit" value="Add!" />
      </form>
    );
  };
}

export default Form;