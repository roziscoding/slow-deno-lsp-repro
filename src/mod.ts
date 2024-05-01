import { Client, StorageLocalStorage } from "mtkruto/mod.ts";

const client = new Client({
  storage: new StorageLocalStorage(""),
  apiId: 0,
  apiHash: "",
});

client.on("message:text", (ctx, next) => {});