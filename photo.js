class Photo {
    constructor(width = 8 , height = 10, price = 0){
        this.width = width;
        this.height = height;
        this.price = price
    }

    Price()
{
    if (this.width == 8 && this.height == 10)
        return this.price =4;
    else if (this.width == 10 && this.height == 12)
        return this.price = 6;
    else 
        return this.price = 10;
}
    toString(){
        return "This is a " + this.width+ " by " + this.height + " photo and it costs " + this.price;

    }
}

medium = new Photo(10,12);
medium.Price();
console.log(medium.toString());
other = new Photo(5,12);
other.Price();
console.log(other.toString());