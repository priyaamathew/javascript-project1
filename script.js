const search=()=>{
    const searchbtn = document.getElementById('search-item').value.toUpperCase()
    const plist = document.getElementsByClassName("p-item")
    const pdt = document.querySelectorAll(".pdt")
    const pname = document.getElementsByClassName('pname')

    for(var i=0; i<pname.length; i++){
        let match=pdt[i].getElementsByClassName('pname')[0];
        console.log(match)
        if(match){
            let textvalue =match.textContent || match.innerHTML
            if(textvalue.toUpperCase().indexOf(searchbtn)>-1){
                pdt[i].style.display='';
                console.log(textvalue)
            }else{
                pdt[i].style.display='none';
            }
        }
        
    }

}