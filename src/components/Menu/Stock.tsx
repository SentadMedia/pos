import React, { Component } from 'react';
import {Image} from 'react-bootstrap';
import PosLogo from "./assets/inventory.svg"
 
export default class Stock extends Component<any> {
  render() {
    return (
      <React.Fragment>
        <Image src={PosLogo}  width="140" height="140" className={"rounded-lg"}></Image>
        <h2>
          Stock
        </h2>
      </React.Fragment>
    );
  }
}