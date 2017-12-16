//killall -9 node if port errors

const { Pool, Client } = require('pg');

// pools will use environment variables
// for connection information
const pool = new Pool(),
serve = require('koa-static'),
cors = require('koa2-cors'),
koa = require('koa');

const app = new koa();

app.use(serve('.'));
app.use(cors());

app.use(async (ctx) => {
  let [url] = ctx.request.url.split('?'),
      [id] = url.substr(1).split('/').slice(-1);
  let route = url.substr(1).split('/').slice(0, 1);
  let result;

  console.log('the route is ' + route);
  console.log('the id is ' + id);
  if( route == 'newalbum'){
    console.log('adding album ');
    [artist_name, album_name, album_year, genre, album_url, space, domain, path] = url.substr(1).split('/').slice(1);
    let sql = 'insert into albums (artist_name, album_name, album_year, genre, album_url) ';
    sql += "values ('" + artist_name + "',";
    sql += "'" + album_name + "',";
    sql += "'" + album_year + "',";
    sql += "'" + genre + "',";
    sql += "'" + album_url + "//" + domain + "/" + path + "');"; //this will only work for a path with one segment. I am using tinyurl, which follows this scheme. Would like to make this better.
    //result = await pool.query(sql);
    console.log(sql);
  }else if(id == 0){
    result = await pool.query('select * from albums');
  }else {
    result = await pool.query('select * from albums where id = ' + id);
  }

  // For a small measure of security, block table names that
  // aren't a single word or IDs that aren't integers.
  // if ( ! table.match(/^[a-zA-Z0-9_]+$/) ) {
  //   throw "Not a valid table name: " + table;
  // }

  id = parseInt(id, 10);
  console.log('getting 1 album');


  ctx.body = result;
});

app.listen(4001);
