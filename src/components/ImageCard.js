import React from 'react'

class ImageCard extends React.Component {


    constructor(props){
        super(props);
        this.state={spans:0}
        this.imageRef=React.createRef();// gives handle of a certain element
        //in DOM tree
    }



    componentDidMount(){
        // console.log(this.imageRef)
        // console.log(this.imageRef.current.clientHeight)
        //this.imageRef.current.clientHeight current is the property
        // of this.imageRef object
        // image gets downloaded a little time after the 
        // component has mounted that is why we are seeing a 0 clientHeight
        // so to refactor
        // below is the code
        this.imageRef.current.addEventListener('load',this.setSpans);
        /*
        Here we added a load eventlistener to the img element
        so when the load event triggers we call the callback function
        setSpans where now we can access the heights because now the img tag is
        loaded with the image
         */
    }
    // span provides the unit of rows allocated to each image

    setSpans=()=>{
        //console.log()
        const height=this.imageRef.current.clientHeight;
        const spans=Math.ceil(height/10);//10 is the complete row height


        this.setState({spans})
    }


    render(){

        const PROPS=this.props.image;

        return (
            <div style={{gridRowEnd:`span ${this.state.spans}`}}>
                <img 
                    alt={PROPS.description}
                    src={PROPS.urls.regular}
                    ref={this.imageRef}
                />
            </div>
        )
    }
}

export default ImageCard;

/*
Let the ImageCard rerender itself and its image.
Reach into the DOM and figure out the height of the image.
Set the image height on state to get the component to rerender.
when rerendering assign a grid-row-end to make sure the image takes 
the appropriate space.


REACT REFS
Give access to a single DOM element.

We create refs in the consrtuctor,assign 
them to instance variables, then pass 
to a particular JSX element as props.






 */


