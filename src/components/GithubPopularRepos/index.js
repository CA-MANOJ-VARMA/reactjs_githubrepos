import {Component} from 'react'
import './index.css'

import Loader from 'react-loader-spinner'
import LanguageFilterItem from '../LanguageFilterItem'
import RepositoryItem from '../RepositoryItem'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

// Write your code here
class GithubPopularRepos extends Component {
  state = {activeId: 'ALL'}

  componentDidMount() {
    this.callingApiFunction()
  }

  loaderFunction = () => (
    <div data-testid="loader">
      <Loader type="ThreeDots" color="#0284c7" height={80} width={80} />
    </div>
  )

  callingApiFunction = async () => {
    const {activeId} = this.state
    console.log('repository')
    console.log(activeId)
    const apiUrl = `https://apis.ccbp.in/popular-repos?language=${activeId}`
    const options = {
      method: 'GET',
    }
    this.setState({apiState: 'loading'})
    const response = await fetch(apiUrl, options)
    // console.log(activeId)
    console.log(response)
    if (response.ok === true) {
      const fetchedData = await response.json()
      const popularRepos = fetchedData.popular_repos
      console.log(popularRepos)
      this.setState({apiState: 'success', repoDetails: popularRepos})
    }
    if (response.status === 401) {
      this.setState({
        apiState: 'failure',
      })
    }
  }

  activeIdState = activeIdSent => {
    // console.log(activeIdSent)
    this.setState({activeId: activeIdSent}, this.callingApiFunction)
  }

  successFunction = () => {
    const {repoDetails} = this.state
    // this.callingApiFunction()
    return (
      <div className="css-bg-container">
        <ul className="css-ul-repo-container">
          {repoDetails.map(eachRepo => (
            <li key={eachRepo.id}>
              <RepositoryItem eachRepo={eachRepo} />
            </li>
          ))}
        </ul>
      </div>
    )
  }

  failureFunction = () => (
    <div className="css-bg-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
        alt="failure view"
      />
    </div>
  )

  switchFunction = () => {
    const {apiState} = this.state
    switch (apiState) {
      case 'loading':
        return this.loaderFunction()
      case 'success':
        return this.successFunction()
      case 'failure':
        return this.failureFunction()
      default:
        return null
    }
  }

  render() {
    const {activeId} = this.state
    console.log('render')
    console.log(activeId)
    return (
      <div className="css-bg-container">
        <h1>Popular</h1>
        <LanguageFilterItem
          languageFiltersData={languageFiltersData}
          activeIdState={this.activeIdState}
        />
        {this.switchFunction()}
      </div>
    )
  }
}

export default GithubPopularRepos
