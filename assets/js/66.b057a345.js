(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{412:function(a,t,s){"use strict";s.r(t);var e=s(48),r=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"其他配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#其他配置"}},[a._v("#")]),a._v(" 其他配置")]),a._v(" "),s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#备份"}},[a._v("备份")]),s("ul",[s("li",[s("a",{attrs:{href:"#使用本地备份"}},[a._v("使用本地备份")])]),s("li",[s("a",{attrs:{href:"#使用-s3-备份"}},[a._v("使用 S3 备份")])])])]),s("li",[s("a",{attrs:{href:"#反向代理设置"}},[a._v("反向代理设置")]),s("ul",[s("li",[s("a",{attrs:{href:"#nginx-特定配置"}},[a._v("NGINX 特定配置")])]),s("li",[s("a",{attrs:{href:"#cloudflare-特定配置"}},[a._v("Cloudflare 特定配置")])])])]),s("li",[s("a",{attrs:{href:"#recaptcha"}},[a._v("reCAPTCHA")]),s("ul",[s("li",[s("a",{attrs:{href:"#配置-recaptcha"}},[a._v("配置 reCAPTCHA")])]),s("li",[s("a",{attrs:{href:"#禁用-recaptcha"}},[a._v("禁用 reCAPTCHA")])])])]),s("li",[s("a",{attrs:{href:"#双因素认证"}},[a._v("双因素认证")]),s("ul",[s("li",[s("a",{attrs:{href:"#禁用双因素认证"}},[a._v("禁用双因素认证")])]),s("li",[s("a",{attrs:{href:"#为特定用户禁用双因素认证"}},[a._v("为特定用户禁用双因素认证")])])])])])]),s("p"),a._v(" "),s("h2",{attrs:{id:"备份"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#备份"}},[a._v("#")]),a._v(" 备份")]),a._v(" "),s("p",[a._v("翼龙面板允许用户为其服务器创建备份。为了创建备份，必须配置一个备份存储方法。")]),a._v(" "),s("p",[a._v("当改变翼龙面板的备份存储方式时，用户仍然可以从以前的存储驱动下载或删除现有的备份。\n在从S3迁移到本地备份的例子中，切换到本地备份存储方式后，S3凭证必须保持配置。")]),a._v(" "),s("h3",{attrs:{id:"使用本地备份"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用本地备份"}},[a._v("#")]),a._v(" 使用本地备份")]),a._v(" "),s("p",[a._v("默认情况下，翼龙面板通过 Wings (后端) 使用本地存储进行备份。也就是说，这种备份存储方式可以在 "),s("code",[a._v(".env")]),a._v(" 文件中通过以下配置明确设置。")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 将你的面板设置为通过 Wings 使用本地存储进行备份")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("APP_BACKUP_DRIVER")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("wings\n")])])]),s("p",[a._v("请注意，当通过 Wings 使用本地存储时，备份的目的地是在 Wings 的 "),s("code",[a._v("config.yml")]),a._v(" 中设置的，设置内容如下。")]),a._v(" "),s("div",{staticClass:"language-yml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("system")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("backup_directory")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" /path/to/backup/storage\n")])])]),s("h3",{attrs:{id:"使用-s3-备份"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用-s3-备份"}},[a._v("#")]),a._v(" 使用 S3 备份")]),a._v(" "),s("p",[a._v("AWS S3（或兼容的存储）可以用来存储远程或基于云的备份。必须在 "),s("code",[a._v(".env")]),a._v(" 文件中设置以下配置选项或作为环境变量，以便启用它。")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 将你的面板设置为使用 s3 进行备份")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("APP_BACKUP_DRIVER")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("s3\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 实际使用 s3 的信息")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("AWS_DEFAULT_REGION")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("AWS_ACCESS_KEY_ID")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("AWS_SECRET_ACCESS_KEY")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("AWS_BACKUPS_BUCKET")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("AWS_ENDPOINT")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("\n")])])]),s("p",[a._v("对于某些配置，你可能需要将你的 S3 URL 从 "),s("code",[a._v("bucket.domain.com")]),a._v(" 改为 "),s("code",[a._v("domain.com/bucket")]),a._v("。为了达到这个目的，在你的 "),s("code",[a._v(".env")]),a._v(" 文件中添加 "),s("code",[a._v("AWS_USE_PATH_STYLE_ENDPOINT=true")]),a._v("。")]),a._v(" "),s("h2",{attrs:{id:"反向代理设置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#反向代理设置"}},[a._v("#")]),a._v(" 反向代理设置")]),a._v(" "),s("p",[a._v("在反向代理后面运行 Pterodactyl 时，例如 "),s("a",{attrs:{href:"https://support.cloudflare.com/hc/en-us/articles/200170416-What-do-the-SSL-options-mean-",target:"_blank",rel:"noopener noreferrer"}},[a._v("Cloudflare 的灵活 SSL"),s("OutboundLink")],1),a._v(" 或 Nginx/Apache/Caddy 等，您将需要对面板进行快速修改，以确保一切按预期继续工作。\n默认情况下，当使用这些反向代理时，您的面板将无法正确处理请求。\n您很可能无法登录或在浏览器控制台中看到安全警告，因为它试图加载不安全的资源。\n这是因为面板用来确定如何生成链接的内部逻辑认为它是通过 HTTP 而不是通过 HTTPS 运行的。")]),a._v(" "),s("p",[a._v("您需要编辑面板根目录中的 "),s("code",[a._v(".env")]),a._v(" 文件以至少包含 "),s("code",[a._v("TRUSTED_PROXIES=*")]),a._v("。\n我们强烈建议提供特定的 IP 地址（或以英文逗号分隔的 IP 列表），而不是允许使用 "),s("code",[a._v("*")]),a._v("。例如，如果您的代理与服务器在同一台机器上运行，那么类似  "),s("code",[a._v("TRUSTED_PROXIES=127.0.0.1")]),a._v(" 之类的东西很可能适合您。")]),a._v(" "),s("h3",{attrs:{id:"nginx-特定配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nginx-特定配置"}},[a._v("#")]),a._v(" NGINX 特定配置")]),a._v(" "),s("p",[a._v("为了使翼龙正确响应 NGINX 反向代理，NGINX "),s("code",[a._v("location")]),a._v(" 配置必须包含以下内容：")]),a._v(" "),s("div",{staticClass:"language-Nginx extra-class"},[s("pre",{pre:!0,attrs:{class:"language-nginx"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("proxy_set_header")]),a._v(" X"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("Real"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("IP "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$remote_addr")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("proxy_set_header")]),a._v(" Host "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$host")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("proxy_set_header")]),a._v(" X"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("Forwarded"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("For "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$proxy_add_x_forwarded_for")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("proxy_set_header")]),a._v(" X"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("Forwarded"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("Proto "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$scheme")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("proxy_redirect")]),a._v(" off"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("proxy_buffering")]),a._v(" off"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\nproxy_request_buffering off"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),s("h3",{attrs:{id:"cloudflare-特定配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cloudflare-特定配置"}},[a._v("#")]),a._v(" Cloudflare 特定配置")]),a._v(" "),s("p",[a._v("如果您使用 Cloudflare 的灵活 SSL，您应该设置 "),s("code",[a._v("TRUSTED_PROXIES")]),a._v(" 以包含 "),s("a",{attrs:{href:"https://www.cloudflare.com/ips/",target:"_blank",rel:"noopener noreferrer"}},[a._v("他们的 IP 地址"),s("OutboundLink")],1),a._v("。以下是如何设置的示例。")]),a._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("TRUSTED_PROXIES=173.245.48.0/20,103.21.244.0/22,103.22.200.0/22,103.31.4.0/22,141.101.64.0/18,108.162.192.0/18,190.93.240.0/20,188.114.96.0/20,197.234.240.0/22,198.41.128.0/17,162.158.0.0/15,104.16.0.0/13,104.24.0.0/14,172.64.0.0/13,131.0.72.0/22\n")])])]),s("h2",{attrs:{id:"recaptcha"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#recaptcha"}},[a._v("#")]),a._v(" reCAPTCHA")]),a._v(" "),s("p",[a._v("面板使用隐形 reCAPTCHA 来保护登录页面免受暴力攻击。如果登录尝试被认为可疑，则可能会要求用户执行 reCAPTCHA 质询。")]),a._v(" "),s("h3",{attrs:{id:"配置-recaptcha"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置-recaptcha"}},[a._v("#")]),a._v(" 配置 reCAPTCHA")]),a._v(" "),s("p",[a._v("虽然我们默认提供全局 Site Key 和 Secret Key，但我们强烈建议您根据自己的设置更改它。")]),a._v(" "),s("p",[a._v("您可以在 "),s("a",{attrs:{href:"https://www.google.com/recaptcha/admin",target:"_blank",rel:"noopener noreferrer"}},[a._v("reCAPTCHA 管理控制台"),s("OutboundLink")],1),a._v(" 中生成自己的密钥。")]),a._v(" "),s("p",[a._v("然后可以使用管理面板中的设置来应用这些密钥。reCAPTCHA 设置可以在"),s("strong",[a._v("高级")]),a._v("选项卡上找到。")]),a._v(" "),s("h3",{attrs:{id:"禁用-recaptcha"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#禁用-recaptcha"}},[a._v("#")]),a._v(" 禁用 reCAPTCHA")]),a._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[a._v("安全警告")]),a._v(" "),s("p",[a._v("我们不建议禁用 reCAPTCHA。这是一种安全机制，使对用户帐户执行暴力攻击时变得更加困难。")])]),a._v(" "),s("p",[a._v("如果用户在登录时遇到问题，或者您的面板没有暴露在互联网上，禁用 reCAPTCHA 是有意义的。")]),a._v(" "),s("p",[a._v("使用管理面板可以轻松禁用 reCAPTCHA。在设置中，选择"),s("strong",[a._v("高级")]),a._v("选项卡并将 reCAPTCHA 的"),s("strong",[a._v("状态")]),a._v("设置为"),s("strong",[a._v("禁用")]),a._v("。")]),a._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[a._v("TIP")]),a._v(" "),s("p",[a._v("如果您无法访问面板，导致改不了这部分的设置，你也可以在 "),s("code",[a._v(".env")]),a._v(" 环境变量中去禁用 reCAPTCHA。")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("RECAPTCHA_ENABLED=false\n")])])])]),a._v(" "),s("h4",{attrs:{id:"编辑你的数据库"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#编辑你的数据库"}},[a._v("#")]),a._v(" 编辑你的数据库")]),a._v(" "),s("p",[a._v("如果您无法访问面板，可以使用以下命令直接修改数据库。")]),a._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[a._v("mysql "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("u root "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("p\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("UPDATE")]),a._v(" panel"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("settings "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("SET")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("value")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'false'")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("WHERE")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("`")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("key")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("`")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'settings::recaptcha:enabled'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),s("h2",{attrs:{id:"双因素认证"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#双因素认证"}},[a._v("#")]),a._v(" 双因素认证")]),a._v(" "),s("p",[a._v("如果可能，您应该使用面板更新您的双因素认证设置。如果您出于某种原因无法访问您的面板，您可以使用以下步骤。")]),a._v(" "),s("h3",{attrs:{id:"禁用双因素认证"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#禁用双因素认证"}},[a._v("#")]),a._v(" 禁用双因素认证")]),a._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[a._v("mysql "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("u root "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("p\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("UPDATE")]),a._v(" panel"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("settings "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("SET")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("value")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("WHERE")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("`")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("key")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("`")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'settings::pterodactyl:auth:2fa_required'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),s("h3",{attrs:{id:"为特定用户禁用双因素认证"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#为特定用户禁用双因素认证"}},[a._v("#")]),a._v(" 为特定用户禁用双因素认证")]),a._v(" "),s("p",[a._v("在 "),s("code",[a._v("/var/www/pterodactyl")]),a._v(" (这里指翼龙所在的目录) 目录中运行以下命令。")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("php artisan p:user:disable2fa\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);