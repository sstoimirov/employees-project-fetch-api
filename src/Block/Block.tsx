import * as React from 'react';
import { observer } from "mobx-react";
import { State } from '../State';
import { Employee } from '../MainBlock/components/Employee';
// import { EmployeeType } from '../EmployeeType';
@observer
export class Block extends React.PureComponent<{ dataProvider: State }, State>{
    constructor(props) {
        super(props)
        this.state = this.props.dataProvider
    }
    render() {
        return (
            <div>
                {/* {this.state.employees.map((x:EmployeeType)=>x)} */}
                <div>{this.state.employees.map(data => (
                    <Employee
                        key={`${data.uuid}__${data.name}`}
                        uuid={data.uuid}
                        name={data.name}
                        title={data.title}
                        company={data.company}
                        avatar={data.avatar}
                        bio={data.bio} />
                ))}</div>
            </div>
        )
    }
}