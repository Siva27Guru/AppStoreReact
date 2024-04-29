const HistoryProfile = props => {
  const {userDetails, onDeleteUser} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = userDetails
  const onDelete = () => {
    onDeleteUser(id)
  }
  return (
    <li className="user-card-container">
      <p>{timeAccessed}</p>
      <img src={logoUrl} className="profile-pic" alt="domain logo" />
      <div className="user-details-container">
        <p className="user-name"> {title} </p>
        <p className="user-designation"> {domainUrl} </p>
      </div>
      <div>
        <button
          type="button"
          className="delete-button"
          onClick={onDelete}
          data-testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
            className="delete-img"
          />
        </button>
      </div>
    </li>
  )
}
export default HistoryProfile