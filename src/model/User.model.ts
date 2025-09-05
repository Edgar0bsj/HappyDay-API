const db = [
  {
    id: "1",
    name: "Cauã Oliveira Cavalcanti",
    phone: 21012345678,
    message: "........",
  },
  {
    id: "2",
    name: "Mateus Costa Gomes",
    phone: 21012345678,
    message: "........",
  },
  {
    id: "3",
    name: "Amanda Costa Gomes",
    phone: 21012345678,
    message: "........",
  },
  {
    id: "4",
    name: "Davi Silva Rodrigues",
    phone: 21012345678,
    message: "........",
  },
  {
    id: "5",
    name: "Renan Azevedo Melo",
    phone: 21012345678,
    message: "........",
  },
  {
    id: "6",
    name: "Emily Pinto Melo",
    phone: 21012345678,
    message: "........",
  },
  {
    id: "7",
    name: "Aline Rodrigues Almeida",
    phone: 21012345678,
    message: "........",
  },
];

/**
 * Simulação de um bando de dados
 */
class User {
  static async findAll() {
    return db;
  }
  static async findById(id) {
    return db.find((el) => {
      return el.id === id;
    });
  }
  static async save(user) {
    return db.push(user);
  }
  static async update(id, user: any) {
    const idUser = db.findIndex((el) => {
      el.id == id;
    });

    db[idUser].name = user.name;
    db[idUser].phone = user.phone;
    db[idUser].message = user.message;
    return true;
  }
  static async deleteOne(id) {
    const _index = db.findIndex((el) => el.id === id);
    db.splice(_index, 1);
    return true;
  }
}

console.log(User.findAll());
console.log("====================");
User.findById("7").then((result) => console.log(result));
console.log("====================");
console.log(
  User.save({
    id: "8",
    name: "Peter bejamin park",
    phone: 21012345678,
    message: "........",
  })
);
console.log("====================");
console.log(User.findAll());

export default User;
