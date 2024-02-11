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
      GWH: "C:\\Users\\hp\\Desktop\\AGR\\GWH.pdf",
	  ES: "C:\\Users\\hp\\Desktop\\AGR\\Electrical Systems.pdf",
      MEFA: "C:\\Users\\hp\\Desktop\\AGR\\MEFA  ALL.pdf",
	  FMOH: "C:\\Users\\hp\\Desktop\\AGR\\FMOH.pdf",
	  APE:"C:\\Users\\hp\\Desktop\\AGR\\Agricultural Process Engineering.pdf",
	  DFE: "C:\\Users\\hp\\Desktop\\AGR\\DAIRY AND FOOD ENGINEERING.pdf",
	  DSWCFS: "C:\\Users\\hp\\Desktop\\AGR\\DSWCFS.pdf",
	  EPBM: "C:\\Users\\hp\\Desktop\\AGR\\EPBM.pdf",
	  FMTS: "C:\\Users\\hp\\Desktop\\AGR\\Farm Power and Tractor Systems.pdf",
	  FMEI: "C:\\Users\\hp\\Desktop\\AGR\\FME-I.pdf",
		  FMEII: "C:\\Users\\hp\\Desktop\\AGR\\FME-II.pdf",
	  FOODPACK: "C:\\Users\\hp\\Desktop\\AGR\\Food Packaging.pdf",
	  FQC: "C:\\Users\\hp\\Desktop\\AGR\\Food Quality & Control.pdf",
	  GIS: "C:\\Users\\hp\\Desktop\\AGR\\GIS & REMOTE SENSING.pdf",
	  GHT: "C:\\Users\\hp\\Desktop\\AGR\\GREEN HOUSE TECHNOLOGY.pdf",
	  HMT: "C:\\Users\\hp\\Desktop\\AGR\\HEAT AND MASS TRANSFER.pdf",
	  HES: "C:\\Users\\hp\\Desktop\\AGR\\HES.pdf",
	  IDE: "C:\\Users\\hp\\Desktop\\AGR\\Irrigation&Drainage Engineering.pdf",
	  MIII: "C:\\Users\\hp\\Desktop\\AGR\\Mathematics-III.pdf",
	  MI: "C:\\Users\\hp\\Desktop\\AGR\\MICRO IRRIGATION.pdf",
	  MMI: "C:\\Users\\hp\\Desktop\\AGR\\MMI.pdf",
	  OR: "C:\\Users\\hp\\Desktop\\AGR\\OPERATION RESEARCH.pdf",
	  PHE: "C:\\Users\\hp\\Desktop\\AGR\\PHE&HP.pdf",
	  PSM: "C:\\Users\\hp\\Desktop\\AGR\\PSM.pdf",
	  SWH: "C:\\Users\\hp\\Desktop\\AGR\\SURFACE WATER HYDROLOGY.pdf",
	  SURVEY: "C:\\Users\\hp\\Desktop\\AGR\\SURVEYING.pdf",
	  SWCE: "C:\\Users\\hp\\Desktop\\AGR\\SWCE MATERIAL.pdf",
	  TDRS: "C:\\Users\\hp\\Desktop\\AGR\\TD&RS MATERIAL.pdf",
	  TOM: "C:\\Users\\hp\\Desktop\\AGR\\THEORY OF MACHINES.pdf",
	  TOS: "C:\\Users\\hp\\Desktop\\AGR\\THEORY OF STRUCTURES.pdf",
	  WATER: "C:\\Users\\hp\\Desktop\\AGR\\Watershed Management.pdf",
	  AETBM: "C:\\Users\\hp\\Desktop\\AGR\\AET&BM.pdf",
	  FPDM: "C:\\Users\\hp\\Desktop\\AGR\\FPD&M.pdf",
	  AIBU: "C:\\Users\\hp\\Desktop\\AGR\\AI&BU.pdf",
	  PVTS: "C:\\Users\\hp\\Desktop\\AGR\\PVT&S.pdf",
	  DAM: "C:\\Users\\hp\\Desktop\\AGR\\DAM.pdf"
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
 
// Function to show materials section
function showMaterials() {
    document.getElementById('home-details').style.display = 'none';
    document.getElementById('materials-list').style.display = 'block';
    document.getElementById('contact-details').style.display = 'none';
    document.getElementById('quiz-details').style.display = 'none';
}

// Function to show home section
function showHome() {
    document.getElementById('home-details').style.display = 'block';
    document.getElementById('materials-list').style.display = 'none';
    document.getElementById('contact-details').style.display = 'none';
    document.getElementById('quiz-details').style.display = 'none';
}

// Function to open quiz section
function openQuiz() {
    document.getElementById('quiz-details').style.display = 'block';
    document.getElementById('home-details').style.display = 'none';
    document.getElementById('materials-list').style.display = 'none';
    document.getElementById('contact-details').style.display = 'none';
}

// Function to show contact details
function showContactDetails() {
    document.getElementById('contact-details').style.display = 'block';
    document.getElementById('home-details').style.display = 'none';
    document.getElementById('materials-list').style.display = 'none';
    document.getElementById('quiz-details').style.display = 'none';
}

// Activate the home link to trigger showHome()
document.querySelector('nav a[href="#"]').addEventListener('click', showHome);

// Activate the contact link to trigger showContactDetails()
document.querySelector('nav a[href="#c"]').addEventListener('click', showContactDetails);


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
