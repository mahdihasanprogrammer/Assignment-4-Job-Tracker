
question : 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Ans:
    ১.getElementById এমন একটি method যার সাহায্যে DOM tree থেকে একটি নির্দিষ্ট এলিমেন্টকে ধরা যায়। পুরো পেজে একই id শুধু একবারই দেওয়া যায়, আর id ইউনিক হওয়ায় এটি ফাস্টার কাজ করে।

    ২.getElementsByClassName এমন একটি মেথড যার সাহায্যে DOM tree থেকে একই ক্লাসের অনেকগুলো এলিমেন্টকে ধরা যায়। এটা HTMLCollection রিটার্ন করে।


    ৩.querySelector এমন একটি method যার সাহায্যে DOM tree থেকে CSS সিলেক্টর দিয়ে প্রথম matchig এলিমেন্টকে রিটার্ন করা হয়।

    ৪. querySelectorAll এমন একটি method যার সাহায্যে DOM tree থেকে CSS সিলেক্টর দিয়ে  সব matchig এলিমেন্টকে রিটার্ন করা হয়। এটি NodeList রিটার্ন করে।




question : 2.  How do you create and insert a new element into the DOM?
Ans:
   Element create করার জন্য ৩টা step:
       1. Parent-কে ধরা, যেখানে create করা element-কে রাখব।
       2. document.createElement(), এই method use করে new element create করা।
       3.appendChild(), এই method use করে child-কে parent-এর মধ্যে insert করা।

    


question: 3.  What is Event Bubbling? And how does it work?
Answer:
   event bubbling হলো DOM এর একটি মেকানিজম, যেখানে কোন একটি  element এ event ট্রিগার হলে, সেই ইভেন্ট DOM tree এর মাধ্যমে উপরের দিকে bubble করে।
    
    যেমন: কোন একটি button-এ click করা হলে সেখানে যদি event handler থাকে, তখন ওই button-এ event টা trigger হবে, এরপর ওই button-এর parent-এ যদি event handler থাকে সেটাও trigger হবে, এরপর তার parent-এ যদি event handler থাকে সেটাও trigger হবে, এভাবে উপরের দিকে উঠতে থাকবে document-পর্যন্ত।





question: 4. What is Event Delegation in JavaScript? Why is it useful?
Answer:
    Event delegation হলো, child Element এ আলাদা আলাদা event listener না দিয়ে parent element এ একটি event listener দেওয়া হয়, এবং event bubbling ব্যবহার করে child element এর event handle করা হয়।

Event delegation ব্যবহার করলে যে সুবিধাসমূহ পাওয়া যায়:
    ১.Browser memory কম ব্যবহার হয়।
    ২. Dynamic element হ্যান্ডেল করা সহজ হয়।
    ৩. কম code লেখা যায়।




question : 5. What is the difference between preventDefault() and stopPropagation() methods?
Answer:
   1. preventDefault(), এই method টা browser এর default behavior বন্ধ করে।
   2. stopPropagation(),  এই method ইভেন্টকে উপরের parent element-এ পাঠানো অর্থাৎ bubble করা বন্ধ করে দেয়।
   

