// Write your code here
import './index.css'

function RepositoryItem(props) {
  const {eachRepo} = props
  return (
    <>
      <div className="css-repo-container">
        <img
          src={eachRepo.avatar_url}
          className="css-avatarimage-itself"
          alt="avatar"
        />
        <p>{eachRepo.name}</p>
        <div className="css-stars-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
            alt="stars"
            className="css-stars-image-itself"
          />
          <p>{eachRepo.stars_count}</p>
        </div>
        <div className="css-stars-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
            alt="forks"
            className="css-stars-image-itself"
          />
          <p>{eachRepo.forks_count}</p>
        </div>
        <div className="css-stars-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
            alt="open issues"
            className="css-stars-image-itself"
          />
          <p>{eachRepo.issues_count}</p>
        </div>
      </div>
    </>
  )
}

export default RepositoryItem
