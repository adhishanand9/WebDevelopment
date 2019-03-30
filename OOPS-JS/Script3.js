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
