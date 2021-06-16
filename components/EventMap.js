import { useState } from 'react';
import ReactMapGl, { Marker } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import Geocode from 'react-geocode';
import Image from 'next/image';

export default function EventMap({ evt, lat, lon }) {
  //   const [lat, setLat] = useState(lat);
  //   const [lng, setLng] = useState(lon);
  //   const [loading, setLoading] = useState(true);
  const [viewport, setViewport] = useState({
    latitude: +lat,
    longitude: +lon,
    width: '100%',
    height: '500px',
    zoom: 12,
  });
  //   useEffect(() => {
  // Geocode.fromAddress(evt.address).then(
  //   (response) => {
  //     const { lat, lng } = response.results[0].geometry.location;
  //     setLat(lat);
  //     setLng(lng);
  //     setViewport({ ...viewport, latitude: lat, longitude: lng });
  //     setLoading(false);
  //   },
  //   (error) => {
  //     console.error(error);
  //   }
  // );

  // axios
  //   .get(
  //     `http://open.mapquestapi.com/geocoding/v1/address?key=${process.env.NEXT_PUBLIC_MAPQUEST_API_KEY}&location=${evt.address}`
  //   )
  //   .then((response) => {
  //     const { lat, lng } = response.data.results[0].locations[0].latLng;
  //     // const { lat, lon } = response.data[0];

  //     setLat(+lat);
  //     setLng(+lng);
  //     setViewport({ ...viewport, latitude: lat, longitude: lng });
  //     setLoading(false);
  //   })
  //   .catch((error) => {
  //     console.error(error);
  //   });
  // axios
  //   .get(
  //     `https://us1.locationiq.com/v1/search.php?key=${process.env.NEXT_PUBLIC_LOCATION_IQ_KEY}&q=${evt.address}&format=json`
  //   )
  //   .then((response) => {
  //     const { lat, lon } = response.data[0];

  //     setLat(+lat);
  //     setLng(+lon);
  //     setViewport({ ...viewport, latitude: +lat, longitude: +lon });
  //     setLoading(false);
  //   })
  //   .catch((error) => {
  //     console.error(error);
  //   });
  //   }, []);

  Geocode.setApiKey(process.env.NEXT_PUBLIC_GOOGLE_MAP_KEY);

  //   if (loading) return false;

  return (
    <ReactMapGl
      {...viewport}
      mapboxApiAccessToken={process.env.NEXT_PUBLIC_MAPBOX_API_TOKEN}
      onViewportChange={(vp) => setViewport(vp)}
    >
      <Marker key={evt.id} latitude={+lat} longitude={+lon}>
        <Image src="/images/pin.svg" width={30} height={30} />
      </Marker>
    </ReactMapGl>
  );
}
