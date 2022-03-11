import request from './request';

const baseUrl = process.env.VUE_APP_BASE_API;
const sqlUrl = process.env.VUE_APP_BASE_SQL


export const fetchFriendColumn = () => {
  return request.get(`${baseUrl}/client/friend/column`);
};

export const fetchFriendPlatform = () => {
  return request.get(`${baseUrl}/client/friend/platform`);
};

export const fetchFriendAuth = () => {
  return request.get(`${sqlUrl}/people/web/list`);
};

export const fetchFriendMap = () => {
  return request.get(`${sqlUrl}/people/web/map`);
};
