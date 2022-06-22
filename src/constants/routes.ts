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
    ssrPost: merge('posts', 'ssr', '[id]'),
    grpc: merge('grpc'),
    grpc2: merge('grpc2'),
    grpc3: merge('grpc3'),
    grpc4: merge('grpc4'),
    grpcWithSWR: merge('grpc-with-swr'),
    grpcWithMSW: merge('grpc-with-msw'),
    grpcWithSSR: merge('grpc-with-ssr')
} as const;

export const ROUTES = ROUTE;
