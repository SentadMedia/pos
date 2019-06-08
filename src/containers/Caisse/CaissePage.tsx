import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import routes from '../../constants/routes.json';

type Props = {};

export default class CaissePage extends Component<Props> {
  render() {
    return <Link to={routes.HOME}> Caisse </Link>;
  }
}