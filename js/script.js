function updateTime() {
    const now = new Date();
    const timeEl = document.getElementById('time');
    const dateEl = document.getElementById('date');
    
    // Display time
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds}`;
    timeEl.textContent = timeString;
    
    // Display date
    const year = now.getFullYear();
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    const day = now.getDate().toString().padStart(2, '0');
    const dateString = `${day}-${month}-${year}`;
    dateEl.textContent = dateString;
  }
  
  // Update time every second
  setInterval(updateTime, 1000);

// canada Timing 
  function updateTime2() {
    const now = new Date().toLocaleString("en-US", {timeZone: "America/Toronto"});
    const timeEl = document.getElementById('Ca_time');
    const dateEl = document.getElementById('Ca_date');
    
    // Display time
    const timeString = now.slice(-11, -3);
    timeEl.textContent = timeString;
    
    // Display date
    const dateString = now.slice(0, 10);
    dateEl.textContent = dateString;
  }
  
  // Update time every second
  setInterval(updateTime2, 1000);
  


  const tableBody = document.getElementById('table-body');
  const searchInput = document.getElementById('search-input');
  const addButton = document.getElementById('add-button');
  const removeButton = document.getElementById('remove-button');
  
  let data = [
    { risk_scale: 'Low', contact_parent: 'jonas Glannis', child_name: 'Sophie', last_handling_date: 'April 30,2010', dob: '12.12.1996'},
    { risk_scale: 'Low', contact_parent: 'jonas Glannis', child_name: 'Sophie', last_handling_date: 'April 30,2010', dob: '12.12.1996'},
    { risk_scale: 'Miderate', contact_parent: 'jonas Glannis', child_name: 'Sophie', last_handling_date: 'April 30,2010', dob: '12.12.1996'},
    { risk_scale: 'High', contact_parent: 'jonas Glannis', child_name: 'Sophie', last_handling_date: 'April 30,2010', dob: '12.12.1996'},
    { risk_scale: 'Low', contact_parent: 'jonas Glannis', child_name: 'Sophie', last_handling_date: 'April 30,2010', dob: '12.12.1996'},
    { risk_scale: 'Miderate', contact_parent: 'jonas Glannis', child_name: 'Sophie', last_handling_date: 'April 30,2010', dob: '12.12.1996'},
    { risk_scale: 'Low', contact_parent: 'jonas Glannis', child_name: 'Sophie', last_handling_date: 'April 30,2010', dob: '12.12.1996'},
    { risk_scale: 'High', contact_parent: 'jonas Glannis', child_name: 'Sophie', last_handling_date: 'April 30,2010', dob: '12.12.1996'},
    { risk_scale: 'Low', contact_parent: 'jonas Glannis', child_name: 'Sophie', last_handling_date: 'April 30,2010', dob: '12.12.1996'},
    { risk_scale: 'High', contact_parent: 'jonas Glannis', child_name: 'Sophie', last_handling_date: 'April 30,2010', dob: '12.12.1996'},
    { risk_scale: 'High', contact_parent: 'jonas Glannis', child_name: 'Sophie', last_handling_date: 'April 30,2010', dob: '12.12.1996'},
    { risk_scale: 'Low', contact_parent: 'Kamal', child_name: 'Sophie', last_handling_date: 'April 30,2010', dob: '12.12.1996'},
    { risk_scale: 'Miderate', contact_parent: 'jonas Glannis', child_name: 'Sophie', last_handling_date: 'April 30,2010', dob: '12.12.1996'},
    { risk_scale: 'Miderate', contact_parent: 'jonas Glannis', child_name: 'Sophie', last_handling_date: 'April 30,2010', dob: '12.12.1996'},
  
  ];
  
  function populateTable(data) {
    tableBody.innerHTML = '';
  
    data.forEach((item, index) => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${item.risk_scale}</td>
        <td>${item.contact_parent}</td>
        <td>${item.child_name}</td>
        <td>${item.last_handling_date}</td>
        <td>${item.dob}</td>
        <td>
          <button class="remove-button" data-index="${index}">X</button>
        </td>
      `;
      tableBody.appendChild(row);
    });
  }
  
  function filterData(searchTerm) {
    const filteredData = data.filter((item) => {
      return item.risk_scale.toLowerCase().includes(searchTerm.toLowerCase()) ||
             item.contact_parent.toLowerCase().includes(searchTerm.toLowerCase()) ||
             item.child_name.toLowerCase().includes(searchTerm.toLowerCase());
    });
  
    populateTable(filteredData);
  }
  
  // function addData() {
  //   const risk_scale = prompt('Enter risk_scale:');
  //   const contact_parent = prompt('Enter contact_parent:');
  //   const child_name = prompt('Enter child_name:');
  //   const last_handling_date = prompt('Enter last_handling_date:');
  //   const dob = prompt('Enter dob:');
  
  //   if (risk_scale && contact_parent && child_name && last_handling_date && dob) {
  //     const newData = { risk_scale, contact_parent, child_name, last_handling_date, dob};
  //     data.push(newData);
  //     populateTable(data);
  //   }
  // }
  
  function removeData(index) {
    data.splice(index, 1);
    populateTable(data);
  }
  
  searchInput.addEventListener('input', (event) => {
    const searchTerm = event.target.value.trim();
  
    if (searchTerm !== '') {
      filterData(searchTerm);
    } else {
      populateTable(data);
    }
  });
  
  addButton.addEventListener('click', addData);
  
  tableBody.addEventListener('click', (event) => {
    if (event.target.classList.contains('remove-button')) {
      const index = event.target.getAttribute('data-index');
      removeData(index);
    }
  });
  
  populateTable(data);
  
  function change_color(){
  // for change rows color on risk scale cell data changes
    var table = document.getElementById("myTable");
    var rows = table.getElementsByTagName("tr");
    for (var i = 0; i < rows.length; i++) {
      var cells = rows[i].getElementsByTagName("td");
      for (var j = 0; j < cells.length; j++) {
        if (cells[j].innerHTML === "Low") {
          rows[i].style.color = "black";
        } else if (cells[j].innerHTML === "Miderate") {
          rows[i].style.color = "orange";
        } else if (cells[j].innerHTML === "High") {
          rows[i].style.color = "red";
        }
      }
    }
  };
  change_color()
  
//toggle for new patient details div

const toggleButton = document.getElementById('toggle-button');
const targetElement = document.getElementById('new_patient');

toggleButton.addEventListener('click', function() {
  alert("Please")
  targetElement.classList.toggle('none');
});
