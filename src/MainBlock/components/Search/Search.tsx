import * as React from "react";
import { Paper, InputBase, IconButton } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';

type SearchProps = {
    text: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}
export class Search extends React.PureComponent<SearchProps, {}>{
    render() {
        const { text, onChange } = this.props;
        return (
            <Paper component="form" className="filter-section-search">
                <IconButton aria-label="search">
                    <SearchIcon />
                </IconButton>
                <InputBase
                    className="filter-section-search-text"
                    onChange={onChange}
                    placeholder={text}
                />
            </Paper>
        )
    }
}
