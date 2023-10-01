enum Category{
    BusinessAnalyst,
    Developer,
    Designer,
    QA,
    ScrumMaster
}
//2.1
interface Workers {
    id:number,
    name:string,
    surname:string,
    available:boolean,
    salary:number,
    category:Category,
    markPrize:PrizeLogger 
}

function getAllworkers() {
    let workers: Workers[] = [
      {
        id: 1,
        name: "Ivan",
        surname: "Ivanov",
        available: true,
        salary: 1000,
        category: Category.Developer,
        markPrize:prizeFunc
      },
      {
        id: 2,
        name: "Petro",
        surname: "Petrov",
        available: true,
        salary: 1500,
        category: Category.QA,
        markPrize:prizeFunc
      },
      {
        id: 3,
        name: "Vasyl",
        surname: "Vasyliev",
        available: false,
        salary: 1600,
        category: Category.BusinessAnalyst,
        markPrize:prizeFunc
      },
      {
        id: 4,
        name: "Evgen",
        surname: "Zhukov",
        available: true,
        salary: 1300,
        category: Category.Designer,
        markPrize:prizeFunc
      },
    ];
    return workers;
  }

  function getWorkerByID(id:number): Workers | undefined{
        return getAllworkers().find(element =>element.id==id);
  }

  console.log(getWorkerByID(1));

  function PrintWorker(worker: Workers){
        console.log(`${worker.name} ${worker.surname} got salary ${worker.salary}`);
  }

  console.log(PrintWorker({
    id: 1,
    name: "Ivan",
    surname: "Ivanov",
    available: true,
    salary: 1000,
    category: Category.Developer,
    markPrize:prizeFunc
  }));

//2.2
  interface PrizeLogger{
    (str:string):void;
  }

  function prizeFunc(str:string){
        console.log(str);
  }

  let logPrize:PrizeLogger=prizeFunc;
  console.log(logPrize("Some message"))

  //2.3
  interface Person{
    name:string,
    email:string
  }

  interface Author extends Person{
    numBooksPublished:number
  }

  interface Librarian extends Person{
    department:string,
    assistCustomer(custName :string) : void
  }

  let favoriteAuthor:Author= {name:"Tom", email:"tomauthor@gmail.com", numBooksPublished:3} 
  console.log(favoriteAuthor);
//   let favoriteLibrarian:Librarian={name:"Jim", email:"jimlibrarian@gmail.com", department:"archive", assistCustomer:function(custName :string){(console.log(custName))}}
//   console.log(favoriteLibrarian);
//   favoriteLibrarian.assistCustomer("Bob");

  //2.4
  class UniversityLibrarian implements Librarian{
    name:string;
    email:string;
    department:string;
    assistCustomer(custName :string) : void{
        console.log(`${this.name} is assisting ${custName}`);
    }

    constructor(name: string, email: string, department: string) {
        this.name = name;
        this.email = email;
        this.department = department;
      }
  }

  let favoriteLibrarian:Librarian=new UniversityLibrarian("default","default","default");
  favoriteLibrarian.name=("Sandy");
  favoriteLibrarian.assistCustomer("Max");
  console.log(favoriteLibrarian);
  
  //2.5
  abstract class ReferenceItem{
    // title:string;
    // year:number;

    // constructor(newTitle:string,newYear:number){
    //     this.title=newTitle;
    //     this.year=newYear;
    //     console.log("Creating a new ReferenceItem...");
    // }

    constructor(public title:string,protected year:number){

    }

    private _publisher:string="default";
    static department:string="scientific";

    publisherGetter(): string{
        return this._publisher.toUpperCase();
    }

    publisherSetter(newPublisher:string){
        this._publisher=newPublisher;
    }

    printItem(): void{
        console.log(`${this.title} was published in ${this.year}, department ${ReferenceItem.department}`)
    }

    abstract printCitation(): void
  }

//   let ref=new ReferenceItem("plants",2023);
//   ref.printItem();

//   ref.publisherSetter("publisher2.0");
//   console.log(ref.publisherGetter());

  //2.6
  class Encyclopedia extends ReferenceItem{

    constructor( public edition:number, title:string, year:number){
       super(title,year);
    }
    printItem(): void{
        console.log(`${this.title} was published in ${this.year}, department ${ReferenceItem.department}`)
        console.log(`Edition: ${this.edition}(${this.year})`)
    }
    printCitation():void {
        console.log("title - year")
    } 
  }

  let refBook=new Encyclopedia(3,"animals",2014);
  refBook.printItem();
  refBook.printCitation();