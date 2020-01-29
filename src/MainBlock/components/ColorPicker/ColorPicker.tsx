import * as React from "react";
export class ColorPicker extends React.PureComponent<{
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void,
    choosenValue: string
}, {}>{
    render() {
        return (
            <select className="select-options" onChange={this.props.onChange} defaultValue={this.props.choosenValue}>
                <option value="#ffffff">white</option>
                <option value="#f20000">red</option>
                <option value="#1db954">green</option>
                {/* <option value="#00a3e0">blue</option> */}
                <option value="#ff7500">orange</option>
            </select>
        )
    }
}