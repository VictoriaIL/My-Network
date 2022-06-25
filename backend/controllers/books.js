// import {client} from '../config/db-config'
const { Client } = require('pg');


const Pool = require('pg').Pool;
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'Books',
  password: '12345',
  port: 5432,
});

const query = `SELECT *
               FROM Book;`;

// client.query(query, (err, res) => {
//     if (err) {
//         console.error(err);
//         return;
//     }
//     console.log('Table is successfully created');
//     client.end();
// });

module.exports.getBooks = async function(req, res) {
  // console.log(req)
  // console.log(res)
  //    try {
  // const res = await
// return await client.query(query)
//         console.log('Table is successfully created');
//     } catch (err) {
//         console.log(err.stack);
//     } finally {
  // client.end;
  // }
  pool.query(query, (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows);
  });
};

module.exports.postBook = async function(req, res) {
  console.log(req);
  console.log('----------------');
  console.log(req.body);
  const { title, author, picture, about, favorite } = req.body;
  pool.query('INSERT INTO book (title, author,picture,about, favorite) VALUES ($1, $2,$3,$4,$5) RETURNING *', [title, author, picture, about, favorite], (error, results) => {
    if (error) {
      throw error;
    }
    res.status(201).send(`User added with ID: ${results.rows[0].book_id}`);
  });
};

module.exports.removeBook = async function(req, res) {
  console.log(req.params);
  const id = parseInt(req.params.id);

  pool.query('DELETE FROM book WHERE book_id = $1', [id], (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).send(`User deleted with ID: ${id}`);
  });
};

module.exports.updateBook = async function(req, res) {
  console.log(req.body, 'njkjnknknjnjnj')
  const id = parseInt(req.params.id);
  const { title, author,picture,about, favorite } = req.body;

  pool.query(
    'UPDATE book SET title = $1, author = $2, picture = $3, about = $4, favorite = $5 WHERE book_id = $6',
    [title, author,picture,about, favorite, id],
    (error, results) => {
      if (error) {
        throw error
      }
      pool.query(
        'SELECT*FROM BOOK WHERE book_id = $1',
        [id],
        (error, results) => {
          if (error) {
            throw error;
          }
          res.status(201).json(results.rows[0]);
        },
      );
    }
  )
};

module.exports.changeFavoriteFieldOfBookById = async function(req, res) {
  const id = parseInt(req.params.id);
  console.log(id)
  const isFavorite = req.body.favorite;
  pool.query(
    'UPDATE book SET favorite = $1 WHERE book_id = $2',
    [isFavorite, id],
    (error, results) => {

      if (error) {
        throw error;
      }

      pool.query(
        'SELECT*FROM BOOK WHERE book_id = $1',
        [id],
        (error, results) => {
          if (error) {
            throw error;
          }
          res.status(201).json(results.rows[0]);
        },
      );
    },
  );

};

module.exports.getFavoriteBooksList = async function(req, res) {
    pool.query(
      'SELECT*FROM BOOK WHERE favorite = $1',
      [true],
      (error, results) => {
          if (error) {
              throw error;
          }
          res.status(200).json(results.rows);
      },
    );

};
