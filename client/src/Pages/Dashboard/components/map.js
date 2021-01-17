import React, { useState } from "react"

import { GoogleMap, Marker, InfoWindow } from 'react-google-maps'

const Map = (props) => {
      const [icon, setIcon] = useState(null);
      const [infoWindow, setInfoWindow] = useState(null)

      // const iconChange = (data) => {
      //       if (icon && data.properties.ID == icon.properties.ID) {
      //             return "https://storage.googleapis.com/support-kms-prod/SNP_2752129_en_v0"
      //       } else {
      //             return "https://storage.googleapis.com/support-kms-prod/SNP_2752125_en_v0"
      //       }
      // }

      return (
            <GoogleMap
                  defaultZoom={12}
                  defaultCenter={{
                        lat: 13.0609681,
                        lng: 80.2341533
                  }}
            />
      )

}

export default Map;