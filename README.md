# gatsby-plugin-config

Plugin for gatsby to handle environment variables with ease.

 - [x] Handle empty strings
 - [x] Strip out GATSBY_ prefix

## Install

Install with npm or yarn

```bash
npm install gatsby-plugin-config dotenv -S
```

In absolute top of your `gatsby-config.js`:
```js
// Initialize dotenv
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`, // or '.env'
});

// And then you can use the config in gatsby-config.js
const config = require('gatsby-plugin-config');
```

## Usage

Import the plugin with import

```js
import config from 'gatsby-plugin-config';
```

### GATSBY variables

Variables prefixed with `GATSBY_` are accessiable from the client side by default. This plugin allows you to query them without the prefix.

```js
// process.env.GATSBY_API_URL
config.API_URL
```

### Empty variables

You don't have to match empty variables anymore like this:

```js
if (process.env.GATSBY_IS_STAGING && process.env.GATSBY_IS_STAGING !== '') {
    // do something
}
```

You can now just do:

```js
if (config.IS_STAGING) {
    // you're done
}
```

### gatsby-config.js

Usage in files without module system (like gatsby-config / gatsby-node etc.)

```js
const config = require('gatsby-plugin-config').default;

module.exports = {
  siteMetadata: {
    title: config.SITE_TITLE,
  },
};
```


### Dotenv

You can keep separate dotenv files for each environment in the project root. See https://github.com/motdotla/dotenv for more details.

```
.env.development
.env.staging
.env.production
```

The format is simply `.env.${process.env.NODE_ENV}`

## Troubleshooting

Please file a bug if any issues occour.