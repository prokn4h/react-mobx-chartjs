import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { AppState } from '../AppState';
import { Line } from 'react-chartjs-2';
import { toJS } from 'mobx';
import 'chartjs-plugin-annotation';
import 'chartjs-plugin-draggable';

@observer
class Chart extends Component<{ store?: AppState }> {

    render() {
        return (
            <div>
                <Line
                    options={toJS(this.props.store!.getChartOptions)}
                    data={toJS(this.props.store!.getData)}
                />
                <button onClick={this.props.store!.undo}>Revert selectors to previous state</button>
            </div>
        );
    }
}



export default Chart;