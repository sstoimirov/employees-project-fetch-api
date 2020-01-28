import * as React from "react";
import { observer } from "mobx-react";
import { Button } from "@material-ui/core";

@observer
export class Pagination extends React.PureComponent<{ employeesPerPage: number, totalEmployees: number, onClick: (e: React.MouseEvent<HTMLButtonElement>) => void; }, {}>{
    render() {
        const pageNumbers: number[] = [];
        for (let i = 1; i <= Math.ceil(this.props.totalEmployees / this.props.employeesPerPage); i++) {
            pageNumbers.push(i);
        }
        return (
            <ul className="pagination-wrapper">
                {pageNumbers.map(number => (
                    <li key={number} className="page-item">
                        <Button onClick={this.props.onClick} className="page-button" variant="outlined" color="primary">
                            {number}
                        </Button>
                    </li>
                ))}
            </ul>
        )
    }
}