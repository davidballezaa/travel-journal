import '../styles/Card.scss'
import locationIcon from '../images/location-icon.png'

export default function Card({
  imageUrl,
  title,
  googleMapsUrl,
  location,
  startDate,
  endDate,
  description
}) {
  return (
    <div className="card">
      <div className="card__img">
        <img src={imageUrl} alt={title} />
      </div>
      <div className="card__info">
        <div className="card__info--location">
          <img src={locationIcon} alt="" />
          <span>{location.toUpperCase()}</span>
          <a href={googleMapsUrl}>View on Google Maps</a>
        </div>
        <h2 className="card__info--title">{title}</h2>
        <p className="card__info--date">
          {startDate} - {endDate}
        </p>
        <p className="card__info--description">{description}</p>
      </div>
    </div>
  )
}
