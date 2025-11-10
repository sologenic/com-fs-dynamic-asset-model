/// <reference types="node" />
/// <reference types="node" />
import { type CallOptions, ChannelCredentials, Client, type ClientOptions, type ClientUnaryCall, type handleUnaryCall, Metadata, type ServiceError, type UntypedServiceImplementation } from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";
import { DynamicAsset } from "./dynamic-asset";
import { Network } from "./sologenic/com-fs-utils-lib/models/metadata/metadata";
export declare const protobufPackage = "dynamicasset";
export interface UserDynamicAssetRequest {
    OrganizationID: string;
    /** Required: the identifier string (e.g., "news") */
    Identifier: string;
    Network?: Network | undefined;
}
export declare const UserDynamicAssetRequest: {
    encode(message: UserDynamicAssetRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UserDynamicAssetRequest;
    fromJSON(object: any): UserDynamicAssetRequest;
    toJSON(message: UserDynamicAssetRequest): unknown;
    create<I extends {
        OrganizationID?: string | undefined;
        Identifier?: string | undefined;
        Network?: Network | undefined;
    } & {
        OrganizationID?: string | undefined;
        Identifier?: string | undefined;
        Network?: Network | undefined;
    } & { [K in Exclude<keyof I, keyof UserDynamicAssetRequest>]: never; }>(base?: I | undefined): UserDynamicAssetRequest;
    fromPartial<I_1 extends {
        OrganizationID?: string | undefined;
        Identifier?: string | undefined;
        Network?: Network | undefined;
    } & {
        OrganizationID?: string | undefined;
        Identifier?: string | undefined;
        Network?: Network | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof UserDynamicAssetRequest>]: never; }>(object: I_1): UserDynamicAssetRequest;
};
export type UserDynamicAssetServiceService = typeof UserDynamicAssetServiceService;
export declare const UserDynamicAssetServiceService: {
    /** Get dynamic asset by identifier (e.g., "news", "promotions") */
    readonly getByIdentifier: {
        readonly path: "/dynamicasset.UserDynamicAssetService/GetByIdentifier";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UserDynamicAssetRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UserDynamicAssetRequest;
        readonly responseSerialize: (value: DynamicAsset) => Buffer;
        readonly responseDeserialize: (value: Buffer) => DynamicAsset;
    };
};
export interface UserDynamicAssetServiceServer extends UntypedServiceImplementation {
    /** Get dynamic asset by identifier (e.g., "news", "promotions") */
    getByIdentifier: handleUnaryCall<UserDynamicAssetRequest, DynamicAsset>;
}
export interface UserDynamicAssetServiceClient extends Client {
    /** Get dynamic asset by identifier (e.g., "news", "promotions") */
    getByIdentifier(request: UserDynamicAssetRequest, callback: (error: ServiceError | null, response: DynamicAsset) => void): ClientUnaryCall;
    getByIdentifier(request: UserDynamicAssetRequest, metadata: Metadata, callback: (error: ServiceError | null, response: DynamicAsset) => void): ClientUnaryCall;
    getByIdentifier(request: UserDynamicAssetRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: DynamicAsset) => void): ClientUnaryCall;
}
export declare const UserDynamicAssetServiceClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): UserDynamicAssetServiceClient;
    service: typeof UserDynamicAssetServiceService;
    serviceName: string;
};
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export type DeepPartial<T> = T extends Builtin ? T : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & {
    [K in Exclude<keyof I, KeysOfUnion<P>>]: never;
};
export {};
