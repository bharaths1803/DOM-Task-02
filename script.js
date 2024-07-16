function label_create(tagname, attrname, attrvalue, content){
  var ele = document.createElement(tagname);
  ele.setAttribute(attrname, attrvalue);
  ele.innerHTML = content;
  return ele; 
}

function input_create(tagname, attrname, attrvalue, attrname2, attrvalue2,content){
  var input_ele = document.createElement(tagname);
  input_ele.setAttribute(attrname,attrvalue);
  input_ele.setAttribute(attrname2,attrvalue2);
  input_ele.innerHTML=content;
  return input_ele;
}

function br_create(){
  var break_ele = document.createElement("br");
  return break_ele;
}

function foo() {
  var res = document.getElementById("first").value;
  console.log(res);
  res = document.getElementById("mid").value;
  console.log(res);
  res = document.getElementById("last").value;
  console.log(res);
  res = document.getElementById("mail").value;
  console.log(res);
  res = document.getElementById("pass").value;
  console.log(res);
}

var firstname = label_create("label","for","first","Firstname");
var firstname_input = input_create("input","id","first","type","text","");
var line_break1 = br_create();

var middlename = label_create("label","for","mid","Middlename");
var middlename_input = input_create("input","id","mid","type","text","");
var line_break2 = br_create();

var lastname = label_create("label","for","last","Lastname");
var lastname_input = input_create("input","id","last","type","text","");
var line_break3 = br_create();

var email = label_create("label","for","mail","Email");
var email_input = input_create("input","id","mail","type","email","");
var line_break4 = br_create();

var password = label_create("label","for","pass","Password");
var password_input = input_create("input","id","pass","type","password","");
var line_break5 = br_create();

var button = input_create("button","type","button","onclick","foo()","Click me");


document.body.append(firstname,firstname_input,line_break1,middlename,middlename_input,line_break2,lastname,lastname_input,line_break3,email,email_input,line_break4,password,password_input,line_break5,button);

