{/*Create a SingleCat component for rendering each individual cat, and add an image property for each one.*/}
function CatImg(cat, width = 200){
    return (
        <img className="CatImg" src={cat.CatImgURL} alt={cat.name} width={width}/>
    )
}

function CatInfo({cat}) {
    return (
        <div className="CatInfo">
            <CatImg cat={cat}></CatImg>
        </div>
    )

}

function SingleCat (props) {
    return (
        <div className="SingleCat componentBox">
            <CatInfo cat={props.name}></CatInfo>{" "}
        <div className="SingleCat-text">
            {props.latinName}
        </div>
        </div>
    )
}

export default SingleCat;