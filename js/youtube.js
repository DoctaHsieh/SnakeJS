{   
  function doStuff(input, input2){
    console.log(input);
    console.log(this);
  }

  doStuff.call("hello", 5, 10);
}