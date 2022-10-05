config = {
  locateFile: (filename) => `/dist/${filename}`,
};

const columns = ["Set", "Image", "Name", "Civilization", "Card Type", "Mana Cost", "Race", "English Text", "Power"];
let rows = [];
const grid = new gridjs.Grid({
  columns: columns,
  data: rows,
  pagination: {
    limit: 10,
  },
  search: {
    enabled: true,
  },
  sort: true,
  mouseOverColor: "#FFC1C1",
}).render(document.getElementById("wrapper"));
initSqlJs(config).then(async function (SQL) {
  var elem = document.getElementById("myBar");
  for (let index = 1; index < 40; index++) {
    let s_db = index + "";
    if (index < 10) s_db = "0" + index;
    console.log(s_db);
    let set_rows = await get_dbdata("DB/DM-" + s_db + ".db",SQL);
    rows.push(...set_rows)
    elem.style.width = index/39*100 + '%';
    grid.updateConfig({
      data: rows
    }).forceRender();
  }
  var elem = document.getElementById("pg_bar");
  elem.style.display = "None"
});

async function get_dbdata(dbname,SQL) {
  const fetched = await fetch(dbname);
  const buf = await fetched.arrayBuffer();
  const db = new SQL.Database(new Uint8Array(buf));
  const contents = db.exec('SELECT `Set`,Image,Name,Civilization,"Card Type","Mana Cost",Race,"English Text",Power FROM Cards');
  let col = contents[0].columns;
  let rows = contents[0].values;
  rows.forEach((row) => {
    img = document.createElement("img");
    try {
      img.src =
        "data:image/jpg;base64, " +
        row[1].reduce((data, byte) => {
          return data + String.fromCharCode(byte);
        }, "");
    } catch (error) {
      img.src = "data:image/jpg;base64, " + row[1];
    }
    img.width = "100";
    img.height = "140";
    row[1] = img;
  });
  return rows;
}
