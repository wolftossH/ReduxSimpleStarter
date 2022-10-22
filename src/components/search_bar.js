import React, {Component} from 'react';
// curly braces: const Component = React.Component
// const SearchBar = () => {
//     return <input />;
// }

// Need ES6 syntax

// define a new class called sb and give access to  
// all functionalities that react.Component has
class SearchBar extends Component {
    // parent class
    constructor( props) {
        super(props);
        // State is plain Js obj that exist on any component
        // thats a class based component. Can only change state
        // in base class for now.............
        // term short for search term
        this.state = {term: ''};
    }
    // render() {
    //     // event handler
    //     // return <input onChange={this.onInputChange}/>;
    //     // cleaning up code
    //     // return <input onChange={(event) =>console.log(event.target.value)} />;
    //     return (
    //         <div className="search-bar">
    //     <input onChange={
    //         // have to use .setState()
    //         (event) => this.setState({term: event.target.value})
    //     } />;
    //     {/* Value of the input: {this.state.term} */}
    //     </div>
    //     )
    
    // }

    render() {
        return (
          <div className='search-bar'>
            <input
            value = {this.state.term}
            onChange={event=>this.onInputChange(event.target.value)}
            />
          </div>
        )
      }
    onInputChange(term) {

    }
    // can name anything in fucntion parameter with event object
    // onInputChange(event) {
    //     console.log(event.target.value);
    // }
}

// only export instance
export default SearchBar;