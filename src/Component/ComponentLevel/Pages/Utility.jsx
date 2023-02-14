export const addQuantity = (arr) => {
  const res = arr.map((item) => {
    return { ...item, Quantity: 10, userQuantity: 0 };
  });
  return res;
};

export const handleIncrementQty = (arr, id) => {
  const res = arr.map((item) => {
    if (item.id == id) {
      return { ...item, userQuantity: item.userQuantity + 1 };
    } else {
      return item;
    }
  });
  return res;
};

export const handleDecremenyQty=(arr,id)=>{
    const res=arr.map((item)=>{
   if (item.id== id){
    return { ...item, userQuantity: item.userQuantity  -1  }
    } else if (item<=0) {
        return {...item, userQuantity: item.userQuantity  -2 };
  
   }else{
    return (item);
   }
    })
    return res
}