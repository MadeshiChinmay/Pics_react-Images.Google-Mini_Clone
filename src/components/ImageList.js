import React from 'react'

const ImageList=(props)=>{
    console.log(props.images)
    let images=props.images.map((image)=>{
        return <img key={image.id} src={image.urls.regular} alt={image.description}></img>
    })

    return <div>{images}</div>;
}

export default ImageList;


/*
map function highly useful rendering the lists 

Each child should have a unique key prop



 */