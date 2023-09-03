import { createClient } from 'next-sanity';

const client = createClient({
  dataset: 'production',
  projectId: 'k4oizxiu',
  apiVersion: '2023-09-27'
});

export default client;
