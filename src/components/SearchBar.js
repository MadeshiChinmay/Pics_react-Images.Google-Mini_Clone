import React from 'react'

class SearchBar extends React.Component {

    state={term:''}

    /*onInputChange(event){
        //callback function called by the input tag whenever text changes
        console.log(event.target.value);
    }*/
    //arrow functions bind the function with the 'this' with the class instance
    //another way to bind the this with class instance is to use a constructor
    //and inside it use bind method...
    onFormSubmit=(event)=>{//called automatically by the 
        event.preventDefault();//doesnt automatically submit when enter is pressed
        
        //console.log(this.state.term);

        this.props.on_User_Submit(this.state.term)
    
    }


    //onChange={this.onInputChange}
    render(){
        //console.log(this)
        return (
            <div className="ui segment ">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label>Image Search</label>
                        <input type="text" value={this.state.term} onChange={(e)=>this.setState({term:e.target.value})} />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;


/*
Onchange is a event handler this.onInputChange is passed through referene
because if we call it like this.OnInputChange() because this requires
event as an arguement and XD we cant pass events on our own.
 */
/*
Controled VS uncontrolled

flow when refactored into controlled from uncontrolled
User types in Input
Callback gest invoked
We call setState with new value
Component rerenders
Input is told what its value is


So basically controlled components are those components
whose values are stored in the react world rather than HTMl word.


sending the data back to parent component from child component::
So basically we converted the App component into class component
and then we declare a method into the class and pass it down as
prop in this searchbar component 
now we pass that state.term thing in this passed down prop(function) and
this prop will act as an callback function in parent component


Unsplash Api 
:For images
unsplash.com/developers

ReactApp -> AJAX CLIENT <-> Unsplash Api

AXIOS is better at handling the requests..


 */