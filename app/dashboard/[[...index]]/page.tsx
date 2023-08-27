'use client'

import conf from '@/sanity/sanity.config';
import { NextStudio } from 'next-sanity/studio';

const AdminPage = () => {
  return <NextStudio config={conf} />;
};

export default AdminPage;
