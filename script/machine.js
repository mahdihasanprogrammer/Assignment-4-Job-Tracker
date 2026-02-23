
// Change totalCount , interviewCount, rejectedCount in display;
function getTotalOrInterviewCountOrRejectedCount(){
    totalCount.innerText= allCardSection.children.length;
    interviewCount.innerText = interviewList.length;
    rejectedCount.innerText = rejectedList.length;
}   



// step : 1 toggleStyle function;

function toggleStyle(id){
    const allFilterBtn = document.getElementById('all-filter-btn');
    const interviewFilterBtn = document.getElementById('interview-filter-btn');
    const rejectedFilterBtn = document.getElementById('rejected-filter-btn');


    // remove active color;
    allFilterBtn.classList.remove('bg-blue-500','text-base-100');
    interviewFilterBtn.classList.remove('bg-blue-500','text-base-100');
    rejectedFilterBtn.classList.remove('bg-blue-500','text-base-100');

    // set default color;
    allFilterBtn.classList.add('bg-base-100','text-neutral/70');
    interviewFilterBtn.classList.add('bg-base-100', 'text-neutral/70');
    rejectedFilterBtn.classList.add('bg-base-100', 'text-neutral/70');

    // remove default color and set active color;
    const selected = document.getElementById(id);

    // set current status;
    currentStatus = id;

    // remove default color and active blue color;
    selected.classList.remove('bg-base-100', 'text-neutral/70');
    selected.classList.add('bg-blue-500', 'text-base-100');


    // hidden and show;
    if(id===('interview-filter-btn')){
        allCardSection.classList.add('hidden');
        filteredSection.classList.remove('hidden');
        renderInterview()
    }
    else if(id===('all-filter-btn')){
        filteredSection.classList.add('hidden');
        allCardSection.classList.remove('hidden')
    }
    else if(id===('rejected-filter-btn')){
        allCardSection.classList.add('hidden');
        filteredSection.classList.remove('hidden');
        renderRejected()
    }
}