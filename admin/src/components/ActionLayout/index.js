import React from 'react';
import { useParams } from 'react-router-dom';
import _get from 'lodash/get';
import { useCMEditViewDataManager, CheckPermissions } from '@strapi/helper-plugin';
import { Box } from '@strapi/design-system/Box';
import { ActionLayoutHeader } from './ActionLayoutHeader';
import { Action } from '../Action';
import pluginPermissions from '../../permissions';

const actionModes = ['publish', 'unpublish'];

const ActionLayout = () => {
	const { slug, hasDraftAndPublish, isCreatingEntry } = useCMEditViewDataManager();
	const params = useParams();
	const id = _get(params, 'id', null);
	const currentEntityId = Number(id);

	if (!hasDraftAndPublish || isCreatingEntry) {
		return null;
	}

	return (
		<CheckPermissions permissions={pluginPermissions.main}>
			<Box marginTop={4}>
				<ActionLayoutHeader />
				{actionModes.map((m, index) => (
					<Action mode={m} key={index} entitySlug={slug} entityId={currentEntityId} />
				))}
			</Box>
		</CheckPermissions>
	);
};

export { ActionLayout };
