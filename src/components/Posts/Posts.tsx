import type { Post } from 'src/lib/post';
import PostCompo from '@components/Post';
import styles from './Posts.module.scss';

interface Props {
    posts: Post[];
}

const Posts = ({ posts }: Props) => (
    <div className={styles.posts}>
        {posts.map((post) => (
            <PostCompo key={post.id} post={post} />
        ))}
    </div>
);

export default Posts;
