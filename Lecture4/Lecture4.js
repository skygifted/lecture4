
{
 
   const Cars = ["BMW","TOYOTA","HUNDA"]
   const Person = {}
   
    
 

   console.log(Person instanceof Array)
   console.log(Array.isArray(Cars))
  
}

{

   const Cars = ["BMW","TOYOTA","HUNDA"]
   
    
 
   console.log(Cars.toString())
  
}

{

    const Cars = ["BMW","TOYOTA","HUNDA"]
   
    
 
    console.log(Cars.join('/'))
   
}

{



 
   const Cars = ["BMW","TOYOTA","HUNDA"]
   
    
 
   console.log(Cars.pop())
  
}

{


 
   const Cars = ["BMW","TOYOTA","HUNDA"]
   
    
 
   console.log(Cars.shift())

  
}

{

     
   const Cars = ["BMW","TOYOTA","HUNDA"]
   
    
   delete Cars[1]

console.log(Cars)


}

{


 
   const Cars = ["BMW","TOYOTA","HUNDA"]
   
   const SecondList = ['Hayundi']
     

    let Newlist = Cars.concat(SecondList)
   console.log(Newlist)

}

{

    const Cars = ["BMW","TOYOTA","HUNDA"]
   
   
    Cars.splice(2,0,"Hayundi")



   console.log(Cars)
}

{

     
   const Cars = ["BMW","TOYOTA","HUNDA"]
   
   let newList = Cars.slice(0,2)



 console.log(newList)
}

{


   const Cars = ["HUNDA","TOYOTA","BMW"]
   
   let newList = Cars.sort()



 console.log(newList)

}

{


   const Numbers = [100, 30, 1, 5, 50]

   Numbers.forEach(NumberList)
   


   function NumberList(value) {

     console.log(value)
}

}

{

     
   const Numbers = [100, 30, 1, 5, 50]

   Numbers.map(NumberList)
   


   function NumberList(value) {

     console.log(value *2)
}


}

{

    const Numbers = [100, 30, 1, 5, 50]

    let List =  Numbers.filter(Flt)

     console.log(List)


     function  Flt(value){

               
       return value < 50
}

}

{

    const Numbers = [100, 30, 1, 5, 50]

    let List =  Numbers.reduce(Sum)

    console.log(List)


     function  Sum(total,value){

               
       return total + value
}
}

{

     
   const Numbers = [100, 30, 1, 5, 50]

   let List =  Numbers.reduceRight(Sum)

   console.log(List)


    function  Sum(total,value){

              
      return total + value
}


}

{

    const Numbers = [100, 30, 1, 5, 50]

     let List =  Numbers.every(Check)

     console.log(List)


      function  Check(value){

                
        return value > 20
}
}

{

    const Numbers = [100, 30, 1, 5, 50]

    let List =  Numbers.some(Check)

    console.log(List)


     function  Check(value){

               
       return value > 20
}

}

{

    const Numbers = [100, 30, 1, 5, 50]

    let List =  Numbers.indexOf(5)



    console.log(List)

}

{


 
   const Numbers = [100, 30, 1, 5, 5,50]

   let List =  Numbers.lastIndexOf(5)



   console.log(List)

}

{


 
   const Numbers = [30, 100, 1, 5, 50]

   let List =  Numbers.find(Check)

   console.log(List)


    function  Check(value){

              
      return value > 20
}
}

{


   const Numbers = [30, 100, 1, 5, 50]

   let List =  Numbers.findIndex(Check)

   console.log(List)


    function  Check(value){

              
      return value > 20
}
}