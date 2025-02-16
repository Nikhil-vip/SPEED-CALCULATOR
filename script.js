function go(){
    const k=document.getElementById("kilo").value;
    const m=document.getElementById("mile").value;
    const n=document.getElementById("meter").value;
    if(k>=1){
        let rm=k*0.621;
        let rn=k/3.6;
        document.getElementById("mile").value=rm;
        document.getElementById("meter").value=rn;
    }
    else if(m>=1){
        let rk=m/0.621;
        let rn=m/2.237;
        document.getElementById("kilo").value=rk;
        document.getElementById("meter").value=rn;
    }
    else if(n>=1){
        let rk=n*3.6;
        let rm=n*2.237;
        document.getElementById("kilo").value=rk;
        document.getElementById("mile").value=rm;
    }
}

