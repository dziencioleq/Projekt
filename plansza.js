        let graczeTablica = []


//TWORZENIE PLANSZY
        const tablica = [
            [
                {
                    id: "pole23",
                    name: "",
                    value: 23
                },
                {
                    id: "pole22",
                    name: "rzucanie koscia Parzysta liczba = klaszczesz",
                    value: 22
                },
                {
                    id: "pole21",
                    name: "klaszczesz i idziesz na pole 30",
                    value: 21
                },
                {
                    id: "pole20",
                    name: "klaszczą niebieskoocy",
                    value: 20
                },
                {
                    id: "pole19",
                    name: "klaszcze ten, ktory jest najblizszy urodzin",
                    value: 19
                },
                {
                    id: "pole18",
                    name: "klaszcza rudzi",
                    value: 18
                },
                {
                    id: "pole17",
                    name: "klaszczą jedynaki",
                    value: 17
                },
                {
                    id: "pole16",
                    name: "klaszczą dziewczyny",
                    value: 16
                }
            ],
            [
                {
                    id: "pole24",
                    name: "klaszczą chłopacy",
                    value: 24
                },
                {
                    id: "pole49",
                    name: "klaszczą pracujący",
                    value: 49
                },
                {
                    id: "pole48",
                    name: "klaszcze najmlodszy",
                    value: 48
                },
                {
                    id: "pole47",
                    name: "Grupa wymysla wyzwanie",
                    value: 47
                },
                {
                    id: "pole46",
                    name: "klaszczą bruneci",
                    value: 46
                },
                {
                    id: "pole45",
                    name: "Nikt nie klaszcze",
                    value: 45
                },
                {
                    id: "pole44",
                    name: "",
                    value: 44
                },
                {
                    id: "pole15",
                    name: "klaszcze ten ktory ostatni przeklnie",
                    value: 15
                }
            ],
            [
                {
                    id: "pole25",
                    name: "Zamieniasz się miejscem z najblizszym chlopakiem",
                    value: 25
                },
                {
                    id: "pole50",
                    name: "Wybierasz osobę, która ma zaklaskać",
                    value: 50
                },
                {
                    id: "pole67",
                    name: "klaszczesz z nastepnym klaszczacym",
                    value: 67
                },
                {
                    id: "pole66",
                    name: "Klaszcze osoba z kolczykami",
                    value: 66
                },
                {
                    id: "pole65",
                    name: "Klaszcze ten kto najbliżej domu",
                    value: 65
                },
                {
                    id: "pole64",
                    name: "",
                    value: 64
                },
                {
                    id: "pole43",
                    name: "każesz zaklaskać 2 wybranym osobom",
                    value: 43
                },
                {
                    id: "pole14",
                    name: "klaszczą bezrobotni",
                    value: 14
                }
            ],
            [
                {
                    id: "pole26",
                    name: "klaszczą okularnicy",
                    value: 26
                },
                {
                    id: "pole51",
                    name: "klaszcze najwyższy",
                    value: 51
                },
                {
                    id: "pole68",
                    name: "klaszcza ci ktorzy sa w szkole średniej i ida oni na pole nr 61",
                    value: 68
                },
                {
                    id: "pole77",
                    name: "Osoba po prawej daje wyzwanie",
                    value: 77
                },
                {
                    id: "pole76",
                    name: "klaszczesz",
                    value: 76
                },
                {
                    id: "pole63",
                    name: "klaszcze najniższy",
                    value: 63
                },
                {
                    id: "pole42",
                    name: "klaszczą single",
                    value: 42
                },
                {
                    id: "pole13",
                    name: "klaszcza wszyscy uzytkownicy iphone",
                    value: 13
                }
            ],
            [
                {
                    id: "pole27",
                    name: "Wszyscy klaszczą oprócz ciebie",
                    value: 27
                },
                {
                    id: "pole52",
                    name: "klaszczą osoby nie stąd",
                    value: 52
                },
                {
                    id: "pole69",
                    name: "klaszczą osoby w związku",
                    value: 69
                },
                {
                    id: "pole78",
                    name: "wszyscy klaszczą!!!",
                    value: 78
                },
                {
                    id: "pole75",
                    name: "klaszcza ci ktorzy byli w zawodowce i wracaja na pole 68",
                    value: 75
                },
                {
                    id: "pole62",
                    name: "klaszcza urodzeni w nieparzystym miesiacu",
                    value: 62
                },
                {
                    id: "pole41",
                    name: "klaszcze ten kto nie zaspiewa jungle girl",
                    value: 41
                },
                {
                    id: "pole12",
                    name: "klaszcza wszyscy w bluzach",
                    value: 12
                }
            ],
            [
                {
                    id: "pole28",
                    name: "klaszcza osoby z rodzeństwem",
                    value: 28
                },
                {
                    id: "pole53",
                    name: "klaszcza palacy",
                    value: 53
                },
                {
                    id: "pole70",
                    name: "klaszcza osoby z ciemna bielizna",
                    value: 70
                },
                {
                    id: "pole79",
                    name: "META",
                    value: 79
                },
                {
                    id: "pole74",
                    name: "klaszcza wszyscy oprocz ciebie",
                    value: 74
                },
                {
                    id: "pole61",
                    name: "klaszcza rudzi",
                    value: 61
                },
                {
                    id: "pole40",
                    name: "klaszcza ci, którzy mieli coś złamanego",
                    value: 40
                },
                {
                    id: "pole11",
                    name: "klaszcza brozowooczy",
                    value: 11
                }
            ],
            [
                {
                    id: "pole29",
                    name: "klaszcza blondyni",
                    value: 29
                },
                {
                    id: "pole54",
                    name: "klaszcze osoba z najmniejszą stopą",
                    value: 54
                },
                {
                    id: "pole71",
                    name: "klaszcza niepalący",
                    value: 71
                },
                {
                    id: "pole72",
                    name: "klaszcze osoba z największą stopą",
                    value: 72
                },
                {
                    id: "pole73",
                    name: "wszyscy klaszcza i pogo",
                    value: 73
                },
                {
                    id: "pole60",
                    name: "Osoba po prawej odgaduje datę twoich urodzin, jeżeli odgadnie źle - klaszcze",
                    value: 60
                },
                {
                    id: "pole39",
                    name: "Osoba po lewej daje wyzwanie",
                    value: 39
                },
                {
                    id: "pole10",
                    name: "klaszcze gospodarz",
                    value: 10
                }
            ],
            [
                {
                    id: "pole30",
                    name: "klaszcze osoba po prawej",
                    value: 30
                },
                {
                    id: "pole55",
                    name: "",
                    value: 55
                },
                {
                    id: "pole56",
                    name: "klaszcze osoba z zegarkiem na ręce",
                    value: 56
                },
                {
                    id: "pole57",
                    name: "klaszczesz i zamieniasz sie jedna częścią garderoby z osobą po lewej",
                    value: 57
                },
                {
                    id: "pole58",
                    name: "klaszcza posiadacze zwierząt",
                    value: 58
                },
                {
                    id: "pole59",
                    name: "klaszcze najstarszy",
                    value: 59
                },
                {
                    id: "pole38",
                    name: "Osoba, która dotknie cie jako ostatnia klaszcze",
                    value: 38
                },
                {
                    id: "pole9",
                    name: "Omijasz kolejke",
                    value: 9
                }
            ],
            [
                {
                    id: "pole31",
                    name: "nie klaszczesz jeżeli zgadniesz datę urodzenia osoby po prawej",
                    value: 31
                },
                {
                    id: "pole32",
                    name: "klaszcze ten kto ma czarne spodnie",
                    value: 32
                },
                {
                    id: "pole33",
                    name: "klaszcze ten który niedawno miał urodziny",
                    value: 33
                },
                {
                    id: "pole34",
                    name: "",
                    value: 34
                },
                {
                    id: "pole35",
                    name: "klaszczesz z osoba ktora ma pionek najblizej ciebie",
                    value: 35
                },
                {
                    id: "pole36",
                    name: "klaszcze najbliższy i najdalszy pionek od mety",
                    value: 36
                },
                {
                    id: "pole37",
                    name: "klaszcza urodzeni w parzystym miesiącu",
                    value: 37
                },
                {
                    id: "pole8",
                    name: "klaszcze osoba naprzeciwko",
                    value: 8
                }
            ],
            [
                {
                    id: "pole0",
                    name: "START",
                    value: 0
                },
                {
                    id: "pole1",
                    name: "klaszcza wszyscy",
                    value: 1
                },
                {
                    id: "pole2",
                    name: "klaszczą ci którzy mają kolorową bieliznę",
                    value: 2
                },
                {
                    id: "pole3",
                    name: "klaszcza ci ktorzy nie zdali ostatniego egzaminu ktory pisali",
                    value: 3
                },
                {
                    id: "pole4",
                    name: "klaszczą osoby, które mają/miały farbowane włosy",
                    value: 4
                },
                {
                    id: "pole5",
                    name: "klaszcze osoba po lewej",
                    value: 5
                },
                {
                    id: "pole6",
                    name: "rzucasz kostką i jeżeli wyrzucisz parzystą liczbę oczek to klaszczesz",
                    value: 6
                },
                {
                    id: "pole7",
                    name: "",
                    value: 7
                }
            ]
        ]


//WYSWIETLENIE PLANSZY
        const wynik = document.querySelector("#ekranik")
        const tabela = document.createElement("table")

        for (let x = 0; x < tablica.length; x++) {
            const rzad = document.createElement("tr")
            for (let y=0; y < tablica[x].length; y++) {
                const pole = document.createElement("td")
                const box = document.createElement("div")
                const numer = document.createElement("h2")
                const tekst = document.createElement("p")
                numer.innerText = tablica[x][y].value
                box.textContent = tablica[x][y].name
                box.setAttribute("id", tablica[x][y].id)
                box.setAttribute("class","pole")
                box.appendChild(numer)
                box.appendChild(tekst)
                pole.appendChild(box)
                rzad.appendChild(pole)
                console.log(pole)
            }
            tabela.appendChild(rzad)
        }
        wynik.appendChild(tabela)


//POBIERANIE Z SELECTA ILOSCI GRACZY
            const ilegraczy = document.querySelector("#ilegraczy");
            let gracze = 0;
            const pola = document.querySelector("#pola");
    
    
            ilegraczy.addEventListener("change", function () {
                gracze = parseInt(ilegraczy.value);
            })
    
//TWORZENIE POL UMOZLIWIJACYCH NA WPROWADZENIE NAZWY GRACZY
            const przycisk = document.querySelector("#przycisk");
            przycisk.addEventListener("submit", function (e) {
                e.preventDefault();
                pola.innerHTML = " ";
                for (let i = 0; i < gracze; i++) {
                    let polegracza = document.createElement("label");
                    polegracza.setAttribute('class','polegracza')
                    polegracza.innerHTML = "gracz " + (i + 1);
                    let input = document.createElement("input");
                    input.setAttribute('type', 'text');
                    input.setAttribute('class','gracze')
                    polegracza.appendChild(input);
                    pola.appendChild(polegracza);
                }
                let zapiszgraczy = document.createElement("button");
                zapiszgraczy.setAttribute("id", "zapisz");
                zapiszgraczy.setAttribute("class","zapisz")
                zapiszgraczy.innerText = "zapisz graczy";
                pola.appendChild(zapiszgraczy);
                
            let nazwagracza = document.querySelectorAll('.gracze');
                
            let zapisanigracze = document.querySelector('#zapisz')


//TWORZENIE PIONKA(DIV) Z PRZYPISANA NAZWA GRACZA NA POLU STARTOWYM
            zapisanigracze.addEventListener("click", function () {
                let polezero =  document.querySelector('#pole0')
                for(let i = 0;i<gracze;i++){
                    let utworzpionekdiv = document.createElement("div");
                    utworzpionekdiv.setAttribute("class","pionekdiv")
                    utworzpionekdiv.setAttribute("id","pionek"+(i+1))
                    utworzpionekdiv.innerText = nazwagracza[i].value
                    polezero.appendChild(utworzpionekdiv)
                        let gracz = {
                        name: nazwagracza[i].value,
                        x: 0,
                        y: 0,
                        nrpionka: (i+1)
                    }
                    graczeTablica[i]=gracz
                }
                const pionki = [
                    "obrazki/pionek1.png",
                    "obrazki/pionek2.png",
                    "obrazki/pionek3.png",
                    "obrazki/pionek4.png",
                    "obrazki/pionek5.png",
                    "obrazki/pionek6.png"
                    //linki
                ]
                console.log(graczeTablica)
                
//WSTAWIANIE OBRAZKU PIONKA I USUWANIE MENU U GORY
             let wstawieniepionka = document.querySelectorAll(".pionekdiv")
             
            for(let i=0;i<wstawieniepionka.length;i++){
                let pionek = document.createElement("img");
                pionek.setAttribute("src", pionki[i]);
                pionek.setAttribute("id", "pionek"+(i+1));
                wstawieniepionka[i].appendChild(pionek);
            }
                zapisanigracze.remove()
                pola.remove()
                ilegraczy.remove()
                przycisk.remove()
            })
            })        
            









            //KOSTKA
let kostka = document.querySelector("#kostka");

let rzutkostka = document.createElement("button");
rzutkostka.setAttribute("id", "rzutkostka");
rzutkostka.setAttribute("class", "rzutkostka");
rzutkostka.innerText = "Rzut kostką";

kostka.appendChild(rzutkostka);
let przyciskKostka = document.querySelector("#rzutkostka");

let ktorygraczmaruch = 0;


    let ilewyrzuciles = document.querySelector("#wynikrzutu");
    let p = document.createElement("p");
    p.setAttribute("class", "p");

przyciskKostka.addEventListener("click", function() {
	let rzut = Math.floor(Math.random() * 6 + 1);
    console.log(rzut);

    p.innerHTML = "wyrzuciłeś: "+rzut;
    ilewyrzuciles.appendChild(p);
    
    if(graczeTablica.length>0){
        if (ktorygraczmaruch>graczeTablica.length){
            ktorygraczmaruch=1
        }else{
            if((ktorygraczmaruch+1)>graczeTablica.length){
                ktorygraczmaruch = 1
            } else {
                ktorygraczmaruch++
            }
        }
console.log(ktorygraczmaruch);

//USUWANIE PIONKA I PRZESTAWIANIE GO O WARTOSC ZWROCONA PRZEZ KOSTKE
        let wstawieniepionka = document.querySelector("#pionek"+ktorygraczmaruch)
        const rodzic = wstawieniepionka.parentElement
        const nrpola = parseInt(rodzic.querySelector("h2").innerText)
        if(nrpola!=79){
            let iledodac = nrpola+rzut
        let poledocelowe = document.querySelector("#pole"+iledodac)
        if(poledocelowe){
            poledocelowe.appendChild(wstawieniepionka);
        } else {
            poledocelowe = document.querySelector("#pole79")
            poledocelowe.appendChild(wstawieniepionka)
            alert("DOTARŁEŚ DO METY!!! ")
        }
        } else {
            if((ktorygraczmaruch+1)>graczeTablica.length){
                ktorygraczmaruch = 1
            } else {
                ktorygraczmaruch++
            }
        }
        
    }
});
