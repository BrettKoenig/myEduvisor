'use strict';

module.exports = {
	db: 'mongodb://meanuser:meanpass@dogen.mongohq.com:10019/mean-database',
	app: {
		title: 'Eduvisor - Development Environment'
	},
	facebook: {
		clientID: process.env.FACEBOOK_ID || '862866017079346',
		clientSecret: process.env.FACEBOOK_SECRET || 'fc0d6abd2998fe19e5cc76d4ecbe84e1',
		callbackURL: 'http://localhost:3000/auth/facebook/callback'
	},
	twitter: {
		clientID: process.env.TWITTER_KEY || 'CONSUMER_KEY',
		clientSecret: process.env.TWITTER_SECRET || 'CONSUMER_SECRET',
		callbackURL: 'http://localhost:3000/auth/twitter/callback'
	},
	google: {
		clientID: process.env.GOOGLE_ID || '706633756000-dkf1t2chkba3igsni4n5q7vpc4deo8hd.apps.googleusercontent.com',
		clientSecret: process.env.GOOGLE_SECRET || 'Ivd0SgR5tt7VyUANEw8TrVfX',
		callbackURL: 'http://localhost:3000/auth/google/callback'
	},
	linkedin: {
		clientID: process.env.LINKEDIN_ID || 'APP_ID',
		clientSecret: process.env.LINKEDIN_SECRET || 'APP_SECRET',
		callbackURL: 'http://localhost:3000/auth/linkedin/callback'
	},
	github: {
		clientID: process.env.GITHUB_ID || 'APP_ID',
		clientSecret: process.env.GITHUB_SECRET || 'APP_SECRET',
		callbackURL: 'http://localhost:3000/auth/github/callback'
	},
	mailer: {
		from: process.env.MAILER_FROM || 'MAILER_FROM',
		options: {
			service: process.env.MAILER_SERVICE_PROVIDER || 'MAILER_SERVICE_PROVIDER',
			auth: {
				user: process.env.MAILER_EMAIL_ID || 'MAILER_EMAIL_ID',
				pass: process.env.MAILER_PASSWORD || 'MAILER_PASSWORD'
			}
		}
	}
};