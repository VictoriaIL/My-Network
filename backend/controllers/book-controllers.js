const Pool = require('pg').Pool;

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'Books',
  password: '12345',
  port: 5432,
});

module.exports.getBooks = async function(req, res) {
  pool.query(`SELECT *
              FROM Book`, (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows);
  });
};

module.exports.getBookById = async function(req, res) {
  const id = parseInt(req.params.id);

  pool.query(`SELECT *
              FROM book
              WHERE book_id = $1`, [id], (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows[0]);
  });
};

module.exports.postBook = async function(req, res) {

  const { title, author, picture, about, booklink, favorite, read } = req.body;

  pool.query('INSERT INTO book (title, author, picture, about, booklink, favorite, read) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *',
    [title, author, picture, about, booklink, favorite, read],
    (error, results) => {
      if (error) {
        throw error;
      }
      res.status(201).json(results.rows[0]);
    });
};

module.exports.removeBook = async function(req, res) {
  const id = parseInt(req.params.id);

  pool.query('DELETE FROM book WHERE book_id = $1', [id], (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(`User deleted with ID: ${id}`);
  });
};

module.exports.updateBook = async function(req, res) {
  const id = parseInt(req.params.id);
  const { title, author, picture, about, booklink,  favorite, read } = req.body;

  pool.query(
    'UPDATE book SET title = $1, author = $2, picture = $3, about = $4, booklink = $5,  favorite = $6, read = $7 WHERE book_id = $8',
    [title, author, picture, about, booklink, favorite, read, id],
    (error, results) => {
      if (error) {
        throw error;
      }
      pool.query(
        'SELECT * FROM BOOK WHERE book_id = $1',
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

module.exports.changeFavoriteFieldOfBookById = async function(req, res) {
  const id = parseInt(req.params.id);
  const isFavorite = req.body.favorite;
  pool.query(
    'UPDATE book SET favorite = $1 WHERE book_id = $2',
    [isFavorite, id],
    (error, results) => {
      if (error) {
        throw error;
      }

      pool.query(
        'SELECT * FROM BOOK WHERE book_id = $1',
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

module.exports.changeReadFieldOfBookById = async function(req, res) {
  const id = parseInt(req.params.id);
  const isRead = req.body.read;
  pool.query(
    'UPDATE book SET read = $1 WHERE book_id = $2',
    [isRead, id],
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
    'SELECT * FROM BOOK WHERE favorite = $1',
    [true],
    (error, results) => {
      if (error) {
        throw error;
      }
      res.status(200).json(results.rows);
    },
  );

};

module.exports.getReadBooksList = async function(req, res) {
  pool.query(
    'SELECT * FROM BOOK WHERE read = $1',
    [true],
    (error, results) => {
      if (error) {
        throw error;
      }
      res.status(200).json(results.rows);
    },
  );
};
