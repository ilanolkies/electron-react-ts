<h3 align="middle"><code>electron-react-ts</code></h3>
<p align="middle">
  Electron + React.js + Typescript template
</p>
<p align="middle">
  <a href="https://github.com/ilanolkies/electron-react-ts/actions?query=workflow%3Aci">
    <img src="https://github.com/ilanolkies/electron-react-ts/workflows/ci/badge.svg" />
  </a>
  <a href="https://github.com/ilanolkies/electron-react-ts/actions?query=workflow%3ACodeQL">
    <img src="https://github.com/ilanolkies/electron-react-ts/workflows/CodeQL/badge.svg" />
  </a>
  <a href="https://lgtm.com/projects/g/ilanolkies/electron-react-ts/?mode=list">
    <img src="https://img.shields.io/lgtm/alerts/github/ilanolkies/electron-react-ts" />
  </a>
  <a href="https://lgtm.com/projects/g/ilanolkies/electron-react-ts/context:javascript">
    <img src="https://img.shields.io/lgtm/grade/javascript/github/ilanolkies/electron-react-ts" />
  </a>
  <a href='https://coveralls.io/github/ilanolkies/electron-react-ts?branch=main'>
    <img src='https://coveralls.io/repos/github/ilanolkies/electron-react-ts/badge.svg?branch=main' alt='Coverage Status' />
  </a>
  <a href="https://hits.seeyoufarm.com">
    <img src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2Filanolkies%2Felectron-react-ts&count_bg=%2379C83D&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=hits&edge_flat=false"/>
  </a>
</p>

1. Click on _use this teamplate_ on the top right corner
2. Update README badges urls
3. [Install dependencies](#install-dependencies) and [run](#run) the app!

### Features

- Compiles [Typescript](https://www.typescriptlang.org/)
- Builds [React.js](https://reactjs.org/) with [`webpack`](https://webpack.js.org/)
- Runs on [Electron](https://www.electronjs.org/)
- Checks code syntax with [ESlint](https://eslint.org/) and [`standard-with-typescript`](https://github.com/standard/eslint-config-standard-with-typescript)
- Tests with [`ts-jest`](https://github.com/kulshekhar/ts-jest) and [Enzyme](https://enzymejs.github.io/enzyme/)
- Styles with [Sass](https://sass-lang.com/)

### Install dependencies

```
npm i
```

### Run

```
npm run dev
```

### Lint

```
npm run lint
npm run lint:fix
```

### Test

```
npm test
npm test:watch
```

### Build

```
npm run build
```

### Distribute

```
npm run dist
```

### Workflows

Runs lint, test and build in [Github actions](https://github.com/features/actions). Uses [Coveralls](https://coveralls.io/) coverage reports.
