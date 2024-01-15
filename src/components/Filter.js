import { useSearchParams } from "react-router-dom"

function Filter(){
const [searchParams,setSearchParams]=useSearchParams();
console.log(searchParams.get("age"));
console.log(searchParams.get("city"));
const age=searchParams.get("age");
const city=searchParams.get("city");
      return(
        <>
        <h1>Filter Page</h1>
        <h3>age is : {age}</h3>
        <h3>city is : {city}</h3>
        <input type="text" onChange={(e)=>setSearchParams({text:e.target.value})}placeholder="Set age in query params"/>

        <button onClick={()=>setSearchParams({age:40})}>Set age in query params</button>
        </>
    )
}
export default Filter;


