config = {
  locateFile: (filename) => `/dist/${filename}`,
};
function bufferToBase64(buf) {
    var binstr = Array.prototype.map.call(buf, function (ch) {
        return String.fromCharCode(ch);
    }).join('');
    return btoa(binstr);
}
initSqlJs(config).then(async function (SQL) {
  //Create the database
  const fetched = await fetch("Cards.db");
  const buf = await fetched.arrayBuffer();
  const db = new SQL.Database(new Uint8Array(buf));
  const contents = db.exec("SELECT `Set`,Image,Name,Civilization,'Card Type','Mana Cost',Race,'English Text',Power FROM Cards");
  col = contents[0].columns
  rows = contents[0].values
  rows.forEach(row => {
    img = document.createElement('img');
    try {
      img.src = 'data:image/jpg;base64, '+(row[1]).reduce((data, byte)=> {
        return data + String.fromCharCode(byte);
        }, '')
      
    } catch (error) {
      console.log(error)
    }
    img.width = '100';
    img.height = '140';
    row[1]=img
  });
const data = [['', '', '', '', '', '', '','','']];
data.push(...rows);

new gridjs.Grid({
    columns: col,
    data: rows,
    pagination:{
        limit:10
    }
  }).render(document.getElementById("wrapper"));

});
