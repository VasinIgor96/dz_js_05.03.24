
const countProps = function(obj) {
    const keys = Object.keys(obj);
    return keys.length;
  };
  
  console.log(countProps({}));
  console.log(countProps({ name: 'Mango', age: 2 }));
  console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 }));
  
  const findBestEmployee = function(employees) {
    let bestEmployee = '';
    let maxTasks = 0;
  
    for (const employee in employees) {
      const tasks = employees[employee];
      if (tasks > maxTasks) {
        maxTasks = tasks;
        bestEmployee = employee;
      }
    }
  
    return bestEmployee;
  };
  
  console.log(findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  }));
  
  console.log(findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  }));
  
  console.log(findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  }));
  