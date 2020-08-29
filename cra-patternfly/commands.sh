# Create project
npx create-react-app cra-patternfly --template typescript
cd cra-patternfly

# Add prettier
yarn add husky lint-staged prettier

sed -i "\$i\
  ,\n\
  \"husky\": {\n\
    \"hooks\": {\n\
      \"pre-commit\": \"lint-staged\"\n\
    }\n\
  },\n\
  \"lint-staged\": {\n\
      \"src/**/*.{js,jsx,ts,tsx,json,css,scss,md}\": [\n\
        \"prettier --write\"\n\
      ]\n\
  }\
" package.json

# Add storybook
npx -p @storybook/cli sb init

sed  -i "1 i\
import \"../node_modules/@patternfly/react-core/dist/styles/base.css\";" .storybook/preview.js

## Theming
yarn add --dev @storybook/addons @storybook/theming

echo "
import { create } from '@storybook/theming/create';

export default create({
  base: 'light',
  brandTitle: 'CRA Patternfly',
  brandUrl: 'https://github.com/carlosthe19916/cra-patternfly',
  brandImage: 'https://raw.githubusercontent.com/patternfly/patternfly/master/static/assets/images/pf_logo.svg',
});
" > .storybook/theme.js

echo "
import { addons } from '@storybook/addons';
import theme from './theme';

addons.setConfig({ theme });
" > .storybook/manager.js

# Add router
yarn add react-router-dom
yarn add -D @types/react-router-dom

# Add axios
yarn add axios

# Add patternfly
yarn add @patternfly/patternfly @patternfly/react-core @patternfly/react-table

# Add testing dependencies
yarn add enzyme enzyme-adapter-react-16 react-test-renderer jest-enzyme
yarn add -D @types/enzyme @types/enzyme-adapter-react-16

echo "
import 'jest-enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
" >> src/setupTests.ts

# Add redux
yarn add redux react-redux redux-logger redux-thunk typesafe-actions
yarn add -D @types/react-redux @types/redux-logger

yarn add -D redux-devtools-extension

# Add SASS support
yarn add -D node-sass

echo "
@import '~@patternfly/patternfly/patternfly.css';
@import '~@patternfly/patternfly/patternfly-addons.css';
" >> src/App.scss

rm src/App.css