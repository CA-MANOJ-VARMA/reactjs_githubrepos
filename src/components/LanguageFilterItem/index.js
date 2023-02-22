// Write your code here
import {Component} from 'react'
import './index.css'

class LanguageFilterItem extends Component {
  state = {selectedId: 'ALL'}

  selectedFunction = selectedId => {
    const {activeIdState} = this.props
    // console.log(selectedId)
    activeIdState(selectedId)
    this.setState({selectedId})
  }

  filteredComponentFunction = () => {
    const {languageFiltersData} = this.props
    const {selectedId} = this.state
    return (
      <ul className="css-filtered-ul-container">
        {languageFiltersData.map(eachFilter => (
          <li className="css-filtered-li-container" key={eachFilter.id}>
            <button
              type="button"
              className={`css-filtered-button-itself ${
                selectedId === eachFilter.id && 'css-active-filtered-option'
              }`}
              onClick={() => this.selectedFunction(eachFilter.id)}
            >
              {eachFilter.language}
            </button>
          </li>
        ))}
      </ul>
    )
  }

  render() {
    return (
      <>
        <div className="css-filtered-container">
          {this.filteredComponentFunction()}
        </div>
      </>
    )
  }
}

export default LanguageFilterItem
