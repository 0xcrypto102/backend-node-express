import dotenv from 'dotenv';

dotenv.config();

export const NODE_ENV = process.env.NODE_ENV || 'development';

export const APP_NAME = process.env.APP_NAME || 'App Name';

export const HOST = process.env.HOST || '0.0.0.0';
export const PORT = process.env.PORT || 666;

export const DATABASE_URI = process.env.DATABASE_URI || 'mongodb://127.0.0.1:27017/database';

export const JWT_ACCESS_TOKEN_SECRET = process.env.JWT_ACCESS_TOKEN_SECRET || 'de4thzone1';
export const JWT_ACCESS_TOKEN_EXPIRATION_MINUTES = process.env.JWT_ACCESS_TOKEN_EXPIRATION_MINUTES || 240;

export const JWT_REFRESH_TOKEN_SECRET = process.env.JWT_REFRESH_TOKEN_SECRET || 'de4thzone2';
export const JWT_REFRESH_TOKEN_EXPIRATION_DAYS = process.env.JWT_REFRESH_TOKEN_EXPIRATION_DAYS || 1;

export const JWT_VERIFY_EMAIL_SECRET = process.env.JWT_VERIFY_EMAIL_SECRET || 'de4thzone3';
export const JWT_VERIFY_EMAIL_EXPIRATION_MINUTES = process.env.JWT_VERIFY_EMAIL_EXPIRATION_MINUTES || 60;

export const JWT_RESET_PASSWORD_SECRET = process.env.JWT_RESET_PASSWORD_SECRET || 'de4thzone4';
export const JWT_RESET_PASSWORD_EXPIRATION_MINUTES = process.env.JWT_RESET_PASSWORD_EXPIRATION_MINUTES || 30;

export const SMTP_HOST = process.env.SMTP_HOST || '';
export const SMTP_PORT = process.env.SMTP_PORT || '';
export const SMTP_USERNAME = process.env.SMTP_USERNAME || '';
export const SMTP_PASSWORD = process.env.SMTP_PASSWORD || '';
export const EMAIL_FROM = process.env.EMAIL_FROM || '';

export const FRONTEND_URL = process.env.FRONTEND_URL || 'http://localhost:777';

export const TOKEN_TYPES = {
	REFRESH: 'refresh',
	VERIFY_EMAIL: 'verifyEmail',
	RESET_PASSWORD: 'resetPassword'
};
