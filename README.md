# react-svg-spinner

## Why
I needed a stupid spinner that scales based on surroundings.

## Docs n' stuff
https://chantastic.org/react-svg-spinner

## Install
```bash
npm i -S react-svg-spinner
```

```js
import Spinner from "react-svg-spinner";
```

## Use in the browser
```html
<script src="https://unpkg.com/react-svg-spinner@1.0.2/dist/index.umd.js"></script>
```

## Use
It works like any other React component.
```js
ReactDom.render(
	<Spinner />,
	mountNode
)
```

## CHANGELOG

## 1.0.1

[chore]: remove yarn.lock. upgrade with npm

## 1.0.1

[chore]: loosen React version constraints #4

## 1.0.0
[chore]: Update dependencies—namely `React@v16`
[chore]: Replace `webpack` with `microbundle` for 3 build targets.
[chore]: Choke down what's going up to the NPM registry
[fix]: Move deps into proper `package.json` sections
[docs]: Update `package.json` fields

## 0.2.0
[chore]: update to use `prop-types`. thanks [@shanebonham](https://github.com/shanebonham)
