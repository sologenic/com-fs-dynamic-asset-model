import _m0 from "protobufjs/minimal";
import { Audit } from "./sologenic/com-fs-utils-lib/models/audit/audit";
import { MetaData, Network } from "./sologenic/com-fs-utils-lib/models/metadata/metadata";
export declare const protobufPackage = "dynamicasset";
export interface DynamicAssetDetails {
    DynamicAssetID: string;
    Title: string;
    Description: string;
    Identifier: string;
    OrganizationID: string;
    AssetKeys: string[];
}
export interface DynamicAsset {
    DynamicAsset: DynamicAssetDetails | undefined;
    MetaData: MetaData | undefined;
    Audit: Audit | undefined;
}
export interface DynamicAssetID {
    DynamicAssetID: string;
    OrganizationID: string;
    Network?: Network | undefined;
}
export interface DynamicAssetList {
    DynamicAssets: DynamicAsset[];
    Offset?: number | undefined;
    Limit?: number | undefined;
    Total?: number | undefined;
}
export interface DynamicAssetFilter {
    OrganizationID?: string | undefined;
    Identifier?: string | undefined;
    Network?: Network | undefined;
    Limit?: number | undefined;
    Offset?: number | undefined;
}
export declare const DynamicAssetDetails: {
    encode(message: DynamicAssetDetails, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DynamicAssetDetails;
    fromJSON(object: any): DynamicAssetDetails;
    toJSON(message: DynamicAssetDetails): unknown;
    create<I extends {
        DynamicAssetID?: string | undefined;
        Title?: string | undefined;
        Description?: string | undefined;
        Identifier?: string | undefined;
        OrganizationID?: string | undefined;
        AssetKeys?: string[] | undefined;
    } & {
        DynamicAssetID?: string | undefined;
        Title?: string | undefined;
        Description?: string | undefined;
        Identifier?: string | undefined;
        OrganizationID?: string | undefined;
        AssetKeys?: (string[] & string[] & { [K in Exclude<keyof I["AssetKeys"], keyof string[]>]: never; }) | undefined;
    } & { [K_1 in Exclude<keyof I, keyof DynamicAssetDetails>]: never; }>(base?: I | undefined): DynamicAssetDetails;
    fromPartial<I_1 extends {
        DynamicAssetID?: string | undefined;
        Title?: string | undefined;
        Description?: string | undefined;
        Identifier?: string | undefined;
        OrganizationID?: string | undefined;
        AssetKeys?: string[] | undefined;
    } & {
        DynamicAssetID?: string | undefined;
        Title?: string | undefined;
        Description?: string | undefined;
        Identifier?: string | undefined;
        OrganizationID?: string | undefined;
        AssetKeys?: (string[] & string[] & { [K_2 in Exclude<keyof I_1["AssetKeys"], keyof string[]>]: never; }) | undefined;
    } & { [K_3 in Exclude<keyof I_1, keyof DynamicAssetDetails>]: never; }>(object: I_1): DynamicAssetDetails;
};
export declare const DynamicAsset: {
    encode(message: DynamicAsset, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DynamicAsset;
    fromJSON(object: any): DynamicAsset;
    toJSON(message: DynamicAsset): unknown;
    create<I extends {
        DynamicAsset?: {
            DynamicAssetID?: string | undefined;
            Title?: string | undefined;
            Description?: string | undefined;
            Identifier?: string | undefined;
            OrganizationID?: string | undefined;
            AssetKeys?: string[] | undefined;
        } | undefined;
        MetaData?: {
            Network?: Network | undefined;
            UpdatedAt?: Date | undefined;
            CreatedAt?: Date | undefined;
            UpdatedByAccount?: string | undefined;
        } | undefined;
        Audit?: {
            ChangedBy?: string | undefined;
            ChangedAt?: Date | undefined;
            Reason?: string | undefined;
        } | undefined;
    } & {
        DynamicAsset?: ({
            DynamicAssetID?: string | undefined;
            Title?: string | undefined;
            Description?: string | undefined;
            Identifier?: string | undefined;
            OrganizationID?: string | undefined;
            AssetKeys?: string[] | undefined;
        } & {
            DynamicAssetID?: string | undefined;
            Title?: string | undefined;
            Description?: string | undefined;
            Identifier?: string | undefined;
            OrganizationID?: string | undefined;
            AssetKeys?: (string[] & string[] & { [K in Exclude<keyof I["DynamicAsset"]["AssetKeys"], keyof string[]>]: never; }) | undefined;
        } & { [K_1 in Exclude<keyof I["DynamicAsset"], keyof DynamicAssetDetails>]: never; }) | undefined;
        MetaData?: ({
            Network?: Network | undefined;
            UpdatedAt?: Date | undefined;
            CreatedAt?: Date | undefined;
            UpdatedByAccount?: string | undefined;
        } & {
            Network?: Network | undefined;
            UpdatedAt?: Date | undefined;
            CreatedAt?: Date | undefined;
            UpdatedByAccount?: string | undefined;
        } & { [K_2 in Exclude<keyof I["MetaData"], keyof MetaData>]: never; }) | undefined;
        Audit?: ({
            ChangedBy?: string | undefined;
            ChangedAt?: Date | undefined;
            Reason?: string | undefined;
        } & {
            ChangedBy?: string | undefined;
            ChangedAt?: Date | undefined;
            Reason?: string | undefined;
        } & { [K_3 in Exclude<keyof I["Audit"], keyof Audit>]: never; }) | undefined;
    } & { [K_4 in Exclude<keyof I, keyof DynamicAsset>]: never; }>(base?: I | undefined): DynamicAsset;
    fromPartial<I_1 extends {
        DynamicAsset?: {
            DynamicAssetID?: string | undefined;
            Title?: string | undefined;
            Description?: string | undefined;
            Identifier?: string | undefined;
            OrganizationID?: string | undefined;
            AssetKeys?: string[] | undefined;
        } | undefined;
        MetaData?: {
            Network?: Network | undefined;
            UpdatedAt?: Date | undefined;
            CreatedAt?: Date | undefined;
            UpdatedByAccount?: string | undefined;
        } | undefined;
        Audit?: {
            ChangedBy?: string | undefined;
            ChangedAt?: Date | undefined;
            Reason?: string | undefined;
        } | undefined;
    } & {
        DynamicAsset?: ({
            DynamicAssetID?: string | undefined;
            Title?: string | undefined;
            Description?: string | undefined;
            Identifier?: string | undefined;
            OrganizationID?: string | undefined;
            AssetKeys?: string[] | undefined;
        } & {
            DynamicAssetID?: string | undefined;
            Title?: string | undefined;
            Description?: string | undefined;
            Identifier?: string | undefined;
            OrganizationID?: string | undefined;
            AssetKeys?: (string[] & string[] & { [K_5 in Exclude<keyof I_1["DynamicAsset"]["AssetKeys"], keyof string[]>]: never; }) | undefined;
        } & { [K_6 in Exclude<keyof I_1["DynamicAsset"], keyof DynamicAssetDetails>]: never; }) | undefined;
        MetaData?: ({
            Network?: Network | undefined;
            UpdatedAt?: Date | undefined;
            CreatedAt?: Date | undefined;
            UpdatedByAccount?: string | undefined;
        } & {
            Network?: Network | undefined;
            UpdatedAt?: Date | undefined;
            CreatedAt?: Date | undefined;
            UpdatedByAccount?: string | undefined;
        } & { [K_7 in Exclude<keyof I_1["MetaData"], keyof MetaData>]: never; }) | undefined;
        Audit?: ({
            ChangedBy?: string | undefined;
            ChangedAt?: Date | undefined;
            Reason?: string | undefined;
        } & {
            ChangedBy?: string | undefined;
            ChangedAt?: Date | undefined;
            Reason?: string | undefined;
        } & { [K_8 in Exclude<keyof I_1["Audit"], keyof Audit>]: never; }) | undefined;
    } & { [K_9 in Exclude<keyof I_1, keyof DynamicAsset>]: never; }>(object: I_1): DynamicAsset;
};
export declare const DynamicAssetID: {
    encode(message: DynamicAssetID, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DynamicAssetID;
    fromJSON(object: any): DynamicAssetID;
    toJSON(message: DynamicAssetID): unknown;
    create<I extends {
        DynamicAssetID?: string | undefined;
        OrganizationID?: string | undefined;
        Network?: Network | undefined;
    } & {
        DynamicAssetID?: string | undefined;
        OrganizationID?: string | undefined;
        Network?: Network | undefined;
    } & { [K in Exclude<keyof I, keyof DynamicAssetID>]: never; }>(base?: I | undefined): DynamicAssetID;
    fromPartial<I_1 extends {
        DynamicAssetID?: string | undefined;
        OrganizationID?: string | undefined;
        Network?: Network | undefined;
    } & {
        DynamicAssetID?: string | undefined;
        OrganizationID?: string | undefined;
        Network?: Network | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof DynamicAssetID>]: never; }>(object: I_1): DynamicAssetID;
};
export declare const DynamicAssetList: {
    encode(message: DynamicAssetList, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DynamicAssetList;
    fromJSON(object: any): DynamicAssetList;
    toJSON(message: DynamicAssetList): unknown;
    create<I extends {
        DynamicAssets?: {
            DynamicAsset?: {
                DynamicAssetID?: string | undefined;
                Title?: string | undefined;
                Description?: string | undefined;
                Identifier?: string | undefined;
                OrganizationID?: string | undefined;
                AssetKeys?: string[] | undefined;
            } | undefined;
            MetaData?: {
                Network?: Network | undefined;
                UpdatedAt?: Date | undefined;
                CreatedAt?: Date | undefined;
                UpdatedByAccount?: string | undefined;
            } | undefined;
            Audit?: {
                ChangedBy?: string | undefined;
                ChangedAt?: Date | undefined;
                Reason?: string | undefined;
            } | undefined;
        }[] | undefined;
        Offset?: number | undefined;
        Limit?: number | undefined;
        Total?: number | undefined;
    } & {
        DynamicAssets?: ({
            DynamicAsset?: {
                DynamicAssetID?: string | undefined;
                Title?: string | undefined;
                Description?: string | undefined;
                Identifier?: string | undefined;
                OrganizationID?: string | undefined;
                AssetKeys?: string[] | undefined;
            } | undefined;
            MetaData?: {
                Network?: Network | undefined;
                UpdatedAt?: Date | undefined;
                CreatedAt?: Date | undefined;
                UpdatedByAccount?: string | undefined;
            } | undefined;
            Audit?: {
                ChangedBy?: string | undefined;
                ChangedAt?: Date | undefined;
                Reason?: string | undefined;
            } | undefined;
        }[] & ({
            DynamicAsset?: {
                DynamicAssetID?: string | undefined;
                Title?: string | undefined;
                Description?: string | undefined;
                Identifier?: string | undefined;
                OrganizationID?: string | undefined;
                AssetKeys?: string[] | undefined;
            } | undefined;
            MetaData?: {
                Network?: Network | undefined;
                UpdatedAt?: Date | undefined;
                CreatedAt?: Date | undefined;
                UpdatedByAccount?: string | undefined;
            } | undefined;
            Audit?: {
                ChangedBy?: string | undefined;
                ChangedAt?: Date | undefined;
                Reason?: string | undefined;
            } | undefined;
        } & {
            DynamicAsset?: ({
                DynamicAssetID?: string | undefined;
                Title?: string | undefined;
                Description?: string | undefined;
                Identifier?: string | undefined;
                OrganizationID?: string | undefined;
                AssetKeys?: string[] | undefined;
            } & {
                DynamicAssetID?: string | undefined;
                Title?: string | undefined;
                Description?: string | undefined;
                Identifier?: string | undefined;
                OrganizationID?: string | undefined;
                AssetKeys?: (string[] & string[] & { [K in Exclude<keyof I["DynamicAssets"][number]["DynamicAsset"]["AssetKeys"], keyof string[]>]: never; }) | undefined;
            } & { [K_1 in Exclude<keyof I["DynamicAssets"][number]["DynamicAsset"], keyof DynamicAssetDetails>]: never; }) | undefined;
            MetaData?: ({
                Network?: Network | undefined;
                UpdatedAt?: Date | undefined;
                CreatedAt?: Date | undefined;
                UpdatedByAccount?: string | undefined;
            } & {
                Network?: Network | undefined;
                UpdatedAt?: Date | undefined;
                CreatedAt?: Date | undefined;
                UpdatedByAccount?: string | undefined;
            } & { [K_2 in Exclude<keyof I["DynamicAssets"][number]["MetaData"], keyof MetaData>]: never; }) | undefined;
            Audit?: ({
                ChangedBy?: string | undefined;
                ChangedAt?: Date | undefined;
                Reason?: string | undefined;
            } & {
                ChangedBy?: string | undefined;
                ChangedAt?: Date | undefined;
                Reason?: string | undefined;
            } & { [K_3 in Exclude<keyof I["DynamicAssets"][number]["Audit"], keyof Audit>]: never; }) | undefined;
        } & { [K_4 in Exclude<keyof I["DynamicAssets"][number], keyof DynamicAsset>]: never; })[] & { [K_5 in Exclude<keyof I["DynamicAssets"], keyof {
            DynamicAsset?: {
                DynamicAssetID?: string | undefined;
                Title?: string | undefined;
                Description?: string | undefined;
                Identifier?: string | undefined;
                OrganizationID?: string | undefined;
                AssetKeys?: string[] | undefined;
            } | undefined;
            MetaData?: {
                Network?: Network | undefined;
                UpdatedAt?: Date | undefined;
                CreatedAt?: Date | undefined;
                UpdatedByAccount?: string | undefined;
            } | undefined;
            Audit?: {
                ChangedBy?: string | undefined;
                ChangedAt?: Date | undefined;
                Reason?: string | undefined;
            } | undefined;
        }[]>]: never; }) | undefined;
        Offset?: number | undefined;
        Limit?: number | undefined;
        Total?: number | undefined;
    } & { [K_6 in Exclude<keyof I, keyof DynamicAssetList>]: never; }>(base?: I | undefined): DynamicAssetList;
    fromPartial<I_1 extends {
        DynamicAssets?: {
            DynamicAsset?: {
                DynamicAssetID?: string | undefined;
                Title?: string | undefined;
                Description?: string | undefined;
                Identifier?: string | undefined;
                OrganizationID?: string | undefined;
                AssetKeys?: string[] | undefined;
            } | undefined;
            MetaData?: {
                Network?: Network | undefined;
                UpdatedAt?: Date | undefined;
                CreatedAt?: Date | undefined;
                UpdatedByAccount?: string | undefined;
            } | undefined;
            Audit?: {
                ChangedBy?: string | undefined;
                ChangedAt?: Date | undefined;
                Reason?: string | undefined;
            } | undefined;
        }[] | undefined;
        Offset?: number | undefined;
        Limit?: number | undefined;
        Total?: number | undefined;
    } & {
        DynamicAssets?: ({
            DynamicAsset?: {
                DynamicAssetID?: string | undefined;
                Title?: string | undefined;
                Description?: string | undefined;
                Identifier?: string | undefined;
                OrganizationID?: string | undefined;
                AssetKeys?: string[] | undefined;
            } | undefined;
            MetaData?: {
                Network?: Network | undefined;
                UpdatedAt?: Date | undefined;
                CreatedAt?: Date | undefined;
                UpdatedByAccount?: string | undefined;
            } | undefined;
            Audit?: {
                ChangedBy?: string | undefined;
                ChangedAt?: Date | undefined;
                Reason?: string | undefined;
            } | undefined;
        }[] & ({
            DynamicAsset?: {
                DynamicAssetID?: string | undefined;
                Title?: string | undefined;
                Description?: string | undefined;
                Identifier?: string | undefined;
                OrganizationID?: string | undefined;
                AssetKeys?: string[] | undefined;
            } | undefined;
            MetaData?: {
                Network?: Network | undefined;
                UpdatedAt?: Date | undefined;
                CreatedAt?: Date | undefined;
                UpdatedByAccount?: string | undefined;
            } | undefined;
            Audit?: {
                ChangedBy?: string | undefined;
                ChangedAt?: Date | undefined;
                Reason?: string | undefined;
            } | undefined;
        } & {
            DynamicAsset?: ({
                DynamicAssetID?: string | undefined;
                Title?: string | undefined;
                Description?: string | undefined;
                Identifier?: string | undefined;
                OrganizationID?: string | undefined;
                AssetKeys?: string[] | undefined;
            } & {
                DynamicAssetID?: string | undefined;
                Title?: string | undefined;
                Description?: string | undefined;
                Identifier?: string | undefined;
                OrganizationID?: string | undefined;
                AssetKeys?: (string[] & string[] & { [K_7 in Exclude<keyof I_1["DynamicAssets"][number]["DynamicAsset"]["AssetKeys"], keyof string[]>]: never; }) | undefined;
            } & { [K_8 in Exclude<keyof I_1["DynamicAssets"][number]["DynamicAsset"], keyof DynamicAssetDetails>]: never; }) | undefined;
            MetaData?: ({
                Network?: Network | undefined;
                UpdatedAt?: Date | undefined;
                CreatedAt?: Date | undefined;
                UpdatedByAccount?: string | undefined;
            } & {
                Network?: Network | undefined;
                UpdatedAt?: Date | undefined;
                CreatedAt?: Date | undefined;
                UpdatedByAccount?: string | undefined;
            } & { [K_9 in Exclude<keyof I_1["DynamicAssets"][number]["MetaData"], keyof MetaData>]: never; }) | undefined;
            Audit?: ({
                ChangedBy?: string | undefined;
                ChangedAt?: Date | undefined;
                Reason?: string | undefined;
            } & {
                ChangedBy?: string | undefined;
                ChangedAt?: Date | undefined;
                Reason?: string | undefined;
            } & { [K_10 in Exclude<keyof I_1["DynamicAssets"][number]["Audit"], keyof Audit>]: never; }) | undefined;
        } & { [K_11 in Exclude<keyof I_1["DynamicAssets"][number], keyof DynamicAsset>]: never; })[] & { [K_12 in Exclude<keyof I_1["DynamicAssets"], keyof {
            DynamicAsset?: {
                DynamicAssetID?: string | undefined;
                Title?: string | undefined;
                Description?: string | undefined;
                Identifier?: string | undefined;
                OrganizationID?: string | undefined;
                AssetKeys?: string[] | undefined;
            } | undefined;
            MetaData?: {
                Network?: Network | undefined;
                UpdatedAt?: Date | undefined;
                CreatedAt?: Date | undefined;
                UpdatedByAccount?: string | undefined;
            } | undefined;
            Audit?: {
                ChangedBy?: string | undefined;
                ChangedAt?: Date | undefined;
                Reason?: string | undefined;
            } | undefined;
        }[]>]: never; }) | undefined;
        Offset?: number | undefined;
        Limit?: number | undefined;
        Total?: number | undefined;
    } & { [K_13 in Exclude<keyof I_1, keyof DynamicAssetList>]: never; }>(object: I_1): DynamicAssetList;
};
export declare const DynamicAssetFilter: {
    encode(message: DynamicAssetFilter, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DynamicAssetFilter;
    fromJSON(object: any): DynamicAssetFilter;
    toJSON(message: DynamicAssetFilter): unknown;
    create<I extends {
        OrganizationID?: string | undefined;
        Identifier?: string | undefined;
        Network?: Network | undefined;
        Limit?: number | undefined;
        Offset?: number | undefined;
    } & {
        OrganizationID?: string | undefined;
        Identifier?: string | undefined;
        Network?: Network | undefined;
        Limit?: number | undefined;
        Offset?: number | undefined;
    } & { [K in Exclude<keyof I, keyof DynamicAssetFilter>]: never; }>(base?: I | undefined): DynamicAssetFilter;
    fromPartial<I_1 extends {
        OrganizationID?: string | undefined;
        Identifier?: string | undefined;
        Network?: Network | undefined;
        Limit?: number | undefined;
        Offset?: number | undefined;
    } & {
        OrganizationID?: string | undefined;
        Identifier?: string | undefined;
        Network?: Network | undefined;
        Limit?: number | undefined;
        Offset?: number | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof DynamicAssetFilter>]: never; }>(object: I_1): DynamicAssetFilter;
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
