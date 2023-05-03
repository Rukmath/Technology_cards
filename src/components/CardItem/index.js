import './index.css'

const TechnologyCard = props => {
  const {cardDetails} = props
  const {title, description, imgUrl, className} = cardDetails

  return (
    <li className={`${className} card-container`}>
      <h1 className="title">{title}</h1>
      <p className="description">{description}</p>
      <img src={imgUrl} alt={title} className="image" />
    </li>
  )
}

export default TechnologyCard
