import { REPOS } from '../config'

const API = `https://api.github.com/repos/${REPOS.owner}/${REPOS.repo}/contents/markdown?ref=${REPOS.branch}`

const DETAIL_API = (fileName)=>{
  return `https://api.github.com/repos/${REPOS.owner}/${REPOS.repo}/contents/markdown/${fileName}?ref=${REPOS.branch}`
}

export { API, DETAIL_API }

