import React from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export default class ButtonDrop extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
    <div style = {{position: "absolute", top: 10, right: 0}}>
          <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret>
          Sortieren
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem>Neueste UP</DropdownItem>
          <DropdownItem>Neueste DOWN</DropdownItem>
          <DropdownItem>Beliebteste UP</DropdownItem>
          <DropdownItem>Beliebteste DOWN</DropdownItem>
        </DropdownMenu>
      </ButtonDropdown>
    </div>
    );
  }
}