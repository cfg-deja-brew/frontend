export function getCities() {
  return [
    {
      'name': 'Leicester',
      'center': {
        'lat': 52.634719120894935,
        'lng': -1.1306229697711154
      },
      'zoom': 15
    },
    {
      'name': 'Nottingham',
      'center': {
        'lat': 52.95372815708112,
        'lng': -1.149108668927957
      },
      'zoom': 15
    },
    {
      'name': 'Derby',
      'center': {
        'lat': 52.9217000899242,
        'lng': -1.4776277264683468
      },
      'zoom': 15
    }
  ]
}

export async function getCafes(cityName, filters) {
  const response = await fetch(`http://127.0.0.1:4000/${cityName.toLowerCase()}?` + new URLSearchParams(filters))
  return await response.json()
}

export async function login(form) {
  const response = await fetch(`http://127.0.0.1:4000/login`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(form)
  })
  const responseJson = await response.json()
  console.log(responseJson)
  return await responseJson?.data
}
