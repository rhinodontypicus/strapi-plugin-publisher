'use strict';

module.exports = [
	{
		method: 'GET',
		path: '/actions',
		handler: 'actionController.find',
		config: {
			policies: [
				'admin::isAuthenticatedAdmin',
				{
					name: 'admin::hasPermissions',
					config: {
						actions: ['plugin::publisher.use'],
					},
				},
			],
		},
	},
	{
		method: 'POST',
		path: '/actions',
		handler: 'actionController.create',
		config: {
			policies: [
				'admin::isAuthenticatedAdmin',
				{
					name: 'admin::hasPermissions',
					config: {
						actions: ['plugin::publisher.use'],
					},
				},
			],
		},
	},
	{
		method: 'DELETE',
		path: '/actions/:id',
		handler: 'actionController.delete',
		config: {
			policies: [
				'admin::isAuthenticatedAdmin',
				{
					name: 'admin::hasPermissions',
					config: {
						actions: ['plugin::publisher.use'],
					},
				},
			],
		},
	},
	{
		method: 'PUT',
		path: '/actions/:id',
		handler: 'actionController.update',
		config: {
			policies: [
				'admin::isAuthenticatedAdmin',
				{
					name: 'admin::hasPermissions',
					config: {
						actions: ['plugin::publisher.use'],
					},
				},
			],
		},
	},
];
