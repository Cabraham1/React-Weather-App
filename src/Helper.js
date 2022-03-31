
export const getWeather = async(url) => {
  const response = await fetch(url)
  console.log(response)
  const datas = await response.json()
  return datas 
}
