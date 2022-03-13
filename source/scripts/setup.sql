-- Creates a schema
create schema 16thcross; 

-- Creates table called video_data with required columns 
create table 16thcross.video_data(
id integer auto_increment not null,
name varchar(50),
description	varchar(200),
txn_hash varchar(100),
nft_cid	varchar(100),
video_cid varchar(100),
wallet_address varchar(100),
video_duration integer,
primary key(id)
);
