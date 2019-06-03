import React from 'react'

class ImageCard extends React.Component {


    constructor(props){
        super(props);

        this.imageRef=React.createRef();
    }



    render(){

        const PROPS=this.props.image;

        return (
            <div>
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


