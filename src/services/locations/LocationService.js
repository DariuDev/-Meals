import camelize from 'camelize';
import {locations} from './LocationMock';

export const locationRequest = searchTerm => {
  return new Promise((resolve, reject) => {
    const locationMock = locations[searchTerm];
    if (!locationMock) {
      console.log('not found');
    }
    console.log(locationMock);
  });
};
export const locationTransform = result => {
  const {geometry = {}} = camelize(result.results[0]);
  const {lat, lng} = geometry.location;

  return {lat, lng};
};
