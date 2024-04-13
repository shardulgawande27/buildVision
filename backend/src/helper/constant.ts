// enums
const appDetails = require('@/src/enum/appDetails');

export const API_VERSION = appDetails.API_VERSION;
const APP_NAME = appDetails.APPNAME;
const OWNER_NAME = appDetails.OWNER_NAME;
const MYSQL_MOMENT_DATE_FORMAT = 'YYYY-MM-DD';
const MYSQL_MOMENT_DATETIME_FORMAT = 'YYYY-MM-DD HH:mm:ss';

// Response Messages

const RESPONSE_MESSAGES = {
	CODE_400: 'Auth Token is required. Please provide a valid auth token along with request.',
	CODE_401: 'You need to login to do this action',
	CODE_403: 'You are forbidden from doing this action',
	CODE_404: 'The resource referenced by request does not exists.',
	CODE_405: 'Requested method is not valid',
	CODE_408: 'Request getting too much time. please try after some time',
	CODE_500: 'Something went wrong on server. Please contact server admin.',
	CODE_501: 'We will patch no such thing',
	CODE_503: 'Requested service is unavailable for this time',
	CODE_200: 'Success',
	CODE_201: 'Created',
	CODE_422: 'Something went wrong, Database error',
};

module.exports = {
	API_VERSION,
	APP_NAME,
	OWNER_NAME,
	MYSQL_MOMENT_DATE_FORMAT,
	MYSQL_MOMENT_DATETIME_FORMAT,
	RESPONSE_MESSAGES,
}