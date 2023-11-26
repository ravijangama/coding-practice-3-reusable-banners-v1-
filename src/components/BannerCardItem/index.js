// Write your code here.
import './index.css'

const BannerCardItem = props => {
  const {bannerCardDetails} = props
  const {headerText, description, className} = bannerCardDetails
  return (
    <li className={`${className} cards-container`}>
      <div>
        <h1 className="header">{headerText}</h1>
        <p className="description">{description}</p>
        <button className="show-btn" type="button">
          Show More
        </button>
      </div>
    </li>
  )
}
export default BannerCardItem
