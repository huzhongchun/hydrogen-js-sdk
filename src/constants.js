// 常量表
module.exports = {
  // 存储信息
  STORAGE_KEY: {
    AUTH_TOKEN: 'auth_token',
    USERINFO: 'userinfo',
    UID: 'uid',
    IS_LOGINED_BAAS: 'is_logined_baas'
  },
  // 提示信息
  MSG: {
    STATUS_CODE_ERROR: 'Unexpected API Status Code',
    NETWORT_ERROR: 'Network Error',
  },
  STATUS_CODE: {
    CREATED: 201,
    SUCCESS: 200,
    UPDATE: 200,
    PATCH: 200,
    DELETE: 204,
    UNAUTHORIZED: 401,
    NOT_FOUND: 404,
    SERVER_ERROR: 500,
  },

  UPLOAD: {
    UPLOAD_FILE_KEY: 'file',
    HEADER_AUTH: 'Authorization',
    HEADER_CLIENT: 'X-Hydrogen-Client-ID',
    HEADER_AUTH_VALUE: 'Hydrogen-r1 ',
    UA: 'Mozilla/5.0 (Linux; U; Android 4.0.3; ko-kr; LG-L160L Build/IML74K) AppleWebkit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30',
  },
};
