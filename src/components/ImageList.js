import React from 'react'
import './ImageList.css'
import ImageCard from './ImageCard'





const ImageList=(props)=>{
    console.log(props.images)
    let images=props.images.map((image)=>{
        return <ImageCard key={image.id} image={image}/>;
    })

    return <div className="image-list">{images}</div>;
}

export default ImageList;


/*
map function highly useful rendering the lists 

Each child should have a unique key prop



 */