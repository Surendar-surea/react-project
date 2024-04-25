import"./Filter.css"
function ImageChild(props) {
    return (
        <div className="img-child">
            <img src={props.filter.imgurl}></img>
            <p>{props.filter.name}</p>
            <p>{props.filter.rate}</p>
            <p>{props.filter.rat1}</p>
            <p>{props.filter.Battery}</p>
            <p>{props.filter.processor}</p>
           
        </div>
    )
}
export default ImageChild;