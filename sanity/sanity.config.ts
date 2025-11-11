import { defineConfig } from 'sanity';
import { structureTool} from 'sanity/structure';
import { schemaTypes } from './schemas/index';

const conf = defineConfig({
  dataset: 'production',
  projectId: 'k4oizxiu',
  title: 'UNA KREATIONS',
  plugins: [structureTool()],
  basePath: '/dashboard',
  schema: {
    types: schemaTypes,
  },
});

export default conf;
