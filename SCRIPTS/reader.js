//needed ai help
//logged in credits
function readCVS(CVS_data)
{
    let table = document.getElementById("main_table");
    table.innerHTML = "";
    //javascript c# for loop moment like its so complicated for no reason
    for (let i = 0; i < CVS_data.length; i++) {
        //creates a new row for each row in the tables length, and then creates
        // elements for each data value, which then get filled in with data from the 
        //cvs file, and appended to the row, which is appended to the table.
 
        let row = document.createElement("tr");

        let abs = document.createElement("td");
        abs.textContent = CVS_data[i]["ABN"];

        let name = document.createElement("td");
        name.textContent = CVS_data[i]["Charity_Legal_Name"];

        let othernames = document.createElement("td");
        othernames.textContent = CVS_data[i]["Other_Organisation_Names"];

        let addressType = document.createElement("td");
        addressType.textContent = CVS_data[i]["Address_Type"];

        let address = document.createElement("td");
        address.textContent = CVS_data[i]["Address_Line_1"];

        let LocationCity = document.createElement("td");
        LocationCity.textContent = CVS_data[i]["Town_City"];
        
        let StateLocated = document.createElement("td");
        StateLocated.textContent = CVS_data[i]["State"];
        
        let PostCd = document.createElement("td");
        PostCd.textContent = CVS_data[i]["Postcode"];

        let CharWebsite = document.createElement("td");
        CharWebsite.textContent = CVS_data[i][Charity_Website];


        // ai said appendChild???
        row.appendChild(abs);
        row.appendChild(name);
        row.appendChild(othernames);
        row.appendChild(addressType);
        row.appendChild(address);
        row.appendChild(LocationCity);
        row.appendChild(StateLocated);
        row.appendChild(Postcd);
        row.appendChild(CharWebsite);

        console.log(row)
        table.appendChild(row)
    }
}