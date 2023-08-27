import { createClient } from 'next-sanity';

const client = createClient({
  dataset: 'production',
  projectId: '@2023azPP',
  apiVersion: '2023-09-27',
});

export default client;
