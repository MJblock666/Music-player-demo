function sorry() {
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    }
  });

  Toast.fire({
    icon: "error",
    title: "Sorry.It'll coming soon."
  });
}
function home() {
  var homepage = document.getElementById('chushi');
  if (homepage.style.display === 'none') {
    homepage.style.display = 'block';
    document.getElementById("tableContainer").style.display = 'none';
  }
}
function hidemain() {
  document.getElementById("chushi").style.display = "none";
  document.getElementById("tableContainer").style.display = "block";
}
var table = document.createElement('table');
var tbody = document.createElement('tbody');
function favorite() {
  hidemain();
  var tableContent = [
    ['ID', 'Song', 'Singer', 'Album', 'Play It!'],
    ['231', 'A Moment Apart', 'ODESZA', 'Forza Horizon 4', '<button onclick="sorry()">Play</i></button>'],
    ['101', 'Cedar Shead', 'Koloto', '-', '<button onclick="sorry()">Play</i></button>'],
    ['216', 'Sunshine rainbow white horse', 'Big Zhangwei', 'Cell 4x4', '<button onclick="sorry()">Play</i></button>'],
    ['189', 'Fool for you', 'Kastra', '-', '<button onclick="sorry()">Play</i></button>'],
    ['111', 'Qimeidi', 'Guo Ding', '-', '<button onclick="sorry()">Play</i></button>'],
    ['-', '', '', '', ''], ['-', '', '', '', ''], ['-', '', '', '', ''], ['-', '', '', '', ''],
  ];
  var tableHTML = '<div class="back" onclick="home();"><i class="fa-solid fa-left-long" style="color: #ffffff;"></i>Back</div><br><h1>Your Favorite Song List</h1><br><table class="table"><tbody>';
  for (var i = 0; i < tableContent.length; i++) {
    tableHTML += '<tr>';

    for (var j = 0; j < tableContent[i].length; j++) {
      tableHTML += '<td>' + tableContent[i][j] + '</td>';
    }

    tableHTML += '</tr>';
  }

  tableHTML += '</tbody></table>';
  document.getElementById('tableContainer').innerHTML = tableHTML;
}
function recent() {
  hidemain();
  var tableContent = [
    ['ID', 'Song', 'Singer', 'Album', 'Play It!'],
    ['231', 'A Moment Apart', 'ODESZA', 'Forza Horizon 4', '<button onclick="sorry()">Play</i></button>'],
    ['101', 'Cedar Shead', 'Koloto', '-', '<button onclick="sorry()">Play</i></button>'],
    ['216', 'Sunshine rainbow white horse', 'Big Zhangwei', 'Cell 4x4', '<button onclick="sorry()">Play</i></button>']
  ];
  var tableHTML = '<div class="back" onclick="home();"><i class="fa-solid fa-left-long" style="color: #ffffff;"></i>Back</div><br><h1>Recent Song List</h1><br><table class="table"><tbody>';
  for (var i = 0; i < tableContent.length; i++) {
    tableHTML += '<tr>';

    for (var j = 0; j < tableContent[i].length; j++) {
      tableHTML += '<td>' + tableContent[i][j] + '</td>';
    }

    tableHTML += '</tr>';
  }

  tableHTML += '</tbody></table>';
  document.getElementById('tableContainer').innerHTML = tableHTML;
}