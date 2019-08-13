function fnParams(name1,name2,name3){
    console.log(name1,name2,name3);
}
fnParams("U","M","A");

function fnParams1(... myParams){
    console.log(myParams);
}

fnParams1();
function fnParams2(category,...items){
    console.log(category);
    console.log(items);
    
}

fnParams2("Electronics");
fnParams2("A","B","C");