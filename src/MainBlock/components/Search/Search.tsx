import * as React from "react";
import { TextField } from "@material-ui/core";
type SearchProps = {
    text: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}
export class Search extends React.PureComponent<SearchProps, {}>{
    render() {
        const { text, onChange } = this.props;
        return (
            <TextField id="outlined-search" type="search" onChange={onChange} variant="outlined" label={text}/>
        )
    }
}
