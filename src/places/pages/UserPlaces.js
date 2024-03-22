import React from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

import PlaceList from "../components/PlacesList";

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Empire States Building",
    description: "Um dos prédios mais famosos do mundo!",
    imageUrl:
      "https://www.esbnyc.com/sites/default/files/styles/on_single_feature/public/2019-10/home_banner-min.jpg?itok=OVtUHvyB",
    address: "20 W 34th St., New York, NY 10001",
    coordinates: {
      lat: 40.748439,
      lng: -73.9856704,
    },
    creator: "u1",
  },
  {
    id: "p2",
    title: "Empire States Building",
    description: "Um dos prédios mais famosos do mundo!",
    imageUrl:
      "https://www.esbnyc.com/sites/default/files/styles/on_single_feature/public/2019-10/home_banner-min.jpg?itok=OVtUHvyB",

    address: "20 W 34th St., New York, NY 10001",
    coordinates: {
      lat: 40.748439,
      lng: -73.9856704,
    },
    creator: "u2",
  },
];

const UserPlaces = () => {
  console.log(useParams());
  const userId = useParams().userId;
  console.log(userId);
  const loadedPlaces = DUMMY_PLACES.filter((place) => place.creator === userId);
  return <PlaceList items={loadedPlaces} />;
};

export default UserPlaces;
