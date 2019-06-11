import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import routes from '../../constants/routes.json';

export default class CaissePage extends Component<any> {
    public render() {
        return <Link to={routes.HOME}> Caisse </Link>;
    }
}
