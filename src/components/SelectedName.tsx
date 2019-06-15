import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { AppState } from '../AppState';

@inject("store")
@observer
class SelectedName extends Component<{ store?: AppState }> {
    render() {
        return (
            <p>Selected {this.props.store!.selectedColor}</p>
        );
    }
}


export default SelectedName;