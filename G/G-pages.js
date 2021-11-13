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

////////////////////////////////////////////////////////////////////////////////////////


// var array =["數","英","理","歷","國"]
// var array2=[1,2,3,4,5]


// console.log(array.indexOf("數"))


// var arr =[1,2,3]
// var iter= arr [Symbol.iterator]()
// console.log(iter)
// console.log(iter,next())
// every (function (){elenment.indexOf.array}) 
// key 

// find(function(){element,[1,2,3,4,5,6]})


////////////////////////////////////////////////////////////////////////

// var arr = ["英","國","數"]
// var iter = arr [Symbol.iterator]()
// console.log(iter)
// console.log(iter.next())
// console.log(iter.next())
// console.log(iter.next())


// let array = [32,19,81,69,21,48]

// var iteratorl =array.entries()
// console.log(iteratorl.next().key)

// var iteratorl = array .values()
// console.log (iteratorl.very().value)


// var filtered =array.filter(a=>a>25)

// console.log(filtered)

// var filtered1 =array.map(function (value){
//     return value >= 25
// })
// console.log(filtered1)


//////////////////////////////////////////////////////////////////////


// var  arr = [1.51,20.35,23.548]

// var mapArr= arr.map( a=> a<2)
// console.log(mapArr)

// ///////////////////////////////////////

// var array = [1,2,3,4]
// var reduceArr = array .reduce((acc,cur,idx,src)=>{
//     console.log(acc,cur,idx)
//     return acc+cur
// },)

// console.log (array)

// var reduceArr = array.reduce( (acc,cur,idx,src)=>{
//     return cur+ idx
// } ,0 )

// console.log(reduceArr)

//////////////////////////////////////////

// var arr = [2.15,10.152,25.526,]
// var mapArr = arr.map(Math.round)
// console.log(mapArr)



// function star (n) {
//     var a =" "
//     for (var i = 1; i<=n;i++){
//     a = a+"5"
//     }
//     console.log(a)
//    }
//    star(5)


// function  isUpperCase(str){
//     if (str>="A"&& str<="Z"){
//         return true 
//     }else if (str >="a" && str<="z"){
//         return false
//     }else {
//         return "this not EnGlish"}
// }
//  console.log(isUpperCase("a"))



// //  function isUpperCase(str){
// //      var char = str[0]
// //      return char >="A" && char<=" a"
// //  }
// // console.log(isUpperCase("b"))


// function  position(str){
//     var oneword =str.split(" ")
//     for (var i = 0; i <=oneword.length ; i++){
//     if  (oneword[i]>= "A"&& oneword [i] <="Z"){
//         var chil1 ="第" 
//         var chil2 ="格"
//         var chil3 = "要大寫:"
//         var result =i +chil1+ oneword[i]
//         return result
//     }
// }return  

// }
// console.log(position ("I am your Father go sell matches!!"))


// function position (str){
//     for (var i=0; i< str.length ; i++){
//         if(str[i]>="A" && str[i]<="Z"){
//             return str[i]+" "+i 
//         }
//     }return "搜尋不到"

// }
// console.log(position ("i am Your father go sell matches!!"))

/////////////////////////////////////////////////////////
// function findSmallCount(arr, n) {
//     var count = 0
//      for (var i = 0; i < arr.length; i += 1) {
//       if(arr[i] < n) {
//        count = count + 1 //arr[i]<n 計數+1
//       }
//      }
//       return count
//     }
//     console.log(findSmallCount([1, 2, 3, 4,5],6, 10))
    

//     function findSmallCount(arr,n){
//         return arr .filter(function(item){
//             return item < n 
//         }).length
//     }
//     console.log(findSmallCount([1,2,3,],4))

    // function findSmallerTotal (arr,n){
    //     var total  =0
    //     for (var i=0;i<arr.length; i++){
    //         if (arr[i]<n){
    //             Total += arr[i]
    //         }
    //     }
    //     return Total 
    // }
    // console.log(findSmallerTotal[1,2,3],4)

    // function findSmallerTotal(arr,n){
    // var count=0
    // for(i = 0; i<arr.length; i++ ){
    //     if( arr[i]<n){ 
    //         count+=arr[i]
    //         }
    //     }
    //     return count
    // }
    // console.log(findSmallerTotal([1,2,5,12,6,8],20))
    

    // function findSmallcount(arr,n){
    //     return arr.filter (function(item){ return item <n})
    //     }
    // console.log(findSmallcount([1,2,3,4,5],6))


    ////////////////////////////////////////////////////////////



// var reduceArr=arr.reduce((accumulator, currentValue,currentIndex,array)=>{
//     console.log(accumulator,currentValue,currentIndex)
//     return accumulator+currentValue
// },)

// var arr =[3,4,9,5,4]
// var reduceArr = arr.reduce((acc,cur ,idx,arr)=>{
//     console.log(acc,cur,idx)
//     return acc+ cur
// })

////////////////////////////////////////////////////////

// function sum (arr){
//     return arr.reduce (function (accumulator, value){
//         return accumulator+value
//     },0)
// }

//     console.log(sum([3,4,11]))

    
////////////////////////////////////////////////////////////////////////


// var myMap = new Map()
// myMap
//     .set("name",[35,91,18])
//     .set("age",[50,74,36,94])
//     .set("faction",[87,78,69])

// myMap.forEach(function (value ,key ,map){
//     console.log (key,value)
// })

// console.log(myMap.size)
// console.log(myMap.entries("age"))


/////////////////////////////////////////////



// var myset= new Set ()
// myset.add("jackie").add(21).add("54815")
// console.log(myset.entries())

// var myset = new Set([41,18,64,54])
// console.log(myset.has(1))

// console.log(myset.add(18).values)
  
////////////////////////////////////////////////////////


// function myscore(stu_name,stu_Math, stu_Eng){
//     let fill =stu_Math<=60
//     return fill

    
// }

// myscore("jat",98,93)
// myscore("matt",55,43)
// myscore("jeinnfer",95,32)
// console.log(myscore("jo3",56,95))

// function myavg (stuName,stuMath, stuEng){
//     let stuavg=(stuMath+stuEng)/2
//     return stuavg
// }
// console.log("平均成績:"+myavg("joe",90,79))


// //////////函數宣告//////////////
// function myfunc(a,b){
//     console.log("a="+a+"b="+b)
// }
// myfunc(100,200)

///////函數表達式/////////////
// function myfunc(flag){
//     if(flag){
//         var myfunc =function(a,b){
//         return a+b+"="+(a*b)
//         }
//     }
//     else {
//         var myfunc= function(a,b){
//         return a*b+"="+(a+b)
//         }
//     }

//     console.log(myfunc(50,30))
// }
// myfunc(false)

// var myfunc = function(a,b){
//     return a +"+"+b +"="+(a+b)
//  }
// var myfunc = function add (a,b){
//     return x
// }
// console.log(myfunc(1,2))

////////////////////////////////////////////////////

// var myfunc = function factorial(n){
//     let x =(n ==1 ?n: n * factorial (n-1))
//     console.log(n+ ">"+ x)
//     return x 
// }
// console.log (+myfunc(6))


// var myfunc = function (x,y){
//     let total =(x+"+"+ y +"="+(x+y))
//     return total
// }(32,50)
// console.log(myfunc)   /////可執行


// function myfunc(x,y){
//     let total =(x+"+"+ y +"="+(x+y))
//     return total
// }(10,20)
// console.log(myfunc(30,40))     ////無法執行僅變數值



// var sum = arr =>{
//     return arr.reduce ((a,b)=> a+b);
// }
// console.log(sum([1,2,3,4,5]))


// function func () {
//     var a = 10 
//     console.log("func函事裡的a"+ a)
// }
// func()
// console.log()

// function func(){
//     var a = 10 
//     var b = 15 
//     var c = 120
//     console.log("func函事裡的a",a)
//     function funcIndide(){
//         console.log("funcInside函事裡呼叫a",b)
//             function funcINIndide(){
//                 console.log("funcINInside函事裡呼叫a",c)
//             }
//             funcINIndide()
//     }
//     funcIndide()
// }

// var account = (function(){
//     var balance =1000
//     return {
//         diposit:function(d){
//             balance+=d 
//         },
//         withdraw:function(w){
//             balance-=w
//         },
//         value:function(){
//             return balance
//         }
//     }
// })()
// console.log (account.value())
// account.withdraw(500)
// console.log (account.value())
// account.diposit(-100)
// console.log (account.value())
// account = null

///////////////////////////////////////////////////////////////////////

// function person (name,age ){
//     this.name =name
//     this.age=age
// }
//     showInfo=function(){
//     return"("+this .name+ this.age + ")"
// }

// var man = new person ("jonnes","35")
// console.log(man)


// var polygon = class {
//     constructor (hight,width){
        
//     }
// }
//////////////////////////////////////////////////////////////

// var cat = function(catName,catAge){
//     this.Name = catName                       ///屬性功能///
//         console.log(this.Name)
//     this.Age= catAge 
//         console.log(this.Age)
//     //////////////////////////////////    
//     this.run= function(){                     ///新增功能///
//         console.log(this.Name,"走失了")
//     }   
    
// }
// var kitty = new cat("kitty", 4)
// console.log (kitty.Name +"是一隻"+kitty.Age+"歲的貓")
// kitty.run()

////////////////////////////////////////////////////////////////////
// var a  = 17
// function myfunc(a){
    
//     var x = a
//     var y = this.a
//     console.log(x,y)
// } 
// myfunc(100)

// function  func(a){
//     var x = a
//     var y = this.a
//     console.log(x,y)
// }  
// func(100)


// //////////////////////////////////////////////

// function person (username,something,working,rest){
//     this.username = username
//     this.something= something
//     this.working= working
//     this.rest= rest
// }
// person.prototype.dune =function(){
//         console.log(this.username+"已經完成"+this.something,"所以正在"+this.rest)
//     }
// person.prototype.run= function (){
//         console.log(this.username,"正在執行"+this.working)
//     }


// var myfriend1 = new person("jennifer","工作","趕工","休息")
// var myfriend2 = new person ("brien","工作")
// var myfriend3 = new person ("danny","工作","趕工","休息") 
// myfriend1.run()
// myfriend3.dune()


// /////////////////////////////////////////////////////////////////////////

// function person(username){
//     this.username= username
// }    

// person.prototype.run= function (){
//     console.log(this.b+"的"+this.username,"喜歡馬拉松")
// }

// function student (username,classname){                            ////建構///
//     person.call (username)
//     this.b = classname  
// }               
// student.prototype = Object.create(person.prototype)               ///擴充父類別
                                                      
// student.prototype.study =function(){                             ///子類別自動加入
//     console.log(this.b+"的"+this.username+" 正在用功念書")
// }

// var myperson = new person ("jennifer")
// var mystudent = new student("brian","三年B班")
// myperson.run()
// mystudent.run()
// mystudent.study()

// ///////////////////////////////////////////////////////////////////////////

// // function  calA(){
// //     this.x=50
// //     this.y=10
// //     this.add =function(){
// //         console.log(this.x+this.y)
// //     }
// // }
// // function calB() {
// //     this.x=70
// //     this.y=30
// // }
// // var ca = new calA()
// // var cb = new calB()

// // ca.add.call(cb)



// var person ={
//     name:"",showname:function(){
//         return this.name
//     }
// }
// var student = Object.create(person,{
//     age:{value:18}
// })

// student.name ="andy"
// console.log(student.showname())
// console.log("age =",student.age)

// ////////////////////////////////////////

// var person = {name:"andy"}
// console.log("person",person.name)

// var student= person
// student.name="joe"
// console.log("student",student.name)
// console.log("person",person.name)
// console.log(student!==person)


// /////////////////////////////////////////////////////////

// var person ={name:"andy"}
// console.log("person",person.name)
// var student = {name: person.name}
// student.name= "jett" 
// console.log(student.name)
// console.log(student!==person)

/////////////////////////////////////////////////////////////

// class person{
//     constructor(name,age){
//         this.name=name
//         this.age=age
//     }
//     showInfo(){
//         return "姓名"+this.name+",年齡:"+this.age
//     }
// }
// class student extends person{
//     constructor (username,age,tel){
//         super(username,age)
//         this.tel=tel
//     }
//     showInfo(){
//         return super.showInfo()+" 電話:"+this.tel
//     }
// }
// var john = new person("kitty",21)
// var andy = new student("brian",23,"09194")

// console.log(andy.showInfo())
// console.log(john.showInfo())

// class frind extends student{
//     constructor(username,age,tel,address ){
//         super(username,age,tel)
//         this.address= address
//     }
//     shoeInfo(){
//         return super.showInfo()+ " 地址:"+this.address
//     }
// }
// var sandy=new frind("sandy",24,"0156","kouhsiung")
// console.log(sandy.shoeInfo())


///////////////////////////////////////////////////

// var reg = /^[a-z,0-9]{2}$/g
// var tel = "2w3"
// var myarray = reg.test(tel)
// console.log(myarray)

// var reg =new RegExp("you")
// var target = "just jou can best you can"
// var myarray=target.search(reg)
// console.log(myarray)


// var target ="18,515,2145,sunday,monday,tuesday"
// var reg1 = /[a-c]/g
// var reg2= /day,+/g
// var reg3=/\d{2}/g

// console.log(target.match(reg3))

// ///////////////////////////////////////////


// console.group()
// var target ="life was like \na box of chocolates. \nyou \rnever know what you're gonna get.\n--forrest Gump"
// reg = /\r\n|\n/g
// var arr = target.split(reg)
// arr.forEach(function(value,key){
//     console.log(key ,value)
// })
// console.log(reg.source)
// console.log(reg.flags)
// console.groupEnd()

// console.group()
// var reg =/you/ig
// while((ml=reg.exec(target ))!==null){
//     console.log("找到",ml[0],"下次搜尋起始位置",reg.lastIndex)
// }
// console.groupEnd()
// ///////////////////////////////////////////////////////////////////

// var target = "you never know"
// reg = /never/
// reg_y= /never/y

// console.group("沒加GRIUP")
// console.log(target.match(reg))
// console.groupEnd()

// console.group("flag = y")
// reg_y.lastIndex= 2
// console.log(target.match(reg_y))
// reg_y.lastIndex=4
// console.log(target .match(reg_y))
// console.groupEnd()
// ///////////////////////////////////////////////////////////
// var target = "beginnnng"
// var result = target.replace(new RegExp(/n/,"g"),'2')
// console.log(result)


// var target = "you poreus hero if you look inside to attack he"
// console.group()
// var reg=/you\b/gi
// var result=target.search(reg)
// console.log(result)
// console.log("you出現次數:"+ result.length)
// console.groupEnd()

// var target = "you poreus hero if you look inside to attack he"
// console.group()
// var reg=/you\b/gi
// var result=target.replace(reg,"he")
// console.log(result)
// console.log(result.length)
// console.groupEnd()

// var target = "you poreus hero if you look inside to attack he"
// console.group("不重複")
// var str=target.split(/\s|\./g)
// console.log(str)
// console.groupEnd()


// var target = "you poreus hero if you look inside to attack he"

// console.log(result)
// console.log("不重複",result.size,"個")
// console.groupEnd("未查出重複單字")
// //////////////////////////////////////////


// reg =/^ \d{4}\/\d{1,2}\/ \d{1,2}$/;
// reg =/^[a-zA-Z][\w]{5,10}$/;
// console.log(reg.test("A12345633890"))
// console.log(reg.test("123456789"))
// console.log(reg.test("B1234"))
// console.log(reg.test("B_1234"))

// reg =/^[\u4e00-\u9fdf]{3,}$/
// console.log(reg.test("已經超出"))



// //////////////////////////////////////////////
// function startTime(now){
//     var today = new Date()
//     var t = today.toLocaleTimeString()
//     console.log(`現在時間${t}`)

//     if (parseInt((today-now)/10)>=3){
//         clearInterval(tID)
//         console.log("停止時間")
//     }
// }
// var tID=setInterval(startTime,1000,new Date())

////////////////////////////////////////////

// function Play1(){
//     setTimeout(function(){
//         console.log(`play1執行中`)
//     } ,3000)
// }
// function Play2(){
//     setTimeout(function(){
//         console.log(`play2執行中`)
//     },5000)
// }
// console.log("程式開始")
// Play1()
// Play2()
// console.log("程式結束")

// ///////////////
// function func(x,y,callback){
//     let num = x*y
//     callback(num)
// }
// func (10,20,function(num){
//     console.log("num=",num)
// })


// function play1 (callback){
//     setTimeout(function(){
//         console.log('Play1執行')
//         callback("Play1ok")
//     },1000)
// }
// function play2(callback1){
//     setTimeout(function(){
//         console.log('play2執行')
//         callback1("Play2ok")
//     },2000)
// }
// console.log("程式開始")
// play1(function(e){
//     if (e==='Play1ok')
//     {
//         play2(function(e1){
//             if(e1==="Play2ok")
//             {
//               console.log("程式結束")  
//             }
//         })  
//     }
    
// })

/////////////////////////
// let myPromise =new Promise((resolve, reject)=>{
//     setTimeout(function(){
//         console.log("setTimeout執行中")
//         resolve("ok")
//     },3000)
// })
// myPromise.then ( (successMessage)=>{
//     console.log("成功",successMessage)
//     }).catch((error)=>{
//     console.log("失敗",error)
// })
///////////////////////////
// function myPromise(n){
//     return new Promise((resolve,reject)=>{
//         setTimeout(function(){
//         let num = n*n
//         if (num >1000){
//             resolve("大於1000")
//         }else{
//             reject("小於等於1000")
//         }
//     },3000)
// })
// }
// myPromise(10).then((resolveValue)=>{
//     console.log("resolveValue=",resolveValue)
// }, (rejectValue) => {
//     console.log("rejectValue=",rejectValue)
// })

/////////////////////////////////////////
// function play1(n){
//     return new Promise((resolve,reject)=>{
//         setTimeout(function(){
//             resolve(n+n)
//         },1000)
//     })
// }
// function play2(n){
//     return new Promise((resolve,reject)=>{
//         setTimeout(function(){
//             resolve(n*n)
//         },2000)
//     })
// }
// function play3(n){
//     return new Promise((resolve,reject)=>{
//         setTimeout(function(){
//             resolve(n+n*2)
//         },3000)
//     })
// }
// play1(5).then((e)=>{
//     console.log("play1執行了=",e)
//     return play2(e)
// }).then((e1)=>{
//     console.log("play2執行了=",e1)
//     return play3(e1)
// }).then((e2)=>{
//     console.log("play2執行了=",e2)
//     return play3(e2)
// })



function play1(n){
    return new Promise ((resolve, reject)=>{
        setTimeout(function(){
            console.log("play1=",n*n)
            resolve(n*n)
        },1000)
    })
}
function play2(n){
    return new Promise ((resolve,reject)=>{
        setTimeout(function(){
            console.log("play2=",n*n)
            resolve(n+n)
        },2000)
    })
}
async function add1(x){
    try{
        let play1value=await play1(10)
        let play2value=await play2(play1value)
        console.log(x+ play1value + play2value)
    }
    catch(err){
        console.log(err)
    }
}
add1(10)









