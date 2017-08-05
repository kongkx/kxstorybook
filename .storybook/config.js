import React from 'react'
import { configure, addDecorator } from '@storybook/react'

import { setOptions } from '@storybook/addon-options';
import { setDefaults } from '@storybook/addon-info';

setOptions({
  name: 'Custom StoryBook',
  url: '',
  goFullScreen: false,
  showLeftPanel: true,
  showDownPanel: true,
  showSearchBox: false,
  downPanelInRight: true
});

setDefaults({
  inline: true,
  maxPropsIntoLine: 1,
  maxPropObjectKeys: 10,
  maxPropArrayLength: 10,
  maxPropStringLength: 100,
});

const req = require.context('../components', true, /.stories.js$/)

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

addDecorator((story) => (
  <div>
    <h1>custom wrapper example</h1>
  	<div>{story()}</div>
  </div>
))

configure(loadStories, module)
