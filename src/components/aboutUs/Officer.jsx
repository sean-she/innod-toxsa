export default function Officer({ image, name, position, major }) {
    return (
        <div className="officer-container">
            <img src={image}></img>
            <div className="officer-text">
                <h1>{name}</h1>
                <p>{position}</p>
                <p>{major.one}</p>
                <p>{major.two}</p>
            </div>
        </div>
    );
}
