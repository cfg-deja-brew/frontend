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
        position: coffeeShop.center,
        map: map,
        title: coffeeShop.name,
      })
      const infoWindow = new window.google.maps.InfoWindow({
        content: `<h4>${coffeeShop.name}</h4>
                  <strong>${coffeeShop.description}</strong>`,
      })
      marker.addListener("click", () => {
        infoWindow.open({
          anchor: marker,
          map: map,
        });
      });
    })
  })

  return <div ref={ref} className="h-50" />
}

export default GoogleMap
