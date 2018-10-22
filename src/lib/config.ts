import dotenv from 'dotenv';
import path from 'path';

type ObjectEntry = [string, string | undefined];

interface ProcessEnv {
  readonly [key: string]: string | undefined;
}

const PREFIX = 'GATSBY_';

dotenv.config({
  path: path.resolve(process.cwd(), `.env.${process.env.NODE_ENV}`)
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
) as any;
