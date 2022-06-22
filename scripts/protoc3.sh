PROTO_DIR=./proto
OUT_DIR=./src/proto

mkdir -p ${OUT_DIR}

grpc_tools_node_protoc \
    --plugin=./node_modules/.bin/protoc-gen-ts \
    --js_out=import_style=commonjs,binary:${OUT_DIR} \
    --grpc_out=grpc_js:${OUT_DIR} \
    --ts_out=grpc_js:${OUT_DIR} \
    -I ${PROTO_DIR} $(find ${PROTO_DIR} -name "*.proto")