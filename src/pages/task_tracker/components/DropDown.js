import React, { Component } from "react";

export class DropDown extends Component {
  state = {
    listVisible: false,
    selected: "",
  };

  componentDidMount = () => {
    this.setState({ selected: this.props.value });
  };

  toggle = () => {
    const { listVisible } = this.state;
    this.setState({ listVisible: !listVisible });
  };
  render() {
    const { listVisible, selected } = this.state;
    const { onChange, label, value, options } = this.props;
    return (
      <div className="custom-dropdown position-relative mr-1">
        <small className="grey-text">{label}</small>
        <div
          className="d-flex justify-content-between mr-3 cursor-pointer"
          onClick={() => this.toggle()}
        >
          <small className="blue-gray-text font-weight-bold">{selected}</small>
          <i className="fas fa-caret-down"></i>
        </div>
        {listVisible && (
          <div className="custom-list bg-white py-1 shadow">
            {options &&
              options.map((item, index) => {
                return (
                  <a
                    onClick={() => {
                      this.setState({ selected: item });
                      this.toggle();
                    }}
                  >
                    {item}
                  </a>
                );
              })}
          </div>
        )}
      </div>
    );
  }
}

export default DropDown;
