import { Component } from "react";


import './searchBar.css'


class SearchBar extends Component{
   
    
    render(){
        return (
            <div>
                <input
                className={this.props.className}
                type={this.props.searchType} // "Search"
                placeholder={this.props.placeHolder}
                onChange={this.props.onSearchHandler}
                
                />
            </div>
        )
    }
}

export default SearchBar;