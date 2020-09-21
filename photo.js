class Photo {
    constructor(width = 8 , height = 10){
        this.width = width;
        this.height = height;
  
    }

    Price()
{
    let price;
    if (this.width == 8 && this.height == 10)
        return price =4;
    else if (this.width == 10 && this.height == 12)
        return price = 6;
    else 
        return price = 10;
}
    toString(){
        return "This is a " + this.width+ " by " + this.height + " photo and it costs " + this.Price();

    }
}

medium = new Photo(10,12);
medium.Price();
console.log(medium.toString());
other = new Photo(5,12);
other.Price();
console.log(other.toString());

class MattedPhoto extends Photo{
    constructor(width = 8 , height = 10,color){
        super(width, height);
        this.color = color;
    }
    Price()
    {
        let price;
        price = super.Price(this.width, this.height) + 10;
        return price;
    }
    toString(){
        return "This is a " +this.width + " by "+this.height + " matted " +this.color + " photo and it costs " + this.Price();
    }
}

class FramedPhoto extends Photo{
    constructor(width = 8 , height = 10, material, style){
        super(width, height);
        this.material = material;
        this.style = style;
    }
    Price()
    {
        let price;
        price = super.Price(this.width, this.height) + 25;
        return price;
    }
    toString(){
        return "This is a " +this.width + " by "+this.height + " " +this.material + " framed photo. The style is "+ this.style + " and it costs " + this.Price();
    }
}

//photo
medium = new Photo(10,12);
medium.Price();
console.log(medium.toString());
other = new Photo(5,12);
other.Price();
console.log(other.toString());

//matted
greenMedium = new MattedPhoto(10,12,"green");
greenMedium.Price();
console.log(greenMedium.toString());

redSmall = new MattedPhoto(8,10,"red");
redSmall.Price();
console.log(redSmall.toString());
//framed
silverRomanMedium = new FramedPhoto(10,12, "silver", "roman")
silverRomanMedium.Price();
console.log(silverRomanMedium.toString());

goldItalianOther = new FramedPhoto(7,9,"gold","italian")
goldItalianOther.Price();
console.log(goldItalianOther.toString());