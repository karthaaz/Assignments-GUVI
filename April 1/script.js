// // Assignment 1 : For Loops

for (let i of array) {
    console.log(i)
}

for (let i in array) {
    console.log(array[i])
}

array.forEach((data, num) => {
    console.log(data)
    console.log(num)
})


array.forEach(function (value, index) {
    console.log(value, index)
})

// Assignment 2 : Resume in JSON
{
    basicinfo:
     {
      name: "Karthick A",
      email : "karthickyash@gmail.com",
      phone : "9941379078"
      
      },
      
    work: 
      {
        company: "Amazon",
        position: "Catalogue Specialist 1"       
      }
   
    education: 
      {
        institution: "Anan Univ",
        area: "B.E".
      }
    
    
    skills: [
      {
        name: "Programming Language",
        Softwares: [ Java, JS, Node.JS, etc,.
        ]
      }
    ],
      languages: [
      {
        language: "English",
        Level: "8"
      }
      {
        language: "Tamil",
        Level: "10"
      }

    ],
  }