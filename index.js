const crypto = require("crypto");

function hashPassword(password) {
    if (typeof password !== "string") throw new Error("Password must be a string");

    const salt = crypto.randomBytes(16).toString("hex"); // Generate 16-byte salt
    const hash = crypto.createHash("sha256").update(salt + password).digest("hex");

    return `${salt}$${hash}`; // Return salt$hash string
}

function verifyPassword(password, storedHash) {
    if (typeof storedHash !== "string" || !storedHash.includes("$")) {
        throw new Error("Invalid stored hash format");
    }

    const [salt, hash] = storedHash.split("$"); // Extract salt and hash
    const newHash = crypto.createHash("sha256").update(salt + password).digest("hex");

    return newHash === hash;
}

module.exports = { hashPassword, verifyPassword };
