// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import './index.css'

class RepositoryItem extends Component {
  state = {apiState: 'loading'}

  componentDidMount() {
    this.callingApiFunction()
  }

  callingApiFunction = async () => {
    const {activeId} = this.props
    console.log('repository')
    console.log(activeId)
    const apiUrl = `https://apis.ccbp.in/popular-repos?language=${activeId}`
    const options = {
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    // console.log(activeId)
    if (response.ok === true) {
      const fetchedData = await response.json()
      const popularRepos = fetchedData.popular_repos
      console.log(popularRepos)
      this.setState({apiState: 'success'})
    }
  }

  loaderFunction = () => (
    <div data-testid="loader">
      <Loader type="ThreeDots" color="#0284c7" height={80} width={80} />
    </div>
  )

  repositoryFunction = () => {
    const {apiState} = this.state
    console.log(apiState)
    switch (apiState) {
      case 'loading':
        return this.loaderFunction
      case 'success':
        return this.callingApiFunction
      default:
        return null
    }
  }

  render() {
    this.repositoryFunction()
    return <div className="css-repository-container">hello</div>
  }
}

export default RepositoryItem
