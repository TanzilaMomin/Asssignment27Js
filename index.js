const data = [
    {
      empid: 15481,
      fname: "Neha",
      lname: "Patil",
      role: "Full Stack Developer",
      joindate: "10-02-2020",
      compnayname: "PickupBiz Software Pvt Ltd",
      email: "Neha@pickupbiz.com",
      mobile: 86987987697,
    },
    {
      empid: 15482,
      fname: "Revan",
      lname: "Siddeshwar",
      role: "Frontend Developer",
      joindate: "18-03-2021",
      compnayname: "Tech Mahindra Ltd",
      email: "revan@pickupbiz.com",
      mobile: 9022938495,
    },
    {
      empid: 15483,
      fname: "Priya",
      lname: "Kumar",
      role: "Full Stack Developer",
      joindate: "12-08-2021",
      compnayname: "Hcl technologies",
      email: "Priya@pickupbiz.com",
      mobile: 8908908908,
    },
    {
      empid: 15484,
      fname: "Mohammed",
      lname: "Shoeb",
      role: "Frontend Developer",
      joindate: "19-05-2019",
      compnayname: "Wipro Limited",
      email: "revan@pickupbiz.com",
      mobile: 9022938495,
    },
    {
      empid: 15485,
      fname: "Nikhat",
      lname: "Khan",
      role: "Backned Developer",
      joindate: "12-03-2023",
      compnayname: "BMC Software",
      email: "nikhat@pickupbiz.com",
      mobile: 7890789078,
    },
    {
      empid: 15486,
      fname: "John",
      lname: "marry",
      role: "Frontend Developer",
      joindate: "28-05-2023",
      compnayname: "Persistent Systems",
      email: "John@pickupbiz.com",
      mobile: 9022938495,
    },
  ];

  const mainDiv=document.getElementById("main");

  const generateComponent=(curr)=>{
    const divComp=document.createElement("div");
    divComp.setAttribute("class","comp");

    const empid=document.createElement("h2");
    empid.innerText="Employee id-  "  +curr.empid;
    
    const name=document.createElement("h4");
     name.innerText= curr.fname  +" " + curr.lname;

    const email=document.createElement("h4");
    email.innerText=curr.email;

    const mob=document.createElement("h4");
    mob.innerText=curr.mobile;

    const company=document.createElement("h3");
    company.innerText=curr.compnayname;

    const joindate=document.createElement("h4");
    joindate.innerText=curr.joindate;

    const role=document.createElement("h4");
    role.innerText=curr.role;

  divComp.appendChild(empid);
  divComp.appendChild(name);
  divComp.appendChild(email);
  divComp.appendChild(mob);
  divComp.appendChild(company);
  divComp.appendChild(joindate);
  divComp.appendChild(role);

  mainDiv.appendChild(divComp);

  }
  data.forEach((item)=>{
    generateComponent(item)
})
