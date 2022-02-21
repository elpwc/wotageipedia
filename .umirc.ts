import appconfig from './src/appconfig';

export default {
  openAPI: {
    requestLibPath: "import request from '../../utils/request'",
    schemaPath: `${appconfig.apiBaseURL}api/swagger_openapi.json`,
    mock: false,
  },
};
