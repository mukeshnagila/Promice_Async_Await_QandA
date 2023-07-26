// Question No -- 1

function question1(){
    function start(name, callback) {
        alert('Hi' + ' ' + name);
        callback();
    }
    // callback function
    function callMe() {
        alert('I am callback function');
    }
    // passing function as an argument
    start('Mukesh', callMe);
}


// Question No -- 2

function question2(){
    function NumberDelay(number, callback) {
        setTimeout(() => {
          console.log(number);
          callback();
        }, number * 1000);
      }
      
      function first(callback) {
        NumberDelay(1, callback);
      }
      
      function second(callback) {
        NumberDelay(2, callback);
      }
      
      function third(callback) {
        NumberDelay(3, callback);
      }
      
      function fourth(callback) {
        NumberDelay(4, callback);
      }
      
      function fifth(callback) {
        NumberDelay(5, callback);
      }
      
      function sixth(callback) {
        NumberDelay(6, callback);
      }
      
      function seventh(callback) {
        NumberDelay(7, callback);
      }
      
      first(() => {
        second(() => {
          third(() => {
            fourth(() => {
              fifth(() => {
                sixth(() => {
                  seventh(() => {
                    console.log("All Functions Done");
                  });
                });
              });
            });
          });
        });
      });      
}


// Question No -- 3

function question3(){
    function NumberDelay(number) {
        return new Promise((resolve) => {
          setTimeout(() => {
            console.log(number);
            resolve();
          }, number * 1000);
        });
      }
      
      function printReverse(number) {
        if (number <= 7) {
          NumberDelay(number).then(() => {
            printReverse(number + 1);
          });
        } else {
          console.log("All Numbers Printed");
        }
      }
      printReverse(1);
      
}


// Question No -- 4

function question4(){
    function checkPromise(argument) {
        return new Promise((resolve, reject) => {
          if (argument === "yes") {
            resolve("Promise Resolved");
          } else {
            reject(new Error("Promise Rejected"));
          }
        });
      }
      checkPromise("yes")
        .then((result) => {
          console.log(result);
        })
        .catch((error) => {
          console.error(error.message);
        });
      
}


// Question No -- 5

function question5(){
    function User(name, callback) {
        console.log(`Hello, ${name}!`);
        callback();
      }
      
      function message() {
        console.log("Thanks for using Callback!");
      }
      
      User("Mukesh", message);
}


// Question No -- 6

function question6(){
    function first (callback){
        console.log("first")
        callback();
    }
    
    function second (callback){
        console.log("second")
        callback();
    }
    
    function third (callback){
        console.log("thired")
        callback();
    }
    
    function fourth (callback){
        console.log("fourth")
        callback();
    }
    
    first(() => {
        second(() =>{
            third(() =>{
                fourth(() =>{
                    console.log("All Functions Done")
                })
            })
        })
    })
}


// Question No -- 7

function question7(){
  function UserData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const user = { id: 1, name: 'Mukesh', age: 23 };
        resolve(user);
      }, 1000);
    });
  }
  
  function UserPosts() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const posts = [
          { title: 'Post 1' },
          { title: 'Post 2' },
        ];
        resolve(posts);
      }, 1500);
    });
  }
  
  UserData()
    .then(user => {
      console.log("User data:", user);
      // No need to pass user as an argument to UserPosts()
      return UserPosts(); // Chaining the next promise
    })
    .then(posts => {
      console.log("User posts:", posts);
    })
    .catch(error => {
      console.error("Error in data:", error);
    });
  
}


// Question No -- 8

function question8(){
  // Simulating a function to fetch data from an API using async/await
function MainData() {
  return new Promise((resolve, reject) => {
    // Simulating API call delay with setTimeout
    setTimeout(() => {
      const data = { name: 'Mukesh', age: 22
      };
      // Simulate a successful response
      resolve(data);
      // Simulate an error response
      // reject("Error: Unable to fetch data from the API");
    }, 1500);
  });
}

// Using async/await to fetch data and handle it
async function getData() {
  try {
    const data = await MainData();
    console.log("Data return successfully:", data);
  } catch (error) {
    console.error("Error find data:", error);
  }
}

// Calling the async function
getData();
}


// Question No -- 9

function question9(){
  function demo(){
    return new Promise((res)=>{
        setTimeout(()=>{
            res("resolve1");
        },1000)
    })
}
function demo2(){
    return new Promise((res)=>{
        setTimeout(()=>{
            res("resolve2");
        },1000)
    })
}
function demo3(){
    return new Promise((res)=>{
        setTimeout(()=>{
            res("resolve3");
        },1000)
    })
}

let pro = [demo(),demo2(),demo3()];

Promise.all(pro)
.then((a)=>{
    console.log(a)
    })
   
.catch((e)=>console.log(e));
}


