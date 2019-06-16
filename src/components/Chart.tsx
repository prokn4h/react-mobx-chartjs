import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { AppState } from '../AppState';
import { Line } from 'react-chartjs-2';
import { toJS } from 'mobx';
import 'chartjs-plugin-annotation';
import 'chartjs-plugin-draggable';

//@inject("store")
@observer
class Chart extends Component<{ store?: AppState }> {
    // constructor(props: { store?: AppState }) {
    //     super(props);
    // }

    store = new AppState();

    render() {
        return (
            <Line
                options={toJS(this.store.getChartOptions)}
                data={toJS(this.store.getData)}
            />
        );
    }
}



export default Chart;