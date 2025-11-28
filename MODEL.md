# Dynamic Asset Documentation

## Table of Contents

- [Overview](#overview)
- [dynamic-asset.proto](#dynamic-asset)
  - [Messages](#messages)
    - [DynamicAssetDetails](#dynamicassetdetails)
    - [DynamicAsset](#dynamicasset)
    - [DynamicAssetID](#dynamicassetid)
    - [DynamicAssetList](#dynamicassetlist)
    - [DynamicAssetFilter](#dynamicassetfilter)
- [Version Information](#version-information)
- [Support](#support)

## Overview

The Dynamic Asset provides a comprehensive data structure for managing dynamic asset within the system. This model supports identification: provides unique identifiers for dynamic asset, organizational context: links items to organizations via organizationid, metadata and audit: includes metadata and audit trails for tracking changes, and more. 

Key features of the {model_name.lower()} model include:
- **Identification**: Provides unique identifiers for dynamic asset
- **Organizational Context**: Links items to organizations via OrganizationID
- **Metadata and Audit**: Includes metadata and audit trails for tracking changes
- **Pagination Support**: Provides offset-based pagination for collections

## dynamic-asset.proto

### Package Information

- **Package Name**: `dynamicasset`
- **Go Package Path**: `github.com/sologenic/com-fs-dynamic-asset-model;dynamicasset`

### Overview

The `dynamic-asset.proto` file defines the core dynamic asset model for dynamic asset management. It provides message types for representing dynamic asset data and operations. The file integrates with external utility libraries: `metadata.proto`, `audit.proto`.

### Messages

#### DynamicAssetDetails {#dynamicassetdetails}

The `DynamicAssetDetails` message contains all the core information about a dynamicasset, including essential details and metadata.

**Field Table:**

| Field Name | Type | Required/Optional | Description |
|------------|------|-------------------|-------------|
| DynamicAssetID | `string` | Required | Unique identifier for the dynamicasset |
| Title | `string` | Required | Title value |
| Description | `string` | Required | Additional descriptive information about this item |
| Identifier | `string` | Required | Unique identifier for the identifier |
| OrganizationID | `string` | Required | UUID of the organization this item belongs to |
| AssetKeys | `string` | Optional | AssetKeys value |

**Use Cases:**
- Creating new dynamicasset records with complete information
- Updating dynamicasset information
- Associating items with specific organizations

**Important Notes:**
- The `DynamicAssetID` field must match a valid identifier format
- The `Identifier` field must match a valid identifier format
- The `OrganizationID` must be a valid UUID format

#### DynamicAsset {#dynamicasset}

The `DynamicAsset` message provides dynamicasset data and operations.

**Field Table:**

| Field Name | Type | Required/Optional | Description |
|------------|------|-------------------|-------------|
| DynamicAsset | `DynamicAssetDetails` | Required | DynamicAsset field |
| MetaData | `metadata.MetaData` | Required | Metadata information including network and version details |
| Audit | `audit.Audit` | Required | Audit trail information for tracking changes and access |

**Use Cases:**
- Creating new dynamicasset records
- Retrieving dynamicasset information
- Updating dynamicasset data

**Important Notes:**
- This message provides the dynamicasset representation

#### DynamicAssetID {#dynamicassetid}

The `DynamicAssetID` message provides dynamicassetid data and operations.

**Field Table:**

| Field Name | Type | Required/Optional | Description |
|------------|------|-------------------|-------------|
| DynamicAssetID | `string` | Required | Unique identifier for the dynamicasset |
| OrganizationID | `string` | Required | UUID of the organization this item belongs to |
| Network | `metadata.Network` | Optional | Metadata information including network and version details |

**Use Cases:**
- Creating new dynamicassetid records
- Retrieving dynamicassetid information
- Updating dynamicassetid data
- Associating items with specific organizations

**Important Notes:**
- The `DynamicAssetID` field must match a valid identifier format
- The `OrganizationID` must be a valid UUID format

#### DynamicAssetList {#dynamicassetlist}

The `DynamicAssetList` message represents a collection of dynamicassetlist with pagination support for handling large result sets.

**Field Table:**

| Field Name | Type | Required/Optional | Description |
|------------|------|-------------------|-------------|
| DynamicAssets | `DynamicAsset` | Optional | DynamicAssets field |
| Offset | `int32` | Optional | Offset field |
| Limit | `int32` | Optional | Limit field |
| Total | `int32` | Optional | Total field |

**Use Cases:**
- Returning paginated lists of dynamicassetlist from queries or searches
- Implementing pagination in dynamicassetlist listing APIs
- Handling large dynamicassetlist efficiently
- Providing continuation tokens for subsequent page requests

**Important Notes:**
- If `Offset` is not set (or is 0), it indicates that all available items have been returned
- Clients should use the `Offset` value in subsequent requests to retrieve the next page of results

#### DynamicAssetFilter {#dynamicassetfilter}

The `DynamicAssetFilter` message provides dynamicassetfilter data and operations.

**Field Table:**

| Field Name | Type | Required/Optional | Description |
|------------|------|-------------------|-------------|
| OrganizationID | `string` | Optional | UUID of the organization this item belongs to |
| Identifier | `string` | Optional | Unique identifier for the identifier |
| Network | `metadata.Network` | Optional | Metadata information including network and version details |
| Limit | `int32` | Optional | Limit field |
| Offset | `int32` | Optional | Offset field |

**Use Cases:**
- Creating new dynamicassetfilter records
- Retrieving dynamicassetfilter information
- Updating dynamicassetfilter data
- Associating items with specific organizations
- Providing continuation tokens for subsequent page requests

**Important Notes:**
- The `OrganizationID` must be a valid UUID format
- The `Identifier` field must match a valid identifier format
- If `Offset` is not set (or is 0), it indicates that all available items have been returned
- Clients should use the `Offset` value in subsequent requests to retrieve the next page of results

## Version Information

This documentation corresponds to the Protocol Buffer definitions in `dynamic-asset.proto`. The proto file(s) use `proto3` syntax. When referencing this documentation, ensure that the version of the proto files matches the version of the generated code and API implementations you are using.

## Support

For additional information and support:
- See `README.md` for project setup, installation, and usage instructions
- Refer to the Protocol Buffer definitions in `dynamic-asset.proto` for the authoritative source of truth
- Check the imported utility libraries for details on related types:
  - `sologenic/com-fs-utils-lib/models/metadata/metadata.proto`
  - `sologenic/com-fs-utils-lib/models/audit/audit.proto`
