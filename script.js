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

const quizData = {
  AgriImplements: [
      { question: "The first operation in the production of crops is?", answers: ["tillage", "sowing", "harvesting", "irrigation"], correct: "tillage" },
      { question: "What is rotary tillage?", answers: ["operations employing rotary action to cut, break and mix the soil", "ploughing with a rotating blade", "planting with a rotating mechanism", "irrigation using rotary sprinklers"], correct: "operations employing rotary action to cut, break and mix the soil" },
      { question: "What is left in between two adjacent strips of land after finishing ploughing?", answers: ["dead furrow", "ridge", "trench", "slope"], correct: "dead furrow" },
      { question: "What is the weight range of the puddler including its beam?", answers: ["20-30 kg", "30-40 kg", "40-50 kg", "50-60 kg"], correct: "30-40 kg" },
      { question: "What is the curved part of the plough which lifts and turns the furrow slice?", answers: ["mould board", "share", "beam", "land wheel"], correct: "mould board" },
      { question: "What is the wheel of the plough which runs on the unploughed land?", answers: ["land wheel", "beam", "mould board", "furrow"], correct: "land wheel" },
      { question: "What is a unit draft?", answers: ["draft per unit area of land", "draft per unit cross-sectional area of the furrow", "draft per unit volume of soil", "draft per unit weight of soil"], correct: "draft per unit cross-sectional area of the furrow" },
      { question: "What is the mass of soil cut, lifted, and thrown to one side called?", answers: ["furrow slice", "plough bottom", "beam", "mould board"], correct: "furrow slice" },
      { question: "What is the purpose of a green manure tamper implement?", answers: ["to trample and press the green manure crop", "to cut the green manure crop", "to water the green manure crop", "to harvest the green manure crop"], correct: "to trample and press the green manure crop" },
      { question: "What is the device called that is used to cut the furrow slice vertically from the land ahead of the plough bottom?", answers: ["coulter", "mould board", "beam", "land wheel"], correct: "coulter" },
      { question: "What is the perpendicular distance between the point of share and the lower position of the beam of the plough called?", answers: ["throat clearance", "draft", "beam distance", "plough height"], correct: "throat clearance" },
      { question: "Where is the offset disc harrow most useful?", answers: ["orchards and gardens", "large fields", "paddy fields", "desert areas"], correct: "orchards and gardens" },
      { question: "What is the size of the concave discs in tractor-drawn disc harrows?", answers: ["35-40 cm diameter", "20-25 cm diameter", "45-50 cm diameter", "10-15 cm diameter"], correct: "35-40 cm diameter" },
      { question: "What is used to separate and keep two adjacent discs in position in a disc harrow?", answers: ["spool", "beam", "mould board", "coulter"], correct: "spool" },
      { question: "What is a rotary cultivator?", answers: ["cultivator with tines or blades mounted on a power-driven horizontal shaft", "cultivator with rotating wheels", "cultivator powered by wind energy", "cultivator with a rotating seed dispenser"], correct: "cultivator with tines or blades mounted on a power-driven horizontal shaft" },
      { question: "What is the main purpose of puddling?", answers: ["to reduce leaching of water", "to increase water evaporation", "to improve soil aeration", "to control pests"], correct: "to reduce leaching of water" },
      { question: "What type of mechanism do most fertilizer drills in the country use to drop fertilizer in the field?", answers: ["auger feed type", "sprayer type", "manual type", "conveyor belt type"], correct: "auger feed type" },
      { question: "What is a transplanter fitted with an engine called?", answers: ["self-propelled transplanter", "manual transplanter", "tractor-driven transplanter", "walk-behind transplanter"], correct: "self-propelled transplanter" },
      { question: "In which crops is the transplanting method adopted for planting seedlings?", answers: ["paddy and vegetables", "wheat and barley", "corn and soybeans", "cotton and sugarcane"], correct: "paddy and vegetables" },
      { question: "What is the term for the art of placing seeds in the soil to obtain good germination?", answers: ["sowing", "harvesting", "transplanting", "tillage"], correct: "sowing" }
  ],
  FarmPowerAndTractorSystems: [
      { question: "Marginal farmers having land ?", answers: ["less than 1 ha", " greater than 2 ha", " less than 5 ha", " greater than 10 ha"], correct: "less than 1 ha" },
      { question: "Small farmers having land ?", answers: ["1-7 ha ", "2-4 ha", "1-2 ha", "1-5 ha"], correct: "1-2 ha" },
      { question: "Marginal farmers having land?", answers: ["less than 1 ha", "greater than 2 ha", "less than 5 ha", "greater than 10 ha"], correct: "less than 1 ha" },
      { question: "Small farmers having land?", answers: ["1-7 ha", "2-4 ha", "1-2 ha", "1-5 ha"], correct: "2-4 ha" },
      { question: "Medium farmers having land?", answers: ["2-4 ha", "4-10 ha", "1-5 ha", "greater than 10 ha"], correct: "4-10 ha" },
      { question: "Large farmers having land?", answers: ["less than 1 ha", "greater than 2 ha", "greater than 10 ha", "5-10 ha"], correct: "greater than 10 ha" },
      { question: "How much land can an average man develop?", answers: ["0.01 ha", "0.1 ha", "1 ha", "0.5 ha"], correct: "0.1 ha" },
      { question: "How many crop cattle does India have?", answers: ["22.68", "20.68", "25.68", "30.68"], correct: "22.68" },
      { question: "How much power is developed by an average pair of bullocks?", answers: ["1 hp", "2 hp", "0.5 hp", "0.1 hp"], correct: "1 hp" },
      { question: "What is the average force a bullock can exert?", answers: ["1/5th of its body weight", "1/10th of its body weight", "1/3rd of its body weight", "1/8th of its body weight"], correct: "1/10th of its body weight" },
      { question: "What is the efficiency of a diesel engine?", answers: ["32-38%", "25-32%", "20-25%", "38-40%"], correct: "32-38%" },
      { question: "What is the efficiency of a petrol engine?", answers: ["32-38%", "25-32%", "20-25%", "38-40%"], correct: "25-32%" },
      { question: "Where can wind mills be used for lifting water?", answers: ["where wind velocity is less than 32 kmph", "where wind velocity is more than 32 kmph", "in urban areas", "in coastal areas"], correct: "where wind velocity is more than 32 kmph" },
      { question: "What is the average capacity of a wind mill?", answers: ["1 hp", "0.5 hp", "2 hp", "0.1 hp"], correct: "0.5 hp" },
      { question: "How many wind mills are there in India?", answers: ["2000", "3000", "4000", "2540"], correct: "2540" },
      { question: "Examples of renewable energy sources are?", answers: ["nuclear energy", "solar energy", "coal energy", "hydro energy"], correct: "solar energy, wind, biomass, thermal energy" },
      { question: "How many watts is equal to 1 hp?", answers: ["500 watts", "746 watts", "1000 watts", "2000 watts"], correct: "746 watts" }
  ]
};

const subjectSelect = document.getElementById('subjectSelect');
const quizContainer = document.getElementById('quiz');
const finalMessage = document.getElementById('final');
const startButton = document.getElementById('startButton');
const submitButton = document.getElementById('submitButton');
const startAgainButton = document.getElementById('startAgainButton');

function generateQuiz() {
  const selectedSubject = subjectSelect.value;
  const questions = quizData[selectedSubject];
  let quizHTML = '';
  
  questions.forEach((question, index) => {
      quizHTML += `<div class="question">
          <h3>Question ${index + 1}:</h3>
          <p>${question.question}</p>
          <ul>`;
      
      question.answers.forEach((answer, ansIndex) => {
          quizHTML += `<li><label><input type="radio" name="question${index}" value="${answer}"> ${answer}</label></li>`;
      });
      
      quizHTML += `</ul></div>`;
  });
  
  quizContainer.innerHTML = quizHTML;
}

function showStartQuizButton() {
  startButton.style.display = 'block';
  submitButton.style.display = 'none';
  finalMessage.innerHTML = '';
  quizContainer.innerHTML = '';
}

function startQuiz() {
  generateQuiz();
  startButton.style.display = 'none';
  submitButton.style.display = 'block';
  subjectSelect.style.display = 'none'; // Hide subject select options
}

function checkAnswers() {
  const selectedSubject = subjectSelect.value;
  const questions = quizData[selectedSubject];
  let score = 0;
  let quizHTML = '';

  questions.forEach((question, index) => {
      const selectedAnswer = document.querySelector(`input[name="question${index}"]:checked`);
      
      if (selectedAnswer) {
          if (selectedAnswer.value === question.correct) {
              score++;
              quizHTML += `<div class="question correct">`;
          } else {
              quizHTML += `<div class="question incorrect">`;
          }
      } else {
          quizHTML += `<div class="question">`;
      }
      
      quizHTML += `<h3>Question ${index + 1}:</h3>
          <p>${question.question}</p>
          <p>Your Answer: ${selectedAnswer ? selectedAnswer.value : "No answer provided"}</p>
          <p>Correct Answer: ${question.correct}</p>
      </div>`;
  });

  const percentage = (score / questions.length) * 100;

  let message = '';
  if (percentage > 75) {
      message = `Congratulations on achieving ${score}/${questions.length} (${percentage.toFixed(2)}%)! You're on the right track. Keep exploring the topics that spark your curiosity, and you'll keep achieving amazing things! ✨`;
  } else if (percentage >= 50) {
      message = `Hey there! Your score of ${score}/${questions.length} (${percentage.toFixed(2)}%) is a solid start! Take another crack at the quiz and see if you can climb the leaderboard. Remember, every attempt helps you learn and grow.`;
  } else {
      message = `Everyone makes mistakes! Your score of ${score}/${questions.length} (${percentage.toFixed(2)}%) is a chance to learn and grow. Take another shot at the quiz, focus on understanding the concepts, and you'll see progress in no time!`;
  }

  finalMessage.innerHTML = `<div class="score-box">${message}</div>`;
  quizContainer.innerHTML = quizHTML;
  startAgainButton.style.display = 'block'; // Show "Start Quiz Again" button
}

function startAgain() {
  showStartQuizButton(); // Show subject select options and hide other elements
  startAgainButton.style.display = 'none'; // Hide "Start Quiz Again" button
  subjectSelect.style.display = 'block'; // Show subject select options
}
