import key from './key'

const baseUrl = 'https://api.themoviedb.org/3/'

// I like to extract the actual fetch away from the UI components.
// The idea is that for bigger apps, all components are worried about is data,
// and data can be fetched and massaged behind the scenes. 
const getFromMdb = url => {
    return fetch(`${baseUrl}${url}api_key=${key}`).then(res => res.json())
}

export default getFromMdb