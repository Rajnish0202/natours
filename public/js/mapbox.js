/* eslint-disable */

export const displayMap = (locations) => {
  mapboxgl.accessToken =
    'pk.eyJ1IjoicmFqbmlzaDAyMDIiLCJhIjoiY2w2M3ViY2NsMDU2azNkcXdmNjhqM3V2cSJ9.LiTtuex3CiaGBZZPbsm59w';
  const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/rajnish0202/cl64ne4dg001x14l7opz0412e',
    scrollZoom: false,
  });

  const bounds = new mapboxgl.LngLatBounds();

  locations.forEach((loc) => {
    // Create marker
    const el = document.createElement('div');
    el.className = 'marker';

    // Add marker
    new mapboxgl.Marker({
      element: el,
      anchor: 'bottom',
    })
      .setLngLat(loc.coordinates)
      .addTo(map);

    // Add Popup

    new mapboxgl.Popup({
      offset: 30,
    })
      .setLngLat(loc.coordinates)
      .setHTML(`<p>Day ${loc.day}: ${loc.description} </p>`)
      .addTo(map);

    // Extend map bounds to include current location
    bounds.extend(loc.coordinates);
  });

  map.fitBounds(bounds, {
    padding: {
      top: 200,
      bottom: 150,
      left: 10,
      right: 100,
    },
  });
};
