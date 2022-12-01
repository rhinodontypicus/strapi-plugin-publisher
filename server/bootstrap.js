'use strict';

const { registerCronTasks } = require('./config/cron-tasks');

module.exports = async ({ strapi }) => {
	// register action check
	registerCronTasks({ strapi });
	await registerPermissionActions();
};

const registerPermissionActions = async () => {
	const actions = [
		{
			section: 'plugins',
			displayName: 'Use Published Plugin',
			uid: 'use',
			pluginName: 'strapi-plugin-publisher',
		},
	];

	await strapi.admin.services.permission.actionProvider.registerMany(actions);
};
