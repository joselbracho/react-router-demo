import axios from 'axios';

export const retriveCars = () =>
  axios.get(`${process.env.REACT_APP_API_URL}/cars`).then(({ data }) => data);

export const retriveCar = (id) =>
  axios.get(`${process.env.REACT_APP_API_URL}/cars/${id}`).then(({ data }) => data);
