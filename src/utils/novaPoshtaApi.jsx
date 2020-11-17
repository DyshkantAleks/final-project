import Axios from 'axios';
import PropTypes from 'prop-types';

import { GlobalConfig } from '../GlobalConfig';

export const getCity = async (city = '', street = '') => {
  const reqBodyCity = {
    apiKey: GlobalConfig.NOVA_POSHTA_API,
    modelName: 'Address',
    calledMethod: 'searchSettlements',
    methodProperties: {
      CityName: city,
      Limit: 5,
    },
  };

  try {
    const { status, data } = await Axios.post(
      'http://testapi.novaposhta.ua/v2.0/json/Address/searchSettlements/',
      JSON.stringify(reqBodyCity)
    );

    if (status) {
      const result = data.success
        ? data?.data[0]?.Addresses.map((item) => {
          return item.Present;
        })
        : [];

      GlobalConfig.deliveryOptions[2].NOVA_POSHTA.serchCityCode =
        data?.data[0]?.Addresses[0]?.Ref;

      return result;
    }
  } catch (error) {
    return [];
  }
};
export const getStreet = async (street, SettlementRef) => {
  const reqBodyStreet = {
    apiKey: GlobalConfig.NOVA_POSHTA_API,
    modelName: 'Address',
    calledMethod: 'searchSettlementStreets',
    methodProperties: {
      StreetName: street,
      SettlementRef: SettlementRef,
      Limit: 5,
    },
  };
  try {
    const { status, data } = await Axios.post(
      'http://testapi.novaposhta.ua/v2.0/json/Address/searchSettlements/',
      JSON.stringify(reqBodyStreet)
    );
    if (status) {
      const result = data.success
        ? data?.data[0]?.Addresses.map((item) => {
          return item.Present;
        })
        : [];

      return result;
    }
  } catch (error) {
    console.log(error);
    return [];
  }
};

getCity.propsTypes = {
  city: PropTypes.string,
};
getCity.propsTypes = {
  street: PropTypes.string,
};
