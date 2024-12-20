import axios from "axios";

// eslint-disable-next-line no-undef
const baseUrl =  process.env.NODE_ENV === 'development'
? '/api/persons'
: 'https://fullstackopen-phonebook-backend-vslq.onrender.com/api/persons';

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data);
};

const create = (newPerson) => {
    const request = axios.post(baseUrl,newPerson)
    return request.then(response => response.data)
}

const remove = (id) => {
  const  request = axios.delete(`${baseUrl}/${id}`)
  return request.then(response => response.data)
}

const numberUpdate = (id,updatedPerson) => {
  const request = axios.put(`${baseUrl}/${id}`,updatedPerson)
  return request.then(response => response.data)
}

export default { getAll, create, remove, numberUpdate }