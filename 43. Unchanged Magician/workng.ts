
function  show_magicians(magicians:string[]):void{
    for(const magician of magicians){
        console.log(magician)
    }
};

function make_great2(magicians:string[]): string[] {
    const greatMagicians: [] = [];
    for(let i =0; i < magicians.length; i++){
        greatMagicians2.push(magicians[i] + ' the great');
    }
    return greatMagicians
};
const magicians3:string [] = ["Talha"," Hugard","Jimmy","Ricky Jay"];
const greatMagicians2:string [] = make_great2(magicians3);

show_magicians(magicians3)
show_magicians(greatMagicians2)