# Dynamic Asset Model

The dynamic asset proto provides all the functionality required to interact with the dynamic asset management service.

## Parts of the proto

The proto has been split into multiple files to make it easier to maintain and update.

- `dynamic-asset.proto` - Dynamic asset details and related data structures
- `admin-dynamicasset-grpc.proto` - GRPC service for admin operations (CRUD)
- `dynamic-asset-grpc.proto` - GRPC service for client operations (read-only)

## Dynamic Asset Management: Multi-organizational Support

The dynamic asset service is multi-organizational. This means that dynamic assets are scoped to specific organizations and identified by organization and identifier string.

```protobuf
message DynamicAssetDetails {
    string DynamicAssetID = 1; 
    string Title = 2; 
    string Description = 3; 
    string Identifier = 4; // Unique identifier string (e.g., "news", "promotions") used by FE to identify the asset collection
    string OrganizationID = 5; // UUID of the organization
    repeated string AssetKeys = 6; // Array of asset keys (strings) - applications must fetch full asset details separately
}
```

### Asset Key Architecture

Dynamic assets now store only `AssetKeys` (strings) rather than full asset objects. This provides several benefits:

- **Data Consistency**: Asset information remains synchronized with the main asset database
- **Reduced Storage**: Smaller dynamic asset records
- **Separation of Concerns**: Asset management and dynamic asset grouping are decoupled
- **Performance**: Faster dynamic asset operations, asset details fetched only when needed

**Usage Pattern:**
1. Store dynamic asset with `AssetKeys: ["asset-key-1", "asset-key-2"]`
2. When displaying, webapp calls the asset service: `GET /asset/{asset-key}` for each key
3. Combine dynamic asset metadata with fresh asset details### Organization Scoping

Dynamic assets are identified by a combination of:

- `OrganizationID` - The organization that owns the asset
- `Identifier` - A string identifier (e.g., "news", "promotions", "banners")

This allows multiple organizations to have their own sets of dynamic assets with the same identifier strings without conflicts.

### Admin vs Client Access

The service provides two distinct access patterns:

**Admin Access (admin-dynamicasset-grpc.proto):**

- Upsert operations (Create or Update in single call)
- Read operations (Get by ID)
- Delete operations
- List operations with filtering
- Status management (activate/deactivate)
- Audit trail access

**Client Access (dynamic-asset-grpc.proto):**

- Read-only access via identifier
- Returns single DynamicAsset by identifier and organization
- Simplified interface for frontend consumption

## Client

The client for golang and typescript are provided in the `/client` directory.

## Start the service

The client is self initializing. For this it requires the following environment variable:

- `DYNAMIC_ASSET_STORE` - The host of the service. Host is in the format `host:port`
- `DYNAMIC_ASSET_STORE_TESTING` - Starts the GRPC service in testmode with an in memory buffer. Presence of the variable with the value `TRUE` is required to put the client in test mode.

If the client is included and none of the env variables are set, the client panics.

## Building the required files

Generating these files can be done by running a build script with following command, which will also generate TypeScript files, a build dir and add newly generated files and dir to git commit.

```sh
./bin/build.sh
```

This will generate:

- Go protobuf files (\*.pb.go)
- TypeScript files (\*.ts)
- Compiled JavaScript files (build/\*.js)
- Type definition files (build/\*.d.ts)
