function getGoods(obj, from, to) {
  let resObj = {};
for (let item in obj){
  console.log ("key", key);//ключи piano guitar
  console.log(obj[key]);//щбъекты
  console.log( obj[key]["price"]);//значения свойства price
  if (obj[key]["price"] >= from && obj[key]["price"] <= to);{
    resObj[key] = obj[key];//добавляеи родходящие товары в результирующий объект
  }
}
console.log(resObj);
  return resObj;

getGoods(goods, from:2000, to:3000);
