import React, { ChangeEvent, Component } from 'react';
import { observer, inject } from 'mobx-react';
import { AppState } from '../AppState';

@inject("store")
@observer
class SelectColor extends Component<{ store?: AppState }> {
    onChange = (e: ChangeEvent<HTMLSelectElement>) => {
        this.props.store!.selectColor(e.target.value);
        //debugger;
    }

    options =
        this.props.store!.colors.map(u => <option key={u} value={u}>{u}</option>);

    render() {
        return (
            <select value={this.props.store!.selectedColor} onChange={this.onChange} >
                {this.options}
            </select>
        );
    }
}


export default SelectColor;