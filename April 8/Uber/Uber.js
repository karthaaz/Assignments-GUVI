class Uber {
    constructor(starting, ending, pricePerKm)
    {
    this.starting=starting;
    this.ending=ending;
    this.pricePerKm=pricePerKm;
    }
    price()
    {
        return (this.pricePerKm*(this.ending-this.starting))
    }
}
let amount = new Uber(10,50,25)
console.log(amount.price())