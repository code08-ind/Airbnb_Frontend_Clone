import React, { useState } from 'react'
import ReactMapGL, { Marker, Popup } from 'react-map-gl'
import { getCenter } from 'geolib';

const Map = ({ InfoCards }) => {
    const [selectedLocation, setSelectedLocation] = useState({});

    // Transform InfoCards object into  {latitude, longitude} object
    const coordinates = InfoCards.map(result => ({
        longitude: result.long,
        latitude: result.lat,
    }));

    // the latitude and longitude of the center of location coordinates
    const center = getCenter(coordinates);

    const [viewport, setViewport] = useState({
        width: '100%',
        height: '100%',
        latitude: center.latitude,
        longitude: center.longitude,
        zoom: 9
    });

    return (
        <ReactMapGL
            mapStyle="mapbox://styles/aryan08/clfj8vn94009w01s27rg3j0d0"
            mapboxAccessToken={process.env.mapbox_key}
            {...viewport}
            onViewportChange={(nextViewport) => setViewport(nextViewport)}
        >
            {searchResults.map(result => (
                <div key={result.long}>
                    <Marker
                        longitude={result.long}
                        latitude={result.lag}
                        offsetLeft={-20}
                        offsetTop={-10}
                    >
                        <p
                            onClick={() => setSelectedLocation(result)}
                            className="cursor-pointer text-2xl animate-bounce"
                            aria-label="push-pin"
                            role='img'
                        >
                            📍
                        </p>
                    </Marker>
                    {/* Popup to show what it is about in marker */}
                    {selectedLocation.long === result.long ? (
                        <Popup
                            closedOnClick={true}
                            onClose={()=> setSelectedLocation({})}
                            latitude={result.lat}
                            longitude={result.long}
                        >
                            {result.title}
                        </Popup>
                    ):(
                        false
                    )}
                </div>
            ))}
        </ReactMapGL>
    );

}

export default Map