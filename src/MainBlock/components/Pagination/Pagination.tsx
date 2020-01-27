import * as React from "react";
import { observer } from "mobx-react";

@observer
export class Pagination extends React.PureComponent<{ employeesPerPage: number, totalEmployees: number,onClick:(e: React.MouseEvent<HTMLButtonElement>) => void; }, {}>{
    render() {
        const pageNumbers: number[] = [];
        for (let i = 1; i <= Math.ceil(this.props.totalEmployees / this.props.employeesPerPage); i++) {
            pageNumbers.push(i);
        }
        return (
            <ul className="pagination">
                {pageNumbers.map(number => (
                    <li key={number} className="page-item">
                        <button onClick={this.props.onClick} className="page-value">
                            {number}
                        </button>
                    </li>
                ))}
            </ul>
        )
    }
}