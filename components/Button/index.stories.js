import React from 'react';
import { storiesOf, action, linkTo } from '@storybook/react';
import { withKnobs, select, boolean } from '@storybook/addon-knobs';
import withReadme from 'storybook-readme/with-readme';
import { withInfo } from '@storybook/addon-info';

import Button from ".";

import ButtonReadme from "./index.md";

const label = 'Type';
const options = {
  primary: 'primary',
  success: 'success',
  warning: 'warning',
};
const defaultValue = 'primary';

const type = select(label, options, defaultValue);

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .add('Default',
    withReadme(ButtonReadme,
      withInfo("Button")(() => (
        <Button
          type={select(label, options, defaultValue)}
          disabled={boolean('Disabled')}
          onClick={action('button-click')}
        >
          button
        </Button>
      ))
    )
  )
