function isDigisible(n) {
    const s_num =  n.toString().split(""); 
    const unique = new Set(s_num);
    if(unique.size!==s_num.length||unique.has('0')){
        return false
    }
    
    for(const i of s_num){
        if(n%i!==0){
            return false
        }
    }
    return true

    }
console.log(isDigisible(123456))