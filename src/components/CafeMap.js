import { Wrapper, Status } from '@googlemaps/react-wrapper'
import GoogleMap from './GoogleMap'

const render = (city, cafes, selectedCafe, setSelectedCafe, status) => {
  switch (status) {
    case Status.LOADING:
      return <div>Loading</div>
    case Status.FAILURE:
      return <div>Error</div>
    case Status.SUCCESS:
      return <GoogleMap center={city.center} zoom={city.zoom} cafes={cafes} selectedCafe={selectedCafe} setSelectedCafe={setSelectedCafe} />
  }
}

const CafeMap = ({city, cafes, selectedCafe, setSelectedCafe}) => (
  <Wrapper apiKey={"AIzaSyBddlIFYcnRk4MpVTZ3xhjiGT8X6FnaYxM"} render={(status) => render(city, cafes, selectedCafe, setSelectedCafe, status)} />
)

export default CafeMap
