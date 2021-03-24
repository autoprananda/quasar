/*
export function someAction (context) {
}
*/
import axios from 'axios'

export async function fetchDataPost (context) {
  console.log('data')
  try {
    const result = await axios.get('http://localhost:3000/posts')
    console.log(result, 'RESULT')
    context.commit('SET_DATA_POST', result.data)
    return Promise.resolve(result.data)
  } catch (error) {
    return Promise.reject(error)
  }
}

export async function fetchDataComennt (context) {
  console.log('data')
  try {
    const result = await axios.get('http://localhost:3000/comments')
    console.log(result, 'RESULT COment')
    context.commit('SET_DATA_CMNT', result.data)
    return Promise.resolve(result.data)
  } catch (error) {
    return Promise.reject(error)
  }
}
