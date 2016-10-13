import { REPOS } from '../config'

// https://api.github.com/repos/x-pengg/vue-gh-pages/contents/markdown?ref=md
const API = `https://api.github.com/repos/${REPOS.owner}/${REPOS.repo}/contents/markdown?ref=${REPOS.branch}`

const DETAIL_API = (fileName)=>{
  return `https://raw.githubusercontent.com/${REPOS.owner}/${REPOS.repo}/${REPOS.branch}/markdown/${fileName}`
}

export { API, DETAIL_API }

