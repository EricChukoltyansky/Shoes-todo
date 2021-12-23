import React from "react";

class AddContact extends React.Component {
  state = {
    name: "",
    style: "",
  };

  add = (e) => {
    e.preventDefault();
    if (this.state.name === "" || this.state.style === "") {
      alert("All the fields are mandatory!");
      return;
    }
    this.props.addContactHandler(this.state);
    console.log("this s", this.state);
    this.setState({ name: "", style: "" });
    this.props.history.push("/");
  };
  render() {
    return (
      <div className="ui main">
        <h2>Add Shoe</h2>
        <form className="ui form" onSubmit={this.add}>
          <div className="field">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Style</label>
            <input
              type="text"
              name="style"
              placeholder="Style"
              value={this.state.style}
              onChange={(e) => this.setState({ style: e.target.value })}
            />
          </div>
          <button className="ui button blue">Add</button>
        </form>
      </div>
    );
  }
}

export default AddContact;
