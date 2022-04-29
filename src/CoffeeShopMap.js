import { Wrapper, Status } from '@googlemaps/react-wrapper'
import GoogleMap from './GoogleMap'
import { getCoffeeShopLocations } from './api/api.js'

const render = (city, status) => {
  switch (status) {
    case Status.LOADING:
      return <div>...</div>
    case Status.FAILURE:
      return <div>Bother</div>
    case Status.SUCCESS:
      return <GoogleMap center={city.center} zoom={city.zoom} coffeeShops={getCoffeeShopLocations()} />
  }
}

const CoffeeShopMap = ({city}) => <Wrapper apiKey={"AIzaSyBddlIFYcnRk4MpVTZ3xhjiGT8X6FnaYxM"} render={(status) => render(city, status)} />

export default CoffeeShopMap
