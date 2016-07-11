function AcmeDb()
{
	this.employees = [];

}

AcmeDb.prototype.getEmployees = function()
{
	return this.employees.sort(function(a, b) {
	  var nameA = a.name.toUpperCase(); // ignore upper and lowercase
	  var nameB = b.name.toUpperCase(); // ignore upper and lowercase
	  if (nameA < nameB) {
	    return -1;
	  }
	  if (nameA > nameB) {
	    return 1;
	  }

	  // names must be equal
	  return 0;
	});
}

AcmeDb.prototype.addEmployee = function(name,id)
{
	var employee = new Employee(name,id);
	this.employees.push(employee);
}

AcmeDb.prototype.getEmployee = function(idLookup)
{
	function findById(employee) { 
	    return employee.id === idLookup;
	}
	return this.employees.find(findById);
}

AcmeDb.prototype.deleteEmployee = function(nameLookup)
{
	function findByName(employee)
	{
		return employee.name == nameLookup;

	}

	this.employees.splice(this.employees.findIndex(findByName),1);
}

AcmeDb.prototype.groupedEmployees = function()
{
	var a = 97;
	var charArray = {};
	for (var i = 0; i<26; i++)
   		charArray[String.fromCharCode(a + i)] = [];

   	this.employees.forEach( function(employee)
   	{
   		var firstLetterOfName = employee.name.charAt(0);
   		charArray[firstLetterOfName].push(employee);
   	})

   	return charArray;
}

