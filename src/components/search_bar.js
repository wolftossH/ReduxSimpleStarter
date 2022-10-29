import React, {Component} from 'react';
// curly braces: const Component = React.Component
// // Need ES6 syntax

// // define a new class called sb and give access to  
// // all functionalities that react.Component has
class SearchBar extends Component {
    // parent class
    constructor( props) {
        // super represents super class
        super(props);
        // State is plain Js obj that exist on any component
        // thats a class based component. Can only change state
        // in base class for now.............
        // term short for search term
        this.state = {term: ''};
    }
    render() {
        // event handler
        // return <input onChange={this.onInputChange}/>;
        // cleaning up code
        // return <input onChange={(event) =>console.log(event.target.value)} />;
        return (
            <div className="search-bar">
        <input 
          value = {this.state.term}
          onChange={
            // have to use .setState()
            event => this.onInputChange(event.target.value)
        } />
        Value of the input: {this.state.term}
        </div>
        )
    
    }

    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }

    // render() {
    //     // throttle website so its less laggy       
    //     return (
    //       <div /*className='search-bar'*/>
    //         <input
    //         // input is not a control Component=> value changes as state changes
    //         value = {this.state.term}
    //         onChange={event=>this.onInputChange(event.target.value)}
    //         />
    //       </div>
    //     )
    //   }


    // can name anything in fucntion parameter with event object
    // onInputChange(event) {
    //     console.log(event.target.value);
    // }
}

// only export instance
export default SearchBar;