PROTO_DIR=./proto
OUT_DIR=./src/proto

mkdir -p ${OUT_DIR}

protoc -I ${PROTO_DIR} $(find ${PROTO_DIR} -name "*.proto") \
    --js_out=import_style=commonjs:${OUT_DIR} \
    --grpc-web_out=import_style=commonjs+dts,mode=grpcwebtext:${OUT_DIR}