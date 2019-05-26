import React from 'react'
import axios from 'axios'
import SearchBar from './SearchBar'


class App extends React.Component{
    state= { images : [] };

    onSearchSubmit(term){
        //console.log(term);

        axios.get('https://api.unsplash.com/search/photos',{
                params:{
                    query : term
                },
                headers:{
                    Authorization : 'Client-ID 8227db06d7035282f06500617e451e5637b0158c02deecbeb462e43927ce47e6'

                }//Authorization : Client-ID 8227db06d7035282f06500617e451e5637b0158c02deecbeb462e43927ce47e6
        }).then((response)=>{
            this.setState({images: response.data.results});
        })
        console.log(this)

    }

    



    render(){
        return (
            <div className="ui container" style={{marginTop :'10px'}}>
                <SearchBar  on_User_Submit={this.onSearchSubmit}/>
                Found : {this.state.images.length} images
            </div>
        );
    }
}


export default App












/*

 */