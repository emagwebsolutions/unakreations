import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { schemaTypes } from './schemas/index';

const conf = defineConfig({
  dataset: 'production',
  projectId: 'k4oizxiu',
  title: 'UNA KREATIONS',
  apiVersion: '2023-09-27',
  plugins: [deskTool()],
  basePath: '/dashboard',
  schema: {
    types: schemaTypes,
  },
});

export default conf;
