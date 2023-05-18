import './index.css'

const HistoryElementComponent = props => {
  const {historyElementDetails, onDeleteHistoryELement} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyElementDetails
  const onClickOnDeleteIcon = () => {
    onDeleteHistoryELement(id)
  }
  return (
    <li className="each-history-element-container">
      <div className="date-and-domain-details-container">
        <p className="time-text"> {timeAccessed} </p>
        <div className="domain-details-container">
          <img src={logoUrl} className="domain-logo" alt="domain logo" />
          <p className="domain-title"> {title} </p>
          <p className="domain-url"> {domainUrl} </p>
        </div>
      </div>
      <button
        className="delete-button"
        type="button"
        data-testid="delete"
        onClick={onClickOnDeleteIcon}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          className="delete-icon"
          alt="delete"
          data-testid="delete"
        />
      </button>
    </li>
  )
}

export default HistoryElementComponent
