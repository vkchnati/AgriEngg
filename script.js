
const downloadGWHButton = document.getElementById("downloadGWH");
const downloadMEFAButton = document.getElementById("downloadMEFA");
const downloadFMOHButton = document.getElementById("downloadFMOH");
const downloadAPEButton = document.getElementById("downloadAPE");
const downloadDFEButton = document.getElementById("downloadDFE");
const downloadDSWCFSButton = document.getElementById("downloadDSWCFS");
const downloadEPBMButton = document.getElementById("downloadEPBM");
const downloadFPTSButton = document.getElementById("downloadFPTS");
const downloadFMEIButton = document.getElementById("downloadFMEI");
const downloadFMEIIButton = document.getElementById("downloadFMEII");
const downloadFOODPACKButton = document.getElementById("downloadFOODPACK");
const downloadFQCButton = document.getElementById("downloadFQC");
const downloadGISButton = document.getElementById("downloadGIS");
const downloadGHTButton = document.getElementById("downloadGHT");
const downloadHMTButton = document.getElementById("downloadHMT");
const downloadHESButton = document.getElementById("downloadHES");
const downloadIDEButton = document.getElementById("downloadIDE");
const downloadMIIIButton = document.getElementById("downloadMIII");
const downloadMIButton = document.getElementById("downloadMI");
const downloadMMIButton = document.getElementById("downloadMMI");
const downloadORButton = document.getElementById("downloadOR");
const downloadPHEButton = document.getElementById("downloadPHE");
const downloadPSMButton = document.getElementById("downloadPSM");
const downloadSWHButton = document.getElementById("downloadSWH");
const downloadSURVEYButton = document.getElementById("downloadSURVEY");
const downloadSWCEButton = document.getElementById("downloadSWCE");
const downloadTDRSButton = document.getElementById("downloadTDRS");
const downloadTOMButton = document.getElementById("downloadTOM");
const downloadTOSButton = document.getElementById("downloadTOS");
const downloadWATERButton = document.getElementById("downloadWATER");
const downloadESButton = document.getElementById("downloadES");
const downloadAETBMButton = document.getElementById("downloadAETBM");
const downloadPVTSButton = document.getElementById("downloadPVTS");
      const downloadDAMButton = document.getElementById("downloadDAM");
const downloadFPDMButton = document.getElementById("downloadFPDM");
const downloadAIBUButton = document.getElementById("downloadAIBU");



  const fileUrls = {
        GWH: "GWH.pdf",
  ES: "Electrical Systems.pdf",
        MEFA: "MEFA  ALL.pdf",
  FMOH: "FMOH.pdf",
  APE:"Agricultural Process Engineering.pdf",
  DFE: "DAIRY AND FOOD ENGINEERING.pdf",
  DSWCFS: "DSWCFS.pdf",
  EPBM: "EPBM.pdf",
  FMTS: "Farm Power and Tractor Systems.pdf",
  FMEI: "FME-I.pdf",
        FMEII: "FME-II.pdf",
  FOODPACK: "Food Packaging.pdf",
  FQC: "Food Quality & Control.pdf",
  GIS: "GIS & REMOTE SENSING.pdf",
  GHT: "GREEN HOUSE TECHNOLOGY.pdf",
  HMT: "HEAT AND MASS TRANSFER.pdf",
  HES: "HES.pdf",
  IDE: "Irrigation&Drainage Engineering.pdf",
  MIII: "Mathematics-III.pdf",
  MI: "MICRO IRRIGATION.pdf",
  MMI: "MMI.pdf",
  OR: "OPERATION RESEARCH.pdf",
  PHE: "PHE&HP.pdf",
  PSM: "PSM.pdf",
  SWH: "SURFACE WATER HYDROLOGY.pdf",
  SURVEY: "SURVEYING.pdf",
  SWCE: "SWCE MATERIAL.pdf",
  TDRS: "TD&RS MATERIAL.pdf",
  TOM: "THEORY OF MACHINES.pdf",
  TOS: "THEORY OF STRUCTURES.pdf",
  WATER: "Watershed Management.pdf",
  AETBM: "AET&BM.pdf",
  FPDM: "FPD&M.pdf",
  AIBU: "AI&BU.pdf",
  DAM: "DAM.pdf",
  PVTS: "PVT&S.pdf"
  };

  downloadGWHButton.addEventListener("click", () => {
    downloadFile(fileUrls.GWH, "GWH.pdf");
  });
 downloadESButton.addEventListener("click", () => {
    downloadFile(fileUrls.ES, "Electrical Systems.pdf");
  });

  downloadMEFAButton.addEventListener("click", () => {
    downloadFile(fileUrls.MEFA, "MEFA  ALL.pdf");
  });

 downloadFMOHButton.addEventListener("click", () => {
    downloadFile(fileUrls.FMOH, "FMOH.pdf");
  });
downloadAPEButton.addEventListener("click", () => {
    downloadFile(fileUrls.APE, "Agricultural Process Engineering.pdf");
  });
downloadDFEButton.addEventListener("click", () => {
    downloadFile(fileUrls.DFE, "DAIRY AND FOOD ENGINEERING.pdf");
  });
downloadDSWCFSButton.addEventListener("click", () => {
    downloadFile(fileUrls.DSWCFS, "DSWCFS.pdf");
  });
downloadEPBMButton.addEventListener("click", () => {
    downloadFile(fileUrls.EPBM, "EPBM.pdf");
  });
downloadFPTSButton.addEventListener("click", () => {
    downloadFile(fileUrls.FPTS, "Farm Power and Tractor Systems.pdf");
  });
downloadFMEIButton.addEventListener("click", () => {
    downloadFile(fileUrls.FMEI, "FME-I.pdf");
  });
downloadFMEIIButton.addEventListener("click", () => {
    downloadFile(fileUrls.FMEII, "FME-II.pdf");
  });
downloadFOODPACKButton.addEventListener("click", () => {
    downloadFile(fileUrls.FOODPACK, "Food Packaging.pdf");
  });
downloadFQCButton.addEventListener("click", () => {
    downloadFile(fileUrls.FQC, "Food Quality & Control.pdf");
  });
downloadGISButton.addEventListener("click", () => {
    downloadFile(fileUrls.GIS, "GIS & REMOTE SENSING.pdf");
  });
downloadGHTButton.addEventListener("click", () => {
    downloadFile(fileUrls.GHT, "GREEN HOUSE TECHNOLOGY.pdf");
  });
downloadHMTButton.addEventListener("click", () => {
    downloadFile(fileUrls.HMT, "HEAT AND MASS TRANSFER.pdf");
  });
downloadHESButton.addEventListener("click", () => {
    downloadFile(fileUrls.HES, "HES.pdf");
  });
downloadIDEButton.addEventListener("click", () => {
    downloadFile(fileUrls.IDE, "Irrigation&Drainage Engineering.pdf");
  });
downloadMIIIButton.addEventListener("click", () => {
    downloadFile(fileUrls.MIII, "Mathematics-III.pdf");
  });
downloadMIButton.addEventListener("click", () => {
    downloadFile(fileUrls.MI, "MICRO IRRIGATION.pdf");
  });
downloadMMIButton.addEventListener("click", () => {
    downloadFile(fileUrls.MMI, "MMI.pdf");
  });
downloadORButton.addEventListener("click", () => {
    downloadFile(fileUrls.OR, "OPERATION RESEARCH.pdf");
  });
downloadPHEButton.addEventListener("click", () => {
    downloadFile(fileUrls.PHE, "PHE&HP.pdf");
  });
downloadPSMButton.addEventListener("click", () => {
    downloadFile(fileUrls.PSM, "PSM.pdf");
  });
downloadSWHButton.addEventListener("click", () => {
    downloadFile(fileUrls.SWH, "SURFACE WATER HYDROLOGY.pdf");
  });
downloadSURVEYButton.addEventListener("click", () => {
    downloadFile(fileUrls.SURVEY, "SURVEYING.pdf");
  });
downloadSWCEButton.addEventListener("click", () => {
    downloadFile(fileUrls.SWCE, "SWCE MATERIAL.pdf");
  });
downloadTDRSButton.addEventListener("click", () => {
    downloadFile(fileUrls.TDRS, "TD&RS MATERIAL.pdf");
  });
downloadTOMButton.addEventListener("click", () => {
    downloadFile(fileUrls.TOM, "THEORY OF MACHINE.pdf");
  });
downloadTOSButton.addEventListener("click", () => {
    downloadFile(fileUrls.TOS, "THEORY OF STRUCTURES.pdf");
  });
downloadWATERButton.addEventListener("click", () => {
    downloadFile(fileUrls.WATER, "Watershed Management.pdf");
  });
downloadAETBMButton.addEventListener("click", () => {
    downloadFile(fileUrls.AETBM, "AET&BM.pdf");
  });
downloadPVTSButton.addEventListener("click", () => {
    downloadFile(fileUrls.PVTS, "PVT&S.pdf");
  });
downloadDAMButton.addEventListener("click", () => {
    downloadFile(fileUrls.DAM, "DAM.pdf");
  });
downloadFPDMButton.addEventListener("click", () => {
    downloadFile(fileUrls.FPDM, "FPD&M.pdf");
  });
downloadAIBUButton.addEventListener("click", () => {
    downloadFile(fileUrls.AIBU, "AI&BU.pdf");
  });




  function downloadFile(fileUrl, fileName) {
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = fileName;
    link.click();
  }


  const homeLink = document.getElementById("home-link");
  const materialLink = document.getElementById("material-link");
  const quizLink = document.getElementById("quiz-link");
  const contactLink = document.getElementById("contact-link");

  // Add click event listeners to the navigation links
  homeLink.addEventListener("click", function() {
    // Show the home section and hide the other sections
    document.getElementById("home-details").style.display = "block";
    document.getElementById("materials-list").style.display = "none";
    document.getElementById("quiz-details").style.display = "none";
    document.getElementById("contact-details").style.display = "none";

    
  });

  materialLink.addEventListener("click", function() {
    // Show the material section and hide the other sections
    document.getElementById("home-details").style.display = "none";
    document.getElementById("materials-list").style.display = "block";
    document.getElementById("quiz-details").style.display = "none";
    document.getElementById("contact-details").style.display = "none";
  });

  quizLink.addEventListener("click", function() {
    // Show the quiz section and hide the other sections
    document.getElementById("home-details").style.display = "none";
    document.getElementById("materials-list").style.display = "none";
    document.getElementById("quiz-details").style.display = "block";
    document.getElementById("contact-details").style.display = "none";
  });

  contactLink.addEventListener("click", function() {
    // Show the contact section and hide the other sections
    document.getElementById("home-details").style.display = "none";
    document.getElementById("materials-list").style.display = "none";
    document.getElementById("quiz-details").style.display = "none";
    document.getElementById("contact-details").style.display = "block";
  });

  function searchMaterials() {
    const searchTerm = document.getElementById("search-bar").value.trim().toLowerCase();
    const materialRows = document.querySelectorAll('#materials-list table tbody tr');
  
    materialRows.forEach(row => {
      const materialName = row.querySelector("td:first-child").textContent.trim().toLowerCase();
      const downloadButton = row.querySelector("button");
  
      if (materialName.includes(searchTerm)) {
        row.style.display = "table-row";
        downloadButton.style.display = "block";
      } else {
        row.style.display = "none";
        downloadButton.style.display = "none";
      }
    });
  }

// JavaScript code
function showMaterials() {
  document.getElementById("materials-list").style.display = "block";
  document.getElementById("quiz-details").style.display = "none";
  document.getElementById("home-details").style.display = "none";
  document.getElementById("contact-details").style.display = "none";
}

function openQuiz() {
  document.getElementById("materials-list").style.display = "none";
  document.getElementById("quiz-details").style.display = "block";
  document.getElementById("home-details").style.display = "none";
  document.getElementById("contact-details").style.display = "none";
}

function showContactDetails() {
  document.getElementById("materials-list").style.display = "none";
  document.getElementById("quiz-details").style.display = "none";
  document.getElementById("home-details").style.display = "none";
  document.getElementById("contact-details").style.display = "block";
}

function showHome() {
  document.getElementById("materials-list").style.display = "none";
  document.getElementById("quiz-details").style.display = "none";
  document.getElementById("home-details").style.display = "block";
  document.getElementById("contact-details").style.display = "none";
}

window.onload = showHome;
