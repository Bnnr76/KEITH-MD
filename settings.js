// Bot settings

// You don't have to set this if you deploy using heroku because you can simply set them in environment variables, also don't forget to sleep

const session = process.env.SESSION || 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaVA1QkV4NXREeFJpSlFlWDQ2amxOaGF2MXJhRjhvQWF0UmdsNGJFWnhWTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiN24vMkFYTWhHMXBuZFhHSUxwNHhHTGtwdTZ4VmV3NFJXMGZTbFA4QUxGUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzR0FRTzBuTEpwcnhJNEp2SE1FT0ZvRHJrZDFQQWhSYmd0dGRNT1k4YVdRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJkam5LNE8zbVhSOWdpNFBDdGpRWlB5YW9SYlJ4SlJVRnlWQXBQOERPNjNnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBNcEhMTkZ2Ly9hN0l6SmJzRE8yMktabmRCckl1TjdGOFAyVGppcmlTRmM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkpUZTdIMTN2L0tNTUxCS3pTVjF5QXhJYUhwUUtkN003Yk0wU0tacUdEQkk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTUVpd0Y0TjVUZG1aRk94M1FReWFFenRIYUF0ZFZJU0FpaTQzWDdXbG1rWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUYwWTZtRFhvRUhSSUZzOS9MUUhQOGphd3g3MWZZMkFuTDVBMHlST3BDND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdJWVhNVFlvNStjVXh6TGoyNHJRL1JYU1IzZkw2d01KS0FwTmJPVWxrZGIyb3I1QjM4Y2Nkb1F2QUJjRXdKb0YxSjFaTEpJZnBtK0dWd3g0RVZSRERnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTY1LCJhZHZTZWNyZXRLZXkiOiJKRDFzMm9pZHJxSDZLMVFKMStTS2E1Z0d4N3FZVmp5TWJQZ3JzSW5Xb004PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI1Njc1MjExODE5OUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJERDc2Q0Q4RTgxOEVCMTZGMUIyQzY4NjQ0NUYxMEMxRCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzQxMDIyMDAwfV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJfZVJJRV8zMlRJV196a0JqSms2dGx3IiwicGhvbmVJZCI6ImUyNzAwNTU3LTJkOTItNDYxYi1iMTBhLTJjMjU3ZDkyYjNhMSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJodzNLNTVZTjZhSE1EMXNXMUFKVDZqN2gyTzg9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTm5JKzdELzNETyt3Q0tZakpjZUZzdUt4WnNZPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjlOVkVMTko5IiwibWUiOnsiaWQiOiIyNTY3NTIxMTgxOTk6MUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLwlqOQ8J2RhfCdkLTwnZGB8J2QtCDwnZGG8J2Qu/CdkLTwnZGB6pyb6pyc6pyb6pyc6pyb6pyc6pyb6pyc6pyb6pyc6pyb6pyc6pyb6pyc6pyb6pyc6pyb6pyc6pyb6pyc6pyb6pyc6pyb6pycIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNNNk9zOWNERUozR2w3NEdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiI5ekFQVXN4SUY2QTZyZmIzOVUwbTJzU21NWWV3VG14MXRlVGpHcGdyQlcwPSIsImFjY291bnRTaWduYXR1cmUiOiI5VC93eHVoQkhPb296TmNCM0xROVdGMHhZWXNBVlp1eUQ1ZzI3eDhOOW9rOEs1aFU2VUJmRnRWWmFLMmlCMnpFOTlmY3UrNU5tUERvZVV1eENLM0hBUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiNlduMitwUVE0Y1dkbHQ3K0k2QmZ5SlFCTGpoajY4c0JNODNLQmpqdHlnQ28vTmRGd2hINFFRU3lpbGlOYUUrbFk1N040QTRNaFY3SjNUa0FiYUYwQmc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNTY3NTIxMTgxOTk6MUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJmY3dEMUxNU0JlZ09xMzI5L1ZOSnRyRXBqR0hzRTVzZGJYazR4cVlLd1Z0In19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzQxMDIxOTk1LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUwrTyJ9';

const prefix = process.env.PREFIX || '';
const mycode = process.env.CODE || "254";
const author = process.env.OWNER_NAME || 'Keith';
const packname = process.env.PACKNAME || 'keith';
const dev = process.env.OWNER_NUMBER || '254748387615';
const DevKeith = dev.split(",");
const botname = process.env.BOTNAME || 'KEITH-MD';
const mode = process.env.MODE || 'public';
const gcpresence = process.env.GC_PRESENCE || 'false';
const antionce = process.env.ANTIVIEWONCE || 'true';
const sessionName = "session";
const presence = process.env.WA_PRESENCE || 'online';
const herokuapikey = process.env.HEROKU_API_KEY || '';
const herokuAppname = process.env.HEROKU_APP_NAME || '';
const url = process.env.URL || 'https://files.catbox.moe/mikdi0.jpg';
const gurl = process.env.GURL || 'https://whatsapp.com/channel/0029Vaan9TF9Bb62l8wpoD47';
const reactemoji = process.env.EMOJI || '💚';
const antitag = process.env.ANTITAG || 'true';
const groupControl = process.env.GROUP_CONTROL || 'true';
const anticall = process.env.ANTICALL || 'true';
const antidelete = process.env.ANTIDELETE || 'true';
const autoview = process.env.AUTOVIEW_STATUS || 'true';
const autolike = process.env.AUTOLIKE_STATUS || 'true';
const autoread = process.env.AUTOREAD || 'true';
const anticallmsg = process.env.ANTICALL_MSG || 'Keith declined your 🤙 call';
const autobio = process.env.AUTOBIO || 'false';

module.exports = {
  sessionName,
  presence,
  autoview,
  autoread,
  botname,
  reactemoji,
  autobio,
  antilink: groupControl,  // Use groupControl for antilink
  antibad: groupControl,   // Use groupControl for antibad
  mode,
  prefix,
  anticall,
  autolike,
  anticallmsg,
  mycode,
  author,
  herokuAppname,
  herokuapikey,
  url,
  gurl,
  packname,
  dev,
  DevKeith,
  gcpresence,
  antionce,
  session,
  antitag,
  antidelete
};
