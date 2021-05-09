class Mkulima {
    constructor (farms,vendors,products,orders)
    {
    this.farms = farms;
    this.vendors = vendors;
    this.products = products;
    this.orders = orders;
}
    addFarm(farmId,farmName,farmer,phone,address){
       var farms={
           farmId:farmId,
           farmName:farmName,
           farmer:farmer,
           phone:phone,
           address:address,
        }
       this.farms.unshift(farms);
       return this.farms;
    }
    removeFarm(farmId){
        var farms2=this.farms.find(farms2=>farmId==farmId)
        return delete this.farms[farms2]
        }
    updateFarm(farmId,farmName,farmer,phone,address){
        let newFarm=this.farms.find(newFarm=>farmName=="Jesa")
        newFarm={
            farmId:farmId,
            farmName:farmName,
            farmer:farmer,
            phone:phone,
            address:address,
        }
        return newFarm
    }
    getFarm(farmId){
        let farms3=this.farms.find(farms3=>farms3.farmId==farmId)
        return farms3
    }
    addProduct(productId,name,price){
        let products={
            productId:productId,
            name:name,
            price:price,
        }
        this.products.push(products)
        return this.products
    }
    removeProduct(productId){
        var products2=this.products.find(products2=>productId==productId)
        return delete this.products[products2]
    }
    updateProduct(productId,name,price){
        let newProduct=this.products.find(newProduct=>name=="Tomatoes")
        newProduct={
            productId:productId,
            name:name,
            price:price,
        }
        return newProduct
    }
getProduct(productId){
    let products3=this.products.find(products3=>products3.productId==productId)
    return products3
}
printProduct(){
        for( let prodct of this.products){
        console.log(`${prodct.name},${prodct.price}`)
    }
}
calculateOrderCost(productId,quantity){
     let orderCost=this.products.find(orderCost=>orderCost.productId==productId)
     return orderCost.price*quantity
    }
}
var mkulima =new Mkulima([],[],[],[])
console.log(mkulima.addFarm(234,"Jesa","John","9087365254","Kampala"))
console.log(mkulima.addFarm(555,"Nakawa","Mary","77890287","Jinja"))
console.log(mkulima.addFarm(986,"Diary","Timo","07805378","Busia"))
console.log(mkulima.addFarm(788,"Grene","Faith","8974699755","Ntinda"))
console.log(mkulima.removeFarm(555))
console.log(mkulima.updateFarm(256,"Midway","Anita","078024367","Gulu"))
console.log(mkulima.getFarm(986))
//product
console.log(mkulima.addProduct(1,"Tomatoes",1000))
console.log(mkulima.addProduct(2,"PineApples",5000))
console.log(mkulima.addProduct(3,"Milk",3000))
console.log(mkulima.removeProduct(3))
console.log(mkulima.getProduct(2))
mkulima.printProduct()
console.log(mkulima.calculateOrderCost(2,7))



