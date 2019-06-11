import React from 'react';

interface Props {
    children?: React.FunctionComponentElement<any>;
}

export default class App extends React.Component<Props> {
    public render(): any {
        const { children } = this.props;
        return <React.Fragment>{children}</React.Fragment>;
    }
}
