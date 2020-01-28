import * as React from "react";
export class ColorPicker extends React.PureComponent<{ onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void }, {}>{
    render() {
        return (
            <select className="select-options" onChange={this.props.onChange} defaultValue={"white"}>
                <option value="white">white</option>
                <option value="blue">blue</option>
                <option value="red">red</option>
                <option value="green">green</option>
            </select>
        )
    }
}