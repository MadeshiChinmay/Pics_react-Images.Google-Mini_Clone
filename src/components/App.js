import React from 'react'
//import axios from 'axios'
import unsplash from '../api/unsplash'
import SearchBar from './SearchBar'
import ImageList from './ImageList'

class App extends React.Component{
    state= { images : [] };

    onSearchSubmit=(term)=>{
        //console.log(term)
        unsplash.get('/search/photos',{
                params:{
                    query : term
                }
                //Authorization : Client-ID 8227db06d7035282f06500617e451e5637b0158c02deecbeb462e43927ce47e6
        }).then((response)=>{
            this.setState({images: response.data.results});
        })
        //console.log(this) => shows error because here it will show that
        //setState is not a function 
        //here the this is the instance of the props object
        // because the props in SearchBar is the one calling 
        //the setState function
        // so we need to bind the this with App component
        console.log(this)

    }

    

    render(){
        return (
            <div className="ui container" style={{marginTop :'10px'}}>
                <SearchBar  on_User_Submit={this.onSearchSubmit}/>
                <ImageList  images={this.state.images}/>
            </div>
        );
    }
}


export default App












/*

 */