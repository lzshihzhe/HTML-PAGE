//陣列數

let A1=('明明')
let A20=('濱明')

let classA = ['明明','阿華','曉菁']
console.log('轉學前:',classA);

classA.push('濱明')
console.log('轉學後:',classA)


let a=[1,2,3]
console.log('before:',a)
a.push(4)
console.log('after:',a,)

let igphotos=[
'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg',
'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg',
'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg']

console.log('第一筆',igphotos[0],) 
console.log('第一筆',igphotos[1],) 
console.log('第一筆',igphotos[2]) 


///object
const card = {
    name :'lzsz-card',
    addres:'高雄市xxxxxx',
    age:'18', 
}



const post={
    image:'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg',
    desc:'一張圖片',
    date:'2021/07/09',
    comment:['關鍵詞','連接詞']
}    
const card2 = {
    name :'lzsz-card',
    addres:'台中市xxxxxx',
    age:'28', 
}

const post2={
    image:'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg',
    desc:'二張圖片',
    date:'2021/05/09',
    comment:['相識詞','相關詞']
}    
console.log(card.addres,card2.age)

const wall=[card,post,post2,card2]
console.log('wall',wall)