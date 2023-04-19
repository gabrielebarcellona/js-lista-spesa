 const eleList = document.querySelector('.list');

myArr =[
'funghi',
'patate',
'limoni',
'detersivo',
'pasta',
'acciughe',
'dentifricio',
]

    let i = 0
while(i < myArr.length){
    console.log(myArr[i]);
    eleList.innerHTML += `<li> ${myArr[i]}</li>`
    i++
}
