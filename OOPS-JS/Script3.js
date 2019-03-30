var person={
  first_name:'',
  last_name:'',
  changeName:function(f_name,l_name)//no name should be given to function
  {
    this.first_name=f_name;
    this.last_name=l_name;
  },
  returnName:function(){
    return this.first_name+" "+this.last_name;
  }

};
person.changeName("Adhish","Anand");
var name=person.returnName();
console.log(name);
var abc=person;
abc.changeName("A","B");
var name2=abc.returnName();
console.log(name2);
console.log(person.returnName());
var s1={};
for(var key in person){
  s1[key]=person[key];
}
s1.changeName("Ka","SU");
var name3=s1.returnName();
console.log(name3);
console.log(person.returnName());
