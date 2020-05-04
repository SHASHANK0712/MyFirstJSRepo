    const readline = require('readline');
    const fs = require("fs");

    const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal : false
    });

    console.log("Enter the filename");
    rl.on('line', function (line) {
    var f = line+".txt";
    fs.exists(f,(exists)=>
    {
    if (exists) {
        console.log('Already Created. Re-run the code and give new file name');
        process.exit();
    }else {
    fs.writeFile(f,"You are awesome",(err)=>
    {
        if(err) throw err;
        else console.log("Data written successfully!");
    });
    console.log("File Created!");
    fs.appendFile("filenames.txt",f+" ",(err)=>
    {
        if(err) throw err;
        else console.log("Filename written successfully in a separate file");
    })
    }
    })
    rl.close();
    });

