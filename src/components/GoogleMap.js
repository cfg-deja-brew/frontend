import React, { useEffect, useRef } from 'react';

function GoogleMap({center, zoom, coffeeShops}) {
  const ref = useRef()

  useEffect(() => {
    const map = new window.google.maps.Map(ref.current, {
      center,
      zoom,
    })
    coffeeShops.forEach((coffeeShop) => {
      const marker = new window.google.maps.Marker({
        position: {lat: parseFloat(coffeeShop.Latitude), lng: parseFloat(coffeeShop.Longitude)},
        map: map,
        title: coffeeShop.CafeName,
      });
    })
  })

  return <div ref={ref} className="h-100" />
}

export default GoogleMap
