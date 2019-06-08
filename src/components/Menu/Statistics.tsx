import React, { Component } from 'react';
import {Image} from 'react-bootstrap';
import PosLogo from "./assets/stats.svg"
 
export default class Statistics extends Component<any> {
  render() {
    return (
      <React.Fragment>
        <Image src={PosLogo}  width="140" height="140" className={"rounded-lg"}></Image>
        <h2>
            Statistics
        </h2>
      </React.Fragment>
    );
  }
}