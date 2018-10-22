import dotenv from 'dotenv';

type ObjectEntry = [string, string | undefined];

interface ProcessEnv {
  readonly [key: string]: string | undefined;
}

const PREFIX = 'GATSBY_';

dotenv.config({
  path: `.env.${process.env.NODE_ENV}`
});

function processEnvironmentVariable(
  acc: ProcessEnv,
  [key, value]: ObjectEntry
): ProcessEnv {
  return {
    ...(value !== '' && {
      [key]: value,
      [key.replace(new RegExp(`^${PREFIX}`), '')]: value
    }),
    ...acc
  };
}

export default Object.entries(process.env).reduce(
  processEnvironmentVariable,
  {}
);
