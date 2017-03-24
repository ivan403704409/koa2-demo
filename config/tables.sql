-- 用户表
create table b_user (
id varchar(30) not null,
name varchar(30) not null,
password varchar(255) not null,
gender int default 3,
type int not null,
stat int not null,
ctime timestamp default now(),
primary key(id)
);
comment on table c_user is '用户表';
comment on column c_user.id is 'id';
comment on column c_user.name is '账户名';
comment on column c_user.type is '账户类型';
comment on column c_user.stat is '账户状态';
comment on column c_user.passwd is '密码';
comment on column c_user.gender is '性别';

-- 文章标签
create table b_tag (
id serial,
name char(50) not null,
stat int not null,
ctime timestamp default now(),
primary key(id)
);
comment on table b_tag is '文章标签表';
comment on column b_tag.id is '主键';
comment on column b_tag.name is '标签名称';
comment on column b_tag.stat is '状态';


-- 文章
create table b_articles (
id serial,
title char(50) not null,
content text not null,
tag int not null,
uid varchar(30) not null,
ctime timestamp default now(),
etime timestamp default now(),
stat int not null,
primary key (id, tag)
);
comment on table b_articles is '文章表';
comment on column b_articles.id is '主键';
comment on column b_articles.title is '标题';
comment on column b_articles.content is '内容';
comment on column b_articles.tag is '文章标签id';
comment on column b_articles.uid is '创建人id';
comment on column b_articles.stat is '状态';

