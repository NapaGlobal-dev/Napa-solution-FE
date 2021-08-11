export const ENVIRONMENT = "dev";
//export const ENVIRONMENT = "production";
const HOST = "192.168.1.6";
const PORT = "3001";

const apiEnv = {
  //   production: `https://api.napa-solutions.com/admin/api`,
  dev: `http://${HOST}:${PORT}/admin/api`,
};

export const API_CMS = apiEnv[ENVIRONMENT];

// export const UPLOAD_S3_ENTRY_POINT =
//   'https://tu3adfeu3l.execute-api.ap-southeast-1.amazonaws.com/api';
// export const S3_URL = 'https://napa-web-store-private.s3-ap-southeast-1.amazonaws.com'
