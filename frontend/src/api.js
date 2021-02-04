import axios from 'axios'
import { Fragment, useEffect, useState } from 'react'
import { createApi } from 'unsplash-js'

const API = axios.create({
  baseURL: 'https://social-ecard.herokuapp.com/api/'
})

export function login (username, password) {
  return API
    .post('auth/token/login/', { // using deployed API!!!
      username: username,
      password: password
    })
    .then(result => result.data)
    .catch(error => {
      console.log({ error })
      if (error.response) {
        if (error.response.data.non_field_errors) {
          throw new Error(error.response.data.non_field_errors.join(' '))
        }
      }
      throw new Error('Something went wrong.')
    })
}

export function register (username, password) {
  return API
    .post('auth/users/', {
      username: username,
      password: password
    })
    .then(result => {
      return login(username, password)
    })
    .catch(error => {
      let errors = []
      if (error.response) {
        const data = error.response.data
        if (data.username) {
          errors = errors.concat(data.username)
        }
        if (data.password) {
          errors = errors.concat(data.password)
        }
      }

      if (errors.length === 0) {
        errors.push('There was a problem registering.')
      }
      const err = new Error(errors[0])
      throw err
    })
}

// api request to Unsplash for images
// links: https://github.com/unsplash/unsplash-js / https://unsplash.com/documentation#creating-a-developer-account / https://unsplash.com/oauth/applications/204104 / https://stackblitz.com/edit/unsplash-js-javascript?file=src%2Findex.js
// const accessKey = TlQHhYwlF1gKtsQqX6twCM-WUusQSXgDFW1AhVOgat8
// const secretKey = mo2cz5JNJfiM6W-HpVMUfMMQa7P_48maYN_e9r8HBIU

// create an instance on node server
// const unsplashApi = createApi({
//   accessKey: 'TlQHhYwlF1gKtsQqX6twCM-WUusQSXgDFW1AhVOgat8',
// })

// const photoComp = ({ photo }) => (
//   const  { user, urls } = photo

//   return (
//     <Fragment>
//       <img className='img' src={urls.regular}
//       <a
//       className='credit'
//       target='_blank'
//       href={`https://unsplash.com/@${user.username}`}
//       >
//       {user.name}
//       </a>
//     </Fragment>
//   )
// )

// const Body = () => {
//   const [data, setPhotoResponse] = useState(null)

//   useEffect(() => {
//     unsplashApi.search
//       .getPhotos({ query: 'cat', orientation: 'landscape'})
//       .then(result => {
//         setPhotoResponse(result)
//       })
//       .catch(() => {
//         console.log('something went wrong!')
//       })
//   }, [])

//   if (data === null) {
//     return <div>Loading...</div>
//   } else if (data.errors) {
//     return (
//       <div>
//         <div>{data.error[0]}</div>
//         <div>PS: Make sure to set your access token</div>
//       </div>
//     )
//   } else {
//     return (
//       <div className='feed'>
//         <ul className='columnUl'>
//           {data.response.results.map(photo => (
//             <li key={photo.id} className='li'><photoComp photo-{photo} />
//             </li>
//           ))}
//         </ul>

//       </div>
//     )
//   }
// }

// const Home = () => {
//   return (
//     <main className='root'>
//       <Body />
//     </main>
//   )
// }

{ /* // export function login (username, password) {
//   return (axios
//     .post('http://localhost:3000/api/auth/users/', {
//       username: username,
//       password: password
//     })
//     .then((result) => result.data))
// } */ }
