import "./card.styles.scss";

function Card ({name, imgUrl}) {
    return (
        <div className="card_container">
            <h3>{name}</h3>
            <img className="card_img" src={imgUrl}></img>
        </div>
    )
}

export default Card;