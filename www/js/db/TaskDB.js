class TaskDB {

  /*
    TODO https://www.sitepoint.com/storing-local-data-in-a-cordova-app/
  */
  constructor() {
    this._db = window.sqlitePlugin.openDatabase({name: "wk.db", location: 2, createFromLocation: 1
    });

    this._db.transaction(function(tx) {
      //create table
      tx.executeSql("CREATE TABLE IF NOT EXISTS task (day text, title text, date_task text)", [], function(tx, res){
      });
    });
  }

  get db() {
    return this._db;
  }

  insert(model) {
    this._db.transaction(function(tx) {
      tx.executeSql("INSERT INTO task (day, title, date_task) VALUES (?,?,?)",
        [`${model.dayID}`, `${model.title}`, `${model.date_task}`], function(tx, res){
        console.log('Operação encerrada.');
      });
    });
  }

  get tasks() {
    let arr = [];
    db.transaction(function(tx) {

        //create table
        tx.executeSql("SELECT * FROM task", [], function(tx, res){
          arr.push(new Task(res.rows.item(i).day,
            res.rows.item(i).title),
            res.rows.item(i).date_task);

        })
      });
      return [].contact(arr);
  }

}
