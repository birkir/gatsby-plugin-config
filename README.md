# gatsby-plugin-config
Config plugin for gatsby

## Usage

Given the environment variable `GATSBY_FLAG=5`:

```js
import config from 'gatsby-plugin-config';

console.log(config.FLAG); // 5
console.log(config.NOPE); // undefined
```