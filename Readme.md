# Password Hasher

A simple password hashing library using SHA-256.

## Installation

```sh
npm install password-hasher
```
## Example Ussage

```sh
const { hashPassword, verifyPassword } = require("./index");

const password = "mySecurePassword123";

const hashedPassword = hashPassword(password);
console.log("Hashed Password:", hashedPassword);

if (verifyPassword(password, hashedPassword)) {
    console.log(" Password Matched!");
} else {
    console.log(" Password Incorrect!");
}
```
