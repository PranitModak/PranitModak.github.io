config = {
  locateFile: (filename) => `/dist/${filename}`,
};

const procCard = (params) => {
  var img = document.createElement("img");
  img.src =
    "data:image/jpg;base64, " +
    params.value.reduce((data, byte) => {
      let charcode = String.fromCharCode(byte);
      let result = `${data}${charcode}`;
      charcode = null;
      return result;
    }, "");
  img.width = "100";
  img.height = "140";
  return img;
};
const columns = ["Set", "Image", "Name", "Civilization", "Card Type", "Mana Cost", "Race", "English Text", "Power"];
let rows = [];
const columnDefs = [
  { field: columns[0], width: 140, suppressSizeToFit: true },
  { field: columns[1], cellRenderer: procCard, width: 140, suppressSizeToFit: true },
  { field: columns[2], width: 160, suppressSizeToFit: true },
  { field: columns[3], width: 110, suppressSizeToFit: true },
  { field: columns[4], width: 110, suppressSizeToFit: true },
  { field: columns[5], width: 110, suppressSizeToFit: true },
  { field: columns[6], wrapText: true },
  { field: columns[7], width: 320, suppressSizeToFit: true },
  { field: columns[8], width: 110, suppressSizeToFit: true },
];
initSqlJs(config).then(async function (SQL) {
  const gridDiv = document.querySelector("#myGrid");
  const gridOptions = {
    defaultColDef : {
      wrapText: true,
      autoHeight: true
    },
    columnDefs: columnDefs,
    rowData: rows,
    animateRows: true,
    statusBar: {
      statusPanels: [{ statusPanel: "agAggregationComponent", align: "right" }],
    },
    getRowId: (params) => {
      return params.data.index;
    },
    pagination: true,
    paginationPageSize: 10,
  };
  const cardGrid = new agGrid.Grid(gridDiv, gridOptions);
  gridOptions.api.sizeColumnsToFit();
  var elem = document.getElementById("myBar");
  for (let index = 1; index < 40; index++) {
    let s_db = index + "";
    if (index < 10) s_db = "0" + index;
    console.log(s_db);
    let set_rows = await get_dbdata("DB/DM-" + s_db + ".db", SQL);
    rows.push(...set_rows);
    set_rows = null;
    s_db = null;
    if (elem != null) elem.style.width = (index / 39) * 100 + "%";
    gridOptions.api.setRowData(rows);
  }
  var elem = document.getElementById("pg_bar");
  elem.style.display = "None";
  elem = null;
});

async function get_dbdata(dbname, SQL) {
  let rows = [];
  var fetched = await fetch(dbname);
  var buf = await fetched.arrayBuffer();
  var db = new SQL.Database(new Uint8Array(buf));
  var stmt = db.prepare('SELECT `index`,`Set`,Image,Name,Civilization,"Card Type","Mana Cost",Race,"English Text",Power FROM Cards');
  stmt.getAsObject({ $start: 1, $end: 1 }); // {col1:1, col2:111}
  stmt.bind({ $start: 1, $end: 2 });
  while (stmt.step()) {
    var row = stmt.getAsObject();
    rows.push(row);
    row = null;
  }
  fetched = null;
  buf = null;
  db = null;
  stmt = null;
  console.log(window.performance.memory);
  return rows;
}