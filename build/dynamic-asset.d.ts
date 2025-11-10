import _m0 from "protobufjs/minimal";
import { Asset } from "./sologenic/com-fs-asset-model/asset";
import { Audit } from "./sologenic/com-fs-utils-lib/models/audit/audit";
import { MetaData, Network } from "./sologenic/com-fs-utils-lib/models/metadata/metadata";
export declare const protobufPackage = "dynamicasset";
export interface DynamicAssetDetails {
    DynamicAssetID: string;
    Title: string;
    Description: string;
    Identifier: string;
    OrganizationID: string;
    Assets: Asset[];
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
        Assets?: {
            AssetDetails?: {
                ID?: string | undefined;
                OrganizationID?: string | undefined;
                Status?: import("./sologenic/com-fs-asset-model/asset").AssetStatus | undefined;
                Reason?: import("./sologenic/com-fs-asset-model/asset").Reason | undefined;
                Type?: import("./sologenic/com-fs-asset-model/asset").AssetType | undefined;
                Denom?: {
                    Currency?: {
                        Symbol?: string | undefined;
                        Version?: string | undefined;
                    } | undefined;
                    Subunit?: string | undefined;
                    Issuer?: string | undefined;
                    Precision?: number | undefined;
                    Description?: string | undefined;
                } | undefined;
                IsIssuedInSmartContract?: boolean | undefined;
                SmartContractIssuerAddr?: string | undefined;
                RealEstateDetails?: {
                    Address?: string | undefined;
                    Bathrooms?: number | undefined;
                    Bedrooms?: number | undefined;
                    Latitude?: number | undefined;
                    Longitude?: number | undefined;
                    OwnershipType?: string | undefined;
                    PropertyType?: string | undefined;
                    RiskRating?: string | undefined;
                    SquareFootage?: number | undefined;
                    TenancyStatus?: string | undefined;
                    YearBuilt?: number | undefined;
                    YieldPercent?: number[] | undefined;
                } | undefined;
                StableCoinDetails?: {
                    Version?: string | undefined;
                    PegType?: string | undefined;
                    PegRatio?: number | undefined;
                    BackingAsset?: string | undefined;
                    ExchangeTickerSymbol?: string | undefined;
                    Exchange?: string | undefined;
                    MinTransactionAmount?: number | undefined;
                    TradingMarginPercentage?: number | undefined;
                    AssetMarginPercentage?: number | undefined;
                } | undefined;
                CommodityDetails?: {
                    Category?: string | undefined;
                    Quality?: string | undefined;
                    UnitOfMeasure?: string | undefined;
                    Quantity?: number | undefined;
                    OriginCountry?: string | undefined;
                    ExchangeTickerSymbol?: string | undefined;
                    Exchange?: string | undefined;
                    MinTransactionAmount?: number | undefined;
                    StorageLocation?: string | undefined;
                    ContractType?: string | undefined;
                    DeliveryDate?: string | undefined;
                } | undefined;
                CollectibleDetails?: {
                    Category?: string | undefined;
                    CollectionName?: string | undefined;
                    TokenStandard?: string | undefined;
                    TokenID?: string | undefined;
                    MetadataURI?: string | undefined;
                    Creator?: string | undefined;
                    OwnershipHistory?: string[] | undefined;
                    CurrentOwner?: string | undefined;
                } | undefined;
                VehicleDetails?: {
                    Category?: string | undefined;
                    Manufacturer?: string | undefined;
                    Model?: string | undefined;
                    SerialNumber?: string | undefined;
                    Year?: number | undefined;
                    Specifications?: string | undefined;
                    FuelType?: string | undefined;
                    UsageHours?: number | undefined;
                    Mileage?: number | undefined;
                    Condition?: string | undefined;
                    CurrentOwner?: string | undefined;
                    Location?: string | undefined;
                } | undefined;
                IntellectualPropertyDetails?: {
                    Category?: string | undefined;
                    Owner?: string | undefined;
                    RegistrationNumber?: string | undefined;
                    FilingDate?: string | undefined;
                    ExpirationDate?: string | undefined;
                    IPJurisdictionIDs?: string[] | undefined;
                    LicenseType?: string | undefined;
                    LicenseTerms?: string | undefined;
                    Value?: number | undefined;
                } | undefined;
                InvestmentFundDetails?: {
                    FundType?: string | undefined;
                    Exchange?: string | undefined;
                    ISIN?: string | undefined;
                    NAV?: number | undefined;
                    InceptionDate?: string | undefined;
                    Manager?: string | undefined;
                    ExpenseRatio?: number | undefined;
                    Holdings?: string[] | undefined;
                } | undefined;
                EquityDetails?: {
                    ExchangeTickerSymbol?: string | undefined;
                    Exchange?: string | undefined;
                    MinTransactionAmount?: string | undefined;
                    ExtraPercentage?: string | undefined;
                    AssetMarginPercentage?: string | undefined;
                } | undefined;
                FinancialProperties?: {
                    Symbol?: string | undefined;
                    Issuer?: string | undefined;
                    JurisdictionIDs?: string[] | undefined;
                    JurisdictionRestrictions?: string | undefined;
                    RedemptionTerms?: string | undefined;
                    ComplianceRequired?: boolean | undefined;
                    Type?: string | undefined;
                    TradeAllowances?: string[] | undefined;
                    Transferable?: boolean | undefined;
                    Platform?: string | undefined;
                    PlatformType?: string | undefined;
                    ContractAddress?: string | undefined;
                    Fractional?: boolean | undefined;
                    TotalSupply?: number | undefined;
                    DecimalPlacesSupply?: number | undefined;
                    Subunit?: string | undefined;
                    Price?: number | undefined;
                    DecimalPlacesPrice?: number | undefined;
                    Currency?: string | undefined;
                    InitialValuation?: number | undefined;
                    CurrentValuation?: number | undefined;
                    ValuationDate?: string | undefined;
                    Network?: Network | undefined;
                    Status?: string | undefined;
                } | undefined;
                Description?: {
                    Name?: string | undefined;
                    Description?: string | undefined;
                    Logo?: {
                        Reference?: string | undefined;
                        Extension?: string | undefined;
                        Name?: string | undefined;
                    } | undefined;
                    AssetID?: string | undefined;
                    URL?: string | undefined;
                    Country?: string | undefined;
                    Documents?: string[] | undefined;
                    Images?: string[] | undefined;
                    Vertical?: string | undefined;
                    CreatedAt?: string | undefined;
                    UpdatedAt?: string | undefined;
                } | undefined;
                ExternalResources?: {
                    Links?: {
                        Type?: import("./sologenic/com-fs-asset-model/asset").LinkType | undefined;
                        URL?: string | undefined;
                    }[] | undefined;
                    Socials?: {
                        Type?: import("./sologenic/com-fs-asset-model/asset").SocialMediaType | undefined;
                        URL?: string | undefined;
                    }[] | undefined;
                } | undefined;
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
            IssuerDetails?: {
                Name?: string | undefined;
                Description?: string | undefined;
                Image?: string | undefined;
                ExternalUrl?: string | undefined;
                AddressLine1?: string | undefined;
                AddressLine2?: string | undefined;
                City?: string | undefined;
                Region?: string | undefined;
                PostalCode?: string | undefined;
                Country?: string | undefined;
                YearFounded?: number | undefined;
                Licensed?: boolean | undefined;
                LicenseCountry?: string | undefined;
                LicenseNumber?: string | undefined;
                Phone?: string | undefined;
                Email?: string | undefined;
                SocialMediaLinks?: string[] | undefined;
                KeyClients?: string | undefined;
                Press?: string | undefined;
            } | undefined;
        }[] | undefined;
    } & {
        DynamicAssetID?: string | undefined;
        Title?: string | undefined;
        Description?: string | undefined;
        Identifier?: string | undefined;
        OrganizationID?: string | undefined;
        Assets?: ({
            AssetDetails?: {
                ID?: string | undefined;
                OrganizationID?: string | undefined;
                Status?: import("./sologenic/com-fs-asset-model/asset").AssetStatus | undefined;
                Reason?: import("./sologenic/com-fs-asset-model/asset").Reason | undefined;
                Type?: import("./sologenic/com-fs-asset-model/asset").AssetType | undefined;
                Denom?: {
                    Currency?: {
                        Symbol?: string | undefined;
                        Version?: string | undefined;
                    } | undefined;
                    Subunit?: string | undefined;
                    Issuer?: string | undefined;
                    Precision?: number | undefined;
                    Description?: string | undefined;
                } | undefined;
                IsIssuedInSmartContract?: boolean | undefined;
                SmartContractIssuerAddr?: string | undefined;
                RealEstateDetails?: {
                    Address?: string | undefined;
                    Bathrooms?: number | undefined;
                    Bedrooms?: number | undefined;
                    Latitude?: number | undefined;
                    Longitude?: number | undefined;
                    OwnershipType?: string | undefined;
                    PropertyType?: string | undefined;
                    RiskRating?: string | undefined;
                    SquareFootage?: number | undefined;
                    TenancyStatus?: string | undefined;
                    YearBuilt?: number | undefined;
                    YieldPercent?: number[] | undefined;
                } | undefined;
                StableCoinDetails?: {
                    Version?: string | undefined;
                    PegType?: string | undefined;
                    PegRatio?: number | undefined;
                    BackingAsset?: string | undefined;
                    ExchangeTickerSymbol?: string | undefined;
                    Exchange?: string | undefined;
                    MinTransactionAmount?: number | undefined;
                    TradingMarginPercentage?: number | undefined;
                    AssetMarginPercentage?: number | undefined;
                } | undefined;
                CommodityDetails?: {
                    Category?: string | undefined;
                    Quality?: string | undefined;
                    UnitOfMeasure?: string | undefined;
                    Quantity?: number | undefined;
                    OriginCountry?: string | undefined;
                    ExchangeTickerSymbol?: string | undefined;
                    Exchange?: string | undefined;
                    MinTransactionAmount?: number | undefined;
                    StorageLocation?: string | undefined;
                    ContractType?: string | undefined;
                    DeliveryDate?: string | undefined;
                } | undefined;
                CollectibleDetails?: {
                    Category?: string | undefined;
                    CollectionName?: string | undefined;
                    TokenStandard?: string | undefined;
                    TokenID?: string | undefined;
                    MetadataURI?: string | undefined;
                    Creator?: string | undefined;
                    OwnershipHistory?: string[] | undefined;
                    CurrentOwner?: string | undefined;
                } | undefined;
                VehicleDetails?: {
                    Category?: string | undefined;
                    Manufacturer?: string | undefined;
                    Model?: string | undefined;
                    SerialNumber?: string | undefined;
                    Year?: number | undefined;
                    Specifications?: string | undefined;
                    FuelType?: string | undefined;
                    UsageHours?: number | undefined;
                    Mileage?: number | undefined;
                    Condition?: string | undefined;
                    CurrentOwner?: string | undefined;
                    Location?: string | undefined;
                } | undefined;
                IntellectualPropertyDetails?: {
                    Category?: string | undefined;
                    Owner?: string | undefined;
                    RegistrationNumber?: string | undefined;
                    FilingDate?: string | undefined;
                    ExpirationDate?: string | undefined;
                    IPJurisdictionIDs?: string[] | undefined;
                    LicenseType?: string | undefined;
                    LicenseTerms?: string | undefined;
                    Value?: number | undefined;
                } | undefined;
                InvestmentFundDetails?: {
                    FundType?: string | undefined;
                    Exchange?: string | undefined;
                    ISIN?: string | undefined;
                    NAV?: number | undefined;
                    InceptionDate?: string | undefined;
                    Manager?: string | undefined;
                    ExpenseRatio?: number | undefined;
                    Holdings?: string[] | undefined;
                } | undefined;
                EquityDetails?: {
                    ExchangeTickerSymbol?: string | undefined;
                    Exchange?: string | undefined;
                    MinTransactionAmount?: string | undefined;
                    ExtraPercentage?: string | undefined;
                    AssetMarginPercentage?: string | undefined;
                } | undefined;
                FinancialProperties?: {
                    Symbol?: string | undefined;
                    Issuer?: string | undefined;
                    JurisdictionIDs?: string[] | undefined;
                    JurisdictionRestrictions?: string | undefined;
                    RedemptionTerms?: string | undefined;
                    ComplianceRequired?: boolean | undefined;
                    Type?: string | undefined;
                    TradeAllowances?: string[] | undefined;
                    Transferable?: boolean | undefined;
                    Platform?: string | undefined;
                    PlatformType?: string | undefined;
                    ContractAddress?: string | undefined;
                    Fractional?: boolean | undefined;
                    TotalSupply?: number | undefined;
                    DecimalPlacesSupply?: number | undefined;
                    Subunit?: string | undefined;
                    Price?: number | undefined;
                    DecimalPlacesPrice?: number | undefined;
                    Currency?: string | undefined;
                    InitialValuation?: number | undefined;
                    CurrentValuation?: number | undefined;
                    ValuationDate?: string | undefined;
                    Network?: Network | undefined;
                    Status?: string | undefined;
                } | undefined;
                Description?: {
                    Name?: string | undefined;
                    Description?: string | undefined;
                    Logo?: {
                        Reference?: string | undefined;
                        Extension?: string | undefined;
                        Name?: string | undefined;
                    } | undefined;
                    AssetID?: string | undefined;
                    URL?: string | undefined;
                    Country?: string | undefined;
                    Documents?: string[] | undefined;
                    Images?: string[] | undefined;
                    Vertical?: string | undefined;
                    CreatedAt?: string | undefined;
                    UpdatedAt?: string | undefined;
                } | undefined;
                ExternalResources?: {
                    Links?: {
                        Type?: import("./sologenic/com-fs-asset-model/asset").LinkType | undefined;
                        URL?: string | undefined;
                    }[] | undefined;
                    Socials?: {
                        Type?: import("./sologenic/com-fs-asset-model/asset").SocialMediaType | undefined;
                        URL?: string | undefined;
                    }[] | undefined;
                } | undefined;
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
            IssuerDetails?: {
                Name?: string | undefined;
                Description?: string | undefined;
                Image?: string | undefined;
                ExternalUrl?: string | undefined;
                AddressLine1?: string | undefined;
                AddressLine2?: string | undefined;
                City?: string | undefined;
                Region?: string | undefined;
                PostalCode?: string | undefined;
                Country?: string | undefined;
                YearFounded?: number | undefined;
                Licensed?: boolean | undefined;
                LicenseCountry?: string | undefined;
                LicenseNumber?: string | undefined;
                Phone?: string | undefined;
                Email?: string | undefined;
                SocialMediaLinks?: string[] | undefined;
                KeyClients?: string | undefined;
                Press?: string | undefined;
            } | undefined;
        }[] & ({
            AssetDetails?: {
                ID?: string | undefined;
                OrganizationID?: string | undefined;
                Status?: import("./sologenic/com-fs-asset-model/asset").AssetStatus | undefined;
                Reason?: import("./sologenic/com-fs-asset-model/asset").Reason | undefined;
                Type?: import("./sologenic/com-fs-asset-model/asset").AssetType | undefined;
                Denom?: {
                    Currency?: {
                        Symbol?: string | undefined;
                        Version?: string | undefined;
                    } | undefined;
                    Subunit?: string | undefined;
                    Issuer?: string | undefined;
                    Precision?: number | undefined;
                    Description?: string | undefined;
                } | undefined;
                IsIssuedInSmartContract?: boolean | undefined;
                SmartContractIssuerAddr?: string | undefined;
                RealEstateDetails?: {
                    Address?: string | undefined;
                    Bathrooms?: number | undefined;
                    Bedrooms?: number | undefined;
                    Latitude?: number | undefined;
                    Longitude?: number | undefined;
                    OwnershipType?: string | undefined;
                    PropertyType?: string | undefined;
                    RiskRating?: string | undefined;
                    SquareFootage?: number | undefined;
                    TenancyStatus?: string | undefined;
                    YearBuilt?: number | undefined;
                    YieldPercent?: number[] | undefined;
                } | undefined;
                StableCoinDetails?: {
                    Version?: string | undefined;
                    PegType?: string | undefined;
                    PegRatio?: number | undefined;
                    BackingAsset?: string | undefined;
                    ExchangeTickerSymbol?: string | undefined;
                    Exchange?: string | undefined;
                    MinTransactionAmount?: number | undefined;
                    TradingMarginPercentage?: number | undefined;
                    AssetMarginPercentage?: number | undefined;
                } | undefined;
                CommodityDetails?: {
                    Category?: string | undefined;
                    Quality?: string | undefined;
                    UnitOfMeasure?: string | undefined;
                    Quantity?: number | undefined;
                    OriginCountry?: string | undefined;
                    ExchangeTickerSymbol?: string | undefined;
                    Exchange?: string | undefined;
                    MinTransactionAmount?: number | undefined;
                    StorageLocation?: string | undefined;
                    ContractType?: string | undefined;
                    DeliveryDate?: string | undefined;
                } | undefined;
                CollectibleDetails?: {
                    Category?: string | undefined;
                    CollectionName?: string | undefined;
                    TokenStandard?: string | undefined;
                    TokenID?: string | undefined;
                    MetadataURI?: string | undefined;
                    Creator?: string | undefined;
                    OwnershipHistory?: string[] | undefined;
                    CurrentOwner?: string | undefined;
                } | undefined;
                VehicleDetails?: {
                    Category?: string | undefined;
                    Manufacturer?: string | undefined;
                    Model?: string | undefined;
                    SerialNumber?: string | undefined;
                    Year?: number | undefined;
                    Specifications?: string | undefined;
                    FuelType?: string | undefined;
                    UsageHours?: number | undefined;
                    Mileage?: number | undefined;
                    Condition?: string | undefined;
                    CurrentOwner?: string | undefined;
                    Location?: string | undefined;
                } | undefined;
                IntellectualPropertyDetails?: {
                    Category?: string | undefined;
                    Owner?: string | undefined;
                    RegistrationNumber?: string | undefined;
                    FilingDate?: string | undefined;
                    ExpirationDate?: string | undefined;
                    IPJurisdictionIDs?: string[] | undefined;
                    LicenseType?: string | undefined;
                    LicenseTerms?: string | undefined;
                    Value?: number | undefined;
                } | undefined;
                InvestmentFundDetails?: {
                    FundType?: string | undefined;
                    Exchange?: string | undefined;
                    ISIN?: string | undefined;
                    NAV?: number | undefined;
                    InceptionDate?: string | undefined;
                    Manager?: string | undefined;
                    ExpenseRatio?: number | undefined;
                    Holdings?: string[] | undefined;
                } | undefined;
                EquityDetails?: {
                    ExchangeTickerSymbol?: string | undefined;
                    Exchange?: string | undefined;
                    MinTransactionAmount?: string | undefined;
                    ExtraPercentage?: string | undefined;
                    AssetMarginPercentage?: string | undefined;
                } | undefined;
                FinancialProperties?: {
                    Symbol?: string | undefined;
                    Issuer?: string | undefined;
                    JurisdictionIDs?: string[] | undefined;
                    JurisdictionRestrictions?: string | undefined;
                    RedemptionTerms?: string | undefined;
                    ComplianceRequired?: boolean | undefined;
                    Type?: string | undefined;
                    TradeAllowances?: string[] | undefined;
                    Transferable?: boolean | undefined;
                    Platform?: string | undefined;
                    PlatformType?: string | undefined;
                    ContractAddress?: string | undefined;
                    Fractional?: boolean | undefined;
                    TotalSupply?: number | undefined;
                    DecimalPlacesSupply?: number | undefined;
                    Subunit?: string | undefined;
                    Price?: number | undefined;
                    DecimalPlacesPrice?: number | undefined;
                    Currency?: string | undefined;
                    InitialValuation?: number | undefined;
                    CurrentValuation?: number | undefined;
                    ValuationDate?: string | undefined;
                    Network?: Network | undefined;
                    Status?: string | undefined;
                } | undefined;
                Description?: {
                    Name?: string | undefined;
                    Description?: string | undefined;
                    Logo?: {
                        Reference?: string | undefined;
                        Extension?: string | undefined;
                        Name?: string | undefined;
                    } | undefined;
                    AssetID?: string | undefined;
                    URL?: string | undefined;
                    Country?: string | undefined;
                    Documents?: string[] | undefined;
                    Images?: string[] | undefined;
                    Vertical?: string | undefined;
                    CreatedAt?: string | undefined;
                    UpdatedAt?: string | undefined;
                } | undefined;
                ExternalResources?: {
                    Links?: {
                        Type?: import("./sologenic/com-fs-asset-model/asset").LinkType | undefined;
                        URL?: string | undefined;
                    }[] | undefined;
                    Socials?: {
                        Type?: import("./sologenic/com-fs-asset-model/asset").SocialMediaType | undefined;
                        URL?: string | undefined;
                    }[] | undefined;
                } | undefined;
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
            IssuerDetails?: {
                Name?: string | undefined;
                Description?: string | undefined;
                Image?: string | undefined;
                ExternalUrl?: string | undefined;
                AddressLine1?: string | undefined;
                AddressLine2?: string | undefined;
                City?: string | undefined;
                Region?: string | undefined;
                PostalCode?: string | undefined;
                Country?: string | undefined;
                YearFounded?: number | undefined;
                Licensed?: boolean | undefined;
                LicenseCountry?: string | undefined;
                LicenseNumber?: string | undefined;
                Phone?: string | undefined;
                Email?: string | undefined;
                SocialMediaLinks?: string[] | undefined;
                KeyClients?: string | undefined;
                Press?: string | undefined;
            } | undefined;
        } & {
            AssetDetails?: ({
                ID?: string | undefined;
                OrganizationID?: string | undefined;
                Status?: import("./sologenic/com-fs-asset-model/asset").AssetStatus | undefined;
                Reason?: import("./sologenic/com-fs-asset-model/asset").Reason | undefined;
                Type?: import("./sologenic/com-fs-asset-model/asset").AssetType | undefined;
                Denom?: {
                    Currency?: {
                        Symbol?: string | undefined;
                        Version?: string | undefined;
                    } | undefined;
                    Subunit?: string | undefined;
                    Issuer?: string | undefined;
                    Precision?: number | undefined;
                    Description?: string | undefined;
                } | undefined;
                IsIssuedInSmartContract?: boolean | undefined;
                SmartContractIssuerAddr?: string | undefined;
                RealEstateDetails?: {
                    Address?: string | undefined;
                    Bathrooms?: number | undefined;
                    Bedrooms?: number | undefined;
                    Latitude?: number | undefined;
                    Longitude?: number | undefined;
                    OwnershipType?: string | undefined;
                    PropertyType?: string | undefined;
                    RiskRating?: string | undefined;
                    SquareFootage?: number | undefined;
                    TenancyStatus?: string | undefined;
                    YearBuilt?: number | undefined;
                    YieldPercent?: number[] | undefined;
                } | undefined;
                StableCoinDetails?: {
                    Version?: string | undefined;
                    PegType?: string | undefined;
                    PegRatio?: number | undefined;
                    BackingAsset?: string | undefined;
                    ExchangeTickerSymbol?: string | undefined;
                    Exchange?: string | undefined;
                    MinTransactionAmount?: number | undefined;
                    TradingMarginPercentage?: number | undefined;
                    AssetMarginPercentage?: number | undefined;
                } | undefined;
                CommodityDetails?: {
                    Category?: string | undefined;
                    Quality?: string | undefined;
                    UnitOfMeasure?: string | undefined;
                    Quantity?: number | undefined;
                    OriginCountry?: string | undefined;
                    ExchangeTickerSymbol?: string | undefined;
                    Exchange?: string | undefined;
                    MinTransactionAmount?: number | undefined;
                    StorageLocation?: string | undefined;
                    ContractType?: string | undefined;
                    DeliveryDate?: string | undefined;
                } | undefined;
                CollectibleDetails?: {
                    Category?: string | undefined;
                    CollectionName?: string | undefined;
                    TokenStandard?: string | undefined;
                    TokenID?: string | undefined;
                    MetadataURI?: string | undefined;
                    Creator?: string | undefined;
                    OwnershipHistory?: string[] | undefined;
                    CurrentOwner?: string | undefined;
                } | undefined;
                VehicleDetails?: {
                    Category?: string | undefined;
                    Manufacturer?: string | undefined;
                    Model?: string | undefined;
                    SerialNumber?: string | undefined;
                    Year?: number | undefined;
                    Specifications?: string | undefined;
                    FuelType?: string | undefined;
                    UsageHours?: number | undefined;
                    Mileage?: number | undefined;
                    Condition?: string | undefined;
                    CurrentOwner?: string | undefined;
                    Location?: string | undefined;
                } | undefined;
                IntellectualPropertyDetails?: {
                    Category?: string | undefined;
                    Owner?: string | undefined;
                    RegistrationNumber?: string | undefined;
                    FilingDate?: string | undefined;
                    ExpirationDate?: string | undefined;
                    IPJurisdictionIDs?: string[] | undefined;
                    LicenseType?: string | undefined;
                    LicenseTerms?: string | undefined;
                    Value?: number | undefined;
                } | undefined;
                InvestmentFundDetails?: {
                    FundType?: string | undefined;
                    Exchange?: string | undefined;
                    ISIN?: string | undefined;
                    NAV?: number | undefined;
                    InceptionDate?: string | undefined;
                    Manager?: string | undefined;
                    ExpenseRatio?: number | undefined;
                    Holdings?: string[] | undefined;
                } | undefined;
                EquityDetails?: {
                    ExchangeTickerSymbol?: string | undefined;
                    Exchange?: string | undefined;
                    MinTransactionAmount?: string | undefined;
                    ExtraPercentage?: string | undefined;
                    AssetMarginPercentage?: string | undefined;
                } | undefined;
                FinancialProperties?: {
                    Symbol?: string | undefined;
                    Issuer?: string | undefined;
                    JurisdictionIDs?: string[] | undefined;
                    JurisdictionRestrictions?: string | undefined;
                    RedemptionTerms?: string | undefined;
                    ComplianceRequired?: boolean | undefined;
                    Type?: string | undefined;
                    TradeAllowances?: string[] | undefined;
                    Transferable?: boolean | undefined;
                    Platform?: string | undefined;
                    PlatformType?: string | undefined;
                    ContractAddress?: string | undefined;
                    Fractional?: boolean | undefined;
                    TotalSupply?: number | undefined;
                    DecimalPlacesSupply?: number | undefined;
                    Subunit?: string | undefined;
                    Price?: number | undefined;
                    DecimalPlacesPrice?: number | undefined;
                    Currency?: string | undefined;
                    InitialValuation?: number | undefined;
                    CurrentValuation?: number | undefined;
                    ValuationDate?: string | undefined;
                    Network?: Network | undefined;
                    Status?: string | undefined;
                } | undefined;
                Description?: {
                    Name?: string | undefined;
                    Description?: string | undefined;
                    Logo?: {
                        Reference?: string | undefined;
                        Extension?: string | undefined;
                        Name?: string | undefined;
                    } | undefined;
                    AssetID?: string | undefined;
                    URL?: string | undefined;
                    Country?: string | undefined;
                    Documents?: string[] | undefined;
                    Images?: string[] | undefined;
                    Vertical?: string | undefined;
                    CreatedAt?: string | undefined;
                    UpdatedAt?: string | undefined;
                } | undefined;
                ExternalResources?: {
                    Links?: {
                        Type?: import("./sologenic/com-fs-asset-model/asset").LinkType | undefined;
                        URL?: string | undefined;
                    }[] | undefined;
                    Socials?: {
                        Type?: import("./sologenic/com-fs-asset-model/asset").SocialMediaType | undefined;
                        URL?: string | undefined;
                    }[] | undefined;
                } | undefined;
            } & {
                ID?: string | undefined;
                OrganizationID?: string | undefined;
                Status?: import("./sologenic/com-fs-asset-model/asset").AssetStatus | undefined;
                Reason?: import("./sologenic/com-fs-asset-model/asset").Reason | undefined;
                Type?: import("./sologenic/com-fs-asset-model/asset").AssetType | undefined;
                Denom?: ({
                    Currency?: {
                        Symbol?: string | undefined;
                        Version?: string | undefined;
                    } | undefined;
                    Subunit?: string | undefined;
                    Issuer?: string | undefined;
                    Precision?: number | undefined;
                    Description?: string | undefined;
                } & {
                    Currency?: ({
                        Symbol?: string | undefined;
                        Version?: string | undefined;
                    } & {
                        Symbol?: string | undefined;
                        Version?: string | undefined;
                    } & { [K in Exclude<keyof I["Assets"][number]["AssetDetails"]["Denom"]["Currency"], keyof import("./sologenic/com-fs-asset-model/domain/currency/currency").Currency>]: never; }) | undefined;
                    Subunit?: string | undefined;
                    Issuer?: string | undefined;
                    Precision?: number | undefined;
                    Description?: string | undefined;
                } & { [K_1 in Exclude<keyof I["Assets"][number]["AssetDetails"]["Denom"], keyof import("./sologenic/com-fs-asset-model/domain/denom/denom").Denom>]: never; }) | undefined;
                IsIssuedInSmartContract?: boolean | undefined;
                SmartContractIssuerAddr?: string | undefined;
                RealEstateDetails?: ({
                    Address?: string | undefined;
                    Bathrooms?: number | undefined;
                    Bedrooms?: number | undefined;
                    Latitude?: number | undefined;
                    Longitude?: number | undefined;
                    OwnershipType?: string | undefined;
                    PropertyType?: string | undefined;
                    RiskRating?: string | undefined;
                    SquareFootage?: number | undefined;
                    TenancyStatus?: string | undefined;
                    YearBuilt?: number | undefined;
                    YieldPercent?: number[] | undefined;
                } & {
                    Address?: string | undefined;
                    Bathrooms?: number | undefined;
                    Bedrooms?: number | undefined;
                    Latitude?: number | undefined;
                    Longitude?: number | undefined;
                    OwnershipType?: string | undefined;
                    PropertyType?: string | undefined;
                    RiskRating?: string | undefined;
                    SquareFootage?: number | undefined;
                    TenancyStatus?: string | undefined;
                    YearBuilt?: number | undefined;
                    YieldPercent?: (number[] & number[] & { [K_2 in Exclude<keyof I["Assets"][number]["AssetDetails"]["RealEstateDetails"]["YieldPercent"], keyof number[]>]: never; }) | undefined;
                } & { [K_3 in Exclude<keyof I["Assets"][number]["AssetDetails"]["RealEstateDetails"], keyof import("./sologenic/com-fs-asset-model/asset").RealEstate>]: never; }) | undefined;
                StableCoinDetails?: ({
                    Version?: string | undefined;
                    PegType?: string | undefined;
                    PegRatio?: number | undefined;
                    BackingAsset?: string | undefined;
                    ExchangeTickerSymbol?: string | undefined;
                    Exchange?: string | undefined;
                    MinTransactionAmount?: number | undefined;
                    TradingMarginPercentage?: number | undefined;
                    AssetMarginPercentage?: number | undefined;
                } & {
                    Version?: string | undefined;
                    PegType?: string | undefined;
                    PegRatio?: number | undefined;
                    BackingAsset?: string | undefined;
                    ExchangeTickerSymbol?: string | undefined;
                    Exchange?: string | undefined;
                    MinTransactionAmount?: number | undefined;
                    TradingMarginPercentage?: number | undefined;
                    AssetMarginPercentage?: number | undefined;
                } & { [K_4 in Exclude<keyof I["Assets"][number]["AssetDetails"]["StableCoinDetails"], keyof import("./sologenic/com-fs-asset-model/asset").StableCoin>]: never; }) | undefined;
                CommodityDetails?: ({
                    Category?: string | undefined;
                    Quality?: string | undefined;
                    UnitOfMeasure?: string | undefined;
                    Quantity?: number | undefined;
                    OriginCountry?: string | undefined;
                    ExchangeTickerSymbol?: string | undefined;
                    Exchange?: string | undefined;
                    MinTransactionAmount?: number | undefined;
                    StorageLocation?: string | undefined;
                    ContractType?: string | undefined;
                    DeliveryDate?: string | undefined;
                } & {
                    Category?: string | undefined;
                    Quality?: string | undefined;
                    UnitOfMeasure?: string | undefined;
                    Quantity?: number | undefined;
                    OriginCountry?: string | undefined;
                    ExchangeTickerSymbol?: string | undefined;
                    Exchange?: string | undefined;
                    MinTransactionAmount?: number | undefined;
                    StorageLocation?: string | undefined;
                    ContractType?: string | undefined;
                    DeliveryDate?: string | undefined;
                } & { [K_5 in Exclude<keyof I["Assets"][number]["AssetDetails"]["CommodityDetails"], keyof import("./sologenic/com-fs-asset-model/asset").Commodity>]: never; }) | undefined;
                CollectibleDetails?: ({
                    Category?: string | undefined;
                    CollectionName?: string | undefined;
                    TokenStandard?: string | undefined;
                    TokenID?: string | undefined;
                    MetadataURI?: string | undefined;
                    Creator?: string | undefined;
                    OwnershipHistory?: string[] | undefined;
                    CurrentOwner?: string | undefined;
                } & {
                    Category?: string | undefined;
                    CollectionName?: string | undefined;
                    TokenStandard?: string | undefined;
                    TokenID?: string | undefined;
                    MetadataURI?: string | undefined;
                    Creator?: string | undefined;
                    OwnershipHistory?: (string[] & string[] & { [K_6 in Exclude<keyof I["Assets"][number]["AssetDetails"]["CollectibleDetails"]["OwnershipHistory"], keyof string[]>]: never; }) | undefined;
                    CurrentOwner?: string | undefined;
                } & { [K_7 in Exclude<keyof I["Assets"][number]["AssetDetails"]["CollectibleDetails"], keyof import("./sologenic/com-fs-asset-model/asset").Collectible>]: never; }) | undefined;
                VehicleDetails?: ({
                    Category?: string | undefined;
                    Manufacturer?: string | undefined;
                    Model?: string | undefined;
                    SerialNumber?: string | undefined;
                    Year?: number | undefined;
                    Specifications?: string | undefined;
                    FuelType?: string | undefined;
                    UsageHours?: number | undefined;
                    Mileage?: number | undefined;
                    Condition?: string | undefined;
                    CurrentOwner?: string | undefined;
                    Location?: string | undefined;
                } & {
                    Category?: string | undefined;
                    Manufacturer?: string | undefined;
                    Model?: string | undefined;
                    SerialNumber?: string | undefined;
                    Year?: number | undefined;
                    Specifications?: string | undefined;
                    FuelType?: string | undefined;
                    UsageHours?: number | undefined;
                    Mileage?: number | undefined;
                    Condition?: string | undefined;
                    CurrentOwner?: string | undefined;
                    Location?: string | undefined;
                } & { [K_8 in Exclude<keyof I["Assets"][number]["AssetDetails"]["VehicleDetails"], keyof import("./sologenic/com-fs-asset-model/asset").Vehicle>]: never; }) | undefined;
                IntellectualPropertyDetails?: ({
                    Category?: string | undefined;
                    Owner?: string | undefined;
                    RegistrationNumber?: string | undefined;
                    FilingDate?: string | undefined;
                    ExpirationDate?: string | undefined;
                    IPJurisdictionIDs?: string[] | undefined;
                    LicenseType?: string | undefined;
                    LicenseTerms?: string | undefined;
                    Value?: number | undefined;
                } & {
                    Category?: string | undefined;
                    Owner?: string | undefined;
                    RegistrationNumber?: string | undefined;
                    FilingDate?: string | undefined;
                    ExpirationDate?: string | undefined;
                    IPJurisdictionIDs?: (string[] & string[] & { [K_9 in Exclude<keyof I["Assets"][number]["AssetDetails"]["IntellectualPropertyDetails"]["IPJurisdictionIDs"], keyof string[]>]: never; }) | undefined;
                    LicenseType?: string | undefined;
                    LicenseTerms?: string | undefined;
                    Value?: number | undefined;
                } & { [K_10 in Exclude<keyof I["Assets"][number]["AssetDetails"]["IntellectualPropertyDetails"], keyof import("./sologenic/com-fs-asset-model/asset").IntellectualProperty>]: never; }) | undefined;
                InvestmentFundDetails?: ({
                    FundType?: string | undefined;
                    Exchange?: string | undefined;
                    ISIN?: string | undefined;
                    NAV?: number | undefined;
                    InceptionDate?: string | undefined;
                    Manager?: string | undefined;
                    ExpenseRatio?: number | undefined;
                    Holdings?: string[] | undefined;
                } & {
                    FundType?: string | undefined;
                    Exchange?: string | undefined;
                    ISIN?: string | undefined;
                    NAV?: number | undefined;
                    InceptionDate?: string | undefined;
                    Manager?: string | undefined;
                    ExpenseRatio?: number | undefined;
                    Holdings?: (string[] & string[] & { [K_11 in Exclude<keyof I["Assets"][number]["AssetDetails"]["InvestmentFundDetails"]["Holdings"], keyof string[]>]: never; }) | undefined;
                } & { [K_12 in Exclude<keyof I["Assets"][number]["AssetDetails"]["InvestmentFundDetails"], keyof import("./sologenic/com-fs-asset-model/asset").InvestmentFund>]: never; }) | undefined;
                EquityDetails?: ({
                    ExchangeTickerSymbol?: string | undefined;
                    Exchange?: string | undefined;
                    MinTransactionAmount?: string | undefined;
                    ExtraPercentage?: string | undefined;
                    AssetMarginPercentage?: string | undefined;
                } & {
                    ExchangeTickerSymbol?: string | undefined;
                    Exchange?: string | undefined;
                    MinTransactionAmount?: string | undefined;
                    ExtraPercentage?: string | undefined;
                    AssetMarginPercentage?: string | undefined;
                } & { [K_13 in Exclude<keyof I["Assets"][number]["AssetDetails"]["EquityDetails"], keyof import("./sologenic/com-fs-asset-model/asset").Equity>]: never; }) | undefined;
                FinancialProperties?: ({
                    Symbol?: string | undefined;
                    Issuer?: string | undefined;
                    JurisdictionIDs?: string[] | undefined;
                    JurisdictionRestrictions?: string | undefined;
                    RedemptionTerms?: string | undefined;
                    ComplianceRequired?: boolean | undefined;
                    Type?: string | undefined;
                    TradeAllowances?: string[] | undefined;
                    Transferable?: boolean | undefined;
                    Platform?: string | undefined;
                    PlatformType?: string | undefined;
                    ContractAddress?: string | undefined;
                    Fractional?: boolean | undefined;
                    TotalSupply?: number | undefined;
                    DecimalPlacesSupply?: number | undefined;
                    Subunit?: string | undefined;
                    Price?: number | undefined;
                    DecimalPlacesPrice?: number | undefined;
                    Currency?: string | undefined;
                    InitialValuation?: number | undefined;
                    CurrentValuation?: number | undefined;
                    ValuationDate?: string | undefined;
                    Network?: Network | undefined;
                    Status?: string | undefined;
                } & {
                    Symbol?: string | undefined;
                    Issuer?: string | undefined;
                    JurisdictionIDs?: (string[] & string[] & { [K_14 in Exclude<keyof I["Assets"][number]["AssetDetails"]["FinancialProperties"]["JurisdictionIDs"], keyof string[]>]: never; }) | undefined;
                    JurisdictionRestrictions?: string | undefined;
                    RedemptionTerms?: string | undefined;
                    ComplianceRequired?: boolean | undefined;
                    Type?: string | undefined;
                    TradeAllowances?: (string[] & string[] & { [K_15 in Exclude<keyof I["Assets"][number]["AssetDetails"]["FinancialProperties"]["TradeAllowances"], keyof string[]>]: never; }) | undefined;
                    Transferable?: boolean | undefined;
                    Platform?: string | undefined;
                    PlatformType?: string | undefined;
                    ContractAddress?: string | undefined;
                    Fractional?: boolean | undefined;
                    TotalSupply?: number | undefined;
                    DecimalPlacesSupply?: number | undefined;
                    Subunit?: string | undefined;
                    Price?: number | undefined;
                    DecimalPlacesPrice?: number | undefined;
                    Currency?: string | undefined;
                    InitialValuation?: number | undefined;
                    CurrentValuation?: number | undefined;
                    ValuationDate?: string | undefined;
                    Network?: Network | undefined;
                    Status?: string | undefined;
                } & { [K_16 in Exclude<keyof I["Assets"][number]["AssetDetails"]["FinancialProperties"], keyof import("./sologenic/com-fs-asset-model/asset").FinancialProperties>]: never; }) | undefined;
                Description?: ({
                    Name?: string | undefined;
                    Description?: string | undefined;
                    Logo?: {
                        Reference?: string | undefined;
                        Extension?: string | undefined;
                        Name?: string | undefined;
                    } | undefined;
                    AssetID?: string | undefined;
                    URL?: string | undefined;
                    Country?: string | undefined;
                    Documents?: string[] | undefined;
                    Images?: string[] | undefined;
                    Vertical?: string | undefined;
                    CreatedAt?: string | undefined;
                    UpdatedAt?: string | undefined;
                } & {
                    Name?: string | undefined;
                    Description?: string | undefined;
                    Logo?: ({
                        Reference?: string | undefined;
                        Extension?: string | undefined;
                        Name?: string | undefined;
                    } & {
                        Reference?: string | undefined;
                        Extension?: string | undefined;
                        Name?: string | undefined;
                    } & { [K_17 in Exclude<keyof I["Assets"][number]["AssetDetails"]["Description"]["Logo"], keyof import("./sologenic/com-fs-asset-model/asset").LogoFile>]: never; }) | undefined;
                    AssetID?: string | undefined;
                    URL?: string | undefined;
                    Country?: string | undefined;
                    Documents?: (string[] & string[] & { [K_18 in Exclude<keyof I["Assets"][number]["AssetDetails"]["Description"]["Documents"], keyof string[]>]: never; }) | undefined;
                    Images?: (string[] & string[] & { [K_19 in Exclude<keyof I["Assets"][number]["AssetDetails"]["Description"]["Images"], keyof string[]>]: never; }) | undefined;
                    Vertical?: string | undefined;
                    CreatedAt?: string | undefined;
                    UpdatedAt?: string | undefined;
                } & { [K_20 in Exclude<keyof I["Assets"][number]["AssetDetails"]["Description"], keyof import("./sologenic/com-fs-asset-model/asset").Description>]: never; }) | undefined;
                ExternalResources?: ({
                    Links?: {
                        Type?: import("./sologenic/com-fs-asset-model/asset").LinkType | undefined;
                        URL?: string | undefined;
                    }[] | undefined;
                    Socials?: {
                        Type?: import("./sologenic/com-fs-asset-model/asset").SocialMediaType | undefined;
                        URL?: string | undefined;
                    }[] | undefined;
                } & {
                    Links?: ({
                        Type?: import("./sologenic/com-fs-asset-model/asset").LinkType | undefined;
                        URL?: string | undefined;
                    }[] & ({
                        Type?: import("./sologenic/com-fs-asset-model/asset").LinkType | undefined;
                        URL?: string | undefined;
                    } & {
                        Type?: import("./sologenic/com-fs-asset-model/asset").LinkType | undefined;
                        URL?: string | undefined;
                    } & { [K_21 in Exclude<keyof I["Assets"][number]["AssetDetails"]["ExternalResources"]["Links"][number], keyof import("./sologenic/com-fs-asset-model/asset").Link>]: never; })[] & { [K_22 in Exclude<keyof I["Assets"][number]["AssetDetails"]["ExternalResources"]["Links"], keyof {
                        Type?: import("./sologenic/com-fs-asset-model/asset").LinkType | undefined;
                        URL?: string | undefined;
                    }[]>]: never; }) | undefined;
                    Socials?: ({
                        Type?: import("./sologenic/com-fs-asset-model/asset").SocialMediaType | undefined;
                        URL?: string | undefined;
                    }[] & ({
                        Type?: import("./sologenic/com-fs-asset-model/asset").SocialMediaType | undefined;
                        URL?: string | undefined;
                    } & {
                        Type?: import("./sologenic/com-fs-asset-model/asset").SocialMediaType | undefined;
                        URL?: string | undefined;
                    } & { [K_23 in Exclude<keyof I["Assets"][number]["AssetDetails"]["ExternalResources"]["Socials"][number], keyof import("./sologenic/com-fs-asset-model/asset").SocialMedia>]: never; })[] & { [K_24 in Exclude<keyof I["Assets"][number]["AssetDetails"]["ExternalResources"]["Socials"], keyof {
                        Type?: import("./sologenic/com-fs-asset-model/asset").SocialMediaType | undefined;
                        URL?: string | undefined;
                    }[]>]: never; }) | undefined;
                } & { [K_25 in Exclude<keyof I["Assets"][number]["AssetDetails"]["ExternalResources"], keyof import("./sologenic/com-fs-asset-model/asset").ExternalResources>]: never; }) | undefined;
            } & { [K_26 in Exclude<keyof I["Assets"][number]["AssetDetails"], keyof import("./sologenic/com-fs-asset-model/asset").AssetDetails>]: never; }) | undefined;
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
            } & { [K_27 in Exclude<keyof I["Assets"][number]["MetaData"], keyof MetaData>]: never; }) | undefined;
            Audit?: ({
                ChangedBy?: string | undefined;
                ChangedAt?: Date | undefined;
                Reason?: string | undefined;
            } & {
                ChangedBy?: string | undefined;
                ChangedAt?: Date | undefined;
                Reason?: string | undefined;
            } & { [K_28 in Exclude<keyof I["Assets"][number]["Audit"], keyof Audit>]: never; }) | undefined;
            IssuerDetails?: ({
                Name?: string | undefined;
                Description?: string | undefined;
                Image?: string | undefined;
                ExternalUrl?: string | undefined;
                AddressLine1?: string | undefined;
                AddressLine2?: string | undefined;
                City?: string | undefined;
                Region?: string | undefined;
                PostalCode?: string | undefined;
                Country?: string | undefined;
                YearFounded?: number | undefined;
                Licensed?: boolean | undefined;
                LicenseCountry?: string | undefined;
                LicenseNumber?: string | undefined;
                Phone?: string | undefined;
                Email?: string | undefined;
                SocialMediaLinks?: string[] | undefined;
                KeyClients?: string | undefined;
                Press?: string | undefined;
            } & {
                Name?: string | undefined;
                Description?: string | undefined;
                Image?: string | undefined;
                ExternalUrl?: string | undefined;
                AddressLine1?: string | undefined;
                AddressLine2?: string | undefined;
                City?: string | undefined;
                Region?: string | undefined;
                PostalCode?: string | undefined;
                Country?: string | undefined;
                YearFounded?: number | undefined;
                Licensed?: boolean | undefined;
                LicenseCountry?: string | undefined;
                LicenseNumber?: string | undefined;
                Phone?: string | undefined;
                Email?: string | undefined;
                SocialMediaLinks?: (string[] & string[] & { [K_29 in Exclude<keyof I["Assets"][number]["IssuerDetails"]["SocialMediaLinks"], keyof string[]>]: never; }) | undefined;
                KeyClients?: string | undefined;
                Press?: string | undefined;
            } & { [K_30 in Exclude<keyof I["Assets"][number]["IssuerDetails"], keyof import("./sologenic/com-fs-asset-model/asset").IssuerDetails>]: never; }) | undefined;
        } & { [K_31 in Exclude<keyof I["Assets"][number], keyof Asset>]: never; })[] & { [K_32 in Exclude<keyof I["Assets"], keyof {
            AssetDetails?: {
                ID?: string | undefined;
                OrganizationID?: string | undefined;
                Status?: import("./sologenic/com-fs-asset-model/asset").AssetStatus | undefined;
                Reason?: import("./sologenic/com-fs-asset-model/asset").Reason | undefined;
                Type?: import("./sologenic/com-fs-asset-model/asset").AssetType | undefined;
                Denom?: {
                    Currency?: {
                        Symbol?: string | undefined;
                        Version?: string | undefined;
                    } | undefined;
                    Subunit?: string | undefined;
                    Issuer?: string | undefined;
                    Precision?: number | undefined;
                    Description?: string | undefined;
                } | undefined;
                IsIssuedInSmartContract?: boolean | undefined;
                SmartContractIssuerAddr?: string | undefined;
                RealEstateDetails?: {
                    Address?: string | undefined;
                    Bathrooms?: number | undefined;
                    Bedrooms?: number | undefined;
                    Latitude?: number | undefined;
                    Longitude?: number | undefined;
                    OwnershipType?: string | undefined;
                    PropertyType?: string | undefined;
                    RiskRating?: string | undefined;
                    SquareFootage?: number | undefined;
                    TenancyStatus?: string | undefined;
                    YearBuilt?: number | undefined;
                    YieldPercent?: number[] | undefined;
                } | undefined;
                StableCoinDetails?: {
                    Version?: string | undefined;
                    PegType?: string | undefined;
                    PegRatio?: number | undefined;
                    BackingAsset?: string | undefined;
                    ExchangeTickerSymbol?: string | undefined;
                    Exchange?: string | undefined;
                    MinTransactionAmount?: number | undefined;
                    TradingMarginPercentage?: number | undefined;
                    AssetMarginPercentage?: number | undefined;
                } | undefined;
                CommodityDetails?: {
                    Category?: string | undefined;
                    Quality?: string | undefined;
                    UnitOfMeasure?: string | undefined;
                    Quantity?: number | undefined;
                    OriginCountry?: string | undefined;
                    ExchangeTickerSymbol?: string | undefined;
                    Exchange?: string | undefined;
                    MinTransactionAmount?: number | undefined;
                    StorageLocation?: string | undefined;
                    ContractType?: string | undefined;
                    DeliveryDate?: string | undefined;
                } | undefined;
                CollectibleDetails?: {
                    Category?: string | undefined;
                    CollectionName?: string | undefined;
                    TokenStandard?: string | undefined;
                    TokenID?: string | undefined;
                    MetadataURI?: string | undefined;
                    Creator?: string | undefined;
                    OwnershipHistory?: string[] | undefined;
                    CurrentOwner?: string | undefined;
                } | undefined;
                VehicleDetails?: {
                    Category?: string | undefined;
                    Manufacturer?: string | undefined;
                    Model?: string | undefined;
                    SerialNumber?: string | undefined;
                    Year?: number | undefined;
                    Specifications?: string | undefined;
                    FuelType?: string | undefined;
                    UsageHours?: number | undefined;
                    Mileage?: number | undefined;
                    Condition?: string | undefined;
                    CurrentOwner?: string | undefined;
                    Location?: string | undefined;
                } | undefined;
                IntellectualPropertyDetails?: {
                    Category?: string | undefined;
                    Owner?: string | undefined;
                    RegistrationNumber?: string | undefined;
                    FilingDate?: string | undefined;
                    ExpirationDate?: string | undefined;
                    IPJurisdictionIDs?: string[] | undefined;
                    LicenseType?: string | undefined;
                    LicenseTerms?: string | undefined;
                    Value?: number | undefined;
                } | undefined;
                InvestmentFundDetails?: {
                    FundType?: string | undefined;
                    Exchange?: string | undefined;
                    ISIN?: string | undefined;
                    NAV?: number | undefined;
                    InceptionDate?: string | undefined;
                    Manager?: string | undefined;
                    ExpenseRatio?: number | undefined;
                    Holdings?: string[] | undefined;
                } | undefined;
                EquityDetails?: {
                    ExchangeTickerSymbol?: string | undefined;
                    Exchange?: string | undefined;
                    MinTransactionAmount?: string | undefined;
                    ExtraPercentage?: string | undefined;
                    AssetMarginPercentage?: string | undefined;
                } | undefined;
                FinancialProperties?: {
                    Symbol?: string | undefined;
                    Issuer?: string | undefined;
                    JurisdictionIDs?: string[] | undefined;
                    JurisdictionRestrictions?: string | undefined;
                    RedemptionTerms?: string | undefined;
                    ComplianceRequired?: boolean | undefined;
                    Type?: string | undefined;
                    TradeAllowances?: string[] | undefined;
                    Transferable?: boolean | undefined;
                    Platform?: string | undefined;
                    PlatformType?: string | undefined;
                    ContractAddress?: string | undefined;
                    Fractional?: boolean | undefined;
                    TotalSupply?: number | undefined;
                    DecimalPlacesSupply?: number | undefined;
                    Subunit?: string | undefined;
                    Price?: number | undefined;
                    DecimalPlacesPrice?: number | undefined;
                    Currency?: string | undefined;
                    InitialValuation?: number | undefined;
                    CurrentValuation?: number | undefined;
                    ValuationDate?: string | undefined;
                    Network?: Network | undefined;
                    Status?: string | undefined;
                } | undefined;
                Description?: {
                    Name?: string | undefined;
                    Description?: string | undefined;
                    Logo?: {
                        Reference?: string | undefined;
                        Extension?: string | undefined;
                        Name?: string | undefined;
                    } | undefined;
                    AssetID?: string | undefined;
                    URL?: string | undefined;
                    Country?: string | undefined;
                    Documents?: string[] | undefined;
                    Images?: string[] | undefined;
                    Vertical?: string | undefined;
                    CreatedAt?: string | undefined;
                    UpdatedAt?: string | undefined;
                } | undefined;
                ExternalResources?: {
                    Links?: {
                        Type?: import("./sologenic/com-fs-asset-model/asset").LinkType | undefined;
                        URL?: string | undefined;
                    }[] | undefined;
                    Socials?: {
                        Type?: import("./sologenic/com-fs-asset-model/asset").SocialMediaType | undefined;
                        URL?: string | undefined;
                    }[] | undefined;
                } | undefined;
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
            IssuerDetails?: {
                Name?: string | undefined;
                Description?: string | undefined;
                Image?: string | undefined;
                ExternalUrl?: string | undefined;
                AddressLine1?: string | undefined;
                AddressLine2?: string | undefined;
                City?: string | undefined;
                Region?: string | undefined;
                PostalCode?: string | undefined;
                Country?: string | undefined;
                YearFounded?: number | undefined;
                Licensed?: boolean | undefined;
                LicenseCountry?: string | undefined;
                LicenseNumber?: string | undefined;
                Phone?: string | undefined;
                Email?: string | undefined;
                SocialMediaLinks?: string[] | undefined;
                KeyClients?: string | undefined;
                Press?: string | undefined;
            } | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_33 in Exclude<keyof I, keyof DynamicAssetDetails>]: never; }>(base?: I | undefined): DynamicAssetDetails;
    fromPartial<I_1 extends {
        DynamicAssetID?: string | undefined;
        Title?: string | undefined;
        Description?: string | undefined;
        Identifier?: string | undefined;
        OrganizationID?: string | undefined;
        Assets?: {
            AssetDetails?: {
                ID?: string | undefined;
                OrganizationID?: string | undefined;
                Status?: import("./sologenic/com-fs-asset-model/asset").AssetStatus | undefined;
                Reason?: import("./sologenic/com-fs-asset-model/asset").Reason | undefined;
                Type?: import("./sologenic/com-fs-asset-model/asset").AssetType | undefined;
                Denom?: {
                    Currency?: {
                        Symbol?: string | undefined;
                        Version?: string | undefined;
                    } | undefined;
                    Subunit?: string | undefined;
                    Issuer?: string | undefined;
                    Precision?: number | undefined;
                    Description?: string | undefined;
                } | undefined;
                IsIssuedInSmartContract?: boolean | undefined;
                SmartContractIssuerAddr?: string | undefined;
                RealEstateDetails?: {
                    Address?: string | undefined;
                    Bathrooms?: number | undefined;
                    Bedrooms?: number | undefined;
                    Latitude?: number | undefined;
                    Longitude?: number | undefined;
                    OwnershipType?: string | undefined;
                    PropertyType?: string | undefined;
                    RiskRating?: string | undefined;
                    SquareFootage?: number | undefined;
                    TenancyStatus?: string | undefined;
                    YearBuilt?: number | undefined;
                    YieldPercent?: number[] | undefined;
                } | undefined;
                StableCoinDetails?: {
                    Version?: string | undefined;
                    PegType?: string | undefined;
                    PegRatio?: number | undefined;
                    BackingAsset?: string | undefined;
                    ExchangeTickerSymbol?: string | undefined;
                    Exchange?: string | undefined;
                    MinTransactionAmount?: number | undefined;
                    TradingMarginPercentage?: number | undefined;
                    AssetMarginPercentage?: number | undefined;
                } | undefined;
                CommodityDetails?: {
                    Category?: string | undefined;
                    Quality?: string | undefined;
                    UnitOfMeasure?: string | undefined;
                    Quantity?: number | undefined;
                    OriginCountry?: string | undefined;
                    ExchangeTickerSymbol?: string | undefined;
                    Exchange?: string | undefined;
                    MinTransactionAmount?: number | undefined;
                    StorageLocation?: string | undefined;
                    ContractType?: string | undefined;
                    DeliveryDate?: string | undefined;
                } | undefined;
                CollectibleDetails?: {
                    Category?: string | undefined;
                    CollectionName?: string | undefined;
                    TokenStandard?: string | undefined;
                    TokenID?: string | undefined;
                    MetadataURI?: string | undefined;
                    Creator?: string | undefined;
                    OwnershipHistory?: string[] | undefined;
                    CurrentOwner?: string | undefined;
                } | undefined;
                VehicleDetails?: {
                    Category?: string | undefined;
                    Manufacturer?: string | undefined;
                    Model?: string | undefined;
                    SerialNumber?: string | undefined;
                    Year?: number | undefined;
                    Specifications?: string | undefined;
                    FuelType?: string | undefined;
                    UsageHours?: number | undefined;
                    Mileage?: number | undefined;
                    Condition?: string | undefined;
                    CurrentOwner?: string | undefined;
                    Location?: string | undefined;
                } | undefined;
                IntellectualPropertyDetails?: {
                    Category?: string | undefined;
                    Owner?: string | undefined;
                    RegistrationNumber?: string | undefined;
                    FilingDate?: string | undefined;
                    ExpirationDate?: string | undefined;
                    IPJurisdictionIDs?: string[] | undefined;
                    LicenseType?: string | undefined;
                    LicenseTerms?: string | undefined;
                    Value?: number | undefined;
                } | undefined;
                InvestmentFundDetails?: {
                    FundType?: string | undefined;
                    Exchange?: string | undefined;
                    ISIN?: string | undefined;
                    NAV?: number | undefined;
                    InceptionDate?: string | undefined;
                    Manager?: string | undefined;
                    ExpenseRatio?: number | undefined;
                    Holdings?: string[] | undefined;
                } | undefined;
                EquityDetails?: {
                    ExchangeTickerSymbol?: string | undefined;
                    Exchange?: string | undefined;
                    MinTransactionAmount?: string | undefined;
                    ExtraPercentage?: string | undefined;
                    AssetMarginPercentage?: string | undefined;
                } | undefined;
                FinancialProperties?: {
                    Symbol?: string | undefined;
                    Issuer?: string | undefined;
                    JurisdictionIDs?: string[] | undefined;
                    JurisdictionRestrictions?: string | undefined;
                    RedemptionTerms?: string | undefined;
                    ComplianceRequired?: boolean | undefined;
                    Type?: string | undefined;
                    TradeAllowances?: string[] | undefined;
                    Transferable?: boolean | undefined;
                    Platform?: string | undefined;
                    PlatformType?: string | undefined;
                    ContractAddress?: string | undefined;
                    Fractional?: boolean | undefined;
                    TotalSupply?: number | undefined;
                    DecimalPlacesSupply?: number | undefined;
                    Subunit?: string | undefined;
                    Price?: number | undefined;
                    DecimalPlacesPrice?: number | undefined;
                    Currency?: string | undefined;
                    InitialValuation?: number | undefined;
                    CurrentValuation?: number | undefined;
                    ValuationDate?: string | undefined;
                    Network?: Network | undefined;
                    Status?: string | undefined;
                } | undefined;
                Description?: {
                    Name?: string | undefined;
                    Description?: string | undefined;
                    Logo?: {
                        Reference?: string | undefined;
                        Extension?: string | undefined;
                        Name?: string | undefined;
                    } | undefined;
                    AssetID?: string | undefined;
                    URL?: string | undefined;
                    Country?: string | undefined;
                    Documents?: string[] | undefined;
                    Images?: string[] | undefined;
                    Vertical?: string | undefined;
                    CreatedAt?: string | undefined;
                    UpdatedAt?: string | undefined;
                } | undefined;
                ExternalResources?: {
                    Links?: {
                        Type?: import("./sologenic/com-fs-asset-model/asset").LinkType | undefined;
                        URL?: string | undefined;
                    }[] | undefined;
                    Socials?: {
                        Type?: import("./sologenic/com-fs-asset-model/asset").SocialMediaType | undefined;
                        URL?: string | undefined;
                    }[] | undefined;
                } | undefined;
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
            IssuerDetails?: {
                Name?: string | undefined;
                Description?: string | undefined;
                Image?: string | undefined;
                ExternalUrl?: string | undefined;
                AddressLine1?: string | undefined;
                AddressLine2?: string | undefined;
                City?: string | undefined;
                Region?: string | undefined;
                PostalCode?: string | undefined;
                Country?: string | undefined;
                YearFounded?: number | undefined;
                Licensed?: boolean | undefined;
                LicenseCountry?: string | undefined;
                LicenseNumber?: string | undefined;
                Phone?: string | undefined;
                Email?: string | undefined;
                SocialMediaLinks?: string[] | undefined;
                KeyClients?: string | undefined;
                Press?: string | undefined;
            } | undefined;
        }[] | undefined;
    } & {
        DynamicAssetID?: string | undefined;
        Title?: string | undefined;
        Description?: string | undefined;
        Identifier?: string | undefined;
        OrganizationID?: string | undefined;
        Assets?: ({
            AssetDetails?: {
                ID?: string | undefined;
                OrganizationID?: string | undefined;
                Status?: import("./sologenic/com-fs-asset-model/asset").AssetStatus | undefined;
                Reason?: import("./sologenic/com-fs-asset-model/asset").Reason | undefined;
                Type?: import("./sologenic/com-fs-asset-model/asset").AssetType | undefined;
                Denom?: {
                    Currency?: {
                        Symbol?: string | undefined;
                        Version?: string | undefined;
                    } | undefined;
                    Subunit?: string | undefined;
                    Issuer?: string | undefined;
                    Precision?: number | undefined;
                    Description?: string | undefined;
                } | undefined;
                IsIssuedInSmartContract?: boolean | undefined;
                SmartContractIssuerAddr?: string | undefined;
                RealEstateDetails?: {
                    Address?: string | undefined;
                    Bathrooms?: number | undefined;
                    Bedrooms?: number | undefined;
                    Latitude?: number | undefined;
                    Longitude?: number | undefined;
                    OwnershipType?: string | undefined;
                    PropertyType?: string | undefined;
                    RiskRating?: string | undefined;
                    SquareFootage?: number | undefined;
                    TenancyStatus?: string | undefined;
                    YearBuilt?: number | undefined;
                    YieldPercent?: number[] | undefined;
                } | undefined;
                StableCoinDetails?: {
                    Version?: string | undefined;
                    PegType?: string | undefined;
                    PegRatio?: number | undefined;
                    BackingAsset?: string | undefined;
                    ExchangeTickerSymbol?: string | undefined;
                    Exchange?: string | undefined;
                    MinTransactionAmount?: number | undefined;
                    TradingMarginPercentage?: number | undefined;
                    AssetMarginPercentage?: number | undefined;
                } | undefined;
                CommodityDetails?: {
                    Category?: string | undefined;
                    Quality?: string | undefined;
                    UnitOfMeasure?: string | undefined;
                    Quantity?: number | undefined;
                    OriginCountry?: string | undefined;
                    ExchangeTickerSymbol?: string | undefined;
                    Exchange?: string | undefined;
                    MinTransactionAmount?: number | undefined;
                    StorageLocation?: string | undefined;
                    ContractType?: string | undefined;
                    DeliveryDate?: string | undefined;
                } | undefined;
                CollectibleDetails?: {
                    Category?: string | undefined;
                    CollectionName?: string | undefined;
                    TokenStandard?: string | undefined;
                    TokenID?: string | undefined;
                    MetadataURI?: string | undefined;
                    Creator?: string | undefined;
                    OwnershipHistory?: string[] | undefined;
                    CurrentOwner?: string | undefined;
                } | undefined;
                VehicleDetails?: {
                    Category?: string | undefined;
                    Manufacturer?: string | undefined;
                    Model?: string | undefined;
                    SerialNumber?: string | undefined;
                    Year?: number | undefined;
                    Specifications?: string | undefined;
                    FuelType?: string | undefined;
                    UsageHours?: number | undefined;
                    Mileage?: number | undefined;
                    Condition?: string | undefined;
                    CurrentOwner?: string | undefined;
                    Location?: string | undefined;
                } | undefined;
                IntellectualPropertyDetails?: {
                    Category?: string | undefined;
                    Owner?: string | undefined;
                    RegistrationNumber?: string | undefined;
                    FilingDate?: string | undefined;
                    ExpirationDate?: string | undefined;
                    IPJurisdictionIDs?: string[] | undefined;
                    LicenseType?: string | undefined;
                    LicenseTerms?: string | undefined;
                    Value?: number | undefined;
                } | undefined;
                InvestmentFundDetails?: {
                    FundType?: string | undefined;
                    Exchange?: string | undefined;
                    ISIN?: string | undefined;
                    NAV?: number | undefined;
                    InceptionDate?: string | undefined;
                    Manager?: string | undefined;
                    ExpenseRatio?: number | undefined;
                    Holdings?: string[] | undefined;
                } | undefined;
                EquityDetails?: {
                    ExchangeTickerSymbol?: string | undefined;
                    Exchange?: string | undefined;
                    MinTransactionAmount?: string | undefined;
                    ExtraPercentage?: string | undefined;
                    AssetMarginPercentage?: string | undefined;
                } | undefined;
                FinancialProperties?: {
                    Symbol?: string | undefined;
                    Issuer?: string | undefined;
                    JurisdictionIDs?: string[] | undefined;
                    JurisdictionRestrictions?: string | undefined;
                    RedemptionTerms?: string | undefined;
                    ComplianceRequired?: boolean | undefined;
                    Type?: string | undefined;
                    TradeAllowances?: string[] | undefined;
                    Transferable?: boolean | undefined;
                    Platform?: string | undefined;
                    PlatformType?: string | undefined;
                    ContractAddress?: string | undefined;
                    Fractional?: boolean | undefined;
                    TotalSupply?: number | undefined;
                    DecimalPlacesSupply?: number | undefined;
                    Subunit?: string | undefined;
                    Price?: number | undefined;
                    DecimalPlacesPrice?: number | undefined;
                    Currency?: string | undefined;
                    InitialValuation?: number | undefined;
                    CurrentValuation?: number | undefined;
                    ValuationDate?: string | undefined;
                    Network?: Network | undefined;
                    Status?: string | undefined;
                } | undefined;
                Description?: {
                    Name?: string | undefined;
                    Description?: string | undefined;
                    Logo?: {
                        Reference?: string | undefined;
                        Extension?: string | undefined;
                        Name?: string | undefined;
                    } | undefined;
                    AssetID?: string | undefined;
                    URL?: string | undefined;
                    Country?: string | undefined;
                    Documents?: string[] | undefined;
                    Images?: string[] | undefined;
                    Vertical?: string | undefined;
                    CreatedAt?: string | undefined;
                    UpdatedAt?: string | undefined;
                } | undefined;
                ExternalResources?: {
                    Links?: {
                        Type?: import("./sologenic/com-fs-asset-model/asset").LinkType | undefined;
                        URL?: string | undefined;
                    }[] | undefined;
                    Socials?: {
                        Type?: import("./sologenic/com-fs-asset-model/asset").SocialMediaType | undefined;
                        URL?: string | undefined;
                    }[] | undefined;
                } | undefined;
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
            IssuerDetails?: {
                Name?: string | undefined;
                Description?: string | undefined;
                Image?: string | undefined;
                ExternalUrl?: string | undefined;
                AddressLine1?: string | undefined;
                AddressLine2?: string | undefined;
                City?: string | undefined;
                Region?: string | undefined;
                PostalCode?: string | undefined;
                Country?: string | undefined;
                YearFounded?: number | undefined;
                Licensed?: boolean | undefined;
                LicenseCountry?: string | undefined;
                LicenseNumber?: string | undefined;
                Phone?: string | undefined;
                Email?: string | undefined;
                SocialMediaLinks?: string[] | undefined;
                KeyClients?: string | undefined;
                Press?: string | undefined;
            } | undefined;
        }[] & ({
            AssetDetails?: {
                ID?: string | undefined;
                OrganizationID?: string | undefined;
                Status?: import("./sologenic/com-fs-asset-model/asset").AssetStatus | undefined;
                Reason?: import("./sologenic/com-fs-asset-model/asset").Reason | undefined;
                Type?: import("./sologenic/com-fs-asset-model/asset").AssetType | undefined;
                Denom?: {
                    Currency?: {
                        Symbol?: string | undefined;
                        Version?: string | undefined;
                    } | undefined;
                    Subunit?: string | undefined;
                    Issuer?: string | undefined;
                    Precision?: number | undefined;
                    Description?: string | undefined;
                } | undefined;
                IsIssuedInSmartContract?: boolean | undefined;
                SmartContractIssuerAddr?: string | undefined;
                RealEstateDetails?: {
                    Address?: string | undefined;
                    Bathrooms?: number | undefined;
                    Bedrooms?: number | undefined;
                    Latitude?: number | undefined;
                    Longitude?: number | undefined;
                    OwnershipType?: string | undefined;
                    PropertyType?: string | undefined;
                    RiskRating?: string | undefined;
                    SquareFootage?: number | undefined;
                    TenancyStatus?: string | undefined;
                    YearBuilt?: number | undefined;
                    YieldPercent?: number[] | undefined;
                } | undefined;
                StableCoinDetails?: {
                    Version?: string | undefined;
                    PegType?: string | undefined;
                    PegRatio?: number | undefined;
                    BackingAsset?: string | undefined;
                    ExchangeTickerSymbol?: string | undefined;
                    Exchange?: string | undefined;
                    MinTransactionAmount?: number | undefined;
                    TradingMarginPercentage?: number | undefined;
                    AssetMarginPercentage?: number | undefined;
                } | undefined;
                CommodityDetails?: {
                    Category?: string | undefined;
                    Quality?: string | undefined;
                    UnitOfMeasure?: string | undefined;
                    Quantity?: number | undefined;
                    OriginCountry?: string | undefined;
                    ExchangeTickerSymbol?: string | undefined;
                    Exchange?: string | undefined;
                    MinTransactionAmount?: number | undefined;
                    StorageLocation?: string | undefined;
                    ContractType?: string | undefined;
                    DeliveryDate?: string | undefined;
                } | undefined;
                CollectibleDetails?: {
                    Category?: string | undefined;
                    CollectionName?: string | undefined;
                    TokenStandard?: string | undefined;
                    TokenID?: string | undefined;
                    MetadataURI?: string | undefined;
                    Creator?: string | undefined;
                    OwnershipHistory?: string[] | undefined;
                    CurrentOwner?: string | undefined;
                } | undefined;
                VehicleDetails?: {
                    Category?: string | undefined;
                    Manufacturer?: string | undefined;
                    Model?: string | undefined;
                    SerialNumber?: string | undefined;
                    Year?: number | undefined;
                    Specifications?: string | undefined;
                    FuelType?: string | undefined;
                    UsageHours?: number | undefined;
                    Mileage?: number | undefined;
                    Condition?: string | undefined;
                    CurrentOwner?: string | undefined;
                    Location?: string | undefined;
                } | undefined;
                IntellectualPropertyDetails?: {
                    Category?: string | undefined;
                    Owner?: string | undefined;
                    RegistrationNumber?: string | undefined;
                    FilingDate?: string | undefined;
                    ExpirationDate?: string | undefined;
                    IPJurisdictionIDs?: string[] | undefined;
                    LicenseType?: string | undefined;
                    LicenseTerms?: string | undefined;
                    Value?: number | undefined;
                } | undefined;
                InvestmentFundDetails?: {
                    FundType?: string | undefined;
                    Exchange?: string | undefined;
                    ISIN?: string | undefined;
                    NAV?: number | undefined;
                    InceptionDate?: string | undefined;
                    Manager?: string | undefined;
                    ExpenseRatio?: number | undefined;
                    Holdings?: string[] | undefined;
                } | undefined;
                EquityDetails?: {
                    ExchangeTickerSymbol?: string | undefined;
                    Exchange?: string | undefined;
                    MinTransactionAmount?: string | undefined;
                    ExtraPercentage?: string | undefined;
                    AssetMarginPercentage?: string | undefined;
                } | undefined;
                FinancialProperties?: {
                    Symbol?: string | undefined;
                    Issuer?: string | undefined;
                    JurisdictionIDs?: string[] | undefined;
                    JurisdictionRestrictions?: string | undefined;
                    RedemptionTerms?: string | undefined;
                    ComplianceRequired?: boolean | undefined;
                    Type?: string | undefined;
                    TradeAllowances?: string[] | undefined;
                    Transferable?: boolean | undefined;
                    Platform?: string | undefined;
                    PlatformType?: string | undefined;
                    ContractAddress?: string | undefined;
                    Fractional?: boolean | undefined;
                    TotalSupply?: number | undefined;
                    DecimalPlacesSupply?: number | undefined;
                    Subunit?: string | undefined;
                    Price?: number | undefined;
                    DecimalPlacesPrice?: number | undefined;
                    Currency?: string | undefined;
                    InitialValuation?: number | undefined;
                    CurrentValuation?: number | undefined;
                    ValuationDate?: string | undefined;
                    Network?: Network | undefined;
                    Status?: string | undefined;
                } | undefined;
                Description?: {
                    Name?: string | undefined;
                    Description?: string | undefined;
                    Logo?: {
                        Reference?: string | undefined;
                        Extension?: string | undefined;
                        Name?: string | undefined;
                    } | undefined;
                    AssetID?: string | undefined;
                    URL?: string | undefined;
                    Country?: string | undefined;
                    Documents?: string[] | undefined;
                    Images?: string[] | undefined;
                    Vertical?: string | undefined;
                    CreatedAt?: string | undefined;
                    UpdatedAt?: string | undefined;
                } | undefined;
                ExternalResources?: {
                    Links?: {
                        Type?: import("./sologenic/com-fs-asset-model/asset").LinkType | undefined;
                        URL?: string | undefined;
                    }[] | undefined;
                    Socials?: {
                        Type?: import("./sologenic/com-fs-asset-model/asset").SocialMediaType | undefined;
                        URL?: string | undefined;
                    }[] | undefined;
                } | undefined;
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
            IssuerDetails?: {
                Name?: string | undefined;
                Description?: string | undefined;
                Image?: string | undefined;
                ExternalUrl?: string | undefined;
                AddressLine1?: string | undefined;
                AddressLine2?: string | undefined;
                City?: string | undefined;
                Region?: string | undefined;
                PostalCode?: string | undefined;
                Country?: string | undefined;
                YearFounded?: number | undefined;
                Licensed?: boolean | undefined;
                LicenseCountry?: string | undefined;
                LicenseNumber?: string | undefined;
                Phone?: string | undefined;
                Email?: string | undefined;
                SocialMediaLinks?: string[] | undefined;
                KeyClients?: string | undefined;
                Press?: string | undefined;
            } | undefined;
        } & {
            AssetDetails?: ({
                ID?: string | undefined;
                OrganizationID?: string | undefined;
                Status?: import("./sologenic/com-fs-asset-model/asset").AssetStatus | undefined;
                Reason?: import("./sologenic/com-fs-asset-model/asset").Reason | undefined;
                Type?: import("./sologenic/com-fs-asset-model/asset").AssetType | undefined;
                Denom?: {
                    Currency?: {
                        Symbol?: string | undefined;
                        Version?: string | undefined;
                    } | undefined;
                    Subunit?: string | undefined;
                    Issuer?: string | undefined;
                    Precision?: number | undefined;
                    Description?: string | undefined;
                } | undefined;
                IsIssuedInSmartContract?: boolean | undefined;
                SmartContractIssuerAddr?: string | undefined;
                RealEstateDetails?: {
                    Address?: string | undefined;
                    Bathrooms?: number | undefined;
                    Bedrooms?: number | undefined;
                    Latitude?: number | undefined;
                    Longitude?: number | undefined;
                    OwnershipType?: string | undefined;
                    PropertyType?: string | undefined;
                    RiskRating?: string | undefined;
                    SquareFootage?: number | undefined;
                    TenancyStatus?: string | undefined;
                    YearBuilt?: number | undefined;
                    YieldPercent?: number[] | undefined;
                } | undefined;
                StableCoinDetails?: {
                    Version?: string | undefined;
                    PegType?: string | undefined;
                    PegRatio?: number | undefined;
                    BackingAsset?: string | undefined;
                    ExchangeTickerSymbol?: string | undefined;
                    Exchange?: string | undefined;
                    MinTransactionAmount?: number | undefined;
                    TradingMarginPercentage?: number | undefined;
                    AssetMarginPercentage?: number | undefined;
                } | undefined;
                CommodityDetails?: {
                    Category?: string | undefined;
                    Quality?: string | undefined;
                    UnitOfMeasure?: string | undefined;
                    Quantity?: number | undefined;
                    OriginCountry?: string | undefined;
                    ExchangeTickerSymbol?: string | undefined;
                    Exchange?: string | undefined;
                    MinTransactionAmount?: number | undefined;
                    StorageLocation?: string | undefined;
                    ContractType?: string | undefined;
                    DeliveryDate?: string | undefined;
                } | undefined;
                CollectibleDetails?: {
                    Category?: string | undefined;
                    CollectionName?: string | undefined;
                    TokenStandard?: string | undefined;
                    TokenID?: string | undefined;
                    MetadataURI?: string | undefined;
                    Creator?: string | undefined;
                    OwnershipHistory?: string[] | undefined;
                    CurrentOwner?: string | undefined;
                } | undefined;
                VehicleDetails?: {
                    Category?: string | undefined;
                    Manufacturer?: string | undefined;
                    Model?: string | undefined;
                    SerialNumber?: string | undefined;
                    Year?: number | undefined;
                    Specifications?: string | undefined;
                    FuelType?: string | undefined;
                    UsageHours?: number | undefined;
                    Mileage?: number | undefined;
                    Condition?: string | undefined;
                    CurrentOwner?: string | undefined;
                    Location?: string | undefined;
                } | undefined;
                IntellectualPropertyDetails?: {
                    Category?: string | undefined;
                    Owner?: string | undefined;
                    RegistrationNumber?: string | undefined;
                    FilingDate?: string | undefined;
                    ExpirationDate?: string | undefined;
                    IPJurisdictionIDs?: string[] | undefined;
                    LicenseType?: string | undefined;
                    LicenseTerms?: string | undefined;
                    Value?: number | undefined;
                } | undefined;
                InvestmentFundDetails?: {
                    FundType?: string | undefined;
                    Exchange?: string | undefined;
                    ISIN?: string | undefined;
                    NAV?: number | undefined;
                    InceptionDate?: string | undefined;
                    Manager?: string | undefined;
                    ExpenseRatio?: number | undefined;
                    Holdings?: string[] | undefined;
                } | undefined;
                EquityDetails?: {
                    ExchangeTickerSymbol?: string | undefined;
                    Exchange?: string | undefined;
                    MinTransactionAmount?: string | undefined;
                    ExtraPercentage?: string | undefined;
                    AssetMarginPercentage?: string | undefined;
                } | undefined;
                FinancialProperties?: {
                    Symbol?: string | undefined;
                    Issuer?: string | undefined;
                    JurisdictionIDs?: string[] | undefined;
                    JurisdictionRestrictions?: string | undefined;
                    RedemptionTerms?: string | undefined;
                    ComplianceRequired?: boolean | undefined;
                    Type?: string | undefined;
                    TradeAllowances?: string[] | undefined;
                    Transferable?: boolean | undefined;
                    Platform?: string | undefined;
                    PlatformType?: string | undefined;
                    ContractAddress?: string | undefined;
                    Fractional?: boolean | undefined;
                    TotalSupply?: number | undefined;
                    DecimalPlacesSupply?: number | undefined;
                    Subunit?: string | undefined;
                    Price?: number | undefined;
                    DecimalPlacesPrice?: number | undefined;
                    Currency?: string | undefined;
                    InitialValuation?: number | undefined;
                    CurrentValuation?: number | undefined;
                    ValuationDate?: string | undefined;
                    Network?: Network | undefined;
                    Status?: string | undefined;
                } | undefined;
                Description?: {
                    Name?: string | undefined;
                    Description?: string | undefined;
                    Logo?: {
                        Reference?: string | undefined;
                        Extension?: string | undefined;
                        Name?: string | undefined;
                    } | undefined;
                    AssetID?: string | undefined;
                    URL?: string | undefined;
                    Country?: string | undefined;
                    Documents?: string[] | undefined;
                    Images?: string[] | undefined;
                    Vertical?: string | undefined;
                    CreatedAt?: string | undefined;
                    UpdatedAt?: string | undefined;
                } | undefined;
                ExternalResources?: {
                    Links?: {
                        Type?: import("./sologenic/com-fs-asset-model/asset").LinkType | undefined;
                        URL?: string | undefined;
                    }[] | undefined;
                    Socials?: {
                        Type?: import("./sologenic/com-fs-asset-model/asset").SocialMediaType | undefined;
                        URL?: string | undefined;
                    }[] | undefined;
                } | undefined;
            } & {
                ID?: string | undefined;
                OrganizationID?: string | undefined;
                Status?: import("./sologenic/com-fs-asset-model/asset").AssetStatus | undefined;
                Reason?: import("./sologenic/com-fs-asset-model/asset").Reason | undefined;
                Type?: import("./sologenic/com-fs-asset-model/asset").AssetType | undefined;
                Denom?: ({
                    Currency?: {
                        Symbol?: string | undefined;
                        Version?: string | undefined;
                    } | undefined;
                    Subunit?: string | undefined;
                    Issuer?: string | undefined;
                    Precision?: number | undefined;
                    Description?: string | undefined;
                } & {
                    Currency?: ({
                        Symbol?: string | undefined;
                        Version?: string | undefined;
                    } & {
                        Symbol?: string | undefined;
                        Version?: string | undefined;
                    } & { [K_34 in Exclude<keyof I_1["Assets"][number]["AssetDetails"]["Denom"]["Currency"], keyof import("./sologenic/com-fs-asset-model/domain/currency/currency").Currency>]: never; }) | undefined;
                    Subunit?: string | undefined;
                    Issuer?: string | undefined;
                    Precision?: number | undefined;
                    Description?: string | undefined;
                } & { [K_35 in Exclude<keyof I_1["Assets"][number]["AssetDetails"]["Denom"], keyof import("./sologenic/com-fs-asset-model/domain/denom/denom").Denom>]: never; }) | undefined;
                IsIssuedInSmartContract?: boolean | undefined;
                SmartContractIssuerAddr?: string | undefined;
                RealEstateDetails?: ({
                    Address?: string | undefined;
                    Bathrooms?: number | undefined;
                    Bedrooms?: number | undefined;
                    Latitude?: number | undefined;
                    Longitude?: number | undefined;
                    OwnershipType?: string | undefined;
                    PropertyType?: string | undefined;
                    RiskRating?: string | undefined;
                    SquareFootage?: number | undefined;
                    TenancyStatus?: string | undefined;
                    YearBuilt?: number | undefined;
                    YieldPercent?: number[] | undefined;
                } & {
                    Address?: string | undefined;
                    Bathrooms?: number | undefined;
                    Bedrooms?: number | undefined;
                    Latitude?: number | undefined;
                    Longitude?: number | undefined;
                    OwnershipType?: string | undefined;
                    PropertyType?: string | undefined;
                    RiskRating?: string | undefined;
                    SquareFootage?: number | undefined;
                    TenancyStatus?: string | undefined;
                    YearBuilt?: number | undefined;
                    YieldPercent?: (number[] & number[] & { [K_36 in Exclude<keyof I_1["Assets"][number]["AssetDetails"]["RealEstateDetails"]["YieldPercent"], keyof number[]>]: never; }) | undefined;
                } & { [K_37 in Exclude<keyof I_1["Assets"][number]["AssetDetails"]["RealEstateDetails"], keyof import("./sologenic/com-fs-asset-model/asset").RealEstate>]: never; }) | undefined;
                StableCoinDetails?: ({
                    Version?: string | undefined;
                    PegType?: string | undefined;
                    PegRatio?: number | undefined;
                    BackingAsset?: string | undefined;
                    ExchangeTickerSymbol?: string | undefined;
                    Exchange?: string | undefined;
                    MinTransactionAmount?: number | undefined;
                    TradingMarginPercentage?: number | undefined;
                    AssetMarginPercentage?: number | undefined;
                } & {
                    Version?: string | undefined;
                    PegType?: string | undefined;
                    PegRatio?: number | undefined;
                    BackingAsset?: string | undefined;
                    ExchangeTickerSymbol?: string | undefined;
                    Exchange?: string | undefined;
                    MinTransactionAmount?: number | undefined;
                    TradingMarginPercentage?: number | undefined;
                    AssetMarginPercentage?: number | undefined;
                } & { [K_38 in Exclude<keyof I_1["Assets"][number]["AssetDetails"]["StableCoinDetails"], keyof import("./sologenic/com-fs-asset-model/asset").StableCoin>]: never; }) | undefined;
                CommodityDetails?: ({
                    Category?: string | undefined;
                    Quality?: string | undefined;
                    UnitOfMeasure?: string | undefined;
                    Quantity?: number | undefined;
                    OriginCountry?: string | undefined;
                    ExchangeTickerSymbol?: string | undefined;
                    Exchange?: string | undefined;
                    MinTransactionAmount?: number | undefined;
                    StorageLocation?: string | undefined;
                    ContractType?: string | undefined;
                    DeliveryDate?: string | undefined;
                } & {
                    Category?: string | undefined;
                    Quality?: string | undefined;
                    UnitOfMeasure?: string | undefined;
                    Quantity?: number | undefined;
                    OriginCountry?: string | undefined;
                    ExchangeTickerSymbol?: string | undefined;
                    Exchange?: string | undefined;
                    MinTransactionAmount?: number | undefined;
                    StorageLocation?: string | undefined;
                    ContractType?: string | undefined;
                    DeliveryDate?: string | undefined;
                } & { [K_39 in Exclude<keyof I_1["Assets"][number]["AssetDetails"]["CommodityDetails"], keyof import("./sologenic/com-fs-asset-model/asset").Commodity>]: never; }) | undefined;
                CollectibleDetails?: ({
                    Category?: string | undefined;
                    CollectionName?: string | undefined;
                    TokenStandard?: string | undefined;
                    TokenID?: string | undefined;
                    MetadataURI?: string | undefined;
                    Creator?: string | undefined;
                    OwnershipHistory?: string[] | undefined;
                    CurrentOwner?: string | undefined;
                } & {
                    Category?: string | undefined;
                    CollectionName?: string | undefined;
                    TokenStandard?: string | undefined;
                    TokenID?: string | undefined;
                    MetadataURI?: string | undefined;
                    Creator?: string | undefined;
                    OwnershipHistory?: (string[] & string[] & { [K_40 in Exclude<keyof I_1["Assets"][number]["AssetDetails"]["CollectibleDetails"]["OwnershipHistory"], keyof string[]>]: never; }) | undefined;
                    CurrentOwner?: string | undefined;
                } & { [K_41 in Exclude<keyof I_1["Assets"][number]["AssetDetails"]["CollectibleDetails"], keyof import("./sologenic/com-fs-asset-model/asset").Collectible>]: never; }) | undefined;
                VehicleDetails?: ({
                    Category?: string | undefined;
                    Manufacturer?: string | undefined;
                    Model?: string | undefined;
                    SerialNumber?: string | undefined;
                    Year?: number | undefined;
                    Specifications?: string | undefined;
                    FuelType?: string | undefined;
                    UsageHours?: number | undefined;
                    Mileage?: number | undefined;
                    Condition?: string | undefined;
                    CurrentOwner?: string | undefined;
                    Location?: string | undefined;
                } & {
                    Category?: string | undefined;
                    Manufacturer?: string | undefined;
                    Model?: string | undefined;
                    SerialNumber?: string | undefined;
                    Year?: number | undefined;
                    Specifications?: string | undefined;
                    FuelType?: string | undefined;
                    UsageHours?: number | undefined;
                    Mileage?: number | undefined;
                    Condition?: string | undefined;
                    CurrentOwner?: string | undefined;
                    Location?: string | undefined;
                } & { [K_42 in Exclude<keyof I_1["Assets"][number]["AssetDetails"]["VehicleDetails"], keyof import("./sologenic/com-fs-asset-model/asset").Vehicle>]: never; }) | undefined;
                IntellectualPropertyDetails?: ({
                    Category?: string | undefined;
                    Owner?: string | undefined;
                    RegistrationNumber?: string | undefined;
                    FilingDate?: string | undefined;
                    ExpirationDate?: string | undefined;
                    IPJurisdictionIDs?: string[] | undefined;
                    LicenseType?: string | undefined;
                    LicenseTerms?: string | undefined;
                    Value?: number | undefined;
                } & {
                    Category?: string | undefined;
                    Owner?: string | undefined;
                    RegistrationNumber?: string | undefined;
                    FilingDate?: string | undefined;
                    ExpirationDate?: string | undefined;
                    IPJurisdictionIDs?: (string[] & string[] & { [K_43 in Exclude<keyof I_1["Assets"][number]["AssetDetails"]["IntellectualPropertyDetails"]["IPJurisdictionIDs"], keyof string[]>]: never; }) | undefined;
                    LicenseType?: string | undefined;
                    LicenseTerms?: string | undefined;
                    Value?: number | undefined;
                } & { [K_44 in Exclude<keyof I_1["Assets"][number]["AssetDetails"]["IntellectualPropertyDetails"], keyof import("./sologenic/com-fs-asset-model/asset").IntellectualProperty>]: never; }) | undefined;
                InvestmentFundDetails?: ({
                    FundType?: string | undefined;
                    Exchange?: string | undefined;
                    ISIN?: string | undefined;
                    NAV?: number | undefined;
                    InceptionDate?: string | undefined;
                    Manager?: string | undefined;
                    ExpenseRatio?: number | undefined;
                    Holdings?: string[] | undefined;
                } & {
                    FundType?: string | undefined;
                    Exchange?: string | undefined;
                    ISIN?: string | undefined;
                    NAV?: number | undefined;
                    InceptionDate?: string | undefined;
                    Manager?: string | undefined;
                    ExpenseRatio?: number | undefined;
                    Holdings?: (string[] & string[] & { [K_45 in Exclude<keyof I_1["Assets"][number]["AssetDetails"]["InvestmentFundDetails"]["Holdings"], keyof string[]>]: never; }) | undefined;
                } & { [K_46 in Exclude<keyof I_1["Assets"][number]["AssetDetails"]["InvestmentFundDetails"], keyof import("./sologenic/com-fs-asset-model/asset").InvestmentFund>]: never; }) | undefined;
                EquityDetails?: ({
                    ExchangeTickerSymbol?: string | undefined;
                    Exchange?: string | undefined;
                    MinTransactionAmount?: string | undefined;
                    ExtraPercentage?: string | undefined;
                    AssetMarginPercentage?: string | undefined;
                } & {
                    ExchangeTickerSymbol?: string | undefined;
                    Exchange?: string | undefined;
                    MinTransactionAmount?: string | undefined;
                    ExtraPercentage?: string | undefined;
                    AssetMarginPercentage?: string | undefined;
                } & { [K_47 in Exclude<keyof I_1["Assets"][number]["AssetDetails"]["EquityDetails"], keyof import("./sologenic/com-fs-asset-model/asset").Equity>]: never; }) | undefined;
                FinancialProperties?: ({
                    Symbol?: string | undefined;
                    Issuer?: string | undefined;
                    JurisdictionIDs?: string[] | undefined;
                    JurisdictionRestrictions?: string | undefined;
                    RedemptionTerms?: string | undefined;
                    ComplianceRequired?: boolean | undefined;
                    Type?: string | undefined;
                    TradeAllowances?: string[] | undefined;
                    Transferable?: boolean | undefined;
                    Platform?: string | undefined;
                    PlatformType?: string | undefined;
                    ContractAddress?: string | undefined;
                    Fractional?: boolean | undefined;
                    TotalSupply?: number | undefined;
                    DecimalPlacesSupply?: number | undefined;
                    Subunit?: string | undefined;
                    Price?: number | undefined;
                    DecimalPlacesPrice?: number | undefined;
                    Currency?: string | undefined;
                    InitialValuation?: number | undefined;
                    CurrentValuation?: number | undefined;
                    ValuationDate?: string | undefined;
                    Network?: Network | undefined;
                    Status?: string | undefined;
                } & {
                    Symbol?: string | undefined;
                    Issuer?: string | undefined;
                    JurisdictionIDs?: (string[] & string[] & { [K_48 in Exclude<keyof I_1["Assets"][number]["AssetDetails"]["FinancialProperties"]["JurisdictionIDs"], keyof string[]>]: never; }) | undefined;
                    JurisdictionRestrictions?: string | undefined;
                    RedemptionTerms?: string | undefined;
                    ComplianceRequired?: boolean | undefined;
                    Type?: string | undefined;
                    TradeAllowances?: (string[] & string[] & { [K_49 in Exclude<keyof I_1["Assets"][number]["AssetDetails"]["FinancialProperties"]["TradeAllowances"], keyof string[]>]: never; }) | undefined;
                    Transferable?: boolean | undefined;
                    Platform?: string | undefined;
                    PlatformType?: string | undefined;
                    ContractAddress?: string | undefined;
                    Fractional?: boolean | undefined;
                    TotalSupply?: number | undefined;
                    DecimalPlacesSupply?: number | undefined;
                    Subunit?: string | undefined;
                    Price?: number | undefined;
                    DecimalPlacesPrice?: number | undefined;
                    Currency?: string | undefined;
                    InitialValuation?: number | undefined;
                    CurrentValuation?: number | undefined;
                    ValuationDate?: string | undefined;
                    Network?: Network | undefined;
                    Status?: string | undefined;
                } & { [K_50 in Exclude<keyof I_1["Assets"][number]["AssetDetails"]["FinancialProperties"], keyof import("./sologenic/com-fs-asset-model/asset").FinancialProperties>]: never; }) | undefined;
                Description?: ({
                    Name?: string | undefined;
                    Description?: string | undefined;
                    Logo?: {
                        Reference?: string | undefined;
                        Extension?: string | undefined;
                        Name?: string | undefined;
                    } | undefined;
                    AssetID?: string | undefined;
                    URL?: string | undefined;
                    Country?: string | undefined;
                    Documents?: string[] | undefined;
                    Images?: string[] | undefined;
                    Vertical?: string | undefined;
                    CreatedAt?: string | undefined;
                    UpdatedAt?: string | undefined;
                } & {
                    Name?: string | undefined;
                    Description?: string | undefined;
                    Logo?: ({
                        Reference?: string | undefined;
                        Extension?: string | undefined;
                        Name?: string | undefined;
                    } & {
                        Reference?: string | undefined;
                        Extension?: string | undefined;
                        Name?: string | undefined;
                    } & { [K_51 in Exclude<keyof I_1["Assets"][number]["AssetDetails"]["Description"]["Logo"], keyof import("./sologenic/com-fs-asset-model/asset").LogoFile>]: never; }) | undefined;
                    AssetID?: string | undefined;
                    URL?: string | undefined;
                    Country?: string | undefined;
                    Documents?: (string[] & string[] & { [K_52 in Exclude<keyof I_1["Assets"][number]["AssetDetails"]["Description"]["Documents"], keyof string[]>]: never; }) | undefined;
                    Images?: (string[] & string[] & { [K_53 in Exclude<keyof I_1["Assets"][number]["AssetDetails"]["Description"]["Images"], keyof string[]>]: never; }) | undefined;
                    Vertical?: string | undefined;
                    CreatedAt?: string | undefined;
                    UpdatedAt?: string | undefined;
                } & { [K_54 in Exclude<keyof I_1["Assets"][number]["AssetDetails"]["Description"], keyof import("./sologenic/com-fs-asset-model/asset").Description>]: never; }) | undefined;
                ExternalResources?: ({
                    Links?: {
                        Type?: import("./sologenic/com-fs-asset-model/asset").LinkType | undefined;
                        URL?: string | undefined;
                    }[] | undefined;
                    Socials?: {
                        Type?: import("./sologenic/com-fs-asset-model/asset").SocialMediaType | undefined;
                        URL?: string | undefined;
                    }[] | undefined;
                } & {
                    Links?: ({
                        Type?: import("./sologenic/com-fs-asset-model/asset").LinkType | undefined;
                        URL?: string | undefined;
                    }[] & ({
                        Type?: import("./sologenic/com-fs-asset-model/asset").LinkType | undefined;
                        URL?: string | undefined;
                    } & {
                        Type?: import("./sologenic/com-fs-asset-model/asset").LinkType | undefined;
                        URL?: string | undefined;
                    } & { [K_55 in Exclude<keyof I_1["Assets"][number]["AssetDetails"]["ExternalResources"]["Links"][number], keyof import("./sologenic/com-fs-asset-model/asset").Link>]: never; })[] & { [K_56 in Exclude<keyof I_1["Assets"][number]["AssetDetails"]["ExternalResources"]["Links"], keyof {
                        Type?: import("./sologenic/com-fs-asset-model/asset").LinkType | undefined;
                        URL?: string | undefined;
                    }[]>]: never; }) | undefined;
                    Socials?: ({
                        Type?: import("./sologenic/com-fs-asset-model/asset").SocialMediaType | undefined;
                        URL?: string | undefined;
                    }[] & ({
                        Type?: import("./sologenic/com-fs-asset-model/asset").SocialMediaType | undefined;
                        URL?: string | undefined;
                    } & {
                        Type?: import("./sologenic/com-fs-asset-model/asset").SocialMediaType | undefined;
                        URL?: string | undefined;
                    } & { [K_57 in Exclude<keyof I_1["Assets"][number]["AssetDetails"]["ExternalResources"]["Socials"][number], keyof import("./sologenic/com-fs-asset-model/asset").SocialMedia>]: never; })[] & { [K_58 in Exclude<keyof I_1["Assets"][number]["AssetDetails"]["ExternalResources"]["Socials"], keyof {
                        Type?: import("./sologenic/com-fs-asset-model/asset").SocialMediaType | undefined;
                        URL?: string | undefined;
                    }[]>]: never; }) | undefined;
                } & { [K_59 in Exclude<keyof I_1["Assets"][number]["AssetDetails"]["ExternalResources"], keyof import("./sologenic/com-fs-asset-model/asset").ExternalResources>]: never; }) | undefined;
            } & { [K_60 in Exclude<keyof I_1["Assets"][number]["AssetDetails"], keyof import("./sologenic/com-fs-asset-model/asset").AssetDetails>]: never; }) | undefined;
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
            } & { [K_61 in Exclude<keyof I_1["Assets"][number]["MetaData"], keyof MetaData>]: never; }) | undefined;
            Audit?: ({
                ChangedBy?: string | undefined;
                ChangedAt?: Date | undefined;
                Reason?: string | undefined;
            } & {
                ChangedBy?: string | undefined;
                ChangedAt?: Date | undefined;
                Reason?: string | undefined;
            } & { [K_62 in Exclude<keyof I_1["Assets"][number]["Audit"], keyof Audit>]: never; }) | undefined;
            IssuerDetails?: ({
                Name?: string | undefined;
                Description?: string | undefined;
                Image?: string | undefined;
                ExternalUrl?: string | undefined;
                AddressLine1?: string | undefined;
                AddressLine2?: string | undefined;
                City?: string | undefined;
                Region?: string | undefined;
                PostalCode?: string | undefined;
                Country?: string | undefined;
                YearFounded?: number | undefined;
                Licensed?: boolean | undefined;
                LicenseCountry?: string | undefined;
                LicenseNumber?: string | undefined;
                Phone?: string | undefined;
                Email?: string | undefined;
                SocialMediaLinks?: string[] | undefined;
                KeyClients?: string | undefined;
                Press?: string | undefined;
            } & {
                Name?: string | undefined;
                Description?: string | undefined;
                Image?: string | undefined;
                ExternalUrl?: string | undefined;
                AddressLine1?: string | undefined;
                AddressLine2?: string | undefined;
                City?: string | undefined;
                Region?: string | undefined;
                PostalCode?: string | undefined;
                Country?: string | undefined;
                YearFounded?: number | undefined;
                Licensed?: boolean | undefined;
                LicenseCountry?: string | undefined;
                LicenseNumber?: string | undefined;
                Phone?: string | undefined;
                Email?: string | undefined;
                SocialMediaLinks?: (string[] & string[] & { [K_63 in Exclude<keyof I_1["Assets"][number]["IssuerDetails"]["SocialMediaLinks"], keyof string[]>]: never; }) | undefined;
                KeyClients?: string | undefined;
                Press?: string | undefined;
            } & { [K_64 in Exclude<keyof I_1["Assets"][number]["IssuerDetails"], keyof import("./sologenic/com-fs-asset-model/asset").IssuerDetails>]: never; }) | undefined;
        } & { [K_65 in Exclude<keyof I_1["Assets"][number], keyof Asset>]: never; })[] & { [K_66 in Exclude<keyof I_1["Assets"], keyof {
            AssetDetails?: {
                ID?: string | undefined;
                OrganizationID?: string | undefined;
                Status?: import("./sologenic/com-fs-asset-model/asset").AssetStatus | undefined;
                Reason?: import("./sologenic/com-fs-asset-model/asset").Reason | undefined;
                Type?: import("./sologenic/com-fs-asset-model/asset").AssetType | undefined;
                Denom?: {
                    Currency?: {
                        Symbol?: string | undefined;
                        Version?: string | undefined;
                    } | undefined;
                    Subunit?: string | undefined;
                    Issuer?: string | undefined;
                    Precision?: number | undefined;
                    Description?: string | undefined;
                } | undefined;
                IsIssuedInSmartContract?: boolean | undefined;
                SmartContractIssuerAddr?: string | undefined;
                RealEstateDetails?: {
                    Address?: string | undefined;
                    Bathrooms?: number | undefined;
                    Bedrooms?: number | undefined;
                    Latitude?: number | undefined;
                    Longitude?: number | undefined;
                    OwnershipType?: string | undefined;
                    PropertyType?: string | undefined;
                    RiskRating?: string | undefined;
                    SquareFootage?: number | undefined;
                    TenancyStatus?: string | undefined;
                    YearBuilt?: number | undefined;
                    YieldPercent?: number[] | undefined;
                } | undefined;
                StableCoinDetails?: {
                    Version?: string | undefined;
                    PegType?: string | undefined;
                    PegRatio?: number | undefined;
                    BackingAsset?: string | undefined;
                    ExchangeTickerSymbol?: string | undefined;
                    Exchange?: string | undefined;
                    MinTransactionAmount?: number | undefined;
                    TradingMarginPercentage?: number | undefined;
                    AssetMarginPercentage?: number | undefined;
                } | undefined;
                CommodityDetails?: {
                    Category?: string | undefined;
                    Quality?: string | undefined;
                    UnitOfMeasure?: string | undefined;
                    Quantity?: number | undefined;
                    OriginCountry?: string | undefined;
                    ExchangeTickerSymbol?: string | undefined;
                    Exchange?: string | undefined;
                    MinTransactionAmount?: number | undefined;
                    StorageLocation?: string | undefined;
                    ContractType?: string | undefined;
                    DeliveryDate?: string | undefined;
                } | undefined;
                CollectibleDetails?: {
                    Category?: string | undefined;
                    CollectionName?: string | undefined;
                    TokenStandard?: string | undefined;
                    TokenID?: string | undefined;
                    MetadataURI?: string | undefined;
                    Creator?: string | undefined;
                    OwnershipHistory?: string[] | undefined;
                    CurrentOwner?: string | undefined;
                } | undefined;
                VehicleDetails?: {
                    Category?: string | undefined;
                    Manufacturer?: string | undefined;
                    Model?: string | undefined;
                    SerialNumber?: string | undefined;
                    Year?: number | undefined;
                    Specifications?: string | undefined;
                    FuelType?: string | undefined;
                    UsageHours?: number | undefined;
                    Mileage?: number | undefined;
                    Condition?: string | undefined;
                    CurrentOwner?: string | undefined;
                    Location?: string | undefined;
                } | undefined;
                IntellectualPropertyDetails?: {
                    Category?: string | undefined;
                    Owner?: string | undefined;
                    RegistrationNumber?: string | undefined;
                    FilingDate?: string | undefined;
                    ExpirationDate?: string | undefined;
                    IPJurisdictionIDs?: string[] | undefined;
                    LicenseType?: string | undefined;
                    LicenseTerms?: string | undefined;
                    Value?: number | undefined;
                } | undefined;
                InvestmentFundDetails?: {
                    FundType?: string | undefined;
                    Exchange?: string | undefined;
                    ISIN?: string | undefined;
                    NAV?: number | undefined;
                    InceptionDate?: string | undefined;
                    Manager?: string | undefined;
                    ExpenseRatio?: number | undefined;
                    Holdings?: string[] | undefined;
                } | undefined;
                EquityDetails?: {
                    ExchangeTickerSymbol?: string | undefined;
                    Exchange?: string | undefined;
                    MinTransactionAmount?: string | undefined;
                    ExtraPercentage?: string | undefined;
                    AssetMarginPercentage?: string | undefined;
                } | undefined;
                FinancialProperties?: {
                    Symbol?: string | undefined;
                    Issuer?: string | undefined;
                    JurisdictionIDs?: string[] | undefined;
                    JurisdictionRestrictions?: string | undefined;
                    RedemptionTerms?: string | undefined;
                    ComplianceRequired?: boolean | undefined;
                    Type?: string | undefined;
                    TradeAllowances?: string[] | undefined;
                    Transferable?: boolean | undefined;
                    Platform?: string | undefined;
                    PlatformType?: string | undefined;
                    ContractAddress?: string | undefined;
                    Fractional?: boolean | undefined;
                    TotalSupply?: number | undefined;
                    DecimalPlacesSupply?: number | undefined;
                    Subunit?: string | undefined;
                    Price?: number | undefined;
                    DecimalPlacesPrice?: number | undefined;
                    Currency?: string | undefined;
                    InitialValuation?: number | undefined;
                    CurrentValuation?: number | undefined;
                    ValuationDate?: string | undefined;
                    Network?: Network | undefined;
                    Status?: string | undefined;
                } | undefined;
                Description?: {
                    Name?: string | undefined;
                    Description?: string | undefined;
                    Logo?: {
                        Reference?: string | undefined;
                        Extension?: string | undefined;
                        Name?: string | undefined;
                    } | undefined;
                    AssetID?: string | undefined;
                    URL?: string | undefined;
                    Country?: string | undefined;
                    Documents?: string[] | undefined;
                    Images?: string[] | undefined;
                    Vertical?: string | undefined;
                    CreatedAt?: string | undefined;
                    UpdatedAt?: string | undefined;
                } | undefined;
                ExternalResources?: {
                    Links?: {
                        Type?: import("./sologenic/com-fs-asset-model/asset").LinkType | undefined;
                        URL?: string | undefined;
                    }[] | undefined;
                    Socials?: {
                        Type?: import("./sologenic/com-fs-asset-model/asset").SocialMediaType | undefined;
                        URL?: string | undefined;
                    }[] | undefined;
                } | undefined;
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
            IssuerDetails?: {
                Name?: string | undefined;
                Description?: string | undefined;
                Image?: string | undefined;
                ExternalUrl?: string | undefined;
                AddressLine1?: string | undefined;
                AddressLine2?: string | undefined;
                City?: string | undefined;
                Region?: string | undefined;
                PostalCode?: string | undefined;
                Country?: string | undefined;
                YearFounded?: number | undefined;
                Licensed?: boolean | undefined;
                LicenseCountry?: string | undefined;
                LicenseNumber?: string | undefined;
                Phone?: string | undefined;
                Email?: string | undefined;
                SocialMediaLinks?: string[] | undefined;
                KeyClients?: string | undefined;
                Press?: string | undefined;
            } | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_67 in Exclude<keyof I_1, keyof DynamicAssetDetails>]: never; }>(object: I_1): DynamicAssetDetails;
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
            Assets?: {
                AssetDetails?: {
                    ID?: string | undefined;
                    OrganizationID?: string | undefined;
                    Status?: import("./sologenic/com-fs-asset-model/asset").AssetStatus | undefined;
                    Reason?: import("./sologenic/com-fs-asset-model/asset").Reason | undefined;
                    Type?: import("./sologenic/com-fs-asset-model/asset").AssetType | undefined;
                    Denom?: {
                        Currency?: {
                            Symbol?: string | undefined;
                            Version?: string | undefined;
                        } | undefined;
                        Subunit?: string | undefined;
                        Issuer?: string | undefined;
                        Precision?: number | undefined;
                        Description?: string | undefined;
                    } | undefined;
                    IsIssuedInSmartContract?: boolean | undefined;
                    SmartContractIssuerAddr?: string | undefined;
                    RealEstateDetails?: {
                        Address?: string | undefined;
                        Bathrooms?: number | undefined;
                        Bedrooms?: number | undefined;
                        Latitude?: number | undefined;
                        Longitude?: number | undefined;
                        OwnershipType?: string | undefined;
                        PropertyType?: string | undefined;
                        RiskRating?: string | undefined;
                        SquareFootage?: number | undefined;
                        TenancyStatus?: string | undefined;
                        YearBuilt?: number | undefined;
                        YieldPercent?: number[] | undefined;
                    } | undefined;
                    StableCoinDetails?: {
                        Version?: string | undefined;
                        PegType?: string | undefined;
                        PegRatio?: number | undefined;
                        BackingAsset?: string | undefined;
                        ExchangeTickerSymbol?: string | undefined;
                        Exchange?: string | undefined;
                        MinTransactionAmount?: number | undefined;
                        TradingMarginPercentage?: number | undefined;
                        AssetMarginPercentage?: number | undefined;
                    } | undefined;
                    CommodityDetails?: {
                        Category?: string | undefined;
                        Quality?: string | undefined;
                        UnitOfMeasure?: string | undefined;
                        Quantity?: number | undefined;
                        OriginCountry?: string | undefined;
                        ExchangeTickerSymbol?: string | undefined;
                        Exchange?: string | undefined;
                        MinTransactionAmount?: number | undefined;
                        StorageLocation?: string | undefined;
                        ContractType?: string | undefined;
                        DeliveryDate?: string | undefined;
                    } | undefined;
                    CollectibleDetails?: {
                        Category?: string | undefined;
                        CollectionName?: string | undefined;
                        TokenStandard?: string | undefined;
                        TokenID?: string | undefined;
                        MetadataURI?: string | undefined;
                        Creator?: string | undefined;
                        OwnershipHistory?: string[] | undefined;
                        CurrentOwner?: string | undefined;
                    } | undefined;
                    VehicleDetails?: {
                        Category?: string | undefined;
                        Manufacturer?: string | undefined;
                        Model?: string | undefined;
                        SerialNumber?: string | undefined;
                        Year?: number | undefined;
                        Specifications?: string | undefined;
                        FuelType?: string | undefined;
                        UsageHours?: number | undefined;
                        Mileage?: number | undefined;
                        Condition?: string | undefined;
                        CurrentOwner?: string | undefined;
                        Location?: string | undefined;
                    } | undefined;
                    IntellectualPropertyDetails?: {
                        Category?: string | undefined;
                        Owner?: string | undefined;
                        RegistrationNumber?: string | undefined;
                        FilingDate?: string | undefined;
                        ExpirationDate?: string | undefined;
                        IPJurisdictionIDs?: string[] | undefined;
                        LicenseType?: string | undefined;
                        LicenseTerms?: string | undefined;
                        Value?: number | undefined;
                    } | undefined;
                    InvestmentFundDetails?: {
                        FundType?: string | undefined;
                        Exchange?: string | undefined;
                        ISIN?: string | undefined;
                        NAV?: number | undefined;
                        InceptionDate?: string | undefined;
                        Manager?: string | undefined;
                        ExpenseRatio?: number | undefined;
                        Holdings?: string[] | undefined;
                    } | undefined;
                    EquityDetails?: {
                        ExchangeTickerSymbol?: string | undefined;
                        Exchange?: string | undefined;
                        MinTransactionAmount?: string | undefined;
                        ExtraPercentage?: string | undefined;
                        AssetMarginPercentage?: string | undefined;
                    } | undefined;
                    FinancialProperties?: {
                        Symbol?: string | undefined;
                        Issuer?: string | undefined;
                        JurisdictionIDs?: string[] | undefined;
                        JurisdictionRestrictions?: string | undefined;
                        RedemptionTerms?: string | undefined;
                        ComplianceRequired?: boolean | undefined;
                        Type?: string | undefined;
                        TradeAllowances?: string[] | undefined;
                        Transferable?: boolean | undefined;
                        Platform?: string | undefined;
                        PlatformType?: string | undefined;
                        ContractAddress?: string | undefined;
                        Fractional?: boolean | undefined;
                        TotalSupply?: number | undefined;
                        DecimalPlacesSupply?: number | undefined;
                        Subunit?: string | undefined;
                        Price?: number | undefined;
                        DecimalPlacesPrice?: number | undefined;
                        Currency?: string | undefined;
                        InitialValuation?: number | undefined;
                        CurrentValuation?: number | undefined;
                        ValuationDate?: string | undefined;
                        Network?: Network | undefined;
                        Status?: string | undefined;
                    } | undefined;
                    Description?: {
                        Name?: string | undefined;
                        Description?: string | undefined;
                        Logo?: {
                            Reference?: string | undefined;
                            Extension?: string | undefined;
                            Name?: string | undefined;
                        } | undefined;
                        AssetID?: string | undefined;
                        URL?: string | undefined;
                        Country?: string | undefined;
                        Documents?: string[] | undefined;
                        Images?: string[] | undefined;
                        Vertical?: string | undefined;
                        CreatedAt?: string | undefined;
                        UpdatedAt?: string | undefined;
                    } | undefined;
                    ExternalResources?: {
                        Links?: {
                            Type?: import("./sologenic/com-fs-asset-model/asset").LinkType | undefined;
                            URL?: string | undefined;
                        }[] | undefined;
                        Socials?: {
                            Type?: import("./sologenic/com-fs-asset-model/asset").SocialMediaType | undefined;
                            URL?: string | undefined;
                        }[] | undefined;
                    } | undefined;
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
                IssuerDetails?: {
                    Name?: string | undefined;
                    Description?: string | undefined;
                    Image?: string | undefined;
                    ExternalUrl?: string | undefined;
                    AddressLine1?: string | undefined;
                    AddressLine2?: string | undefined;
                    City?: string | undefined;
                    Region?: string | undefined;
                    PostalCode?: string | undefined;
                    Country?: string | undefined;
                    YearFounded?: number | undefined;
                    Licensed?: boolean | undefined;
                    LicenseCountry?: string | undefined;
                    LicenseNumber?: string | undefined;
                    Phone?: string | undefined;
                    Email?: string | undefined;
                    SocialMediaLinks?: string[] | undefined;
                    KeyClients?: string | undefined;
                    Press?: string | undefined;
                } | undefined;
            }[] | undefined;
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
            Assets?: {
                AssetDetails?: {
                    ID?: string | undefined;
                    OrganizationID?: string | undefined;
                    Status?: import("./sologenic/com-fs-asset-model/asset").AssetStatus | undefined;
                    Reason?: import("./sologenic/com-fs-asset-model/asset").Reason | undefined;
                    Type?: import("./sologenic/com-fs-asset-model/asset").AssetType | undefined;
                    Denom?: {
                        Currency?: {
                            Symbol?: string | undefined;
                            Version?: string | undefined;
                        } | undefined;
                        Subunit?: string | undefined;
                        Issuer?: string | undefined;
                        Precision?: number | undefined;
                        Description?: string | undefined;
                    } | undefined;
                    IsIssuedInSmartContract?: boolean | undefined;
                    SmartContractIssuerAddr?: string | undefined;
                    RealEstateDetails?: {
                        Address?: string | undefined;
                        Bathrooms?: number | undefined;
                        Bedrooms?: number | undefined;
                        Latitude?: number | undefined;
                        Longitude?: number | undefined;
                        OwnershipType?: string | undefined;
                        PropertyType?: string | undefined;
                        RiskRating?: string | undefined;
                        SquareFootage?: number | undefined;
                        TenancyStatus?: string | undefined;
                        YearBuilt?: number | undefined;
                        YieldPercent?: number[] | undefined;
                    } | undefined;
                    StableCoinDetails?: {
                        Version?: string | undefined;
                        PegType?: string | undefined;
                        PegRatio?: number | undefined;
                        BackingAsset?: string | undefined;
                        ExchangeTickerSymbol?: string | undefined;
                        Exchange?: string | undefined;
                        MinTransactionAmount?: number | undefined;
                        TradingMarginPercentage?: number | undefined;
                        AssetMarginPercentage?: number | undefined;
                    } | undefined;
                    CommodityDetails?: {
                        Category?: string | undefined;
                        Quality?: string | undefined;
                        UnitOfMeasure?: string | undefined;
                        Quantity?: number | undefined;
                        OriginCountry?: string | undefined;
                        ExchangeTickerSymbol?: string | undefined;
                        Exchange?: string | undefined;
                        MinTransactionAmount?: number | undefined;
                        StorageLocation?: string | undefined;
                        ContractType?: string | undefined;
                        DeliveryDate?: string | undefined;
                    } | undefined;
                    CollectibleDetails?: {
                        Category?: string | undefined;
                        CollectionName?: string | undefined;
                        TokenStandard?: string | undefined;
                        TokenID?: string | undefined;
                        MetadataURI?: string | undefined;
                        Creator?: string | undefined;
                        OwnershipHistory?: string[] | undefined;
                        CurrentOwner?: string | undefined;
                    } | undefined;
                    VehicleDetails?: {
                        Category?: string | undefined;
                        Manufacturer?: string | undefined;
                        Model?: string | undefined;
                        SerialNumber?: string | undefined;
                        Year?: number | undefined;
                        Specifications?: string | undefined;
                        FuelType?: string | undefined;
                        UsageHours?: number | undefined;
                        Mileage?: number | undefined;
                        Condition?: string | undefined;
                        CurrentOwner?: string | undefined;
                        Location?: string | undefined;
                    } | undefined;
                    IntellectualPropertyDetails?: {
                        Category?: string | undefined;
                        Owner?: string | undefined;
                        RegistrationNumber?: string | undefined;
                        FilingDate?: string | undefined;
                        ExpirationDate?: string | undefined;
                        IPJurisdictionIDs?: string[] | undefined;
                        LicenseType?: string | undefined;
                        LicenseTerms?: string | undefined;
                        Value?: number | undefined;
                    } | undefined;
                    InvestmentFundDetails?: {
                        FundType?: string | undefined;
                        Exchange?: string | undefined;
                        ISIN?: string | undefined;
                        NAV?: number | undefined;
                        InceptionDate?: string | undefined;
                        Manager?: string | undefined;
                        ExpenseRatio?: number | undefined;
                        Holdings?: string[] | undefined;
                    } | undefined;
                    EquityDetails?: {
                        ExchangeTickerSymbol?: string | undefined;
                        Exchange?: string | undefined;
                        MinTransactionAmount?: string | undefined;
                        ExtraPercentage?: string | undefined;
                        AssetMarginPercentage?: string | undefined;
                    } | undefined;
                    FinancialProperties?: {
                        Symbol?: string | undefined;
                        Issuer?: string | undefined;
                        JurisdictionIDs?: string[] | undefined;
                        JurisdictionRestrictions?: string | undefined;
                        RedemptionTerms?: string | undefined;
                        ComplianceRequired?: boolean | undefined;
                        Type?: string | undefined;
                        TradeAllowances?: string[] | undefined;
                        Transferable?: boolean | undefined;
                        Platform?: string | undefined;
                        PlatformType?: string | undefined;
                        ContractAddress?: string | undefined;
                        Fractional?: boolean | undefined;
                        TotalSupply?: number | undefined;
                        DecimalPlacesSupply?: number | undefined;
                        Subunit?: string | undefined;
                        Price?: number | undefined;
                        DecimalPlacesPrice?: number | undefined;
                        Currency?: string | undefined;
                        InitialValuation?: number | undefined;
                        CurrentValuation?: number | undefined;
                        ValuationDate?: string | undefined;
                        Network?: Network | undefined;
                        Status?: string | undefined;
                    } | undefined;
                    Description?: {
                        Name?: string | undefined;
                        Description?: string | undefined;
                        Logo?: {
                            Reference?: string | undefined;
                            Extension?: string | undefined;
                            Name?: string | undefined;
                        } | undefined;
                        AssetID?: string | undefined;
                        URL?: string | undefined;
                        Country?: string | undefined;
                        Documents?: string[] | undefined;
                        Images?: string[] | undefined;
                        Vertical?: string | undefined;
                        CreatedAt?: string | undefined;
                        UpdatedAt?: string | undefined;
                    } | undefined;
                    ExternalResources?: {
                        Links?: {
                            Type?: import("./sologenic/com-fs-asset-model/asset").LinkType | undefined;
                            URL?: string | undefined;
                        }[] | undefined;
                        Socials?: {
                            Type?: import("./sologenic/com-fs-asset-model/asset").SocialMediaType | undefined;
                            URL?: string | undefined;
                        }[] | undefined;
                    } | undefined;
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
                IssuerDetails?: {
                    Name?: string | undefined;
                    Description?: string | undefined;
                    Image?: string | undefined;
                    ExternalUrl?: string | undefined;
                    AddressLine1?: string | undefined;
                    AddressLine2?: string | undefined;
                    City?: string | undefined;
                    Region?: string | undefined;
                    PostalCode?: string | undefined;
                    Country?: string | undefined;
                    YearFounded?: number | undefined;
                    Licensed?: boolean | undefined;
                    LicenseCountry?: string | undefined;
                    LicenseNumber?: string | undefined;
                    Phone?: string | undefined;
                    Email?: string | undefined;
                    SocialMediaLinks?: string[] | undefined;
                    KeyClients?: string | undefined;
                    Press?: string | undefined;
                } | undefined;
            }[] | undefined;
        } & {
            DynamicAssetID?: string | undefined;
            Title?: string | undefined;
            Description?: string | undefined;
            Identifier?: string | undefined;
            OrganizationID?: string | undefined;
            Assets?: ({
                AssetDetails?: {
                    ID?: string | undefined;
                    OrganizationID?: string | undefined;
                    Status?: import("./sologenic/com-fs-asset-model/asset").AssetStatus | undefined;
                    Reason?: import("./sologenic/com-fs-asset-model/asset").Reason | undefined;
                    Type?: import("./sologenic/com-fs-asset-model/asset").AssetType | undefined;
                    Denom?: {
                        Currency?: {
                            Symbol?: string | undefined;
                            Version?: string | undefined;
                        } | undefined;
                        Subunit?: string | undefined;
                        Issuer?: string | undefined;
                        Precision?: number | undefined;
                        Description?: string | undefined;
                    } | undefined;
                    IsIssuedInSmartContract?: boolean | undefined;
                    SmartContractIssuerAddr?: string | undefined;
                    RealEstateDetails?: {
                        Address?: string | undefined;
                        Bathrooms?: number | undefined;
                        Bedrooms?: number | undefined;
                        Latitude?: number | undefined;
                        Longitude?: number | undefined;
                        OwnershipType?: string | undefined;
                        PropertyType?: string | undefined;
                        RiskRating?: string | undefined;
                        SquareFootage?: number | undefined;
                        TenancyStatus?: string | undefined;
                        YearBuilt?: number | undefined;
                        YieldPercent?: number[] | undefined;
                    } | undefined;
                    StableCoinDetails?: {
                        Version?: string | undefined;
                        PegType?: string | undefined;
                        PegRatio?: number | undefined;
                        BackingAsset?: string | undefined;
                        ExchangeTickerSymbol?: string | undefined;
                        Exchange?: string | undefined;
                        MinTransactionAmount?: number | undefined;
                        TradingMarginPercentage?: number | undefined;
                        AssetMarginPercentage?: number | undefined;
                    } | undefined;
                    CommodityDetails?: {
                        Category?: string | undefined;
                        Quality?: string | undefined;
                        UnitOfMeasure?: string | undefined;
                        Quantity?: number | undefined;
                        OriginCountry?: string | undefined;
                        ExchangeTickerSymbol?: string | undefined;
                        Exchange?: string | undefined;
                        MinTransactionAmount?: number | undefined;
                        StorageLocation?: string | undefined;
                        ContractType?: string | undefined;
                        DeliveryDate?: string | undefined;
                    } | undefined;
                    CollectibleDetails?: {
                        Category?: string | undefined;
                        CollectionName?: string | undefined;
                        TokenStandard?: string | undefined;
                        TokenID?: string | undefined;
                        MetadataURI?: string | undefined;
                        Creator?: string | undefined;
                        OwnershipHistory?: string[] | undefined;
                        CurrentOwner?: string | undefined;
                    } | undefined;
                    VehicleDetails?: {
                        Category?: string | undefined;
                        Manufacturer?: string | undefined;
                        Model?: string | undefined;
                        SerialNumber?: string | undefined;
                        Year?: number | undefined;
                        Specifications?: string | undefined;
                        FuelType?: string | undefined;
                        UsageHours?: number | undefined;
                        Mileage?: number | undefined;
                        Condition?: string | undefined;
                        CurrentOwner?: string | undefined;
                        Location?: string | undefined;
                    } | undefined;
                    IntellectualPropertyDetails?: {
                        Category?: string | undefined;
                        Owner?: string | undefined;
                        RegistrationNumber?: string | undefined;
                        FilingDate?: string | undefined;
                        ExpirationDate?: string | undefined;
                        IPJurisdictionIDs?: string[] | undefined;
                        LicenseType?: string | undefined;
                        LicenseTerms?: string | undefined;
                        Value?: number | undefined;
                    } | undefined;
                    InvestmentFundDetails?: {
                        FundType?: string | undefined;
                        Exchange?: string | undefined;
                        ISIN?: string | undefined;
                        NAV?: number | undefined;
                        InceptionDate?: string | undefined;
                        Manager?: string | undefined;
                        ExpenseRatio?: number | undefined;
                        Holdings?: string[] | undefined;
                    } | undefined;
                    EquityDetails?: {
                        ExchangeTickerSymbol?: string | undefined;
                        Exchange?: string | undefined;
                        MinTransactionAmount?: string | undefined;
                        ExtraPercentage?: string | undefined;
                        AssetMarginPercentage?: string | undefined;
                    } | undefined;
                    FinancialProperties?: {
                        Symbol?: string | undefined;
                        Issuer?: string | undefined;
                        JurisdictionIDs?: string[] | undefined;
                        JurisdictionRestrictions?: string | undefined;
                        RedemptionTerms?: string | undefined;
                        ComplianceRequired?: boolean | undefined;
                        Type?: string | undefined;
                        TradeAllowances?: string[] | undefined;
                        Transferable?: boolean | undefined;
                        Platform?: string | undefined;
                        PlatformType?: string | undefined;
                        ContractAddress?: string | undefined;
                        Fractional?: boolean | undefined;
                        TotalSupply?: number | undefined;
                        DecimalPlacesSupply?: number | undefined;
                        Subunit?: string | undefined;
                        Price?: number | undefined;
                        DecimalPlacesPrice?: number | undefined;
                        Currency?: string | undefined;
                        InitialValuation?: number | undefined;
                        CurrentValuation?: number | undefined;
                        ValuationDate?: string | undefined;
                        Network?: Network | undefined;
                        Status?: string | undefined;
                    } | undefined;
                    Description?: {
                        Name?: string | undefined;
                        Description?: string | undefined;
                        Logo?: {
                            Reference?: string | undefined;
                            Extension?: string | undefined;
                            Name?: string | undefined;
                        } | undefined;
                        AssetID?: string | undefined;
                        URL?: string | undefined;
                        Country?: string | undefined;
                        Documents?: string[] | undefined;
                        Images?: string[] | undefined;
                        Vertical?: string | undefined;
                        CreatedAt?: string | undefined;
                        UpdatedAt?: string | undefined;
                    } | undefined;
                    ExternalResources?: {
                        Links?: {
                            Type?: import("./sologenic/com-fs-asset-model/asset").LinkType | undefined;
                            URL?: string | undefined;
                        }[] | undefined;
                        Socials?: {
                            Type?: import("./sologenic/com-fs-asset-model/asset").SocialMediaType | undefined;
                            URL?: string | undefined;
                        }[] | undefined;
                    } | undefined;
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
                IssuerDetails?: {
                    Name?: string | undefined;
                    Description?: string | undefined;
                    Image?: string | undefined;
                    ExternalUrl?: string | undefined;
                    AddressLine1?: string | undefined;
                    AddressLine2?: string | undefined;
                    City?: string | undefined;
                    Region?: string | undefined;
                    PostalCode?: string | undefined;
                    Country?: string | undefined;
                    YearFounded?: number | undefined;
                    Licensed?: boolean | undefined;
                    LicenseCountry?: string | undefined;
                    LicenseNumber?: string | undefined;
                    Phone?: string | undefined;
                    Email?: string | undefined;
                    SocialMediaLinks?: string[] | undefined;
                    KeyClients?: string | undefined;
                    Press?: string | undefined;
                } | undefined;
            }[] & ({
                AssetDetails?: {
                    ID?: string | undefined;
                    OrganizationID?: string | undefined;
                    Status?: import("./sologenic/com-fs-asset-model/asset").AssetStatus | undefined;
                    Reason?: import("./sologenic/com-fs-asset-model/asset").Reason | undefined;
                    Type?: import("./sologenic/com-fs-asset-model/asset").AssetType | undefined;
                    Denom?: {
                        Currency?: {
                            Symbol?: string | undefined;
                            Version?: string | undefined;
                        } | undefined;
                        Subunit?: string | undefined;
                        Issuer?: string | undefined;
                        Precision?: number | undefined;
                        Description?: string | undefined;
                    } | undefined;
                    IsIssuedInSmartContract?: boolean | undefined;
                    SmartContractIssuerAddr?: string | undefined;
                    RealEstateDetails?: {
                        Address?: string | undefined;
                        Bathrooms?: number | undefined;
                        Bedrooms?: number | undefined;
                        Latitude?: number | undefined;
                        Longitude?: number | undefined;
                        OwnershipType?: string | undefined;
                        PropertyType?: string | undefined;
                        RiskRating?: string | undefined;
                        SquareFootage?: number | undefined;
                        TenancyStatus?: string | undefined;
                        YearBuilt?: number | undefined;
                        YieldPercent?: number[] | undefined;
                    } | undefined;
                    StableCoinDetails?: {
                        Version?: string | undefined;
                        PegType?: string | undefined;
                        PegRatio?: number | undefined;
                        BackingAsset?: string | undefined;
                        ExchangeTickerSymbol?: string | undefined;
                        Exchange?: string | undefined;
                        MinTransactionAmount?: number | undefined;
                        TradingMarginPercentage?: number | undefined;
                        AssetMarginPercentage?: number | undefined;
                    } | undefined;
                    CommodityDetails?: {
                        Category?: string | undefined;
                        Quality?: string | undefined;
                        UnitOfMeasure?: string | undefined;
                        Quantity?: number | undefined;
                        OriginCountry?: string | undefined;
                        ExchangeTickerSymbol?: string | undefined;
                        Exchange?: string | undefined;
                        MinTransactionAmount?: number | undefined;
                        StorageLocation?: string | undefined;
                        ContractType?: string | undefined;
                        DeliveryDate?: string | undefined;
                    } | undefined;
                    CollectibleDetails?: {
                        Category?: string | undefined;
                        CollectionName?: string | undefined;
                        TokenStandard?: string | undefined;
                        TokenID?: string | undefined;
                        MetadataURI?: string | undefined;
                        Creator?: string | undefined;
                        OwnershipHistory?: string[] | undefined;
                        CurrentOwner?: string | undefined;
                    } | undefined;
                    VehicleDetails?: {
                        Category?: string | undefined;
                        Manufacturer?: string | undefined;
                        Model?: string | undefined;
                        SerialNumber?: string | undefined;
                        Year?: number | undefined;
                        Specifications?: string | undefined;
                        FuelType?: string | undefined;
                        UsageHours?: number | undefined;
                        Mileage?: number | undefined;
                        Condition?: string | undefined;
                        CurrentOwner?: string | undefined;
                        Location?: string | undefined;
                    } | undefined;
                    IntellectualPropertyDetails?: {
                        Category?: string | undefined;
                        Owner?: string | undefined;
                        RegistrationNumber?: string | undefined;
                        FilingDate?: string | undefined;
                        ExpirationDate?: string | undefined;
                        IPJurisdictionIDs?: string[] | undefined;
                        LicenseType?: string | undefined;
                        LicenseTerms?: string | undefined;
                        Value?: number | undefined;
                    } | undefined;
                    InvestmentFundDetails?: {
                        FundType?: string | undefined;
                        Exchange?: string | undefined;
                        ISIN?: string | undefined;
                        NAV?: number | undefined;
                        InceptionDate?: string | undefined;
                        Manager?: string | undefined;
                        ExpenseRatio?: number | undefined;
                        Holdings?: string[] | undefined;
                    } | undefined;
                    EquityDetails?: {
                        ExchangeTickerSymbol?: string | undefined;
                        Exchange?: string | undefined;
                        MinTransactionAmount?: string | undefined;
                        ExtraPercentage?: string | undefined;
                        AssetMarginPercentage?: string | undefined;
                    } | undefined;
                    FinancialProperties?: {
                        Symbol?: string | undefined;
                        Issuer?: string | undefined;
                        JurisdictionIDs?: string[] | undefined;
                        JurisdictionRestrictions?: string | undefined;
                        RedemptionTerms?: string | undefined;
                        ComplianceRequired?: boolean | undefined;
                        Type?: string | undefined;
                        TradeAllowances?: string[] | undefined;
                        Transferable?: boolean | undefined;
                        Platform?: string | undefined;
                        PlatformType?: string | undefined;
                        ContractAddress?: string | undefined;
                        Fractional?: boolean | undefined;
                        TotalSupply?: number | undefined;
                        DecimalPlacesSupply?: number | undefined;
                        Subunit?: string | undefined;
                        Price?: number | undefined;
                        DecimalPlacesPrice?: number | undefined;
                        Currency?: string | undefined;
                        InitialValuation?: number | undefined;
                        CurrentValuation?: number | undefined;
                        ValuationDate?: string | undefined;
                        Network?: Network | undefined;
                        Status?: string | undefined;
                    } | undefined;
                    Description?: {
                        Name?: string | undefined;
                        Description?: string | undefined;
                        Logo?: {
                            Reference?: string | undefined;
                            Extension?: string | undefined;
                            Name?: string | undefined;
                        } | undefined;
                        AssetID?: string | undefined;
                        URL?: string | undefined;
                        Country?: string | undefined;
                        Documents?: string[] | undefined;
                        Images?: string[] | undefined;
                        Vertical?: string | undefined;
                        CreatedAt?: string | undefined;
                        UpdatedAt?: string | undefined;
                    } | undefined;
                    ExternalResources?: {
                        Links?: {
                            Type?: import("./sologenic/com-fs-asset-model/asset").LinkType | undefined;
                            URL?: string | undefined;
                        }[] | undefined;
                        Socials?: {
                            Type?: import("./sologenic/com-fs-asset-model/asset").SocialMediaType | undefined;
                            URL?: string | undefined;
                        }[] | undefined;
                    } | undefined;
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
                IssuerDetails?: {
                    Name?: string | undefined;
                    Description?: string | undefined;
                    Image?: string | undefined;
                    ExternalUrl?: string | undefined;
                    AddressLine1?: string | undefined;
                    AddressLine2?: string | undefined;
                    City?: string | undefined;
                    Region?: string | undefined;
                    PostalCode?: string | undefined;
                    Country?: string | undefined;
                    YearFounded?: number | undefined;
                    Licensed?: boolean | undefined;
                    LicenseCountry?: string | undefined;
                    LicenseNumber?: string | undefined;
                    Phone?: string | undefined;
                    Email?: string | undefined;
                    SocialMediaLinks?: string[] | undefined;
                    KeyClients?: string | undefined;
                    Press?: string | undefined;
                } | undefined;
            } & {
                AssetDetails?: ({
                    ID?: string | undefined;
                    OrganizationID?: string | undefined;
                    Status?: import("./sologenic/com-fs-asset-model/asset").AssetStatus | undefined;
                    Reason?: import("./sologenic/com-fs-asset-model/asset").Reason | undefined;
                    Type?: import("./sologenic/com-fs-asset-model/asset").AssetType | undefined;
                    Denom?: {
                        Currency?: {
                            Symbol?: string | undefined;
                            Version?: string | undefined;
                        } | undefined;
                        Subunit?: string | undefined;
                        Issuer?: string | undefined;
                        Precision?: number | undefined;
                        Description?: string | undefined;
                    } | undefined;
                    IsIssuedInSmartContract?: boolean | undefined;
                    SmartContractIssuerAddr?: string | undefined;
                    RealEstateDetails?: {
                        Address?: string | undefined;
                        Bathrooms?: number | undefined;
                        Bedrooms?: number | undefined;
                        Latitude?: number | undefined;
                        Longitude?: number | undefined;
                        OwnershipType?: string | undefined;
                        PropertyType?: string | undefined;
                        RiskRating?: string | undefined;
                        SquareFootage?: number | undefined;
                        TenancyStatus?: string | undefined;
                        YearBuilt?: number | undefined;
                        YieldPercent?: number[] | undefined;
                    } | undefined;
                    StableCoinDetails?: {
                        Version?: string | undefined;
                        PegType?: string | undefined;
                        PegRatio?: number | undefined;
                        BackingAsset?: string | undefined;
                        ExchangeTickerSymbol?: string | undefined;
                        Exchange?: string | undefined;
                        MinTransactionAmount?: number | undefined;
                        TradingMarginPercentage?: number | undefined;
                        AssetMarginPercentage?: number | undefined;
                    } | undefined;
                    CommodityDetails?: {
                        Category?: string | undefined;
                        Quality?: string | undefined;
                        UnitOfMeasure?: string | undefined;
                        Quantity?: number | undefined;
                        OriginCountry?: string | undefined;
                        ExchangeTickerSymbol?: string | undefined;
                        Exchange?: string | undefined;
                        MinTransactionAmount?: number | undefined;
                        StorageLocation?: string | undefined;
                        ContractType?: string | undefined;
                        DeliveryDate?: string | undefined;
                    } | undefined;
                    CollectibleDetails?: {
                        Category?: string | undefined;
                        CollectionName?: string | undefined;
                        TokenStandard?: string | undefined;
                        TokenID?: string | undefined;
                        MetadataURI?: string | undefined;
                        Creator?: string | undefined;
                        OwnershipHistory?: string[] | undefined;
                        CurrentOwner?: string | undefined;
                    } | undefined;
                    VehicleDetails?: {
                        Category?: string | undefined;
                        Manufacturer?: string | undefined;
                        Model?: string | undefined;
                        SerialNumber?: string | undefined;
                        Year?: number | undefined;
                        Specifications?: string | undefined;
                        FuelType?: string | undefined;
                        UsageHours?: number | undefined;
                        Mileage?: number | undefined;
                        Condition?: string | undefined;
                        CurrentOwner?: string | undefined;
                        Location?: string | undefined;
                    } | undefined;
                    IntellectualPropertyDetails?: {
                        Category?: string | undefined;
                        Owner?: string | undefined;
                        RegistrationNumber?: string | undefined;
                        FilingDate?: string | undefined;
                        ExpirationDate?: string | undefined;
                        IPJurisdictionIDs?: string[] | undefined;
                        LicenseType?: string | undefined;
                        LicenseTerms?: string | undefined;
                        Value?: number | undefined;
                    } | undefined;
                    InvestmentFundDetails?: {
                        FundType?: string | undefined;
                        Exchange?: string | undefined;
                        ISIN?: string | undefined;
                        NAV?: number | undefined;
                        InceptionDate?: string | undefined;
                        Manager?: string | undefined;
                        ExpenseRatio?: number | undefined;
                        Holdings?: string[] | undefined;
                    } | undefined;
                    EquityDetails?: {
                        ExchangeTickerSymbol?: string | undefined;
                        Exchange?: string | undefined;
                        MinTransactionAmount?: string | undefined;
                        ExtraPercentage?: string | undefined;
                        AssetMarginPercentage?: string | undefined;
                    } | undefined;
                    FinancialProperties?: {
                        Symbol?: string | undefined;
                        Issuer?: string | undefined;
                        JurisdictionIDs?: string[] | undefined;
                        JurisdictionRestrictions?: string | undefined;
                        RedemptionTerms?: string | undefined;
                        ComplianceRequired?: boolean | undefined;
                        Type?: string | undefined;
                        TradeAllowances?: string[] | undefined;
                        Transferable?: boolean | undefined;
                        Platform?: string | undefined;
                        PlatformType?: string | undefined;
                        ContractAddress?: string | undefined;
                        Fractional?: boolean | undefined;
                        TotalSupply?: number | undefined;
                        DecimalPlacesSupply?: number | undefined;
                        Subunit?: string | undefined;
                        Price?: number | undefined;
                        DecimalPlacesPrice?: number | undefined;
                        Currency?: string | undefined;
                        InitialValuation?: number | undefined;
                        CurrentValuation?: number | undefined;
                        ValuationDate?: string | undefined;
                        Network?: Network | undefined;
                        Status?: string | undefined;
                    } | undefined;
                    Description?: {
                        Name?: string | undefined;
                        Description?: string | undefined;
                        Logo?: {
                            Reference?: string | undefined;
                            Extension?: string | undefined;
                            Name?: string | undefined;
                        } | undefined;
                        AssetID?: string | undefined;
                        URL?: string | undefined;
                        Country?: string | undefined;
                        Documents?: string[] | undefined;
                        Images?: string[] | undefined;
                        Vertical?: string | undefined;
                        CreatedAt?: string | undefined;
                        UpdatedAt?: string | undefined;
                    } | undefined;
                    ExternalResources?: {
                        Links?: {
                            Type?: import("./sologenic/com-fs-asset-model/asset").LinkType | undefined;
                            URL?: string | undefined;
                        }[] | undefined;
                        Socials?: {
                            Type?: import("./sologenic/com-fs-asset-model/asset").SocialMediaType | undefined;
                            URL?: string | undefined;
                        }[] | undefined;
                    } | undefined;
                } & {
                    ID?: string | undefined;
                    OrganizationID?: string | undefined;
                    Status?: import("./sologenic/com-fs-asset-model/asset").AssetStatus | undefined;
                    Reason?: import("./sologenic/com-fs-asset-model/asset").Reason | undefined;
                    Type?: import("./sologenic/com-fs-asset-model/asset").AssetType | undefined;
                    Denom?: ({
                        Currency?: {
                            Symbol?: string | undefined;
                            Version?: string | undefined;
                        } | undefined;
                        Subunit?: string | undefined;
                        Issuer?: string | undefined;
                        Precision?: number | undefined;
                        Description?: string | undefined;
                    } & {
                        Currency?: ({
                            Symbol?: string | undefined;
                            Version?: string | undefined;
                        } & {
                            Symbol?: string | undefined;
                            Version?: string | undefined;
                        } & { [K in Exclude<keyof I["DynamicAsset"]["Assets"][number]["AssetDetails"]["Denom"]["Currency"], keyof import("./sologenic/com-fs-asset-model/domain/currency/currency").Currency>]: never; }) | undefined;
                        Subunit?: string | undefined;
                        Issuer?: string | undefined;
                        Precision?: number | undefined;
                        Description?: string | undefined;
                    } & { [K_1 in Exclude<keyof I["DynamicAsset"]["Assets"][number]["AssetDetails"]["Denom"], keyof import("./sologenic/com-fs-asset-model/domain/denom/denom").Denom>]: never; }) | undefined;
                    IsIssuedInSmartContract?: boolean | undefined;
                    SmartContractIssuerAddr?: string | undefined;
                    RealEstateDetails?: ({
                        Address?: string | undefined;
                        Bathrooms?: number | undefined;
                        Bedrooms?: number | undefined;
                        Latitude?: number | undefined;
                        Longitude?: number | undefined;
                        OwnershipType?: string | undefined;
                        PropertyType?: string | undefined;
                        RiskRating?: string | undefined;
                        SquareFootage?: number | undefined;
                        TenancyStatus?: string | undefined;
                        YearBuilt?: number | undefined;
                        YieldPercent?: number[] | undefined;
                    } & {
                        Address?: string | undefined;
                        Bathrooms?: number | undefined;
                        Bedrooms?: number | undefined;
                        Latitude?: number | undefined;
                        Longitude?: number | undefined;
                        OwnershipType?: string | undefined;
                        PropertyType?: string | undefined;
                        RiskRating?: string | undefined;
                        SquareFootage?: number | undefined;
                        TenancyStatus?: string | undefined;
                        YearBuilt?: number | undefined;
                        YieldPercent?: (number[] & number[] & { [K_2 in Exclude<keyof I["DynamicAsset"]["Assets"][number]["AssetDetails"]["RealEstateDetails"]["YieldPercent"], keyof number[]>]: never; }) | undefined;
                    } & { [K_3 in Exclude<keyof I["DynamicAsset"]["Assets"][number]["AssetDetails"]["RealEstateDetails"], keyof import("./sologenic/com-fs-asset-model/asset").RealEstate>]: never; }) | undefined;
                    StableCoinDetails?: ({
                        Version?: string | undefined;
                        PegType?: string | undefined;
                        PegRatio?: number | undefined;
                        BackingAsset?: string | undefined;
                        ExchangeTickerSymbol?: string | undefined;
                        Exchange?: string | undefined;
                        MinTransactionAmount?: number | undefined;
                        TradingMarginPercentage?: number | undefined;
                        AssetMarginPercentage?: number | undefined;
                    } & {
                        Version?: string | undefined;
                        PegType?: string | undefined;
                        PegRatio?: number | undefined;
                        BackingAsset?: string | undefined;
                        ExchangeTickerSymbol?: string | undefined;
                        Exchange?: string | undefined;
                        MinTransactionAmount?: number | undefined;
                        TradingMarginPercentage?: number | undefined;
                        AssetMarginPercentage?: number | undefined;
                    } & { [K_4 in Exclude<keyof I["DynamicAsset"]["Assets"][number]["AssetDetails"]["StableCoinDetails"], keyof import("./sologenic/com-fs-asset-model/asset").StableCoin>]: never; }) | undefined;
                    CommodityDetails?: ({
                        Category?: string | undefined;
                        Quality?: string | undefined;
                        UnitOfMeasure?: string | undefined;
                        Quantity?: number | undefined;
                        OriginCountry?: string | undefined;
                        ExchangeTickerSymbol?: string | undefined;
                        Exchange?: string | undefined;
                        MinTransactionAmount?: number | undefined;
                        StorageLocation?: string | undefined;
                        ContractType?: string | undefined;
                        DeliveryDate?: string | undefined;
                    } & {
                        Category?: string | undefined;
                        Quality?: string | undefined;
                        UnitOfMeasure?: string | undefined;
                        Quantity?: number | undefined;
                        OriginCountry?: string | undefined;
                        ExchangeTickerSymbol?: string | undefined;
                        Exchange?: string | undefined;
                        MinTransactionAmount?: number | undefined;
                        StorageLocation?: string | undefined;
                        ContractType?: string | undefined;
                        DeliveryDate?: string | undefined;
                    } & { [K_5 in Exclude<keyof I["DynamicAsset"]["Assets"][number]["AssetDetails"]["CommodityDetails"], keyof import("./sologenic/com-fs-asset-model/asset").Commodity>]: never; }) | undefined;
                    CollectibleDetails?: ({
                        Category?: string | undefined;
                        CollectionName?: string | undefined;
                        TokenStandard?: string | undefined;
                        TokenID?: string | undefined;
                        MetadataURI?: string | undefined;
                        Creator?: string | undefined;
                        OwnershipHistory?: string[] | undefined;
                        CurrentOwner?: string | undefined;
                    } & {
                        Category?: string | undefined;
                        CollectionName?: string | undefined;
                        TokenStandard?: string | undefined;
                        TokenID?: string | undefined;
                        MetadataURI?: string | undefined;
                        Creator?: string | undefined;
                        OwnershipHistory?: (string[] & string[] & { [K_6 in Exclude<keyof I["DynamicAsset"]["Assets"][number]["AssetDetails"]["CollectibleDetails"]["OwnershipHistory"], keyof string[]>]: never; }) | undefined;
                        CurrentOwner?: string | undefined;
                    } & { [K_7 in Exclude<keyof I["DynamicAsset"]["Assets"][number]["AssetDetails"]["CollectibleDetails"], keyof import("./sologenic/com-fs-asset-model/asset").Collectible>]: never; }) | undefined;
                    VehicleDetails?: ({
                        Category?: string | undefined;
                        Manufacturer?: string | undefined;
                        Model?: string | undefined;
                        SerialNumber?: string | undefined;
                        Year?: number | undefined;
                        Specifications?: string | undefined;
                        FuelType?: string | undefined;
                        UsageHours?: number | undefined;
                        Mileage?: number | undefined;
                        Condition?: string | undefined;
                        CurrentOwner?: string | undefined;
                        Location?: string | undefined;
                    } & {
                        Category?: string | undefined;
                        Manufacturer?: string | undefined;
                        Model?: string | undefined;
                        SerialNumber?: string | undefined;
                        Year?: number | undefined;
                        Specifications?: string | undefined;
                        FuelType?: string | undefined;
                        UsageHours?: number | undefined;
                        Mileage?: number | undefined;
                        Condition?: string | undefined;
                        CurrentOwner?: string | undefined;
                        Location?: string | undefined;
                    } & { [K_8 in Exclude<keyof I["DynamicAsset"]["Assets"][number]["AssetDetails"]["VehicleDetails"], keyof import("./sologenic/com-fs-asset-model/asset").Vehicle>]: never; }) | undefined;
                    IntellectualPropertyDetails?: ({
                        Category?: string | undefined;
                        Owner?: string | undefined;
                        RegistrationNumber?: string | undefined;
                        FilingDate?: string | undefined;
                        ExpirationDate?: string | undefined;
                        IPJurisdictionIDs?: string[] | undefined;
                        LicenseType?: string | undefined;
                        LicenseTerms?: string | undefined;
                        Value?: number | undefined;
                    } & {
                        Category?: string | undefined;
                        Owner?: string | undefined;
                        RegistrationNumber?: string | undefined;
                        FilingDate?: string | undefined;
                        ExpirationDate?: string | undefined;
                        IPJurisdictionIDs?: (string[] & string[] & { [K_9 in Exclude<keyof I["DynamicAsset"]["Assets"][number]["AssetDetails"]["IntellectualPropertyDetails"]["IPJurisdictionIDs"], keyof string[]>]: never; }) | undefined;
                        LicenseType?: string | undefined;
                        LicenseTerms?: string | undefined;
                        Value?: number | undefined;
                    } & { [K_10 in Exclude<keyof I["DynamicAsset"]["Assets"][number]["AssetDetails"]["IntellectualPropertyDetails"], keyof import("./sologenic/com-fs-asset-model/asset").IntellectualProperty>]: never; }) | undefined;
                    InvestmentFundDetails?: ({
                        FundType?: string | undefined;
                        Exchange?: string | undefined;
                        ISIN?: string | undefined;
                        NAV?: number | undefined;
                        InceptionDate?: string | undefined;
                        Manager?: string | undefined;
                        ExpenseRatio?: number | undefined;
                        Holdings?: string[] | undefined;
                    } & {
                        FundType?: string | undefined;
                        Exchange?: string | undefined;
                        ISIN?: string | undefined;
                        NAV?: number | undefined;
                        InceptionDate?: string | undefined;
                        Manager?: string | undefined;
                        ExpenseRatio?: number | undefined;
                        Holdings?: (string[] & string[] & { [K_11 in Exclude<keyof I["DynamicAsset"]["Assets"][number]["AssetDetails"]["InvestmentFundDetails"]["Holdings"], keyof string[]>]: never; }) | undefined;
                    } & { [K_12 in Exclude<keyof I["DynamicAsset"]["Assets"][number]["AssetDetails"]["InvestmentFundDetails"], keyof import("./sologenic/com-fs-asset-model/asset").InvestmentFund>]: never; }) | undefined;
                    EquityDetails?: ({
                        ExchangeTickerSymbol?: string | undefined;
                        Exchange?: string | undefined;
                        MinTransactionAmount?: string | undefined;
                        ExtraPercentage?: string | undefined;
                        AssetMarginPercentage?: string | undefined;
                    } & {
                        ExchangeTickerSymbol?: string | undefined;
                        Exchange?: string | undefined;
                        MinTransactionAmount?: string | undefined;
                        ExtraPercentage?: string | undefined;
                        AssetMarginPercentage?: string | undefined;
                    } & { [K_13 in Exclude<keyof I["DynamicAsset"]["Assets"][number]["AssetDetails"]["EquityDetails"], keyof import("./sologenic/com-fs-asset-model/asset").Equity>]: never; }) | undefined;
                    FinancialProperties?: ({
                        Symbol?: string | undefined;
                        Issuer?: string | undefined;
                        JurisdictionIDs?: string[] | undefined;
                        JurisdictionRestrictions?: string | undefined;
                        RedemptionTerms?: string | undefined;
                        ComplianceRequired?: boolean | undefined;
                        Type?: string | undefined;
                        TradeAllowances?: string[] | undefined;
                        Transferable?: boolean | undefined;
                        Platform?: string | undefined;
                        PlatformType?: string | undefined;
                        ContractAddress?: string | undefined;
                        Fractional?: boolean | undefined;
                        TotalSupply?: number | undefined;
                        DecimalPlacesSupply?: number | undefined;
                        Subunit?: string | undefined;
                        Price?: number | undefined;
                        DecimalPlacesPrice?: number | undefined;
                        Currency?: string | undefined;
                        InitialValuation?: number | undefined;
                        CurrentValuation?: number | undefined;
                        ValuationDate?: string | undefined;
                        Network?: Network | undefined;
                        Status?: string | undefined;
                    } & {
                        Symbol?: string | undefined;
                        Issuer?: string | undefined;
                        JurisdictionIDs?: (string[] & string[] & { [K_14 in Exclude<keyof I["DynamicAsset"]["Assets"][number]["AssetDetails"]["FinancialProperties"]["JurisdictionIDs"], keyof string[]>]: never; }) | undefined;
                        JurisdictionRestrictions?: string | undefined;
                        RedemptionTerms?: string | undefined;
                        ComplianceRequired?: boolean | undefined;
                        Type?: string | undefined;
                        TradeAllowances?: (string[] & string[] & { [K_15 in Exclude<keyof I["DynamicAsset"]["Assets"][number]["AssetDetails"]["FinancialProperties"]["TradeAllowances"], keyof string[]>]: never; }) | undefined;
                        Transferable?: boolean | undefined;
                        Platform?: string | undefined;
                        PlatformType?: string | undefined;
                        ContractAddress?: string | undefined;
                        Fractional?: boolean | undefined;
                        TotalSupply?: number | undefined;
                        DecimalPlacesSupply?: number | undefined;
                        Subunit?: string | undefined;
                        Price?: number | undefined;
                        DecimalPlacesPrice?: number | undefined;
                        Currency?: string | undefined;
                        InitialValuation?: number | undefined;
                        CurrentValuation?: number | undefined;
                        ValuationDate?: string | undefined;
                        Network?: Network | undefined;
                        Status?: string | undefined;
                    } & { [K_16 in Exclude<keyof I["DynamicAsset"]["Assets"][number]["AssetDetails"]["FinancialProperties"], keyof import("./sologenic/com-fs-asset-model/asset").FinancialProperties>]: never; }) | undefined;
                    Description?: ({
                        Name?: string | undefined;
                        Description?: string | undefined;
                        Logo?: {
                            Reference?: string | undefined;
                            Extension?: string | undefined;
                            Name?: string | undefined;
                        } | undefined;
                        AssetID?: string | undefined;
                        URL?: string | undefined;
                        Country?: string | undefined;
                        Documents?: string[] | undefined;
                        Images?: string[] | undefined;
                        Vertical?: string | undefined;
                        CreatedAt?: string | undefined;
                        UpdatedAt?: string | undefined;
                    } & {
                        Name?: string | undefined;
                        Description?: string | undefined;
                        Logo?: ({
                            Reference?: string | undefined;
                            Extension?: string | undefined;
                            Name?: string | undefined;
                        } & {
                            Reference?: string | undefined;
                            Extension?: string | undefined;
                            Name?: string | undefined;
                        } & { [K_17 in Exclude<keyof I["DynamicAsset"]["Assets"][number]["AssetDetails"]["Description"]["Logo"], keyof import("./sologenic/com-fs-asset-model/asset").LogoFile>]: never; }) | undefined;
                        AssetID?: string | undefined;
                        URL?: string | undefined;
                        Country?: string | undefined;
                        Documents?: (string[] & string[] & { [K_18 in Exclude<keyof I["DynamicAsset"]["Assets"][number]["AssetDetails"]["Description"]["Documents"], keyof string[]>]: never; }) | undefined;
                        Images?: (string[] & string[] & { [K_19 in Exclude<keyof I["DynamicAsset"]["Assets"][number]["AssetDetails"]["Description"]["Images"], keyof string[]>]: never; }) | undefined;
                        Vertical?: string | undefined;
                        CreatedAt?: string | undefined;
                        UpdatedAt?: string | undefined;
                    } & { [K_20 in Exclude<keyof I["DynamicAsset"]["Assets"][number]["AssetDetails"]["Description"], keyof import("./sologenic/com-fs-asset-model/asset").Description>]: never; }) | undefined;
                    ExternalResources?: ({
                        Links?: {
                            Type?: import("./sologenic/com-fs-asset-model/asset").LinkType | undefined;
                            URL?: string | undefined;
                        }[] | undefined;
                        Socials?: {
                            Type?: import("./sologenic/com-fs-asset-model/asset").SocialMediaType | undefined;
                            URL?: string | undefined;
                        }[] | undefined;
                    } & {
                        Links?: ({
                            Type?: import("./sologenic/com-fs-asset-model/asset").LinkType | undefined;
                            URL?: string | undefined;
                        }[] & ({
                            Type?: import("./sologenic/com-fs-asset-model/asset").LinkType | undefined;
                            URL?: string | undefined;
                        } & {
                            Type?: import("./sologenic/com-fs-asset-model/asset").LinkType | undefined;
                            URL?: string | undefined;
                        } & { [K_21 in Exclude<keyof I["DynamicAsset"]["Assets"][number]["AssetDetails"]["ExternalResources"]["Links"][number], keyof import("./sologenic/com-fs-asset-model/asset").Link>]: never; })[] & { [K_22 in Exclude<keyof I["DynamicAsset"]["Assets"][number]["AssetDetails"]["ExternalResources"]["Links"], keyof {
                            Type?: import("./sologenic/com-fs-asset-model/asset").LinkType | undefined;
                            URL?: string | undefined;
                        }[]>]: never; }) | undefined;
                        Socials?: ({
                            Type?: import("./sologenic/com-fs-asset-model/asset").SocialMediaType | undefined;
                            URL?: string | undefined;
                        }[] & ({
                            Type?: import("./sologenic/com-fs-asset-model/asset").SocialMediaType | undefined;
                            URL?: string | undefined;
                        } & {
                            Type?: import("./sologenic/com-fs-asset-model/asset").SocialMediaType | undefined;
                            URL?: string | undefined;
                        } & { [K_23 in Exclude<keyof I["DynamicAsset"]["Assets"][number]["AssetDetails"]["ExternalResources"]["Socials"][number], keyof import("./sologenic/com-fs-asset-model/asset").SocialMedia>]: never; })[] & { [K_24 in Exclude<keyof I["DynamicAsset"]["Assets"][number]["AssetDetails"]["ExternalResources"]["Socials"], keyof {
                            Type?: import("./sologenic/com-fs-asset-model/asset").SocialMediaType | undefined;
                            URL?: string | undefined;
                        }[]>]: never; }) | undefined;
                    } & { [K_25 in Exclude<keyof I["DynamicAsset"]["Assets"][number]["AssetDetails"]["ExternalResources"], keyof import("./sologenic/com-fs-asset-model/asset").ExternalResources>]: never; }) | undefined;
                } & { [K_26 in Exclude<keyof I["DynamicAsset"]["Assets"][number]["AssetDetails"], keyof import("./sologenic/com-fs-asset-model/asset").AssetDetails>]: never; }) | undefined;
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
                } & { [K_27 in Exclude<keyof I["DynamicAsset"]["Assets"][number]["MetaData"], keyof MetaData>]: never; }) | undefined;
                Audit?: ({
                    ChangedBy?: string | undefined;
                    ChangedAt?: Date | undefined;
                    Reason?: string | undefined;
                } & {
                    ChangedBy?: string | undefined;
                    ChangedAt?: Date | undefined;
                    Reason?: string | undefined;
                } & { [K_28 in Exclude<keyof I["DynamicAsset"]["Assets"][number]["Audit"], keyof Audit>]: never; }) | undefined;
                IssuerDetails?: ({
                    Name?: string | undefined;
                    Description?: string | undefined;
                    Image?: string | undefined;
                    ExternalUrl?: string | undefined;
                    AddressLine1?: string | undefined;
                    AddressLine2?: string | undefined;
                    City?: string | undefined;
                    Region?: string | undefined;
                    PostalCode?: string | undefined;
                    Country?: string | undefined;
                    YearFounded?: number | undefined;
                    Licensed?: boolean | undefined;
                    LicenseCountry?: string | undefined;
                    LicenseNumber?: string | undefined;
                    Phone?: string | undefined;
                    Email?: string | undefined;
                    SocialMediaLinks?: string[] | undefined;
                    KeyClients?: string | undefined;
                    Press?: string | undefined;
                } & {
                    Name?: string | undefined;
                    Description?: string | undefined;
                    Image?: string | undefined;
                    ExternalUrl?: string | undefined;
                    AddressLine1?: string | undefined;
                    AddressLine2?: string | undefined;
                    City?: string | undefined;
                    Region?: string | undefined;
                    PostalCode?: string | undefined;
                    Country?: string | undefined;
                    YearFounded?: number | undefined;
                    Licensed?: boolean | undefined;
                    LicenseCountry?: string | undefined;
                    LicenseNumber?: string | undefined;
                    Phone?: string | undefined;
                    Email?: string | undefined;
                    SocialMediaLinks?: (string[] & string[] & { [K_29 in Exclude<keyof I["DynamicAsset"]["Assets"][number]["IssuerDetails"]["SocialMediaLinks"], keyof string[]>]: never; }) | undefined;
                    KeyClients?: string | undefined;
                    Press?: string | undefined;
                } & { [K_30 in Exclude<keyof I["DynamicAsset"]["Assets"][number]["IssuerDetails"], keyof import("./sologenic/com-fs-asset-model/asset").IssuerDetails>]: never; }) | undefined;
            } & { [K_31 in Exclude<keyof I["DynamicAsset"]["Assets"][number], keyof Asset>]: never; })[] & { [K_32 in Exclude<keyof I["DynamicAsset"]["Assets"], keyof {
                AssetDetails?: {
                    ID?: string | undefined;
                    OrganizationID?: string | undefined;
                    Status?: import("./sologenic/com-fs-asset-model/asset").AssetStatus | undefined;
                    Reason?: import("./sologenic/com-fs-asset-model/asset").Reason | undefined;
                    Type?: import("./sologenic/com-fs-asset-model/asset").AssetType | undefined;
                    Denom?: {
                        Currency?: {
                            Symbol?: string | undefined;
                            Version?: string | undefined;
                        } | undefined;
                        Subunit?: string | undefined;
                        Issuer?: string | undefined;
                        Precision?: number | undefined;
                        Description?: string | undefined;
                    } | undefined;
                    IsIssuedInSmartContract?: boolean | undefined;
                    SmartContractIssuerAddr?: string | undefined;
                    RealEstateDetails?: {
                        Address?: string | undefined;
                        Bathrooms?: number | undefined;
                        Bedrooms?: number | undefined;
                        Latitude?: number | undefined;
                        Longitude?: number | undefined;
                        OwnershipType?: string | undefined;
                        PropertyType?: string | undefined;
                        RiskRating?: string | undefined;
                        SquareFootage?: number | undefined;
                        TenancyStatus?: string | undefined;
                        YearBuilt?: number | undefined;
                        YieldPercent?: number[] | undefined;
                    } | undefined;
                    StableCoinDetails?: {
                        Version?: string | undefined;
                        PegType?: string | undefined;
                        PegRatio?: number | undefined;
                        BackingAsset?: string | undefined;
                        ExchangeTickerSymbol?: string | undefined;
                        Exchange?: string | undefined;
                        MinTransactionAmount?: number | undefined;
                        TradingMarginPercentage?: number | undefined;
                        AssetMarginPercentage?: number | undefined;
                    } | undefined;
                    CommodityDetails?: {
                        Category?: string | undefined;
                        Quality?: string | undefined;
                        UnitOfMeasure?: string | undefined;
                        Quantity?: number | undefined;
                        OriginCountry?: string | undefined;
                        ExchangeTickerSymbol?: string | undefined;
                        Exchange?: string | undefined;
                        MinTransactionAmount?: number | undefined;
                        StorageLocation?: string | undefined;
                        ContractType?: string | undefined;
                        DeliveryDate?: string | undefined;
                    } | undefined;
                    CollectibleDetails?: {
                        Category?: string | undefined;
                        CollectionName?: string | undefined;
                        TokenStandard?: string | undefined;
                        TokenID?: string | undefined;
                        MetadataURI?: string | undefined;
                        Creator?: string | undefined;
                        OwnershipHistory?: string[] | undefined;
                        CurrentOwner?: string | undefined;
                    } | undefined;
                    VehicleDetails?: {
                        Category?: string | undefined;
                        Manufacturer?: string | undefined;
                        Model?: string | undefined;
                        SerialNumber?: string | undefined;
                        Year?: number | undefined;
                        Specifications?: string | undefined;
                        FuelType?: string | undefined;
                        UsageHours?: number | undefined;
                        Mileage?: number | undefined;
                        Condition?: string | undefined;
                        CurrentOwner?: string | undefined;
                        Location?: string | undefined;
                    } | undefined;
                    IntellectualPropertyDetails?: {
                        Category?: string | undefined;
                        Owner?: string | undefined;
                        RegistrationNumber?: string | undefined;
                        FilingDate?: string | undefined;
                        ExpirationDate?: string | undefined;
                        IPJurisdictionIDs?: string[] | undefined;
                        LicenseType?: string | undefined;
                        LicenseTerms?: string | undefined;
                        Value?: number | undefined;
                    } | undefined;
                    InvestmentFundDetails?: {
                        FundType?: string | undefined;
                        Exchange?: string | undefined;
                        ISIN?: string | undefined;
                        NAV?: number | undefined;
                        InceptionDate?: string | undefined;
                        Manager?: string | undefined;
                        ExpenseRatio?: number | undefined;
                        Holdings?: string[] | undefined;
                    } | undefined;
                    EquityDetails?: {
                        ExchangeTickerSymbol?: string | undefined;
                        Exchange?: string | undefined;
                        MinTransactionAmount?: string | undefined;
                        ExtraPercentage?: string | undefined;
                        AssetMarginPercentage?: string | undefined;
                    } | undefined;
                    FinancialProperties?: {
                        Symbol?: string | undefined;
                        Issuer?: string | undefined;
                        JurisdictionIDs?: string[] | undefined;
                        JurisdictionRestrictions?: string | undefined;
                        RedemptionTerms?: string | undefined;
                        ComplianceRequired?: boolean | undefined;
                        Type?: string | undefined;
                        TradeAllowances?: string[] | undefined;
                        Transferable?: boolean | undefined;
                        Platform?: string | undefined;
                        PlatformType?: string | undefined;
                        ContractAddress?: string | undefined;
                        Fractional?: boolean | undefined;
                        TotalSupply?: number | undefined;
                        DecimalPlacesSupply?: number | undefined;
                        Subunit?: string | undefined;
                        Price?: number | undefined;
                        DecimalPlacesPrice?: number | undefined;
                        Currency?: string | undefined;
                        InitialValuation?: number | undefined;
                        CurrentValuation?: number | undefined;
                        ValuationDate?: string | undefined;
                        Network?: Network | undefined;
                        Status?: string | undefined;
                    } | undefined;
                    Description?: {
                        Name?: string | undefined;
                        Description?: string | undefined;
                        Logo?: {
                            Reference?: string | undefined;
                            Extension?: string | undefined;
                            Name?: string | undefined;
                        } | undefined;
                        AssetID?: string | undefined;
                        URL?: string | undefined;
                        Country?: string | undefined;
                        Documents?: string[] | undefined;
                        Images?: string[] | undefined;
                        Vertical?: string | undefined;
                        CreatedAt?: string | undefined;
                        UpdatedAt?: string | undefined;
                    } | undefined;
                    ExternalResources?: {
                        Links?: {
                            Type?: import("./sologenic/com-fs-asset-model/asset").LinkType | undefined;
                            URL?: string | undefined;
                        }[] | undefined;
                        Socials?: {
                            Type?: import("./sologenic/com-fs-asset-model/asset").SocialMediaType | undefined;
                            URL?: string | undefined;
                        }[] | undefined;
                    } | undefined;
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
                IssuerDetails?: {
                    Name?: string | undefined;
                    Description?: string | undefined;
                    Image?: string | undefined;
                    ExternalUrl?: string | undefined;
                    AddressLine1?: string | undefined;
                    AddressLine2?: string | undefined;
                    City?: string | undefined;
                    Region?: string | undefined;
                    PostalCode?: string | undefined;
                    Country?: string | undefined;
                    YearFounded?: number | undefined;
                    Licensed?: boolean | undefined;
                    LicenseCountry?: string | undefined;
                    LicenseNumber?: string | undefined;
                    Phone?: string | undefined;
                    Email?: string | undefined;
                    SocialMediaLinks?: string[] | undefined;
                    KeyClients?: string | undefined;
                    Press?: string | undefined;
                } | undefined;
            }[]>]: never; }) | undefined;
        } & { [K_33 in Exclude<keyof I["DynamicAsset"], keyof DynamicAssetDetails>]: never; }) | undefined;
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
        } & { [K_34 in Exclude<keyof I["MetaData"], keyof MetaData>]: never; }) | undefined;
        Audit?: ({
            ChangedBy?: string | undefined;
            ChangedAt?: Date | undefined;
            Reason?: string | undefined;
        } & {
            ChangedBy?: string | undefined;
            ChangedAt?: Date | undefined;
            Reason?: string | undefined;
        } & { [K_35 in Exclude<keyof I["Audit"], keyof Audit>]: never; }) | undefined;
    } & { [K_36 in Exclude<keyof I, keyof DynamicAsset>]: never; }>(base?: I | undefined): DynamicAsset;
    fromPartial<I_1 extends {
        DynamicAsset?: {
            DynamicAssetID?: string | undefined;
            Title?: string | undefined;
            Description?: string | undefined;
            Identifier?: string | undefined;
            OrganizationID?: string | undefined;
            Assets?: {
                AssetDetails?: {
                    ID?: string | undefined;
                    OrganizationID?: string | undefined;
                    Status?: import("./sologenic/com-fs-asset-model/asset").AssetStatus | undefined;
                    Reason?: import("./sologenic/com-fs-asset-model/asset").Reason | undefined;
                    Type?: import("./sologenic/com-fs-asset-model/asset").AssetType | undefined;
                    Denom?: {
                        Currency?: {
                            Symbol?: string | undefined;
                            Version?: string | undefined;
                        } | undefined;
                        Subunit?: string | undefined;
                        Issuer?: string | undefined;
                        Precision?: number | undefined;
                        Description?: string | undefined;
                    } | undefined;
                    IsIssuedInSmartContract?: boolean | undefined;
                    SmartContractIssuerAddr?: string | undefined;
                    RealEstateDetails?: {
                        Address?: string | undefined;
                        Bathrooms?: number | undefined;
                        Bedrooms?: number | undefined;
                        Latitude?: number | undefined;
                        Longitude?: number | undefined;
                        OwnershipType?: string | undefined;
                        PropertyType?: string | undefined;
                        RiskRating?: string | undefined;
                        SquareFootage?: number | undefined;
                        TenancyStatus?: string | undefined;
                        YearBuilt?: number | undefined;
                        YieldPercent?: number[] | undefined;
                    } | undefined;
                    StableCoinDetails?: {
                        Version?: string | undefined;
                        PegType?: string | undefined;
                        PegRatio?: number | undefined;
                        BackingAsset?: string | undefined;
                        ExchangeTickerSymbol?: string | undefined;
                        Exchange?: string | undefined;
                        MinTransactionAmount?: number | undefined;
                        TradingMarginPercentage?: number | undefined;
                        AssetMarginPercentage?: number | undefined;
                    } | undefined;
                    CommodityDetails?: {
                        Category?: string | undefined;
                        Quality?: string | undefined;
                        UnitOfMeasure?: string | undefined;
                        Quantity?: number | undefined;
                        OriginCountry?: string | undefined;
                        ExchangeTickerSymbol?: string | undefined;
                        Exchange?: string | undefined;
                        MinTransactionAmount?: number | undefined;
                        StorageLocation?: string | undefined;
                        ContractType?: string | undefined;
                        DeliveryDate?: string | undefined;
                    } | undefined;
                    CollectibleDetails?: {
                        Category?: string | undefined;
                        CollectionName?: string | undefined;
                        TokenStandard?: string | undefined;
                        TokenID?: string | undefined;
                        MetadataURI?: string | undefined;
                        Creator?: string | undefined;
                        OwnershipHistory?: string[] | undefined;
                        CurrentOwner?: string | undefined;
                    } | undefined;
                    VehicleDetails?: {
                        Category?: string | undefined;
                        Manufacturer?: string | undefined;
                        Model?: string | undefined;
                        SerialNumber?: string | undefined;
                        Year?: number | undefined;
                        Specifications?: string | undefined;
                        FuelType?: string | undefined;
                        UsageHours?: number | undefined;
                        Mileage?: number | undefined;
                        Condition?: string | undefined;
                        CurrentOwner?: string | undefined;
                        Location?: string | undefined;
                    } | undefined;
                    IntellectualPropertyDetails?: {
                        Category?: string | undefined;
                        Owner?: string | undefined;
                        RegistrationNumber?: string | undefined;
                        FilingDate?: string | undefined;
                        ExpirationDate?: string | undefined;
                        IPJurisdictionIDs?: string[] | undefined;
                        LicenseType?: string | undefined;
                        LicenseTerms?: string | undefined;
                        Value?: number | undefined;
                    } | undefined;
                    InvestmentFundDetails?: {
                        FundType?: string | undefined;
                        Exchange?: string | undefined;
                        ISIN?: string | undefined;
                        NAV?: number | undefined;
                        InceptionDate?: string | undefined;
                        Manager?: string | undefined;
                        ExpenseRatio?: number | undefined;
                        Holdings?: string[] | undefined;
                    } | undefined;
                    EquityDetails?: {
                        ExchangeTickerSymbol?: string | undefined;
                        Exchange?: string | undefined;
                        MinTransactionAmount?: string | undefined;
                        ExtraPercentage?: string | undefined;
                        AssetMarginPercentage?: string | undefined;
                    } | undefined;
                    FinancialProperties?: {
                        Symbol?: string | undefined;
                        Issuer?: string | undefined;
                        JurisdictionIDs?: string[] | undefined;
                        JurisdictionRestrictions?: string | undefined;
                        RedemptionTerms?: string | undefined;
                        ComplianceRequired?: boolean | undefined;
                        Type?: string | undefined;
                        TradeAllowances?: string[] | undefined;
                        Transferable?: boolean | undefined;
                        Platform?: string | undefined;
                        PlatformType?: string | undefined;
                        ContractAddress?: string | undefined;
                        Fractional?: boolean | undefined;
                        TotalSupply?: number | undefined;
                        DecimalPlacesSupply?: number | undefined;
                        Subunit?: string | undefined;
                        Price?: number | undefined;
                        DecimalPlacesPrice?: number | undefined;
                        Currency?: string | undefined;
                        InitialValuation?: number | undefined;
                        CurrentValuation?: number | undefined;
                        ValuationDate?: string | undefined;
                        Network?: Network | undefined;
                        Status?: string | undefined;
                    } | undefined;
                    Description?: {
                        Name?: string | undefined;
                        Description?: string | undefined;
                        Logo?: {
                            Reference?: string | undefined;
                            Extension?: string | undefined;
                            Name?: string | undefined;
                        } | undefined;
                        AssetID?: string | undefined;
                        URL?: string | undefined;
                        Country?: string | undefined;
                        Documents?: string[] | undefined;
                        Images?: string[] | undefined;
                        Vertical?: string | undefined;
                        CreatedAt?: string | undefined;
                        UpdatedAt?: string | undefined;
                    } | undefined;
                    ExternalResources?: {
                        Links?: {
                            Type?: import("./sologenic/com-fs-asset-model/asset").LinkType | undefined;
                            URL?: string | undefined;
                        }[] | undefined;
                        Socials?: {
                            Type?: import("./sologenic/com-fs-asset-model/asset").SocialMediaType | undefined;
                            URL?: string | undefined;
                        }[] | undefined;
                    } | undefined;
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
                IssuerDetails?: {
                    Name?: string | undefined;
                    Description?: string | undefined;
                    Image?: string | undefined;
                    ExternalUrl?: string | undefined;
                    AddressLine1?: string | undefined;
                    AddressLine2?: string | undefined;
                    City?: string | undefined;
                    Region?: string | undefined;
                    PostalCode?: string | undefined;
                    Country?: string | undefined;
                    YearFounded?: number | undefined;
                    Licensed?: boolean | undefined;
                    LicenseCountry?: string | undefined;
                    LicenseNumber?: string | undefined;
                    Phone?: string | undefined;
                    Email?: string | undefined;
                    SocialMediaLinks?: string[] | undefined;
                    KeyClients?: string | undefined;
                    Press?: string | undefined;
                } | undefined;
            }[] | undefined;
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
            Assets?: {
                AssetDetails?: {
                    ID?: string | undefined;
                    OrganizationID?: string | undefined;
                    Status?: import("./sologenic/com-fs-asset-model/asset").AssetStatus | undefined;
                    Reason?: import("./sologenic/com-fs-asset-model/asset").Reason | undefined;
                    Type?: import("./sologenic/com-fs-asset-model/asset").AssetType | undefined;
                    Denom?: {
                        Currency?: {
                            Symbol?: string | undefined;
                            Version?: string | undefined;
                        } | undefined;
                        Subunit?: string | undefined;
                        Issuer?: string | undefined;
                        Precision?: number | undefined;
                        Description?: string | undefined;
                    } | undefined;
                    IsIssuedInSmartContract?: boolean | undefined;
                    SmartContractIssuerAddr?: string | undefined;
                    RealEstateDetails?: {
                        Address?: string | undefined;
                        Bathrooms?: number | undefined;
                        Bedrooms?: number | undefined;
                        Latitude?: number | undefined;
                        Longitude?: number | undefined;
                        OwnershipType?: string | undefined;
                        PropertyType?: string | undefined;
                        RiskRating?: string | undefined;
                        SquareFootage?: number | undefined;
                        TenancyStatus?: string | undefined;
                        YearBuilt?: number | undefined;
                        YieldPercent?: number[] | undefined;
                    } | undefined;
                    StableCoinDetails?: {
                        Version?: string | undefined;
                        PegType?: string | undefined;
                        PegRatio?: number | undefined;
                        BackingAsset?: string | undefined;
                        ExchangeTickerSymbol?: string | undefined;
                        Exchange?: string | undefined;
                        MinTransactionAmount?: number | undefined;
                        TradingMarginPercentage?: number | undefined;
                        AssetMarginPercentage?: number | undefined;
                    } | undefined;
                    CommodityDetails?: {
                        Category?: string | undefined;
                        Quality?: string | undefined;
                        UnitOfMeasure?: string | undefined;
                        Quantity?: number | undefined;
                        OriginCountry?: string | undefined;
                        ExchangeTickerSymbol?: string | undefined;
                        Exchange?: string | undefined;
                        MinTransactionAmount?: number | undefined;
                        StorageLocation?: string | undefined;
                        ContractType?: string | undefined;
                        DeliveryDate?: string | undefined;
                    } | undefined;
                    CollectibleDetails?: {
                        Category?: string | undefined;
                        CollectionName?: string | undefined;
                        TokenStandard?: string | undefined;
                        TokenID?: string | undefined;
                        MetadataURI?: string | undefined;
                        Creator?: string | undefined;
                        OwnershipHistory?: string[] | undefined;
                        CurrentOwner?: string | undefined;
                    } | undefined;
                    VehicleDetails?: {
                        Category?: string | undefined;
                        Manufacturer?: string | undefined;
                        Model?: string | undefined;
                        SerialNumber?: string | undefined;
                        Year?: number | undefined;
                        Specifications?: string | undefined;
                        FuelType?: string | undefined;
                        UsageHours?: number | undefined;
                        Mileage?: number | undefined;
                        Condition?: string | undefined;
                        CurrentOwner?: string | undefined;
                        Location?: string | undefined;
                    } | undefined;
                    IntellectualPropertyDetails?: {
                        Category?: string | undefined;
                        Owner?: string | undefined;
                        RegistrationNumber?: string | undefined;
                        FilingDate?: string | undefined;
                        ExpirationDate?: string | undefined;
                        IPJurisdictionIDs?: string[] | undefined;
                        LicenseType?: string | undefined;
                        LicenseTerms?: string | undefined;
                        Value?: number | undefined;
                    } | undefined;
                    InvestmentFundDetails?: {
                        FundType?: string | undefined;
                        Exchange?: string | undefined;
                        ISIN?: string | undefined;
                        NAV?: number | undefined;
                        InceptionDate?: string | undefined;
                        Manager?: string | undefined;
                        ExpenseRatio?: number | undefined;
                        Holdings?: string[] | undefined;
                    } | undefined;
                    EquityDetails?: {
                        ExchangeTickerSymbol?: string | undefined;
                        Exchange?: string | undefined;
                        MinTransactionAmount?: string | undefined;
                        ExtraPercentage?: string | undefined;
                        AssetMarginPercentage?: string | undefined;
                    } | undefined;
                    FinancialProperties?: {
                        Symbol?: string | undefined;
                        Issuer?: string | undefined;
                        JurisdictionIDs?: string[] | undefined;
                        JurisdictionRestrictions?: string | undefined;
                        RedemptionTerms?: string | undefined;
                        ComplianceRequired?: boolean | undefined;
                        Type?: string | undefined;
                        TradeAllowances?: string[] | undefined;
                        Transferable?: boolean | undefined;
                        Platform?: string | undefined;
                        PlatformType?: string | undefined;
                        ContractAddress?: string | undefined;
                        Fractional?: boolean | undefined;
                        TotalSupply?: number | undefined;
                        DecimalPlacesSupply?: number | undefined;
                        Subunit?: string | undefined;
                        Price?: number | undefined;
                        DecimalPlacesPrice?: number | undefined;
                        Currency?: string | undefined;
                        InitialValuation?: number | undefined;
                        CurrentValuation?: number | undefined;
                        ValuationDate?: string | undefined;
                        Network?: Network | undefined;
                        Status?: string | undefined;
                    } | undefined;
                    Description?: {
                        Name?: string | undefined;
                        Description?: string | undefined;
                        Logo?: {
                            Reference?: string | undefined;
                            Extension?: string | undefined;
                            Name?: string | undefined;
                        } | undefined;
                        AssetID?: string | undefined;
                        URL?: string | undefined;
                        Country?: string | undefined;
                        Documents?: string[] | undefined;
                        Images?: string[] | undefined;
                        Vertical?: string | undefined;
                        CreatedAt?: string | undefined;
                        UpdatedAt?: string | undefined;
                    } | undefined;
                    ExternalResources?: {
                        Links?: {
                            Type?: import("./sologenic/com-fs-asset-model/asset").LinkType | undefined;
                            URL?: string | undefined;
                        }[] | undefined;
                        Socials?: {
                            Type?: import("./sologenic/com-fs-asset-model/asset").SocialMediaType | undefined;
                            URL?: string | undefined;
                        }[] | undefined;
                    } | undefined;
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
                IssuerDetails?: {
                    Name?: string | undefined;
                    Description?: string | undefined;
                    Image?: string | undefined;
                    ExternalUrl?: string | undefined;
                    AddressLine1?: string | undefined;
                    AddressLine2?: string | undefined;
                    City?: string | undefined;
                    Region?: string | undefined;
                    PostalCode?: string | undefined;
                    Country?: string | undefined;
                    YearFounded?: number | undefined;
                    Licensed?: boolean | undefined;
                    LicenseCountry?: string | undefined;
                    LicenseNumber?: string | undefined;
                    Phone?: string | undefined;
                    Email?: string | undefined;
                    SocialMediaLinks?: string[] | undefined;
                    KeyClients?: string | undefined;
                    Press?: string | undefined;
                } | undefined;
            }[] | undefined;
        } & {
            DynamicAssetID?: string | undefined;
            Title?: string | undefined;
            Description?: string | undefined;
            Identifier?: string | undefined;
            OrganizationID?: string | undefined;
            Assets?: ({
                AssetDetails?: {
                    ID?: string | undefined;
                    OrganizationID?: string | undefined;
                    Status?: import("./sologenic/com-fs-asset-model/asset").AssetStatus | undefined;
                    Reason?: import("./sologenic/com-fs-asset-model/asset").Reason | undefined;
                    Type?: import("./sologenic/com-fs-asset-model/asset").AssetType | undefined;
                    Denom?: {
                        Currency?: {
                            Symbol?: string | undefined;
                            Version?: string | undefined;
                        } | undefined;
                        Subunit?: string | undefined;
                        Issuer?: string | undefined;
                        Precision?: number | undefined;
                        Description?: string | undefined;
                    } | undefined;
                    IsIssuedInSmartContract?: boolean | undefined;
                    SmartContractIssuerAddr?: string | undefined;
                    RealEstateDetails?: {
                        Address?: string | undefined;
                        Bathrooms?: number | undefined;
                        Bedrooms?: number | undefined;
                        Latitude?: number | undefined;
                        Longitude?: number | undefined;
                        OwnershipType?: string | undefined;
                        PropertyType?: string | undefined;
                        RiskRating?: string | undefined;
                        SquareFootage?: number | undefined;
                        TenancyStatus?: string | undefined;
                        YearBuilt?: number | undefined;
                        YieldPercent?: number[] | undefined;
                    } | undefined;
                    StableCoinDetails?: {
                        Version?: string | undefined;
                        PegType?: string | undefined;
                        PegRatio?: number | undefined;
                        BackingAsset?: string | undefined;
                        ExchangeTickerSymbol?: string | undefined;
                        Exchange?: string | undefined;
                        MinTransactionAmount?: number | undefined;
                        TradingMarginPercentage?: number | undefined;
                        AssetMarginPercentage?: number | undefined;
                    } | undefined;
                    CommodityDetails?: {
                        Category?: string | undefined;
                        Quality?: string | undefined;
                        UnitOfMeasure?: string | undefined;
                        Quantity?: number | undefined;
                        OriginCountry?: string | undefined;
                        ExchangeTickerSymbol?: string | undefined;
                        Exchange?: string | undefined;
                        MinTransactionAmount?: number | undefined;
                        StorageLocation?: string | undefined;
                        ContractType?: string | undefined;
                        DeliveryDate?: string | undefined;
                    } | undefined;
                    CollectibleDetails?: {
                        Category?: string | undefined;
                        CollectionName?: string | undefined;
                        TokenStandard?: string | undefined;
                        TokenID?: string | undefined;
                        MetadataURI?: string | undefined;
                        Creator?: string | undefined;
                        OwnershipHistory?: string[] | undefined;
                        CurrentOwner?: string | undefined;
                    } | undefined;
                    VehicleDetails?: {
                        Category?: string | undefined;
                        Manufacturer?: string | undefined;
                        Model?: string | undefined;
                        SerialNumber?: string | undefined;
                        Year?: number | undefined;
                        Specifications?: string | undefined;
                        FuelType?: string | undefined;
                        UsageHours?: number | undefined;
                        Mileage?: number | undefined;
                        Condition?: string | undefined;
                        CurrentOwner?: string | undefined;
                        Location?: string | undefined;
                    } | undefined;
                    IntellectualPropertyDetails?: {
                        Category?: string | undefined;
                        Owner?: string | undefined;
                        RegistrationNumber?: string | undefined;
                        FilingDate?: string | undefined;
                        ExpirationDate?: string | undefined;
                        IPJurisdictionIDs?: string[] | undefined;
                        LicenseType?: string | undefined;
                        LicenseTerms?: string | undefined;
                        Value?: number | undefined;
                    } | undefined;
                    InvestmentFundDetails?: {
                        FundType?: string | undefined;
                        Exchange?: string | undefined;
                        ISIN?: string | undefined;
                        NAV?: number | undefined;
                        InceptionDate?: string | undefined;
                        Manager?: string | undefined;
                        ExpenseRatio?: number | undefined;
                        Holdings?: string[] | undefined;
                    } | undefined;
                    EquityDetails?: {
                        ExchangeTickerSymbol?: string | undefined;
                        Exchange?: string | undefined;
                        MinTransactionAmount?: string | undefined;
                        ExtraPercentage?: string | undefined;
                        AssetMarginPercentage?: string | undefined;
                    } | undefined;
                    FinancialProperties?: {
                        Symbol?: string | undefined;
                        Issuer?: string | undefined;
                        JurisdictionIDs?: string[] | undefined;
                        JurisdictionRestrictions?: string | undefined;
                        RedemptionTerms?: string | undefined;
                        ComplianceRequired?: boolean | undefined;
                        Type?: string | undefined;
                        TradeAllowances?: string[] | undefined;
                        Transferable?: boolean | undefined;
                        Platform?: string | undefined;
                        PlatformType?: string | undefined;
                        ContractAddress?: string | undefined;
                        Fractional?: boolean | undefined;
                        TotalSupply?: number | undefined;
                        DecimalPlacesSupply?: number | undefined;
                        Subunit?: string | undefined;
                        Price?: number | undefined;
                        DecimalPlacesPrice?: number | undefined;
                        Currency?: string | undefined;
                        InitialValuation?: number | undefined;
                        CurrentValuation?: number | undefined;
                        ValuationDate?: string | undefined;
                        Network?: Network | undefined;
                        Status?: string | undefined;
                    } | undefined;
                    Description?: {
                        Name?: string | undefined;
                        Description?: string | undefined;
                        Logo?: {
                            Reference?: string | undefined;
                            Extension?: string | undefined;
                            Name?: string | undefined;
                        } | undefined;
                        AssetID?: string | undefined;
                        URL?: string | undefined;
                        Country?: string | undefined;
                        Documents?: string[] | undefined;
                        Images?: string[] | undefined;
                        Vertical?: string | undefined;
                        CreatedAt?: string | undefined;
                        UpdatedAt?: string | undefined;
                    } | undefined;
                    ExternalResources?: {
                        Links?: {
                            Type?: import("./sologenic/com-fs-asset-model/asset").LinkType | undefined;
                            URL?: string | undefined;
                        }[] | undefined;
                        Socials?: {
                            Type?: import("./sologenic/com-fs-asset-model/asset").SocialMediaType | undefined;
                            URL?: string | undefined;
                        }[] | undefined;
                    } | undefined;
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
                IssuerDetails?: {
                    Name?: string | undefined;
                    Description?: string | undefined;
                    Image?: string | undefined;
                    ExternalUrl?: string | undefined;
                    AddressLine1?: string | undefined;
                    AddressLine2?: string | undefined;
                    City?: string | undefined;
                    Region?: string | undefined;
                    PostalCode?: string | undefined;
                    Country?: string | undefined;
                    YearFounded?: number | undefined;
                    Licensed?: boolean | undefined;
                    LicenseCountry?: string | undefined;
                    LicenseNumber?: string | undefined;
                    Phone?: string | undefined;
                    Email?: string | undefined;
                    SocialMediaLinks?: string[] | undefined;
                    KeyClients?: string | undefined;
                    Press?: string | undefined;
                } | undefined;
            }[] & ({
                AssetDetails?: {
                    ID?: string | undefined;
                    OrganizationID?: string | undefined;
                    Status?: import("./sologenic/com-fs-asset-model/asset").AssetStatus | undefined;
                    Reason?: import("./sologenic/com-fs-asset-model/asset").Reason | undefined;
                    Type?: import("./sologenic/com-fs-asset-model/asset").AssetType | undefined;
                    Denom?: {
                        Currency?: {
                            Symbol?: string | undefined;
                            Version?: string | undefined;
                        } | undefined;
                        Subunit?: string | undefined;
                        Issuer?: string | undefined;
                        Precision?: number | undefined;
                        Description?: string | undefined;
                    } | undefined;
                    IsIssuedInSmartContract?: boolean | undefined;
                    SmartContractIssuerAddr?: string | undefined;
                    RealEstateDetails?: {
                        Address?: string | undefined;
                        Bathrooms?: number | undefined;
                        Bedrooms?: number | undefined;
                        Latitude?: number | undefined;
                        Longitude?: number | undefined;
                        OwnershipType?: string | undefined;
                        PropertyType?: string | undefined;
                        RiskRating?: string | undefined;
                        SquareFootage?: number | undefined;
                        TenancyStatus?: string | undefined;
                        YearBuilt?: number | undefined;
                        YieldPercent?: number[] | undefined;
                    } | undefined;
                    StableCoinDetails?: {
                        Version?: string | undefined;
                        PegType?: string | undefined;
                        PegRatio?: number | undefined;
                        BackingAsset?: string | undefined;
                        ExchangeTickerSymbol?: string | undefined;
                        Exchange?: string | undefined;
                        MinTransactionAmount?: number | undefined;
                        TradingMarginPercentage?: number | undefined;
                        AssetMarginPercentage?: number | undefined;
                    } | undefined;
                    CommodityDetails?: {
                        Category?: string | undefined;
                        Quality?: string | undefined;
                        UnitOfMeasure?: string | undefined;
                        Quantity?: number | undefined;
                        OriginCountry?: string | undefined;
                        ExchangeTickerSymbol?: string | undefined;
                        Exchange?: string | undefined;
                        MinTransactionAmount?: number | undefined;
                        StorageLocation?: string | undefined;
                        ContractType?: string | undefined;
                        DeliveryDate?: string | undefined;
                    } | undefined;
                    CollectibleDetails?: {
                        Category?: string | undefined;
                        CollectionName?: string | undefined;
                        TokenStandard?: string | undefined;
                        TokenID?: string | undefined;
                        MetadataURI?: string | undefined;
                        Creator?: string | undefined;
                        OwnershipHistory?: string[] | undefined;
                        CurrentOwner?: string | undefined;
                    } | undefined;
                    VehicleDetails?: {
                        Category?: string | undefined;
                        Manufacturer?: string | undefined;
                        Model?: string | undefined;
                        SerialNumber?: string | undefined;
                        Year?: number | undefined;
                        Specifications?: string | undefined;
                        FuelType?: string | undefined;
                        UsageHours?: number | undefined;
                        Mileage?: number | undefined;
                        Condition?: string | undefined;
                        CurrentOwner?: string | undefined;
                        Location?: string | undefined;
                    } | undefined;
                    IntellectualPropertyDetails?: {
                        Category?: string | undefined;
                        Owner?: string | undefined;
                        RegistrationNumber?: string | undefined;
                        FilingDate?: string | undefined;
                        ExpirationDate?: string | undefined;
                        IPJurisdictionIDs?: string[] | undefined;
                        LicenseType?: string | undefined;
                        LicenseTerms?: string | undefined;
                        Value?: number | undefined;
                    } | undefined;
                    InvestmentFundDetails?: {
                        FundType?: string | undefined;
                        Exchange?: string | undefined;
                        ISIN?: string | undefined;
                        NAV?: number | undefined;
                        InceptionDate?: string | undefined;
                        Manager?: string | undefined;
                        ExpenseRatio?: number | undefined;
                        Holdings?: string[] | undefined;
                    } | undefined;
                    EquityDetails?: {
                        ExchangeTickerSymbol?: string | undefined;
                        Exchange?: string | undefined;
                        MinTransactionAmount?: string | undefined;
                        ExtraPercentage?: string | undefined;
                        AssetMarginPercentage?: string | undefined;
                    } | undefined;
                    FinancialProperties?: {
                        Symbol?: string | undefined;
                        Issuer?: string | undefined;
                        JurisdictionIDs?: string[] | undefined;
                        JurisdictionRestrictions?: string | undefined;
                        RedemptionTerms?: string | undefined;
                        ComplianceRequired?: boolean | undefined;
                        Type?: string | undefined;
                        TradeAllowances?: string[] | undefined;
                        Transferable?: boolean | undefined;
                        Platform?: string | undefined;
                        PlatformType?: string | undefined;
                        ContractAddress?: string | undefined;
                        Fractional?: boolean | undefined;
                        TotalSupply?: number | undefined;
                        DecimalPlacesSupply?: number | undefined;
                        Subunit?: string | undefined;
                        Price?: number | undefined;
                        DecimalPlacesPrice?: number | undefined;
                        Currency?: string | undefined;
                        InitialValuation?: number | undefined;
                        CurrentValuation?: number | undefined;
                        ValuationDate?: string | undefined;
                        Network?: Network | undefined;
                        Status?: string | undefined;
                    } | undefined;
                    Description?: {
                        Name?: string | undefined;
                        Description?: string | undefined;
                        Logo?: {
                            Reference?: string | undefined;
                            Extension?: string | undefined;
                            Name?: string | undefined;
                        } | undefined;
                        AssetID?: string | undefined;
                        URL?: string | undefined;
                        Country?: string | undefined;
                        Documents?: string[] | undefined;
                        Images?: string[] | undefined;
                        Vertical?: string | undefined;
                        CreatedAt?: string | undefined;
                        UpdatedAt?: string | undefined;
                    } | undefined;
                    ExternalResources?: {
                        Links?: {
                            Type?: import("./sologenic/com-fs-asset-model/asset").LinkType | undefined;
                            URL?: string | undefined;
                        }[] | undefined;
                        Socials?: {
                            Type?: import("./sologenic/com-fs-asset-model/asset").SocialMediaType | undefined;
                            URL?: string | undefined;
                        }[] | undefined;
                    } | undefined;
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
                IssuerDetails?: {
                    Name?: string | undefined;
                    Description?: string | undefined;
                    Image?: string | undefined;
                    ExternalUrl?: string | undefined;
                    AddressLine1?: string | undefined;
                    AddressLine2?: string | undefined;
                    City?: string | undefined;
                    Region?: string | undefined;
                    PostalCode?: string | undefined;
                    Country?: string | undefined;
                    YearFounded?: number | undefined;
                    Licensed?: boolean | undefined;
                    LicenseCountry?: string | undefined;
                    LicenseNumber?: string | undefined;
                    Phone?: string | undefined;
                    Email?: string | undefined;
                    SocialMediaLinks?: string[] | undefined;
                    KeyClients?: string | undefined;
                    Press?: string | undefined;
                } | undefined;
            } & {
                AssetDetails?: ({
                    ID?: string | undefined;
                    OrganizationID?: string | undefined;
                    Status?: import("./sologenic/com-fs-asset-model/asset").AssetStatus | undefined;
                    Reason?: import("./sologenic/com-fs-asset-model/asset").Reason | undefined;
                    Type?: import("./sologenic/com-fs-asset-model/asset").AssetType | undefined;
                    Denom?: {
                        Currency?: {
                            Symbol?: string | undefined;
                            Version?: string | undefined;
                        } | undefined;
                        Subunit?: string | undefined;
                        Issuer?: string | undefined;
                        Precision?: number | undefined;
                        Description?: string | undefined;
                    } | undefined;
                    IsIssuedInSmartContract?: boolean | undefined;
                    SmartContractIssuerAddr?: string | undefined;
                    RealEstateDetails?: {
                        Address?: string | undefined;
                        Bathrooms?: number | undefined;
                        Bedrooms?: number | undefined;
                        Latitude?: number | undefined;
                        Longitude?: number | undefined;
                        OwnershipType?: string | undefined;
                        PropertyType?: string | undefined;
                        RiskRating?: string | undefined;
                        SquareFootage?: number | undefined;
                        TenancyStatus?: string | undefined;
                        YearBuilt?: number | undefined;
                        YieldPercent?: number[] | undefined;
                    } | undefined;
                    StableCoinDetails?: {
                        Version?: string | undefined;
                        PegType?: string | undefined;
                        PegRatio?: number | undefined;
                        BackingAsset?: string | undefined;
                        ExchangeTickerSymbol?: string | undefined;
                        Exchange?: string | undefined;
                        MinTransactionAmount?: number | undefined;
                        TradingMarginPercentage?: number | undefined;
                        AssetMarginPercentage?: number | undefined;
                    } | undefined;
                    CommodityDetails?: {
                        Category?: string | undefined;
                        Quality?: string | undefined;
                        UnitOfMeasure?: string | undefined;
                        Quantity?: number | undefined;
                        OriginCountry?: string | undefined;
                        ExchangeTickerSymbol?: string | undefined;
                        Exchange?: string | undefined;
                        MinTransactionAmount?: number | undefined;
                        StorageLocation?: string | undefined;
                        ContractType?: string | undefined;
                        DeliveryDate?: string | undefined;
                    } | undefined;
                    CollectibleDetails?: {
                        Category?: string | undefined;
                        CollectionName?: string | undefined;
                        TokenStandard?: string | undefined;
                        TokenID?: string | undefined;
                        MetadataURI?: string | undefined;
                        Creator?: string | undefined;
                        OwnershipHistory?: string[] | undefined;
                        CurrentOwner?: string | undefined;
                    } | undefined;
                    VehicleDetails?: {
                        Category?: string | undefined;
                        Manufacturer?: string | undefined;
                        Model?: string | undefined;
                        SerialNumber?: string | undefined;
                        Year?: number | undefined;
                        Specifications?: string | undefined;
                        FuelType?: string | undefined;
                        UsageHours?: number | undefined;
                        Mileage?: number | undefined;
                        Condition?: string | undefined;
                        CurrentOwner?: string | undefined;
                        Location?: string | undefined;
                    } | undefined;
                    IntellectualPropertyDetails?: {
                        Category?: string | undefined;
                        Owner?: string | undefined;
                        RegistrationNumber?: string | undefined;
                        FilingDate?: string | undefined;
                        ExpirationDate?: string | undefined;
                        IPJurisdictionIDs?: string[] | undefined;
                        LicenseType?: string | undefined;
                        LicenseTerms?: string | undefined;
                        Value?: number | undefined;
                    } | undefined;
                    InvestmentFundDetails?: {
                        FundType?: string | undefined;
                        Exchange?: string | undefined;
                        ISIN?: string | undefined;
                        NAV?: number | undefined;
                        InceptionDate?: string | undefined;
                        Manager?: string | undefined;
                        ExpenseRatio?: number | undefined;
                        Holdings?: string[] | undefined;
                    } | undefined;
                    EquityDetails?: {
                        ExchangeTickerSymbol?: string | undefined;
                        Exchange?: string | undefined;
                        MinTransactionAmount?: string | undefined;
                        ExtraPercentage?: string | undefined;
                        AssetMarginPercentage?: string | undefined;
                    } | undefined;
                    FinancialProperties?: {
                        Symbol?: string | undefined;
                        Issuer?: string | undefined;
                        JurisdictionIDs?: string[] | undefined;
                        JurisdictionRestrictions?: string | undefined;
                        RedemptionTerms?: string | undefined;
                        ComplianceRequired?: boolean | undefined;
                        Type?: string | undefined;
                        TradeAllowances?: string[] | undefined;
                        Transferable?: boolean | undefined;
                        Platform?: string | undefined;
                        PlatformType?: string | undefined;
                        ContractAddress?: string | undefined;
                        Fractional?: boolean | undefined;
                        TotalSupply?: number | undefined;
                        DecimalPlacesSupply?: number | undefined;
                        Subunit?: string | undefined;
                        Price?: number | undefined;
                        DecimalPlacesPrice?: number | undefined;
                        Currency?: string | undefined;
                        InitialValuation?: number | undefined;
                        CurrentValuation?: number | undefined;
                        ValuationDate?: string | undefined;
                        Network?: Network | undefined;
                        Status?: string | undefined;
                    } | undefined;
                    Description?: {
                        Name?: string | undefined;
                        Description?: string | undefined;
                        Logo?: {
                            Reference?: string | undefined;
                            Extension?: string | undefined;
                            Name?: string | undefined;
                        } | undefined;
                        AssetID?: string | undefined;
                        URL?: string | undefined;
                        Country?: string | undefined;
                        Documents?: string[] | undefined;
                        Images?: string[] | undefined;
                        Vertical?: string | undefined;
                        CreatedAt?: string | undefined;
                        UpdatedAt?: string | undefined;
                    } | undefined;
                    ExternalResources?: {
                        Links?: {
                            Type?: import("./sologenic/com-fs-asset-model/asset").LinkType | undefined;
                            URL?: string | undefined;
                        }[] | undefined;
                        Socials?: {
                            Type?: import("./sologenic/com-fs-asset-model/asset").SocialMediaType | undefined;
                            URL?: string | undefined;
                        }[] | undefined;
                    } | undefined;
                } & {
                    ID?: string | undefined;
                    OrganizationID?: string | undefined;
                    Status?: import("./sologenic/com-fs-asset-model/asset").AssetStatus | undefined;
                    Reason?: import("./sologenic/com-fs-asset-model/asset").Reason | undefined;
                    Type?: import("./sologenic/com-fs-asset-model/asset").AssetType | undefined;
                    Denom?: ({
                        Currency?: {
                            Symbol?: string | undefined;
                            Version?: string | undefined;
                        } | undefined;
                        Subunit?: string | undefined;
                        Issuer?: string | undefined;
                        Precision?: number | undefined;
                        Description?: string | undefined;
                    } & {
                        Currency?: ({
                            Symbol?: string | undefined;
                            Version?: string | undefined;
                        } & {
                            Symbol?: string | undefined;
                            Version?: string | undefined;
                        } & { [K_37 in Exclude<keyof I_1["DynamicAsset"]["Assets"][number]["AssetDetails"]["Denom"]["Currency"], keyof import("./sologenic/com-fs-asset-model/domain/currency/currency").Currency>]: never; }) | undefined;
                        Subunit?: string | undefined;
                        Issuer?: string | undefined;
                        Precision?: number | undefined;
                        Description?: string | undefined;
                    } & { [K_38 in Exclude<keyof I_1["DynamicAsset"]["Assets"][number]["AssetDetails"]["Denom"], keyof import("./sologenic/com-fs-asset-model/domain/denom/denom").Denom>]: never; }) | undefined;
                    IsIssuedInSmartContract?: boolean | undefined;
                    SmartContractIssuerAddr?: string | undefined;
                    RealEstateDetails?: ({
                        Address?: string | undefined;
                        Bathrooms?: number | undefined;
                        Bedrooms?: number | undefined;
                        Latitude?: number | undefined;
                        Longitude?: number | undefined;
                        OwnershipType?: string | undefined;
                        PropertyType?: string | undefined;
                        RiskRating?: string | undefined;
                        SquareFootage?: number | undefined;
                        TenancyStatus?: string | undefined;
                        YearBuilt?: number | undefined;
                        YieldPercent?: number[] | undefined;
                    } & {
                        Address?: string | undefined;
                        Bathrooms?: number | undefined;
                        Bedrooms?: number | undefined;
                        Latitude?: number | undefined;
                        Longitude?: number | undefined;
                        OwnershipType?: string | undefined;
                        PropertyType?: string | undefined;
                        RiskRating?: string | undefined;
                        SquareFootage?: number | undefined;
                        TenancyStatus?: string | undefined;
                        YearBuilt?: number | undefined;
                        YieldPercent?: (number[] & number[] & { [K_39 in Exclude<keyof I_1["DynamicAsset"]["Assets"][number]["AssetDetails"]["RealEstateDetails"]["YieldPercent"], keyof number[]>]: never; }) | undefined;
                    } & { [K_40 in Exclude<keyof I_1["DynamicAsset"]["Assets"][number]["AssetDetails"]["RealEstateDetails"], keyof import("./sologenic/com-fs-asset-model/asset").RealEstate>]: never; }) | undefined;
                    StableCoinDetails?: ({
                        Version?: string | undefined;
                        PegType?: string | undefined;
                        PegRatio?: number | undefined;
                        BackingAsset?: string | undefined;
                        ExchangeTickerSymbol?: string | undefined;
                        Exchange?: string | undefined;
                        MinTransactionAmount?: number | undefined;
                        TradingMarginPercentage?: number | undefined;
                        AssetMarginPercentage?: number | undefined;
                    } & {
                        Version?: string | undefined;
                        PegType?: string | undefined;
                        PegRatio?: number | undefined;
                        BackingAsset?: string | undefined;
                        ExchangeTickerSymbol?: string | undefined;
                        Exchange?: string | undefined;
                        MinTransactionAmount?: number | undefined;
                        TradingMarginPercentage?: number | undefined;
                        AssetMarginPercentage?: number | undefined;
                    } & { [K_41 in Exclude<keyof I_1["DynamicAsset"]["Assets"][number]["AssetDetails"]["StableCoinDetails"], keyof import("./sologenic/com-fs-asset-model/asset").StableCoin>]: never; }) | undefined;
                    CommodityDetails?: ({
                        Category?: string | undefined;
                        Quality?: string | undefined;
                        UnitOfMeasure?: string | undefined;
                        Quantity?: number | undefined;
                        OriginCountry?: string | undefined;
                        ExchangeTickerSymbol?: string | undefined;
                        Exchange?: string | undefined;
                        MinTransactionAmount?: number | undefined;
                        StorageLocation?: string | undefined;
                        ContractType?: string | undefined;
                        DeliveryDate?: string | undefined;
                    } & {
                        Category?: string | undefined;
                        Quality?: string | undefined;
                        UnitOfMeasure?: string | undefined;
                        Quantity?: number | undefined;
                        OriginCountry?: string | undefined;
                        ExchangeTickerSymbol?: string | undefined;
                        Exchange?: string | undefined;
                        MinTransactionAmount?: number | undefined;
                        StorageLocation?: string | undefined;
                        ContractType?: string | undefined;
                        DeliveryDate?: string | undefined;
                    } & { [K_42 in Exclude<keyof I_1["DynamicAsset"]["Assets"][number]["AssetDetails"]["CommodityDetails"], keyof import("./sologenic/com-fs-asset-model/asset").Commodity>]: never; }) | undefined;
                    CollectibleDetails?: ({
                        Category?: string | undefined;
                        CollectionName?: string | undefined;
                        TokenStandard?: string | undefined;
                        TokenID?: string | undefined;
                        MetadataURI?: string | undefined;
                        Creator?: string | undefined;
                        OwnershipHistory?: string[] | undefined;
                        CurrentOwner?: string | undefined;
                    } & {
                        Category?: string | undefined;
                        CollectionName?: string | undefined;
                        TokenStandard?: string | undefined;
                        TokenID?: string | undefined;
                        MetadataURI?: string | undefined;
                        Creator?: string | undefined;
                        OwnershipHistory?: (string[] & string[] & { [K_43 in Exclude<keyof I_1["DynamicAsset"]["Assets"][number]["AssetDetails"]["CollectibleDetails"]["OwnershipHistory"], keyof string[]>]: never; }) | undefined;
                        CurrentOwner?: string | undefined;
                    } & { [K_44 in Exclude<keyof I_1["DynamicAsset"]["Assets"][number]["AssetDetails"]["CollectibleDetails"], keyof import("./sologenic/com-fs-asset-model/asset").Collectible>]: never; }) | undefined;
                    VehicleDetails?: ({
                        Category?: string | undefined;
                        Manufacturer?: string | undefined;
                        Model?: string | undefined;
                        SerialNumber?: string | undefined;
                        Year?: number | undefined;
                        Specifications?: string | undefined;
                        FuelType?: string | undefined;
                        UsageHours?: number | undefined;
                        Mileage?: number | undefined;
                        Condition?: string | undefined;
                        CurrentOwner?: string | undefined;
                        Location?: string | undefined;
                    } & {
                        Category?: string | undefined;
                        Manufacturer?: string | undefined;
                        Model?: string | undefined;
                        SerialNumber?: string | undefined;
                        Year?: number | undefined;
                        Specifications?: string | undefined;
                        FuelType?: string | undefined;
                        UsageHours?: number | undefined;
                        Mileage?: number | undefined;
                        Condition?: string | undefined;
                        CurrentOwner?: string | undefined;
                        Location?: string | undefined;
                    } & { [K_45 in Exclude<keyof I_1["DynamicAsset"]["Assets"][number]["AssetDetails"]["VehicleDetails"], keyof import("./sologenic/com-fs-asset-model/asset").Vehicle>]: never; }) | undefined;
                    IntellectualPropertyDetails?: ({
                        Category?: string | undefined;
                        Owner?: string | undefined;
                        RegistrationNumber?: string | undefined;
                        FilingDate?: string | undefined;
                        ExpirationDate?: string | undefined;
                        IPJurisdictionIDs?: string[] | undefined;
                        LicenseType?: string | undefined;
                        LicenseTerms?: string | undefined;
                        Value?: number | undefined;
                    } & {
                        Category?: string | undefined;
                        Owner?: string | undefined;
                        RegistrationNumber?: string | undefined;
                        FilingDate?: string | undefined;
                        ExpirationDate?: string | undefined;
                        IPJurisdictionIDs?: (string[] & string[] & { [K_46 in Exclude<keyof I_1["DynamicAsset"]["Assets"][number]["AssetDetails"]["IntellectualPropertyDetails"]["IPJurisdictionIDs"], keyof string[]>]: never; }) | undefined;
                        LicenseType?: string | undefined;
                        LicenseTerms?: string | undefined;
                        Value?: number | undefined;
                    } & { [K_47 in Exclude<keyof I_1["DynamicAsset"]["Assets"][number]["AssetDetails"]["IntellectualPropertyDetails"], keyof import("./sologenic/com-fs-asset-model/asset").IntellectualProperty>]: never; }) | undefined;
                    InvestmentFundDetails?: ({
                        FundType?: string | undefined;
                        Exchange?: string | undefined;
                        ISIN?: string | undefined;
                        NAV?: number | undefined;
                        InceptionDate?: string | undefined;
                        Manager?: string | undefined;
                        ExpenseRatio?: number | undefined;
                        Holdings?: string[] | undefined;
                    } & {
                        FundType?: string | undefined;
                        Exchange?: string | undefined;
                        ISIN?: string | undefined;
                        NAV?: number | undefined;
                        InceptionDate?: string | undefined;
                        Manager?: string | undefined;
                        ExpenseRatio?: number | undefined;
                        Holdings?: (string[] & string[] & { [K_48 in Exclude<keyof I_1["DynamicAsset"]["Assets"][number]["AssetDetails"]["InvestmentFundDetails"]["Holdings"], keyof string[]>]: never; }) | undefined;
                    } & { [K_49 in Exclude<keyof I_1["DynamicAsset"]["Assets"][number]["AssetDetails"]["InvestmentFundDetails"], keyof import("./sologenic/com-fs-asset-model/asset").InvestmentFund>]: never; }) | undefined;
                    EquityDetails?: ({
                        ExchangeTickerSymbol?: string | undefined;
                        Exchange?: string | undefined;
                        MinTransactionAmount?: string | undefined;
                        ExtraPercentage?: string | undefined;
                        AssetMarginPercentage?: string | undefined;
                    } & {
                        ExchangeTickerSymbol?: string | undefined;
                        Exchange?: string | undefined;
                        MinTransactionAmount?: string | undefined;
                        ExtraPercentage?: string | undefined;
                        AssetMarginPercentage?: string | undefined;
                    } & { [K_50 in Exclude<keyof I_1["DynamicAsset"]["Assets"][number]["AssetDetails"]["EquityDetails"], keyof import("./sologenic/com-fs-asset-model/asset").Equity>]: never; }) | undefined;
                    FinancialProperties?: ({
                        Symbol?: string | undefined;
                        Issuer?: string | undefined;
                        JurisdictionIDs?: string[] | undefined;
                        JurisdictionRestrictions?: string | undefined;
                        RedemptionTerms?: string | undefined;
                        ComplianceRequired?: boolean | undefined;
                        Type?: string | undefined;
                        TradeAllowances?: string[] | undefined;
                        Transferable?: boolean | undefined;
                        Platform?: string | undefined;
                        PlatformType?: string | undefined;
                        ContractAddress?: string | undefined;
                        Fractional?: boolean | undefined;
                        TotalSupply?: number | undefined;
                        DecimalPlacesSupply?: number | undefined;
                        Subunit?: string | undefined;
                        Price?: number | undefined;
                        DecimalPlacesPrice?: number | undefined;
                        Currency?: string | undefined;
                        InitialValuation?: number | undefined;
                        CurrentValuation?: number | undefined;
                        ValuationDate?: string | undefined;
                        Network?: Network | undefined;
                        Status?: string | undefined;
                    } & {
                        Symbol?: string | undefined;
                        Issuer?: string | undefined;
                        JurisdictionIDs?: (string[] & string[] & { [K_51 in Exclude<keyof I_1["DynamicAsset"]["Assets"][number]["AssetDetails"]["FinancialProperties"]["JurisdictionIDs"], keyof string[]>]: never; }) | undefined;
                        JurisdictionRestrictions?: string | undefined;
                        RedemptionTerms?: string | undefined;
                        ComplianceRequired?: boolean | undefined;
                        Type?: string | undefined;
                        TradeAllowances?: (string[] & string[] & { [K_52 in Exclude<keyof I_1["DynamicAsset"]["Assets"][number]["AssetDetails"]["FinancialProperties"]["TradeAllowances"], keyof string[]>]: never; }) | undefined;
                        Transferable?: boolean | undefined;
                        Platform?: string | undefined;
                        PlatformType?: string | undefined;
                        ContractAddress?: string | undefined;
                        Fractional?: boolean | undefined;
                        TotalSupply?: number | undefined;
                        DecimalPlacesSupply?: number | undefined;
                        Subunit?: string | undefined;
                        Price?: number | undefined;
                        DecimalPlacesPrice?: number | undefined;
                        Currency?: string | undefined;
                        InitialValuation?: number | undefined;
                        CurrentValuation?: number | undefined;
                        ValuationDate?: string | undefined;
                        Network?: Network | undefined;
                        Status?: string | undefined;
                    } & { [K_53 in Exclude<keyof I_1["DynamicAsset"]["Assets"][number]["AssetDetails"]["FinancialProperties"], keyof import("./sologenic/com-fs-asset-model/asset").FinancialProperties>]: never; }) | undefined;
                    Description?: ({
                        Name?: string | undefined;
                        Description?: string | undefined;
                        Logo?: {
                            Reference?: string | undefined;
                            Extension?: string | undefined;
                            Name?: string | undefined;
                        } | undefined;
                        AssetID?: string | undefined;
                        URL?: string | undefined;
                        Country?: string | undefined;
                        Documents?: string[] | undefined;
                        Images?: string[] | undefined;
                        Vertical?: string | undefined;
                        CreatedAt?: string | undefined;
                        UpdatedAt?: string | undefined;
                    } & {
                        Name?: string | undefined;
                        Description?: string | undefined;
                        Logo?: ({
                            Reference?: string | undefined;
                            Extension?: string | undefined;
                            Name?: string | undefined;
                        } & {
                            Reference?: string | undefined;
                            Extension?: string | undefined;
                            Name?: string | undefined;
                        } & { [K_54 in Exclude<keyof I_1["DynamicAsset"]["Assets"][number]["AssetDetails"]["Description"]["Logo"], keyof import("./sologenic/com-fs-asset-model/asset").LogoFile>]: never; }) | undefined;
                        AssetID?: string | undefined;
                        URL?: string | undefined;
                        Country?: string | undefined;
                        Documents?: (string[] & string[] & { [K_55 in Exclude<keyof I_1["DynamicAsset"]["Assets"][number]["AssetDetails"]["Description"]["Documents"], keyof string[]>]: never; }) | undefined;
                        Images?: (string[] & string[] & { [K_56 in Exclude<keyof I_1["DynamicAsset"]["Assets"][number]["AssetDetails"]["Description"]["Images"], keyof string[]>]: never; }) | undefined;
                        Vertical?: string | undefined;
                        CreatedAt?: string | undefined;
                        UpdatedAt?: string | undefined;
                    } & { [K_57 in Exclude<keyof I_1["DynamicAsset"]["Assets"][number]["AssetDetails"]["Description"], keyof import("./sologenic/com-fs-asset-model/asset").Description>]: never; }) | undefined;
                    ExternalResources?: ({
                        Links?: {
                            Type?: import("./sologenic/com-fs-asset-model/asset").LinkType | undefined;
                            URL?: string | undefined;
                        }[] | undefined;
                        Socials?: {
                            Type?: import("./sologenic/com-fs-asset-model/asset").SocialMediaType | undefined;
                            URL?: string | undefined;
                        }[] | undefined;
                    } & {
                        Links?: ({
                            Type?: import("./sologenic/com-fs-asset-model/asset").LinkType | undefined;
                            URL?: string | undefined;
                        }[] & ({
                            Type?: import("./sologenic/com-fs-asset-model/asset").LinkType | undefined;
                            URL?: string | undefined;
                        } & {
                            Type?: import("./sologenic/com-fs-asset-model/asset").LinkType | undefined;
                            URL?: string | undefined;
                        } & { [K_58 in Exclude<keyof I_1["DynamicAsset"]["Assets"][number]["AssetDetails"]["ExternalResources"]["Links"][number], keyof import("./sologenic/com-fs-asset-model/asset").Link>]: never; })[] & { [K_59 in Exclude<keyof I_1["DynamicAsset"]["Assets"][number]["AssetDetails"]["ExternalResources"]["Links"], keyof {
                            Type?: import("./sologenic/com-fs-asset-model/asset").LinkType | undefined;
                            URL?: string | undefined;
                        }[]>]: never; }) | undefined;
                        Socials?: ({
                            Type?: import("./sologenic/com-fs-asset-model/asset").SocialMediaType | undefined;
                            URL?: string | undefined;
                        }[] & ({
                            Type?: import("./sologenic/com-fs-asset-model/asset").SocialMediaType | undefined;
                            URL?: string | undefined;
                        } & {
                            Type?: import("./sologenic/com-fs-asset-model/asset").SocialMediaType | undefined;
                            URL?: string | undefined;
                        } & { [K_60 in Exclude<keyof I_1["DynamicAsset"]["Assets"][number]["AssetDetails"]["ExternalResources"]["Socials"][number], keyof import("./sologenic/com-fs-asset-model/asset").SocialMedia>]: never; })[] & { [K_61 in Exclude<keyof I_1["DynamicAsset"]["Assets"][number]["AssetDetails"]["ExternalResources"]["Socials"], keyof {
                            Type?: import("./sologenic/com-fs-asset-model/asset").SocialMediaType | undefined;
                            URL?: string | undefined;
                        }[]>]: never; }) | undefined;
                    } & { [K_62 in Exclude<keyof I_1["DynamicAsset"]["Assets"][number]["AssetDetails"]["ExternalResources"], keyof import("./sologenic/com-fs-asset-model/asset").ExternalResources>]: never; }) | undefined;
                } & { [K_63 in Exclude<keyof I_1["DynamicAsset"]["Assets"][number]["AssetDetails"], keyof import("./sologenic/com-fs-asset-model/asset").AssetDetails>]: never; }) | undefined;
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
                } & { [K_64 in Exclude<keyof I_1["DynamicAsset"]["Assets"][number]["MetaData"], keyof MetaData>]: never; }) | undefined;
                Audit?: ({
                    ChangedBy?: string | undefined;
                    ChangedAt?: Date | undefined;
                    Reason?: string | undefined;
                } & {
                    ChangedBy?: string | undefined;
                    ChangedAt?: Date | undefined;
                    Reason?: string | undefined;
                } & { [K_65 in Exclude<keyof I_1["DynamicAsset"]["Assets"][number]["Audit"], keyof Audit>]: never; }) | undefined;
                IssuerDetails?: ({
                    Name?: string | undefined;
                    Description?: string | undefined;
                    Image?: string | undefined;
                    ExternalUrl?: string | undefined;
                    AddressLine1?: string | undefined;
                    AddressLine2?: string | undefined;
                    City?: string | undefined;
                    Region?: string | undefined;
                    PostalCode?: string | undefined;
                    Country?: string | undefined;
                    YearFounded?: number | undefined;
                    Licensed?: boolean | undefined;
                    LicenseCountry?: string | undefined;
                    LicenseNumber?: string | undefined;
                    Phone?: string | undefined;
                    Email?: string | undefined;
                    SocialMediaLinks?: string[] | undefined;
                    KeyClients?: string | undefined;
                    Press?: string | undefined;
                } & {
                    Name?: string | undefined;
                    Description?: string | undefined;
                    Image?: string | undefined;
                    ExternalUrl?: string | undefined;
                    AddressLine1?: string | undefined;
                    AddressLine2?: string | undefined;
                    City?: string | undefined;
                    Region?: string | undefined;
                    PostalCode?: string | undefined;
                    Country?: string | undefined;
                    YearFounded?: number | undefined;
                    Licensed?: boolean | undefined;
                    LicenseCountry?: string | undefined;
                    LicenseNumber?: string | undefined;
                    Phone?: string | undefined;
                    Email?: string | undefined;
                    SocialMediaLinks?: (string[] & string[] & { [K_66 in Exclude<keyof I_1["DynamicAsset"]["Assets"][number]["IssuerDetails"]["SocialMediaLinks"], keyof string[]>]: never; }) | undefined;
                    KeyClients?: string | undefined;
                    Press?: string | undefined;
                } & { [K_67 in Exclude<keyof I_1["DynamicAsset"]["Assets"][number]["IssuerDetails"], keyof import("./sologenic/com-fs-asset-model/asset").IssuerDetails>]: never; }) | undefined;
            } & { [K_68 in Exclude<keyof I_1["DynamicAsset"]["Assets"][number], keyof Asset>]: never; })[] & { [K_69 in Exclude<keyof I_1["DynamicAsset"]["Assets"], keyof {
                AssetDetails?: {
                    ID?: string | undefined;
                    OrganizationID?: string | undefined;
                    Status?: import("./sologenic/com-fs-asset-model/asset").AssetStatus | undefined;
                    Reason?: import("./sologenic/com-fs-asset-model/asset").Reason | undefined;
                    Type?: import("./sologenic/com-fs-asset-model/asset").AssetType | undefined;
                    Denom?: {
                        Currency?: {
                            Symbol?: string | undefined;
                            Version?: string | undefined;
                        } | undefined;
                        Subunit?: string | undefined;
                        Issuer?: string | undefined;
                        Precision?: number | undefined;
                        Description?: string | undefined;
                    } | undefined;
                    IsIssuedInSmartContract?: boolean | undefined;
                    SmartContractIssuerAddr?: string | undefined;
                    RealEstateDetails?: {
                        Address?: string | undefined;
                        Bathrooms?: number | undefined;
                        Bedrooms?: number | undefined;
                        Latitude?: number | undefined;
                        Longitude?: number | undefined;
                        OwnershipType?: string | undefined;
                        PropertyType?: string | undefined;
                        RiskRating?: string | undefined;
                        SquareFootage?: number | undefined;
                        TenancyStatus?: string | undefined;
                        YearBuilt?: number | undefined;
                        YieldPercent?: number[] | undefined;
                    } | undefined;
                    StableCoinDetails?: {
                        Version?: string | undefined;
                        PegType?: string | undefined;
                        PegRatio?: number | undefined;
                        BackingAsset?: string | undefined;
                        ExchangeTickerSymbol?: string | undefined;
                        Exchange?: string | undefined;
                        MinTransactionAmount?: number | undefined;
                        TradingMarginPercentage?: number | undefined;
                        AssetMarginPercentage?: number | undefined;
                    } | undefined;
                    CommodityDetails?: {
                        Category?: string | undefined;
                        Quality?: string | undefined;
                        UnitOfMeasure?: string | undefined;
                        Quantity?: number | undefined;
                        OriginCountry?: string | undefined;
                        ExchangeTickerSymbol?: string | undefined;
                        Exchange?: string | undefined;
                        MinTransactionAmount?: number | undefined;
                        StorageLocation?: string | undefined;
                        ContractType?: string | undefined;
                        DeliveryDate?: string | undefined;
                    } | undefined;
                    CollectibleDetails?: {
                        Category?: string | undefined;
                        CollectionName?: string | undefined;
                        TokenStandard?: string | undefined;
                        TokenID?: string | undefined;
                        MetadataURI?: string | undefined;
                        Creator?: string | undefined;
                        OwnershipHistory?: string[] | undefined;
                        CurrentOwner?: string | undefined;
                    } | undefined;
                    VehicleDetails?: {
                        Category?: string | undefined;
                        Manufacturer?: string | undefined;
                        Model?: string | undefined;
                        SerialNumber?: string | undefined;
                        Year?: number | undefined;
                        Specifications?: string | undefined;
                        FuelType?: string | undefined;
                        UsageHours?: number | undefined;
                        Mileage?: number | undefined;
                        Condition?: string | undefined;
                        CurrentOwner?: string | undefined;
                        Location?: string | undefined;
                    } | undefined;
                    IntellectualPropertyDetails?: {
                        Category?: string | undefined;
                        Owner?: string | undefined;
                        RegistrationNumber?: string | undefined;
                        FilingDate?: string | undefined;
                        ExpirationDate?: string | undefined;
                        IPJurisdictionIDs?: string[] | undefined;
                        LicenseType?: string | undefined;
                        LicenseTerms?: string | undefined;
                        Value?: number | undefined;
                    } | undefined;
                    InvestmentFundDetails?: {
                        FundType?: string | undefined;
                        Exchange?: string | undefined;
                        ISIN?: string | undefined;
                        NAV?: number | undefined;
                        InceptionDate?: string | undefined;
                        Manager?: string | undefined;
                        ExpenseRatio?: number | undefined;
                        Holdings?: string[] | undefined;
                    } | undefined;
                    EquityDetails?: {
                        ExchangeTickerSymbol?: string | undefined;
                        Exchange?: string | undefined;
                        MinTransactionAmount?: string | undefined;
                        ExtraPercentage?: string | undefined;
                        AssetMarginPercentage?: string | undefined;
                    } | undefined;
                    FinancialProperties?: {
                        Symbol?: string | undefined;
                        Issuer?: string | undefined;
                        JurisdictionIDs?: string[] | undefined;
                        JurisdictionRestrictions?: string | undefined;
                        RedemptionTerms?: string | undefined;
                        ComplianceRequired?: boolean | undefined;
                        Type?: string | undefined;
                        TradeAllowances?: string[] | undefined;
                        Transferable?: boolean | undefined;
                        Platform?: string | undefined;
                        PlatformType?: string | undefined;
                        ContractAddress?: string | undefined;
                        Fractional?: boolean | undefined;
                        TotalSupply?: number | undefined;
                        DecimalPlacesSupply?: number | undefined;
                        Subunit?: string | undefined;
                        Price?: number | undefined;
                        DecimalPlacesPrice?: number | undefined;
                        Currency?: string | undefined;
                        InitialValuation?: number | undefined;
                        CurrentValuation?: number | undefined;
                        ValuationDate?: string | undefined;
                        Network?: Network | undefined;
                        Status?: string | undefined;
                    } | undefined;
                    Description?: {
                        Name?: string | undefined;
                        Description?: string | undefined;
                        Logo?: {
                            Reference?: string | undefined;
                            Extension?: string | undefined;
                            Name?: string | undefined;
                        } | undefined;
                        AssetID?: string | undefined;
                        URL?: string | undefined;
                        Country?: string | undefined;
                        Documents?: string[] | undefined;
                        Images?: string[] | undefined;
                        Vertical?: string | undefined;
                        CreatedAt?: string | undefined;
                        UpdatedAt?: string | undefined;
                    } | undefined;
                    ExternalResources?: {
                        Links?: {
                            Type?: import("./sologenic/com-fs-asset-model/asset").LinkType | undefined;
                            URL?: string | undefined;
                        }[] | undefined;
                        Socials?: {
                            Type?: import("./sologenic/com-fs-asset-model/asset").SocialMediaType | undefined;
                            URL?: string | undefined;
                        }[] | undefined;
                    } | undefined;
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
                IssuerDetails?: {
                    Name?: string | undefined;
                    Description?: string | undefined;
                    Image?: string | undefined;
                    ExternalUrl?: string | undefined;
                    AddressLine1?: string | undefined;
                    AddressLine2?: string | undefined;
                    City?: string | undefined;
                    Region?: string | undefined;
                    PostalCode?: string | undefined;
                    Country?: string | undefined;
                    YearFounded?: number | undefined;
                    Licensed?: boolean | undefined;
                    LicenseCountry?: string | undefined;
                    LicenseNumber?: string | undefined;
                    Phone?: string | undefined;
                    Email?: string | undefined;
                    SocialMediaLinks?: string[] | undefined;
                    KeyClients?: string | undefined;
                    Press?: string | undefined;
                } | undefined;
            }[]>]: never; }) | undefined;
        } & { [K_70 in Exclude<keyof I_1["DynamicAsset"], keyof DynamicAssetDetails>]: never; }) | undefined;
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
        } & { [K_71 in Exclude<keyof I_1["MetaData"], keyof MetaData>]: never; }) | undefined;
        Audit?: ({
            ChangedBy?: string | undefined;
            ChangedAt?: Date | undefined;
            Reason?: string | undefined;
        } & {
            ChangedBy?: string | undefined;
            ChangedAt?: Date | undefined;
            Reason?: string | undefined;
        } & { [K_72 in Exclude<keyof I_1["Audit"], keyof Audit>]: never; }) | undefined;
    } & { [K_73 in Exclude<keyof I_1, keyof DynamicAsset>]: never; }>(object: I_1): DynamicAsset;
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
                Assets?: {
                    AssetDetails?: {
                        ID?: string | undefined;
                        OrganizationID?: string | undefined;
                        Status?: import("./sologenic/com-fs-asset-model/asset").AssetStatus | undefined;
                        Reason?: import("./sologenic/com-fs-asset-model/asset").Reason | undefined;
                        Type?: import("./sologenic/com-fs-asset-model/asset").AssetType | undefined;
                        Denom?: {
                            Currency?: {
                                Symbol?: string | undefined;
                                Version?: string | undefined;
                            } | undefined;
                            Subunit?: string | undefined;
                            Issuer?: string | undefined;
                            Precision?: number | undefined;
                            Description?: string | undefined;
                        } | undefined;
                        IsIssuedInSmartContract?: boolean | undefined;
                        SmartContractIssuerAddr?: string | undefined;
                        RealEstateDetails?: {
                            Address?: string | undefined;
                            Bathrooms?: number | undefined;
                            Bedrooms?: number | undefined;
                            Latitude?: number | undefined;
                            Longitude?: number | undefined;
                            OwnershipType?: string | undefined;
                            PropertyType?: string | undefined;
                            RiskRating?: string | undefined;
                            SquareFootage?: number | undefined;
                            TenancyStatus?: string | undefined;
                            YearBuilt?: number | undefined;
                            YieldPercent?: number[] | undefined;
                        } | undefined;
                        StableCoinDetails?: {
                            Version?: string | undefined;
                            PegType?: string | undefined;
                            PegRatio?: number | undefined;
                            BackingAsset?: string | undefined;
                            ExchangeTickerSymbol?: string | undefined;
                            Exchange?: string | undefined;
                            MinTransactionAmount?: number | undefined;
                            TradingMarginPercentage?: number | undefined;
                            AssetMarginPercentage?: number | undefined;
                        } | undefined;
                        CommodityDetails?: {
                            Category?: string | undefined;
                            Quality?: string | undefined;
                            UnitOfMeasure?: string | undefined;
                            Quantity?: number | undefined;
                            OriginCountry?: string | undefined;
                            ExchangeTickerSymbol?: string | undefined;
                            Exchange?: string | undefined;
                            MinTransactionAmount?: number | undefined;
                            StorageLocation?: string | undefined;
                            ContractType?: string | undefined;
                            DeliveryDate?: string | undefined;
                        } | undefined;
                        CollectibleDetails?: {
                            Category?: string | undefined;
                            CollectionName?: string | undefined;
                            TokenStandard?: string | undefined;
                            TokenID?: string | undefined;
                            MetadataURI?: string | undefined;
                            Creator?: string | undefined;
                            OwnershipHistory?: string[] | undefined;
                            CurrentOwner?: string | undefined;
                        } | undefined;
                        VehicleDetails?: {
                            Category?: string | undefined;
                            Manufacturer?: string | undefined;
                            Model?: string | undefined;
                            SerialNumber?: string | undefined;
                            Year?: number | undefined;
                            Specifications?: string | undefined;
                            FuelType?: string | undefined;
                            UsageHours?: number | undefined;
                            Mileage?: number | undefined;
                            Condition?: string | undefined;
                            CurrentOwner?: string | undefined;
                            Location?: string | undefined;
                        } | undefined;
                        IntellectualPropertyDetails?: {
                            Category?: string | undefined;
                            Owner?: string | undefined;
                            RegistrationNumber?: string | undefined;
                            FilingDate?: string | undefined;
                            ExpirationDate?: string | undefined;
                            IPJurisdictionIDs?: string[] | undefined;
                            LicenseType?: string | undefined;
                            LicenseTerms?: string | undefined;
                            Value?: number | undefined;
                        } | undefined;
                        InvestmentFundDetails?: {
                            FundType?: string | undefined;
                            Exchange?: string | undefined;
                            ISIN?: string | undefined;
                            NAV?: number | undefined;
                            InceptionDate?: string | undefined;
                            Manager?: string | undefined;
                            ExpenseRatio?: number | undefined;
                            Holdings?: string[] | undefined;
                        } | undefined;
                        EquityDetails?: {
                            ExchangeTickerSymbol?: string | undefined;
                            Exchange?: string | undefined;
                            MinTransactionAmount?: string | undefined;
                            ExtraPercentage?: string | undefined;
                            AssetMarginPercentage?: string | undefined;
                        } | undefined;
                        FinancialProperties?: {
                            Symbol?: string | undefined;
                            Issuer?: string | undefined;
                            JurisdictionIDs?: string[] | undefined;
                            JurisdictionRestrictions?: string | undefined;
                            RedemptionTerms?: string | undefined;
                            ComplianceRequired?: boolean | undefined;
                            Type?: string | undefined;
                            TradeAllowances?: string[] | undefined;
                            Transferable?: boolean | undefined;
                            Platform?: string | undefined;
                            PlatformType?: string | undefined;
                            ContractAddress?: string | undefined;
                            Fractional?: boolean | undefined;
                            TotalSupply?: number | undefined;
                            DecimalPlacesSupply?: number | undefined;
                            Subunit?: string | undefined;
                            Price?: number | undefined;
                            DecimalPlacesPrice?: number | undefined;
                            Currency?: string | undefined;
                            InitialValuation?: number | undefined;
                            CurrentValuation?: number | undefined;
                            ValuationDate?: string | undefined;
                            Network?: Network | undefined;
                            Status?: string | undefined;
                        } | undefined;
                        Description?: {
                            Name?: string | undefined;
                            Description?: string | undefined;
                            Logo?: {
                                Reference?: string | undefined;
                                Extension?: string | undefined;
                                Name?: string | undefined;
                            } | undefined;
                            AssetID?: string | undefined;
                            URL?: string | undefined;
                            Country?: string | undefined;
                            Documents?: string[] | undefined;
                            Images?: string[] | undefined;
                            Vertical?: string | undefined;
                            CreatedAt?: string | undefined;
                            UpdatedAt?: string | undefined;
                        } | undefined;
                        ExternalResources?: {
                            Links?: {
                                Type?: import("./sologenic/com-fs-asset-model/asset").LinkType | undefined;
                                URL?: string | undefined;
                            }[] | undefined;
                            Socials?: {
                                Type?: import("./sologenic/com-fs-asset-model/asset").SocialMediaType | undefined;
                                URL?: string | undefined;
                            }[] | undefined;
                        } | undefined;
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
                    IssuerDetails?: {
                        Name?: string | undefined;
                        Description?: string | undefined;
                        Image?: string | undefined;
                        ExternalUrl?: string | undefined;
                        AddressLine1?: string | undefined;
                        AddressLine2?: string | undefined;
                        City?: string | undefined;
                        Region?: string | undefined;
                        PostalCode?: string | undefined;
                        Country?: string | undefined;
                        YearFounded?: number | undefined;
                        Licensed?: boolean | undefined;
                        LicenseCountry?: string | undefined;
                        LicenseNumber?: string | undefined;
                        Phone?: string | undefined;
                        Email?: string | undefined;
                        SocialMediaLinks?: string[] | undefined;
                        KeyClients?: string | undefined;
                        Press?: string | undefined;
                    } | undefined;
                }[] | undefined;
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
                Assets?: {
                    AssetDetails?: {
                        ID?: string | undefined;
                        OrganizationID?: string | undefined;
                        Status?: import("./sologenic/com-fs-asset-model/asset").AssetStatus | undefined;
                        Reason?: import("./sologenic/com-fs-asset-model/asset").Reason | undefined;
                        Type?: import("./sologenic/com-fs-asset-model/asset").AssetType | undefined;
                        Denom?: {
                            Currency?: {
                                Symbol?: string | undefined;
                                Version?: string | undefined;
                            } | undefined;
                            Subunit?: string | undefined;
                            Issuer?: string | undefined;
                            Precision?: number | undefined;
                            Description?: string | undefined;
                        } | undefined;
                        IsIssuedInSmartContract?: boolean | undefined;
                        SmartContractIssuerAddr?: string | undefined;
                        RealEstateDetails?: {
                            Address?: string | undefined;
                            Bathrooms?: number | undefined;
                            Bedrooms?: number | undefined;
                            Latitude?: number | undefined;
                            Longitude?: number | undefined;
                            OwnershipType?: string | undefined;
                            PropertyType?: string | undefined;
                            RiskRating?: string | undefined;
                            SquareFootage?: number | undefined;
                            TenancyStatus?: string | undefined;
                            YearBuilt?: number | undefined;
                            YieldPercent?: number[] | undefined;
                        } | undefined;
                        StableCoinDetails?: {
                            Version?: string | undefined;
                            PegType?: string | undefined;
                            PegRatio?: number | undefined;
                            BackingAsset?: string | undefined;
                            ExchangeTickerSymbol?: string | undefined;
                            Exchange?: string | undefined;
                            MinTransactionAmount?: number | undefined;
                            TradingMarginPercentage?: number | undefined;
                            AssetMarginPercentage?: number | undefined;
                        } | undefined;
                        CommodityDetails?: {
                            Category?: string | undefined;
                            Quality?: string | undefined;
                            UnitOfMeasure?: string | undefined;
                            Quantity?: number | undefined;
                            OriginCountry?: string | undefined;
                            ExchangeTickerSymbol?: string | undefined;
                            Exchange?: string | undefined;
                            MinTransactionAmount?: number | undefined;
                            StorageLocation?: string | undefined;
                            ContractType?: string | undefined;
                            DeliveryDate?: string | undefined;
                        } | undefined;
                        CollectibleDetails?: {
                            Category?: string | undefined;
                            CollectionName?: string | undefined;
                            TokenStandard?: string | undefined;
                            TokenID?: string | undefined;
                            MetadataURI?: string | undefined;
                            Creator?: string | undefined;
                            OwnershipHistory?: string[] | undefined;
                            CurrentOwner?: string | undefined;
                        } | undefined;
                        VehicleDetails?: {
                            Category?: string | undefined;
                            Manufacturer?: string | undefined;
                            Model?: string | undefined;
                            SerialNumber?: string | undefined;
                            Year?: number | undefined;
                            Specifications?: string | undefined;
                            FuelType?: string | undefined;
                            UsageHours?: number | undefined;
                            Mileage?: number | undefined;
                            Condition?: string | undefined;
                            CurrentOwner?: string | undefined;
                            Location?: string | undefined;
                        } | undefined;
                        IntellectualPropertyDetails?: {
                            Category?: string | undefined;
                            Owner?: string | undefined;
                            RegistrationNumber?: string | undefined;
                            FilingDate?: string | undefined;
                            ExpirationDate?: string | undefined;
                            IPJurisdictionIDs?: string[] | undefined;
                            LicenseType?: string | undefined;
                            LicenseTerms?: string | undefined;
                            Value?: number | undefined;
                        } | undefined;
                        InvestmentFundDetails?: {
                            FundType?: string | undefined;
                            Exchange?: string | undefined;
                            ISIN?: string | undefined;
                            NAV?: number | undefined;
                            InceptionDate?: string | undefined;
                            Manager?: string | undefined;
                            ExpenseRatio?: number | undefined;
                            Holdings?: string[] | undefined;
                        } | undefined;
                        EquityDetails?: {
                            ExchangeTickerSymbol?: string | undefined;
                            Exchange?: string | undefined;
                            MinTransactionAmount?: string | undefined;
                            ExtraPercentage?: string | undefined;
                            AssetMarginPercentage?: string | undefined;
                        } | undefined;
                        FinancialProperties?: {
                            Symbol?: string | undefined;
                            Issuer?: string | undefined;
                            JurisdictionIDs?: string[] | undefined;
                            JurisdictionRestrictions?: string | undefined;
                            RedemptionTerms?: string | undefined;
                            ComplianceRequired?: boolean | undefined;
                            Type?: string | undefined;
                            TradeAllowances?: string[] | undefined;
                            Transferable?: boolean | undefined;
                            Platform?: string | undefined;
                            PlatformType?: string | undefined;
                            ContractAddress?: string | undefined;
                            Fractional?: boolean | undefined;
                            TotalSupply?: number | undefined;
                            DecimalPlacesSupply?: number | undefined;
                            Subunit?: string | undefined;
                            Price?: number | undefined;
                            DecimalPlacesPrice?: number | undefined;
                            Currency?: string | undefined;
                            InitialValuation?: number | undefined;
                            CurrentValuation?: number | undefined;
                            ValuationDate?: string | undefined;
                            Network?: Network | undefined;
                            Status?: string | undefined;
                        } | undefined;
                        Description?: {
                            Name?: string | undefined;
                            Description?: string | undefined;
                            Logo?: {
                                Reference?: string | undefined;
                                Extension?: string | undefined;
                                Name?: string | undefined;
                            } | undefined;
                            AssetID?: string | undefined;
                            URL?: string | undefined;
                            Country?: string | undefined;
                            Documents?: string[] | undefined;
                            Images?: string[] | undefined;
                            Vertical?: string | undefined;
                            CreatedAt?: string | undefined;
                            UpdatedAt?: string | undefined;
                        } | undefined;
                        ExternalResources?: {
                            Links?: {
                                Type?: import("./sologenic/com-fs-asset-model/asset").LinkType | undefined;
                                URL?: string | undefined;
                            }[] | undefined;
                            Socials?: {
                                Type?: import("./sologenic/com-fs-asset-model/asset").SocialMediaType | undefined;
                                URL?: string | undefined;
                            }[] | undefined;
                        } | undefined;
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
                    IssuerDetails?: {
                        Name?: string | undefined;
                        Description?: string | undefined;
                        Image?: string | undefined;
                        ExternalUrl?: string | undefined;
                        AddressLine1?: string | undefined;
                        AddressLine2?: string | undefined;
                        City?: string | undefined;
                        Region?: string | undefined;
                        PostalCode?: string | undefined;
                        Country?: string | undefined;
                        YearFounded?: number | undefined;
                        Licensed?: boolean | undefined;
                        LicenseCountry?: string | undefined;
                        LicenseNumber?: string | undefined;
                        Phone?: string | undefined;
                        Email?: string | undefined;
                        SocialMediaLinks?: string[] | undefined;
                        KeyClients?: string | undefined;
                        Press?: string | undefined;
                    } | undefined;
                }[] | undefined;
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
                Assets?: {
                    AssetDetails?: {
                        ID?: string | undefined;
                        OrganizationID?: string | undefined;
                        Status?: import("./sologenic/com-fs-asset-model/asset").AssetStatus | undefined;
                        Reason?: import("./sologenic/com-fs-asset-model/asset").Reason | undefined;
                        Type?: import("./sologenic/com-fs-asset-model/asset").AssetType | undefined;
                        Denom?: {
                            Currency?: {
                                Symbol?: string | undefined;
                                Version?: string | undefined;
                            } | undefined;
                            Subunit?: string | undefined;
                            Issuer?: string | undefined;
                            Precision?: number | undefined;
                            Description?: string | undefined;
                        } | undefined;
                        IsIssuedInSmartContract?: boolean | undefined;
                        SmartContractIssuerAddr?: string | undefined;
                        RealEstateDetails?: {
                            Address?: string | undefined;
                            Bathrooms?: number | undefined;
                            Bedrooms?: number | undefined;
                            Latitude?: number | undefined;
                            Longitude?: number | undefined;
                            OwnershipType?: string | undefined;
                            PropertyType?: string | undefined;
                            RiskRating?: string | undefined;
                            SquareFootage?: number | undefined;
                            TenancyStatus?: string | undefined;
                            YearBuilt?: number | undefined;
                            YieldPercent?: number[] | undefined;
                        } | undefined;
                        StableCoinDetails?: {
                            Version?: string | undefined;
                            PegType?: string | undefined;
                            PegRatio?: number | undefined;
                            BackingAsset?: string | undefined;
                            ExchangeTickerSymbol?: string | undefined;
                            Exchange?: string | undefined;
                            MinTransactionAmount?: number | undefined;
                            TradingMarginPercentage?: number | undefined;
                            AssetMarginPercentage?: number | undefined;
                        } | undefined;
                        CommodityDetails?: {
                            Category?: string | undefined;
                            Quality?: string | undefined;
                            UnitOfMeasure?: string | undefined;
                            Quantity?: number | undefined;
                            OriginCountry?: string | undefined;
                            ExchangeTickerSymbol?: string | undefined;
                            Exchange?: string | undefined;
                            MinTransactionAmount?: number | undefined;
                            StorageLocation?: string | undefined;
                            ContractType?: string | undefined;
                            DeliveryDate?: string | undefined;
                        } | undefined;
                        CollectibleDetails?: {
                            Category?: string | undefined;
                            CollectionName?: string | undefined;
                            TokenStandard?: string | undefined;
                            TokenID?: string | undefined;
                            MetadataURI?: string | undefined;
                            Creator?: string | undefined;
                            OwnershipHistory?: string[] | undefined;
                            CurrentOwner?: string | undefined;
                        } | undefined;
                        VehicleDetails?: {
                            Category?: string | undefined;
                            Manufacturer?: string | undefined;
                            Model?: string | undefined;
                            SerialNumber?: string | undefined;
                            Year?: number | undefined;
                            Specifications?: string | undefined;
                            FuelType?: string | undefined;
                            UsageHours?: number | undefined;
                            Mileage?: number | undefined;
                            Condition?: string | undefined;
                            CurrentOwner?: string | undefined;
                            Location?: string | undefined;
                        } | undefined;
                        IntellectualPropertyDetails?: {
                            Category?: string | undefined;
                            Owner?: string | undefined;
                            RegistrationNumber?: string | undefined;
                            FilingDate?: string | undefined;
                            ExpirationDate?: string | undefined;
                            IPJurisdictionIDs?: string[] | undefined;
                            LicenseType?: string | undefined;
                            LicenseTerms?: string | undefined;
                            Value?: number | undefined;
                        } | undefined;
                        InvestmentFundDetails?: {
                            FundType?: string | undefined;
                            Exchange?: string | undefined;
                            ISIN?: string | undefined;
                            NAV?: number | undefined;
                            InceptionDate?: string | undefined;
                            Manager?: string | undefined;
                            ExpenseRatio?: number | undefined;
                            Holdings?: string[] | undefined;
                        } | undefined;
                        EquityDetails?: {
                            ExchangeTickerSymbol?: string | undefined;
                            Exchange?: string | undefined;
                            MinTransactionAmount?: string | undefined;
                            ExtraPercentage?: string | undefined;
                            AssetMarginPercentage?: string | undefined;
                        } | undefined;
                        FinancialProperties?: {
                            Symbol?: string | undefined;
                            Issuer?: string | undefined;
                            JurisdictionIDs?: string[] | undefined;
                            JurisdictionRestrictions?: string | undefined;
                            RedemptionTerms?: string | undefined;
                            ComplianceRequired?: boolean | undefined;
                            Type?: string | undefined;
                            TradeAllowances?: string[] | undefined;
                            Transferable?: boolean | undefined;
                            Platform?: string | undefined;
                            PlatformType?: string | undefined;
                            ContractAddress?: string | undefined;
                            Fractional?: boolean | undefined;
                            TotalSupply?: number | undefined;
                            DecimalPlacesSupply?: number | undefined;
                            Subunit?: string | undefined;
                            Price?: number | undefined;
                            DecimalPlacesPrice?: number | undefined;
                            Currency?: string | undefined;
                            InitialValuation?: number | undefined;
                            CurrentValuation?: number | undefined;
                            ValuationDate?: string | undefined;
                            Network?: Network | undefined;
                            Status?: string | undefined;
                        } | undefined;
                        Description?: {
                            Name?: string | undefined;
                            Description?: string | undefined;
                            Logo?: {
                                Reference?: string | undefined;
                                Extension?: string | undefined;
                                Name?: string | undefined;
                            } | undefined;
                            AssetID?: string | undefined;
                            URL?: string | undefined;
                            Country?: string | undefined;
                            Documents?: string[] | undefined;
                            Images?: string[] | undefined;
                            Vertical?: string | undefined;
                            CreatedAt?: string | undefined;
                            UpdatedAt?: string | undefined;
                        } | undefined;
                        ExternalResources?: {
                            Links?: {
                                Type?: import("./sologenic/com-fs-asset-model/asset").LinkType | undefined;
                                URL?: string | undefined;
                            }[] | undefined;
                            Socials?: {
                                Type?: import("./sologenic/com-fs-asset-model/asset").SocialMediaType | undefined;
                                URL?: string | undefined;
                            }[] | undefined;
                        } | undefined;
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
                    IssuerDetails?: {
                        Name?: string | undefined;
                        Description?: string | undefined;
                        Image?: string | undefined;
                        ExternalUrl?: string | undefined;
                        AddressLine1?: string | undefined;
                        AddressLine2?: string | undefined;
                        City?: string | undefined;
                        Region?: string | undefined;
                        PostalCode?: string | undefined;
                        Country?: string | undefined;
                        YearFounded?: number | undefined;
                        Licensed?: boolean | undefined;
                        LicenseCountry?: string | undefined;
                        LicenseNumber?: string | undefined;
                        Phone?: string | undefined;
                        Email?: string | undefined;
                        SocialMediaLinks?: string[] | undefined;
                        KeyClients?: string | undefined;
                        Press?: string | undefined;
                    } | undefined;
                }[] | undefined;
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
                Assets?: {
                    AssetDetails?: {
                        ID?: string | undefined;
                        OrganizationID?: string | undefined;
                        Status?: import("./sologenic/com-fs-asset-model/asset").AssetStatus | undefined;
                        Reason?: import("./sologenic/com-fs-asset-model/asset").Reason | undefined;
                        Type?: import("./sologenic/com-fs-asset-model/asset").AssetType | undefined;
                        Denom?: {
                            Currency?: {
                                Symbol?: string | undefined;
                                Version?: string | undefined;
                            } | undefined;
                            Subunit?: string | undefined;
                            Issuer?: string | undefined;
                            Precision?: number | undefined;
                            Description?: string | undefined;
                        } | undefined;
                        IsIssuedInSmartContract?: boolean | undefined;
                        SmartContractIssuerAddr?: string | undefined;
                        RealEstateDetails?: {
                            Address?: string | undefined;
                            Bathrooms?: number | undefined;
                            Bedrooms?: number | undefined;
                            Latitude?: number | undefined;
                            Longitude?: number | undefined;
                            OwnershipType?: string | undefined;
                            PropertyType?: string | undefined;
                            RiskRating?: string | undefined;
                            SquareFootage?: number | undefined;
                            TenancyStatus?: string | undefined;
                            YearBuilt?: number | undefined;
                            YieldPercent?: number[] | undefined;
                        } | undefined;
                        StableCoinDetails?: {
                            Version?: string | undefined;
                            PegType?: string | undefined;
                            PegRatio?: number | undefined;
                            BackingAsset?: string | undefined;
                            ExchangeTickerSymbol?: string | undefined;
                            Exchange?: string | undefined;
                            MinTransactionAmount?: number | undefined;
                            TradingMarginPercentage?: number | undefined;
                            AssetMarginPercentage?: number | undefined;
                        } | undefined;
                        CommodityDetails?: {
                            Category?: string | undefined;
                            Quality?: string | undefined;
                            UnitOfMeasure?: string | undefined;
                            Quantity?: number | undefined;
                            OriginCountry?: string | undefined;
                            ExchangeTickerSymbol?: string | undefined;
                            Exchange?: string | undefined;
                            MinTransactionAmount?: number | undefined;
                            StorageLocation?: string | undefined;
                            ContractType?: string | undefined;
                            DeliveryDate?: string | undefined;
                        } | undefined;
                        CollectibleDetails?: {
                            Category?: string | undefined;
                            CollectionName?: string | undefined;
                            TokenStandard?: string | undefined;
                            TokenID?: string | undefined;
                            MetadataURI?: string | undefined;
                            Creator?: string | undefined;
                            OwnershipHistory?: string[] | undefined;
                            CurrentOwner?: string | undefined;
                        } | undefined;
                        VehicleDetails?: {
                            Category?: string | undefined;
                            Manufacturer?: string | undefined;
                            Model?: string | undefined;
                            SerialNumber?: string | undefined;
                            Year?: number | undefined;
                            Specifications?: string | undefined;
                            FuelType?: string | undefined;
                            UsageHours?: number | undefined;
                            Mileage?: number | undefined;
                            Condition?: string | undefined;
                            CurrentOwner?: string | undefined;
                            Location?: string | undefined;
                        } | undefined;
                        IntellectualPropertyDetails?: {
                            Category?: string | undefined;
                            Owner?: string | undefined;
                            RegistrationNumber?: string | undefined;
                            FilingDate?: string | undefined;
                            ExpirationDate?: string | undefined;
                            IPJurisdictionIDs?: string[] | undefined;
                            LicenseType?: string | undefined;
                            LicenseTerms?: string | undefined;
                            Value?: number | undefined;
                        } | undefined;
                        InvestmentFundDetails?: {
                            FundType?: string | undefined;
                            Exchange?: string | undefined;
                            ISIN?: string | undefined;
                            NAV?: number | undefined;
                            InceptionDate?: string | undefined;
                            Manager?: string | undefined;
                            ExpenseRatio?: number | undefined;
                            Holdings?: string[] | undefined;
                        } | undefined;
                        EquityDetails?: {
                            ExchangeTickerSymbol?: string | undefined;
                            Exchange?: string | undefined;
                            MinTransactionAmount?: string | undefined;
                            ExtraPercentage?: string | undefined;
                            AssetMarginPercentage?: string | undefined;
                        } | undefined;
                        FinancialProperties?: {
                            Symbol?: string | undefined;
                            Issuer?: string | undefined;
                            JurisdictionIDs?: string[] | undefined;
                            JurisdictionRestrictions?: string | undefined;
                            RedemptionTerms?: string | undefined;
                            ComplianceRequired?: boolean | undefined;
                            Type?: string | undefined;
                            TradeAllowances?: string[] | undefined;
                            Transferable?: boolean | undefined;
                            Platform?: string | undefined;
                            PlatformType?: string | undefined;
                            ContractAddress?: string | undefined;
                            Fractional?: boolean | undefined;
                            TotalSupply?: number | undefined;
                            DecimalPlacesSupply?: number | undefined;
                            Subunit?: string | undefined;
                            Price?: number | undefined;
                            DecimalPlacesPrice?: number | undefined;
                            Currency?: string | undefined;
                            InitialValuation?: number | undefined;
                            CurrentValuation?: number | undefined;
                            ValuationDate?: string | undefined;
                            Network?: Network | undefined;
                            Status?: string | undefined;
                        } | undefined;
                        Description?: {
                            Name?: string | undefined;
                            Description?: string | undefined;
                            Logo?: {
                                Reference?: string | undefined;
                                Extension?: string | undefined;
                                Name?: string | undefined;
                            } | undefined;
                            AssetID?: string | undefined;
                            URL?: string | undefined;
                            Country?: string | undefined;
                            Documents?: string[] | undefined;
                            Images?: string[] | undefined;
                            Vertical?: string | undefined;
                            CreatedAt?: string | undefined;
                            UpdatedAt?: string | undefined;
                        } | undefined;
                        ExternalResources?: {
                            Links?: {
                                Type?: import("./sologenic/com-fs-asset-model/asset").LinkType | undefined;
                                URL?: string | undefined;
                            }[] | undefined;
                            Socials?: {
                                Type?: import("./sologenic/com-fs-asset-model/asset").SocialMediaType | undefined;
                                URL?: string | undefined;
                            }[] | undefined;
                        } | undefined;
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
                    IssuerDetails?: {
                        Name?: string | undefined;
                        Description?: string | undefined;
                        Image?: string | undefined;
                        ExternalUrl?: string | undefined;
                        AddressLine1?: string | undefined;
                        AddressLine2?: string | undefined;
                        City?: string | undefined;
                        Region?: string | undefined;
                        PostalCode?: string | undefined;
                        Country?: string | undefined;
                        YearFounded?: number | undefined;
                        Licensed?: boolean | undefined;
                        LicenseCountry?: string | undefined;
                        LicenseNumber?: string | undefined;
                        Phone?: string | undefined;
                        Email?: string | undefined;
                        SocialMediaLinks?: string[] | undefined;
                        KeyClients?: string | undefined;
                        Press?: string | undefined;
                    } | undefined;
                }[] | undefined;
            } & {
                DynamicAssetID?: string | undefined;
                Title?: string | undefined;
                Description?: string | undefined;
                Identifier?: string | undefined;
                OrganizationID?: string | undefined;
                Assets?: ({
                    AssetDetails?: {
                        ID?: string | undefined;
                        OrganizationID?: string | undefined;
                        Status?: import("./sologenic/com-fs-asset-model/asset").AssetStatus | undefined;
                        Reason?: import("./sologenic/com-fs-asset-model/asset").Reason | undefined;
                        Type?: import("./sologenic/com-fs-asset-model/asset").AssetType | undefined;
                        Denom?: {
                            Currency?: {
                                Symbol?: string | undefined;
                                Version?: string | undefined;
                            } | undefined;
                            Subunit?: string | undefined;
                            Issuer?: string | undefined;
                            Precision?: number | undefined;
                            Description?: string | undefined;
                        } | undefined;
                        IsIssuedInSmartContract?: boolean | undefined;
                        SmartContractIssuerAddr?: string | undefined;
                        RealEstateDetails?: {
                            Address?: string | undefined;
                            Bathrooms?: number | undefined;
                            Bedrooms?: number | undefined;
                            Latitude?: number | undefined;
                            Longitude?: number | undefined;
                            OwnershipType?: string | undefined;
                            PropertyType?: string | undefined;
                            RiskRating?: string | undefined;
                            SquareFootage?: number | undefined;
                            TenancyStatus?: string | undefined;
                            YearBuilt?: number | undefined;
                            YieldPercent?: number[] | undefined;
                        } | undefined;
                        StableCoinDetails?: {
                            Version?: string | undefined;
                            PegType?: string | undefined;
                            PegRatio?: number | undefined;
                            BackingAsset?: string | undefined;
                            ExchangeTickerSymbol?: string | undefined;
                            Exchange?: string | undefined;
                            MinTransactionAmount?: number | undefined;
                            TradingMarginPercentage?: number | undefined;
                            AssetMarginPercentage?: number | undefined;
                        } | undefined;
                        CommodityDetails?: {
                            Category?: string | undefined;
                            Quality?: string | undefined;
                            UnitOfMeasure?: string | undefined;
                            Quantity?: number | undefined;
                            OriginCountry?: string | undefined;
                            ExchangeTickerSymbol?: string | undefined;
                            Exchange?: string | undefined;
                            MinTransactionAmount?: number | undefined;
                            StorageLocation?: string | undefined;
                            ContractType?: string | undefined;
                            DeliveryDate?: string | undefined;
                        } | undefined;
                        CollectibleDetails?: {
                            Category?: string | undefined;
                            CollectionName?: string | undefined;
                            TokenStandard?: string | undefined;
                            TokenID?: string | undefined;
                            MetadataURI?: string | undefined;
                            Creator?: string | undefined;
                            OwnershipHistory?: string[] | undefined;
                            CurrentOwner?: string | undefined;
                        } | undefined;
                        VehicleDetails?: {
                            Category?: string | undefined;
                            Manufacturer?: string | undefined;
                            Model?: string | undefined;
                            SerialNumber?: string | undefined;
                            Year?: number | undefined;
                            Specifications?: string | undefined;
                            FuelType?: string | undefined;
                            UsageHours?: number | undefined;
                            Mileage?: number | undefined;
                            Condition?: string | undefined;
                            CurrentOwner?: string | undefined;
                            Location?: string | undefined;
                        } | undefined;
                        IntellectualPropertyDetails?: {
                            Category?: string | undefined;
                            Owner?: string | undefined;
                            RegistrationNumber?: string | undefined;
                            FilingDate?: string | undefined;
                            ExpirationDate?: string | undefined;
                            IPJurisdictionIDs?: string[] | undefined;
                            LicenseType?: string | undefined;
                            LicenseTerms?: string | undefined;
                            Value?: number | undefined;
                        } | undefined;
                        InvestmentFundDetails?: {
                            FundType?: string | undefined;
                            Exchange?: string | undefined;
                            ISIN?: string | undefined;
                            NAV?: number | undefined;
                            InceptionDate?: string | undefined;
                            Manager?: string | undefined;
                            ExpenseRatio?: number | undefined;
                            Holdings?: string[] | undefined;
                        } | undefined;
                        EquityDetails?: {
                            ExchangeTickerSymbol?: string | undefined;
                            Exchange?: string | undefined;
                            MinTransactionAmount?: string | undefined;
                            ExtraPercentage?: string | undefined;
                            AssetMarginPercentage?: string | undefined;
                        } | undefined;
                        FinancialProperties?: {
                            Symbol?: string | undefined;
                            Issuer?: string | undefined;
                            JurisdictionIDs?: string[] | undefined;
                            JurisdictionRestrictions?: string | undefined;
                            RedemptionTerms?: string | undefined;
                            ComplianceRequired?: boolean | undefined;
                            Type?: string | undefined;
                            TradeAllowances?: string[] | undefined;
                            Transferable?: boolean | undefined;
                            Platform?: string | undefined;
                            PlatformType?: string | undefined;
                            ContractAddress?: string | undefined;
                            Fractional?: boolean | undefined;
                            TotalSupply?: number | undefined;
                            DecimalPlacesSupply?: number | undefined;
                            Subunit?: string | undefined;
                            Price?: number | undefined;
                            DecimalPlacesPrice?: number | undefined;
                            Currency?: string | undefined;
                            InitialValuation?: number | undefined;
                            CurrentValuation?: number | undefined;
                            ValuationDate?: string | undefined;
                            Network?: Network | undefined;
                            Status?: string | undefined;
                        } | undefined;
                        Description?: {
                            Name?: string | undefined;
                            Description?: string | undefined;
                            Logo?: {
                                Reference?: string | undefined;
                                Extension?: string | undefined;
                                Name?: string | undefined;
                            } | undefined;
                            AssetID?: string | undefined;
                            URL?: string | undefined;
                            Country?: string | undefined;
                            Documents?: string[] | undefined;
                            Images?: string[] | undefined;
                            Vertical?: string | undefined;
                            CreatedAt?: string | undefined;
                            UpdatedAt?: string | undefined;
                        } | undefined;
                        ExternalResources?: {
                            Links?: {
                                Type?: import("./sologenic/com-fs-asset-model/asset").LinkType | undefined;
                                URL?: string | undefined;
                            }[] | undefined;
                            Socials?: {
                                Type?: import("./sologenic/com-fs-asset-model/asset").SocialMediaType | undefined;
                                URL?: string | undefined;
                            }[] | undefined;
                        } | undefined;
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
                    IssuerDetails?: {
                        Name?: string | undefined;
                        Description?: string | undefined;
                        Image?: string | undefined;
                        ExternalUrl?: string | undefined;
                        AddressLine1?: string | undefined;
                        AddressLine2?: string | undefined;
                        City?: string | undefined;
                        Region?: string | undefined;
                        PostalCode?: string | undefined;
                        Country?: string | undefined;
                        YearFounded?: number | undefined;
                        Licensed?: boolean | undefined;
                        LicenseCountry?: string | undefined;
                        LicenseNumber?: string | undefined;
                        Phone?: string | undefined;
                        Email?: string | undefined;
                        SocialMediaLinks?: string[] | undefined;
                        KeyClients?: string | undefined;
                        Press?: string | undefined;
                    } | undefined;
                }[] & ({
                    AssetDetails?: {
                        ID?: string | undefined;
                        OrganizationID?: string | undefined;
                        Status?: import("./sologenic/com-fs-asset-model/asset").AssetStatus | undefined;
                        Reason?: import("./sologenic/com-fs-asset-model/asset").Reason | undefined;
                        Type?: import("./sologenic/com-fs-asset-model/asset").AssetType | undefined;
                        Denom?: {
                            Currency?: {
                                Symbol?: string | undefined;
                                Version?: string | undefined;
                            } | undefined;
                            Subunit?: string | undefined;
                            Issuer?: string | undefined;
                            Precision?: number | undefined;
                            Description?: string | undefined;
                        } | undefined;
                        IsIssuedInSmartContract?: boolean | undefined;
                        SmartContractIssuerAddr?: string | undefined;
                        RealEstateDetails?: {
                            Address?: string | undefined;
                            Bathrooms?: number | undefined;
                            Bedrooms?: number | undefined;
                            Latitude?: number | undefined;
                            Longitude?: number | undefined;
                            OwnershipType?: string | undefined;
                            PropertyType?: string | undefined;
                            RiskRating?: string | undefined;
                            SquareFootage?: number | undefined;
                            TenancyStatus?: string | undefined;
                            YearBuilt?: number | undefined;
                            YieldPercent?: number[] | undefined;
                        } | undefined;
                        StableCoinDetails?: {
                            Version?: string | undefined;
                            PegType?: string | undefined;
                            PegRatio?: number | undefined;
                            BackingAsset?: string | undefined;
                            ExchangeTickerSymbol?: string | undefined;
                            Exchange?: string | undefined;
                            MinTransactionAmount?: number | undefined;
                            TradingMarginPercentage?: number | undefined;
                            AssetMarginPercentage?: number | undefined;
                        } | undefined;
                        CommodityDetails?: {
                            Category?: string | undefined;
                            Quality?: string | undefined;
                            UnitOfMeasure?: string | undefined;
                            Quantity?: number | undefined;
                            OriginCountry?: string | undefined;
                            ExchangeTickerSymbol?: string | undefined;
                            Exchange?: string | undefined;
                            MinTransactionAmount?: number | undefined;
                            StorageLocation?: string | undefined;
                            ContractType?: string | undefined;
                            DeliveryDate?: string | undefined;
                        } | undefined;
                        CollectibleDetails?: {
                            Category?: string | undefined;
                            CollectionName?: string | undefined;
                            TokenStandard?: string | undefined;
                            TokenID?: string | undefined;
                            MetadataURI?: string | undefined;
                            Creator?: string | undefined;
                            OwnershipHistory?: string[] | undefined;
                            CurrentOwner?: string | undefined;
                        } | undefined;
                        VehicleDetails?: {
                            Category?: string | undefined;
                            Manufacturer?: string | undefined;
                            Model?: string | undefined;
                            SerialNumber?: string | undefined;
                            Year?: number | undefined;
                            Specifications?: string | undefined;
                            FuelType?: string | undefined;
                            UsageHours?: number | undefined;
                            Mileage?: number | undefined;
                            Condition?: string | undefined;
                            CurrentOwner?: string | undefined;
                            Location?: string | undefined;
                        } | undefined;
                        IntellectualPropertyDetails?: {
                            Category?: string | undefined;
                            Owner?: string | undefined;
                            RegistrationNumber?: string | undefined;
                            FilingDate?: string | undefined;
                            ExpirationDate?: string | undefined;
                            IPJurisdictionIDs?: string[] | undefined;
                            LicenseType?: string | undefined;
                            LicenseTerms?: string | undefined;
                            Value?: number | undefined;
                        } | undefined;
                        InvestmentFundDetails?: {
                            FundType?: string | undefined;
                            Exchange?: string | undefined;
                            ISIN?: string | undefined;
                            NAV?: number | undefined;
                            InceptionDate?: string | undefined;
                            Manager?: string | undefined;
                            ExpenseRatio?: number | undefined;
                            Holdings?: string[] | undefined;
                        } | undefined;
                        EquityDetails?: {
                            ExchangeTickerSymbol?: string | undefined;
                            Exchange?: string | undefined;
                            MinTransactionAmount?: string | undefined;
                            ExtraPercentage?: string | undefined;
                            AssetMarginPercentage?: string | undefined;
                        } | undefined;
                        FinancialProperties?: {
                            Symbol?: string | undefined;
                            Issuer?: string | undefined;
                            JurisdictionIDs?: string[] | undefined;
                            JurisdictionRestrictions?: string | undefined;
                            RedemptionTerms?: string | undefined;
                            ComplianceRequired?: boolean | undefined;
                            Type?: string | undefined;
                            TradeAllowances?: string[] | undefined;
                            Transferable?: boolean | undefined;
                            Platform?: string | undefined;
                            PlatformType?: string | undefined;
                            ContractAddress?: string | undefined;
                            Fractional?: boolean | undefined;
                            TotalSupply?: number | undefined;
                            DecimalPlacesSupply?: number | undefined;
                            Subunit?: string | undefined;
                            Price?: number | undefined;
                            DecimalPlacesPrice?: number | undefined;
                            Currency?: string | undefined;
                            InitialValuation?: number | undefined;
                            CurrentValuation?: number | undefined;
                            ValuationDate?: string | undefined;
                            Network?: Network | undefined;
                            Status?: string | undefined;
                        } | undefined;
                        Description?: {
                            Name?: string | undefined;
                            Description?: string | undefined;
                            Logo?: {
                                Reference?: string | undefined;
                                Extension?: string | undefined;
                                Name?: string | undefined;
                            } | undefined;
                            AssetID?: string | undefined;
                            URL?: string | undefined;
                            Country?: string | undefined;
                            Documents?: string[] | undefined;
                            Images?: string[] | undefined;
                            Vertical?: string | undefined;
                            CreatedAt?: string | undefined;
                            UpdatedAt?: string | undefined;
                        } | undefined;
                        ExternalResources?: {
                            Links?: {
                                Type?: import("./sologenic/com-fs-asset-model/asset").LinkType | undefined;
                                URL?: string | undefined;
                            }[] | undefined;
                            Socials?: {
                                Type?: import("./sologenic/com-fs-asset-model/asset").SocialMediaType | undefined;
                                URL?: string | undefined;
                            }[] | undefined;
                        } | undefined;
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
                    IssuerDetails?: {
                        Name?: string | undefined;
                        Description?: string | undefined;
                        Image?: string | undefined;
                        ExternalUrl?: string | undefined;
                        AddressLine1?: string | undefined;
                        AddressLine2?: string | undefined;
                        City?: string | undefined;
                        Region?: string | undefined;
                        PostalCode?: string | undefined;
                        Country?: string | undefined;
                        YearFounded?: number | undefined;
                        Licensed?: boolean | undefined;
                        LicenseCountry?: string | undefined;
                        LicenseNumber?: string | undefined;
                        Phone?: string | undefined;
                        Email?: string | undefined;
                        SocialMediaLinks?: string[] | undefined;
                        KeyClients?: string | undefined;
                        Press?: string | undefined;
                    } | undefined;
                } & {
                    AssetDetails?: ({
                        ID?: string | undefined;
                        OrganizationID?: string | undefined;
                        Status?: import("./sologenic/com-fs-asset-model/asset").AssetStatus | undefined;
                        Reason?: import("./sologenic/com-fs-asset-model/asset").Reason | undefined;
                        Type?: import("./sologenic/com-fs-asset-model/asset").AssetType | undefined;
                        Denom?: {
                            Currency?: {
                                Symbol?: string | undefined;
                                Version?: string | undefined;
                            } | undefined;
                            Subunit?: string | undefined;
                            Issuer?: string | undefined;
                            Precision?: number | undefined;
                            Description?: string | undefined;
                        } | undefined;
                        IsIssuedInSmartContract?: boolean | undefined;
                        SmartContractIssuerAddr?: string | undefined;
                        RealEstateDetails?: {
                            Address?: string | undefined;
                            Bathrooms?: number | undefined;
                            Bedrooms?: number | undefined;
                            Latitude?: number | undefined;
                            Longitude?: number | undefined;
                            OwnershipType?: string | undefined;
                            PropertyType?: string | undefined;
                            RiskRating?: string | undefined;
                            SquareFootage?: number | undefined;
                            TenancyStatus?: string | undefined;
                            YearBuilt?: number | undefined;
                            YieldPercent?: number[] | undefined;
                        } | undefined;
                        StableCoinDetails?: {
                            Version?: string | undefined;
                            PegType?: string | undefined;
                            PegRatio?: number | undefined;
                            BackingAsset?: string | undefined;
                            ExchangeTickerSymbol?: string | undefined;
                            Exchange?: string | undefined;
                            MinTransactionAmount?: number | undefined;
                            TradingMarginPercentage?: number | undefined;
                            AssetMarginPercentage?: number | undefined;
                        } | undefined;
                        CommodityDetails?: {
                            Category?: string | undefined;
                            Quality?: string | undefined;
                            UnitOfMeasure?: string | undefined;
                            Quantity?: number | undefined;
                            OriginCountry?: string | undefined;
                            ExchangeTickerSymbol?: string | undefined;
                            Exchange?: string | undefined;
                            MinTransactionAmount?: number | undefined;
                            StorageLocation?: string | undefined;
                            ContractType?: string | undefined;
                            DeliveryDate?: string | undefined;
                        } | undefined;
                        CollectibleDetails?: {
                            Category?: string | undefined;
                            CollectionName?: string | undefined;
                            TokenStandard?: string | undefined;
                            TokenID?: string | undefined;
                            MetadataURI?: string | undefined;
                            Creator?: string | undefined;
                            OwnershipHistory?: string[] | undefined;
                            CurrentOwner?: string | undefined;
                        } | undefined;
                        VehicleDetails?: {
                            Category?: string | undefined;
                            Manufacturer?: string | undefined;
                            Model?: string | undefined;
                            SerialNumber?: string | undefined;
                            Year?: number | undefined;
                            Specifications?: string | undefined;
                            FuelType?: string | undefined;
                            UsageHours?: number | undefined;
                            Mileage?: number | undefined;
                            Condition?: string | undefined;
                            CurrentOwner?: string | undefined;
                            Location?: string | undefined;
                        } | undefined;
                        IntellectualPropertyDetails?: {
                            Category?: string | undefined;
                            Owner?: string | undefined;
                            RegistrationNumber?: string | undefined;
                            FilingDate?: string | undefined;
                            ExpirationDate?: string | undefined;
                            IPJurisdictionIDs?: string[] | undefined;
                            LicenseType?: string | undefined;
                            LicenseTerms?: string | undefined;
                            Value?: number | undefined;
                        } | undefined;
                        InvestmentFundDetails?: {
                            FundType?: string | undefined;
                            Exchange?: string | undefined;
                            ISIN?: string | undefined;
                            NAV?: number | undefined;
                            InceptionDate?: string | undefined;
                            Manager?: string | undefined;
                            ExpenseRatio?: number | undefined;
                            Holdings?: string[] | undefined;
                        } | undefined;
                        EquityDetails?: {
                            ExchangeTickerSymbol?: string | undefined;
                            Exchange?: string | undefined;
                            MinTransactionAmount?: string | undefined;
                            ExtraPercentage?: string | undefined;
                            AssetMarginPercentage?: string | undefined;
                        } | undefined;
                        FinancialProperties?: {
                            Symbol?: string | undefined;
                            Issuer?: string | undefined;
                            JurisdictionIDs?: string[] | undefined;
                            JurisdictionRestrictions?: string | undefined;
                            RedemptionTerms?: string | undefined;
                            ComplianceRequired?: boolean | undefined;
                            Type?: string | undefined;
                            TradeAllowances?: string[] | undefined;
                            Transferable?: boolean | undefined;
                            Platform?: string | undefined;
                            PlatformType?: string | undefined;
                            ContractAddress?: string | undefined;
                            Fractional?: boolean | undefined;
                            TotalSupply?: number | undefined;
                            DecimalPlacesSupply?: number | undefined;
                            Subunit?: string | undefined;
                            Price?: number | undefined;
                            DecimalPlacesPrice?: number | undefined;
                            Currency?: string | undefined;
                            InitialValuation?: number | undefined;
                            CurrentValuation?: number | undefined;
                            ValuationDate?: string | undefined;
                            Network?: Network | undefined;
                            Status?: string | undefined;
                        } | undefined;
                        Description?: {
                            Name?: string | undefined;
                            Description?: string | undefined;
                            Logo?: {
                                Reference?: string | undefined;
                                Extension?: string | undefined;
                                Name?: string | undefined;
                            } | undefined;
                            AssetID?: string | undefined;
                            URL?: string | undefined;
                            Country?: string | undefined;
                            Documents?: string[] | undefined;
                            Images?: string[] | undefined;
                            Vertical?: string | undefined;
                            CreatedAt?: string | undefined;
                            UpdatedAt?: string | undefined;
                        } | undefined;
                        ExternalResources?: {
                            Links?: {
                                Type?: import("./sologenic/com-fs-asset-model/asset").LinkType | undefined;
                                URL?: string | undefined;
                            }[] | undefined;
                            Socials?: {
                                Type?: import("./sologenic/com-fs-asset-model/asset").SocialMediaType | undefined;
                                URL?: string | undefined;
                            }[] | undefined;
                        } | undefined;
                    } & {
                        ID?: string | undefined;
                        OrganizationID?: string | undefined;
                        Status?: import("./sologenic/com-fs-asset-model/asset").AssetStatus | undefined;
                        Reason?: import("./sologenic/com-fs-asset-model/asset").Reason | undefined;
                        Type?: import("./sologenic/com-fs-asset-model/asset").AssetType | undefined;
                        Denom?: ({
                            Currency?: {
                                Symbol?: string | undefined;
                                Version?: string | undefined;
                            } | undefined;
                            Subunit?: string | undefined;
                            Issuer?: string | undefined;
                            Precision?: number | undefined;
                            Description?: string | undefined;
                        } & {
                            Currency?: ({
                                Symbol?: string | undefined;
                                Version?: string | undefined;
                            } & {
                                Symbol?: string | undefined;
                                Version?: string | undefined;
                            } & { [K in Exclude<keyof I["DynamicAssets"][number]["DynamicAsset"]["Assets"][number]["AssetDetails"]["Denom"]["Currency"], keyof import("./sologenic/com-fs-asset-model/domain/currency/currency").Currency>]: never; }) | undefined;
                            Subunit?: string | undefined;
                            Issuer?: string | undefined;
                            Precision?: number | undefined;
                            Description?: string | undefined;
                        } & { [K_1 in Exclude<keyof I["DynamicAssets"][number]["DynamicAsset"]["Assets"][number]["AssetDetails"]["Denom"], keyof import("./sologenic/com-fs-asset-model/domain/denom/denom").Denom>]: never; }) | undefined;
                        IsIssuedInSmartContract?: boolean | undefined;
                        SmartContractIssuerAddr?: string | undefined;
                        RealEstateDetails?: ({
                            Address?: string | undefined;
                            Bathrooms?: number | undefined;
                            Bedrooms?: number | undefined;
                            Latitude?: number | undefined;
                            Longitude?: number | undefined;
                            OwnershipType?: string | undefined;
                            PropertyType?: string | undefined;
                            RiskRating?: string | undefined;
                            SquareFootage?: number | undefined;
                            TenancyStatus?: string | undefined;
                            YearBuilt?: number | undefined;
                            YieldPercent?: number[] | undefined;
                        } & {
                            Address?: string | undefined;
                            Bathrooms?: number | undefined;
                            Bedrooms?: number | undefined;
                            Latitude?: number | undefined;
                            Longitude?: number | undefined;
                            OwnershipType?: string | undefined;
                            PropertyType?: string | undefined;
                            RiskRating?: string | undefined;
                            SquareFootage?: number | undefined;
                            TenancyStatus?: string | undefined;
                            YearBuilt?: number | undefined;
                            YieldPercent?: (number[] & number[] & { [K_2 in Exclude<keyof I["DynamicAssets"][number]["DynamicAsset"]["Assets"][number]["AssetDetails"]["RealEstateDetails"]["YieldPercent"], keyof number[]>]: never; }) | undefined;
                        } & { [K_3 in Exclude<keyof I["DynamicAssets"][number]["DynamicAsset"]["Assets"][number]["AssetDetails"]["RealEstateDetails"], keyof import("./sologenic/com-fs-asset-model/asset").RealEstate>]: never; }) | undefined;
                        StableCoinDetails?: ({
                            Version?: string | undefined;
                            PegType?: string | undefined;
                            PegRatio?: number | undefined;
                            BackingAsset?: string | undefined;
                            ExchangeTickerSymbol?: string | undefined;
                            Exchange?: string | undefined;
                            MinTransactionAmount?: number | undefined;
                            TradingMarginPercentage?: number | undefined;
                            AssetMarginPercentage?: number | undefined;
                        } & {
                            Version?: string | undefined;
                            PegType?: string | undefined;
                            PegRatio?: number | undefined;
                            BackingAsset?: string | undefined;
                            ExchangeTickerSymbol?: string | undefined;
                            Exchange?: string | undefined;
                            MinTransactionAmount?: number | undefined;
                            TradingMarginPercentage?: number | undefined;
                            AssetMarginPercentage?: number | undefined;
                        } & { [K_4 in Exclude<keyof I["DynamicAssets"][number]["DynamicAsset"]["Assets"][number]["AssetDetails"]["StableCoinDetails"], keyof import("./sologenic/com-fs-asset-model/asset").StableCoin>]: never; }) | undefined;
                        CommodityDetails?: ({
                            Category?: string | undefined;
                            Quality?: string | undefined;
                            UnitOfMeasure?: string | undefined;
                            Quantity?: number | undefined;
                            OriginCountry?: string | undefined;
                            ExchangeTickerSymbol?: string | undefined;
                            Exchange?: string | undefined;
                            MinTransactionAmount?: number | undefined;
                            StorageLocation?: string | undefined;
                            ContractType?: string | undefined;
                            DeliveryDate?: string | undefined;
                        } & {
                            Category?: string | undefined;
                            Quality?: string | undefined;
                            UnitOfMeasure?: string | undefined;
                            Quantity?: number | undefined;
                            OriginCountry?: string | undefined;
                            ExchangeTickerSymbol?: string | undefined;
                            Exchange?: string | undefined;
                            MinTransactionAmount?: number | undefined;
                            StorageLocation?: string | undefined;
                            ContractType?: string | undefined;
                            DeliveryDate?: string | undefined;
                        } & { [K_5 in Exclude<keyof I["DynamicAssets"][number]["DynamicAsset"]["Assets"][number]["AssetDetails"]["CommodityDetails"], keyof import("./sologenic/com-fs-asset-model/asset").Commodity>]: never; }) | undefined;
                        CollectibleDetails?: ({
                            Category?: string | undefined;
                            CollectionName?: string | undefined;
                            TokenStandard?: string | undefined;
                            TokenID?: string | undefined;
                            MetadataURI?: string | undefined;
                            Creator?: string | undefined;
                            OwnershipHistory?: string[] | undefined;
                            CurrentOwner?: string | undefined;
                        } & {
                            Category?: string | undefined;
                            CollectionName?: string | undefined;
                            TokenStandard?: string | undefined;
                            TokenID?: string | undefined;
                            MetadataURI?: string | undefined;
                            Creator?: string | undefined;
                            OwnershipHistory?: (string[] & string[] & { [K_6 in Exclude<keyof I["DynamicAssets"][number]["DynamicAsset"]["Assets"][number]["AssetDetails"]["CollectibleDetails"]["OwnershipHistory"], keyof string[]>]: never; }) | undefined;
                            CurrentOwner?: string | undefined;
                        } & { [K_7 in Exclude<keyof I["DynamicAssets"][number]["DynamicAsset"]["Assets"][number]["AssetDetails"]["CollectibleDetails"], keyof import("./sologenic/com-fs-asset-model/asset").Collectible>]: never; }) | undefined;
                        VehicleDetails?: ({
                            Category?: string | undefined;
                            Manufacturer?: string | undefined;
                            Model?: string | undefined;
                            SerialNumber?: string | undefined;
                            Year?: number | undefined;
                            Specifications?: string | undefined;
                            FuelType?: string | undefined;
                            UsageHours?: number | undefined;
                            Mileage?: number | undefined;
                            Condition?: string | undefined;
                            CurrentOwner?: string | undefined;
                            Location?: string | undefined;
                        } & {
                            Category?: string | undefined;
                            Manufacturer?: string | undefined;
                            Model?: string | undefined;
                            SerialNumber?: string | undefined;
                            Year?: number | undefined;
                            Specifications?: string | undefined;
                            FuelType?: string | undefined;
                            UsageHours?: number | undefined;
                            Mileage?: number | undefined;
                            Condition?: string | undefined;
                            CurrentOwner?: string | undefined;
                            Location?: string | undefined;
                        } & { [K_8 in Exclude<keyof I["DynamicAssets"][number]["DynamicAsset"]["Assets"][number]["AssetDetails"]["VehicleDetails"], keyof import("./sologenic/com-fs-asset-model/asset").Vehicle>]: never; }) | undefined;
                        IntellectualPropertyDetails?: ({
                            Category?: string | undefined;
                            Owner?: string | undefined;
                            RegistrationNumber?: string | undefined;
                            FilingDate?: string | undefined;
                            ExpirationDate?: string | undefined;
                            IPJurisdictionIDs?: string[] | undefined;
                            LicenseType?: string | undefined;
                            LicenseTerms?: string | undefined;
                            Value?: number | undefined;
                        } & {
                            Category?: string | undefined;
                            Owner?: string | undefined;
                            RegistrationNumber?: string | undefined;
                            FilingDate?: string | undefined;
                            ExpirationDate?: string | undefined;
                            IPJurisdictionIDs?: (string[] & string[] & { [K_9 in Exclude<keyof I["DynamicAssets"][number]["DynamicAsset"]["Assets"][number]["AssetDetails"]["IntellectualPropertyDetails"]["IPJurisdictionIDs"], keyof string[]>]: never; }) | undefined;
                            LicenseType?: string | undefined;
                            LicenseTerms?: string | undefined;
                            Value?: number | undefined;
                        } & { [K_10 in Exclude<keyof I["DynamicAssets"][number]["DynamicAsset"]["Assets"][number]["AssetDetails"]["IntellectualPropertyDetails"], keyof import("./sologenic/com-fs-asset-model/asset").IntellectualProperty>]: never; }) | undefined;
                        InvestmentFundDetails?: ({
                            FundType?: string | undefined;
                            Exchange?: string | undefined;
                            ISIN?: string | undefined;
                            NAV?: number | undefined;
                            InceptionDate?: string | undefined;
                            Manager?: string | undefined;
                            ExpenseRatio?: number | undefined;
                            Holdings?: string[] | undefined;
                        } & {
                            FundType?: string | undefined;
                            Exchange?: string | undefined;
                            ISIN?: string | undefined;
                            NAV?: number | undefined;
                            InceptionDate?: string | undefined;
                            Manager?: string | undefined;
                            ExpenseRatio?: number | undefined;
                            Holdings?: (string[] & string[] & { [K_11 in Exclude<keyof I["DynamicAssets"][number]["DynamicAsset"]["Assets"][number]["AssetDetails"]["InvestmentFundDetails"]["Holdings"], keyof string[]>]: never; }) | undefined;
                        } & { [K_12 in Exclude<keyof I["DynamicAssets"][number]["DynamicAsset"]["Assets"][number]["AssetDetails"]["InvestmentFundDetails"], keyof import("./sologenic/com-fs-asset-model/asset").InvestmentFund>]: never; }) | undefined;
                        EquityDetails?: ({
                            ExchangeTickerSymbol?: string | undefined;
                            Exchange?: string | undefined;
                            MinTransactionAmount?: string | undefined;
                            ExtraPercentage?: string | undefined;
                            AssetMarginPercentage?: string | undefined;
                        } & {
                            ExchangeTickerSymbol?: string | undefined;
                            Exchange?: string | undefined;
                            MinTransactionAmount?: string | undefined;
                            ExtraPercentage?: string | undefined;
                            AssetMarginPercentage?: string | undefined;
                        } & { [K_13 in Exclude<keyof I["DynamicAssets"][number]["DynamicAsset"]["Assets"][number]["AssetDetails"]["EquityDetails"], keyof import("./sologenic/com-fs-asset-model/asset").Equity>]: never; }) | undefined;
                        FinancialProperties?: ({
                            Symbol?: string | undefined;
                            Issuer?: string | undefined;
                            JurisdictionIDs?: string[] | undefined;
                            JurisdictionRestrictions?: string | undefined;
                            RedemptionTerms?: string | undefined;
                            ComplianceRequired?: boolean | undefined;
                            Type?: string | undefined;
                            TradeAllowances?: string[] | undefined;
                            Transferable?: boolean | undefined;
                            Platform?: string | undefined;
                            PlatformType?: string | undefined;
                            ContractAddress?: string | undefined;
                            Fractional?: boolean | undefined;
                            TotalSupply?: number | undefined;
                            DecimalPlacesSupply?: number | undefined;
                            Subunit?: string | undefined;
                            Price?: number | undefined;
                            DecimalPlacesPrice?: number | undefined;
                            Currency?: string | undefined;
                            InitialValuation?: number | undefined;
                            CurrentValuation?: number | undefined;
                            ValuationDate?: string | undefined;
                            Network?: Network | undefined;
                            Status?: string | undefined;
                        } & {
                            Symbol?: string | undefined;
                            Issuer?: string | undefined;
                            JurisdictionIDs?: (string[] & string[] & { [K_14 in Exclude<keyof I["DynamicAssets"][number]["DynamicAsset"]["Assets"][number]["AssetDetails"]["FinancialProperties"]["JurisdictionIDs"], keyof string[]>]: never; }) | undefined;
                            JurisdictionRestrictions?: string | undefined;
                            RedemptionTerms?: string | undefined;
                            ComplianceRequired?: boolean | undefined;
                            Type?: string | undefined;
                            TradeAllowances?: (string[] & string[] & { [K_15 in Exclude<keyof I["DynamicAssets"][number]["DynamicAsset"]["Assets"][number]["AssetDetails"]["FinancialProperties"]["TradeAllowances"], keyof string[]>]: never; }) | undefined;
                            Transferable?: boolean | undefined;
                            Platform?: string | undefined;
                            PlatformType?: string | undefined;
                            ContractAddress?: string | undefined;
                            Fractional?: boolean | undefined;
                            TotalSupply?: number | undefined;
                            DecimalPlacesSupply?: number | undefined;
                            Subunit?: string | undefined;
                            Price?: number | undefined;
                            DecimalPlacesPrice?: number | undefined;
                            Currency?: string | undefined;
                            InitialValuation?: number | undefined;
                            CurrentValuation?: number | undefined;
                            ValuationDate?: string | undefined;
                            Network?: Network | undefined;
                            Status?: string | undefined;
                        } & { [K_16 in Exclude<keyof I["DynamicAssets"][number]["DynamicAsset"]["Assets"][number]["AssetDetails"]["FinancialProperties"], keyof import("./sologenic/com-fs-asset-model/asset").FinancialProperties>]: never; }) | undefined;
                        Description?: ({
                            Name?: string | undefined;
                            Description?: string | undefined;
                            Logo?: {
                                Reference?: string | undefined;
                                Extension?: string | undefined;
                                Name?: string | undefined;
                            } | undefined;
                            AssetID?: string | undefined;
                            URL?: string | undefined;
                            Country?: string | undefined;
                            Documents?: string[] | undefined;
                            Images?: string[] | undefined;
                            Vertical?: string | undefined;
                            CreatedAt?: string | undefined;
                            UpdatedAt?: string | undefined;
                        } & {
                            Name?: string | undefined;
                            Description?: string | undefined;
                            Logo?: ({
                                Reference?: string | undefined;
                                Extension?: string | undefined;
                                Name?: string | undefined;
                            } & {
                                Reference?: string | undefined;
                                Extension?: string | undefined;
                                Name?: string | undefined;
                            } & { [K_17 in Exclude<keyof I["DynamicAssets"][number]["DynamicAsset"]["Assets"][number]["AssetDetails"]["Description"]["Logo"], keyof import("./sologenic/com-fs-asset-model/asset").LogoFile>]: never; }) | undefined;
                            AssetID?: string | undefined;
                            URL?: string | undefined;
                            Country?: string | undefined;
                            Documents?: (string[] & string[] & { [K_18 in Exclude<keyof I["DynamicAssets"][number]["DynamicAsset"]["Assets"][number]["AssetDetails"]["Description"]["Documents"], keyof string[]>]: never; }) | undefined;
                            Images?: (string[] & string[] & { [K_19 in Exclude<keyof I["DynamicAssets"][number]["DynamicAsset"]["Assets"][number]["AssetDetails"]["Description"]["Images"], keyof string[]>]: never; }) | undefined;
                            Vertical?: string | undefined;
                            CreatedAt?: string | undefined;
                            UpdatedAt?: string | undefined;
                        } & { [K_20 in Exclude<keyof I["DynamicAssets"][number]["DynamicAsset"]["Assets"][number]["AssetDetails"]["Description"], keyof import("./sologenic/com-fs-asset-model/asset").Description>]: never; }) | undefined;
                        ExternalResources?: ({
                            Links?: {
                                Type?: import("./sologenic/com-fs-asset-model/asset").LinkType | undefined;
                                URL?: string | undefined;
                            }[] | undefined;
                            Socials?: {
                                Type?: import("./sologenic/com-fs-asset-model/asset").SocialMediaType | undefined;
                                URL?: string | undefined;
                            }[] | undefined;
                        } & {
                            Links?: ({
                                Type?: import("./sologenic/com-fs-asset-model/asset").LinkType | undefined;
                                URL?: string | undefined;
                            }[] & ({
                                Type?: import("./sologenic/com-fs-asset-model/asset").LinkType | undefined;
                                URL?: string | undefined;
                            } & {
                                Type?: import("./sologenic/com-fs-asset-model/asset").LinkType | undefined;
                                URL?: string | undefined;
                            } & { [K_21 in Exclude<keyof I["DynamicAssets"][number]["DynamicAsset"]["Assets"][number]["AssetDetails"]["ExternalResources"]["Links"][number], keyof import("./sologenic/com-fs-asset-model/asset").Link>]: never; })[] & { [K_22 in Exclude<keyof I["DynamicAssets"][number]["DynamicAsset"]["Assets"][number]["AssetDetails"]["ExternalResources"]["Links"], keyof {
                                Type?: import("./sologenic/com-fs-asset-model/asset").LinkType | undefined;
                                URL?: string | undefined;
                            }[]>]: never; }) | undefined;
                            Socials?: ({
                                Type?: import("./sologenic/com-fs-asset-model/asset").SocialMediaType | undefined;
                                URL?: string | undefined;
                            }[] & ({
                                Type?: import("./sologenic/com-fs-asset-model/asset").SocialMediaType | undefined;
                                URL?: string | undefined;
                            } & {
                                Type?: import("./sologenic/com-fs-asset-model/asset").SocialMediaType | undefined;
                                URL?: string | undefined;
                            } & { [K_23 in Exclude<keyof I["DynamicAssets"][number]["DynamicAsset"]["Assets"][number]["AssetDetails"]["ExternalResources"]["Socials"][number], keyof import("./sologenic/com-fs-asset-model/asset").SocialMedia>]: never; })[] & { [K_24 in Exclude<keyof I["DynamicAssets"][number]["DynamicAsset"]["Assets"][number]["AssetDetails"]["ExternalResources"]["Socials"], keyof {
                                Type?: import("./sologenic/com-fs-asset-model/asset").SocialMediaType | undefined;
                                URL?: string | undefined;
                            }[]>]: never; }) | undefined;
                        } & { [K_25 in Exclude<keyof I["DynamicAssets"][number]["DynamicAsset"]["Assets"][number]["AssetDetails"]["ExternalResources"], keyof import("./sologenic/com-fs-asset-model/asset").ExternalResources>]: never; }) | undefined;
                    } & { [K_26 in Exclude<keyof I["DynamicAssets"][number]["DynamicAsset"]["Assets"][number]["AssetDetails"], keyof import("./sologenic/com-fs-asset-model/asset").AssetDetails>]: never; }) | undefined;
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
                    } & { [K_27 in Exclude<keyof I["DynamicAssets"][number]["DynamicAsset"]["Assets"][number]["MetaData"], keyof MetaData>]: never; }) | undefined;
                    Audit?: ({
                        ChangedBy?: string | undefined;
                        ChangedAt?: Date | undefined;
                        Reason?: string | undefined;
                    } & {
                        ChangedBy?: string | undefined;
                        ChangedAt?: Date | undefined;
                        Reason?: string | undefined;
                    } & { [K_28 in Exclude<keyof I["DynamicAssets"][number]["DynamicAsset"]["Assets"][number]["Audit"], keyof Audit>]: never; }) | undefined;
                    IssuerDetails?: ({
                        Name?: string | undefined;
                        Description?: string | undefined;
                        Image?: string | undefined;
                        ExternalUrl?: string | undefined;
                        AddressLine1?: string | undefined;
                        AddressLine2?: string | undefined;
                        City?: string | undefined;
                        Region?: string | undefined;
                        PostalCode?: string | undefined;
                        Country?: string | undefined;
                        YearFounded?: number | undefined;
                        Licensed?: boolean | undefined;
                        LicenseCountry?: string | undefined;
                        LicenseNumber?: string | undefined;
                        Phone?: string | undefined;
                        Email?: string | undefined;
                        SocialMediaLinks?: string[] | undefined;
                        KeyClients?: string | undefined;
                        Press?: string | undefined;
                    } & {
                        Name?: string | undefined;
                        Description?: string | undefined;
                        Image?: string | undefined;
                        ExternalUrl?: string | undefined;
                        AddressLine1?: string | undefined;
                        AddressLine2?: string | undefined;
                        City?: string | undefined;
                        Region?: string | undefined;
                        PostalCode?: string | undefined;
                        Country?: string | undefined;
                        YearFounded?: number | undefined;
                        Licensed?: boolean | undefined;
                        LicenseCountry?: string | undefined;
                        LicenseNumber?: string | undefined;
                        Phone?: string | undefined;
                        Email?: string | undefined;
                        SocialMediaLinks?: (string[] & string[] & { [K_29 in Exclude<keyof I["DynamicAssets"][number]["DynamicAsset"]["Assets"][number]["IssuerDetails"]["SocialMediaLinks"], keyof string[]>]: never; }) | undefined;
                        KeyClients?: string | undefined;
                        Press?: string | undefined;
                    } & { [K_30 in Exclude<keyof I["DynamicAssets"][number]["DynamicAsset"]["Assets"][number]["IssuerDetails"], keyof import("./sologenic/com-fs-asset-model/asset").IssuerDetails>]: never; }) | undefined;
                } & { [K_31 in Exclude<keyof I["DynamicAssets"][number]["DynamicAsset"]["Assets"][number], keyof Asset>]: never; })[] & { [K_32 in Exclude<keyof I["DynamicAssets"][number]["DynamicAsset"]["Assets"], keyof {
                    AssetDetails?: {
                        ID?: string | undefined;
                        OrganizationID?: string | undefined;
                        Status?: import("./sologenic/com-fs-asset-model/asset").AssetStatus | undefined;
                        Reason?: import("./sologenic/com-fs-asset-model/asset").Reason | undefined;
                        Type?: import("./sologenic/com-fs-asset-model/asset").AssetType | undefined;
                        Denom?: {
                            Currency?: {
                                Symbol?: string | undefined;
                                Version?: string | undefined;
                            } | undefined;
                            Subunit?: string | undefined;
                            Issuer?: string | undefined;
                            Precision?: number | undefined;
                            Description?: string | undefined;
                        } | undefined;
                        IsIssuedInSmartContract?: boolean | undefined;
                        SmartContractIssuerAddr?: string | undefined;
                        RealEstateDetails?: {
                            Address?: string | undefined;
                            Bathrooms?: number | undefined;
                            Bedrooms?: number | undefined;
                            Latitude?: number | undefined;
                            Longitude?: number | undefined;
                            OwnershipType?: string | undefined;
                            PropertyType?: string | undefined;
                            RiskRating?: string | undefined;
                            SquareFootage?: number | undefined;
                            TenancyStatus?: string | undefined;
                            YearBuilt?: number | undefined;
                            YieldPercent?: number[] | undefined;
                        } | undefined;
                        StableCoinDetails?: {
                            Version?: string | undefined;
                            PegType?: string | undefined;
                            PegRatio?: number | undefined;
                            BackingAsset?: string | undefined;
                            ExchangeTickerSymbol?: string | undefined;
                            Exchange?: string | undefined;
                            MinTransactionAmount?: number | undefined;
                            TradingMarginPercentage?: number | undefined;
                            AssetMarginPercentage?: number | undefined;
                        } | undefined;
                        CommodityDetails?: {
                            Category?: string | undefined;
                            Quality?: string | undefined;
                            UnitOfMeasure?: string | undefined;
                            Quantity?: number | undefined;
                            OriginCountry?: string | undefined;
                            ExchangeTickerSymbol?: string | undefined;
                            Exchange?: string | undefined;
                            MinTransactionAmount?: number | undefined;
                            StorageLocation?: string | undefined;
                            ContractType?: string | undefined;
                            DeliveryDate?: string | undefined;
                        } | undefined;
                        CollectibleDetails?: {
                            Category?: string | undefined;
                            CollectionName?: string | undefined;
                            TokenStandard?: string | undefined;
                            TokenID?: string | undefined;
                            MetadataURI?: string | undefined;
                            Creator?: string | undefined;
                            OwnershipHistory?: string[] | undefined;
                            CurrentOwner?: string | undefined;
                        } | undefined;
                        VehicleDetails?: {
                            Category?: string | undefined;
                            Manufacturer?: string | undefined;
                            Model?: string | undefined;
                            SerialNumber?: string | undefined;
                            Year?: number | undefined;
                            Specifications?: string | undefined;
                            FuelType?: string | undefined;
                            UsageHours?: number | undefined;
                            Mileage?: number | undefined;
                            Condition?: string | undefined;
                            CurrentOwner?: string | undefined;
                            Location?: string | undefined;
                        } | undefined;
                        IntellectualPropertyDetails?: {
                            Category?: string | undefined;
                            Owner?: string | undefined;
                            RegistrationNumber?: string | undefined;
                            FilingDate?: string | undefined;
                            ExpirationDate?: string | undefined;
                            IPJurisdictionIDs?: string[] | undefined;
                            LicenseType?: string | undefined;
                            LicenseTerms?: string | undefined;
                            Value?: number | undefined;
                        } | undefined;
                        InvestmentFundDetails?: {
                            FundType?: string | undefined;
                            Exchange?: string | undefined;
                            ISIN?: string | undefined;
                            NAV?: number | undefined;
                            InceptionDate?: string | undefined;
                            Manager?: string | undefined;
                            ExpenseRatio?: number | undefined;
                            Holdings?: string[] | undefined;
                        } | undefined;
                        EquityDetails?: {
                            ExchangeTickerSymbol?: string | undefined;
                            Exchange?: string | undefined;
                            MinTransactionAmount?: string | undefined;
                            ExtraPercentage?: string | undefined;
                            AssetMarginPercentage?: string | undefined;
                        } | undefined;
                        FinancialProperties?: {
                            Symbol?: string | undefined;
                            Issuer?: string | undefined;
                            JurisdictionIDs?: string[] | undefined;
                            JurisdictionRestrictions?: string | undefined;
                            RedemptionTerms?: string | undefined;
                            ComplianceRequired?: boolean | undefined;
                            Type?: string | undefined;
                            TradeAllowances?: string[] | undefined;
                            Transferable?: boolean | undefined;
                            Platform?: string | undefined;
                            PlatformType?: string | undefined;
                            ContractAddress?: string | undefined;
                            Fractional?: boolean | undefined;
                            TotalSupply?: number | undefined;
                            DecimalPlacesSupply?: number | undefined;
                            Subunit?: string | undefined;
                            Price?: number | undefined;
                            DecimalPlacesPrice?: number | undefined;
                            Currency?: string | undefined;
                            InitialValuation?: number | undefined;
                            CurrentValuation?: number | undefined;
                            ValuationDate?: string | undefined;
                            Network?: Network | undefined;
                            Status?: string | undefined;
                        } | undefined;
                        Description?: {
                            Name?: string | undefined;
                            Description?: string | undefined;
                            Logo?: {
                                Reference?: string | undefined;
                                Extension?: string | undefined;
                                Name?: string | undefined;
                            } | undefined;
                            AssetID?: string | undefined;
                            URL?: string | undefined;
                            Country?: string | undefined;
                            Documents?: string[] | undefined;
                            Images?: string[] | undefined;
                            Vertical?: string | undefined;
                            CreatedAt?: string | undefined;
                            UpdatedAt?: string | undefined;
                        } | undefined;
                        ExternalResources?: {
                            Links?: {
                                Type?: import("./sologenic/com-fs-asset-model/asset").LinkType | undefined;
                                URL?: string | undefined;
                            }[] | undefined;
                            Socials?: {
                                Type?: import("./sologenic/com-fs-asset-model/asset").SocialMediaType | undefined;
                                URL?: string | undefined;
                            }[] | undefined;
                        } | undefined;
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
                    IssuerDetails?: {
                        Name?: string | undefined;
                        Description?: string | undefined;
                        Image?: string | undefined;
                        ExternalUrl?: string | undefined;
                        AddressLine1?: string | undefined;
                        AddressLine2?: string | undefined;
                        City?: string | undefined;
                        Region?: string | undefined;
                        PostalCode?: string | undefined;
                        Country?: string | undefined;
                        YearFounded?: number | undefined;
                        Licensed?: boolean | undefined;
                        LicenseCountry?: string | undefined;
                        LicenseNumber?: string | undefined;
                        Phone?: string | undefined;
                        Email?: string | undefined;
                        SocialMediaLinks?: string[] | undefined;
                        KeyClients?: string | undefined;
                        Press?: string | undefined;
                    } | undefined;
                }[]>]: never; }) | undefined;
            } & { [K_33 in Exclude<keyof I["DynamicAssets"][number]["DynamicAsset"], keyof DynamicAssetDetails>]: never; }) | undefined;
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
            } & { [K_34 in Exclude<keyof I["DynamicAssets"][number]["MetaData"], keyof MetaData>]: never; }) | undefined;
            Audit?: ({
                ChangedBy?: string | undefined;
                ChangedAt?: Date | undefined;
                Reason?: string | undefined;
            } & {
                ChangedBy?: string | undefined;
                ChangedAt?: Date | undefined;
                Reason?: string | undefined;
            } & { [K_35 in Exclude<keyof I["DynamicAssets"][number]["Audit"], keyof Audit>]: never; }) | undefined;
        } & { [K_36 in Exclude<keyof I["DynamicAssets"][number], keyof DynamicAsset>]: never; })[] & { [K_37 in Exclude<keyof I["DynamicAssets"], keyof {
            DynamicAsset?: {
                DynamicAssetID?: string | undefined;
                Title?: string | undefined;
                Description?: string | undefined;
                Identifier?: string | undefined;
                OrganizationID?: string | undefined;
                Assets?: {
                    AssetDetails?: {
                        ID?: string | undefined;
                        OrganizationID?: string | undefined;
                        Status?: import("./sologenic/com-fs-asset-model/asset").AssetStatus | undefined;
                        Reason?: import("./sologenic/com-fs-asset-model/asset").Reason | undefined;
                        Type?: import("./sologenic/com-fs-asset-model/asset").AssetType | undefined;
                        Denom?: {
                            Currency?: {
                                Symbol?: string | undefined;
                                Version?: string | undefined;
                            } | undefined;
                            Subunit?: string | undefined;
                            Issuer?: string | undefined;
                            Precision?: number | undefined;
                            Description?: string | undefined;
                        } | undefined;
                        IsIssuedInSmartContract?: boolean | undefined;
                        SmartContractIssuerAddr?: string | undefined;
                        RealEstateDetails?: {
                            Address?: string | undefined;
                            Bathrooms?: number | undefined;
                            Bedrooms?: number | undefined;
                            Latitude?: number | undefined;
                            Longitude?: number | undefined;
                            OwnershipType?: string | undefined;
                            PropertyType?: string | undefined;
                            RiskRating?: string | undefined;
                            SquareFootage?: number | undefined;
                            TenancyStatus?: string | undefined;
                            YearBuilt?: number | undefined;
                            YieldPercent?: number[] | undefined;
                        } | undefined;
                        StableCoinDetails?: {
                            Version?: string | undefined;
                            PegType?: string | undefined;
                            PegRatio?: number | undefined;
                            BackingAsset?: string | undefined;
                            ExchangeTickerSymbol?: string | undefined;
                            Exchange?: string | undefined;
                            MinTransactionAmount?: number | undefined;
                            TradingMarginPercentage?: number | undefined;
                            AssetMarginPercentage?: number | undefined;
                        } | undefined;
                        CommodityDetails?: {
                            Category?: string | undefined;
                            Quality?: string | undefined;
                            UnitOfMeasure?: string | undefined;
                            Quantity?: number | undefined;
                            OriginCountry?: string | undefined;
                            ExchangeTickerSymbol?: string | undefined;
                            Exchange?: string | undefined;
                            MinTransactionAmount?: number | undefined;
                            StorageLocation?: string | undefined;
                            ContractType?: string | undefined;
                            DeliveryDate?: string | undefined;
                        } | undefined;
                        CollectibleDetails?: {
                            Category?: string | undefined;
                            CollectionName?: string | undefined;
                            TokenStandard?: string | undefined;
                            TokenID?: string | undefined;
                            MetadataURI?: string | undefined;
                            Creator?: string | undefined;
                            OwnershipHistory?: string[] | undefined;
                            CurrentOwner?: string | undefined;
                        } | undefined;
                        VehicleDetails?: {
                            Category?: string | undefined;
                            Manufacturer?: string | undefined;
                            Model?: string | undefined;
                            SerialNumber?: string | undefined;
                            Year?: number | undefined;
                            Specifications?: string | undefined;
                            FuelType?: string | undefined;
                            UsageHours?: number | undefined;
                            Mileage?: number | undefined;
                            Condition?: string | undefined;
                            CurrentOwner?: string | undefined;
                            Location?: string | undefined;
                        } | undefined;
                        IntellectualPropertyDetails?: {
                            Category?: string | undefined;
                            Owner?: string | undefined;
                            RegistrationNumber?: string | undefined;
                            FilingDate?: string | undefined;
                            ExpirationDate?: string | undefined;
                            IPJurisdictionIDs?: string[] | undefined;
                            LicenseType?: string | undefined;
                            LicenseTerms?: string | undefined;
                            Value?: number | undefined;
                        } | undefined;
                        InvestmentFundDetails?: {
                            FundType?: string | undefined;
                            Exchange?: string | undefined;
                            ISIN?: string | undefined;
                            NAV?: number | undefined;
                            InceptionDate?: string | undefined;
                            Manager?: string | undefined;
                            ExpenseRatio?: number | undefined;
                            Holdings?: string[] | undefined;
                        } | undefined;
                        EquityDetails?: {
                            ExchangeTickerSymbol?: string | undefined;
                            Exchange?: string | undefined;
                            MinTransactionAmount?: string | undefined;
                            ExtraPercentage?: string | undefined;
                            AssetMarginPercentage?: string | undefined;
                        } | undefined;
                        FinancialProperties?: {
                            Symbol?: string | undefined;
                            Issuer?: string | undefined;
                            JurisdictionIDs?: string[] | undefined;
                            JurisdictionRestrictions?: string | undefined;
                            RedemptionTerms?: string | undefined;
                            ComplianceRequired?: boolean | undefined;
                            Type?: string | undefined;
                            TradeAllowances?: string[] | undefined;
                            Transferable?: boolean | undefined;
                            Platform?: string | undefined;
                            PlatformType?: string | undefined;
                            ContractAddress?: string | undefined;
                            Fractional?: boolean | undefined;
                            TotalSupply?: number | undefined;
                            DecimalPlacesSupply?: number | undefined;
                            Subunit?: string | undefined;
                            Price?: number | undefined;
                            DecimalPlacesPrice?: number | undefined;
                            Currency?: string | undefined;
                            InitialValuation?: number | undefined;
                            CurrentValuation?: number | undefined;
                            ValuationDate?: string | undefined;
                            Network?: Network | undefined;
                            Status?: string | undefined;
                        } | undefined;
                        Description?: {
                            Name?: string | undefined;
                            Description?: string | undefined;
                            Logo?: {
                                Reference?: string | undefined;
                                Extension?: string | undefined;
                                Name?: string | undefined;
                            } | undefined;
                            AssetID?: string | undefined;
                            URL?: string | undefined;
                            Country?: string | undefined;
                            Documents?: string[] | undefined;
                            Images?: string[] | undefined;
                            Vertical?: string | undefined;
                            CreatedAt?: string | undefined;
                            UpdatedAt?: string | undefined;
                        } | undefined;
                        ExternalResources?: {
                            Links?: {
                                Type?: import("./sologenic/com-fs-asset-model/asset").LinkType | undefined;
                                URL?: string | undefined;
                            }[] | undefined;
                            Socials?: {
                                Type?: import("./sologenic/com-fs-asset-model/asset").SocialMediaType | undefined;
                                URL?: string | undefined;
                            }[] | undefined;
                        } | undefined;
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
                    IssuerDetails?: {
                        Name?: string | undefined;
                        Description?: string | undefined;
                        Image?: string | undefined;
                        ExternalUrl?: string | undefined;
                        AddressLine1?: string | undefined;
                        AddressLine2?: string | undefined;
                        City?: string | undefined;
                        Region?: string | undefined;
                        PostalCode?: string | undefined;
                        Country?: string | undefined;
                        YearFounded?: number | undefined;
                        Licensed?: boolean | undefined;
                        LicenseCountry?: string | undefined;
                        LicenseNumber?: string | undefined;
                        Phone?: string | undefined;
                        Email?: string | undefined;
                        SocialMediaLinks?: string[] | undefined;
                        KeyClients?: string | undefined;
                        Press?: string | undefined;
                    } | undefined;
                }[] | undefined;
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
    } & { [K_38 in Exclude<keyof I, keyof DynamicAssetList>]: never; }>(base?: I | undefined): DynamicAssetList;
    fromPartial<I_1 extends {
        DynamicAssets?: {
            DynamicAsset?: {
                DynamicAssetID?: string | undefined;
                Title?: string | undefined;
                Description?: string | undefined;
                Identifier?: string | undefined;
                OrganizationID?: string | undefined;
                Assets?: {
                    AssetDetails?: {
                        ID?: string | undefined;
                        OrganizationID?: string | undefined;
                        Status?: import("./sologenic/com-fs-asset-model/asset").AssetStatus | undefined;
                        Reason?: import("./sologenic/com-fs-asset-model/asset").Reason | undefined;
                        Type?: import("./sologenic/com-fs-asset-model/asset").AssetType | undefined;
                        Denom?: {
                            Currency?: {
                                Symbol?: string | undefined;
                                Version?: string | undefined;
                            } | undefined;
                            Subunit?: string | undefined;
                            Issuer?: string | undefined;
                            Precision?: number | undefined;
                            Description?: string | undefined;
                        } | undefined;
                        IsIssuedInSmartContract?: boolean | undefined;
                        SmartContractIssuerAddr?: string | undefined;
                        RealEstateDetails?: {
                            Address?: string | undefined;
                            Bathrooms?: number | undefined;
                            Bedrooms?: number | undefined;
                            Latitude?: number | undefined;
                            Longitude?: number | undefined;
                            OwnershipType?: string | undefined;
                            PropertyType?: string | undefined;
                            RiskRating?: string | undefined;
                            SquareFootage?: number | undefined;
                            TenancyStatus?: string | undefined;
                            YearBuilt?: number | undefined;
                            YieldPercent?: number[] | undefined;
                        } | undefined;
                        StableCoinDetails?: {
                            Version?: string | undefined;
                            PegType?: string | undefined;
                            PegRatio?: number | undefined;
                            BackingAsset?: string | undefined;
                            ExchangeTickerSymbol?: string | undefined;
                            Exchange?: string | undefined;
                            MinTransactionAmount?: number | undefined;
                            TradingMarginPercentage?: number | undefined;
                            AssetMarginPercentage?: number | undefined;
                        } | undefined;
                        CommodityDetails?: {
                            Category?: string | undefined;
                            Quality?: string | undefined;
                            UnitOfMeasure?: string | undefined;
                            Quantity?: number | undefined;
                            OriginCountry?: string | undefined;
                            ExchangeTickerSymbol?: string | undefined;
                            Exchange?: string | undefined;
                            MinTransactionAmount?: number | undefined;
                            StorageLocation?: string | undefined;
                            ContractType?: string | undefined;
                            DeliveryDate?: string | undefined;
                        } | undefined;
                        CollectibleDetails?: {
                            Category?: string | undefined;
                            CollectionName?: string | undefined;
                            TokenStandard?: string | undefined;
                            TokenID?: string | undefined;
                            MetadataURI?: string | undefined;
                            Creator?: string | undefined;
                            OwnershipHistory?: string[] | undefined;
                            CurrentOwner?: string | undefined;
                        } | undefined;
                        VehicleDetails?: {
                            Category?: string | undefined;
                            Manufacturer?: string | undefined;
                            Model?: string | undefined;
                            SerialNumber?: string | undefined;
                            Year?: number | undefined;
                            Specifications?: string | undefined;
                            FuelType?: string | undefined;
                            UsageHours?: number | undefined;
                            Mileage?: number | undefined;
                            Condition?: string | undefined;
                            CurrentOwner?: string | undefined;
                            Location?: string | undefined;
                        } | undefined;
                        IntellectualPropertyDetails?: {
                            Category?: string | undefined;
                            Owner?: string | undefined;
                            RegistrationNumber?: string | undefined;
                            FilingDate?: string | undefined;
                            ExpirationDate?: string | undefined;
                            IPJurisdictionIDs?: string[] | undefined;
                            LicenseType?: string | undefined;
                            LicenseTerms?: string | undefined;
                            Value?: number | undefined;
                        } | undefined;
                        InvestmentFundDetails?: {
                            FundType?: string | undefined;
                            Exchange?: string | undefined;
                            ISIN?: string | undefined;
                            NAV?: number | undefined;
                            InceptionDate?: string | undefined;
                            Manager?: string | undefined;
                            ExpenseRatio?: number | undefined;
                            Holdings?: string[] | undefined;
                        } | undefined;
                        EquityDetails?: {
                            ExchangeTickerSymbol?: string | undefined;
                            Exchange?: string | undefined;
                            MinTransactionAmount?: string | undefined;
                            ExtraPercentage?: string | undefined;
                            AssetMarginPercentage?: string | undefined;
                        } | undefined;
                        FinancialProperties?: {
                            Symbol?: string | undefined;
                            Issuer?: string | undefined;
                            JurisdictionIDs?: string[] | undefined;
                            JurisdictionRestrictions?: string | undefined;
                            RedemptionTerms?: string | undefined;
                            ComplianceRequired?: boolean | undefined;
                            Type?: string | undefined;
                            TradeAllowances?: string[] | undefined;
                            Transferable?: boolean | undefined;
                            Platform?: string | undefined;
                            PlatformType?: string | undefined;
                            ContractAddress?: string | undefined;
                            Fractional?: boolean | undefined;
                            TotalSupply?: number | undefined;
                            DecimalPlacesSupply?: number | undefined;
                            Subunit?: string | undefined;
                            Price?: number | undefined;
                            DecimalPlacesPrice?: number | undefined;
                            Currency?: string | undefined;
                            InitialValuation?: number | undefined;
                            CurrentValuation?: number | undefined;
                            ValuationDate?: string | undefined;
                            Network?: Network | undefined;
                            Status?: string | undefined;
                        } | undefined;
                        Description?: {
                            Name?: string | undefined;
                            Description?: string | undefined;
                            Logo?: {
                                Reference?: string | undefined;
                                Extension?: string | undefined;
                                Name?: string | undefined;
                            } | undefined;
                            AssetID?: string | undefined;
                            URL?: string | undefined;
                            Country?: string | undefined;
                            Documents?: string[] | undefined;
                            Images?: string[] | undefined;
                            Vertical?: string | undefined;
                            CreatedAt?: string | undefined;
                            UpdatedAt?: string | undefined;
                        } | undefined;
                        ExternalResources?: {
                            Links?: {
                                Type?: import("./sologenic/com-fs-asset-model/asset").LinkType | undefined;
                                URL?: string | undefined;
                            }[] | undefined;
                            Socials?: {
                                Type?: import("./sologenic/com-fs-asset-model/asset").SocialMediaType | undefined;
                                URL?: string | undefined;
                            }[] | undefined;
                        } | undefined;
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
                    IssuerDetails?: {
                        Name?: string | undefined;
                        Description?: string | undefined;
                        Image?: string | undefined;
                        ExternalUrl?: string | undefined;
                        AddressLine1?: string | undefined;
                        AddressLine2?: string | undefined;
                        City?: string | undefined;
                        Region?: string | undefined;
                        PostalCode?: string | undefined;
                        Country?: string | undefined;
                        YearFounded?: number | undefined;
                        Licensed?: boolean | undefined;
                        LicenseCountry?: string | undefined;
                        LicenseNumber?: string | undefined;
                        Phone?: string | undefined;
                        Email?: string | undefined;
                        SocialMediaLinks?: string[] | undefined;
                        KeyClients?: string | undefined;
                        Press?: string | undefined;
                    } | undefined;
                }[] | undefined;
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
                Assets?: {
                    AssetDetails?: {
                        ID?: string | undefined;
                        OrganizationID?: string | undefined;
                        Status?: import("./sologenic/com-fs-asset-model/asset").AssetStatus | undefined;
                        Reason?: import("./sologenic/com-fs-asset-model/asset").Reason | undefined;
                        Type?: import("./sologenic/com-fs-asset-model/asset").AssetType | undefined;
                        Denom?: {
                            Currency?: {
                                Symbol?: string | undefined;
                                Version?: string | undefined;
                            } | undefined;
                            Subunit?: string | undefined;
                            Issuer?: string | undefined;
                            Precision?: number | undefined;
                            Description?: string | undefined;
                        } | undefined;
                        IsIssuedInSmartContract?: boolean | undefined;
                        SmartContractIssuerAddr?: string | undefined;
                        RealEstateDetails?: {
                            Address?: string | undefined;
                            Bathrooms?: number | undefined;
                            Bedrooms?: number | undefined;
                            Latitude?: number | undefined;
                            Longitude?: number | undefined;
                            OwnershipType?: string | undefined;
                            PropertyType?: string | undefined;
                            RiskRating?: string | undefined;
                            SquareFootage?: number | undefined;
                            TenancyStatus?: string | undefined;
                            YearBuilt?: number | undefined;
                            YieldPercent?: number[] | undefined;
                        } | undefined;
                        StableCoinDetails?: {
                            Version?: string | undefined;
                            PegType?: string | undefined;
                            PegRatio?: number | undefined;
                            BackingAsset?: string | undefined;
                            ExchangeTickerSymbol?: string | undefined;
                            Exchange?: string | undefined;
                            MinTransactionAmount?: number | undefined;
                            TradingMarginPercentage?: number | undefined;
                            AssetMarginPercentage?: number | undefined;
                        } | undefined;
                        CommodityDetails?: {
                            Category?: string | undefined;
                            Quality?: string | undefined;
                            UnitOfMeasure?: string | undefined;
                            Quantity?: number | undefined;
                            OriginCountry?: string | undefined;
                            ExchangeTickerSymbol?: string | undefined;
                            Exchange?: string | undefined;
                            MinTransactionAmount?: number | undefined;
                            StorageLocation?: string | undefined;
                            ContractType?: string | undefined;
                            DeliveryDate?: string | undefined;
                        } | undefined;
                        CollectibleDetails?: {
                            Category?: string | undefined;
                            CollectionName?: string | undefined;
                            TokenStandard?: string | undefined;
                            TokenID?: string | undefined;
                            MetadataURI?: string | undefined;
                            Creator?: string | undefined;
                            OwnershipHistory?: string[] | undefined;
                            CurrentOwner?: string | undefined;
                        } | undefined;
                        VehicleDetails?: {
                            Category?: string | undefined;
                            Manufacturer?: string | undefined;
                            Model?: string | undefined;
                            SerialNumber?: string | undefined;
                            Year?: number | undefined;
                            Specifications?: string | undefined;
                            FuelType?: string | undefined;
                            UsageHours?: number | undefined;
                            Mileage?: number | undefined;
                            Condition?: string | undefined;
                            CurrentOwner?: string | undefined;
                            Location?: string | undefined;
                        } | undefined;
                        IntellectualPropertyDetails?: {
                            Category?: string | undefined;
                            Owner?: string | undefined;
                            RegistrationNumber?: string | undefined;
                            FilingDate?: string | undefined;
                            ExpirationDate?: string | undefined;
                            IPJurisdictionIDs?: string[] | undefined;
                            LicenseType?: string | undefined;
                            LicenseTerms?: string | undefined;
                            Value?: number | undefined;
                        } | undefined;
                        InvestmentFundDetails?: {
                            FundType?: string | undefined;
                            Exchange?: string | undefined;
                            ISIN?: string | undefined;
                            NAV?: number | undefined;
                            InceptionDate?: string | undefined;
                            Manager?: string | undefined;
                            ExpenseRatio?: number | undefined;
                            Holdings?: string[] | undefined;
                        } | undefined;
                        EquityDetails?: {
                            ExchangeTickerSymbol?: string | undefined;
                            Exchange?: string | undefined;
                            MinTransactionAmount?: string | undefined;
                            ExtraPercentage?: string | undefined;
                            AssetMarginPercentage?: string | undefined;
                        } | undefined;
                        FinancialProperties?: {
                            Symbol?: string | undefined;
                            Issuer?: string | undefined;
                            JurisdictionIDs?: string[] | undefined;
                            JurisdictionRestrictions?: string | undefined;
                            RedemptionTerms?: string | undefined;
                            ComplianceRequired?: boolean | undefined;
                            Type?: string | undefined;
                            TradeAllowances?: string[] | undefined;
                            Transferable?: boolean | undefined;
                            Platform?: string | undefined;
                            PlatformType?: string | undefined;
                            ContractAddress?: string | undefined;
                            Fractional?: boolean | undefined;
                            TotalSupply?: number | undefined;
                            DecimalPlacesSupply?: number | undefined;
                            Subunit?: string | undefined;
                            Price?: number | undefined;
                            DecimalPlacesPrice?: number | undefined;
                            Currency?: string | undefined;
                            InitialValuation?: number | undefined;
                            CurrentValuation?: number | undefined;
                            ValuationDate?: string | undefined;
                            Network?: Network | undefined;
                            Status?: string | undefined;
                        } | undefined;
                        Description?: {
                            Name?: string | undefined;
                            Description?: string | undefined;
                            Logo?: {
                                Reference?: string | undefined;
                                Extension?: string | undefined;
                                Name?: string | undefined;
                            } | undefined;
                            AssetID?: string | undefined;
                            URL?: string | undefined;
                            Country?: string | undefined;
                            Documents?: string[] | undefined;
                            Images?: string[] | undefined;
                            Vertical?: string | undefined;
                            CreatedAt?: string | undefined;
                            UpdatedAt?: string | undefined;
                        } | undefined;
                        ExternalResources?: {
                            Links?: {
                                Type?: import("./sologenic/com-fs-asset-model/asset").LinkType | undefined;
                                URL?: string | undefined;
                            }[] | undefined;
                            Socials?: {
                                Type?: import("./sologenic/com-fs-asset-model/asset").SocialMediaType | undefined;
                                URL?: string | undefined;
                            }[] | undefined;
                        } | undefined;
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
                    IssuerDetails?: {
                        Name?: string | undefined;
                        Description?: string | undefined;
                        Image?: string | undefined;
                        ExternalUrl?: string | undefined;
                        AddressLine1?: string | undefined;
                        AddressLine2?: string | undefined;
                        City?: string | undefined;
                        Region?: string | undefined;
                        PostalCode?: string | undefined;
                        Country?: string | undefined;
                        YearFounded?: number | undefined;
                        Licensed?: boolean | undefined;
                        LicenseCountry?: string | undefined;
                        LicenseNumber?: string | undefined;
                        Phone?: string | undefined;
                        Email?: string | undefined;
                        SocialMediaLinks?: string[] | undefined;
                        KeyClients?: string | undefined;
                        Press?: string | undefined;
                    } | undefined;
                }[] | undefined;
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
                Assets?: {
                    AssetDetails?: {
                        ID?: string | undefined;
                        OrganizationID?: string | undefined;
                        Status?: import("./sologenic/com-fs-asset-model/asset").AssetStatus | undefined;
                        Reason?: import("./sologenic/com-fs-asset-model/asset").Reason | undefined;
                        Type?: import("./sologenic/com-fs-asset-model/asset").AssetType | undefined;
                        Denom?: {
                            Currency?: {
                                Symbol?: string | undefined;
                                Version?: string | undefined;
                            } | undefined;
                            Subunit?: string | undefined;
                            Issuer?: string | undefined;
                            Precision?: number | undefined;
                            Description?: string | undefined;
                        } | undefined;
                        IsIssuedInSmartContract?: boolean | undefined;
                        SmartContractIssuerAddr?: string | undefined;
                        RealEstateDetails?: {
                            Address?: string | undefined;
                            Bathrooms?: number | undefined;
                            Bedrooms?: number | undefined;
                            Latitude?: number | undefined;
                            Longitude?: number | undefined;
                            OwnershipType?: string | undefined;
                            PropertyType?: string | undefined;
                            RiskRating?: string | undefined;
                            SquareFootage?: number | undefined;
                            TenancyStatus?: string | undefined;
                            YearBuilt?: number | undefined;
                            YieldPercent?: number[] | undefined;
                        } | undefined;
                        StableCoinDetails?: {
                            Version?: string | undefined;
                            PegType?: string | undefined;
                            PegRatio?: number | undefined;
                            BackingAsset?: string | undefined;
                            ExchangeTickerSymbol?: string | undefined;
                            Exchange?: string | undefined;
                            MinTransactionAmount?: number | undefined;
                            TradingMarginPercentage?: number | undefined;
                            AssetMarginPercentage?: number | undefined;
                        } | undefined;
                        CommodityDetails?: {
                            Category?: string | undefined;
                            Quality?: string | undefined;
                            UnitOfMeasure?: string | undefined;
                            Quantity?: number | undefined;
                            OriginCountry?: string | undefined;
                            ExchangeTickerSymbol?: string | undefined;
                            Exchange?: string | undefined;
                            MinTransactionAmount?: number | undefined;
                            StorageLocation?: string | undefined;
                            ContractType?: string | undefined;
                            DeliveryDate?: string | undefined;
                        } | undefined;
                        CollectibleDetails?: {
                            Category?: string | undefined;
                            CollectionName?: string | undefined;
                            TokenStandard?: string | undefined;
                            TokenID?: string | undefined;
                            MetadataURI?: string | undefined;
                            Creator?: string | undefined;
                            OwnershipHistory?: string[] | undefined;
                            CurrentOwner?: string | undefined;
                        } | undefined;
                        VehicleDetails?: {
                            Category?: string | undefined;
                            Manufacturer?: string | undefined;
                            Model?: string | undefined;
                            SerialNumber?: string | undefined;
                            Year?: number | undefined;
                            Specifications?: string | undefined;
                            FuelType?: string | undefined;
                            UsageHours?: number | undefined;
                            Mileage?: number | undefined;
                            Condition?: string | undefined;
                            CurrentOwner?: string | undefined;
                            Location?: string | undefined;
                        } | undefined;
                        IntellectualPropertyDetails?: {
                            Category?: string | undefined;
                            Owner?: string | undefined;
                            RegistrationNumber?: string | undefined;
                            FilingDate?: string | undefined;
                            ExpirationDate?: string | undefined;
                            IPJurisdictionIDs?: string[] | undefined;
                            LicenseType?: string | undefined;
                            LicenseTerms?: string | undefined;
                            Value?: number | undefined;
                        } | undefined;
                        InvestmentFundDetails?: {
                            FundType?: string | undefined;
                            Exchange?: string | undefined;
                            ISIN?: string | undefined;
                            NAV?: number | undefined;
                            InceptionDate?: string | undefined;
                            Manager?: string | undefined;
                            ExpenseRatio?: number | undefined;
                            Holdings?: string[] | undefined;
                        } | undefined;
                        EquityDetails?: {
                            ExchangeTickerSymbol?: string | undefined;
                            Exchange?: string | undefined;
                            MinTransactionAmount?: string | undefined;
                            ExtraPercentage?: string | undefined;
                            AssetMarginPercentage?: string | undefined;
                        } | undefined;
                        FinancialProperties?: {
                            Symbol?: string | undefined;
                            Issuer?: string | undefined;
                            JurisdictionIDs?: string[] | undefined;
                            JurisdictionRestrictions?: string | undefined;
                            RedemptionTerms?: string | undefined;
                            ComplianceRequired?: boolean | undefined;
                            Type?: string | undefined;
                            TradeAllowances?: string[] | undefined;
                            Transferable?: boolean | undefined;
                            Platform?: string | undefined;
                            PlatformType?: string | undefined;
                            ContractAddress?: string | undefined;
                            Fractional?: boolean | undefined;
                            TotalSupply?: number | undefined;
                            DecimalPlacesSupply?: number | undefined;
                            Subunit?: string | undefined;
                            Price?: number | undefined;
                            DecimalPlacesPrice?: number | undefined;
                            Currency?: string | undefined;
                            InitialValuation?: number | undefined;
                            CurrentValuation?: number | undefined;
                            ValuationDate?: string | undefined;
                            Network?: Network | undefined;
                            Status?: string | undefined;
                        } | undefined;
                        Description?: {
                            Name?: string | undefined;
                            Description?: string | undefined;
                            Logo?: {
                                Reference?: string | undefined;
                                Extension?: string | undefined;
                                Name?: string | undefined;
                            } | undefined;
                            AssetID?: string | undefined;
                            URL?: string | undefined;
                            Country?: string | undefined;
                            Documents?: string[] | undefined;
                            Images?: string[] | undefined;
                            Vertical?: string | undefined;
                            CreatedAt?: string | undefined;
                            UpdatedAt?: string | undefined;
                        } | undefined;
                        ExternalResources?: {
                            Links?: {
                                Type?: import("./sologenic/com-fs-asset-model/asset").LinkType | undefined;
                                URL?: string | undefined;
                            }[] | undefined;
                            Socials?: {
                                Type?: import("./sologenic/com-fs-asset-model/asset").SocialMediaType | undefined;
                                URL?: string | undefined;
                            }[] | undefined;
                        } | undefined;
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
                    IssuerDetails?: {
                        Name?: string | undefined;
                        Description?: string | undefined;
                        Image?: string | undefined;
                        ExternalUrl?: string | undefined;
                        AddressLine1?: string | undefined;
                        AddressLine2?: string | undefined;
                        City?: string | undefined;
                        Region?: string | undefined;
                        PostalCode?: string | undefined;
                        Country?: string | undefined;
                        YearFounded?: number | undefined;
                        Licensed?: boolean | undefined;
                        LicenseCountry?: string | undefined;
                        LicenseNumber?: string | undefined;
                        Phone?: string | undefined;
                        Email?: string | undefined;
                        SocialMediaLinks?: string[] | undefined;
                        KeyClients?: string | undefined;
                        Press?: string | undefined;
                    } | undefined;
                }[] | undefined;
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
                Assets?: {
                    AssetDetails?: {
                        ID?: string | undefined;
                        OrganizationID?: string | undefined;
                        Status?: import("./sologenic/com-fs-asset-model/asset").AssetStatus | undefined;
                        Reason?: import("./sologenic/com-fs-asset-model/asset").Reason | undefined;
                        Type?: import("./sologenic/com-fs-asset-model/asset").AssetType | undefined;
                        Denom?: {
                            Currency?: {
                                Symbol?: string | undefined;
                                Version?: string | undefined;
                            } | undefined;
                            Subunit?: string | undefined;
                            Issuer?: string | undefined;
                            Precision?: number | undefined;
                            Description?: string | undefined;
                        } | undefined;
                        IsIssuedInSmartContract?: boolean | undefined;
                        SmartContractIssuerAddr?: string | undefined;
                        RealEstateDetails?: {
                            Address?: string | undefined;
                            Bathrooms?: number | undefined;
                            Bedrooms?: number | undefined;
                            Latitude?: number | undefined;
                            Longitude?: number | undefined;
                            OwnershipType?: string | undefined;
                            PropertyType?: string | undefined;
                            RiskRating?: string | undefined;
                            SquareFootage?: number | undefined;
                            TenancyStatus?: string | undefined;
                            YearBuilt?: number | undefined;
                            YieldPercent?: number[] | undefined;
                        } | undefined;
                        StableCoinDetails?: {
                            Version?: string | undefined;
                            PegType?: string | undefined;
                            PegRatio?: number | undefined;
                            BackingAsset?: string | undefined;
                            ExchangeTickerSymbol?: string | undefined;
                            Exchange?: string | undefined;
                            MinTransactionAmount?: number | undefined;
                            TradingMarginPercentage?: number | undefined;
                            AssetMarginPercentage?: number | undefined;
                        } | undefined;
                        CommodityDetails?: {
                            Category?: string | undefined;
                            Quality?: string | undefined;
                            UnitOfMeasure?: string | undefined;
                            Quantity?: number | undefined;
                            OriginCountry?: string | undefined;
                            ExchangeTickerSymbol?: string | undefined;
                            Exchange?: string | undefined;
                            MinTransactionAmount?: number | undefined;
                            StorageLocation?: string | undefined;
                            ContractType?: string | undefined;
                            DeliveryDate?: string | undefined;
                        } | undefined;
                        CollectibleDetails?: {
                            Category?: string | undefined;
                            CollectionName?: string | undefined;
                            TokenStandard?: string | undefined;
                            TokenID?: string | undefined;
                            MetadataURI?: string | undefined;
                            Creator?: string | undefined;
                            OwnershipHistory?: string[] | undefined;
                            CurrentOwner?: string | undefined;
                        } | undefined;
                        VehicleDetails?: {
                            Category?: string | undefined;
                            Manufacturer?: string | undefined;
                            Model?: string | undefined;
                            SerialNumber?: string | undefined;
                            Year?: number | undefined;
                            Specifications?: string | undefined;
                            FuelType?: string | undefined;
                            UsageHours?: number | undefined;
                            Mileage?: number | undefined;
                            Condition?: string | undefined;
                            CurrentOwner?: string | undefined;
                            Location?: string | undefined;
                        } | undefined;
                        IntellectualPropertyDetails?: {
                            Category?: string | undefined;
                            Owner?: string | undefined;
                            RegistrationNumber?: string | undefined;
                            FilingDate?: string | undefined;
                            ExpirationDate?: string | undefined;
                            IPJurisdictionIDs?: string[] | undefined;
                            LicenseType?: string | undefined;
                            LicenseTerms?: string | undefined;
                            Value?: number | undefined;
                        } | undefined;
                        InvestmentFundDetails?: {
                            FundType?: string | undefined;
                            Exchange?: string | undefined;
                            ISIN?: string | undefined;
                            NAV?: number | undefined;
                            InceptionDate?: string | undefined;
                            Manager?: string | undefined;
                            ExpenseRatio?: number | undefined;
                            Holdings?: string[] | undefined;
                        } | undefined;
                        EquityDetails?: {
                            ExchangeTickerSymbol?: string | undefined;
                            Exchange?: string | undefined;
                            MinTransactionAmount?: string | undefined;
                            ExtraPercentage?: string | undefined;
                            AssetMarginPercentage?: string | undefined;
                        } | undefined;
                        FinancialProperties?: {
                            Symbol?: string | undefined;
                            Issuer?: string | undefined;
                            JurisdictionIDs?: string[] | undefined;
                            JurisdictionRestrictions?: string | undefined;
                            RedemptionTerms?: string | undefined;
                            ComplianceRequired?: boolean | undefined;
                            Type?: string | undefined;
                            TradeAllowances?: string[] | undefined;
                            Transferable?: boolean | undefined;
                            Platform?: string | undefined;
                            PlatformType?: string | undefined;
                            ContractAddress?: string | undefined;
                            Fractional?: boolean | undefined;
                            TotalSupply?: number | undefined;
                            DecimalPlacesSupply?: number | undefined;
                            Subunit?: string | undefined;
                            Price?: number | undefined;
                            DecimalPlacesPrice?: number | undefined;
                            Currency?: string | undefined;
                            InitialValuation?: number | undefined;
                            CurrentValuation?: number | undefined;
                            ValuationDate?: string | undefined;
                            Network?: Network | undefined;
                            Status?: string | undefined;
                        } | undefined;
                        Description?: {
                            Name?: string | undefined;
                            Description?: string | undefined;
                            Logo?: {
                                Reference?: string | undefined;
                                Extension?: string | undefined;
                                Name?: string | undefined;
                            } | undefined;
                            AssetID?: string | undefined;
                            URL?: string | undefined;
                            Country?: string | undefined;
                            Documents?: string[] | undefined;
                            Images?: string[] | undefined;
                            Vertical?: string | undefined;
                            CreatedAt?: string | undefined;
                            UpdatedAt?: string | undefined;
                        } | undefined;
                        ExternalResources?: {
                            Links?: {
                                Type?: import("./sologenic/com-fs-asset-model/asset").LinkType | undefined;
                                URL?: string | undefined;
                            }[] | undefined;
                            Socials?: {
                                Type?: import("./sologenic/com-fs-asset-model/asset").SocialMediaType | undefined;
                                URL?: string | undefined;
                            }[] | undefined;
                        } | undefined;
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
                    IssuerDetails?: {
                        Name?: string | undefined;
                        Description?: string | undefined;
                        Image?: string | undefined;
                        ExternalUrl?: string | undefined;
                        AddressLine1?: string | undefined;
                        AddressLine2?: string | undefined;
                        City?: string | undefined;
                        Region?: string | undefined;
                        PostalCode?: string | undefined;
                        Country?: string | undefined;
                        YearFounded?: number | undefined;
                        Licensed?: boolean | undefined;
                        LicenseCountry?: string | undefined;
                        LicenseNumber?: string | undefined;
                        Phone?: string | undefined;
                        Email?: string | undefined;
                        SocialMediaLinks?: string[] | undefined;
                        KeyClients?: string | undefined;
                        Press?: string | undefined;
                    } | undefined;
                }[] | undefined;
            } & {
                DynamicAssetID?: string | undefined;
                Title?: string | undefined;
                Description?: string | undefined;
                Identifier?: string | undefined;
                OrganizationID?: string | undefined;
                Assets?: ({
                    AssetDetails?: {
                        ID?: string | undefined;
                        OrganizationID?: string | undefined;
                        Status?: import("./sologenic/com-fs-asset-model/asset").AssetStatus | undefined;
                        Reason?: import("./sologenic/com-fs-asset-model/asset").Reason | undefined;
                        Type?: import("./sologenic/com-fs-asset-model/asset").AssetType | undefined;
                        Denom?: {
                            Currency?: {
                                Symbol?: string | undefined;
                                Version?: string | undefined;
                            } | undefined;
                            Subunit?: string | undefined;
                            Issuer?: string | undefined;
                            Precision?: number | undefined;
                            Description?: string | undefined;
                        } | undefined;
                        IsIssuedInSmartContract?: boolean | undefined;
                        SmartContractIssuerAddr?: string | undefined;
                        RealEstateDetails?: {
                            Address?: string | undefined;
                            Bathrooms?: number | undefined;
                            Bedrooms?: number | undefined;
                            Latitude?: number | undefined;
                            Longitude?: number | undefined;
                            OwnershipType?: string | undefined;
                            PropertyType?: string | undefined;
                            RiskRating?: string | undefined;
                            SquareFootage?: number | undefined;
                            TenancyStatus?: string | undefined;
                            YearBuilt?: number | undefined;
                            YieldPercent?: number[] | undefined;
                        } | undefined;
                        StableCoinDetails?: {
                            Version?: string | undefined;
                            PegType?: string | undefined;
                            PegRatio?: number | undefined;
                            BackingAsset?: string | undefined;
                            ExchangeTickerSymbol?: string | undefined;
                            Exchange?: string | undefined;
                            MinTransactionAmount?: number | undefined;
                            TradingMarginPercentage?: number | undefined;
                            AssetMarginPercentage?: number | undefined;
                        } | undefined;
                        CommodityDetails?: {
                            Category?: string | undefined;
                            Quality?: string | undefined;
                            UnitOfMeasure?: string | undefined;
                            Quantity?: number | undefined;
                            OriginCountry?: string | undefined;
                            ExchangeTickerSymbol?: string | undefined;
                            Exchange?: string | undefined;
                            MinTransactionAmount?: number | undefined;
                            StorageLocation?: string | undefined;
                            ContractType?: string | undefined;
                            DeliveryDate?: string | undefined;
                        } | undefined;
                        CollectibleDetails?: {
                            Category?: string | undefined;
                            CollectionName?: string | undefined;
                            TokenStandard?: string | undefined;
                            TokenID?: string | undefined;
                            MetadataURI?: string | undefined;
                            Creator?: string | undefined;
                            OwnershipHistory?: string[] | undefined;
                            CurrentOwner?: string | undefined;
                        } | undefined;
                        VehicleDetails?: {
                            Category?: string | undefined;
                            Manufacturer?: string | undefined;
                            Model?: string | undefined;
                            SerialNumber?: string | undefined;
                            Year?: number | undefined;
                            Specifications?: string | undefined;
                            FuelType?: string | undefined;
                            UsageHours?: number | undefined;
                            Mileage?: number | undefined;
                            Condition?: string | undefined;
                            CurrentOwner?: string | undefined;
                            Location?: string | undefined;
                        } | undefined;
                        IntellectualPropertyDetails?: {
                            Category?: string | undefined;
                            Owner?: string | undefined;
                            RegistrationNumber?: string | undefined;
                            FilingDate?: string | undefined;
                            ExpirationDate?: string | undefined;
                            IPJurisdictionIDs?: string[] | undefined;
                            LicenseType?: string | undefined;
                            LicenseTerms?: string | undefined;
                            Value?: number | undefined;
                        } | undefined;
                        InvestmentFundDetails?: {
                            FundType?: string | undefined;
                            Exchange?: string | undefined;
                            ISIN?: string | undefined;
                            NAV?: number | undefined;
                            InceptionDate?: string | undefined;
                            Manager?: string | undefined;
                            ExpenseRatio?: number | undefined;
                            Holdings?: string[] | undefined;
                        } | undefined;
                        EquityDetails?: {
                            ExchangeTickerSymbol?: string | undefined;
                            Exchange?: string | undefined;
                            MinTransactionAmount?: string | undefined;
                            ExtraPercentage?: string | undefined;
                            AssetMarginPercentage?: string | undefined;
                        } | undefined;
                        FinancialProperties?: {
                            Symbol?: string | undefined;
                            Issuer?: string | undefined;
                            JurisdictionIDs?: string[] | undefined;
                            JurisdictionRestrictions?: string | undefined;
                            RedemptionTerms?: string | undefined;
                            ComplianceRequired?: boolean | undefined;
                            Type?: string | undefined;
                            TradeAllowances?: string[] | undefined;
                            Transferable?: boolean | undefined;
                            Platform?: string | undefined;
                            PlatformType?: string | undefined;
                            ContractAddress?: string | undefined;
                            Fractional?: boolean | undefined;
                            TotalSupply?: number | undefined;
                            DecimalPlacesSupply?: number | undefined;
                            Subunit?: string | undefined;
                            Price?: number | undefined;
                            DecimalPlacesPrice?: number | undefined;
                            Currency?: string | undefined;
                            InitialValuation?: number | undefined;
                            CurrentValuation?: number | undefined;
                            ValuationDate?: string | undefined;
                            Network?: Network | undefined;
                            Status?: string | undefined;
                        } | undefined;
                        Description?: {
                            Name?: string | undefined;
                            Description?: string | undefined;
                            Logo?: {
                                Reference?: string | undefined;
                                Extension?: string | undefined;
                                Name?: string | undefined;
                            } | undefined;
                            AssetID?: string | undefined;
                            URL?: string | undefined;
                            Country?: string | undefined;
                            Documents?: string[] | undefined;
                            Images?: string[] | undefined;
                            Vertical?: string | undefined;
                            CreatedAt?: string | undefined;
                            UpdatedAt?: string | undefined;
                        } | undefined;
                        ExternalResources?: {
                            Links?: {
                                Type?: import("./sologenic/com-fs-asset-model/asset").LinkType | undefined;
                                URL?: string | undefined;
                            }[] | undefined;
                            Socials?: {
                                Type?: import("./sologenic/com-fs-asset-model/asset").SocialMediaType | undefined;
                                URL?: string | undefined;
                            }[] | undefined;
                        } | undefined;
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
                    IssuerDetails?: {
                        Name?: string | undefined;
                        Description?: string | undefined;
                        Image?: string | undefined;
                        ExternalUrl?: string | undefined;
                        AddressLine1?: string | undefined;
                        AddressLine2?: string | undefined;
                        City?: string | undefined;
                        Region?: string | undefined;
                        PostalCode?: string | undefined;
                        Country?: string | undefined;
                        YearFounded?: number | undefined;
                        Licensed?: boolean | undefined;
                        LicenseCountry?: string | undefined;
                        LicenseNumber?: string | undefined;
                        Phone?: string | undefined;
                        Email?: string | undefined;
                        SocialMediaLinks?: string[] | undefined;
                        KeyClients?: string | undefined;
                        Press?: string | undefined;
                    } | undefined;
                }[] & ({
                    AssetDetails?: {
                        ID?: string | undefined;
                        OrganizationID?: string | undefined;
                        Status?: import("./sologenic/com-fs-asset-model/asset").AssetStatus | undefined;
                        Reason?: import("./sologenic/com-fs-asset-model/asset").Reason | undefined;
                        Type?: import("./sologenic/com-fs-asset-model/asset").AssetType | undefined;
                        Denom?: {
                            Currency?: {
                                Symbol?: string | undefined;
                                Version?: string | undefined;
                            } | undefined;
                            Subunit?: string | undefined;
                            Issuer?: string | undefined;
                            Precision?: number | undefined;
                            Description?: string | undefined;
                        } | undefined;
                        IsIssuedInSmartContract?: boolean | undefined;
                        SmartContractIssuerAddr?: string | undefined;
                        RealEstateDetails?: {
                            Address?: string | undefined;
                            Bathrooms?: number | undefined;
                            Bedrooms?: number | undefined;
                            Latitude?: number | undefined;
                            Longitude?: number | undefined;
                            OwnershipType?: string | undefined;
                            PropertyType?: string | undefined;
                            RiskRating?: string | undefined;
                            SquareFootage?: number | undefined;
                            TenancyStatus?: string | undefined;
                            YearBuilt?: number | undefined;
                            YieldPercent?: number[] | undefined;
                        } | undefined;
                        StableCoinDetails?: {
                            Version?: string | undefined;
                            PegType?: string | undefined;
                            PegRatio?: number | undefined;
                            BackingAsset?: string | undefined;
                            ExchangeTickerSymbol?: string | undefined;
                            Exchange?: string | undefined;
                            MinTransactionAmount?: number | undefined;
                            TradingMarginPercentage?: number | undefined;
                            AssetMarginPercentage?: number | undefined;
                        } | undefined;
                        CommodityDetails?: {
                            Category?: string | undefined;
                            Quality?: string | undefined;
                            UnitOfMeasure?: string | undefined;
                            Quantity?: number | undefined;
                            OriginCountry?: string | undefined;
                            ExchangeTickerSymbol?: string | undefined;
                            Exchange?: string | undefined;
                            MinTransactionAmount?: number | undefined;
                            StorageLocation?: string | undefined;
                            ContractType?: string | undefined;
                            DeliveryDate?: string | undefined;
                        } | undefined;
                        CollectibleDetails?: {
                            Category?: string | undefined;
                            CollectionName?: string | undefined;
                            TokenStandard?: string | undefined;
                            TokenID?: string | undefined;
                            MetadataURI?: string | undefined;
                            Creator?: string | undefined;
                            OwnershipHistory?: string[] | undefined;
                            CurrentOwner?: string | undefined;
                        } | undefined;
                        VehicleDetails?: {
                            Category?: string | undefined;
                            Manufacturer?: string | undefined;
                            Model?: string | undefined;
                            SerialNumber?: string | undefined;
                            Year?: number | undefined;
                            Specifications?: string | undefined;
                            FuelType?: string | undefined;
                            UsageHours?: number | undefined;
                            Mileage?: number | undefined;
                            Condition?: string | undefined;
                            CurrentOwner?: string | undefined;
                            Location?: string | undefined;
                        } | undefined;
                        IntellectualPropertyDetails?: {
                            Category?: string | undefined;
                            Owner?: string | undefined;
                            RegistrationNumber?: string | undefined;
                            FilingDate?: string | undefined;
                            ExpirationDate?: string | undefined;
                            IPJurisdictionIDs?: string[] | undefined;
                            LicenseType?: string | undefined;
                            LicenseTerms?: string | undefined;
                            Value?: number | undefined;
                        } | undefined;
                        InvestmentFundDetails?: {
                            FundType?: string | undefined;
                            Exchange?: string | undefined;
                            ISIN?: string | undefined;
                            NAV?: number | undefined;
                            InceptionDate?: string | undefined;
                            Manager?: string | undefined;
                            ExpenseRatio?: number | undefined;
                            Holdings?: string[] | undefined;
                        } | undefined;
                        EquityDetails?: {
                            ExchangeTickerSymbol?: string | undefined;
                            Exchange?: string | undefined;
                            MinTransactionAmount?: string | undefined;
                            ExtraPercentage?: string | undefined;
                            AssetMarginPercentage?: string | undefined;
                        } | undefined;
                        FinancialProperties?: {
                            Symbol?: string | undefined;
                            Issuer?: string | undefined;
                            JurisdictionIDs?: string[] | undefined;
                            JurisdictionRestrictions?: string | undefined;
                            RedemptionTerms?: string | undefined;
                            ComplianceRequired?: boolean | undefined;
                            Type?: string | undefined;
                            TradeAllowances?: string[] | undefined;
                            Transferable?: boolean | undefined;
                            Platform?: string | undefined;
                            PlatformType?: string | undefined;
                            ContractAddress?: string | undefined;
                            Fractional?: boolean | undefined;
                            TotalSupply?: number | undefined;
                            DecimalPlacesSupply?: number | undefined;
                            Subunit?: string | undefined;
                            Price?: number | undefined;
                            DecimalPlacesPrice?: number | undefined;
                            Currency?: string | undefined;
                            InitialValuation?: number | undefined;
                            CurrentValuation?: number | undefined;
                            ValuationDate?: string | undefined;
                            Network?: Network | undefined;
                            Status?: string | undefined;
                        } | undefined;
                        Description?: {
                            Name?: string | undefined;
                            Description?: string | undefined;
                            Logo?: {
                                Reference?: string | undefined;
                                Extension?: string | undefined;
                                Name?: string | undefined;
                            } | undefined;
                            AssetID?: string | undefined;
                            URL?: string | undefined;
                            Country?: string | undefined;
                            Documents?: string[] | undefined;
                            Images?: string[] | undefined;
                            Vertical?: string | undefined;
                            CreatedAt?: string | undefined;
                            UpdatedAt?: string | undefined;
                        } | undefined;
                        ExternalResources?: {
                            Links?: {
                                Type?: import("./sologenic/com-fs-asset-model/asset").LinkType | undefined;
                                URL?: string | undefined;
                            }[] | undefined;
                            Socials?: {
                                Type?: import("./sologenic/com-fs-asset-model/asset").SocialMediaType | undefined;
                                URL?: string | undefined;
                            }[] | undefined;
                        } | undefined;
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
                    IssuerDetails?: {
                        Name?: string | undefined;
                        Description?: string | undefined;
                        Image?: string | undefined;
                        ExternalUrl?: string | undefined;
                        AddressLine1?: string | undefined;
                        AddressLine2?: string | undefined;
                        City?: string | undefined;
                        Region?: string | undefined;
                        PostalCode?: string | undefined;
                        Country?: string | undefined;
                        YearFounded?: number | undefined;
                        Licensed?: boolean | undefined;
                        LicenseCountry?: string | undefined;
                        LicenseNumber?: string | undefined;
                        Phone?: string | undefined;
                        Email?: string | undefined;
                        SocialMediaLinks?: string[] | undefined;
                        KeyClients?: string | undefined;
                        Press?: string | undefined;
                    } | undefined;
                } & {
                    AssetDetails?: ({
                        ID?: string | undefined;
                        OrganizationID?: string | undefined;
                        Status?: import("./sologenic/com-fs-asset-model/asset").AssetStatus | undefined;
                        Reason?: import("./sologenic/com-fs-asset-model/asset").Reason | undefined;
                        Type?: import("./sologenic/com-fs-asset-model/asset").AssetType | undefined;
                        Denom?: {
                            Currency?: {
                                Symbol?: string | undefined;
                                Version?: string | undefined;
                            } | undefined;
                            Subunit?: string | undefined;
                            Issuer?: string | undefined;
                            Precision?: number | undefined;
                            Description?: string | undefined;
                        } | undefined;
                        IsIssuedInSmartContract?: boolean | undefined;
                        SmartContractIssuerAddr?: string | undefined;
                        RealEstateDetails?: {
                            Address?: string | undefined;
                            Bathrooms?: number | undefined;
                            Bedrooms?: number | undefined;
                            Latitude?: number | undefined;
                            Longitude?: number | undefined;
                            OwnershipType?: string | undefined;
                            PropertyType?: string | undefined;
                            RiskRating?: string | undefined;
                            SquareFootage?: number | undefined;
                            TenancyStatus?: string | undefined;
                            YearBuilt?: number | undefined;
                            YieldPercent?: number[] | undefined;
                        } | undefined;
                        StableCoinDetails?: {
                            Version?: string | undefined;
                            PegType?: string | undefined;
                            PegRatio?: number | undefined;
                            BackingAsset?: string | undefined;
                            ExchangeTickerSymbol?: string | undefined;
                            Exchange?: string | undefined;
                            MinTransactionAmount?: number | undefined;
                            TradingMarginPercentage?: number | undefined;
                            AssetMarginPercentage?: number | undefined;
                        } | undefined;
                        CommodityDetails?: {
                            Category?: string | undefined;
                            Quality?: string | undefined;
                            UnitOfMeasure?: string | undefined;
                            Quantity?: number | undefined;
                            OriginCountry?: string | undefined;
                            ExchangeTickerSymbol?: string | undefined;
                            Exchange?: string | undefined;
                            MinTransactionAmount?: number | undefined;
                            StorageLocation?: string | undefined;
                            ContractType?: string | undefined;
                            DeliveryDate?: string | undefined;
                        } | undefined;
                        CollectibleDetails?: {
                            Category?: string | undefined;
                            CollectionName?: string | undefined;
                            TokenStandard?: string | undefined;
                            TokenID?: string | undefined;
                            MetadataURI?: string | undefined;
                            Creator?: string | undefined;
                            OwnershipHistory?: string[] | undefined;
                            CurrentOwner?: string | undefined;
                        } | undefined;
                        VehicleDetails?: {
                            Category?: string | undefined;
                            Manufacturer?: string | undefined;
                            Model?: string | undefined;
                            SerialNumber?: string | undefined;
                            Year?: number | undefined;
                            Specifications?: string | undefined;
                            FuelType?: string | undefined;
                            UsageHours?: number | undefined;
                            Mileage?: number | undefined;
                            Condition?: string | undefined;
                            CurrentOwner?: string | undefined;
                            Location?: string | undefined;
                        } | undefined;
                        IntellectualPropertyDetails?: {
                            Category?: string | undefined;
                            Owner?: string | undefined;
                            RegistrationNumber?: string | undefined;
                            FilingDate?: string | undefined;
                            ExpirationDate?: string | undefined;
                            IPJurisdictionIDs?: string[] | undefined;
                            LicenseType?: string | undefined;
                            LicenseTerms?: string | undefined;
                            Value?: number | undefined;
                        } | undefined;
                        InvestmentFundDetails?: {
                            FundType?: string | undefined;
                            Exchange?: string | undefined;
                            ISIN?: string | undefined;
                            NAV?: number | undefined;
                            InceptionDate?: string | undefined;
                            Manager?: string | undefined;
                            ExpenseRatio?: number | undefined;
                            Holdings?: string[] | undefined;
                        } | undefined;
                        EquityDetails?: {
                            ExchangeTickerSymbol?: string | undefined;
                            Exchange?: string | undefined;
                            MinTransactionAmount?: string | undefined;
                            ExtraPercentage?: string | undefined;
                            AssetMarginPercentage?: string | undefined;
                        } | undefined;
                        FinancialProperties?: {
                            Symbol?: string | undefined;
                            Issuer?: string | undefined;
                            JurisdictionIDs?: string[] | undefined;
                            JurisdictionRestrictions?: string | undefined;
                            RedemptionTerms?: string | undefined;
                            ComplianceRequired?: boolean | undefined;
                            Type?: string | undefined;
                            TradeAllowances?: string[] | undefined;
                            Transferable?: boolean | undefined;
                            Platform?: string | undefined;
                            PlatformType?: string | undefined;
                            ContractAddress?: string | undefined;
                            Fractional?: boolean | undefined;
                            TotalSupply?: number | undefined;
                            DecimalPlacesSupply?: number | undefined;
                            Subunit?: string | undefined;
                            Price?: number | undefined;
                            DecimalPlacesPrice?: number | undefined;
                            Currency?: string | undefined;
                            InitialValuation?: number | undefined;
                            CurrentValuation?: number | undefined;
                            ValuationDate?: string | undefined;
                            Network?: Network | undefined;
                            Status?: string | undefined;
                        } | undefined;
                        Description?: {
                            Name?: string | undefined;
                            Description?: string | undefined;
                            Logo?: {
                                Reference?: string | undefined;
                                Extension?: string | undefined;
                                Name?: string | undefined;
                            } | undefined;
                            AssetID?: string | undefined;
                            URL?: string | undefined;
                            Country?: string | undefined;
                            Documents?: string[] | undefined;
                            Images?: string[] | undefined;
                            Vertical?: string | undefined;
                            CreatedAt?: string | undefined;
                            UpdatedAt?: string | undefined;
                        } | undefined;
                        ExternalResources?: {
                            Links?: {
                                Type?: import("./sologenic/com-fs-asset-model/asset").LinkType | undefined;
                                URL?: string | undefined;
                            }[] | undefined;
                            Socials?: {
                                Type?: import("./sologenic/com-fs-asset-model/asset").SocialMediaType | undefined;
                                URL?: string | undefined;
                            }[] | undefined;
                        } | undefined;
                    } & {
                        ID?: string | undefined;
                        OrganizationID?: string | undefined;
                        Status?: import("./sologenic/com-fs-asset-model/asset").AssetStatus | undefined;
                        Reason?: import("./sologenic/com-fs-asset-model/asset").Reason | undefined;
                        Type?: import("./sologenic/com-fs-asset-model/asset").AssetType | undefined;
                        Denom?: ({
                            Currency?: {
                                Symbol?: string | undefined;
                                Version?: string | undefined;
                            } | undefined;
                            Subunit?: string | undefined;
                            Issuer?: string | undefined;
                            Precision?: number | undefined;
                            Description?: string | undefined;
                        } & {
                            Currency?: ({
                                Symbol?: string | undefined;
                                Version?: string | undefined;
                            } & {
                                Symbol?: string | undefined;
                                Version?: string | undefined;
                            } & { [K_39 in Exclude<keyof I_1["DynamicAssets"][number]["DynamicAsset"]["Assets"][number]["AssetDetails"]["Denom"]["Currency"], keyof import("./sologenic/com-fs-asset-model/domain/currency/currency").Currency>]: never; }) | undefined;
                            Subunit?: string | undefined;
                            Issuer?: string | undefined;
                            Precision?: number | undefined;
                            Description?: string | undefined;
                        } & { [K_40 in Exclude<keyof I_1["DynamicAssets"][number]["DynamicAsset"]["Assets"][number]["AssetDetails"]["Denom"], keyof import("./sologenic/com-fs-asset-model/domain/denom/denom").Denom>]: never; }) | undefined;
                        IsIssuedInSmartContract?: boolean | undefined;
                        SmartContractIssuerAddr?: string | undefined;
                        RealEstateDetails?: ({
                            Address?: string | undefined;
                            Bathrooms?: number | undefined;
                            Bedrooms?: number | undefined;
                            Latitude?: number | undefined;
                            Longitude?: number | undefined;
                            OwnershipType?: string | undefined;
                            PropertyType?: string | undefined;
                            RiskRating?: string | undefined;
                            SquareFootage?: number | undefined;
                            TenancyStatus?: string | undefined;
                            YearBuilt?: number | undefined;
                            YieldPercent?: number[] | undefined;
                        } & {
                            Address?: string | undefined;
                            Bathrooms?: number | undefined;
                            Bedrooms?: number | undefined;
                            Latitude?: number | undefined;
                            Longitude?: number | undefined;
                            OwnershipType?: string | undefined;
                            PropertyType?: string | undefined;
                            RiskRating?: string | undefined;
                            SquareFootage?: number | undefined;
                            TenancyStatus?: string | undefined;
                            YearBuilt?: number | undefined;
                            YieldPercent?: (number[] & number[] & { [K_41 in Exclude<keyof I_1["DynamicAssets"][number]["DynamicAsset"]["Assets"][number]["AssetDetails"]["RealEstateDetails"]["YieldPercent"], keyof number[]>]: never; }) | undefined;
                        } & { [K_42 in Exclude<keyof I_1["DynamicAssets"][number]["DynamicAsset"]["Assets"][number]["AssetDetails"]["RealEstateDetails"], keyof import("./sologenic/com-fs-asset-model/asset").RealEstate>]: never; }) | undefined;
                        StableCoinDetails?: ({
                            Version?: string | undefined;
                            PegType?: string | undefined;
                            PegRatio?: number | undefined;
                            BackingAsset?: string | undefined;
                            ExchangeTickerSymbol?: string | undefined;
                            Exchange?: string | undefined;
                            MinTransactionAmount?: number | undefined;
                            TradingMarginPercentage?: number | undefined;
                            AssetMarginPercentage?: number | undefined;
                        } & {
                            Version?: string | undefined;
                            PegType?: string | undefined;
                            PegRatio?: number | undefined;
                            BackingAsset?: string | undefined;
                            ExchangeTickerSymbol?: string | undefined;
                            Exchange?: string | undefined;
                            MinTransactionAmount?: number | undefined;
                            TradingMarginPercentage?: number | undefined;
                            AssetMarginPercentage?: number | undefined;
                        } & { [K_43 in Exclude<keyof I_1["DynamicAssets"][number]["DynamicAsset"]["Assets"][number]["AssetDetails"]["StableCoinDetails"], keyof import("./sologenic/com-fs-asset-model/asset").StableCoin>]: never; }) | undefined;
                        CommodityDetails?: ({
                            Category?: string | undefined;
                            Quality?: string | undefined;
                            UnitOfMeasure?: string | undefined;
                            Quantity?: number | undefined;
                            OriginCountry?: string | undefined;
                            ExchangeTickerSymbol?: string | undefined;
                            Exchange?: string | undefined;
                            MinTransactionAmount?: number | undefined;
                            StorageLocation?: string | undefined;
                            ContractType?: string | undefined;
                            DeliveryDate?: string | undefined;
                        } & {
                            Category?: string | undefined;
                            Quality?: string | undefined;
                            UnitOfMeasure?: string | undefined;
                            Quantity?: number | undefined;
                            OriginCountry?: string | undefined;
                            ExchangeTickerSymbol?: string | undefined;
                            Exchange?: string | undefined;
                            MinTransactionAmount?: number | undefined;
                            StorageLocation?: string | undefined;
                            ContractType?: string | undefined;
                            DeliveryDate?: string | undefined;
                        } & { [K_44 in Exclude<keyof I_1["DynamicAssets"][number]["DynamicAsset"]["Assets"][number]["AssetDetails"]["CommodityDetails"], keyof import("./sologenic/com-fs-asset-model/asset").Commodity>]: never; }) | undefined;
                        CollectibleDetails?: ({
                            Category?: string | undefined;
                            CollectionName?: string | undefined;
                            TokenStandard?: string | undefined;
                            TokenID?: string | undefined;
                            MetadataURI?: string | undefined;
                            Creator?: string | undefined;
                            OwnershipHistory?: string[] | undefined;
                            CurrentOwner?: string | undefined;
                        } & {
                            Category?: string | undefined;
                            CollectionName?: string | undefined;
                            TokenStandard?: string | undefined;
                            TokenID?: string | undefined;
                            MetadataURI?: string | undefined;
                            Creator?: string | undefined;
                            OwnershipHistory?: (string[] & string[] & { [K_45 in Exclude<keyof I_1["DynamicAssets"][number]["DynamicAsset"]["Assets"][number]["AssetDetails"]["CollectibleDetails"]["OwnershipHistory"], keyof string[]>]: never; }) | undefined;
                            CurrentOwner?: string | undefined;
                        } & { [K_46 in Exclude<keyof I_1["DynamicAssets"][number]["DynamicAsset"]["Assets"][number]["AssetDetails"]["CollectibleDetails"], keyof import("./sologenic/com-fs-asset-model/asset").Collectible>]: never; }) | undefined;
                        VehicleDetails?: ({
                            Category?: string | undefined;
                            Manufacturer?: string | undefined;
                            Model?: string | undefined;
                            SerialNumber?: string | undefined;
                            Year?: number | undefined;
                            Specifications?: string | undefined;
                            FuelType?: string | undefined;
                            UsageHours?: number | undefined;
                            Mileage?: number | undefined;
                            Condition?: string | undefined;
                            CurrentOwner?: string | undefined;
                            Location?: string | undefined;
                        } & {
                            Category?: string | undefined;
                            Manufacturer?: string | undefined;
                            Model?: string | undefined;
                            SerialNumber?: string | undefined;
                            Year?: number | undefined;
                            Specifications?: string | undefined;
                            FuelType?: string | undefined;
                            UsageHours?: number | undefined;
                            Mileage?: number | undefined;
                            Condition?: string | undefined;
                            CurrentOwner?: string | undefined;
                            Location?: string | undefined;
                        } & { [K_47 in Exclude<keyof I_1["DynamicAssets"][number]["DynamicAsset"]["Assets"][number]["AssetDetails"]["VehicleDetails"], keyof import("./sologenic/com-fs-asset-model/asset").Vehicle>]: never; }) | undefined;
                        IntellectualPropertyDetails?: ({
                            Category?: string | undefined;
                            Owner?: string | undefined;
                            RegistrationNumber?: string | undefined;
                            FilingDate?: string | undefined;
                            ExpirationDate?: string | undefined;
                            IPJurisdictionIDs?: string[] | undefined;
                            LicenseType?: string | undefined;
                            LicenseTerms?: string | undefined;
                            Value?: number | undefined;
                        } & {
                            Category?: string | undefined;
                            Owner?: string | undefined;
                            RegistrationNumber?: string | undefined;
                            FilingDate?: string | undefined;
                            ExpirationDate?: string | undefined;
                            IPJurisdictionIDs?: (string[] & string[] & { [K_48 in Exclude<keyof I_1["DynamicAssets"][number]["DynamicAsset"]["Assets"][number]["AssetDetails"]["IntellectualPropertyDetails"]["IPJurisdictionIDs"], keyof string[]>]: never; }) | undefined;
                            LicenseType?: string | undefined;
                            LicenseTerms?: string | undefined;
                            Value?: number | undefined;
                        } & { [K_49 in Exclude<keyof I_1["DynamicAssets"][number]["DynamicAsset"]["Assets"][number]["AssetDetails"]["IntellectualPropertyDetails"], keyof import("./sologenic/com-fs-asset-model/asset").IntellectualProperty>]: never; }) | undefined;
                        InvestmentFundDetails?: ({
                            FundType?: string | undefined;
                            Exchange?: string | undefined;
                            ISIN?: string | undefined;
                            NAV?: number | undefined;
                            InceptionDate?: string | undefined;
                            Manager?: string | undefined;
                            ExpenseRatio?: number | undefined;
                            Holdings?: string[] | undefined;
                        } & {
                            FundType?: string | undefined;
                            Exchange?: string | undefined;
                            ISIN?: string | undefined;
                            NAV?: number | undefined;
                            InceptionDate?: string | undefined;
                            Manager?: string | undefined;
                            ExpenseRatio?: number | undefined;
                            Holdings?: (string[] & string[] & { [K_50 in Exclude<keyof I_1["DynamicAssets"][number]["DynamicAsset"]["Assets"][number]["AssetDetails"]["InvestmentFundDetails"]["Holdings"], keyof string[]>]: never; }) | undefined;
                        } & { [K_51 in Exclude<keyof I_1["DynamicAssets"][number]["DynamicAsset"]["Assets"][number]["AssetDetails"]["InvestmentFundDetails"], keyof import("./sologenic/com-fs-asset-model/asset").InvestmentFund>]: never; }) | undefined;
                        EquityDetails?: ({
                            ExchangeTickerSymbol?: string | undefined;
                            Exchange?: string | undefined;
                            MinTransactionAmount?: string | undefined;
                            ExtraPercentage?: string | undefined;
                            AssetMarginPercentage?: string | undefined;
                        } & {
                            ExchangeTickerSymbol?: string | undefined;
                            Exchange?: string | undefined;
                            MinTransactionAmount?: string | undefined;
                            ExtraPercentage?: string | undefined;
                            AssetMarginPercentage?: string | undefined;
                        } & { [K_52 in Exclude<keyof I_1["DynamicAssets"][number]["DynamicAsset"]["Assets"][number]["AssetDetails"]["EquityDetails"], keyof import("./sologenic/com-fs-asset-model/asset").Equity>]: never; }) | undefined;
                        FinancialProperties?: ({
                            Symbol?: string | undefined;
                            Issuer?: string | undefined;
                            JurisdictionIDs?: string[] | undefined;
                            JurisdictionRestrictions?: string | undefined;
                            RedemptionTerms?: string | undefined;
                            ComplianceRequired?: boolean | undefined;
                            Type?: string | undefined;
                            TradeAllowances?: string[] | undefined;
                            Transferable?: boolean | undefined;
                            Platform?: string | undefined;
                            PlatformType?: string | undefined;
                            ContractAddress?: string | undefined;
                            Fractional?: boolean | undefined;
                            TotalSupply?: number | undefined;
                            DecimalPlacesSupply?: number | undefined;
                            Subunit?: string | undefined;
                            Price?: number | undefined;
                            DecimalPlacesPrice?: number | undefined;
                            Currency?: string | undefined;
                            InitialValuation?: number | undefined;
                            CurrentValuation?: number | undefined;
                            ValuationDate?: string | undefined;
                            Network?: Network | undefined;
                            Status?: string | undefined;
                        } & {
                            Symbol?: string | undefined;
                            Issuer?: string | undefined;
                            JurisdictionIDs?: (string[] & string[] & { [K_53 in Exclude<keyof I_1["DynamicAssets"][number]["DynamicAsset"]["Assets"][number]["AssetDetails"]["FinancialProperties"]["JurisdictionIDs"], keyof string[]>]: never; }) | undefined;
                            JurisdictionRestrictions?: string | undefined;
                            RedemptionTerms?: string | undefined;
                            ComplianceRequired?: boolean | undefined;
                            Type?: string | undefined;
                            TradeAllowances?: (string[] & string[] & { [K_54 in Exclude<keyof I_1["DynamicAssets"][number]["DynamicAsset"]["Assets"][number]["AssetDetails"]["FinancialProperties"]["TradeAllowances"], keyof string[]>]: never; }) | undefined;
                            Transferable?: boolean | undefined;
                            Platform?: string | undefined;
                            PlatformType?: string | undefined;
                            ContractAddress?: string | undefined;
                            Fractional?: boolean | undefined;
                            TotalSupply?: number | undefined;
                            DecimalPlacesSupply?: number | undefined;
                            Subunit?: string | undefined;
                            Price?: number | undefined;
                            DecimalPlacesPrice?: number | undefined;
                            Currency?: string | undefined;
                            InitialValuation?: number | undefined;
                            CurrentValuation?: number | undefined;
                            ValuationDate?: string | undefined;
                            Network?: Network | undefined;
                            Status?: string | undefined;
                        } & { [K_55 in Exclude<keyof I_1["DynamicAssets"][number]["DynamicAsset"]["Assets"][number]["AssetDetails"]["FinancialProperties"], keyof import("./sologenic/com-fs-asset-model/asset").FinancialProperties>]: never; }) | undefined;
                        Description?: ({
                            Name?: string | undefined;
                            Description?: string | undefined;
                            Logo?: {
                                Reference?: string | undefined;
                                Extension?: string | undefined;
                                Name?: string | undefined;
                            } | undefined;
                            AssetID?: string | undefined;
                            URL?: string | undefined;
                            Country?: string | undefined;
                            Documents?: string[] | undefined;
                            Images?: string[] | undefined;
                            Vertical?: string | undefined;
                            CreatedAt?: string | undefined;
                            UpdatedAt?: string | undefined;
                        } & {
                            Name?: string | undefined;
                            Description?: string | undefined;
                            Logo?: ({
                                Reference?: string | undefined;
                                Extension?: string | undefined;
                                Name?: string | undefined;
                            } & {
                                Reference?: string | undefined;
                                Extension?: string | undefined;
                                Name?: string | undefined;
                            } & { [K_56 in Exclude<keyof I_1["DynamicAssets"][number]["DynamicAsset"]["Assets"][number]["AssetDetails"]["Description"]["Logo"], keyof import("./sologenic/com-fs-asset-model/asset").LogoFile>]: never; }) | undefined;
                            AssetID?: string | undefined;
                            URL?: string | undefined;
                            Country?: string | undefined;
                            Documents?: (string[] & string[] & { [K_57 in Exclude<keyof I_1["DynamicAssets"][number]["DynamicAsset"]["Assets"][number]["AssetDetails"]["Description"]["Documents"], keyof string[]>]: never; }) | undefined;
                            Images?: (string[] & string[] & { [K_58 in Exclude<keyof I_1["DynamicAssets"][number]["DynamicAsset"]["Assets"][number]["AssetDetails"]["Description"]["Images"], keyof string[]>]: never; }) | undefined;
                            Vertical?: string | undefined;
                            CreatedAt?: string | undefined;
                            UpdatedAt?: string | undefined;
                        } & { [K_59 in Exclude<keyof I_1["DynamicAssets"][number]["DynamicAsset"]["Assets"][number]["AssetDetails"]["Description"], keyof import("./sologenic/com-fs-asset-model/asset").Description>]: never; }) | undefined;
                        ExternalResources?: ({
                            Links?: {
                                Type?: import("./sologenic/com-fs-asset-model/asset").LinkType | undefined;
                                URL?: string | undefined;
                            }[] | undefined;
                            Socials?: {
                                Type?: import("./sologenic/com-fs-asset-model/asset").SocialMediaType | undefined;
                                URL?: string | undefined;
                            }[] | undefined;
                        } & {
                            Links?: ({
                                Type?: import("./sologenic/com-fs-asset-model/asset").LinkType | undefined;
                                URL?: string | undefined;
                            }[] & ({
                                Type?: import("./sologenic/com-fs-asset-model/asset").LinkType | undefined;
                                URL?: string | undefined;
                            } & {
                                Type?: import("./sologenic/com-fs-asset-model/asset").LinkType | undefined;
                                URL?: string | undefined;
                            } & { [K_60 in Exclude<keyof I_1["DynamicAssets"][number]["DynamicAsset"]["Assets"][number]["AssetDetails"]["ExternalResources"]["Links"][number], keyof import("./sologenic/com-fs-asset-model/asset").Link>]: never; })[] & { [K_61 in Exclude<keyof I_1["DynamicAssets"][number]["DynamicAsset"]["Assets"][number]["AssetDetails"]["ExternalResources"]["Links"], keyof {
                                Type?: import("./sologenic/com-fs-asset-model/asset").LinkType | undefined;
                                URL?: string | undefined;
                            }[]>]: never; }) | undefined;
                            Socials?: ({
                                Type?: import("./sologenic/com-fs-asset-model/asset").SocialMediaType | undefined;
                                URL?: string | undefined;
                            }[] & ({
                                Type?: import("./sologenic/com-fs-asset-model/asset").SocialMediaType | undefined;
                                URL?: string | undefined;
                            } & {
                                Type?: import("./sologenic/com-fs-asset-model/asset").SocialMediaType | undefined;
                                URL?: string | undefined;
                            } & { [K_62 in Exclude<keyof I_1["DynamicAssets"][number]["DynamicAsset"]["Assets"][number]["AssetDetails"]["ExternalResources"]["Socials"][number], keyof import("./sologenic/com-fs-asset-model/asset").SocialMedia>]: never; })[] & { [K_63 in Exclude<keyof I_1["DynamicAssets"][number]["DynamicAsset"]["Assets"][number]["AssetDetails"]["ExternalResources"]["Socials"], keyof {
                                Type?: import("./sologenic/com-fs-asset-model/asset").SocialMediaType | undefined;
                                URL?: string | undefined;
                            }[]>]: never; }) | undefined;
                        } & { [K_64 in Exclude<keyof I_1["DynamicAssets"][number]["DynamicAsset"]["Assets"][number]["AssetDetails"]["ExternalResources"], keyof import("./sologenic/com-fs-asset-model/asset").ExternalResources>]: never; }) | undefined;
                    } & { [K_65 in Exclude<keyof I_1["DynamicAssets"][number]["DynamicAsset"]["Assets"][number]["AssetDetails"], keyof import("./sologenic/com-fs-asset-model/asset").AssetDetails>]: never; }) | undefined;
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
                    } & { [K_66 in Exclude<keyof I_1["DynamicAssets"][number]["DynamicAsset"]["Assets"][number]["MetaData"], keyof MetaData>]: never; }) | undefined;
                    Audit?: ({
                        ChangedBy?: string | undefined;
                        ChangedAt?: Date | undefined;
                        Reason?: string | undefined;
                    } & {
                        ChangedBy?: string | undefined;
                        ChangedAt?: Date | undefined;
                        Reason?: string | undefined;
                    } & { [K_67 in Exclude<keyof I_1["DynamicAssets"][number]["DynamicAsset"]["Assets"][number]["Audit"], keyof Audit>]: never; }) | undefined;
                    IssuerDetails?: ({
                        Name?: string | undefined;
                        Description?: string | undefined;
                        Image?: string | undefined;
                        ExternalUrl?: string | undefined;
                        AddressLine1?: string | undefined;
                        AddressLine2?: string | undefined;
                        City?: string | undefined;
                        Region?: string | undefined;
                        PostalCode?: string | undefined;
                        Country?: string | undefined;
                        YearFounded?: number | undefined;
                        Licensed?: boolean | undefined;
                        LicenseCountry?: string | undefined;
                        LicenseNumber?: string | undefined;
                        Phone?: string | undefined;
                        Email?: string | undefined;
                        SocialMediaLinks?: string[] | undefined;
                        KeyClients?: string | undefined;
                        Press?: string | undefined;
                    } & {
                        Name?: string | undefined;
                        Description?: string | undefined;
                        Image?: string | undefined;
                        ExternalUrl?: string | undefined;
                        AddressLine1?: string | undefined;
                        AddressLine2?: string | undefined;
                        City?: string | undefined;
                        Region?: string | undefined;
                        PostalCode?: string | undefined;
                        Country?: string | undefined;
                        YearFounded?: number | undefined;
                        Licensed?: boolean | undefined;
                        LicenseCountry?: string | undefined;
                        LicenseNumber?: string | undefined;
                        Phone?: string | undefined;
                        Email?: string | undefined;
                        SocialMediaLinks?: (string[] & string[] & { [K_68 in Exclude<keyof I_1["DynamicAssets"][number]["DynamicAsset"]["Assets"][number]["IssuerDetails"]["SocialMediaLinks"], keyof string[]>]: never; }) | undefined;
                        KeyClients?: string | undefined;
                        Press?: string | undefined;
                    } & { [K_69 in Exclude<keyof I_1["DynamicAssets"][number]["DynamicAsset"]["Assets"][number]["IssuerDetails"], keyof import("./sologenic/com-fs-asset-model/asset").IssuerDetails>]: never; }) | undefined;
                } & { [K_70 in Exclude<keyof I_1["DynamicAssets"][number]["DynamicAsset"]["Assets"][number], keyof Asset>]: never; })[] & { [K_71 in Exclude<keyof I_1["DynamicAssets"][number]["DynamicAsset"]["Assets"], keyof {
                    AssetDetails?: {
                        ID?: string | undefined;
                        OrganizationID?: string | undefined;
                        Status?: import("./sologenic/com-fs-asset-model/asset").AssetStatus | undefined;
                        Reason?: import("./sologenic/com-fs-asset-model/asset").Reason | undefined;
                        Type?: import("./sologenic/com-fs-asset-model/asset").AssetType | undefined;
                        Denom?: {
                            Currency?: {
                                Symbol?: string | undefined;
                                Version?: string | undefined;
                            } | undefined;
                            Subunit?: string | undefined;
                            Issuer?: string | undefined;
                            Precision?: number | undefined;
                            Description?: string | undefined;
                        } | undefined;
                        IsIssuedInSmartContract?: boolean | undefined;
                        SmartContractIssuerAddr?: string | undefined;
                        RealEstateDetails?: {
                            Address?: string | undefined;
                            Bathrooms?: number | undefined;
                            Bedrooms?: number | undefined;
                            Latitude?: number | undefined;
                            Longitude?: number | undefined;
                            OwnershipType?: string | undefined;
                            PropertyType?: string | undefined;
                            RiskRating?: string | undefined;
                            SquareFootage?: number | undefined;
                            TenancyStatus?: string | undefined;
                            YearBuilt?: number | undefined;
                            YieldPercent?: number[] | undefined;
                        } | undefined;
                        StableCoinDetails?: {
                            Version?: string | undefined;
                            PegType?: string | undefined;
                            PegRatio?: number | undefined;
                            BackingAsset?: string | undefined;
                            ExchangeTickerSymbol?: string | undefined;
                            Exchange?: string | undefined;
                            MinTransactionAmount?: number | undefined;
                            TradingMarginPercentage?: number | undefined;
                            AssetMarginPercentage?: number | undefined;
                        } | undefined;
                        CommodityDetails?: {
                            Category?: string | undefined;
                            Quality?: string | undefined;
                            UnitOfMeasure?: string | undefined;
                            Quantity?: number | undefined;
                            OriginCountry?: string | undefined;
                            ExchangeTickerSymbol?: string | undefined;
                            Exchange?: string | undefined;
                            MinTransactionAmount?: number | undefined;
                            StorageLocation?: string | undefined;
                            ContractType?: string | undefined;
                            DeliveryDate?: string | undefined;
                        } | undefined;
                        CollectibleDetails?: {
                            Category?: string | undefined;
                            CollectionName?: string | undefined;
                            TokenStandard?: string | undefined;
                            TokenID?: string | undefined;
                            MetadataURI?: string | undefined;
                            Creator?: string | undefined;
                            OwnershipHistory?: string[] | undefined;
                            CurrentOwner?: string | undefined;
                        } | undefined;
                        VehicleDetails?: {
                            Category?: string | undefined;
                            Manufacturer?: string | undefined;
                            Model?: string | undefined;
                            SerialNumber?: string | undefined;
                            Year?: number | undefined;
                            Specifications?: string | undefined;
                            FuelType?: string | undefined;
                            UsageHours?: number | undefined;
                            Mileage?: number | undefined;
                            Condition?: string | undefined;
                            CurrentOwner?: string | undefined;
                            Location?: string | undefined;
                        } | undefined;
                        IntellectualPropertyDetails?: {
                            Category?: string | undefined;
                            Owner?: string | undefined;
                            RegistrationNumber?: string | undefined;
                            FilingDate?: string | undefined;
                            ExpirationDate?: string | undefined;
                            IPJurisdictionIDs?: string[] | undefined;
                            LicenseType?: string | undefined;
                            LicenseTerms?: string | undefined;
                            Value?: number | undefined;
                        } | undefined;
                        InvestmentFundDetails?: {
                            FundType?: string | undefined;
                            Exchange?: string | undefined;
                            ISIN?: string | undefined;
                            NAV?: number | undefined;
                            InceptionDate?: string | undefined;
                            Manager?: string | undefined;
                            ExpenseRatio?: number | undefined;
                            Holdings?: string[] | undefined;
                        } | undefined;
                        EquityDetails?: {
                            ExchangeTickerSymbol?: string | undefined;
                            Exchange?: string | undefined;
                            MinTransactionAmount?: string | undefined;
                            ExtraPercentage?: string | undefined;
                            AssetMarginPercentage?: string | undefined;
                        } | undefined;
                        FinancialProperties?: {
                            Symbol?: string | undefined;
                            Issuer?: string | undefined;
                            JurisdictionIDs?: string[] | undefined;
                            JurisdictionRestrictions?: string | undefined;
                            RedemptionTerms?: string | undefined;
                            ComplianceRequired?: boolean | undefined;
                            Type?: string | undefined;
                            TradeAllowances?: string[] | undefined;
                            Transferable?: boolean | undefined;
                            Platform?: string | undefined;
                            PlatformType?: string | undefined;
                            ContractAddress?: string | undefined;
                            Fractional?: boolean | undefined;
                            TotalSupply?: number | undefined;
                            DecimalPlacesSupply?: number | undefined;
                            Subunit?: string | undefined;
                            Price?: number | undefined;
                            DecimalPlacesPrice?: number | undefined;
                            Currency?: string | undefined;
                            InitialValuation?: number | undefined;
                            CurrentValuation?: number | undefined;
                            ValuationDate?: string | undefined;
                            Network?: Network | undefined;
                            Status?: string | undefined;
                        } | undefined;
                        Description?: {
                            Name?: string | undefined;
                            Description?: string | undefined;
                            Logo?: {
                                Reference?: string | undefined;
                                Extension?: string | undefined;
                                Name?: string | undefined;
                            } | undefined;
                            AssetID?: string | undefined;
                            URL?: string | undefined;
                            Country?: string | undefined;
                            Documents?: string[] | undefined;
                            Images?: string[] | undefined;
                            Vertical?: string | undefined;
                            CreatedAt?: string | undefined;
                            UpdatedAt?: string | undefined;
                        } | undefined;
                        ExternalResources?: {
                            Links?: {
                                Type?: import("./sologenic/com-fs-asset-model/asset").LinkType | undefined;
                                URL?: string | undefined;
                            }[] | undefined;
                            Socials?: {
                                Type?: import("./sologenic/com-fs-asset-model/asset").SocialMediaType | undefined;
                                URL?: string | undefined;
                            }[] | undefined;
                        } | undefined;
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
                    IssuerDetails?: {
                        Name?: string | undefined;
                        Description?: string | undefined;
                        Image?: string | undefined;
                        ExternalUrl?: string | undefined;
                        AddressLine1?: string | undefined;
                        AddressLine2?: string | undefined;
                        City?: string | undefined;
                        Region?: string | undefined;
                        PostalCode?: string | undefined;
                        Country?: string | undefined;
                        YearFounded?: number | undefined;
                        Licensed?: boolean | undefined;
                        LicenseCountry?: string | undefined;
                        LicenseNumber?: string | undefined;
                        Phone?: string | undefined;
                        Email?: string | undefined;
                        SocialMediaLinks?: string[] | undefined;
                        KeyClients?: string | undefined;
                        Press?: string | undefined;
                    } | undefined;
                }[]>]: never; }) | undefined;
            } & { [K_72 in Exclude<keyof I_1["DynamicAssets"][number]["DynamicAsset"], keyof DynamicAssetDetails>]: never; }) | undefined;
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
            } & { [K_73 in Exclude<keyof I_1["DynamicAssets"][number]["MetaData"], keyof MetaData>]: never; }) | undefined;
            Audit?: ({
                ChangedBy?: string | undefined;
                ChangedAt?: Date | undefined;
                Reason?: string | undefined;
            } & {
                ChangedBy?: string | undefined;
                ChangedAt?: Date | undefined;
                Reason?: string | undefined;
            } & { [K_74 in Exclude<keyof I_1["DynamicAssets"][number]["Audit"], keyof Audit>]: never; }) | undefined;
        } & { [K_75 in Exclude<keyof I_1["DynamicAssets"][number], keyof DynamicAsset>]: never; })[] & { [K_76 in Exclude<keyof I_1["DynamicAssets"], keyof {
            DynamicAsset?: {
                DynamicAssetID?: string | undefined;
                Title?: string | undefined;
                Description?: string | undefined;
                Identifier?: string | undefined;
                OrganizationID?: string | undefined;
                Assets?: {
                    AssetDetails?: {
                        ID?: string | undefined;
                        OrganizationID?: string | undefined;
                        Status?: import("./sologenic/com-fs-asset-model/asset").AssetStatus | undefined;
                        Reason?: import("./sologenic/com-fs-asset-model/asset").Reason | undefined;
                        Type?: import("./sologenic/com-fs-asset-model/asset").AssetType | undefined;
                        Denom?: {
                            Currency?: {
                                Symbol?: string | undefined;
                                Version?: string | undefined;
                            } | undefined;
                            Subunit?: string | undefined;
                            Issuer?: string | undefined;
                            Precision?: number | undefined;
                            Description?: string | undefined;
                        } | undefined;
                        IsIssuedInSmartContract?: boolean | undefined;
                        SmartContractIssuerAddr?: string | undefined;
                        RealEstateDetails?: {
                            Address?: string | undefined;
                            Bathrooms?: number | undefined;
                            Bedrooms?: number | undefined;
                            Latitude?: number | undefined;
                            Longitude?: number | undefined;
                            OwnershipType?: string | undefined;
                            PropertyType?: string | undefined;
                            RiskRating?: string | undefined;
                            SquareFootage?: number | undefined;
                            TenancyStatus?: string | undefined;
                            YearBuilt?: number | undefined;
                            YieldPercent?: number[] | undefined;
                        } | undefined;
                        StableCoinDetails?: {
                            Version?: string | undefined;
                            PegType?: string | undefined;
                            PegRatio?: number | undefined;
                            BackingAsset?: string | undefined;
                            ExchangeTickerSymbol?: string | undefined;
                            Exchange?: string | undefined;
                            MinTransactionAmount?: number | undefined;
                            TradingMarginPercentage?: number | undefined;
                            AssetMarginPercentage?: number | undefined;
                        } | undefined;
                        CommodityDetails?: {
                            Category?: string | undefined;
                            Quality?: string | undefined;
                            UnitOfMeasure?: string | undefined;
                            Quantity?: number | undefined;
                            OriginCountry?: string | undefined;
                            ExchangeTickerSymbol?: string | undefined;
                            Exchange?: string | undefined;
                            MinTransactionAmount?: number | undefined;
                            StorageLocation?: string | undefined;
                            ContractType?: string | undefined;
                            DeliveryDate?: string | undefined;
                        } | undefined;
                        CollectibleDetails?: {
                            Category?: string | undefined;
                            CollectionName?: string | undefined;
                            TokenStandard?: string | undefined;
                            TokenID?: string | undefined;
                            MetadataURI?: string | undefined;
                            Creator?: string | undefined;
                            OwnershipHistory?: string[] | undefined;
                            CurrentOwner?: string | undefined;
                        } | undefined;
                        VehicleDetails?: {
                            Category?: string | undefined;
                            Manufacturer?: string | undefined;
                            Model?: string | undefined;
                            SerialNumber?: string | undefined;
                            Year?: number | undefined;
                            Specifications?: string | undefined;
                            FuelType?: string | undefined;
                            UsageHours?: number | undefined;
                            Mileage?: number | undefined;
                            Condition?: string | undefined;
                            CurrentOwner?: string | undefined;
                            Location?: string | undefined;
                        } | undefined;
                        IntellectualPropertyDetails?: {
                            Category?: string | undefined;
                            Owner?: string | undefined;
                            RegistrationNumber?: string | undefined;
                            FilingDate?: string | undefined;
                            ExpirationDate?: string | undefined;
                            IPJurisdictionIDs?: string[] | undefined;
                            LicenseType?: string | undefined;
                            LicenseTerms?: string | undefined;
                            Value?: number | undefined;
                        } | undefined;
                        InvestmentFundDetails?: {
                            FundType?: string | undefined;
                            Exchange?: string | undefined;
                            ISIN?: string | undefined;
                            NAV?: number | undefined;
                            InceptionDate?: string | undefined;
                            Manager?: string | undefined;
                            ExpenseRatio?: number | undefined;
                            Holdings?: string[] | undefined;
                        } | undefined;
                        EquityDetails?: {
                            ExchangeTickerSymbol?: string | undefined;
                            Exchange?: string | undefined;
                            MinTransactionAmount?: string | undefined;
                            ExtraPercentage?: string | undefined;
                            AssetMarginPercentage?: string | undefined;
                        } | undefined;
                        FinancialProperties?: {
                            Symbol?: string | undefined;
                            Issuer?: string | undefined;
                            JurisdictionIDs?: string[] | undefined;
                            JurisdictionRestrictions?: string | undefined;
                            RedemptionTerms?: string | undefined;
                            ComplianceRequired?: boolean | undefined;
                            Type?: string | undefined;
                            TradeAllowances?: string[] | undefined;
                            Transferable?: boolean | undefined;
                            Platform?: string | undefined;
                            PlatformType?: string | undefined;
                            ContractAddress?: string | undefined;
                            Fractional?: boolean | undefined;
                            TotalSupply?: number | undefined;
                            DecimalPlacesSupply?: number | undefined;
                            Subunit?: string | undefined;
                            Price?: number | undefined;
                            DecimalPlacesPrice?: number | undefined;
                            Currency?: string | undefined;
                            InitialValuation?: number | undefined;
                            CurrentValuation?: number | undefined;
                            ValuationDate?: string | undefined;
                            Network?: Network | undefined;
                            Status?: string | undefined;
                        } | undefined;
                        Description?: {
                            Name?: string | undefined;
                            Description?: string | undefined;
                            Logo?: {
                                Reference?: string | undefined;
                                Extension?: string | undefined;
                                Name?: string | undefined;
                            } | undefined;
                            AssetID?: string | undefined;
                            URL?: string | undefined;
                            Country?: string | undefined;
                            Documents?: string[] | undefined;
                            Images?: string[] | undefined;
                            Vertical?: string | undefined;
                            CreatedAt?: string | undefined;
                            UpdatedAt?: string | undefined;
                        } | undefined;
                        ExternalResources?: {
                            Links?: {
                                Type?: import("./sologenic/com-fs-asset-model/asset").LinkType | undefined;
                                URL?: string | undefined;
                            }[] | undefined;
                            Socials?: {
                                Type?: import("./sologenic/com-fs-asset-model/asset").SocialMediaType | undefined;
                                URL?: string | undefined;
                            }[] | undefined;
                        } | undefined;
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
                    IssuerDetails?: {
                        Name?: string | undefined;
                        Description?: string | undefined;
                        Image?: string | undefined;
                        ExternalUrl?: string | undefined;
                        AddressLine1?: string | undefined;
                        AddressLine2?: string | undefined;
                        City?: string | undefined;
                        Region?: string | undefined;
                        PostalCode?: string | undefined;
                        Country?: string | undefined;
                        YearFounded?: number | undefined;
                        Licensed?: boolean | undefined;
                        LicenseCountry?: string | undefined;
                        LicenseNumber?: string | undefined;
                        Phone?: string | undefined;
                        Email?: string | undefined;
                        SocialMediaLinks?: string[] | undefined;
                        KeyClients?: string | undefined;
                        Press?: string | undefined;
                    } | undefined;
                }[] | undefined;
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
    } & { [K_77 in Exclude<keyof I_1, keyof DynamicAssetList>]: never; }>(object: I_1): DynamicAssetList;
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
