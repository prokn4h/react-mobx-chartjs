import React, { Component } from 'react';
import { AppState } from './AppState';
import { observer } from 'mobx-react';
import Chart from './components/Chart'

@observer
export class App extends Component {

    store = new AppState();

    render() {
        return (
            <div style={{ position: "relative", width: 600, height: 550 }}>
                <Chart store={this.store} />
            </div>
        );
    }
}

export default App;