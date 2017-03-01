import React from 'react';
import {Image} from 'semantic-ui-react';

export default class UserAvatar extends React.Component
{
  constructor() {
      super();
      this.click = this.click.bind(this);
  }
  click() {
    let name = this.props.name;
    let email = this.props.email;
    console.log(name + 'may i get click' + email);
  }
render() {
let color = this.props.loginStatus ? 'lime' : 'gainsboro';
let p = this.props.photo;
let divStyle = {
  backgroundColor: color,
  width: '40px',
  height: '40px',
  paddingTop: '6px',
  paddingLeft: '2px',
  borderRadius: '50%'
};
if(color === 'lime')
{
  return(
    <a onClick={this.click}>
      <div style={divStyle}>
      <center><Image avatar src={require('../../../../webserver/images/' + p)} /></center>
      </div>
    </a>
  );
}
  return(
  <div style={divStyle}>
  <center><Image avatar src={require('../../../../webserver/images/' + p)} /></center>
  </div>
);
}
}
