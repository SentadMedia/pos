import * as React from 'react';

type Props = {
  children: any
};

export default class App extends React.Component<Props> {
  render() {
    const { children } = this.props;
    return <React.Fragment>{children}</React.Fragment>;
  }
}