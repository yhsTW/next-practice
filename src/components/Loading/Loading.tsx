import styles from './Loading.module.scss';

const Loading = () => {
    console.log('Loading...');
    return <span className={styles.loading}>로딩 중...</span>;
};

export default Loading;
