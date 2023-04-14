import { Component } from "react";


class SearchBar extends Component{
    
    render(){
        return (
            <div>

                <input
                className={this.props.className}
                type="serach"
                placeholder={this.props.placeHolder}
                onChange={this.props.onSearchHandler}



                
                
                />
            </div>
        )
    }
}

export default SearchBar;