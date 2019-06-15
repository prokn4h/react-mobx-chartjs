import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { AppState } from '../AppState';

@inject("store")
@observer
class Chart extends Component<{ store?: AppState }> {
    // constructor(props: { store?: AppState }) {
    //     super(props);
    // }

    render() {
        return (
            <div>
                Chart is gonna be here {this.props.store!.selectedColor}
            </div>
        );
    }
}



export default Chart;