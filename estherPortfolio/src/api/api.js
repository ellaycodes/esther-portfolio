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

export const getContentModel = async () => {
  await tokens();
  return axios.get(
    `${baseURL}/spaces/${id.spaceId}/environments/${id.environmentId}/content_types?access_token=${id.accessToken}`
  );
};

export const getContentType = async (contentTypeId) => {
  await tokens();
  return axios.get(
    `${baseURL}/spaces/${id.spaceId}/environments/${id.environmentId}/content_types/${contentTypeId}?access_token=${id.accessToken}`
  );
};

export const getEntryById = async (entryId) => {
  await tokens();
  return axios.get(
    `${baseURL}/spaces/${id.spaceId}/environments/${id.environmentId}/entries/${entryId}?access_token=${id.accessToken}`
  );
};

export const getAssetById = async (assetId) => {
  await tokens();
  return axios.get(
    `${baseURL}/spaces/${id.spaceId}/environments/${id.environmentId}/assets/${assetId}?access_token=${id.accessToken}`
  );
}
