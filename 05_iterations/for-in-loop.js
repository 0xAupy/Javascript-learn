const obj = {
    js : 'javascript',
    py : 'python',
    rb : 'ruby',
    cpp : 'c++'
}

// console.log(obj);

//for in loop
for (const key in obj) {
    console.log(key, "=", obj[key]);
}

//this will not work on map because map is not iterable