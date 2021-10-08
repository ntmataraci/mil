const sphereValues = [
  {
    "diameter": 28,
    "speciality": { "sphereValue": 11120, "sphereLength": 23.77 },
  },
  {
    "diameter": 31,
    "speciality": {"sphereValue": 15154,"sphereLength": 26.67},
  },
  {
    "diameter":32.4,
    "speciality": {"sphereValue": 17381,"sphereLength": 28.26},
  },
  {
    "diameter":35,
    "speciality": {"sphereValue": 21830,"sphereLength": 30.15},
  },
  {
    "diameter":26,
    "speciality": {"sphereValue": 9223,"sphereLength": 22.5},
  },
  {
    "diameter":29,
    "speciality": {"sphereValue": 13137,"sphereLength": 25.22},
  },
];


/* calculate eventlistener */

document.querySelector("#sent").addEventListener("click",(e)=>{
    console.log("tıklandı")
    document.querySelector(".message").innerHTML=""

    /* description */
let sphereDiameter = +document.getElementById("sphereDiameter").value
let bodyDiameter = +document.getElementById("bodyDiameter").value
let drawingLength = +document.getElementById("drawingLength").value
let screwDiameter = +document.getElementById("screwDiameter").value
let screwLength = +document.getElementById("screwLength").value
let threadDiameter = +document.getElementById("threadDiameter").value
let threadLength = +document.getElementById("threadLength").value
let semiformDiameter = +document.getElementById("semiDiameter").value
let semiformLength = +document.getElementById("semiLength").value
let selectedVolume
let selectedLength



    sphereValues.forEach(x=>{
        if (x["diameter"]==sphereDiameter){
            selectedVolume=x["speciality"]["sphereValue"]
            selectedLength=x["speciality"]["sphereLength"]
        }
    })
    
    /* formula */
    const screwVolume=screwDiameter**2*screwLength*0.87
    const threadVolume=threadDiameter**2*threadLength*3.14/4
    const semiformVolume=semiformDiameter**2*semiformLength*3.14/4
    const totalVolume=screwVolume+threadVolume+semiformVolume
    const forgedLength=(totalVolume*4)/(3.14*bodyDiameter**2)+drawingLength-screwLength-threadLength-semiformLength
    const cuttingLength=selectedVolume*4/(3.14*bodyDiameter**2)-selectedLength+forgedLength+2


console.log(threadDiameter,bodyDiameter)

/* finish */
    document.querySelector("#forgedLength").value=Math.floor(forgedLength*100)/100
    document.querySelector("#cuttingLength").value=Math.floor(cuttingLength*100)/100

if (drawingLength-forgedLength>40){
    document.querySelector(".message").innerHTML=" Boy çok uzuyor !!!"
}

if (bodyDiameter!=14.4 && bodyDiameter!=14 &&  bodyDiameter!=16  ){
    document.querySelector(".message").innerHTML+=" Soğuk Kalıbı Yok !!!"
}

if (threadDiameter!=12.9 && threadDiameter!=12.8 &&  threadDiameter!=14.9  &&  threadDiameter!=14.8 &&  threadDiameter!=10.8 &&  threadDiameter!=10.9 ){
    document.querySelector(".message").innerHTML+=" Diş Kalıbı Yok !!!"
}


})