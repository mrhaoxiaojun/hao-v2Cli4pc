/*
 * @Author: haoxiaojun
 * @Date: 2019-07-16 11:11:01
 * @Details:  拦截器配置文件
 * @Last Modified by: haoxiaojun
 * @Last Modified time: 2020-04-07 15:44:54
 */
export default {
  token: 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJsb2dpbl9uYW1lIjoiaGFveGlhb2p1biIsInVzZXJfaWQiOiI4NUFERENFRi1FQTk2LTQ3RTUtOERCRC03MDBBNjhCNUI4RDEiLCJ1c2VyX25hbWUiOiJoYW94aWFvanVuIiwic2NvcGUiOlsicmVhZCIsIndyaXRlIiwidHJ1c3QiXSwib3JnYW5pemF0aW9uIjoiM0EzMTIzOTgtQUVERS00MjNFLTk0NTgtRkIwM0ZDNjhGNUQ1IiwiaXNzIjoiYTM2YzMwNDliMzYyNDlhM2M5Zjg4OTFjYjEyNzI0M2MiLCJleHAiOjE1NjU2MzU4NTUsImRpc3BsYXlfbmFtZSI6IumDneWwj-WGmyIsInJlZ2lvbiI6IlNPIiwiaWF0IjoxNTY1NTkyNjU1Nzc4LCJqdGkiOiI5M2FlYzQ5Yi04YWU0LTQ2MWItODliNy00MjA0MTI2ZDc3YTUiLCJjbGllbnRfaWQiOiJDb3Vwb25TeXN0ZW0ifQ.HloAPKQZ7RtphDA-ox1pHc-v0yNYgwT0ZIb5YFNDo6ND00PEW0NQ_01YMjv77HaAsHrysi1wrx6zxub9NIR_gwIdtpekWfKRbM2FE8b-Ch8SOIGMBuAUZ0yQ3wKkh7MZx33QANOQjO34FuPwOIPrzwDSS2KPE3AFTAeQ38IgSUu0l7yeCv7NsldemK-pZB_IJb9lFuuzoOJvMSaLQJfrtpwAY65MOCIglbJVwlvav5YHY9Ync2jIEvDl5peL_wTgyGmV3dqVteIeFSL_f7AW6_crReIbu6bc-76w2OSKtHMp4RwNYancNIhezkza60CDxd4PNsZDJg99VYKYFEpeqQ',
  errMap: {
    400: '请求错误',
    401: '未授权，请登录',
    403: '拒绝访问',
    404: '请求地址出错',
    408: '请求超时',
    500: '服务器内部错误',
    501: '服务未实现',
    502: '网关错误',
    503: '服务不可用',
    504: '网关超时',
    505: 'HTTP版本不受支持'
  },
  loginUrl: `${process.env.DOMAIN}/loginsite/login`
}
