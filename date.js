console.log(module);
exports.getDate= function() {
let today=new Date();
const options={
  weekday:'long',
  day:'numeric',
  month:'long'
};
//const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
return today.toLocaleDateString("en-US",options);

}
exports.getDay= function(){
let today=new Date();
const options={
  weekday:'long',
};
return today.toLocaleDateString("en-US",options);
}
