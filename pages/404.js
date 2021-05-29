import Link from 'next/link';
import Layout from '@/components/Layout';
import { FaExclamationTriangle } from 'react-icons/fa';
import styles from '@/styles/404.module.css';

export default function NotFoundPage() {
  return (
    <Layout title="Page Not Found">
      <div className={styles.error}>
        <h1>
          <FaExclamationTriangle />
          404
        </h1>
        <h4>This page doesn't exist</h4>
        <Link href="/">Go Back Home</Link>
      </div>
    </Layout>
  );
}