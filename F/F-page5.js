
//宣告//
// function hello () {
//     console .log ('hello world ')
// }
// function hello1 (){
//     console .log ('hello you')
// }
// function hello2 () {
//     console .log ('hello me ')
// }
// function hello3 () {
//     console .log ('hello they ')

// }
// hello1()
// hello2()
// hello3()


// function addmoney(){
// console.log(100+35+50)}

// addmoney()  



// function addmoney2 (pricel,pricel2,pricel3) 
//     {
//         let result=pricel+ pricel2+pricel3
//         let message='普通會員'

//         if (result>20000)   
//             {
//             message='vip會員'
//             }    
//         if (result>50000)           
//             {
//             message='VVIP會員'        
//             }
//          return message
// }
// let totle = addmoney2(515,141,86)

//  console.log(totle)


//  function money (gift,gift2,gift3){
//      let effect=gift+gift2+gift3
//      let message='C'
//      if(effect>10){massage='B級'}
//      if(effect>50){massage='A級'}
//      if(effect>80){massage='s級'}
//      return massage
//     }
//     let totl= money(5,1002,0)
//     console.log(totl)


  

//   function createcard(initname) {
//       this.name = initname
//     }
  
//   const a1 =new createcard ('小名1')
//   console .log(a1)
//   const a2 =new createcard ('小名2')
//   console .log(a2)
//   const a3 =new createcard ('小名3')
//   console .log(a3)
//   const a4 =new createcard ('小名4')
//   console .log(a4)


// class card{
//  constructor (initname){
//      this.name =initname
     

//      hello = () => {
//          console.log(this.name,"nice")}
//     }
 

// const c1 = new card ("jacle")
// const c2 = new card ("age:24")

// c2.hello()
// c1.hello()


// const  c3 = {name :"aa"}
// c3.helllo= c1.hello
// c3.helllo()

// class car {
//     constructor(name) {
//         this.name =name }
//    start(){
//          console.log('車子啟動')
//      }
// }

// class porshe extends car {
//         constructor(name) {
//         super(name)
//         }   
//     start2(){
//         super.start()
//         console.log('車子排氣')
//     }
// }
    
// const p1 = new porshe("jackie-porshe")
//     p1.start2 () 
//     console.log('車子啟動',p1.name)
    



class car {
    constructor(value){
    this.name = value}
    start(){
        console.log('價格')
    }
}

class BMW extends car {
    constructor (性能){
    super(性能)
    }

    start2(){
        super.start()
        condole.log('全都要')
    }
    start1 (){
        super.start ()
        console.log('都不要')
    }
}

 const p1 = new BMW("可要可不要")
 p1.start1 ()
 console.log(p1.name)