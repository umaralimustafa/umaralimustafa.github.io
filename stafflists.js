// import { Staff } from "staff.js"

class Staff {
    
    constructor(name, title, dept, floor) {
        this.name = name;
        this.title = title;
        this.dept = dept;
        this.floor = floor;
    }

    getName() {
        return this.name;
    }

    getTitle() {
        return this.title;
    }

    getDept() {
        return this.dept;
    }
    
    getFloor() {
        return this.floor;
    }

}

export var stafflist = []

stafflist.push(new Staff("Bajwa", "Dr.", "biology", 1))
stafflist.push(new Staff("Kennedy", "Mrs.", "biology", 1))
stafflist.push(new Staff("Kenny", "Dr.", "biology", 1))
stafflist.push(new Staff("Pinto", "Dr.", "biology", 1))
stafflist.push(new Staff("Waldron", "Mrs.", "biology", 1))
stafflist.push(new Staff("Zepatos", "Mrs.", "biology", 1))
stafflist.push(new Staff("Zhang", "Mr.", "biology", 1))
stafflist.push(new Staff("Stott", "Mrs.", "biology", 2))

stafflist.push(new Staff("Fogg", "Mr.", "business", 1))
stafflist.push(new Staff("Gutierrez", "Mr.", "business", 1))
stafflist.push(new Staff("Sawhney", "Mrs.", "business", 1))

stafflist.push(new Staff("Crane", "Dr.", "chemistry", 2))
stafflist.push(new Staff("Dobrich", "Mr.", "chemistry", 2))
stafflist.push(new Staff("Feuss", "Mrs.", "chemistry", 2))
stafflist.push(new Staff("Kim", "Dr.", "chemistry", 2))
stafflist.push(new Staff("Sorrentino", "Mrs.", "chemistry", 2))

stafflist.push(new Staff("Branda", "Chef", "culinary", 2))
stafflist.push(new Staff("Adriance", "Chef", "culinary", 2))

stafflist.push(new Staff("Berwick", "Mrs.", "english", 0))
stafflist.push(new Staff("Crimmel", "Mrs.", "english", 0))
stafflist.push(new Staff("DiAmico-King", "Mrs.", "english", 0))
stafflist.push(new Staff("Hathaway", "Mr.", "english", 1))
stafflist.push(new Staff("Kaba", "Mrs.", "english", 1))
stafflist.push(new Staff("Kouefati", "Mrs.", "english", 0))
stafflist.push(new Staff("Mendelsohn", "Mr.", "english", 0))
stafflist.push(new Staff("Halligan", "Mrs.", "english", 0))
stafflist.push(new Staff("Torres", "Mr.", "english", 0))
stafflist.push(new Staff("Villanova", "Mrs.", "english", 0))
stafflist.push(new Staff("Weems", "Mr.", "english", 0))
stafflist.push(new Staff("Wilson", "Mr.", "english", 0))

stafflist.push(new Staff("Abramson", "Dr.", "math", 2))
stafflist.push(new Staff("Bonanomi", "Mr.", "math", 2))
stafflist.push(new Staff("Casarico", "Mrs.", "math", 2))
stafflist.push(new Staff("Djedji", "Mr.", "math", 1))
stafflist.push(new Staff("Heitzman", "Dr.", "math", 2))
stafflist.push(new Staff("Nevard", "Dr.", "math", 2))
stafflist.push(new Staff("Ogden", "Mrs.", "math", 2))
stafflist.push(new Staff("Penev", "Dr.", "math", 2))
stafflist.push(new Staff("Pinyan", "Mr.", "math", 2))
stafflist.push(new Staff("Robinson", "Dr.", "math", 2))
stafflist.push(new Staff("Seventko", "Mr.", "math", 1))
stafflist.push(new Staff("Walsh", "Mr.", "math", 2))
stafflist.push(new Staff("Zangara", "Mrs.", "math", 2))

stafflist.push(new Staff("Lemma", "Mr.", "music", 0))
stafflist.push(new Staff("Spinelli", "Mr.", "music", 2))

stafflist.push(new Staff("Fuentes", "Mrs.", "fitness", 1))
stafflist.push(new Staff("James", "Mrs.", "fitness", 1))
stafflist.push(new Staff("Kalata", "Mr.", "fitness", 1))
stafflist.push(new Staff("Marmora", "Mr.", "fitness", 1))
stafflist.push(new Staff("Symons", "Mr.", "fitness", 1))
stafflist.push(new Staff("Rios", "Mrs.", "fitness", 1))

stafflist.push(new Staff("Crochet", "Mrs.", "theater", 1))
stafflist.push(new Staff("Kaplan", "Mr.", "theater", 2))
stafflist.push(new Staff("Pero", "Mrs.", "theater", 0))

stafflist.push(new Staff("Dogru", "Dr.", "physics", 0))
stafflist.push(new Staff("Hodroski", "Mr.", "physics", 2))
stafflist.push(new Staff("Liva", "Mr.", "physics", 1))
stafflist.push(new Staff("Paul", "Mr.", "physics", 2))
stafflist.push(new Staff("Russo", "Mr.", "physics", 0))
stafflist.push(new Staff("Zubov", "Dr.", "physics", 2))

stafflist.push(new Staff("Alschen", "Mr.", "history", 1))
stafflist.push(new Staff("Blake", "Mrs.", "history", 1))
stafflist.push(new Staff("Demeter", "Mr.", "history", 1))
stafflist.push(new Staff("Janssen", "Dr.", "history", 2))
stafflist.push(new Staff("Kramer", "Mr.", "history", 2))
stafflist.push(new Staff("Madden", "Mr.", "history", 1))
stafflist.push(new Staff("Miller", "Mr.", "history", 2))
stafflist.push(new Staff("Pagano", "Mrs.", "history", 1))
stafflist.push(new Staff("Wallace", "Mrs.", "history", 2))

stafflist.push(new Staff("Barbetta", "Mr.", "engineering", 1))
stafflist.push(new Staff("Nodarse", "Mr.", "engineering", 1))
stafflist.push(new Staff("Samarakone", "Mr.", "engineering", 1))

stafflist.push(new Staff("Isecke", "Mr.", "compsci", 1))
stafflist.push(new Staff("Respass", "Mr.", "compsci", 1))
stafflist.push(new Staff("Wang", "Mr.", "compsci", 1))

stafflist.push(new Staff("Guthrie", "Mr.", "visual", 1))
stafflist.push(new Staff("Min", "Mrs.", "visual", 1))
stafflist.push(new Staff("Lang", "Mr.", "visual", 1))

stafflist.push(new Staff("Ballas", "Madame", "language", 2))
stafflist.push(new Staff("Calandra", "Profe", "language", 1))
stafflist.push(new Staff("Carberry", "Profe", "language", 2))
stafflist.push(new Staff("Fillebrown", "Mrs.", "language", 2))
stafflist.push(new Staff("Lewitt", "Profe", "language", 2))
stafflist.push(new Staff("Ponce", "Profe", "language", 1))
stafflist.push(new Staff("Seltzer", "Profe", "language", 2))
stafflist.push(new Staff("Tolmo", "Profe", "language", 2))
stafflist.push(new Staff("Villarosa", "Madame", "language", 2))
stafflist.push(new Staff("Xu", "Mrs.", "language", 2))

export default stafflist

// console.log(stafflist[43].getName())
// console.log(staffnames[43])
// console.log(stafflist.length)
// console.log(staffnames.length)