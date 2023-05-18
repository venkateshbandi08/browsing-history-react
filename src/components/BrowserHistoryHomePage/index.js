import {Component} from 'react'
import './index.css'
import HistoryElementComponent from '../HistoryElementComponent/index'

const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },

  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },

  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]

class BrowserHistoryHomePage extends Component {
  state = {
    historyList: initialHistoryList,
    searchedInput: '',
  }

  displayNoHistory = () => {
    const {historyList} = this.state
    if (historyList.length === 0) {
      return 'No history found'
    }
    return null
  }

  onChangeSearchInput = event => {
    const {historyList} = this.state
    this.setState({
      searchedInput: event.target.value.toLowerCase(),
    })
    console.log(historyList.length)
  }

  onDeleteHistoryELement = id => {
    const {historyList} = this.state
    const filteredELements = historyList.filter(
      eachElement => eachElement.id !== id,
    )
    this.setState({
      historyList: filteredELements,
    })
  }

  render() {
    const {historyList, searchedInput} = this.state
    const searchedResults = historyList.filter(eachElement =>
      eachElement.title.toLowerCase().includes(searchedInput),
    )

    const noHistoryFound = () => {
      if (historyList.length === 0 || searchedResults.length === 0) {
        return 'There is no history to show'
      }
      return null
    }
    return (
      <div className="bg-container">
        <div className="content-container">
          <div className="banner-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
              className="history-image"
              alt="app logo"
            />
            <div className="whole-search-container">
              <div className="search-icon-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/search-img.png"
                  className="search-icon"
                  alt="search"
                />
              </div>
              <div className="search-input-element-container">
                <input
                  type="search"
                  className="input-element"
                  placeholder="Search history"
                  onChange={this.onChangeSearchInput}
                />
              </div>
            </div>
          </div>
          <ul className="history-elements-container">
            {searchedResults.map(eachElement => (
              <HistoryElementComponent
                historyElementDetails={eachElement}
                key={eachElement.id}
                onDeleteHistoryELement={this.onDeleteHistoryELement}
              />
            ))}
          </ul>
          <p className="Nothing-to-show-container">{noHistoryFound()}</p>
        </div>
      </div>
    )
  }
}

export default BrowserHistoryHomePage
