const request =new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all",true);
request.send();
request.onload=function(){
    var data = request.response;
    var result = JSON.parse(data);  
    
//a.Get all the countries from Asia continent /region using Filter function
var region = result.filter((ele)=>ele.region==="Asia")
var countrynames = region.map((ele)=>console.log(ele.name.common));


//b.Get all the countries with a population of less than 2 lakhs using Filter function
var pop = result.filter((ele)=>ele.population<200000)
var popnames = pop.map((ele)=>console.log(ele.name.common,ele.population));


//c.Print the following details name, capital, flag, using forEach function
var details = result.forEach((ele)=>console.log("Name:"+" "+ele.name.common))
var capital = result.forEach((ele)=>console.log("Capital:"+ele.capital))
var flag = result.forEach((ele)=>console.log("Flags:"+ele.flags.png))


//d.Print the total population of countries using reduce function
var pop1 = result.map((ele)=>ele.population);
const totalpop = pop1.reduce((sum,i)=>{
    return sum+i;
 },0)
 console.log("Total Population:"+totalpop);


//e.Print the country that uses US dollars as currency.
var cur = result.filter((ele)=>ele.currencies);
var curname = cur.filter((ele)=>ele.currencies.USD);
var curcountry = curname.map((ele)=>console.log(ele.name.common));

}