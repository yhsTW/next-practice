import axios from 'axios';

export interface Post {
    id: string;
    text: string;
    image: string;
    likes: number;
    tags: any[];
    publishDate: string;
    owner: object;
}

export const getPosts = async (): Promise<Post[]> => {
    console.log('get posts start...');
    try {
        const {
            data: { data: posts }
        } = await axios({
            method: 'GET',
            url: `${process.env.BASE_URL}/post?limit=100`,
            headers: {
                'app-id': process.env.APP_ID
            }
        });

        return posts;
    } catch (err) {
        console.log('get posts error: ', err);
        return err;
    }
};

export const getPost = async (id: string): Promise<Post> => {
    console.log('get post start...');
    try {
        const { data: post } = await axios({
            method: 'GET',
            url: `${process.env.BASE_URL}/post/${id}`,
            headers: {
                'app-id': process.env.APP_ID
            }
        });

        return post;
    } catch (err) {
        console.log('get post error: ', err);
        return err;
    }
};
