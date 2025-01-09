export default function Entry(props) {
    return (
        <article className="journal-entry">
            <div className="main-container">
            <div className="main-image-container">
                <img className="main-image" src={props.src} alt={props.alt} />
            </div>
            <div className="info-container">
                <img className="marker-image" src="src\images\marker_map_icon.png" alt="map marker icon" />
                <span className="country">{props.country}</span>
                <a href={props.googleMapsLink}>View on Google Maps</a>

                <h2 className="entry-title">{props.title}</h2>
                <p className="trip-dates">{props.dates}</p>
                <p className="entry-text">{props.text}</p>
            </div>
            </div>
        </article>
    )
}