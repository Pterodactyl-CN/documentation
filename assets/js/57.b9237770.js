(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{399:function(e,t,a){"use strict";a.r(t);var s=a(48),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"upgrading-php"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#upgrading-php"}},[e._v("#")]),e._v(" Upgrading PHP")]),e._v(" "),a("p",[e._v("This documentation includes instructions for upgrading your system to the latest version of PHP. Please reference the\ntable below to check what version you need for your version of Pterodactyl.")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Panel Version")]),e._v(" "),a("th",[e._v("PHP Version")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("1.0.0 - 1.2.0")]),e._v(" "),a("td",[e._v("7.3, 7.4")])]),e._v(" "),a("tr",[a("td",[e._v("1.3.0+")]),e._v(" "),a("td",[e._v("7.4, 8.0")])])])]),e._v(" "),a("h2",{attrs:{id:"install-php"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install-php"}},[e._v("#")]),e._v(" Install PHP")]),e._v(" "),a("p",[e._v("In order to install PHP 8.0, you will need to run the following command. Please keep in mind different operating systems\nmay have slightly different requirements for how this command is formatted.")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Add additional repository for PHP")]),e._v("\nadd-apt-repository -y ppa:ondrej/php\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("apt")]),e._v(" -y update\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("apt")]),e._v(" -y "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" php8.0 php8.0-"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("cli,gd,mysql,pdo,mbstring,tokenizer,bcmath,xml,fpm,curl,zip"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),a("h2",{attrs:{id:"update-composer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#update-composer"}},[e._v("#")]),e._v(" Update Composer")]),e._v(" "),a("p",[e._v("As of "),a("code",[e._v("Panel@1.3.0")]),e._v(" we require "),a("code",[e._v("composer")]),e._v(" v2. To update composer you will need to run the following command which will\nperform the composer self-update process and move you over to version 2.")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("composer self-update --2\n")])])]),a("h2",{attrs:{id:"webserver-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#webserver-configuration"}},[e._v("#")]),e._v(" Webserver Configuration")]),e._v(" "),a("tabs",[a("tab",{attrs:{name:"NGINX"}},[a("p",[e._v("After upgrading to PHP 8.0, you will most likely need to update your NGINX configuration. Your configuration file\nis most likely called "),a("code",[e._v("pterodactyl.conf")]),e._v(" and located in the "),a("code",[e._v("/etc/nginx/sites-available/")]),e._v(" directory, or if on CentOS,\n"),a("code",[e._v("/etc/nginx/conf.d/")]),e._v(".")]),e._v(" "),a("p",[e._v("Make sure to update the path in the command below to reflect the actual location of your configuration file.")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("sed")]),e._v(" -i -e "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'s/php7.[0-4]-fpm.sock/php8.0-fpm.sock/'")]),e._v(" /etc/nginx/sites-available/pterodactyl.conf\n")])])]),a("p",[e._v("Once you have edited the file run the command below to reload nginx and apply your changes.")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("systemctl reload nginx\n")])])])]),e._v(" "),a("tab",{attrs:{name:"Apache"}},[a("p",[e._v("Run the commands below to disable PHP 7.4 and enable PHP 8.0 when serving requests. If you are upgrading from\nPHP 7.4 change the value in the command below to reflect that.")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Hint: a2enmod = a2_enable_module 🤯")]),e._v("\na2enmod php8.0\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Hint: a2dismod = a2_disable_module 🤯")]),e._v("\na2dismod php7.3\n")])])])])],1),e._v(" "),a("h4",{attrs:{id:"return-to-the-1-x-x-upgrade-guide"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#return-to-the-1-x-x-upgrade-guide"}},[e._v("#")]),e._v(" "),a("RouterLink",{attrs:{to:"/panel/1.0/upgrade/1.0.html#fetch-updated-files"}},[e._v("Return to the 1.X.X Upgrade Guide")])],1)],1)}),[],!1,null,null,null);t.default=n.exports}}]);