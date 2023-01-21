import MTProto from "@mtproto/core/envs/browser";

export {}

declare global {
    // https://mtproto-core.js.org/docs/
    declare module '@mtproto/core/envs/browser' {
        export type MTProtoOptions = {
            api_id: string;
            api_hash: string;
            storageOptions?: any;
        }
        class MTProto {
            constructor(options: MTProtoOptions);
            async call(method, params: any = {}, options: any = {});

            async syncAuth(dcId): any[];

            setDefaultDc(dcId);

            getRPC(dcId);

            updateInitConnectionParams(params: any): void;
        }
        export default MTProto;
    }
}