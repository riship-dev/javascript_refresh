// string methods: allow you to manipulate and work with text (strings)\

const print = console.log

let username = "john_doe"

print(username.charAt(0))
print(username.indexOf("e")) // -1 if char not found

username = "        john_doe    "
print(username)
username = username.trim()
print(username)

print(username.toUpperCase())
print(username.toLowerCase())
print(username.repeat(3))
print(username.startsWith("joh"))
print(username.endsWith("joh"))
print(username.replaceAll("_", " "))