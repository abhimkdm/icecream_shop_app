-- User table

CREATE TABLE user_registration_table (userId int NOT NULL PRIMARY KEY,
                                                          name varchar(255),
                                                               email varchar(255),
                                                                     password varchar(255),
                                                                              mobileno int);

--Shipping Details Table

CREATE TABLE user_shipping_details(ShippingId int NOT NULL PRIMARY KEY,
                                                           address varchar(255),
                                                                   city varchar(255),
                                                                        state varchar(255),
                                                                              country varchar(255),
                                                                                      pincode int, userId
                                   FOREIGN KEY refences user_registration_table(userId));

--Products Table

CREATE TABLE products_table(productId int NOT NULL PRIMARY KEY,
                                                   name varchar(255),
                                                        TYPE varchar(255),
                                                             price int);

--Cart Table

CREATE TABLE cart_table (cartId int NOT NULL PRIMARY KEY,
                                             productId
                         FOREIGN KEY refences products_table(productId),
                                              cartQuanity int);

--Orders Table

CREATE TABLE orders_table(orderId int NOT NULL PRIMARY KEY,
                                               cartId
                          FOREIGN KEY refences cart_table(cartId),
                                               userId
                          FOREIGN KEY refences user_registration_table(userId),
                                               ShippingId
                          FOREIGN KEY refences user_shipping_details(ShippingId),
                                               orderDate Date, status varchar(255),
                                                                      totalPrice int);