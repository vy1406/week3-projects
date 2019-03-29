
class Person {
  constructor(name, startYear) {
    this.name = name
    this.startYear = startYear
    this.courses = []
  }

  addCourse(course) {
    this.courses.push(course)
  }
}
class Student extends Person {
  constructor(name, startYear) {
    super(name, startYear)
    this.grades = []
  }
  addCourse(course) {
    if (this.courses.indexOf(course) == -1) {
      super.addCourse(course)
    }
  }
  receiveGrade(courseName, finalGrade) {
    this.grades.push({
      course: courseName,
      grade: finalGrade
    })
  }
}
class Teacher extends Person {
  constructor(name, startYear, salary) {
    super(null, startYear)
    this.salary = salary
    this.name = "Professor " + name
  }
}
class TeachingAssistant extends Teacher {
  constructor(name, startYear, salary) {
      super(name, startYear, salary)
  }
}
class Principal extends Person{
    constructor(name, startYear){
      super(name,startYear)
      this.teachers = []
      this.students = []
    }
    hireTeacher(argTeacher){
      console.log(this.name + " just hired " + argTeacher.name)
      this.teachers.push(argTeacher)
    }
    recruitStudent(argStudent){
      this.students.push(argStudent)
    }
    expelStudent(argStudent){
      for ( let i = 0 ; i < this.students.length ; i ++ )
        if ( this.students[i].name == argStudent.name)
           this.students.splice(i, 1)
    }
    transferStudent(argStudent, argPrincipal){
      this.expelStudent(argStudent)
      argPrincipal.recruitStudent(argStudent)
    }
}


 
const p1 = new Principal("Martin", 1991)
const p2 = new Principal("Martha", 1990)

const t1 = new Teacher("Cassandra", 2002, 40000)
const t2 = new Teacher("Kevin", 2006, 30000)

const s1 = new Student("Ronda", 2017)
const s2 = new Student("Byron", 2016)

//1 & 2
p1.hireTeacher(t1) //should print "Martin just hired Cassandra"
console.log(p1.teachers) //should print Array(1) [Teacher] - the teacher should be Cassandra

p1.hireTeacher(t2) //should print "Martin just hired Kevin"
console.log(p1.teachers) //should print Array(2) [Teacher, Teacher]

//3 & 4
p1.recruitStudent(s1)
p1.recruitStudent(s2)
console.log(p1.students) //should print Array(2) [Student, Student]

//5
p1.expelStudent(s1)
console.log(p1.students) //should print Array(1) [Student] - the student should be Byron

//6
p1.transferStudent(s2, p2)
console.log(p1.students) //should print Array(0) []
console.log(p2.students) //should print Array(1) [Student] - the student should be Byron