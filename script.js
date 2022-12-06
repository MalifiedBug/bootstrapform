let userList = [];
var selected = [];
    const buttonSubmit = () => {
      let firstName = document.getElementById("firstName").value;
      let lastName = document.getElementById("lastName").value;
      let address = document.getElementById("address").value;
      let pinCode = document.getElementById("pincode").value;
      let gender = document.getElementById("gender").value;
      let foodOptions = document.getElementById("foodOptions").value;
      let state = document.getElementById("state").value;
      let country = document.getElementById("country").value;
        
        for (var option of document.getElementById('foodOptions').options) {
          if (option.selected) {
            selected.push(option.value);            
          }
        
        
      }
      let myData = {
        firstName: firstName,
        lastName: lastName,
        address:address,
        pinCode:pinCode,
        gender:gender,
        foodOptions:selected,
        state:state,
        country:country
      };
      userList.push(myData);
      localStorage.setItem("userData", JSON.stringify(userList));
      tableDataPopulate();
      selected=[];
    };

    const tableDataPopulate = () => {
      const allData = JSON.parse(localStorage.getItem("userData"));
      
      const table = document.getElementById("user-table-data");
      let userHtml = "";
      allData.forEach((user, i) => {
        userHtml += `<tr><th scope="row">${i+1}</th><td>${user.firstName}</td><td>${user.lastName}</td><td>${user.address}</td><td>${user.pinCode}</td><td>${user.gender}</td><td>${user.foodOptions}</td><td>${user.state}</td><td>${user.country}</td></tr>`;
      });
      table.innerHTML = userHtml;        
    };