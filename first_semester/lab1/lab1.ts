  enum Category {
    BusinessAnalyst,
    Developer,
    Designer,
    QA,
    ScrumMaster,
  }
  
type worker = {
    id: number;
    name: string;
    surname: string;
    available: boolean;
    salary: number;
    category: Category;
  };



  // 1.1
  function getAllworkers(): Array<worker> {
    let workers: Array<worker> = [
      {
        id: 1,
        name: "Ivan",
        surname: "Ivanov",
        available: true,
        salary: 1000,
        category: Category.Developer,
      },
      {
        id: 2,
        name: "Petro",
        surname: "Petrov",
        available: true,
        salary: 1500,
        category: Category.QA,
      },
      {
        id: 3,
        name: "Vasyl",
        surname: "Vasyliev",
        available: false,
        salary: 1600,
        category: Category.BusinessAnalyst,
      },
      {
        id: 4,
        name: "Evgen",
        surname: "Zhukov",
        available: true,
        salary: 1300,
        category: Category.Designer,
      },
    ];
    return workers;
  }
  
  getAllworkers();
  
  function logFirstAvaliable(workers: Array<worker> = getAllworkers()): void {
    console.log(`Number of workers ${workers.length}`);
    workers.forEach((worker: worker) => {
      if (worker.available) {
        console.log(`Available worker: ${worker.name} ${worker.surname}`);
      }
    });
  }
  
  logFirstAvaliable(getAllworkers());
  
  // 1.2
  
  function getWorkersNamesByCategory(category: Category = Category.Designer): Array<string> {
    let workers: Array<worker> = getAllworkers();
    let names: Array<string> = [];
  
    workers.forEach((worker: worker) => {
      if (worker.category == category) {
        names.push(worker.surname);
      }
    });
    return names;
  }
  
  function logWorkersNames(array: Array<string>): void {
    console.log(array);
  }
  
  logWorkersNames(getWorkersNamesByCategory(Category.Developer));
  
  // 1.3
  
  console.log("Developers:");
  
  for (const worker of getAllworkers()) {
    if (worker.category === Category.Developer) {
      console.log(`${worker.name} ${worker.surname}`);
    }
  }
  
  function getWorkerByID(id: number) {
    let workers: Array<worker> = getAllworkers();
  
    let worker: worker = workers.find((element) => element.id === id) as worker;
  
    return { name: worker.name, surname: worker.surname, salary: worker.salary };
  }
  
  console.log(getWorkerByID(1));
  
  // 1.4
  
  function createCustomerID(name: string, id: number): string {
    return name.concat(id.toString());
  }
  
  let myID: string = createCustomerID("Ann", 10);
  console.log(myID);
  
  let IdGenerator: (name: string, id: number) => string;
  
  IdGenerator = createCustomerID;
  
  console.log(IdGenerator("Jim", 18));
  
  // 1.5
  
  function createCustomer(name: string, age?: number, city?: string) {
    if (typeof age == "undefined") {
      console.log(`Name: ${name}`);
    } else if (typeof age !== "undefined" && typeof city == "undefined") {
      console.log(`Name: ${name}\nAge: ${age}`);
    } else {
      console.log(`Name: ${name}\nAge: ${age}\nCity: ${city}`);
    }
  }
  
  createCustomer("Bill");
  createCustomer("Bill", 20);
  createCustomer("Bill", 20, "London");
  
  console.log(getWorkersNamesByCategory());
  logFirstAvaliable();
  
  function checkoutWorkers(customer: string, ...workerIDs: number[]) {
    let workers: Array<string> = [];
    workerIDs.forEach((id) => {
      let worker = getAllworkers().find((element) => element.id == id);
  
      if (worker?.available) {
        workers.push(`${worker.name} ${worker.surname}`);
      }
    });
  
    console.log(`Customer: ${customer}`);
    return workers;
  }
  
  let myWorkers = checkoutWorkers("Ann", 1, 2, 4);
  myWorkers.forEach((element) => {
    console.log(element);
  });