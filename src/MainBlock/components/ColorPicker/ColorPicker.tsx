import * as React from "react";
export class ColorPicker extends React.PureComponent<{
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void,
    choosenValue: string
}, {}>{
    render() {
        return (
            <select className="select-options" onChange={this.props.onChange} defaultValue={this.props.choosenValue}>
                <option value="#ffffff">White</option>
                <option value="#f20000">Red</option>
                <option value="#1db954">Green</option>
                {/* <option value="#00a3e0">blue</option> */}
                <option value="#ff7500">Orange</option>
            </select>
        )
    }
}