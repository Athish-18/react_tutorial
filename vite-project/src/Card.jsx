import profilepic from './assets/cat.png' 
function Card()
{
  return(
    <div className="card">
      <img className= "card-img" src={profilepic}alt="profile pic"></img>
      <h2 className="card-title">Athish</h2>
      <p className="card-text">Aspiring software engineer</p>

    </div>
  )
}
export default Card;