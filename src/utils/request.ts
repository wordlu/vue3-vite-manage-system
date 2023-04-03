import service from "./service.ts"

const axios = ({
  method,
  url,
  data,
  config
}) => {
  method = method.toLowerCase()
  if (method === "post") {
    return service.post(url, data, {...config})
  } else if (method === "get") {
    return service.get(url, {
      params: data,
      ...config
    })
  } else {
    console.log(`未知method: ${method}`)
    return false
  }
}

export default axios;
