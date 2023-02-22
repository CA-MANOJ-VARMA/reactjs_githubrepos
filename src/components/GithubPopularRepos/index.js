import {Component} from 'react'
import './index.css'
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

  activeIdState = activeIdSent => {
    // console.log(activeIdSent)
    this.setState({activeId: activeIdSent})
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
        <RepositoryItem activeId={activeId} />
      </div>
    )
  }
}

export default GithubPopularRepos
