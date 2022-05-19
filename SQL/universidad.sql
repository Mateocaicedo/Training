create database universidad;

use universidad;

create table facultad (
	numero int(20) not null auto_increment,
    ubicacion varchar(150),
    nombre varchar(150),
    primary key(numero),
    cedulaDecano int not null,
    constraint FK_decano foreign key(cedulaDecano) references decano(cedulaDecano)
);

create table docente (
	cedulaDocente int(20) not null,
    nombre varchar(100),
    apellido varchar(100),
    titulo varchar(100),
    primary key(cedulaDocente),
    numero int not null,
    CONSTRAINT FK_facultad FOREIGN KEY (numero)
    REFERENCES facultad(numero)
);

create table asignatura (
	codigo int(20) not null auto_increment,
    nombre varchar(100),
    creditos int,
    primary key(codigo)
);

create table estudiante(
	NrolD int(20) primary key not null,
    nombre varchar(100),
    apellido varchar(100),
    direccion varchar(50)
);

create table decano(
	cedulaDecano int(20) primary key not null ,
    nombre varchar(100),
    apellido varchar(100),
    celular int
);

create table docente_asignatura(
	id int(20) primary key not null,
    cedulaDocente int not null,
    codigo int not null,
    CONSTRAINT FK_docente FOREIGN KEY (cedulaDocente)
    REFERENCES docente(cedulaDocente),
    CONSTRAINT FK_asignatura FOREIGN KEY (codigo)
    REFERENCES asignatura(codigo)
);

create table estudiante_asignatura(
	id int(20) primary key not null,
    NrolD int not null,
    codigo int not null,
    CONSTRAINT FK_estudiante FOREIGN KEY (NrolD)
    REFERENCES estudiante(NrolD),
    CONSTRAINT FK_asignatura_estudiante FOREIGN KEY (codigo)
    REFERENCES asignatura(codigo)
);


ALTER TABLE docente
ADD COLUMN numero INT NOT NULL;

ALTER TABLE docente
ADD CONSTRAINT docente_facultad
	FOREIGN KEY (numero)
    REFERENCES facultad(numero);


/*Add facultades*/
INSERT INTO facultad values(NULL,'Barranquilla','Derecho',123456789),
(NULL,'Barranquilla','Economía',123456784),
(NULL,'Barranquilla','Ingenieria',124545675),
(NULL,'Barranquilla','Arquitectura',155456769),
(NULL,'Barranquilla','Artes',15566569);

/*Add Decanos*/
INSERT INTO decano values(123456789,'Rafael','Rodriguez',23456644);
INSERT INTO decano values(123456784,'Rosa','Meza',234544);
INSERT INTO decano values(124545675,'Manuel','Casallas',34556432);
INSERT INTO decano values(155456769,'Fernando','Ramirez',23455644),(15566569,'Luis','Aguilar',23445644);


/*Add Docentes*/
INSERT INTO docente values(12345333,'Juan','Perez','Ingeniero',13),(12345353,'Pablo','Perez','Ingeniero',13)
,(12323353,'Reinaldo','Sanchez','Ingeniero',13),(12345313,'Abel','Aguilar','Ingeniero',13),(1245399,'Manuel','Perez','Ingeniero',13)
,(12234353,'Rosa','Sanchez','Diseñador',15),(12345243,'Antonio','Perez','Diseñador',15),(12356433,'Rosalba','Miranda','Diseñador',15),
(36543223,'Efren','Donado','Diseñador',15),(76545256,'Jefrey','Perez','Diseñador',15),(76545254,'Daniel','Casanares','Abogado',11);
INSERT INTO docente values(54438488,'Ronaldo','Casiano','Arquitecto',14),(544448488,'Cristaldo','Perez','Arquitecto',14)
,(56638488,'Hugo','Sanchez','Arquitecto',14),(56638444,'Reinaldo','Aguilar','Arquitecto',14),(56638499,'Fernando','Carrascal','Arquitecto',14)
,(56644499,'Esmeralda','Cristal','Abogada',11),(56642499,'Bernardo','Perez','Abogado',11),(56649499,'Benito','Miranda','Abogado',11),
(46644499,'Pablo','Perez','Economista',12),(46654499,'Cristian','Perez','Economista',12),(53344499,'Rosio','Durcan','Abogada',11);
INSERT INTO docente values(09876544,'Cristian','Dominguez','Arquitecto',14),(09876555,'Martin','Perez','Arquitecto',14)
,(0987653,'Hugo','Dominguez','Medico',15),(09874444,'Reinaldo','Rueda','Abogado',11),(095576544,'Luis','Carrascal','Economista',12)
,(0987654,'Cesar','Facet','Ingeniero',13),(09870544,'Bernardo','Lopez','Ingeniero',13),(09876500,'Rafael','Miranda','Ingeniero',13),
(09876523,'Gonzalo','Higuain','Abogado',11);


/*Add Asigantura*/
INSERT INTO asignatura values(null,'Ingenieria del software I',4),(null,'Ingenieria del software II',5),
(null,'Ingenieria del software III',10),(null,'Introduccion al Derecho',8),(null,'Sistemas de Manufactura',5),(null,'Programación',6),
(null,'Anatomia',4),(null,'Quimica Biologica',4),(null,'Patologia',4),(null,'Fisiologia',5),(null,'Derecho penal',8),
(null,'Obligaciones',4),(null,'Derecho y mecanismos de proteccion',5),(null,'Responsbilidad civil',3),(null,'Dibujo arquitectonico',4),
(null,'Analisis urbano',3);
INSERT INTO asignatura values(null,'Indroduccion a la economia',4),(null,'Econometria',5),
(null,'Estadistica',10),(null,'Historia economica de Colombia',8);


/*Add estudiantes*/
INSERT INTO estudiante values(1234,'Mariano','Gonzales','Barranquilla'),(4344,'Ronaldo','Gonzales','Barranquilla'),
(1245,'Alberto','Redondo','Barranquilla'),(1534,'Rosa','Dominguez','Barranquilla'),(1544,'Alberto','Chipre','Barranquilla'),(1200,'Usain','Bold','Barranquilla'),
(1222,'Fernando','Ramirez','Soledad'),(1444,'Isabella','Cuello','Soledad'),(1000,'Rossi','Dominguez','Soledad'),
(2000,'Alberto','Ferandez','Soledad'),(2999,'Cristian','Quintana','Soledad'),(09987,'Carlos','Gonzales','Soledad'),
(0218,'Daniel','Lopez','Soledad'),(9874,'Alvaro','Perez','Soledad'),(0874,'Efren','Rueda','Soledad'),
(4568,'Daniela','Gonzales','Corozal'),(5739,'Silvana','Perez','Corozal'),(8943,'Sharon','Gonzales','Corozal'),
(940,'Isabella','Dominguez','Corozal'),(67778,'Juana','Piñeros','Corozal'),(123477,'Isabella','Duarte','Corozal'),
(033,'Cristal','Gonzales','Corozal'),(0987,'Keidy','Montes','Corozal'),(12340,'Valeria','Ramos','Corozal'),
(044,'Luis','Sanchez','Medellin'),(5678,'Johan','Ramos','Medellin'),(12345,'Adalberto','Alvarez','Medellin'),
(2344,'Patty','Pedroza','Medellin'),(6888,'Brandon','Lopez','Medellin'),(12374,'Miguel','Villa','Medellin'),
(235,'Rosa','Cristina','Medellin'),(12434,'Albert','Rodriguez','Medellin'),(881234,'Jair','Gonzales','Medellin'),
(575,'Sebastian','Dominguez','Bogota'),(127734,'Anthony','Maestre','Bogota'),(81234,'Carlos','Diaz','Bogota'),
(087,'Loan','Moncada','Bogota'),(123774,'Isabella','Lopez','Bogota'),(182348,'Daniel','Mercado','Bogota'),
(333,'Farid','Sosa','Bogota'),(155234,'Daniel','Rueda','Bogota'),(18234,'Daniel','Alvarez','Bogota'),
(4455,'Mateo','Casas','Barranquilla'),(1727234,'Mario','Gonzales','Barranquilla'),(12384,'Andrea','Gonzales','Barranquilla'),
(67008,'Camila','Perez','Barranquilla'),(123224,'Valentina','Alvarez','Barranquilla'),(12348,'Daniela','Risaralda','Barranquilla'),
(678,'Cristian','Marquez','Barranquilla'),(123664,'Arlex','Lizarazo','Barranquilla');

/*Add docente_asignatura*/
INSERT INTO docente_asignatura values(NULL, 46644499,12),(NULL, 987654,1),(NULL, 53344499,4)
,(NULL, 76545254,4),(NULL, 12323353,3),(NULL, 12323353,2),(NULL, 36543223,9),(NULL, 12356433,8)
,(NULL, 12345333,6),(NULL, 12345353,6),(NULL, 95576544,18),(NULL, 46644499,18),(NULL, 56642499,17)
,(NULL, 76545254,14),(NULL, 56638499,15),(NULL, 56644499,13),(NULL, 76545254,12),(NULL, 36543223,10)
,(NULL, 56638488,16),(NULL, 95576544,17),(NULL, 12345243,8),(NULL, 12234353,9),(NULL, 53344499,11)
,(NULL, 9876523,11),(NULL, 12345333,2),(NULL, 12345353,3),(NULL, 53344499,4),(NULL, 12345333,5)
,(NULL, 12345333,1),(NULL, 56642499,12),(NULL, 56642499,4),(NULL, 12345353,6),(NULL, 12345353,2);

/*Add estudiante_asignatura*/
INSERT INTO estudiante_asignatura values(NULL, 44,12),(NULL, 87,1),(NULL, 218,4)
,(NULL, 678,4),(NULL, 678,3),(NULL, 1000,2),(NULL, 1000,9),(NULL, 940,8)
,(NULL, 1222,6),(NULL, 1245,6),(NULL, 1534,18),(NULL, 1245,18),(NULL, 1534,17)
,(NULL, 1222,14),(NULL, 4344,15),(NULL, 4344,13),(NULL, 9874,12),(NULL, 9874,10)
,(NULL, 18234,16),(NULL, 1222,17),(NULL, 87,8),(NULL, 18234,9),(NULL, 155234,11)
,(NULL, 881234,11),(NULL, 123774,2),(NULL, 123774,3),(NULL, 155234,4),(NULL, 127734,5)
,(NULL, 67778,1),(NULL, 12374,12),(NULL, 87,4),(NULL, 12345,6),(NULL, 12340,2);

/*INDEXES*/
alter table estudiante add index(nombre, apellido);

create index index_nombre on asignatura(nombre);


/*Select*/
/*Asignaturas dictadas por el docente "Juan Perez"*/
select a.nombre from docente d, asignatura a, docente_asignatura d_a where d.nombre = 'Juan' 
and d.apellido = 'Perez' and d.cedulaDocente = d_a.cedulaDocente and a.codigo=d_a.codigo;


/*Numero de asignaturas dictadas por el estudiante "Pedro Martinez"*/
select count(a.nombre) from estudiante e, asignatura a, estudiante_asignatura e_a where e.nombre='Pedro' 
and e.apellido ='Martinez' and a.codigo = e_a.codigo and e.NrolD = e_a.NrolD;

/*Nombres de los docentes que dictan la clase de "Calculo Integral"*/
select d.nombre  from docente d, asignatura a, docente_asignatura d_a where a.nombre = 'Calculo Integral' 
 and d.cedulaDocente = d_a.cedulaDocente and a.codigo=d_a.codigo;
 

 
 
/*Lista de docentes de la facultad de "Ingeniería"*/
select d.nombre from docente d, facultad f where f.nombre = 'Ingenieria' and f.numero = d.numero;

/*Listado de estudiantes que pertenecen a la facultad de "Derecho"*/
select DISTINCT e.nombre
from (((((docente d
inner join facultad f on f.numero = d.numero)
inner join docente_asignatura a_s on a_s.cedulaDocente = d.cedulaDocente )
inner join asignatura a on a.codigo = a_s.codigo)
inner join estudiante_asignatura e_a on e_a.codigo = a.codigo )
inner join estudiante e on e.NrolD = e_a.NrolD) where f.nombre = 'Derecho' ;

/*Asignaturas que se dan en la facultad de "Artes"*/
select DISTINCT a.nombre, f.nombre
from (((docente d
inner join facultad f on f.numero = d.numero)
inner join docente_asignatura a_s on a_s.cedulaDocente = d.cedulaDocente )
inner join asignatura a on a.codigo = a_s.codigo) where f.nombre = 'Artes' ;

/*A que decano se debe dirigir el estudiante "Jose Rodriguez"*/
select DISTINCT de.nombre
from ((((((docente d
inner join facultad f on f.numero = d.numero)
inner join decano de on de.cedulaDecano = f.cedulaDecano)
inner join docente_asignatura a_s on a_s.cedulaDocente = d.cedulaDocente )
inner join asignatura a on a.codigo = a_s.codigo)
inner join estudiante_asignatura e_a on e_a.codigo = a.codigo )
inner join estudiante e on e.NrolD = e_a.NrolD) where e.nombre = 'Jose' and e.apellido ='Rodriguez';

/*Cual es la facultad que tiene mas estudiantes*/
select MAX(distinctrow f.nombre) maximo
from ((((((docente d
inner join facultad f on f.numero = d.numero)
inner join decano de on de.cedulaDecano = f.cedulaDecano)
inner join docente_asignatura a_s on a_s.cedulaDocente = d.cedulaDocente )
inner join asignatura a on a.codigo = a_s.codigo)
inner join estudiante_asignatura e_a on e_a.codigo = a.codigo )
inner join estudiante e on e.NrolD = e_a.NrolD);

/*Cantidad de estudiantes cuyo nombre y apellido superan los 20 caracteres.*/
select count(*) from estudiante where length(nombre) + length(apellido) >20 ;

/*Una tabla donde se muestren el nombre de cada docente y cuantas asignaturas dicta.*/
select d.cedulaDocente as CEDULA ,d.nombre,  d.apellido, count(a.nombre) as cantidad
from (docente_asignatura a_s
inner join docente d on d.cedulaDocente = a_s.cedulaDocente
inner join asignatura a on a.codigo = a_s.codigo) group by d.cedulaDocente ,d.nombre, CEDULA ;
