

export async function Http2ServerRequest(){
    try{
        const res=await fetch('https://www.freetogame.com/api/games');
        const data=await res.json();
        return
    }
    catch(error){
        console.log("error");
    }
}