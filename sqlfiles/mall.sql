create inorbitmall;

CREATE TABLE in_cust (
   cust_id INT NOT NULL AUTO_INCREMENT,
   vehc_no VARCHAR(100) NOT NULL,
   in_time DATETIME NOT NULL,
   mobile_no VARCHAR(100) NOT NULL,
   PRIMARY KEY ( cust_id )
);

CREATE TABLE users (
   user_id INT NOT NULL AUTO_INCREMENT,
   user_name VARCHAR(100) NOT NULL,
   password VARCHAR(100) NOT NULL,
   PRIMARY KEY ( user_id )
);

insert into users(user_name,password) values('rk','rk');

insert into in_cust(vehc_no,in_time,mobile_no) values('AP28CG7269',NOW(),'9553304094');