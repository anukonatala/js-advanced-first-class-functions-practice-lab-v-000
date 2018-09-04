// Code your solution in this file!

function logDriverNames(drivers){
  drivers.forEach(function(driver) {
  console.log(driver.name);
});
}

function logDriversByHometown(drivers, hometown){
   drivers.forEach(function(driver) {
      if(driver.hometown === hometown) console.log(driver.name);
});
}

function driversByRevenue(drivers){
  // drivers.sort((a, b) => (a.revenue) - (b.revenue));
  const sortDrivers = drivers.slice();
  return sortDrivers.sort(function(a, b) {
    return a.revenue - b.revenue;
  });
}

function driversByName(drivers){
  const sortDrivers= drivers.slice();
  return sortDrivers.sort();
}
