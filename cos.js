//podstawowe wartosci
let a = 5
let b = 15
let cwel = a + b;
let siur = "bamamam"
let c = " lol"

console.log(cwel)
cwel = b * a / 2 + 2.5
console.log(cwel)
console.log(siur)
let myStr = " To jest coś, "  
myStr +="okej lolol"
//laczenie
let lol = cwel + myStr;
console.log(lol)
//dlugosc stringa
let myStrlength = myStr.length;
console.log(myStrlength)

let p = 0  + myStrlength

console.log(p)

let cos = 41
p = cos.length + myStrlength
console.log(p)


//kolejny znak w stringu
let nazwa  = "ala"
letter = nazwa[0]
console.log(letter)
let nazwa2 = "pała"
letter = nazwa2[3]
console.log(letter)

let abc = "jlekoks"
abc = "alekoks"
console.log(abc)


//podstawowa funkcja
function gierka(podmiot, czasownik, przymiotnik, spojnik, rzeczownik) {
    let result = "";
   result += "ten " + podmiot + przymiotnik + czasownik + spojnik + rzeczownik;
    return result;
   
}
console.log(gierka("łeb", " chowa", " szybko", " do" , " wora"));

//arraye
let nested = [["gta", 5], ["gta", 4],]
console.log(nested)




let tenArray = [{imie: "Szymon" , wiek: 18 , dom: "Szowsko"}, {imie: "Leszcz" , wiek: 20 , dom: "Wiazo"}]


console.log(tenArray[1])

