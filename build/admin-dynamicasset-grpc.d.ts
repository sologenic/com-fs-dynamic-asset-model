/// <reference types="node" />
/// <reference types="node" />
import { type CallOptions, ChannelCredentials, Client, type ClientOptions, type ClientUnaryCall, type handleUnaryCall, Metadata, type ServiceError, type UntypedServiceImplementation } from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";
import { DynamicAsset, DynamicAssetFilter, DynamicAssetID, DynamicAssetList } from "./dynamic-asset";
import { Empty } from "./google/protobuf/empty";
import { Network } from "./sologenic/com-fs-utils-lib/models/metadata/metadata";
export declare const protobufPackage = "dynamicasset";
export interface DynamicAssetStatusMessage {
    DynamicAssetID: string;
    OrganizationID: string;
    Network?: Network | undefined;
}
export interface DynamicAssetAuditFilter {
    DynamicAssetID?: string | undefined;
    OrganizationID?: string | undefined;
    /** UserID who made the changes */
    ChangedBy?: string | undefined;
    Network?: Network | undefined;
    Limit?: number | undefined;
    Offset?: number | undefined;
}
export declare const DynamicAssetStatusMessage: {
    encode(message: DynamicAssetStatusMessage, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DynamicAssetStatusMessage;
    fromJSON(object: any): DynamicAssetStatusMessage;
    toJSON(message: DynamicAssetStatusMessage): unknown;
    create<I extends {
        DynamicAssetID?: string | undefined;
        OrganizationID?: string | undefined;
        Network?: Network | undefined;
    } & {
        DynamicAssetID?: string | undefined;
        OrganizationID?: string | undefined;
        Network?: Network | undefined;
    } & { [K in Exclude<keyof I, keyof DynamicAssetStatusMessage>]: never; }>(base?: I | undefined): DynamicAssetStatusMessage;
    fromPartial<I_1 extends {
        DynamicAssetID?: string | undefined;
        OrganizationID?: string | undefined;
        Network?: Network | undefined;
    } & {
        DynamicAssetID?: string | undefined;
        OrganizationID?: string | undefined;
        Network?: Network | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof DynamicAssetStatusMessage>]: never; }>(object: I_1): DynamicAssetStatusMessage;
};
export declare const DynamicAssetAuditFilter: {
    encode(message: DynamicAssetAuditFilter, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DynamicAssetAuditFilter;
    fromJSON(object: any): DynamicAssetAuditFilter;
    toJSON(message: DynamicAssetAuditFilter): unknown;
    create<I extends {
        DynamicAssetID?: string | undefined;
        OrganizationID?: string | undefined;
        ChangedBy?: string | undefined;
        Network?: Network | undefined;
        Limit?: number | undefined;
        Offset?: number | undefined;
    } & {
        DynamicAssetID?: string | undefined;
        OrganizationID?: string | undefined;
        ChangedBy?: string | undefined;
        Network?: Network | undefined;
        Limit?: number | undefined;
        Offset?: number | undefined;
    } & { [K in Exclude<keyof I, keyof DynamicAssetAuditFilter>]: never; }>(base?: I | undefined): DynamicAssetAuditFilter;
    fromPartial<I_1 extends {
        DynamicAssetID?: string | undefined;
        OrganizationID?: string | undefined;
        ChangedBy?: string | undefined;
        Network?: Network | undefined;
        Limit?: number | undefined;
        Offset?: number | undefined;
    } & {
        DynamicAssetID?: string | undefined;
        OrganizationID?: string | undefined;
        ChangedBy?: string | undefined;
        Network?: Network | undefined;
        Limit?: number | undefined;
        Offset?: number | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof DynamicAssetAuditFilter>]: never; }>(object: I_1): DynamicAssetAuditFilter;
};
export type AdminDynamicAssetServiceService = typeof AdminDynamicAssetServiceService;
export declare const AdminDynamicAssetServiceService: {
    /** Create a new dynamic asset */
    readonly create: {
        readonly path: "/dynamicasset.AdminDynamicAssetService/Create";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DynamicAsset) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DynamicAsset;
        readonly responseSerialize: (value: DynamicAssetID) => Buffer;
        readonly responseDeserialize: (value: Buffer) => DynamicAssetID;
    };
    /** Update an existing dynamic asset */
    readonly update: {
        readonly path: "/dynamicasset.AdminDynamicAssetService/Update";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DynamicAsset) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DynamicAsset;
        readonly responseSerialize: (value: DynamicAssetID) => Buffer;
        readonly responseDeserialize: (value: Buffer) => DynamicAssetID;
    };
    /** Delete a dynamic asset */
    readonly delete: {
        readonly path: "/dynamicasset.AdminDynamicAssetService/Delete";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DynamicAssetID) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DynamicAssetID;
        readonly responseSerialize: (value: Empty) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Empty;
    };
    /** List dynamic assets with filtering */
    readonly list: {
        readonly path: "/dynamicasset.AdminDynamicAssetService/List";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DynamicAssetFilter) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DynamicAssetFilter;
        readonly responseSerialize: (value: DynamicAssetList) => Buffer;
        readonly responseDeserialize: (value: Buffer) => DynamicAssetList;
    };
};
export interface AdminDynamicAssetServiceServer extends UntypedServiceImplementation {
    /** Create a new dynamic asset */
    create: handleUnaryCall<DynamicAsset, DynamicAssetID>;
    /** Update an existing dynamic asset */
    update: handleUnaryCall<DynamicAsset, DynamicAssetID>;
    /** Delete a dynamic asset */
    delete: handleUnaryCall<DynamicAssetID, Empty>;
    /** List dynamic assets with filtering */
    list: handleUnaryCall<DynamicAssetFilter, DynamicAssetList>;
}
export interface AdminDynamicAssetServiceClient extends Client {
    /** Create a new dynamic asset */
    create(request: DynamicAsset, callback: (error: ServiceError | null, response: DynamicAssetID) => void): ClientUnaryCall;
    create(request: DynamicAsset, metadata: Metadata, callback: (error: ServiceError | null, response: DynamicAssetID) => void): ClientUnaryCall;
    create(request: DynamicAsset, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: DynamicAssetID) => void): ClientUnaryCall;
    /** Update an existing dynamic asset */
    update(request: DynamicAsset, callback: (error: ServiceError | null, response: DynamicAssetID) => void): ClientUnaryCall;
    update(request: DynamicAsset, metadata: Metadata, callback: (error: ServiceError | null, response: DynamicAssetID) => void): ClientUnaryCall;
    update(request: DynamicAsset, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: DynamicAssetID) => void): ClientUnaryCall;
    /** Delete a dynamic asset */
    delete(request: DynamicAssetID, callback: (error: ServiceError | null, response: Empty) => void): ClientUnaryCall;
    delete(request: DynamicAssetID, metadata: Metadata, callback: (error: ServiceError | null, response: Empty) => void): ClientUnaryCall;
    delete(request: DynamicAssetID, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Empty) => void): ClientUnaryCall;
    /** List dynamic assets with filtering */
    list(request: DynamicAssetFilter, callback: (error: ServiceError | null, response: DynamicAssetList) => void): ClientUnaryCall;
    list(request: DynamicAssetFilter, metadata: Metadata, callback: (error: ServiceError | null, response: DynamicAssetList) => void): ClientUnaryCall;
    list(request: DynamicAssetFilter, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: DynamicAssetList) => void): ClientUnaryCall;
}
export declare const AdminDynamicAssetServiceClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): AdminDynamicAssetServiceClient;
    service: typeof AdminDynamicAssetServiceService;
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
