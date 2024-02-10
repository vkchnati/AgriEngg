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
//QuizSection
const AgriImplementsQuizData = [   
  {
      question: "What is the first operation in the production of crops?",
      a: "Tillage",
      b: "Sowing",
      c: "Harvesting",
      d: "Irrigation",
      correct: "a"
      },
      {
      question: "What is rotary tillage?",
      a: "Operations employing rotary action to cut, break and mix the soil",
      b: "Ploughing with a rotating blade",
      c: "Planting with a rotating mechanism",
      d: "Irrigation using rotary sprinklers",
      correct: "a"
      },
      {
      question: "What is left in between two adjacent strips of land after finishing ploughing?",
      a: "Dead furrow",
      b: "Ridge",
      c: "Trench",
      d: "Slope",
      correct: "a"
      },
      {
      question: "What is the weight range of the puddler including its beam?",
      a: "20-30 kg",
      b: "30-40 kg",
      c: "40-50 kg",
      d: "50-60 kg",
      correct: "b"
      },
      {
      question: "What is the curved part of the plough which lifts and turns the furrow slice?",
      a: "Mould board",
      b: "Share",
      c: "Beam",
      d: "Land wheel",
      correct: "a"
      },
      {
      question: "What is the wheel of the plough which runs on the unploughed land?",
      a: "Land wheel",
      b: "Beam",
      c: "Mould board",
      d: "Furrow",
      correct: "a"
      },
      {
      question: "What is a unit draft?",
      a: "Draft per unit area of land",
      b: "Draft per unit cross-sectional area of the furrow",
      c: "Draft per unit volume of soil",
      d: "Draft per unit weight of soil",
      correct: "b"
      },
      {
      question: "What is the mass of soil cut, lifted, and thrown to one side called?",
      a: "Furrow slice",
      b: "Plough bottom",
      c: "Beam",
      d: "Mould board",
      correct: "a"
      },
      {
      question: "What is the purpose of a green manure tamper implement?",
      a: "To trample and press the green manure crop",
      b: "To cut the green manure crop",
      c: "To water the green manure crop",
      d: "To harvest the green manure crop",
      correct: "a"
      },
      {
      question: "What is the device called that is used to cut the furrow slice vertically from the land ahead of the plough bottom?",
      a: "Coulter",
      b: "Mould board",
      c: "Beam",
      d: "Land wheel",
      correct: "a"
      },
      {
      question: "What is the perpendicular distance between the point of share and the lower position of the beam of the plough called?",
      a: "Throat clearance",
      b: "Draft",
      c: "Beam distance",
      d: "Plough height",
      correct: "a"
      },
      {
      question: "Where is the offset disc harrow most useful?",
      a: "Orchards and gardens",
      b: "Large fields",
      c: "Paddy fields",
      d: "Desert areas",
      correct: "a"
      },
      {
      question: "What is the size of the concave discs in tractor-drawn disc harrows?",
      a: "35-40 cm diameter",
      b: "20-25 cm diameter",
      c: "45-50 cm diameter",
      d: "10-15 cm diameter",
      correct: "a"
      },
      {
      question: "What is used to separate and keep two adjacent discs in position in a disc harrow?",
      a: "Spool",
      b: "Beam",
      c: "Mould board",
      d: "Coulter",
      correct: "a"
      },
      {
      question: "What is a rotary cultivator?",
      a: "Cultivator with tines or blades mounted on a power-driven horizontal shaft",
      b: "Cultivator with rotating wheels",
      c: "Cultivator powered by wind energy",
      d: "Cultivator with a rotating seed dispenser",
      correct: "a"
      },
      {
      question: "What is the main purpose of puddling?",
      a: "To reduce leaching of water",
      b: "To increase water evaporation",
      c: "To improve soil aeration",
      d: "To control pests",
      correct: "a"
      },
      {
      question: "What type of mechanism do most fertilizer drills in the country use to drop fertilizer in the field?",
      a: "Auger feed type",
      b: "Sprayer type",
      c: "Manual type",
      d: "Conveyor belt type",
      correct: "a"
      },
      {
      question: "What is a transplanter fitted with an engine called?",
      a: "Self-propelled transplanter",
      b: "Manual transplanter",
      c: "Tractor-driven transplanter",
      d: "Walk-behind transplanter",
      correct: "a"
      },
      {
      question: "In which crops is the transplanting method adopted for planting seedlings?",
      a: "Paddy and vegetables",
      b: "Wheat and barley",
      c: "Corn and soybeans",
      d: "Cotton and sugarcane",
      correct: "a"
      },
      {
      question: "What is the term for the art of placing seeds in the soil to obtain good germination?",
      a: "Sowing",
      b: "Harvesting",
      c: "Transplanting",
      d: "Tillage",
      correct: "a"
      },
      {
          question: "Which HTML tag is used for creating an unordered list?",
          a: "<ul>",
          b: "<ol>",
          c: "<li>",
          d: "<list>",
          correct: "a",
      },
      // Add more HTML questions here
  ];
  
  const cssQuizData = [
      {
          question: "What does CSS stand for?",
          a: "Central StyleSheets",
          b: "Cascading Style Sheets",
          c: "Cascading Simple Sheets",
          d: "Cute Styles and Shapes",
          correct: "b",
      },
      {
          question: "Which CSS property is used to change the text color of an element?",
          a: "font-color",
          b: "color",
          c: "text-color",
          d: "font-style",
          correct: "b",
      },
      // Add more CSS questions here
  ];

  const subjectSelect = document.getElementById('subject');
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const startQuizBtn = document.getElementById('start-quiz');
  const quizContainer = document.getElementById('quiz');
  const initialDetails = document.getElementById('initial-details');
  const answerEls = document.querySelectorAll('.answer');
  const questionEl = document.getElementById('question');
  const a_text = document.getElementById('a_text');
  const b_text = document.getElementById('b_text');
  const c_text = document.getElementById('c_text');
  const d_text = document.getElementById('d_text');
  const nextBtn = document.getElementById('next');
  const prevBtn = document.getElementById('prev');
  const submitBtn = document.getElementById('submit');
  const reloadBtn = document.getElementById('reload');
  const scoreEle = document.getElementById('score');
  const resultEle = document.getElementById('result');
  const finalMessage = document.getElementById('final-message');

  let currentQtn = 0;
    let score = 0;
    let percentage = 0;
    let submitted = false;
    let selectedQuizData = [];

// Function to start the quiz
  function startQuiz() {
    const selectedSubject = subjectSelect.value;
    const userName = nameInput.value.trim();
    const userEmail = emailInput.value.trim();

    if (userName === '' || userEmail === '') {
        alert('Please fill in your name and email.');
        return;
    }

    if (selectedSubject === 'AgriImplements') {
        selectedQuizData = AgriImplementsQuizData;
    } else if (selectedSubject === 'css') {
        selectedQuizData = cssQuizData;
    } else {
        alert('Please select a valid subject.');
        return;
    }

    initialDetails.style.display = 'none';
    quizContainer.style.display = 'block';

    loadQuestion();
}

function loadQuestion() {
    const currentQtnData = selectedQuizData[currentQtn];
    questionEl.innerText = currentQtnData.question;
    a_text.innerText = currentQtnData.a;
    b_text.innerText = currentQtnData.b;
    c_text.innerText = currentQtnData.c;
    d_text.innerText = currentQtnData.d;
    deselectAnswer();
}

  
  // Function to get the selected answer
  function getSelectedAnswer() {
      let answer;
      answerEls.forEach(answerEl => {
          if (answerEl.checked) {
              answer = answerEl.id;
          }
      });
      return answer;
  }
  
  // Function to clear answer selection
  function deselectAnswer() {
      answerEls.forEach(answerEl => {
          answerEl.checked = false;
      });
  }
  
  // Function to load the next question
  function loadNextQuestion() {
      const answer = getSelectedAnswer();
      if (!submitted) {
          if (!answer) {
              alert('Please select an answer.');
              return;
          }
          if (answer === selectedQuizData[currentQtn].correct) {
              score++;
          }
      }
      deselectAnswer();
      currentQtn++;
      if (currentQtn < selectedQuizData.length) {
          loadQuestion();
          prevBtn.disabled = false;
          prevBtn.classList.remove('disabled');
      } else {
          showResult();
      }
  }
  
  // Function to load the previous question
  function loadPreviousQuestion() {
      getSelectedAnswer();
      if (currentQtn > 0) {
          currentQtn--;
          if (currentQtn === 0) {
              prevBtn.disabled = true;
              prevBtn.classList.add('disabled');
          }
          loadQuestion();
      }
  }
  
  // Function to submit the quiz
  function submitQuiz() {
      if (getSelectedAnswer()) {
          submitted = true;
          showResult();
      } else {
          alert('Please select an answer.');
      }
  }
  
  // Function to show the result
  function showResult() {
      quizContainer.style.display = 'none';
      resultEle.style.display = 'block';
      scoreEle.innerHTML = `${score}/${selectedQuizData.length} questions answered correctly`;
      calculateAndShowFinalMessage(); // Call the function to calculate and show the final message
  }
  
  // Function to calculate the percentage and show the final message
  function calculateAndShowFinalMessage() {
      percentage = (score / selectedQuizData.length) * 100;
      let message = '';
  
      if (percentage > 75) {
          message = `Congratulations on achieving ${percentage.toFixed(2)}%! You're on the right track. Keep exploring the topics that spark your curiosity, and you'll keep achieving amazing things! ✨`;
      } else if (percentage >= 50) {
          message = `Hey there! Your score of ${percentage.toFixed(2)}% is a solid start! Take another crack at the quiz and see if you can climb the leaderboard. Remember, every attempt helps you learn and grow.`;
      } else {
          message = `Everyone makes mistakes! Your score of ${percentage.toFixed(2)}% is a chance to learn and grow. Take another shot at the quiz, focus on understanding the concepts, and you'll see progress in no time!`;
      }
  
      finalMessage.innerHTML = `<div class="score-box">${message}</div>`;
  }
  
  // Event listeners
  startQuizBtn.addEventListener('click', startQuiz);
  prevBtn.addEventListener('click', loadPreviousQuestion);
  nextBtn.addEventListener('click', loadNextQuestion);
  submitBtn.addEventListener('click', submitQuiz);
  reloadBtn.addEventListener('click', () => location.reload());
