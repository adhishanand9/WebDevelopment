var a={name:"Adhish",
        getName:function(){
          return this.name;
        }};
console.log(a.name);
//console.log(a[name]);-Undefined
console.log(a['name']);
console.log(a.getName());
var b=a.getName;
console.log(b());
var c=a.getAge;
//console.log(c());
var d=a.getName();
console.log(d);
