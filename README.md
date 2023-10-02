# test_ng

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### vue.congif.js
#### using vue.config.js

### nginx
`
brew install nginx

npm build --> dist

copy dist/ to /usr/local/var/www/

    modify nginx.conf file
    location /v1/ {
        root   html;
        index  index.html index.htm;
            
        proxy_ssl_server_name on;
                   
        proxy_pass 'https://m.mi.com';
           
        proxy_set_header referer 'https://m.mi.com';
    }

cmd: nginx

visit: http://localhost/


`

