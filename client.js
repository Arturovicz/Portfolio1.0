import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "kv8d9190",
  dataset: "production",
  apiVersion: "2022-02-01",
  useCdn: true,
  token:
    "skza06VYoyY3q8rXS7pBXk2u1ZVj7V3ql3kUMJKQY3PqFalnaTOQc3gRRTxj3usaAHZSDtBEr0G59VDwHdzoiDLzDiakoD0wDr2KCtGdQUdopONpurv5DLk6yS14pbjcEsseI4kZBMDDhkgj7b9wQ6MWEmTq82n9HhGXVDL2xdr1YgJV9McY",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
