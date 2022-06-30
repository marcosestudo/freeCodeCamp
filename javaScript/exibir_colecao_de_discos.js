// Setup
const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

// Only change code below this line
function updateRecords(records, id, prop, value) {
  // Se a prop não for track e o valor não for um array vazio
  if (prop != "tracks" && value != "") {
    records[id][prop] = value;
  }
  // Se track existir no objeto, insere value no array track 
  if (prop === "tracks") {
    if (records[id].hasOwnProperty("tracks")) {
      records[id].tracks.push(value);
    }
    // Senão, cria o array tracks antes de inserir
    else {
      records[id].tracks = [];
      records[id].tracks.push(value);
    }
  }
  // Se valor for vazio delete a prop
  if (value == "") {
    delete records[id][prop];
  }

  return records;
}

console.log(updateRecords(recordCollection, 2548, "artist", ""));