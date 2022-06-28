# lib_autoreload

Author: [@javascriptjp](https://github.com/javascriptjp)

[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/K3K1AQ3A3)

## __How to use__

```
.
├── index.js
├── test.js
└── core
    └── coreserver.js
```


```javascript
const {Worker} = require('worker_threads');
(function ($){
    function $_($$){
        new Promise(r=>{
            const $$_ = new Worker($$);
            $$_.on('exit',r);
            $$_.on("error",_$=>{
                console.log(`${"=".repeat((process.stdout.columns))}\n${_$}\n${"=".repeat(process.stdout.columns)}`)
            });
        }).then(()=>$_($$))
    }
    for(const value of $)$_(value);
})([
    "test.js",
    "core/coreserver.js"
])
```
