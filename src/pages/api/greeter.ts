import { NextApiRequest, NextApiResponse } from 'next';
import { ServiceError } from '@grpc/grpc-js';
import { sayHello } from '@lib/greeter';
import { HelloReply } from 'src/proto/helloworld_pb';

// export interface GreeterApiResponse {
//     ok: boolean;
//     message?: HelloReply.AsObject['message'];
//     error?: ServiceError | Error;
// }
export type GreeterApiResponse =
    | { ok: true; message: HelloReply.AsObject['message'] }
    | { ok: false; error: ServiceError | Error };

const handler = async (req: NextApiRequest, res: NextApiResponse<GreeterApiResponse>) => {
    try {
        sayHello(req.query.name.toString(), (message) => {
            res.status(200).json({ ok: true, message });
        });
    } catch (err) {
        res.status(500).json({ ok: false, error: new Error('Error!') });
    }
};

export default handler;
