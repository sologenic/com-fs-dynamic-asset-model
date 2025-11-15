# Dynamic Asset Model Documentation

## Table of Contents

1. [Overview](#overview)
2. [dynamic-asset.proto](#dynamic-assetproto)
3. [dynamic-asset-grpc.proto](#dynamic-asset-grpcproto)
4. [admin-dynamicasset-grpc.proto](#admin-dynamicasset-grpcproto)
5. [Version Information](#version-information)
6. [Support](#support)

---

## Overview

The Dynamic Asset Model provides a flexible system for managing dynamic content assets within organizations. These assets can represent various types of configurable content (such as news, promotions, announcements, etc.) that can be retrieved by users and managed by administrators.

### Key Features

- **Multi-organization support**: Assets are scoped to specific organizations via `OrganizationID`
- **Identifier-based retrieval**: Assets can be accessed using human-readable identifiers (e.g., "news", "promotions")
- **Network awareness**: Optional network context for multi-network deployments
- **Metadata and audit trails**: Built-in support for metadata and audit tracking
- **Flexible key-value storage**: Assets can contain multiple key-value pairs via `AssetKeys`
- **Admin and user services**: Separate gRPC services for administrative management and user retrieval
- **Filtering and pagination**: Support for listing and filtering assets with offset/limit pagination

---

## dynamic-asset.proto

Core dynamic asset model containing the fundamental data structures and filters.

### Package Information

- **Package**: `dynamicasset`
- **Go Package**: `github.com/sologenic/com-fs-dynamic-asset-model;dynamicasset`

### Dependencies

- `sologenic/com-fs-utils-lib/models/metadata/metadata.proto`
- `sologenic/com-fs-utils-lib/models/audit/audit.proto`

### Messages

#### DynamicAssetDetails

Core details of a dynamic asset.

| Field Name     | Type            | Required/Optional | Description                                                       |
| -------------- | --------------- | ----------------- | ----------------------------------------------------------------- |
| DynamicAssetID | string          | Required          | Unique identifier for the dynamic asset                           |
| Title          | string          | Required          | Human-readable title of the asset                                 |
| Description    | string          | Required          | Detailed description of the asset's purpose or content            |
| Identifier     | string          | Required          | String identifier used for retrieval (e.g., "news", "promotions") |
| OrganizationID | string          | Required          | Organization that owns this asset                                 |
| AssetKeys      | repeated string | Optional          | Array of keys for additional asset data/configuration             |

**Use Cases**:

- Storing the core identifying information for a dynamic asset
- Providing searchable metadata for asset retrieval
- Linking multiple configuration keys to a single asset

**Important Notes**:

- The `Identifier` field should be unique within an organization for proper retrieval
- `AssetKeys` can be used to reference additional data structures or configurations

---

#### DynamicAsset

Complete dynamic asset with metadata and audit information.

| Field Name   | Type                | Required/Optional | Description                                             |
| ------------ | ------------------- | ----------------- | ------------------------------------------------------- |
| DynamicAsset | DynamicAssetDetails | Required          | Core asset details                                      |
| MetaData     | metadata.MetaData   | Required          | Metadata information (network, timestamps, etc.)        |
| Audit        | audit.Audit         | Required          | Audit trail information (created by, modified by, etc.) |

**Use Cases**:

- Full representation of a dynamic asset with complete tracking
- Returned by API calls that need full asset information
- Used in upsert operations to create or update assets

**Important Notes**:

- This is the complete asset structure used in most API operations
- Metadata and audit fields are automatically managed by the system

---

#### DynamicAssetID

Identifier for looking up a specific dynamic asset.

| Field Name     | Type             | Required/Optional | Description                            |
| -------------- | ---------------- | ----------------- | -------------------------------------- |
| DynamicAssetID | string           | Required          | Unique identifier of the dynamic asset |
| OrganizationID | string           | Required          | Organization that owns the asset       |
| Network        | metadata.Network | Optional          | Network context for the lookup         |

**Use Cases**:

- Deleting a specific dynamic asset
- Looking up an asset by its ID
- Referencing assets across services

**Important Notes**:

- Both `DynamicAssetID` and `OrganizationID` are required for proper scoping
- Network is optional but recommended in multi-network deployments

---

#### DynamicAssetList

Paginated list of dynamic assets.

| Field Name    | Type                  | Required/Optional | Description                         |
| ------------- | --------------------- | ----------------- | ----------------------------------- |
| DynamicAssets | repeated DynamicAsset | Required          | Array of dynamic assets             |
| Offset        | int32                 | Optional          | Starting position in the result set |
| Limit         | int32                 | Optional          | Maximum number of results requested |
| Total         | int32                 | Optional          | Total number of matching assets     |

**Use Cases**:

- Returning paginated results from list operations
- Providing count information for pagination UI
- Bulk asset retrieval with filtering

**Important Notes**:

- `Total` represents the total count of matching assets, not just those returned
- Used in conjunction with `DynamicAssetFilter` for querying

---

#### DynamicAssetFilter

Filter criteria for querying dynamic assets.

| Field Name     | Type             | Required/Optional | Description                                         |
| -------------- | ---------------- | ----------------- | --------------------------------------------------- |
| OrganizationID | string           | Optional          | Filter by organization                              |
| Identifier     | string           | Optional          | Filter by identifier string                         |
| Network        | metadata.Network | Optional          | Filter by network                                   |
| Limit          | int32            | Optional          | Maximum number of results (default: system-defined) |
| Offset         | int32            | Optional          | Starting position (default: 0)                      |

**Use Cases**:

- Listing all assets for an organization
- Finding assets by identifier
- Implementing pagination in asset lists
- Network-specific asset queries

**Important Notes**:

- All fields are optional; an empty filter returns all assets (subject to pagination)
- Combining filters creates an AND condition
- Recommended to always specify `OrganizationID` for performance

---

## dynamic-asset-grpc.proto

User-facing gRPC service for retrieving dynamic assets.

### Package Information

- **Package**: `dynamicasset`
- **Go Package**: `github.com/sologenic/com-fs-dynamic-asset-model;dynamicasset`

### Dependencies

- `sologenic/com-fs-utils-lib/models/metadata/metadata.proto`
- `dynamic-asset.proto`

### Services

#### UserDynamicAssetService

Public service for users to retrieve dynamic assets.

##### GetByIdentifier

Retrieves a dynamic asset by its identifier string.

**Signature**: `rpc GetByIdentifier (UserDynamicAssetRequest) returns (DynamicAsset)`

**Request Parameters** (`UserDynamicAssetRequest`):

| Field Name     | Type             | Required/Optional | Description                                        |
| -------------- | ---------------- | ----------------- | -------------------------------------------------- |
| OrganizationID | string           | Required          | Organization ID to query                           |
| Identifier     | string           | Required          | The identifier string (e.g., "news", "promotions") |
| Network        | metadata.Network | Optional          | Network context for the request                    |

**Response**: Returns a complete `DynamicAsset` object

**Behavior**:

- Looks up a dynamic asset by its human-readable identifier
- Scoped to the specified organization
- Optional network filtering for multi-network deployments

**Use Cases**:

- Mobile/web apps fetching configuration by identifier
- Retrieving promotional content by name
- Loading dynamic news feeds or announcements

**Error Conditions**:

- Returns error if identifier not found in organization
- Returns error if organization doesn't exist
- May return error if network mismatch (when network is specified)

---

## admin-dynamicasset-grpc.proto

Administrative gRPC service for managing dynamic assets (create, update, delete, list).

### Package Information

- **Package**: `dynamicasset`
- **Go Package**: `github.com/sologenic/com-fs-dynamic-asset-model;dynamicasset`

### Dependencies

- `google/protobuf/empty.proto`
- `sologenic/com-fs-utils-lib/models/metadata/metadata.proto`
- `dynamic-asset.proto`

### Services

#### AdminDynamicAssetService

Administrative service for managing dynamic assets.

##### Upsert

Creates a new dynamic asset or updates an existing one.

**Signature**: `rpc Upsert (DynamicAsset) returns (DynamicAssetID)`

**Request Parameters**: Complete `DynamicAsset` object

**Response**: Returns the `DynamicAssetID` of the created/updated asset

**Behavior**:

- If `DynamicAssetID` is empty or doesn't exist, creates a new asset
- If `DynamicAssetID` exists, updates the existing asset
- Automatically updates audit information
- Automatically updates metadata timestamps

**Use Cases**:

- Creating new dynamic content assets
- Updating existing asset configurations
- Bulk asset management operations

**Error Conditions**:

- Returns error if required fields are missing
- Returns error if organization doesn't exist
- May return error on validation failures

---

##### Delete

Deletes a dynamic asset.

**Signature**: `rpc Delete (DynamicAssetID) returns (google.protobuf.Empty)`

**Request Parameters**: `DynamicAssetID` object specifying the asset to delete

**Response**: Empty response on success

**Behavior**:

- Permanently removes the specified dynamic asset
- Requires both `DynamicAssetID` and `OrganizationID`

**Use Cases**:

- Removing obsolete dynamic content
- Cleaning up test assets
- Asset lifecycle management

**Error Conditions**:

- Returns error if asset doesn't exist
- Returns error if organization doesn't match
- May return error if insufficient permissions

---

##### List

Lists dynamic assets with optional filtering.

**Signature**: `rpc List (DynamicAssetFilter) returns (DynamicAssetList)`

**Request Parameters**: `DynamicAssetFilter` for filtering and pagination

**Response**: Returns a `DynamicAssetList` with matching assets

**Behavior**:

- Returns paginated list of dynamic assets
- Applies filters as specified
- Includes total count for pagination

**Use Cases**:

- Admin dashboards listing all assets
- Bulk export operations
- Asset discovery and management
- Filtering assets by organization or identifier

**Error Conditions**:

- Returns error if invalid filter parameters
- May return error on permission issues

---

### Messages

#### DynamicAssetStatusMessage

Status message for dynamic asset operations.

| Field Name     | Type             | Required/Optional | Description             |
| -------------- | ---------------- | ----------------- | ----------------------- |
| DynamicAssetID | string           | Required          | ID of the dynamic asset |
| OrganizationID | string           | Required          | Organization ID         |
| Network        | metadata.Network | Optional          | Network context         |

**Use Cases**:

- Status updates for async operations
- Event notifications for asset changes
- Audit trail entries

---

#### DynamicAssetAuditFilter

Filter for querying dynamic asset audit trails.

| Field Name     | Type             | Required/Optional | Description                       |
| -------------- | ---------------- | ----------------- | --------------------------------- |
| DynamicAssetID | string           | Optional          | Filter by specific asset ID       |
| OrganizationID | string           | Optional          | Filter by organization            |
| ChangedBy      | string           | Optional          | Filter by UserID who made changes |
| Network        | metadata.Network | Optional          | Filter by network                 |
| Limit          | int32            | Optional          | Maximum results to return         |
| Offset         | int32            | Optional          | Starting position for pagination  |

**Use Cases**:

- Auditing changes to dynamic assets
- Tracking who modified assets
- Compliance and security reviews
- Historical analysis of asset changes

**Important Notes**:

- All fields are optional for flexible audit queries
- `ChangedBy` references the UserID from the audit system
- Useful for compliance and debugging purposes

---

## Version Information

This documentation corresponds to the current version of the proto files in this repository. When the proto files are updated, this documentation should be regenerated using the instructions in `.cursorrules`.

---

## Support

For more information about this project:

- See [README.md](README.md) for setup and usage instructions
- See [.cursorrules](.cursorrules) for documentation regeneration instructions
- Refer to the proto files for the authoritative API definitions

For issues or questions, please contact the development team or refer to the project's issue tracker.
