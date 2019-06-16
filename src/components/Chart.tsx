import React, { Component } from 'react';
import { observer, Provider } from 'mobx-react';
import { AppState } from '../AppState';
import { Line } from 'react-chartjs-2';
import { toJS } from 'mobx';
// import SelectColor from './SelectColor'
import 'chartjs-plugin-annotation';
import 'chartjs-plugin-draggable';

@observer
class Chart extends Component<{ store?: AppState }> {
    // constructor(props: { store?: AppState }) {
    //     super(props);
    // }

    store = new AppState();

    render() {
        return (
            <Provider store={this.store}>
                <div>
                    {/* <SelectColor /> */}                    
                    <Line
                        options={toJS(this.store.getChartOptions)}
                        data={toJS(this.store.getData)}
                    />
                    <button onClick={this.store.undo}>Revert selectors to previous state</button>
                </div>
            </Provider>
        );
    }
}



export default Chart;