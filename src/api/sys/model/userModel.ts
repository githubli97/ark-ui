/**
 * @description: Login interface parameters
 */
export interface LoginParams {
  username: string;
  password: string;
}

export interface RoleInfo {
  authority: string;
  value: string;
}

/**
 * @description: Login interface return value
 */
export interface LoginResultModel {
  homePath: string;
  authorities: RoleInfo[];
  // 用户id
  id: string | number;
  // 用户名
  username: string;
  // 真实名字
  realName: string;
  // 头像
  userProfilePicture: string;
  // 介绍
  desc?: string;
}

/**
 * @description: Get user information return value
 */
export interface GetUserInfoModel {
  authorities: RoleInfo[];
  // 用户id
  id: string | number;
  // 用户名
  username: string;
  // 真实名字
  realName: string;
  // 头像
  userProfilePicture: string;
  // 介绍
  desc?: string;
}
