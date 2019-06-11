import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Image } from 'react-bootstrap';
import PosLogo from './assets/pos.svg';
import routes from '../../constants/routes.json';

export default class Caisse extends Component<any> {
    public render() {
        return (
            <React.Fragment>
                <Link to={routes.CAISSE}>
                    <Image src={PosLogo} width="140" height="140" className={'rounded-lg'}></Image>
                    <h2>Caisse</h2>
                </Link>
            </React.Fragment>
        );
    }
}
