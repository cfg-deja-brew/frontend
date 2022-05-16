import { Wrapper, Status } from '@googlemaps/react-wrapper'
import GoogleMap from './GoogleMap'

const render = (city, coffeeShops, status) => {
  switch (status) {
    case Status.LOADING:
      return <div>Loading</div>
    case Status.FAILURE:
      return <div>Error</div>
    case Status.SUCCESS:
      return <GoogleMap center={city.center} zoom={city.zoom} coffeeShops={coffeeShops} />
  }
}

const CoffeeShopMap = ({city, coffeeShops}) => <Wrapper apiKey={"AIzaSyBddlIFYcnRk4MpVTZ3xhjiGT8X6FnaYxM"} render={(status) => render(city, coffeeShops, status)} />

export default CoffeeShopMap
