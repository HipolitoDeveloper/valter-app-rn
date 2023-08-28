
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: [{
    [process.env.EXPO_PUBLIC_API_URL as string]: {
      headers: {
        "X-Parse-Application-Id": process.env.EXPO_PUBLIC_APP_ID as string,
        "X-Parse-Client-Key":  process.env.EXPO_PUBLIC_CLIENT_KEY as string,
        "X-Parse-Master-Key": process.env.EXPO_PUBLIC_JS_KEY as string
      }
    }
  }],
  documents: ['src/**/*.graphql.ts'],
  generates: {
    'src/schema.ts': {
      plugins: ['typescript']
    },
    'src': {
      preset: 'near-operation-file',
      presetConfig: {
        extension: '.generated.tsx',
        baseTypesPath: 'schema.ts',
      },
      plugins: [
        'typescript-operations',
        'typescript-react-apollo'
      ],
      config: {
        withHooks: true
      }
    }
  }
}

export default config;
