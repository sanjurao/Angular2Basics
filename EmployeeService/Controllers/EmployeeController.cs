using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using EmployeeService.Models;

namespace EmployeeService.Controllers
{
    public class EmployeeController : ApiController
    {
        [HttpGet]
        public IEnumerable<Employee> GetEmployees()
        {
            using (SI360_MainEntities e = new SI360_MainEntities())
            {
                return e.Employees.ToList();
            }
        }
        [HttpGet]
        public Employee GetEmployees(string id)
        {
            using (SI360_MainEntities e = new SI360_MainEntities())
            {
                return e.Employees.ToList().FirstOrDefault(x => x.code == id);
            }
        }
    }
}
