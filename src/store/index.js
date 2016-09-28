import config from '../config'

const API = `https://api.github.com/repos/${config.repos.owner}/${config.repos.repo}/contents/markdown?ref=${config.repos.branch}`

const DETAIL_API = (fileName)=>{
  return `https://api.github.com/repos/${config.repos.owner}/${config.repos.repo}/contents/markdown/${fileName}?ref=${config.repos.branch}`
}

export { API, DETAIL_API }

