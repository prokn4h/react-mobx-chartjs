import React, { Component } from 'react';
import { AppState } from './AppState';
import { Provider, observer } from 'mobx-react';
import Chart from './components/Chart'
import SelectColor from './components/SelectColor';

@observer
export class App extends Component<any> {

    store = new AppState();

    render() {
        return (
            <Provider store={this.store}>
                <div style={{ position: "relative", width: 600, height: 550 }}>
                    {/* <SelectColor /> */}
                    <Chart />
                </div>
            </Provider>
        );
    }
}

export default App;