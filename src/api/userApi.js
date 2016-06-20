const users = [
    {
        id: 'anurag-sharma',
        firstName: 'Anurag',
        lastName: 'Sharma'
    },
    {
        id: 'sawan-kumar',
        firstName: 'Sawan',
        lastName: 'Kumar'
    },
    {
        id: 'prateek-sharma',
        firstName: 'Prateek',
        lastName: 'Sharma'
    }
];

class UserApi {
    
    static authorizeUser(data) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if(data.user.username.match(/ces/g)){
                    var numRand = Math.floor(Math.random() * 2);
                    resolve(users[numRand]);    
                }
                else{
                    reject({status: 401, message: "Invalid user"});
                }
                
            }, 1000);
        });
    }

    static saveAuthor(author) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // Simulate server-side validation
                const minAuthorNameLength = 3;
                if (author.firstName.length < minAuthorNameLength) {
                    reject(`First Name must be at least ${minAuthorNameLength} characters.`);
                }

                if (author.lastName.length < minAuthorNameLength) {
                    reject(`Last Name must be at least ${minAuthorNameLength} characters.`);
                }

                if (author.id) {
                    const existingAuthorIndex = authors.findIndex(a => a.id == author.id);
                    authors.splice(existingAuthorIndex, 1, author);
                } else {
                    //Just simulating creation here.
                    //The server would generate ids for new authors in a real app.
                    //Cloning so copy returned is passed by value rather than by reference.
                    author.id = generateId(author);
                    authors.push(author);
                }

                resolve(Object.assign({}, author));
            }, delay);
        });
    }

    static deleteAuthor(authorId) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const indexOfAuthorToDelete = authors.findIndex(author => {
                    author.authorId == authorId;
                });
                authors.splice(indexOfAuthorToDelete, 1);
                resolve();
            }, delay);
        });
    }
}

export default UserApi;