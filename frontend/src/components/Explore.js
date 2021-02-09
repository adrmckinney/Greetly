import { useState, useEffect } from 'react'
import { Redirect, Link, useParams } from 'react-router-dom'
import { getPublicCards, follow } from '../api'

function Explore ({ token }) {
  const [cards, setCards] = useState([])

  useEffect(() => {
    getPublicCards(token)
      .then(cards => setCards(cards))
  }, [token])

  console.log(cards)

  if (!token) {
    return <Redirect to='/login' />
  }

  // I need to define user and following_user.  User is followee, fu us follower
  // might not need latter as argument since following_user already logged in
  // where and how do i define these.  Do they need to be in state
  //  user={card.author.username}
  //  following_user= will equal user name of logged in user.  put in state...or useParams?  since getting from url
  // TOGGLE ENDPOINT: /follow?author_id=<someId> if you are not following, follow, else unfollow
  function handleFollow (event, userId) {
    event.preventDefault()
    follow(token, userId)
      .then(data => {
        console.log(data)
      })
  }

  return (
    <div>
      {cards.map(card => (
        <div key={card.url} className='card-container'>
          <div className='card-container-child'>
            <Link to={`/view-card/${card.pk}`} style={{ textDecorationLine: 'none' }}>
              <div
                className='explore-card-container'
                style={{
                  alignItems: `${card.textboxalignment}`,
                  textAlign: `${card.alignment}`,
                  backgroundColor: `${card.backgroundcolor}`,
                  backgroundImage: `url(${card.image})`,
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                  opacity: `${card.backgroundopacity}`
                }}
              >
                <div
                  className='message-input-field'
                  style={{
                    fontFamily: `${card.font}`,
                    color: `${card.color}`,
                    fontSize: `${card.size}px`,
                    fontWeight: `${card.weight}`,
                    fontStyle: `${card.style}`,
                    backgroundColor: `${card.textbackgroundcolor}`,
                    opacity: `${card.textbackgroundopacity}`
                  }}
                >
                  {card.message}
                </div>
              </div>
            </Link>
          </div>
          <div onClick={(event) => handleFollow(event, card.author.id)}>
            {card.author.username}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Explore
