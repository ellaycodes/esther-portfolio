import axios from "axios";
import { loadEnvVars } from "./envLoader";

const baseURL = "https://cdn.contentful.com";

let id = null;

async function tokens() {
  id = await loadEnvVars();
}

export const getAllEntries = async () => {
  await tokens();
  return axios.get(
    `${baseURL}/spaces/${id.spaceId}/environments/${id.environmentId}/entries?access_token=${id.accessToken}`
  );
};

// console.log(await getAllEntries((res) => res.data.items[0]));
