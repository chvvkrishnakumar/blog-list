import './index.css'

const UserInfo = props => {
  const {details} = props
  const {title, description, publishedDate} = details

  return (
    <div className="post">
      <div className="date">
        <h1>{title}</h1>
        <p>{publishedDate}</p>
      </div>
      <p>{description}</p>
    </div>
  )
}
export default UserInfo
