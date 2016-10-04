var employees = [
    {"id": 0, "firstName": "Josh", "lastName": "Cho", "reports": 4, "title": "CTO", "location": "Wokingham", "department": "Corporate", "mobilePhone": "617-000-0001", "officePhone": "781-000-0001", "email": "jking@fakemail.com", "city": "Boston, MA", "pic": "James_King.jpg", "twitterId": "@fakejking", "blog": "http://coenraets.org"},
    {"id": 1, "firstName": "Mark", "lastName": "Jeffery", "managerId": 0, "managerName": "David Wadhwani", "reports": 2, "title": "VP of Marketing", "location": "Basingstoke","department": "Marketing", "mobilePhone": "617-000-0002", "officePhone": "781-000-0002", "email": "jtaylor@fakemail.com", "city": "Boston, MA", "pic": "Julie_Taylor.jpg", "twitterId": "@fakejtaylor", "blog": "http://coenraets.org"},
    {"id": 2, "firstName": "Steve", "lastName": "Waterworth", "managerId": 0, "managerName": "David Wadhwani", "reports": 0, "title": "CFO", "location": "Wallingford","department": "Accounting", "mobilePhone": "617-000-0003", "officePhone": "781-000-0003", "email": "elee@fakemail.com", "city": "Boston, MA", "pic": "Eugene_Lee.jpg", "twitterId": "@fakeelee", "blog": "http://coenraets.org"},
    {"id": 3, "firstName": "Pete", "lastName": "Holditch", "managerId": 0, "managerName": "David Wadhwani", "reports": 3, "title": "VP of Engineering", "location": "Berkhamsted","department": "Engineering", "mobilePhone": "617-000-0004", "officePhone": "781-000-0004", "email": "jwilliams@fakemail.com", "city": "Boston, MA", "pic": "John_Williams.jpg", "twitterId": "@fakejwilliams", "blog": "http://coenraets.org"},
    {"id": 4, "firstName": "Andrew", "lastName": "Jackson", "managerId": 0, "managerName": "David Wadhwani", "reports": 2, "title": "VP of Sales", "location": "London","department": "Sales", "mobilePhone": "617-000-0005", "officePhone": "781-000-0005", "email": "rmoore@fakemail.com", "city": "Boston, MA", "pic": "Ray_Moore.jpg", "twitterId": "@fakermoore", "blog": "http://coenraets.org"},
    {"id": 5, "firstName": "Asger", "lastName": "Pedersen", "managerId": 3, "managerName": "David Wadhwani", "reports": 0, "title": "QA Manager","location": "Copenhagen", "department": "Engineering", "mobilePhone": "617-000-0006", "officePhone": "781-000-0006", "email": "pjones@fakemail.com", "city": "Boston, MA", "pic": "Paul_Jones.jpg", "twitterId": "@fakepjones", "blog": "http://coenraets.org"},
    {"id": 6, "firstName": "Klaus", "lastName": "Knudsen", "managerId": 3, "managerName": "David Wadhwani", "reports": 0, "title": "Software Architect","location": "Skibby", "department": "Engineering", "mobilePhone": "617-000-0007", "officePhone": "781-000-0007", "email": "pgates@fakemail.com", "city": "Boston, MA", "pic": "Paula_Gates.jpg", "twitterId": "@fakepgates", "blog": "http://coenraets.org"},
    {"id": 7, "firstName": "Michael", "lastName": "Hansen", "managerId": 1, "managerName": "David Wadhwani", "reports": 0, "title": "Marketing Manager", "location": "Oslo","department": "Marketing", "mobilePhone": "617-000-0008", "officePhone": "781-000-0008", "email": "lwong@fakemail.com", "city": "Boston, MA", "pic": "Lisa_Wong.jpg", "twitterId": "@fakelwong", "blog": "http://coenraets.org"},
    {"id": 8, "firstName": "Hans", "lastName": "Wallentin", "managerId": 1, "managerName": "David Wadhwani", "reports": 0, "title": "Marketing Manager","location": "Stockholm", "department": "Marketing", "mobilePhone": "617-000-0009", "officePhone": "781-000-0009", "email": "gdonovan@fakemail.com", "city": "Boston, MA", "pic": "Gary_Donovan.jpg", "twitterId": "@fakegdonovan", "blog": "http://coenraets.org"},
    {"id": 9, "firstName": "Jesper", "lastName": "Rellme", "managerId": 4, "managerName": "David Wadhwani", "reports": 0, "title": "Sales Representative", "location": "Stockholm","department": "Sales", "mobilePhone": "617-000-0010", "officePhone": "781-000-0010", "email": "kbyrne@fakemail.com", "city": "Boston, MA", "pic": "Kathleen_Byrne.jpg", "twitterId": "@fakekbyrne", "blog": "http://coenraets.org"},
    {"id": 10, "firstName": "Andrew", "lastName": "Page", "managerId": 4, "managerName": "David Wadhwani", "reports": 0, "title": "Sales Representative","location": "London", "department": "Sales", "mobilePhone": "617-000-0011", "officePhone": "781-000-0011", "email": "ajones@fakemail.com", "city": "Boston, MA", "pic": "Amy_Jones.jpg", "twitterId": "@fakeajones", "blog": "http://coenraets.org"},
    {"id": 11, "firstName": "Karl", "lastName": "Degenhardt", "managerId": 3, "managerName": "David Wadhwani", "reports": 0, "title": "Software Architect", "location": "Manchester","department": "Engineering", "mobilePhone": "617-000-0012", "officePhone": "781-000-0012", "email": "swells@fakemail.com", "city": "Boston, MA", "pic": "Steven_Wells.jpg", "twitterId": "@fakeswells", "blog": "http://coenraets.org"},
    {"id": 12, "firstName": "Oliver", "lastName": "Rees", "managerId": 3, "managerName": "David Wadhwani", "reports": 0, "title": "Software Architect", "location": "Reading","department": "Engineering", "mobilePhone": "617-000-0012", "officePhone": "781-000-0012", "email": "swells@fakemail.com", "city": "Boston, MA", "pic": "Steven_Wells.jpg", "twitterId": "@fakeswells", "blog": "http://coenraets.org"},
    {"id": 13, "firstName": "Lee", "lastName": "Farrar", "managerId": 3, "managerName": "David Wadhwani", "reports": 0, "title": "Software Architect","location": "Bottom", "department": "Engineering", "mobilePhone": "617-000-0012", "officePhone": "781-000-0012", "email": "swells@fakemail.com", "city": "Boston, MA", "pic": "Steven_Wells.jpg", "twitterId": "@fakeswells", "blog": "http://coenraets.org"}
];

exports.findAll = function (req, res, next) {
    var name = req.query.name;
    if (name) {
        res.send(employees.filter(function(employee) {
            return (employee.firstName + ' ' + employee.lastName).toLowerCase().indexOf(name.toLowerCase()) > -1;
        }));
    } else {

        res.send(employees);
    }
};

exports.findById = function (req, res, next) {
    if(req.params.id==4)
    {
        setTimeout(function() {
            console.log('Pausing');}, 2000);
    }
    var id = req.params.id;
    res.send(employees[id]);
};
