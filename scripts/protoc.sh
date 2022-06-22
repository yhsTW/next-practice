set -eu

PROTO_DIR=./proto
OUT_DIR=./src/proto

mkdir -p ${OUT_DIR}

PROTOC_GEN_TS_PATH="./node_modules/.bin/protoc-gen-ts"

protoc \
    --plugin="protoc-gen-ts=${PROTOC_GEN_TS_PATH}" \
    --js_out="import_style=commonjs,binary:${OUT_DIR}" \
    --ts_out="service=grpc-web:${OUT_DIR}" \
    -I ${PROTO_DIR} $(find ${PROTO_DIR} -name "*.proto")