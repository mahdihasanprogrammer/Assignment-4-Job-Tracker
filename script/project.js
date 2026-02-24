
//1. create empty array for count interview and rejected buttons in display;
let interviewList =[];
let rejectedList = [];
let currentStatus = 'all';



//2. get totalCount , interviewCount, rejectedCount in display;
const totalCount = document.getElementById('totalCount');
const interviewCount = document.getElementById('interviewCount');
const rejectedCount = document.getElementById('rejectedCount');


// 3.Change totalCount , interviewCount, rejectedCount in display
const allCardSection = document.getElementById('all-card-section');
const mainContainer = document.querySelector('main');

getTotalOrInterviewCountOrRejectedCount();


// 4. set addEventListener in a main section and handle all child element button using delegation;

mainContainer.addEventListener('click',function(event){
   
    if(event.target.classList.contains('interview-btn')){
        const parentNode = event.target.parentNode.parentNode;

        const companyName = parentNode.querySelector('.company-name').innerText;
        const jobTitle = parentNode.querySelector('.job-title').innerText; ;
        const jobLocationAndSalary = parentNode.querySelector('.job-location-and-salary').innerText;;
        const jobStatus = parentNode.querySelector('.job-status').innerText;;
        const notes = parentNode.querySelector('.notes').innerText;

        // change job-status innerText by INTERVIEW;
        parentNode.querySelector('.job-status').innerText ='INTERVIEW'

        // create a object ;
        const cardInfo= {
            companyName,
            jobTitle,
            jobLocationAndSalary,
            jobStatus:'INTERVIEW',
            notes,
        }
        

        // check koro interviewList array er modde ei object ace ki na ;
        const checkCard = interviewList.find(item => item.companyName === cardInfo.companyName);

        // jodi na thake tahole ei object ke push koro interviewList array er modde;
        if(!checkCard){
            interviewList.push(cardInfo)
        }

        rejectedList = rejectedList.filter(item => item.companyName !== cardInfo.companyName)
        
        if(currentStatus ==='rejected-filter-btn'){
            renderRejected()
        }
        
        // updated interviewCount;
        getTotalOrInterviewCountOrRejectedCount();
         
    }

    // rejected btn listener;
    else if(event.target.classList.contains('rejected-btn')){
         const parentNode = event.target.parentNode.parentNode;

        const companyName = parentNode.querySelector('.company-name').innerText;
        const jobTitle = parentNode.querySelector('.job-title').innerText; ;
        const jobLocationAndSalary = parentNode.querySelector('.job-location-and-salary').innerText;;
        const jobStatus = parentNode.querySelector('.job-status').innerText;;
        const notes = parentNode.querySelector('.notes').innerText;

        // change job-status innerText by INTERVIEW;
        parentNode.querySelector('.job-status').innerText ='REJECTED'

        // create a object ;
        const cardInfo= {
            companyName,
            jobTitle,
            jobLocationAndSalary,
            jobStatus:'REJECTED',
            notes,
        }
        

        // check koro interviewList array er modde ei object ace ki na ;
        const checkCard = rejectedList.find(item => item.companyName === cardInfo.companyName);

        // jodi na thake tahole ei object ke push koro interviewList array er modde;
        if(!checkCard){
            rejectedList.push(cardInfo)
        }

        interviewList =interviewList.filter(item => item.companyName !== cardInfo.companyName)

        if(currentStatus =='interview-filter-btn'){
            renderInterview()
        }
        
        // updated interviewCount;
        getTotalOrInterviewCountOrRejectedCount();

        // call  renderInterview() function. array theke item gula newar jonno;
         
        
    }

    //   else  if(event.target.classList.contains('delete-btn')){
    //   const parentNodeRemove= event.target.parentNode.parentNode.parentNode.parentNode.remove();
    //     if(interviewList.length===0){

    //     }
    // }
  
})



// 5. step 5: created new card and set in rejected btn or interview btn;


// get filtered section and create new card;
const filteredSection = document.getElementById('filtered-section');

// function for interviewList;
function renderInterview(){
    // empty filtered section;
    filteredSection.innerHTML=''; 

    // add no-job card in filteredSection with condition;
    if(interviewList.length === 0){
        filteredSection.innerHTML = `
        <div class="bg-base-100 rounded-lg text-center py-16 sm:py-22">
            <img class="mx-auto mb-5" src="./image/no_job_img.png" alt="no job img">
            <h2 class="text-[#002C5C] text-2xl font-semibold mb-1">No jobs available</h2>
            <p class="text-[#64748B]">Check back soon for new job opportunities</p>
        </div>
        `;
        return;
    }

    // start for of loop, interviewList array er moddo theke prottek item newar jonno;
    for(const interviewItem of interviewList){
        
        const newDiv =document.createElement('div');
        newDiv.className='p-6 bg-base-100 rounded-lg shadow space-y-5 border-l-6 border-green-600';

        newDiv.innerHTML=`
          <!-- part 1 -->
                     <div>
                       <div class="flex justify-between items-center">
                         <h3 class="company-name text-lg font-semibold">${interviewItem.companyName}</h3>

                         <button class="size-8 cursor-pointer rounded-full border-2 border-base-300 bg-base-100 text-neutral/70 box-content">
                             <i class="delete-btn  fa-regular fa-trash-can text-base text-[#64748B]"></i>
                        </button>

                       </div>

                        <p class="job-title leading-5 text-neutral/70">${interviewItem.jobTitle}</p>
                     </div>

                     <!-- part -2 -->
                     <p class="job-location-and-salary leading-5 text-neutral/70 text-sm">
                        ${interviewItem.jobLocationAndSalary}
                     </p>

                     <!-- part3 -->
                     <div>
                        <button class="job-status btn border-2 border-green-500 bg-green-600 text-base-100 mb-2">${interviewItem.jobStatus}</button>
                        <p class="notes text-sm text-neutral/90 leading-5">${interviewItem.notes}</p>
                     </div>

                     <!-- part-4 buttons -->
                     <div class="flex flex-wrap gap-3">
                        <button class="interview-btn btn border-2 border-green-500 hover:bg-green-600 hover:text-base-100 bg-transparent text-green-500">INTERVIEW</button>
                        <button class="rejected-btn btn border-2 border-red-500 hover:bg-red-600 hover:text-base-100 bg-transparent text-red-500">REJECTED</button>
                     </div>
        `
        filteredSection.appendChild(newDiv)
    }
}


// function for rejectedList;
function renderRejected(){

    // empty filtered section;
    filteredSection.innerHTML='';

    // add no-job card in filteredSection with condition;

       if(rejectedList.length === 0){
        filteredSection.innerHTML = `
        <div class="bg-base-100 rounded-lg text-center py-16 sm:py-22">
            <img class="mx-auto mb-5" src="./image/no_job_img.png" alt="no job img">
            <h2 class="text-[#002C5C] text-2xl font-semibold mb-1">No jobs available</h2>
            <p class="text-[#64748B]">Check back soon for new job opportunities</p>
        </div>
        `;
        return;
    }
    // start for of loop, interviewList array er moddo theke prottek item newar jonno;
    for(const rejectItem of rejectedList){
        
        const newDiv =document.createElement('div');
        newDiv.className='p-6 bg-base-100 rounded-lg shadow space-y-5 border-r-6 border-red-600 ';

        newDiv.innerHTML=`
          <!-- part 1 -->
                     <div>
                       <div class="flex justify-between items-center">
                         <h3 class="company-name text-lg font-semibold">${rejectItem.companyName}</h3>

                         <button class="size-8 cursor-pointer rounded-full border-2 border-base-300 bg-base-100 text-neutral/70 box-content">
                             <i class="delete-btn fa-regular fa-trash-can text-base text-[#64748B]"></i>
                        </button>

                       </div>

                        <p class="job-title leading-5 text-neutral/70">${rejectItem.jobTitle}</p>
                     </div>

                     <!-- part -2 -->
                     <p class="job-location-and-salary leading-5 text-neutral/70 text-sm">
                        ${rejectItem.jobLocationAndSalary}
                     </p>

                     <!-- part3 -->
                     <div>
                        <button class="job-status btn border-2 border-red-500 bg-red-600 text-base-100 mb-2">${rejectItem.jobStatus}</button>
                        <p class="notes text-sm text-neutral/90 leading-5">${rejectItem.notes}</p>
                     </div>

                     <!-- part-4 buttons -->
                     <div class="flex flex-wrap gap-3">
                        <button class="interview-btn btn border-2 border-green-500 hover:bg-green-600 hover:text-base-100 bg-transparent text-green-500">INTERVIEW</button>
                        <button class="rejected-btn btn border-2 border-red-500 hover:bg-red-600 hover:text-base-100 bg-transparent text-red-500">REJECTED</button>
                     </div>
        `
        filteredSection.appendChild(newDiv)
    }
}
