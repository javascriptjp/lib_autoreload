const {Worker} = require('worker_threads');
(function ($){
    function $_($$){
        new Promise(r=>{
            const $$_ = new Worker($$);
            $$_.on('exit',r);
            $$_.on("error",_$=>{
                process.stdout.write(`${"=".repeat((process.stdout.columns))}\n${_$}\n${"=".repeat(process.stdout.columns)}\n`)
            });
        }).then(()=>$_($$))
    }
    for(const value of $)$_(value);
})([
    //write your file path.
])
