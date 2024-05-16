/200 <= code < 300 请求被成功处理/
/**
 * 200 成功处理请求
 * 
 * 204 Not Content 请求成功，但响应报文主体部分（就是那堆html等）
 * 
 * 206 Partial Content 范围请求成功
 */,

/300 <= code < 400 重定向（浏览器需要进行特殊处理）/
/**
 * 301 Moved Permanently 永久重定向 资源已经被永久地移动到另一个url地址
 * 
 * 302 Found 临时重定向 表示资源临时被分配了新的 url
 * 
 * 303 See Other 资源存在另一个 url 
 * 
 * 304 Not Modified 不需传输，也即可以使用缓存的内容
 * 
 * 307 Temporary Redirect 临时重定向  当发送重定向请求的时候，307状态码可以确保请求方法和消息主体不会发生变化。
 */,

/400 <= code < 500 客户端错误/
/**
 * 401 Bad Request 请求报文存在语法错误， 一般有GET请求体不为空等
 * 
 * 402 Unauthorized 发送到请求没有通过http认证的认证信息
 * 
 * 403 Forbidden 请求被服务器拒绝
 * 
 * 404 Not Found 服务器端无法找到请求的资源
 */,

/500 <= code < other 服务器端错误/
/**
 * 500 internal sever error 表示服务器端在执行请求时发生了错误
 * 
 * 501 Not Implemented 表示服务器不支持当前请求所需要的某个功能
 * 
 * 503 Service Unavailable 表明服务器暂时处于超负载或正在停机维护，无法处理请求
 */