import React from 'react';
import styles from './Filter.module.scss';

export default function Filter({ filter, setFilter }) {
  return (
    <div className={styles.filterContainer}>
      <button 
        className={`${styles.filterButton} ${filter === 'all' ? styles.active : ''}`}
        onClick={() => setFilter('all')}
      >
        All Cats
      </button>
      <button 
        className={`${styles.filterButton} ${filter === 'Egypt' ? styles.active : ''}`}
        onClick={() => setFilter('Egypt')}
      >
        Egyptian
      </button>
    </div>
  );
}