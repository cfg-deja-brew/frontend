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

export async function getCafes(cityName) {
  const response = await fetch(`http://127.0.0.1:5000/${cityName.toLowerCase()}`)
  return await response.json()
}
