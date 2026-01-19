import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Settings } from '@folio/stripes/smart-components';
import PipelineSettings from './PipelineSettings';
import StepSettings from './StepSettings';
import LogSettings from './LogSettings';

const HarvesterAdminSettings = (props) => {
  const pages = [
    {
      route: 'pipeline',
      label: <FormattedMessage id="ui-inventory-import.settings.pipeline" />,
      component: PipelineSettings,
      // By PO decision, these all use the same high-level permission
      perm: 'settings.inventory-import.enabled',
    },
    {
      route: 'step',
      label: <FormattedMessage id="ui-inventory-import.settings.step" />,
      component: StepSettings,
      perm: 'settings.inventory-import.enabled',
    },
    {
      route: 'logs',
      label: <FormattedMessage id="ui-inventory-import.settings.logs" />,
      component: LogSettings,
      perm: 'settings.inventory-import.enabled',
    },
  ];

  return (
    <Settings {...props} pages={pages} paneTitle={<FormattedMessage id="ui-inventory-import.meta.title" />} />
  );
};

export default HarvesterAdminSettings;
