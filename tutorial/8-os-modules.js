// discussing built in modules
const os= require('os')
// note: we dont need to write./ for built in modules
const user= os.userInfo()
// console.log(user)

// method return the system uptime in seconds
console.log(`The System uptime is ${os.uptime()}seconds`)
// here 1 minute is 100 seconds


const currentOS={
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem(),
    kei1:os.version(),
    kei2:os.platform(),
}
console.log(currentOS);
