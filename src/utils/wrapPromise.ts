export function wrapPromise<T>(promise: Promise<T>) {
    let status: string = 'pending';
    let response: T;

    const suspender = promise.then(
        (res) => {
            status = 'success';
            response = res;
        },
        (err) => {
            status = 'error';
            response = err;
        }
    );

    const handler: Record<string, Function> = {
        pending: () => {
            throw suspender;
        },
        error: () => {
            throw response;
        },
        $response: () => response,
    };

    const read = (): T => {
        return handler[status] ? handler[status]() : handler.$response();
    };

    return { read };
}
