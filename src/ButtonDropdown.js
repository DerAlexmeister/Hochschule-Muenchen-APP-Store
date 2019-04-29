import React from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Link } from 'react-router-dom'

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
        <Link to="/apps"> <DropdownItem>Neueste ↑</DropdownItem>  </Link>
        <Link to="/appsold"> <DropdownItem>Neueste ↓</DropdownItem>  </Link>
        <Link to="/appspopular"> <DropdownItem>Beliebteste ↑</DropdownItem>  </Link>
        <Link to="/appsnotpopular"> <DropdownItem>Beliebteste ↓</DropdownItem>  </Link>
        </DropdownMenu>
      </ButtonDropdown>
    </div>
    );
  }
}