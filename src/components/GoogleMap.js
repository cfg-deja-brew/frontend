import React, { useEffect, useRef } from 'react';
import pin from '../assets/pin.svg';
import selectedPin from '../assets/selectedPin.svg';

function GoogleMap({center, zoom, cafes, selectedCafe, setSelectedCafe}) {
  const ref = useRef()

  useEffect(() => {
    const map = new window.google.maps.Map(ref.current, {
      center,
      zoom,
    })
    cafes.forEach((cafe) => {
      const marker = new window.google.maps.Marker({
        position: {lat: parseFloat(cafe.Latitude), lng: parseFloat(cafe.Longitude)},
        map: map,
        title: cafe.CafeName,
        icon: selectedCafe?.Id === cafe.Id ? selectedPin : pin
      })
      marker.addListener('click', function() {
        setSelectedCafe(cafe)
      })
    })
  })

  return <div ref={ref} className="h-100" />
}

export default GoogleMap
