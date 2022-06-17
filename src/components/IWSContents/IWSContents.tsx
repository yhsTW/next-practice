import useSWR from 'swr';
import type { Post } from '@lib/post';
import DateTime from '@components/DateTime';
import Posts from '@components/Posts';
import { getPosts } from '@lib/post';
import styles from './IWSContents.module.scss';

interface Props {
    date: Date;
    posts: Post[];
}

const IWSContents = ({ posts: pPosts, date: pDate }: Props) => {
    const { data: posts } = useSWR('api/posts', getPosts, { fallbackData: pPosts });
    const { data: date } = useSWR('api/date', () => new Date(), { fallbackData: pDate });

    return (
        <section className={styles.contents}>
            <DateTime title={'데이터 받아온 시간'} date={date} />
            <Posts posts={posts} />
        </section>
    );
};

export default IWSContents;
