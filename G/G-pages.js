// var a = (0.1* 10 + 0.2 * 10 )/10;
// console.log(a)

// var x= null
// console.log( x == undefined)


// let x = ('5')
// let y = ('6')
// console.log(x===y)

///////////////////////////////////////


// let thisvalue

// thisvalue= ("infinity",score= 25)

// console.log(thisvalue)


//////////////////////////////////////
// var  x=3 ,y=6, z=10;
// a= x+ y
// b=y+z
// c=z+b+z
// console.log(a)
// console.log(b)
// console.log(c)



// function test(){
//     let x=5
//      x=3
//     console.log(x)

// }
// test()
// var x=7
////////////////////////////////////////////



// function billing (x,y){
//     if( typeof(x) ===1 && typeof(y) === "number"){
//      } else{}
//        let z =x+y;
//     console.log (z)
  
// }
// billing(7,6)

////////////////////////////////////////////
// a =parseInt("55.21")
// console.log(a);


// let b= (155.55)
// console.log(b)

// let c = Number( new Date())
// console.log(c)


//////////////////////////////////////



// let dsp= 
// console.log (typeof dsp)


///////////////////////////////////////////////


// let traction =84
// if(traction >= 60){
//     console.log("pass")
//     if(traction>=80){
//         console.log("notbed")}
//     if(traction>=90){
//         console.log("good")}
//     if(traction>=100){
//         console.log("alsome!!")}
//     }

// else{
//     console.log("failed") 
// }



////////////////////////////////////////////////////

// var age=11
// if(age>=18){
//     console.log("成年")
// }else{
//     console.log("未成年")}
    


// var age=19
// if (age>=18)
//     b="成年"

// else  b="未成年"
// console.log(b)



// function name(username){
// var name = username? username.name:"visitor";
// return "hi welcome ,"+ name;
// }
// console.log(name({name:"jackie"}))
// console.log (name())



///////////////////////////////////////////////
let n= Math.floor (Math.random()*100)


if (n>=50){console.log(n,"大於50")}
else{console.log(n,"小於50")}


var theDate =new Date()
    console.table("現在時間:"+ theDate.getFullYear() +"/"+
                            (theDate.getMonth()+1)+"/"+
                            theDate.getDate()     +" "+
                            theDate.getHours()    +":"+
                            theDate.getMinutes()  +":"+
                            theDate.getSeconds()
    )

////////////////////////////////////////////////


// let day;
// switch (new Date().getDay() ){
// case 7:
//     day= "7"
//     break;
// case 1:
//     day= "1"
//     break;
// case 2:
//     day= "2"
//     break;      
// case 6:
//     day= "6"
//     break; 
// default:
//     day= "安息日"

// }
// console.log ("今天是"+ day)

/////////////////////////////////////////////////////

// let  fruit = [1,2,3,4,"5","6","7","他"]
// fruit.forEach (function(x){
//     console.log(x)
// })

// for (let x o fruit){
//     console.log (fruit[x])
// }

// let i =0
// while(i<=10){
//     console.log(i+"平方="+(i+i));i++
//     }

// let i=0
// do {console.log(i +"平方="+(i+i))
//     i++
// }while(i<=10)


// for (let a= 0;a<=10;a+=2){
//     if (a===3){
//         console.log(a);
//         continue;
// }
// if (a===3){
//     console.log(a)
//     break;
// }
// console.log("for loop"+a)
// }
//////////////////////////////////////////////////

// try{
//     let n=66;
//     if (n>=50 ){
//     console.log(a +"大於50");
// }else{
//     console.log(a+"小於50");
//     }
// }
// catch(e){
//     console.log(e+">"+e)
// ;alert("錯誤")}


///////////////////////////////////////////
// var theDate=new Date()
// console.log("現在時間:"+theDate.getFullYear()+"/"+
//             (theDate.getMonth()+1)+"/"+
//             theDate.getDate()+" "+
//             theDate.getHours()+":"+
//             theDate.getMinutes()+":"+
//             theDate.getSeconds()
// )


//////////////////////////////////////////////


// var s ="good job"
// var s_obj=String(s)
// var a=
// console.log(typeof s)
// console.log(typeof s_obj)


// var str ='hello'
// var str2 = "jennifer"
// var str3 = "your re so beautiful"
// console.log (str.concat(str2," ",str3))
// console.log (str+str2+" "+str3)


// var str = `what you say . say what you do.`
// console.log(str.trim())

// let name = "jannifer"
// let age = 18 

// function intro(strings, ...args){
//     console.log (strings)
//     console.log(args)
// }
// const sentence = intro `my name is ${name} ,i am ${age} years old`

// function getDay (strings,...values){
//     let result = ''
//     let week =["sun","mon","tue","wed","thu","thr","fir","sat"]
    
//     strings.forEach (function( key,i ){
//         if (values[i]){
//             let setTime = new Date(values[i])
//             result  = values[i] +"是星期"+ week [setTime.getDay()]+ "\n"
//         }
//     })   
//     return result
// }

// const a = "2021-08-10"
// const b = "2021-08-11"
// const c = "2021-08-12"
// const sentence =getDay `${a},${b},${c},`
// console.log(sentence)


///////////////////////////////////////////////////////////


// var numObj =new Number('1234')
// var num =Number('123456')
// console.log(typeof numObj)
// console.log(typeof num)
// console.log(numObj===132564)
// console.log(num!== 23456)


// console.log(Number.EPSILON)

// function cheackNumber(left,right){
//     return left + "===" + right + ">>" + (left==right)
// }
// function cheackNumberWithEpSILON (left, right){
//     return left + "===" + right + ">>" +(Math.abs(left-right) > Number.POS)
//  }
// var n1=1.3
// var n2=1.1+0.2

// // console.log (cheackNumber(n1,n2))
// console.log (cheackNumberWithEpSILON(n1,n2))
  

///////////////////////////////////////////////////////////////////////////


// let  x = 1e+432
// let  y =2
// if (x*y>Number.MAX_VALUE){
//     console.log("超出")
// }
// console.log(x*y)


///////////////////////////////////////////////////////

// console.info ("Number,isNaN")
// console.log ("isNaN('38')= "+Number.isNaN(0))
// console.log ("isNaN(0/0)="  +Number.isNaN(0/0))




///////////////////////


// var num =123456.4
// console.log(num.toLocaleString("ja-jp",{style:'currency',currency:"JPY",minimumintegerDigits:0 , maximumFractionDigits:0
// })
// )

// var f =215541.5445
// var g =165.54
// console.log(g.toLocaleString('zh',{minimumintegerDigits :3}) )

// // minimumintegerDigits  maximumfractionDigits minimumfractionDigits 

// // minimumSignificantDigits  maximumSignificantDigits


///////////////////////////////////////////////

// let r = 10
// let circleArea = r*r * Math.PI;


// let randomNumber=Math.floor(Math.random()*10)
// console.log (randomNumber)

// var  x=0
// var  y=10
// let r= Math.random()
// console.log( Math.trunc(Math.random() *(10))+1)
 

// function randomID(min,max){
//     return Math.trunc(Math.random()*(max-min)+1)
    
// }
// function getRandBool(){
//     return Math.random()>=0.5
// }
// function getRandFolat(max,min){
//     return Math.random()*(max,min)+min
// }


// console.log(getRandFolat(1,30))

///////////////////////////////////////////////////////////////////////////////


var array =["數","英","理","歷","國"]
for(i=0;i<=array.method; i++){
console.log(array[i])
}
var arrayvalue= ["0","1","2","3","4","5"]
console.table(arrayvalue.sort())
arrayvalue.pop()
console.table(arrayvalue)
arrayvalue.push("6")
console.table(arrayvalue)
arrayvalue.unshift("-1")
console.table(arrayvalue)










































