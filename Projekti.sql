create database LabCourse
use LabCourse

create table Drejtori(
	DrejtoriID int not null primary key,
	Emri varchar(40) not null,
	Mbiemri varchar(40), 
	Qyteti varchar(50),
	Rruga varchar(100),
	Zipkodi varchar(10),
	DateLindja date,
	Gjinia char(1),
	check (Gjinia IN('M','F'))
)


create table Stafi(
	StafiID int not null primary key,
	DrejtoriID int not null references Drejtori(DrejtoriID),
	Emri varchar(40) not null,
	Mbiemri varchar(40), 
	Qyteti varchar(50),
	Rruga varchar(100),
	Zipkodi varchar(10),
	DateLindja date,
	Gjinia char(1),
	check (Gjinia IN('M','F'))
)

create table Oficeri(
	OficeriID int not null references Stafi(StafiID),
	primary key(OficeriID),
)

create table Llogaria(
	OficeriID int not null references Oficeri(OficeriID),
	primary key(OficeriID),
	username varchar(50) not null unique,
	passwordi varchar(50) not null
)

insert into Drejtori values( 1, 'Arber','Ejupi','Lipjan','Murturi','10000', '02.06.1999', 'M');
insert into Stafi values(200, 1, 'Arber','Ejupi','Lipjan','Murturi','10000', '02.06.1999', 'M');
insert into Stafi values(201, 1,'Filan', 'Fisteku', 'Prishtine', 'Kalabria', '14000', '09.16.1980', 'M');
insert into Stafi values(202, 1,'Filan', 'Fisteku', 'Prishtine', 'Kalabria', '14000',  '09.16.1980', 'M');


insert into Oficeri values(200);
insert into Oficeri values(201);

insert into Llogaria values(200, 'Emri', 'AAAA')
insert into Llogaria values(201, 'EmriMbiemri', 'AAA')
Select * from Drejtori
Select* from Stafi
Select * from Oficeri
select * from Llogaria

drop table Llogaria
drop table Oficeri
Drop Table Stafi
drop table Drejtori
