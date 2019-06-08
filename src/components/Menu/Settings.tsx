import React, { Component } from 'react';
import {Image} from 'react-bootstrap';
import PosLogo from "./assets/settings.svg"
 
export default class Settings extends Component<any> {
  render() {
    return (
      <React.Fragment>
        <Image src={PosLogo}  width="140" height="140" className={"rounded-lg"}></Image>
        <h2>
            Settings
        </h2>
      </React.Fragment>
    );
  }
}