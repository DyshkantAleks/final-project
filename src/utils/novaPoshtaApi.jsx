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
    const {status, data} = await Axios.post(
      'http://testapi.novaposhta.ua/v2.0/json/Address/searchSettlements/',
      JSON.stringify(reqBody)
    );
    console.log(data)
    if (status) {
      const result = data.success ? data.data[0].Addresses.map(item => item.Present) : []
      console.log(result)
      return result
    }
  } catch (error) {
    console.log(error);
  }
};
