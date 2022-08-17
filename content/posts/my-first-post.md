---
title: "SER322-Final-Project"
date: 2022-08-14T15:22:04-07:00
draft: true
---

Tested by Larry Huang on Windows 10


## Requirements
- mysql v5.7.18
- jdk v17.0.3
- JDBC Driver (ex: mysql-connector-java-8.0.30.jar)
- GNU make v4.3 (optional)


## Database Setup
1. In MySQL, create a database named `jdbcdeliv`.
2. Select the newly created database.
1. Execute the SQL commands in `setup/schema.sql` to create the tables.
2. Execute the SQL commands in `setup/values.sql` to populate the tables.


## Compilation

### WINDOWS:
> Surrounding string arguments with quote marks helps prevent unexpected errors.
> If the item is a filepath without an entity that has spaces in its name, the
> quote marks are not necessary.

Using `make` (compiled classes saved to `ser322d4` package directory in project root):
```shell
make
```

Manually, using `javac`:
```shell
javac -d .\ src\ser322d4\*.java
```


## Running the Program
Include the mysql-connector-java-*.jar file in `lib\` next to `src\`.

RUN arguments:
- Database URL template:  `jdbc:mysql://<host>:<portNum>/jdbcdeliv`
- Driver class name (5.x):  `com.mysql.jdbc.Driver`
- Driver class name (8.0):  `com.mysql.cj.jdbc.Driver`
- Example: `"jdbc:mysql://localhost:3306/jdbcdeliv" "root" "password" "com.mysql.jdbc.Driver"`

**JdbcDeliv RUN commands:**

> Note: Replace the connector jar version number in the examples below with the
> appropriate version for your jar file.

```shell
# JDBC Driver 5.1.45:
java -cp ".;.\lib\mysql-connector-java-5.1.45-bin.jar" ser322d4.JdbcDeliv "jdbc:mysql://localhost:3306/jdbcdeliv" <usrname> <pwd> com.mysql.jdbc.Driver
```

```shell
# JDBC Driver 8.0.30:
java -cp ".;.\lib\mysql-connector-java-8.0.30.jar" ser322d4.JdbcDeliv "jdbc:mysql://localhost:3306/jdbcdeliv" <usrname> <pwd> com.mysql.cj.jdbc.Driver
```
