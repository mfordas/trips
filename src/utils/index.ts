import { types } from 'constants/index';

export const validateApiTrips = (apiTrips: types.TripApi[]): types.Trip[] => {
  return apiTrips.map(trip => ({
    id: trip.id || 0,
    picture: trip.picture || '',
    rating: trip.rating || 0,
    title: trip.title || '',
    info: trip.info || '',
    regularPrice: trip.regular_price || 0,
    discountPrice: trip.discount_price || 0,
    currency: trip.currency || '',
  }));
};
