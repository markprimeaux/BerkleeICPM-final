./createdb -U postgres final

./psql -U postgres final

create table albums (
id          serial primary key,
artist_name varchar(100) not null,
album_name  varchar(100) not null,
album_year  varchar(20),
genre       varchar(100) not null,
album_url   varchar(100) not null
);

INSERT INTO albums (artist_name, album_name, album_year, genre, album_url) VALUES ('Iggy Pop', 'Lust for Life' 1977, 'Rock', 'https://tinyurl.com/yc6osygg');

INSERT INTO albums (artist_name, album_name, album_year, genre, album_url) VALUES ('Rolling Stones', 'Aftermath', 1966, 'Rock', https://tinyurl.com/y8up826o);

INSERT INTO albums (artist_name, album_name, album_year, genre, album_url) VALUES ('Dinosaur jr.', 'Dinosaur', 1985, 'Alternative', 'https://tinyurl.com/y9lqekzr');

INSERT INTO albums (artist_name, album_name, album_year, genre, album_url) VALUES ('Phineas Newborn Jr.', 'A World of Piano!', 1962, 'Jazz', 'https://tinyurl.com/yclf7vc5');

INSERT INTO albums (artist_name, album_name, album_year, genre, album_url) VALUES ('Emitt Rhodes', 'Emitt Rhodes', 1970, 'Rock', 'https://tinyurl.com/y9wbufhl');

INSERT INTO albums (artist_name, album_name, album_year, genre, album_url) VALUES ('Emitt Rhodes', 'Mirror', 1971, 'Rock', 'https://tinyurl.com/y9ekc7er');
