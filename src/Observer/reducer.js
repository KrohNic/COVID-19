import {
  DEFAULT_COUNTRY_INDEX,
  DEFAULT_DATA_TYPE,
} from '../Constants/index.Constants';
import { LOADING, INIT, DATA_FETCHED, COUNTRY, DATA_TYPE } from './actionTypes';

export default (state, action) => {
  switch (action.type) {
    case INIT:
      return {
        loading: true,
        country: DEFAULT_COUNTRY_INDEX,
        dataType: DEFAULT_DATA_TYPE,
        data: {},
        ...state,
      };
    case LOADING:
      return { ...state, loading: action.payload };
    case COUNTRY:
      return { ...state, country: action.payload };
    case DATA_TYPE:
      return { ...state, dataType: action.payload };
    case DATA_FETCHED:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };

    default:
      return state;
  }
};
