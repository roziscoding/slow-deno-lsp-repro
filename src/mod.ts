import { Client, StorageLocalStorage } from "mtkruto/mod.ts";

const client = new Client({
  storage: new StorageLocalStorage("key"),
  apiId: 123,
  apiHash: "redacted",
});
client.importAuthString("redacted");

client.on("message:text", (ctx, next) => {
  if (!ctx.me || ctx.from?.id !== ctx.me.id) return next();
});
