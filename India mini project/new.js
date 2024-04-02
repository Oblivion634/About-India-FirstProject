const Sheep=[true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true];
  let j=0;
  function countSheeps(array0fSheep) 
  {
    for (let i=0;i<array0fSheep.length-1;i++)
      {
          if (array0fSheep[i]= true)
        {
          j=j+1;
        }
      }
    return j;
  }
  const final = countSheeps(Sheep);
  console.log(final);