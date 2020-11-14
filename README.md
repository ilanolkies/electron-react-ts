<h3 align="middle"><code>electron-react-ts</code></h3>
<p align="middle">
  <a href="https://github.com/ilanolkies/electron-react-ts/actions?query=workflow%3Aci">
    <img src="https://github.com/ilanolkies/electron-react-ts/workflows/ci/badge.svg" />
  </a>
  <a href="https://lgtm.com/projects/g/ilanolkies/electron-react-ts/?mode=list">
    <img src="https://img.shields.io/lgtm/alerts/github/ilanolkies/electron-react-ts" />
  </a>
  <a href="https://lgtm.com/projects/g/ilanolkies/electron-react-ts/context:javascript">
    <img src="https://img.shields.io/lgtm/grade/javascript/github/ilanolkies/electron-react-ts" />
  </a>
</p>

Electron + React.js + Typescript template

- Compiles [Typescript](https://www.typescriptlang.org/)
- Builds [React.js](https://reactjs.org/) with [`webpack`](https://webpack.js.org/)
- Runs on [Electron](https://www.electronjs.org/)
- Checks code syntax with [ESlint](https://eslint.org/) and [`standard-with-typescript`](https://github.com/standard/eslint-config-standard-with-typescript)
- Tests with [`ts-jest`](https://github.com/kulshekhar/ts-jest) and [Enzyme](https://enzymejs.github.io/enzyme/)
- Styles with [Sass](https://sass-lang.com/)

## Install dependencies

Use

- Node.js `v10.22.0`
- npm `v6.14.8`

Run

```
npm i
```

## Run

In one terminal

```
npm run dev
```

## Lint

```
npm run lint
npm run lint:fix
```

## Test

```
npm test
npm test:watch
```

## Build

```
npm run build
```

## Distribute

```
npm run dist
```

## Workflows

Runs lint, test and build in [Github actions](https://github.com/features/actions)
