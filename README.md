# Kongkx StoryBook Exmaple

storybook with features:

- custom options
- knobs
- actions
- info
- readme
- react-docgen

## Custom Options

Link: [addon-options](https://www.npmjs.com/package/@storybook/addon-options)

1. register addon-options

  ```javascript
  // addons.js
  import '@storybook/addon-options/register';
  ```

2. set options

  ```javascript
  // config.js
  import { setOptions } from '@storybook/addon-options';
  setOptions({
    name: 'KX StoryBook Example',
    url: 'https://github.com/kongkx/kxstorybook',
    goFullScreen: false,
    showLeftPanel: true,
    showDownPanel: true,
    showSearchBox: false,
    downPanelInRight: true
  });
  ```

## Knobs

Link: [addon-knobs](https://www.npmjs.com/package/@storybook/addon-knobs)

1. register addon-knobs

  ```javascript
  // addons.js
  import '@storybook/addon-knobs/register';
  ```

2. write story

  ```javascript
  import { storiesOf } from '@storybook/react';
  import { withKnobs, select, boolean } from '@storybook/addon-knobs';

  import Button from 'button';

  storiesOf('Button', module)
    .addDecorator(withKnobs)
    .add('Deafult',
      () => (
        <Button
          type={select("Type", ["primary", "success", "warning"], "primary")}
          disabled={boolean('Disabled')}
        >
          Button
        </Button>
      )
    )

  ```

## actions

Link: [addon-actions](https://www.npmjs.com/package/@storybook/addon-actions)

1. register addon-actions

  ```javascript
  import '@storybook/addon-actions/register';
  ```

2. write story

  ```javascript
  import { storiesOf, action } from '@storybook/react';
  import Button from 'button';

  storiesOf('Button', module)
    .addDecorator(withKnobs)
    .add('Deafult',
      () => (
        <Button
          onClick={action('button-click')}
        >
          Button
        </Button>
      )
    )
  ```

## action-info

Link: [addon-info](https://www.npmjs.com/package/@storybook/addon-info)

1. set default configure

  ```javascript
  // config.js
  import { setDefaults } from '@storybook/addon-info';

  setDefaults({
    inline: true,
    maxPropsIntoLine: 1,
    maxPropObjectKeys: 10,
    maxPropArrayLength: 10,
    maxPropStringLength: 100,
  });
  ```

2. write story

  ```javascript
  import { storiesOf, action } from '@storybook/react';
  import Button from 'button';

  storiesOf('Button', module)
    .add('Deafult',
      withInfo('Custom Info')(() => (
        <Button
          onClick={action('button-click')}
        >
          Button
        </Button>
      ))
    )
  ```

## readme

Link: [storybook-readme](https://github.com/tuchk4/storybook-readme/)

1. register storybook-readme

  ```javascript
  // addons.js
  import 'storybook-readme/register';
  ```

2. write story

  ```javascript
  import { storiesOf, action } from '@storybook/react';
  import withReadme from 'storybook-readme/with-readme';

  import Button from 'button';
  import ButtonReadme from 'button.md'; // raw-loader needed

  storiesOf('Button', module)
    .add('Deafult',
      withReadme(ButtonReadme,
        withInfo('Custom Info')(() => (
          <Button
            onClick={action('button-click')}
          >
            Button
          </Button>
        ))
      )
    )
  ```

## react-docgen

Link: [babel-plugin-react-docgen](https://github.com/storybooks/babel-plugin-react-docgen)

1. install `babel-plugin-react-docgen`

  ```bash
  npm install babel-plugin-react-docgen
  ```

2. update `.babelrc`

  ```javascript
  {
    "preset": [
      ["env", { modules: false }],
      "react",
      "stage-1"
    ],
    "plugins": ["react-docgen"]
  }
  ```

2. add babel-loader in custom webpack config

  ```javascript
  // webpack.config.js
  module.exports = {
    module: {
      rules: [
        {
          test: /\.js$/,
          loader: "babel-loader",
          exclude: [ /node_modules/ ]
        },
        {
          test: /\.md$/,
          loader: "raw-loader"
        }
      ]
    }
  };
  ```
