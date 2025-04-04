// export const ENVIRONMENT = "dev";
export const ENVIRONMENT = "production";
const HOST = process.env.NEXT_PUBLIC_API || "localhost";
const PORT = "3001";

const apiEnv = {
	// production: `https://api-napa.napa-solutions.com/nps/admin/api`,
	production: `http://13.215.55.22:3001/admin/api`,
	dev: `http://${HOST}:${PORT}/admin/api`,
};

export const API_CMS = apiEnv[ENVIRONMENT];

export const GOOGLE_API_KEY = "AIzaSyDauj3g7HyE202aDRkrUUBzcbCkcrK_CQg";

// export const UPLOAD_S3_ENTRY_POINT =
//   'https://tu3adfeu3l.execute-api.ap-southeast-1.amazonaws.com/api';
// export const S3_URL = 'https://napa-web-store-private.s3-ap-southeast-1.amazonaws.com'
