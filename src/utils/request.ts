import pservice from "./payloadService.js"
import fservice from "./formDataservice.js"

const axios1 = ({
  method,
  url,
  data,
  config
}) => {
  method = method.toLowerCase()
  if (method === "post") {
    return pservice.post(url, data, {...config})
  } else if (method === "get") {
    return pservice.get(url, {
      params: data,
      ...config
    })
  } else {
    console.log(`未知method: ${method}`)
    return false
  }
}

const axios2 = ({
  method,
  url,
  data,
  config
}) => {
  method = method.toLowerCase()
  if (method === "post") {
    return fservice.post(url, data, {...config})
  } else if (method === "get") {
    return fservice.get(url, {
      params: data,
      ...config
    })
  } else {
    console.log(`未知method: ${method}`)
    return false
  }
}

export { axios1, axios2 };
