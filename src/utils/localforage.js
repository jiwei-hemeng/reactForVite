import localforage from "localforage";
export const db = localforage.createInstance({
  name: "myDatabase",
  version: 1.0,
  storeName: "myStore",
  description: "A sample database",
});
