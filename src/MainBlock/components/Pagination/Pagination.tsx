import * as React from "react";
import { observer } from "mobx-react";
import { Button } from "@material-ui/core";
import { PaginationType } from "../../types";

@observer
export class Pagination extends React.PureComponent<PaginationType, {}>{
    render() {
        const pageNumbers: number[] = [];
        for (let i = 1; i <= Math.ceil(this.props.totalEmployees / this.props.employeesPerPage); i++) {
            pageNumbers.push(i);
        }
        return (
            <div>
                <Button disabled={this.props.isDisabledDec} onClick={this.props.onClickDec}>{"<"}</Button>
                <Button>{`${this.props.currentPage}/${pageNumbers.length}`}</Button>
                <Button disabled={this.props.isDisabledInc} onClick={this.props.onClickInc}>{">"}</Button>
            </div>
            // <ul className="pagination-wrapper">
            //     {pageNumbers.map(number => (
            //         <li key={number} className="page-item">
            //             <Button onClick={this.props.onClick} className="page-button" variant="outlined" color="primary">
            //                 {number}
            //             </Button>
            //         </li>
            //     ))}
            // </ul>
        )
    }
}