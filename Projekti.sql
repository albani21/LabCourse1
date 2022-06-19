create database LabCourse05
use LabCourse05

create table Sektori(
	SektoriID int not null primary key,
	EmriSektorit varchar(50),
)
insert into Sektori values(1, 'A')

insert into Sektori values(2, 'A')

insert into Sektori values(3, 'A')

create table Infiermeria(
	InfiermeriaID int not null primary key,
	SektoriID int not null references Sektori(SektoriID),
	Kapaciteti char(2) not null,
)

create table Drejtori(
	DrejtoriID int not null primary key,
	SektoriID int not null references Sektori(SektoriID) unique,
	Emri varchar(40) not null,
	Mbiemri varchar(40), 
	Qyteti varchar(50),
	Rruga varchar(100),
	Zipkodi varchar(10),
	DateLindja date,
	Gjinia char(1),
	check (Gjinia IN('M','F'))
)
select * from Sektori
Select * from Drejtori
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

create table GardianiBurgit(
	OficeriID int not null references Oficeri(OficeriID),
	primary key(OficeriID),
)

create table OficeriPushimit(
	OficeriID int not null references Oficeri(OficeriID),
	primary key(OficeriID),
)

create table OficeriKorrektues(
	OficeriID int not null references Oficeri(OficeriID),
	primary key(OficeriID),
)

create table OficeriParaburgimit(
	OficeriID int not null references Oficeri(OficeriID),
	primary key(OficeriID),
)


create table Mjeket(
	MjekuID int not null references Stafi(StafiID),
	primary key(MjekuID),
	Fakulteti varchar(50),
	GradaAkademike varchar(50)
)

create table Llogaria(
	OficeriID int not null references Oficeri(OficeriID),
	primary key(OficeriID),
	username varchar(50) not null unique,
	passwordi varchar(50) not null
)

Create table Qelia(
	QeliaID int not null primary key,
	KapacitetiTeBurgosurve char(3),
	SektoriID int not null references Sektori(SektoriID),
)
create table Cleaner(
	CleanerID int not null references Stafi(StafiID),
	primary key(CleanerID),
)

create table MirembajtjaQelive(
	CleanerID int not null references Cleaner(CleanerID),
	QeliaID int not null references Qelia(QeliaID),
	constraint mirembajtja_qelive primary key(CleanerID, QeliaID),
	[Data] date,
	Koha time,
)

create table Pushimi(
	PushimiID int not null primary key,
	QeliaID int  not null references Qelia(QeliaID),
	Dita varchar(50) not null,
	[Data] date,
	Orari time,
	KohaFillimit time,
	KohaMbarimit time
)


Create table Burgosuri(
	BurgosuriID int not null primary key,
	Emri varchar(50) not null,
	Mbiemri varchar(50) not null,
	Qyteti varchar(50)not null,
	Rruga varchar(100)not null,
	ZipKodi varchar(10)not null,
	EmriRruges varchar(50)not null,
	NrShtepise char(5)not null,
	DataHyrjes date not null,
	DataDaljes date not null,
	DateLindja date not null,
	QeliaID int not null foreign key references Qelia(QeliaID),
	Gjinia char(1),
	check (Gjinia IN('M','F')),
)

create table Krimi (
	KrimiID int not null,
	constraint krimi_burgosuri foreign key(KrimiID) references Burgosuri(BurgosuriID),
	DataKrimit date not null,
	LlojiKrimit varchar(50),
)

create table Vizitori(
	VizitoriID int not null primary key,
	Emri varchar(50) not null,
	Mbiemri varchar(50),
	BurgosuriID int not null foreign key references Burgosuri(BurgosuriID),
	EmriIBurgosurit varchar(50) not null,
)


create table Vizita(
	VizitaID int not null primary key,
	BurgosuriID int not null foreign key references Burgosuri(BurgosuriID),
	VizitoriID int not null foreign key references Vizitori(VizitoriID),
	[Data] date,
	KohaFillimit date,
	KohaMbarimit date,
)

create table Mbikqyre(
	OficeriID int not null foreign key references Oficeri(OficeriID),
	VizitaID int not null foreign key references Vizita(VizitaID),
	primary key(OficeriID, VizitaID)
)

create table Kontrollohet(
	KontrollaID int not null primary key,
	BurgosuriID int not null references Burgosuri(BurgosuriID),
	InfiermeriaID int not null references Infiermeria(InfiermeriaID),
	[Data] date not null,
	Arsyeja varchar(50) not null,
)

create table Kontrollon(
	InfermieriID int not null foreign key references Infiermeria(InfiermeriaID),
	KontrollaID int not null foreign key references Kontrollohet(KontrollaID),
	primary key(InfermieriID, KontrollaID)
)
Select * from Drejtori
Select * from Stafi
insert into Stafi values(1,1,'ar','ar','ar','ar','ar','2020-01-01','M');

insert into Stafi values(2,1,'ar','ar','ar','ar','ar','2020-01-01','M');

insert into Stafi values(3,1,'ar','ar','ar','ar','ar','2020-01-01','M');
select* from Oficeri
insert into Oficeri values(1)
insert into Oficeri values(2)
insert into Oficeri values(3)

alter table Burgosuri
drop column EmriRruges