## 锤子便签

### 获取 ticket
https://account.smartisan.com/v2/session/?m=post
方式：POST 
参数：
```
{
  "username": "luoyonghao@t.tt",
  "password": "woshinidie",
  "extended_login": "1"
}
```

### 获取个人信息
https://cloud.smartisan.com/index.php?r=account%2Flogin
方式：GET
注意：需要往header 加入 `Cookie: SCA_SESS=${ticket }-a; SCA_LOGIN=1`

### 获取笔记列表
https://cloud.smartisan.com/apps/note/index.php?r=v2%2FgetList 

方式：GET

注意：需要往header 加入 `Cookie: SCA_SESS=${ticket }-a; SCA_LOGIN=1`

### 获取图片地址
https://cloud.smartisan.com/notesimage/${PID}

方式：GET

注意：需要往header 加入 `Cookie: SCA_SESS=${ticket }-a; SCA_LOGIN=1`

## 为知笔记

### 登录
https://note.wiz.cn/api/login

方式：POST

参数：
```
{
  "client_type": "web2.0",
  "api_version": "6"
  "user_id": "email"
  "password": "password"
}
```

返回结果：
```
{
  "code": "200",
  "message": "success",
  "token": "token",
  "cookie_str": "cookie_str",
  "kb_guid": "kb_guid",
  "mywiz_email": "mywiz_email",
  "user": {
    "user_id": "user_id",
    "displayname": "displayname",
    "return_message": "ok",
    "dt_created": "2014-12-22T13:02:16.000Z",
    "language": "zh_CN",
    "user_guid": "user_guid",
    "api_version": "6",
    "return_code": "200",
    "email": "email"
  }
}
```

### 获取笔记列表
https://note.wiz.cn/api/document/list
方式：GET
参数：
```
{
  "client_type": "web2.0",
  "api_version": "6",
  "token": "token",
  "kb_guid": "kb_guid",
  "action_cmd": "version"
  "action_value": "",
  "count": "100",
  "doc_guid": "",
  "auto": "true",
  "order": "desc",
  "_": "1476933013368"
}
```
返回结果：
```
{
  "code": 200,
  "message": "success",
  "list": [
    {
      "document_title": "3.22",
      "document_tag_guids": "",
      "document_filetype": "",
      "document_category": "/My Notes/",
      "dt_created": "2016-04-26T00:31:15.000Z",
      "dt_modified": "2016-05-13T16:25:33.000Z",
      "document_location": "/My Notes/",
      "version": "320",
      "data_md5": "485156fde7e2e46f1e529b2e614f12a8",
      "document_attachment_count": "0",
      "kb_guid": "1a59d4b3-ac0d-4401-a879-3f078aa11432",
      "document_protect": "0",
      "dt_data_modified": "2016-05-13T16:25:33.000Z",
      "document_guid": "94272e20-8395-4fa9-b3a7-ab7f375482cd",
      "document_owner": "710843409@qq.com",
      "document_type": "ios_note"
    }
  ]
}
```

### 获取单个笔记详情
https://note.wiz.cn/api/document/info
 
方式：GET
参数：
```
{
  "client_type": "web2.0",
  "api_version": "6",
  "token": "token", 
  "kb_guid": "kb_guid",
  "document_guid": "document_guid",
  "_": "1476933013616"
}
```
返回结果：
```
{
  "code": 200,
  "message": "success",
  "document_info": {
    "document_title": "API安全设计笔记.md",
    "document_tag_guids": "",
    "document_filetype": "",
    "document_category": "/My Notes/",
    "is_subscriber": true,
    "dt_created": "2016-10-19T09:09:13.000Z",
    "dt_modified": "2016-10-19T09:45:18.000Z",
    "document_location": "/My Notes/",
    "document_author": "",
    "version": "436",
    "data_md5": "044bb037b77f1e108cbe5b41bfb2cadf",
    "document_attachment_count": "0",
    "kb_guid": "kb_guid",
    "document_protect": "0",
    "dt_data_modified": "2016-10-19T09:45:18.000Z",
    "document_guid": "document_guid",
    "document_owner": "document_owner",
    "document_keywords": "",
    "document_type": "document",
    "document_body": "﻿"
  }
}
```


 
 
