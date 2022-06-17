export const merge = (...paths: string[]): string => `/${paths.join('/')}`.replace(/^\/+/, '/');

const ROUTE = {
    home: merge(),
    csr: merge('render', 'csr'),
    csrWithSuspense: merge('render', 'csr-with-suspense'),
    ssg: merge('render', 'ssg'),
    isr: merge('render', 'isr'),
    isrWithSwr: merge('render', 'isr-with-swr'),
    ssr: merge('render', 'ssr'),
    post: merge('posts', '[id]'),
    csrPost: merge('posts', 'csr', '[id]'),
    isrPost: merge('posts', 'isr', '[id]'),
    ssgPost: merge('posts', 'ssg', '[id]'),
    ssrPost: merge('posts', 'ssr', '[id]')
} as const;

export const ROUTES = ROUTE;
