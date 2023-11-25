// Write your code here.
import './index.css'

const BannerCardItem = props => {
  const {bannerCardDetails} = props
  const {headerText, description, className} = bannerCardDetails
  return (
    <li className={className}>
      <h1>{headerText}</h1>
      <p>{description}</p>
      <div>
        <button type="button">Show More</button>
      </div>
    </li>
  )
}
export default BannerCardItem
