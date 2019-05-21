import React from 'react'

class SearchBar extends React.Component {

    onInputChange(event){
        //callback function called by the input tag whenever text changes
        console.log(event.target.value);
    }





    
    render(){
        return (
            <div className="ui segment ">
                <form className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        <input type="text" onChange={this.onInputChange} />
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