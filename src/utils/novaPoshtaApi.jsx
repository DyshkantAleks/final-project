import Axios from 'axios';

const { default: GlobalConfig } = require('../GlobalConfig');

export const getCityList = async (phrase) => {
  const reqBody = {
    apiKey: GlobalConfig.NOVA_POSHTA_API,
    modelName: 'Address',
    calledMethod: 'searchSettlements',
    methodProperties: {
      CityName: phrase,
      Limit: 5,
    },
  };
  try {
    const { success, data } = Axios.post(
      'http://testapi.novaposhta.ua/v2.0/json/Address/searchSettlements/',
      JSON.stringify(reqBody)
    );
    if (success) {
      console.log(data);
    }
  } catch (error) {
    console.log(error);
  }
};
