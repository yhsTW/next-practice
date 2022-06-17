import type { Post as PostType } from 'src/lib/post';
import { ROUTES } from 'src/constants/routes';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Post.module.scss';

interface Props {
    post: PostType;
}

const getRoutes = () => {
    const routes = [ROUTES.csrPost, ROUTES.isrPost, ROUTES.ssgPost, ROUTES.ssrPost];

    return routes[Math.floor(Math.random() * routes.length)];
};

const Post = ({ post }: Props) => {
    const pathname = getRoutes();

    return (
        <div>
            <Link
                href={{
                    pathname,
                    query: { id: post.id }
                }}
            >
                <a className={styles.post}>
                    <Image src={post.image} width={310} height={200} />
                    <h5>{post.text}</h5>
                </a>
            </Link>
            <span>{pathname.split('/')[2]}</span>
        </div>
    );
};

export default Post;
