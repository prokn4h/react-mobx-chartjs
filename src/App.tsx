import React, { Component } from 'react';
import SelectColor from './components/SelectColor';
import { AppState } from './AppState';
import { Provider, inject, observer } from 'mobx-react';
import { Line } from 'react-chartjs-2';
import { toJS } from 'mobx';

@observer
export class App extends Component<any> {

    store = new AppState();

    render() {
        return (
            <Provider store={this.store}>
                <div style={{ position: "relative", width: 600, height: 550 }}>

                    <SelectColor />
                    <Line
                        options={{
                            responsive: true
                        }}
                        data={toJS(this.store.getData)}
                    />

                </div>
            </Provider>
        );
    }
}

export default App;