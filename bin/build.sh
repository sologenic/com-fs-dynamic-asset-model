#!/bin/bash
set -e

# move to the root dir of the package
rd=$(git rev-parse --show-toplevel)
cd $rd

# Generate Go code for dynamic asset proto
protoc \
    --proto_path=. "dynamic-asset.proto" \
    --proto_path=$(dirname $(dirname "$rd")) \
    "--go_out=." --go_opt=paths=source_relative

# Generate Go gRPC code for admin service
protoc \
    --proto_path=. "admin-dynamicasset-grpc.proto" \
    --proto_path=$(dirname $(dirname "$rd")) \
    "--go_out=." --go_opt=paths=source_relative \
    --go-grpc_opt=require_unimplemented_servers=false \
    "--go-grpc_out=." --go-grpc_opt=paths=source_relative

# Generate Go gRPC code for user service  
protoc \
    --proto_path=. "dynamic-asset-grpc.proto" \
    --proto_path=$(dirname $(dirname "$rd")) \
    "--go_out=." --go_opt=paths=source_relative \
    --go-grpc_opt=require_unimplemented_servers=false \
    "--go-grpc_out=." --go-grpc_opt=paths=source_relative

# Generate TypeScript files
rm -rf node_modules
npm i

protoc --plugin=./node_modules/.bin/protoc-gen-ts_proto \
    --proto_path=. \
    --proto_path=$(dirname $(dirname "$rd")) \
    --ts_proto_out=. \
    --ts_proto_opt=esModuleInterop=true \
    dynamic-asset.proto

protoc --plugin=./node_modules/.bin/protoc-gen-ts_proto \
    --proto_path=. \
    --proto_path=$(dirname $(dirname "$rd")) \
    --ts_proto_out=. \
    --ts_proto_opt=esModuleInterop=true \
    --ts_proto_opt=outputServices=grpc-js \
    admin-dynamicasset-grpc.proto

protoc --plugin=./node_modules/.bin/protoc-gen-ts_proto \
    --proto_path=. \
    --proto_path=$(dirname $(dirname "$rd")) \
    --ts_proto_out=. \
    --ts_proto_opt=esModuleInterop=true \
    --ts_proto_opt=outputServices=grpc-js \
    dynamic-asset-grpc.proto

npm run build
git add build/

git add *.ts
rm -rf node_modules