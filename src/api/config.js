var config = {
  server: 'zhihu-agent.herokuapp.com',
  method: '/get?api='
}

export const API_ROOT = 'https://'.concat(config.server, config.method)
