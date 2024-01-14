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
  
	function showMaterials() {
    var homeDetails = document.getElementById('home-details');
    homeDetails.style.display = 'none';

    var materialsList = document.getElementById('materials-list');
    materialsList.style.display = 'block';

	var contactDetails = document.getElementById('contact-details');
      contactDetails.style.display = 'none';
  }

  function showHome() {
    var homeDetails = document.getElementById('home-details');
    homeDetails.style.display = 'block';

    var materialsList = document.getElementById('materials-list');
    materialsList.style.display = 'none';

	 var contactDetails = document.getElementById('contact-details');
      contactDetails.style.display = 'none';
  }
  // Open materials in new tabs
  const materialLinks = document.querySelectorAll('#materials-list li a');
  for (const link of materialLinks) {
    link.target = '_blank';
  }

  // Contact
function showContactDetails() {
      var contactDetails = document.getElementById('contact-details');
      contactDetails.style.display = 'block';

      var homeDetails = document.getElementById('home-details');
      homeDetails.style.display = 'none';

      var materialsList = document.getElementById('materials-list');
      materialsList.style.display = 'none';
    }
  // Activate the home link to trigger showHome()
  document.querySelector('nav a[href="#"]').addEventListener('click', showHome);

 function searchMaterials() {
  const searchTerm = document.getElementById("search-bar").value.toLowerCase();
  const materialList = document.querySelectorAll('#materials-list li');

  for (const item of materialList) {
    const materialName = item.querySelector("p").textContent.toLowerCase();
    const downloadButton = item.querySelector("button");

    if (materialName.includes(searchTerm)) {
      item.style.display = "block";
      downloadButton.style.display = "block";
    } else {
      item.style.display = "none";
      downloadButton.style.display = "none";
    }
  }
}
// Retrieve existing count from localStorage, or set to 0 if not found
let visitCount = localStorage.getItem('visitCount') || 0;

// Increment the count
visitCount++;

// Display the updated count
const visitorCountDisplay = document.getElementById('visitorCount');
visitorCountDisplay.textContent = visitCount;

// Store the updated count in localStorage
localStorage.setItem('visitCount', visitCount);

