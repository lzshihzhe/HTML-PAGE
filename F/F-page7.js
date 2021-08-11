window.addEventListener('load',function(){ 


// const text =document.getElementById('content')
// const date =document.getElementById('date')
// const time =document.getElementById('time')
// const addedBtn=document.getElementById('addedBtn')
// const deletedBtn=document.getElementById('deletedBtn')
// const list=document.getElementById('list')


// const listcontent =[0]

// addedBtn.addEventListener('click',function (){
    
//      listcontent.push({
//          text:text.value,
//          date:date.value,
//          time:time.value,
//      })

//      let htm=''
//    listcontent.forEach(function (list) {
//      htm= htm+`
//      <div class="list" id="list">
//      <div class="item">
//          <div>
//              <p>內容:${list.text}</p>
//              <p>時間:${list.date}${list.time}</p>
//          </div>
//      </div>
//     </div>
//      `
//    })
   
// list.innerHTML=htm
// console.log(list);
// })
// ////////////////////


// deletedBtn.addEventListener('click',function (){
//     listcontent.pop()

//     let htm=''
//     listcontent.forEach(function (item) {
//     htm= htm+`
//     <div class="list" id="list">
//             <div class="item">
//                 <div>
//                     <p>內容:${item.text}</p>
//                     <p>時間:${item.date} ${item.time}</p>
//                 </div>
//             </div>
//         </div>
//         `
//    })
//    list.innerHTML=htm
   
// })

// let age =10
// console.log (`i am ${age} year `)

// var money = prompt ("需要多少")
// if(money>20000){
//     alert ("超出最大數")}

//////////////////////////////////////////////////

//  let isdone= true 
 
//  isdone =false

//  age=null 
//  let roomNuber
// console.log(roomNuber);

// let id = Symbol()
 
// let user={
//     name:"jackie",
//     age:24
// }
// console.log(user.age);

// let number = 3+5
// console.log(`20-43=${20-43}`);
// console.log(`2**5=${2**5}`)

//////////////////////////////
// let bookcunt= 100
// bookcunt=bookcunt+50
// console.log(`bookcunt=${bookcunt}`);

// let bookcunt = 100

// let newvalue = --bookcunt

// console.log(--bookcunt);


//////////////////////////


// let isgreater="10"!="15"


// console.log(isgreater); 


////////////////////////////







// let iscollectedcoin=false

// let coin = 0
// let point= 0

// if (iscollectedcoin){
//     coin++
//     point+=200

//     console.log(`金幣數:${coin}`);
//     console.log(`分數:${point}`);
// }
// else {
//     console.log(`GAME OVER`);}



// let isleveldone =false
// let currenylevel = 2

//  if (isleveldone){
//     if (currenylevel===1){
//          console.log("level 2")
//          console.log(currenylevel)
//          currenylevel++}

//     else if (currenylevel===2){
//         console.log("level 3")
//         currenylevel++
//         console.log(currenylevel)}
//     else if (currenylevel===3){
//         console.log("END")
//         currenylevel++
//         console.log(currenylevel);}

//     else if (currenylevel===4){
//         console.log("Hide ending")
//         currenylevel++
//         console.log(currenylevel)}

//     else if (currenylevel===5){
//         console.log("restart")
//         currenylevel=1
//         console.log(currenylevel)}        
// }else{
//     console.log("  game over")
// }


//////////////////////////////////////////



// let username ="jackie"
// let account=5569587
// let number=851636
// if (username=="jackie" && 
//     account==5569587 && 
//     number==851636){
//     console.log("Reach");
// }else{console.log("faile")}

// let forget="jackie"  
// if( forget==="jackie" ||
//     forget ===5481345
// ){
//     console.log("發送驗證碼")    
// }else
//     {console.log("帳戶錯誤!");
// }
//////////////////////////////////////////////////


  
// for (let i=1;  i<=10; i++ ){
    
//     if(i===1||i===5||i===7||i===9){continue;}
 
//     console.log(`用戶${i}:緊急通告`);    
//     }


////////////////////////////////////////////////////



// let totle =0
// let input=prompt("請輸入")
// while(input !== "2511"&&
//       input !== "0307" 
// ){
//     input =prompt("請輸入")
// }
// console.log(totle)



// let k =1
// do{ 
//     if (k === 4){break;}
//     console.log(k);
//      k++ 
// }
// while(k<=6)



///////////////////////////////////////////////


// let  sales = [100,50,30,60,200,300,90];
// let totalsales= 0;
// console.log( sales.length) 

// for (let i =0 ; i<=sales.length; i++) {
//     totalsales=totalsales +sales[i];
// }
// console.log( totalsales) 





///////////////////////////////////////////////////////


// function  showmessage(username){
// console.log (
//     `hi ${username} welcome to my function`)
// }
// showmessage("jackie")


// function add(num1,num2,num3,num4,num5) {
//     let ans1 = num1+ num2
//     let ans2 = num3+ num4
//     total=ans1+ans2+num5
//     return total
// }
// let s =add(5,2,6,8,10)
// console.log (s)



//////////////////////////////////////////////////////

// function firstfunction(){
//     alert("hey function")
// }
// function secondfunction(){
//     alert ("hey secondfunction")
// }

// let btn = document.getElementById("mybutton")
// btn.addEventListener("click",firstfunction)
// btn.addEventListener("click",secondfunction);
// btn.removeEventListener("click",secondfunction)


///////////////////////////////////////////////////////




// function five() {console.log("5")}
// function four() {console.log("4")}
// function three() {console.log("3")}
// function two() {console.log("2")}
// function one() {console.log("1")}
// function bom() {console.log("heppy new year~")}
// setTimeout(five,10)
// setTimeout(four,1000)
// setTimeout(three,2000)
// setTimeout(two,3000)
// setTimeout(one,4000)
// setTimeout(bom,5000)



/////////////////////////////////////////////


// console.log("one")
// this.setTimeout(function(){console.log(`two`),3000})
// console.log(`three`)


/////////////////////////////////////////

// let savetoairport=true;
// let p =new Promise(function(resolve,reject){   
//     if (savetoairport){
//         console.log("sent to airport");
//         resolve("from resolve():sent to airport")}
//     else {
//         console.log("mission failed")
//         reject("from reject () : order cancelled")
//     } 
// })
// p.then(function(message){console.log(`${message} promise resplved `) 
// })
// .catch(function(message){console.log(`${message} promise reject`)
// })



//////////////////////////////////////////////////////////

 
// let t =false
// function sendRequest (){
//     return new Promise (function(resolve, reject){
//         setTimeout (function(){
//             reject("not well")
//         },1000)
//      })
// }

// async function getUsername() {
//     try {
//         let username = await fatch("https://jsonplaceholder,typicode.com/users") 
//         username= await username.json()
//         console.log(username)

//     }catch(message){console.log(`ERRor ${message} `)
//     15.

//     }
// }    
// getUsername()
// let promise = sendRequest()
// promise.then(function(username){
//     console.log(username)
// })


// console.log ("hi")
// console.group("a組")
// console.log("秘密1")
// console.log("群組一")
// console.groupEnd()
// console.log("群組B")


// //////////////////////////////



// let t = 3+2

// console.log("3+2=",t)

// add = (x)=>(y) =>x + y ;
// result= add (10)(20)
// console.log(add)

// result10 =add(10) ;
// result= add(20);
// console.log(result)

/////////////////////////////////////////////////////////



// var todo =["todo0","todo1","todo2","todo3","todo4","todo5","todo6"]
// console.log(todo)
//  let total=0
// for (let i=0; i<=todo.length; i++){
//     total =total+todo.length;
    
// }
// function addtodos() {
//     todo.push("todo7")
//     console.log(todo)
// }
// addtodos()

// function changeTodo(position,newtodo ){
// todo[position]= newtodo
// console.log(todo)   
// }
// changeTodo(2,"updated nottodo")

// function replace(position,position2,value,value2){
// todo[position]=value
// todo[position2]=value2
// console.log(todo)
// }
// replace(4,2,"secon replace","first replace")



///////////////////////////////////////////////////////////


















































































})
