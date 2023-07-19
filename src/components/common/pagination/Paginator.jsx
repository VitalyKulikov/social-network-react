import React from 'react';
import styles from './Paginator.module.css';


let Paginator = ({totalCount, pageSize, currentPage, onPageChenged}) => {
    let pagesCount = Math.ceil(totalCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return <div className={styles.paginationWrapper}>
        <div>
            {pages.map((p) => {
                return (
                    <span
                        key={p.id}
                        className={currentPage === p && styles.selectorPage}
                        onClick={() => {
                            onPageChenged(p);
                        }}>{p}
                        </span>
                );
            })}
        </div>
    </div>
};

export default Paginator;
