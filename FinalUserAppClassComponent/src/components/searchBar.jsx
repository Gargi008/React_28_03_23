import { Component } from "react";


import './searchBar.css'


class SearchBar extends Component{
    
    render(){
        return (
            <div>
                <input
                className={this.props.className}
                type="search"
                placeholder={this.props.placeHolder}
                onChange={this.props.onSearchHandler}
                
                />
            </div>
        )
    }
}

export default SearchBar;