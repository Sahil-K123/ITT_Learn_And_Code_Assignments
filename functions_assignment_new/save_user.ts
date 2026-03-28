declare const db: { insert: (table: string, user: any) => void };
declare function writeToFile(path: string, data: any): void;

interface User {
    id: number;
    name: string;
    email: string;
}

function validateUser(user: User): boolean {
    return user.name !== "" && user.email !== "";
}

function saveUserToDatabase(user: User): void {
    db.insert("Users", user);
}

function persistUserToFile(user: User): void {
    const filePath = `/backup/users/${user.id}.txt`;
    writeToFile(filePath, user);
}

function saveUser(user: User): void {
    if (!validateUser(user)) {
        console.log("Invalid user data");
        return;
    }

    saveUserToDatabase(user);
    persistUserToFile(user);
}
