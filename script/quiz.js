// elements
var btnSubmit = document.getElementById('btn-submit');
var quizPanel = document.querySelector('.quiz-panel');
var quizResult = document.querySelector('.quiz-result');

// variables
var arrCode = [];
var score = 0;
let shuffle = [];

// events
btnSubmit.addEventListener('click', ()=>{ SubmitQuiz(); });
document.getElementById('btn-close').addEventListener('click', ()=>{ closePanel(); });
document.getElementById('takeQuiz').addEventListener('click', ()=>{ TakeQuiz(moduleCode); });


/* Take Quiz : (1reference)
1. set condition based on parameter code
2. load quiz by sending array as parameter
3. display quiz panel
4. scroll main window to top
5. hide the class body overflow 
*/
function TakeQuiz(code){
    switch (code){
        case 'ias_mod4': LoadQuiz(ias_mod4); break;
        case 'ias_mod5': LoadQuiz(ias_mod5); break;
        case 'ias_mod6': LoadQuiz(ias_mod6); break;
        case 'ias_mod7': LoadQuiz(ias_mod7); break;

        case 'cs6_mod4.2': LoadQuiz(cs6_mod4_2); break;
        case 'cs6_mod5': LoadQuiz(cs6_mod5); break;
        case 'cs6_mod6': LoadQuiz(cs6_mod6); break;
        case 'cs6_mod7': LoadQuiz(cs6_mod7); break;
        
        case 'se1_mod1': LoadQuiz(se1_mod1); break;
        case 'se1_mod2': LoadQuiz(se1_mod2); break;
        
        case 'ic1_mod1': LoadQuiz(ic1_mod1); break;
        case 'ic1_mod2': LoadQuiz(ic1_mod2); break;
        
        case 'pe1_mod2_1': LoadQuiz(pe1_mod2_1); break;
        case 'pe1_mod2_2': LoadQuiz(pe1_mod2_2); break;
        case 'pe1_mod2_3': LoadQuiz(pe1_mod2_3); break;
        
        case 'sipp_mod1': LoadQuiz(sipp_mod1); break;
        case 'sipp_mod2': LoadQuiz(sipp_mod2); break;
        case 'sipp_mod3': LoadQuiz(sipp_mod3); break;
        case 'sipp_mod4': LoadQuiz(sipp_mod4); break;
        case 'sipp_mod5': LoadQuiz(sipp_mod5); break;
        case 'sipp_mod6': LoadQuiz(sipp_mod6); break;
        case 'sipp_mod7': LoadQuiz(sipp_mod7); break;
        case 'sipp_mod8': LoadQuiz(sipp_mod8); break;
    }
    quizPanel.style.display = "block";
    window.scrollTo({ top: 0, behavior:"smooth" });
    document.querySelector('.body').style.overflow = "hidden";
}

/* Load Quiz Content : (1reference)
1. set shuffle value from shuffleNumber function
2. set arrCode as arr from parameter (global porpuse)
3. repeat til not reach arr max limit
4. set index value from shuffle number array
5. Create new question by calling the function
*/
function LoadQuiz(arr){
    shuffle = ShuffleNumber(arr.length, 1);
    arrCode = arr;
    for (let i=0; i<arr.length; i++){
        let index = shuffle[i];
        CreateNewQuestion(arr[index].Q, arr[index].A);
    }
    SetInputColor(isDark); //reference from mode.js
}

/* Shuffle In-between Number : (1reference)
------------------------------
1. create empty container for shuffle_number (con)
2. repeat til container will not reach maximum limit
3. get random_number from the ranges of (max-min)
4. when container is empty, then insert random_number into it
5. compare if not similar the container[value] into random_number, then insert random_number into it
6. when container is full, return the container
*/
function ShuffleNumber(max, min){
    let con = [];
    while (con.length < max){
        let random = Math.floor(Math.random() * (max - min +1));
        if (con.length == 0) con.push(random);
        else { if (!HasSimilarity(con, random)) con.push(random); }
    }
    return con;
}

/* Define Similarity : (1reference)
1. repeat til end of arr(array)
2. compare arr[value] into num, return true if theres any similarity
3. return false 
*/
function HasSimilarity(arr, num){
    for (let i=0; i<arr.length; i++){
        if (arr[i] == num) return true;
    }
    return false;
}

/* Create Questions & Answers : (1reference)
1. create an element (li, input, p, div)
2. set element class names and other properties
3. append all element inside li (list item)
4. append li element inside ol (order list)
*/
function CreateNewQuestion(question, answer){

    // create new li -> questions container
    var li = document.createElement('li');
    li.classList.add('quiz-item');

    // create new input -> answer input
    var input = document.createElement('input');
    input.setAttribute('type', 'text');
    input.classList.add('input-answer');
    
    // create new p -> questions
    var p = document.createElement('p');
    p.classList.add('question');
    p.textContent = question;

    // create new div -> answer
    var div = document.createElement('div');
    div.classList.add('answer');
    div.textContent = answer;

    // add all elements at li
    li.appendChild(input);
    li.appendChild(p);
    li.appendChild(div);

    // add into ol -> list container
    document.querySelector('.quiz-questions-list').appendChild(li);
}

/* Close Quiz : (1reference) 
------------------------------
1. scroll to top of quiz panel
2. reset score to 0
3. hide quiz result
4. hide quiz panel
5. display again the scroll/overflow of body/module
6. enable submit button
7. repeat til the end of answer_input
8. remove the answer input * 
*/
function closePanel(){
    quizPanel.scrollTo({ top: 0 });
    score = 0;
    quizResult.style.display = "none";
    quizPanel.style.display = "none";
    document.querySelector('.body').style.overflow = "auto";
    btnSubmit.disabled = false;
    
    var ol = document.querySelector('.quiz-questions-list');
    while (ol.firstChild) {
        ol.removeChild(ol.firstChild);
    }
}

/* Submit Quiz : (1reference) 
------------------------------
1. check the result of quiz with array_code
2. display quiz result (flex/none)
3. scroll quiz panel to top
4. disable submit button  
*/
function SubmitQuiz(){
    CheckQuiz(arrCode);
    quizResult.style.display = "flex";
    quizPanel.scrollTo({ top: 0, behavior:"smooth" });
    btnSubmit.disabled = true;
}

/* Check Quiz : (1reference)
------------------------------
1. repeat til end of array(arr)
2. set index as shuffled number from shuffle[array]
3. compare arr[value] into answer_input[value] both converted into lowercase
4. increment score by 1
5. if equal value, set answer bg_color into green
6. if false, set answer bg_color into red
7. display correct answer *
8. disable answer input *
9. set and get passing score : Ceil(size/2)
10. set quiz result messages (passed/failed) 
11. set quiz result bg_color (green/red)
*/
function CheckQuiz(arr){
    var inputAnswer = document.querySelectorAll('input[type=text]');
    var answers = document.querySelectorAll('.answer');

    for (let i=0; i<arr.length; i++){
        let index = shuffle[i];
        if (arr[index].A.toLowerCase() === inputAnswer[i].value.toLowerCase()){
            score++;
            answers[i].style.backgroundColor = "rgba(0, 255, 0, 0.2)";
        }
        else answers[i].style.backgroundColor = "rgba(255, 27, 27, 0.2)";
        answers[i].style.display = "block";
        inputAnswer[i].readOnly = true;
    }
    const passingScore = Math.ceil(arr.length/2);
    quizResult.innerText = 'Your score is ' + score + '/' + arr.length + '. ' + (score>=passingScore ? 'Passed!' : 'Failed!');
    quizResult.style.backgroundColor = score>=passingScore ? 'rgba(0, 255, 0, 0.2)' : 'rgba(255, 27, 27, 0.2)';
}



/* Create List of Modules for IAS :
1. set module code as array name
2. set module answers
3. set module questions
*/
var modules = [
    ias_mod4 = [
        { A:'One-factor Authentication', Q:'Authenticates a username using just one, and only one, detail: the password.'},
        { A:'Two-factor Authentication', Q:'Authenticates the user using what the user has; and, this usually means a device, e.g. a security token, a dongle, an ATM card, or a mobile phone.'},
        { A:'Three-factor Authentication', Q:'Authenticates the user using what the user is; and, this usually means a body-part that can identify an individual.'},
        { A:'Data Loss Prevention', Q:'Can stop people from uploading, forwarding, or even printing critical information in an unsafe manner.'},
        { A:'Virtual Private Network', Q:'Encrypts the connection from an endpoint to a network, often over the Internet. Typically, it uses IPsec or Secure Sockets Layer to authenticate the communication between device and network.'},
        { A:'Application Security', Q:'Application security encompasses the hardware, software, and processes you use to close those holes.'},
        { A:'Cloud Security', Q:'It is a broad set of technologies, policies, and applications applied to defend online IP, services, applications, and other imperative data.'},
        { A:'Cloud Security', Q:'It helps you better manage your security by shielding users against threats anywhere they access the Internet and securing your data.'},
        { A:'Email Security', Q:'Blocks incoming attacks and controls outbound messages to prevent the loss of sensitive data'},
        { A:'Port Scanner', Q:'Designed to probe a server or host for open ports. Such an application may be used by administrators to verify security policies of their networks and by attackers to identify network services running on a host and exploit vulnerabilities'},
        { A:'Idle Scan', Q:'TCP port scan method that consists of sending spoofed packets to a computer to find out what services are available.'},
        { A:'Encryption', Q:'This process converts the original representation of the information, known as plaintext, into an alternative form known as ciphertext.'},
        { A:'Security Information Event Management', Q:'These products come in various forms, including physical and virtual appliances and server software'},
        { A:'Web Security', Q:'Will control your staff\'s web use, block web-based threats, and deny access to malicious websites. It will protect your web gateway on site or in the cloud.'},
        { A:'Behavioral Analytics', Q:'Automatically discern activities that deviate from the norm. Your security team can then better identify indicators of compromise that pose a potential problem and quickly remediate threats.'},
        { A:'Network Security', Q:'Policies and practices adopted to prevent and monitor unauthorized access,misuse, modification, or denial of a computer network and/or network-accessible resources.'},
        { A:'SQL Injection', Q:'Used to attack data-driven applications, and will exploit a security vulnerability in an application\'s software'},
        { A:'Cross-site Scripting', Q:'A type of security vulnerability typically found in web applications, it may be used by attackers to bypass access controls such as the same-origin policy.'},
        { A:'Network Segmentation', Q:'You can assign access rights based on role, location, and more so that the right level of access is given to the right people and suspicious devices are contained and remediated.'},
        { A:'Computer Virus', Q:'It is a type of computer program that, when executed, replicates itself by modifying other computer programs and inserting its own code.'},
        { A:'Phishing', Q:'It is the fraudulent attempt to obtain sensitive information or data, such as usernames, passwords and credit card details, by disguising oneself as a trustworthy entity in an electronic communication.'},
        { A:'Eavdropping', Q:'The act of secretly or stealthily listening to the private conversation or communications of others without their consent in order to gather information'},
        { A:'Wiretapping', Q:'It is the monitoring of telephone and Internet-based conversations by a third party, often by covert means'},
        { A:'Firewall', Q:'Enforces access policies such as what services are allowed to be accessed by the network users. This will put up a barrier between your trusted internal network and untrusted outside networks'},
        { A:'Denial-of-Service Attack', Q:'It is typically accomplished by flooding the targeted machine or resource with superfluous requests in an attempt to overload systems'},
        { A:'Passive Attack', Q:'A network intruder intercepts data traveling through the network'},
        { A:'Active Attack', Q:'An intruder initiates commands to disrupt the network\'s normal operation or to conduct reconnaissance and lateral movements to find and gain access to assets available via the network.'},
        { A:'DNS Spoofing', Q:'It is a form of computer security hacking. Causing the name server to return an incorrect result record, e.g. an IP address'},
        { A:'Intrusion Prevention System', Q:'Scans network traffic to actively block attacks'}
    ],
    ias_mod5 = [
        { A:'Cryptography', Q:'Exists at the intersection of the disciplines of mathematics, computer science, electrical engineering, communication science, and physics.'},
        { A:'Transposition Ciphers', Q:'It is a type of cryptography on which it will rearrange the order of letters in a message.'},
        { A:'Substitution Ciphers', Q:'A type of cryptography on which systematically replace letters or groups of letters with other letters or groups of letters.'},
        { A:'Caesar Ciphers', Q:'A type of cryptography in which each letter in the plaintext was replaced by a letter some fixed number of positions further down the alphabet.'},
        { A:'Non-repudiation', Q:'It cannot disown the content and a transaction done online cannot be disowned by its originator.'},
        { A:'Diffie-Hellman Key Agreement', Q:'This was sharing key for exchange of information confidently.'},
        { A:'Rivest Shamir Adleman', Q:'It is uses for Encryption and Digital Signature.'},
        { A:'El Gamel', Q:'Digital Signatures and keys are exchanged through this logic.'},
        { A:'Elliptic Curve Cryptography', Q:'Functions are similar to RSA and it caters to cell devices.'},
        { A:'Digital Signature Algorithm', Q:'It will only used in digital signing.'},
        { A:'Data Encryption Standard', Q:'Block cipher designs that have been designated cryptography standards by the US government. Despite its deprecation as an official standard, still remains quite popular'},
        { A:'Data Encryption Standard', Q:'It is used across a wide range of applications, from ATM encryption to email privacy and secure remote access.'},
        { A:'David Kahn', Q:'The first people to systematically document cryptanalytic methods'},
        { A:'Symmetric Encryption', Q:'Uses One key for encryption and decryption.'},
        { A:'Symmetric Encryption', Q:'Refers to encryption methods in which both the sender and receiver share the same key.'},
        { A:'Asymmetric Encryption', Q:'Only the encrypted data is exchanged and the public key is available for anyone.'},
        { A:'Kryptos and Graphein', Q:'The term cryptography came from two ancient Greek words'},
        { A:'Confidentiality', Q:'This is achieved by sending critical information by encrypting it with the public key of the receiver and the receiver decrypting it with his own private key'},
        { A:'Hashing', Q:'Best used for sending passwords, files and for searching..'},
        { A:'Hashing', Q:'A mathematical operation that converts data into a unique number generated from a string of text. The output is known as message digest'},
        { A:'Steganography', Q:'More modern examples the use of invisible ink, microdots, and digital watermarks to conceal information'},
        { A:'Steganography', Q:'Designed to be hidden from a third party. It is data hidden within data, and also an encryption technique that can be used as an extra-secure method in which to protect data.'},
        { A:'Cryptographic Algorithms', Q:'Designed around computational hardness assumptions, making such algorithms hard to break in actual practice by any adversary.'}
    ],
    ias_mod6 = [
        { A:'Firewall', Q:'A network security device that monitors incoming and outgoing network traffic and decides whether to allow or block specific traffic based on a defined set of security rules.'},
        { A:'Firewall', Q:'They establish a barrier between secured and controlled internal networks that can be trusted and untrusted outside networks, such as the Internet.'},
        { A:'Stateful Inspection Firewall', Q:'Allows or blocks traffic based on state, port, and protocol. It monitors all activity from the opening of a connection until it is closed.'},
        { A:'Stateful Inspection Firewall', Q:'It is a computer or router that can monitor and filter the traffic coming across it dynamically.'},
        { A:'Unified Threat Management Firewall', Q:'Typically combines, in a loosely coupled way, the functions of a stateful inspection firewall with intrusion prevention and antivirus.'},
        { A:'Next-Generation Firewall', Q:'Most companies are deploying it to block modern threats such as advanced malware and application-layer attacks.'},
        { A:'Threat-focused NGFW', Q:'This also provide advanced threat detection and remediation.'},
        { A:'Virtual Firewall', Q:'It is often a key component in software-defined networks (SDN).'},
        { A:'Virtual Firewall', Q:'Typically deployed as appliance in a private cloud or public cloud to monitor and secure traffic across networks.'},
        { A:'Static Packet Filtering', Q:'Controls access to a network by analyzing the incoming and outgoing packets and letting them pass or halting them based on the IP addresses of the source and destination.'},
        { A:'Stateful Packet Inspection', Q:'3rd generation hardware firewall maintain records of all connections passing through the firewall, also known as?.'},
        { A:'Stateful Packet Inspection', Q:'It used when security is preferred over speed.'},
        { A:'Network Address Translate', Q:'It is a router function that enables public and private network connections and allows single IP address communication.'},
        { A:'Network Address Translate', Q:'It was introduced as an effective, timely solution to heavy network volume traffic.'},
        { A:'Network Address Translate', Q:'It is a method of remapping an IP address space into another by modifying network address information in the IP header of packets while they are in transit across a traffic routing device.'},
        { A:'Port-restricted-cone NAT', Q:'Like an address restricted cone NAT, but the restriction includes port numbers.'},
        { A:'Symmetric NAT', Q:'Each request from the same internal IP address and port to a specific destination IP address and port is mapped to a unique external source IP address and port.'},
        { A:'Proxy Firewall', Q:'It serves as the gateway from one network to another for a specific application. Proxy servers can provide additional functionality such as content caching and security by preventing direct connections from outside the network.'},
        { A:'Proxy Firewall', Q:'It is a network security system that protects network resources by filtering messages at the application layer.'},
        { A:'Proxy Firewall', Q:'Considered to be the most secure type of firewall because they prevent direct network contact with other systems.'}
    ],
    ias_mod7 = [
        { A:'Host', Q:'In networking, any device with an IP address is called?'},
        { A:'Host Hardening', Q:'It is the process of protecting a host against attacks.'},
        { A:'Security Baselines', Q:'Is a set of specific actions to be taken to harden all hosts of a particular type and of particular versions within each type.'},
        { A:'Systems Administrators', Q:'Employees who manage individual hosts or groups of hosts.'},
        { A:'Microsoft Management Consoles', Q:'Used by an IT employee to manage a server and standardized organization for ease of learning and use.'},
        { A:'Windows Server Security', Q:'Intelligently minimize the number of running programs and utilities by asking questions during installation.'},
        { A:'Linux', Q:'Attractive because it is free (or at least inexpensive compared with commercial operating systems)'},
        { A:'Command Line Interface', Q:'Sets of commands can be stored as a script and replayed when needed.'},
        { A:'Internet Information Server', Q:'It is a native webserver program, this software dominates webserver use on Windows Server hosts—in part because it is part of the core Windows Server software and therefore free.'},
        { A:'Apache Webserver Program', Q:'It is the dominant software on LINUX and UNIX hosts.'},
        { A:'E-Commerce Server', Q:'Needs to have network access to a number of systems external to itself, including servers within firms (for order entry, accounting, shipping, etc.) and servers outside the firm in merchant banks and companies that check credit card numbers for validity.'},
        { A:'E-Commerce Service', Q:'The additional software needed for buying and selling, including online catalogs, shopping carts, checkout functions, connections to back-end databases within the firm, and links to outside organizations, such as banks.'},        
        { A:'Website Defacement', Q:'Common attack that is taking over a computer and putting up a hacker-produced page instead of the normal home page.'},
        { A:'WWW Root', Q:'is one level down from the computer\'s true root.'},
        { A:'Buffer Overflow', Q:'It can range from nothing to the crashing of the server, or gaining the ability to execute any command on the server.'},        
        { A:'Host', Q:'This term includes servers, clients, routers, firewalls, and even many mobile phones.'},
        { A:'Security Baselines', Q:'You also need this for servers with different functions, such as webservers (Apache, IIS, nginx, etc.) and e-mail servers (Sendmail, Microsoft Exchange, Exim, etc.).'},        
        { A:'Graphical User Interface', Q:'Users spend most time working on this interface.'},
        { A:'WWW Root', Q:'Particularly owned by a webserver.'}     
    ],

    // App Dev & ET
    cs6_mod4_2 = [
        { A:'Prototype', Q:'An early version of a software system that is used to demonstrate concepts, try out design options, and find out more about the problem and its possible solutions.'},
        { A:'Prototype', Q:'It is becoming increasingly used for system development where rapid development is essential.'},
        { A:'Requirements Engineering Process', Q:'A prototype can help with the elicitation and validation of system requirements.'},
        { A:'System Design Process', Q:'A prototype can be used to explore software solutions and in the development of a user interface for the system.'},
        { A:'Institute of Electrical and Electronics Engineers', Q:'Defines prototyping as “A type of development in which emphasis is placed on developing prototypes early in the development process to permit early feedback and analysis in support of the development process.”'},        
        { A:'Establish Prototype Objectives', Q:'Prototyping should be made explicit from the start of the process.'},
        { A:'Establish Prototype Objectives', Q:'These may be to develop the user interface, to develop a system to validate functional system requirements, or to develop a system to demonstrate the application to managers.'},
        { A:'Define Prototype Functionality', Q:'To decide what to put into and, perhaps more importantly, what to leave out of the prototype system.'},
        { A:'Evaluate Prototype', Q:'Provision must be made during this stage for user training, and the prototype objectives should be used to derive a plan.'},
        { A:'Evaluate Prototype', Q:'Once they are using the system normally, they then discover requirements errors and omissions.'},
        { A:'Client may Believe that System is Real', Q:'Risk in prototyping where define as unrealistic expectations of the progress.'},
        { A:'Implementers Make Poor Choice', Q:'Tempting to build real system same way and it was justified in prototype but not in real system.'},
        { A:'Prototype is not Identical to the Real System', Q:'Users may interact differently due to different response characteristics and it must interpret prototype experience with care.'},
        { A:'Throw Away Prototyping', Q:'A model created with the intention of discarding it after the testing process.'},
        { A:'Throw Away Prototyping', Q:'This is opposed to other methods of prototyping, which assume the prototype will later be built into the working system.'},
        { A:'Throw Away Prototyping', Q:'The quickest and cheapest software prototyping method.'},
        { A:'Throw Away Prototyping', Q:'It is developed from the initial requirements but is not used for the final project.'},
        { A:'Throw Away Prototyping', Q:'Some developers believe that this type is a waste of time because you don\'t use it.'},
        { A:'Evolutionary Prototyping', Q:'Considered as the most fundamental form of prototyping.'},
        { A:'Evolutionary Prototyping', Q:'Its main concept is to build a robust prototype and constantly improve it.'},
        { A:'Evolutionary Prototyping', Q:'Objective to deliver a working system to the end user.'},
        { A:'Steve McConnell', Q:'According to him, "evolutionary delivery is a lifecycle model that straddles the ground between evolutionary prototyping and staged delivery."'},
        { A:'Low-Fidelity Prototyping', Q:'It is generally limited function, limited interaction prototyping effort.'},
        { A:'Low-Fidelity Prototyping', Q:'They are constructed to depict concepts, design alternatives and screen layouts.'},
        { A:'Low-Fidelity Prototyping', Q:'They are intended to demonstrate general look and feel of the interface.'},
        { A:'Low-Fidelity Prototyping', Q:'They are created to educate, communicate and inform, but not to train, test or serve as a basis for which to code.'},
        { A:'Low-Fidelity Prototyping', Q:'Used early in the design cycle to show general conceptual approaches without much investment in development.'},
        { A:'High-Fidelity Prototyping', Q:'Represent the core functionality of the products user interface.'},
        { A:'High-Fidelity Prototyping', Q:'It was fully interactive systems. Users can enter data in entry fields, respond to messages, select icon to open windows and interact with user interface as if it were a real system.'},
        { A:'High-Fidelity Prototyping', Q:'Building this type of prototype will consume resources and have high cost.'}      
    ],
    cs6_mod5 = [
        { A:'Artificial Intelligence', Q:'Branch of computer science by which we can create intelligent machines which can behave like a human, think like humans, and able to make decisions.'},
        { A:'A Man-Made Thinking Power', Q:'Artificial Intelligence is composed of two words Artificial and Intelligence, it means?'},
        { A:'Intelligence', Q:'It is the ability to acquire and apply knowledge'},
        { A:'Knowledge', Q:'It is the information acquired through experience.'},
        { A:'Experience', Q:'It is the knowledge gained through exposure (training).'},
        { A:'Machine learning', Q:'The study of computer algorithms that improve automatically through experience.'},
        { A:'Arthur Samuel, 1959', Q:'Introduces the term machine learning. (fullname and year separated by comma).'},
        { A:'Neural Networks', Q:'These are biologically inspired networks that extract features from the data in a hierarchical fashion'},
        { A:'Deep Learning', Q:'The field of neural networks with several hidden layers is called?'},
        { A:'Warren McCulloch and Walter Pits, 1943', Q:'The first work which is now recognized as AI was done by? (fullname and year separated by comma)'},
        { A:'Warren McCulloch and Walter Pits, 1943', Q:'They proposed a model of artificial neurons. (fullname and year separated by comma)'},
        { A:'Donald Hebb, 1949', Q:'He demonstrated an updating rule for modifying the connection strength between neurons. (fullname and year separated by comma)'},
        { A:'Donald Hebb, 1949', Q:'His rule is now called Hebbian learning. (fullname and year separated by comma)'},
        { A:'Alan Turing, 1950', Q:'He was an English mathematician and pioneered Machine learning. (fullname and year separated by comma)'},
        { A:'Alan Turing, 1950', Q:'He publishes "Computing Machinery and Intelligence" in which he proposed a test. The test can check the machine\'s ability to exhibit intelligent behavior equivalent to human intelligence, called a Turing test. (fullname and year separated by comma)'},
        { A:'Logic Theorist, 1955', Q:'This program had proved 38 of 52 Mathematics theorems, and find new and more elegant proofs for some theorems. (program and year separated by comma)'},
        { A:'Logic Theorist, 1955', Q:'The "first artificial intelligence program" Which was named? (program and year separated by comma)'},
        { A:'Allen Newell and Herbert A. Simon, 1955', Q:'They created the "first artificial intelligence program" (name and year separated by comma)'},
        { A:'John McCarthy, 1956', Q:'The word "Artificial Intelligence" first adopted by American Computer scientist named? (name and year separated by comma)'},
        { A:'1956', Q:'The high-level computer languages such as FORTRAN, LISP, or COBOL were invented. And the enthusiasm for AI was very high at that time. (provide year)'},
        { A:'Joseph Weizenbaum, 1966', Q:'Who created the first chatbot? (name and year separated by comma)'},
        { A:'ELIZA, 1966', Q:'Name of the first chatbot? (name and year separated by comma)'},
        { A:'WABOT-1, 1972', Q:'The first intelligent humanoid robot was built in Japan which was named? (name and year separated by comma)'},
        { A:'1974-1980', Q:'The duration between the years was the first AI winter duration. (year and year separated by dash)'},
        { A:'AI Winter', Q:'Refers to the time period where computer scientists dealt with a severe shortage of funding from the government for AI researches.'},
        { A:'Expert System, 1980', Q:'Programmed that emulate the decision-making ability of a human expert. AI came back with? (name and year separated by comma)'},
        { A:'Stanford University, 1980', Q:'The first national conference of the American Association of Artificial Intelligence was held at? (place and year separated by comma)'},
        { A:'1987-1993', Q:'The duration between the years was the second AI winter duration. (year and year separated by dash)'},
        { A:'IBM Deep Blue, 1997', Q:'Beats world chess champion, Gary Kasparov, and became the first computer to beat a world chess champion. (name and year separated by comma)'},
        { A:'Roomba, 2002', Q:'For the first time, AI entered the home in the form a vacuum cleaner which named? (name and year separated by comma)'},
        { A:'2006', Q:'AI came into the Business world and the companies like Facebook, Twitter, and Netflix also started using AI. (provide year)'},      
        { A:'IBM Watson, 2011', Q:'Won jeopardy, a quiz show, where it had to solve complex questions as well as riddles. (complete name and year separated by comma)'},      
        { A:'IBM Watson, 2011', Q:'It proved that could understand natural language and can solve tricky questions quickly. (complete name and year separated by comma)'},      
        { A:'Google Now, 2012', Q:'A company has launched an Android app feature, which was able to provide information to the user as a prediction. (feature name and year separated by comma)'},      
        { A:'Eugene Goostman, 2014', Q:'This chatbot won a competition in the infamous "Turing test." (name and year separated by comma)'},      
        { A:'IBM Project Debater, 2018', Q:'Debated on complex topics with two master debaters and also performed extremely well. (complete name and year separated by comma)'},      
        { A:'Google Duplex, 2018', Q:'A company demonstrated an AI program which was a virtual assistant and which had taken hairdresser appointment on call, and the lady on the other side didn\'t notice that she was talking with the machine. (complete name and year separated by comma)'},      
        { A:'Narrow AI', Q:'A type of AI which able to perform a dedicated task with intelligence.'}, 
        { A:'General AI', Q:'A type of AI which could perform any intellectual task with efficiency like a human.'}, 
        { A:'Super AI', Q:'A type of AI which machines could surpass human intelligence, and can perform any task better than a human with cognitive properties.'}, 
        { A:'Reactive Machines', Q:'These are the most basic types of Artificial Intelligence.'}, 
        { A:'Limited Memory', Q:'These machines can use stored data for a limited time period only.'}, 
        { A:'Theory of Mind', Q:'This type of AI should understand human emotions, people, beliefs, and be able to interact socially like humans.'}, 
        { A:'Self-Awareness', Q:'This type of AI is the future of Artificial Intelligence.'}
    ],
    cs6_mod6 = [
        { A:'Internet Architecture Board', Q:'According to them, IoT is the networking of smart objects, meaning a huge number of devices intelligently communicating in the presence of internet protocol that cannot be directly operated by human beings but exist as components in buildings, vehicles or the environment.'},
        { A:'Internet Engineering Task Force', Q:'According to them, IoT is the networking of smart objects in which smart objects have some constraints such as limited bandwidth, power, and processing accessibility for achieving interoperability among smart objects.'},
        { A:'Institute of Electrical and Electronics Engineers', Q:'According to them, IoT is a framework of all things that have a representation in the presence of the internet in such a way that new applications and services enable the interaction in the physical and virtual world in the form of machine-to-machine communication in the cloud.'},
        { A:'Oxford Dictionary', Q:'According to them, IoT is the interaction of everyday object\'s computing devices through the Internet that enables the sending and receiving of useful data.'},
        { A:'2020 Conceptual Framework', Q:'According to them, the term IoT is expressed through a simple formula'},
        { A:'IoT = Services + Data + Networks + Sensors', Q:'The term IoT is expressed through a simple formula. (Provide formula)'},
        { A:'Telegraph', Q:'Machines have been providing direct communications since it was developed in the 1830s and 1840s.'},
        { A:'Wireless Telegraphy', Q:'The first radio voice transmission took place on June 3, 1900, providing another necessary component for developing the Internet of Things. It described as?'},
        { A:'1950', Q:'The development of computers began. (provide year)'},
        { A:'Defense Advanced Research Projects Agency', Q:'The Internet, itself a significant component of the IoT, started out as part of?'},
        { A:'ARPANET', Q:'In the 1980s, commercial service providers began supporting public use of it, allowing to evolve into our modern Internet.'},
        { A:'Global Positioning Satellites', Q:'It became a reality in early 1993, with the Department of Defense providing a stable, highly functional system of 24 satellites.'},
        { A:'Coca cola Machine', Q:'One of the first examples of an Internet of Things is from the early 1980s it was?'},
        { A:'Kevin Ashton', Q:'The Executive Director of Auto-ID Labs at MIT, was the first to describe the Internet of Things, during his 1999 speech.'},
        { A:'Radio Frequency Identification', Q:'The Executive Director of Auto-ID Labs at MIT, stated that this was a prerequisite for the Internet of Things.'},
        { A:'Sensing Layer', Q:'Its main purpose is to identify any phenomena in the devices\' peripheral and obtain data from the real world.'},
        { A:'Motion Sensors', Q:'This measure the change in motion as well as the orientation of the devices'},
        { A:'Environmental Sensors', Q:'It sensors such as Light sensors, Pressure sensors, etc. are embedded in IoT devices to sense the change in environmental parameters in the device\'s peripheral.'},
        { A:'Position Sensors', Q:'Sensors of IoT devices deal with the physical position and location of the device.'},
        { A:'Network Layer', Q:'Acts as a communication channel to transfer data, collected in the sensing layer, to other connected devices. '},
        { A:'Data Processing Layer', Q:'This consists of the main data processing unit of IoT devices.'},
        { A:'Application Layer', Q:'This implements and presents the results of the data processing layer to accomplish disparate applications of IoT devices.'},
        { A:'Consumer, Enterprise, and Industrial', Q:'The devices can be categorized into three main groups, which are?'},
        { A:'Intrusion Detection System', Q:'IoT Based Smart Home, where it can detect of window and door openings and violations to prevent intruders.'},
        { A:'Waste Management', Q:'Detection of rubbish levels in containers to optimize the trash collection routes. Garbage cans and recycle bins with RFID tags allow the sanitation staff to see when garbage has been put out.'},
        { A:'Structural Health', Q:'Monitoring of vibrations and material conditions in buildings, bridges and historical monuments.'},
        { A:'Green Houses', Q:'Control micro-climate conditions to maximize the production of fruits and vegetables and its quality.'},
        { A:'Field Monitoring', Q:'Reducing spoilage and crop waste with better monitoring, accurate ongoing data obtaining, and management of the agriculture fields, including better control of fertilizing, electricity and watering.'},
        { A:'Smart Parking', Q:'Real-time monitoring of parking spaces available in the city making residents able to identify and reserve the closest available spaces.'},
        { A:'Animal Tracking', Q:'Location and identification of animals grazing in open pastures or location in big stables, Study of ventilation and air quality in farms and detection of harmful gases from excrements.'}
    ],
    cs6_mod7 = [
        { A:'Augmented Reality', Q:'It is a form of emerging technology that allows users to overlay computer-generated content in the real world.'},
        { A:'Augmented Reality', Q:'It is the integration of digital information with the user\'s environment in real-time.'},
        { A:'Augmented Reality', Q:'Users see and interact with the real world while digital content is added to it.'},
        { A:'Augmented Reality', Q:'It is a live, direct or indirect view of a physical, real-world environment whose elements are supplemented by computer-generated sensory input such as sound, video, graphics or GPS data.'},
        { A:'Virtual Reality', Q:'It is fully immersive, which tricks your senses into thinking you\'re in a different environment or world apart from the real world. '},
        { A:'Virtual Reality', Q:'Using a head-mounted display (HMD) or headset, you\'ll experience a computer-generated world of imagery and sounds in which you can manipulate objects and move around using haptic controllers while tethered to a console or PC. It was an example of?'},
        { A:'Virtual Reality', Q:'It refers to computer technologies using reality headsets to generate realistic sounds, images and other sensations that replicate a real environment or create an imaginary world.'},
        { A:'Mixed Reality', Q:'Sometimes referred to as hybrid reality, is the merging of real and virtual worlds to produce new environments and visualizations where physical and digital objects co-exist and interact in real-time.'},
        { A:'Mixed Reality', Q:'You can play a virtual video game, grab your real-world water bottle, and smack an imaginary character from the game with the bottle. It was an example of?'},
        { A:'Mixed Reality', Q:'Its key characteristic is that the synthetic content and the real-world content are able to react to each other in real-time.'},
        { A:'Mixed Reality', Q:'You interact with and manipulate both physical and virtual items and environments, using next-generation sensing and imaging technologies.'},
        { A:'Mixed Reality', Q:'It allows you to see and immerse yourself in the world around you even as you interact with a virtual environment using your own hands—all without ever removing your headset.'},
        { A:'Infrastructure Tracker Unit', Q:'It was responsible for collecting data from the real world, sending them to the Processing Unit.'},
        { A:'Processing Unit', Q:'It will mixed the virtual content with the real content and sent the result to the Video Out module of the Visual Unit. Some designs used a Video In, to acquire required data for the Infrastructure Tracker Unit.'},
        { A:'Visual Unit', Q:'It can be classified into two types of system, depending on the followed visualization technology.'},
        { A:'Video see-through', Q:'It uses a Head-Mounted Display (HMD) that employs a video-mixing and displays the merged images on a closed-view HMD.'},
        { A:'Optical see-through', Q:'It uses an HMD that employs optical combiners to merge the images within an open-view HMD.'},
        { A:'Head-Mounted Display', Q:'These are currently the dominant display technology in the AR field. However, they lack in several aspects, such as ergonomics, high prices and relatively low mobility due to their sizes and connectivity features.'},
        { A:'AR in Education', Q:'It can be used to enhance content and instruction within the traditional classroom, supplement instruction in the special education classroom, extend content into the world outside the classroom, and be combined with other technologies to enrich their individual applications.'},
        { A:'AR in Medicine', Q:'This new technology is enhancing medicine and healthcare towards more safety and efficiency.'},
        { A:'AR in Games', Q:'This were praised for increasing physical activity in people - you actually have to move around to find your target, for example, Pokémon.'},
        { A:'AR in eSports', Q:'It turns shows into interactive experiences allowing the watchers to become participants.'},
        { A:'AR in the Theater', Q:'In this sector, augmented reality can serve not only for entertainment purposes but also for the purposes of accessibility. '}
    ],
    
    // Soft Eng 1
    se1_mod1 = [
        { A:'Software', Q:'is a program or set of programs containing instructions that provide desired functionality.'},
        { A:'Software', Q:'A proper team of developers is required to design it.'},
        { A:'Software', Q:'A set of programs to create an application is called?'},
        { A:'Engineering', Q:'is the process of designing and building something that serves a particular purpose and finds a cost-effective solution to problems.'},
        { A:'Software Engineering', Q:'is the process of designing, developing, testing, and maintaining software.'},
        { A:'Software Engineering', Q:'It is a systematic and disciplined approach to software development that aims to create high-quality, reliable, and maintainable software.'},
        { A:'Software Engineering', Q:'It includes a variety of techniques, tools, and methodologies, including requirements analysis, design, testing, and maintenance.'},        
        { A:'Program', Q:'It is normally designed by a single developer.'},
        { A:'Program', Q:'A set of instructions and also called?'},
        { A:'Modularity', Q:'Breaking the software into smaller, reusable components that can be developed andtested independently.'},
        { A:'Abstraction', Q:'Hiding the implementation details of a component and exposing only the necessary functionality to other parts of the software'},
        { A:'Encapsulation', Q:'Wrapping up the data and functions of an object into a single unit, and protecting the internal state of an object from external modifications.'},
        { A:'Reusability', Q:'Creating components that can be used in multiple projects, which can save time and resources'},
        { A:'Maintenance', Q:'Regularly updating and improving the software to fix bugs, add new features, and address security vulnerabilities.'},
        { A:'Testing', Q:'Verifying that the software meets its requirements and is free of bugs.'},
        { A:'Design Patterns', Q:'Solving recurring problems in software design by providing templates for solving them.'},
        { A:'Agile Methodologies', Q:'Using iterative and incremental development processes that focus on customer satisfaction, rapid delivery, and flexibility'},
        { A:'Continuous Integration and Deployment', Q:'Continuously integrating the code changes and deploying them into the production environment.'},
        { A:'As a product', Q:'Dual role of software which it delivers computing potential across networks of Hardware.'},
        { A:'As a product', Q:'Dual role of software which it enables the Hardware to deliver the expected functionality.'},
        { A:'As a vehicle for delivering a product', Q:'Dual role of software which it provides system functionality.'},
        { A:'As a vehicle for delivering a product', Q:'Dual role of software which it controls other software.'},
        { A:'As a vehicle for delivering a product', Q:'Dual role of software which it helps build other software.'},
        { A:'Requirements Gathering, Design, Implementation, Testing, Deployment, Maintenance', Q:'The software engineering process is a systematic approach to the development of software. It typically involves the following steps: [separated by comma]'}
    ],
    se1_mod2 = [
        { A:'System Development Life Cycle', Q:'It provides a well-structured framework that gives an idea, of how to build a system.'},
        { A:'Planning and Requirement Analysis', Q:'It is the most important and necessary stage in SDLC.'},
        { A:'Defining Requirements', Q:'This is accomplished through Software Requirement Specification document which contains all the product requirements to be constructed and developed during the project life cycle.'},
        { A:'Designing the Software', Q:'This phase is the product of the last two, like inputs from the customer and requirement gathering.'},
        { A:'Developing the Project', Q:'The implementation of design begins concerning writing code. '},
        { A:'Testing', Q:'It will verify the requirements to make sure that the products are solving the needs addressed and gathered during the requirements stage.'},
        { A:'Deployment', Q:'the software may be released as it is or with suggested enhancement in the object segment.'},
        { A:'Maintenance', Q:'This procedure where the care is taken for the developed product is known as?'},
        { A:'Maintenance', Q:'Once when the client starts using the developed systems, then the real issues come up and requirements to be solved from time to time.'},
        { A:'Waterfall Model', Q:'It is a continuous software development model in which development is seen as flowing steadily downwards through the steps of requirements analysis, design, implementation, testing (validation), integration, and maintenance.'},
        { A:'Waterfall Model', Q:'It is the simplest model of software development paradigm.'},
        { A:'Waterfall Model', Q:'It says the all the phases of SDLC will function one after another in linear manner. That is, when the first phase is finished then only the second phase will start and so on.'},
        { A:'Rapid Application Development Model', Q:'It targets developing software in a short period'},
        { A:'Rapid Application Development Model', Q:'It is based on the concept that a better system can be developed in lesser time by using focus groups to gather system requirements.'},
        { A:'Spiral Model', Q:'It is a risk-driven process model.'},
        { A:'Spiral Model', Q:'This SDLC model helps the group to adopt elements of one or more process models like a waterfall, incremental, waterfall, etc. '},
        { A:'Spiral Model', Q:'This model technique is a combination of rapid prototyping and concurrency in design and development activities.'},
        { A:'V-Model', Q:'In this type of SDLC model testing and the development, the step is planned in parallel.'},
        { A:'Incremental Model', Q:'It is not a separate model. It is necessarily a series of waterfall cycles.'},
        { A:'Incremental Model', Q:'The SDLC process is repeated, with each release adding more functionality until all requirements are met.'},
        { A:'Incremental Model', Q:'In this method, each cycle act as the maintenance phase for the previous software release.'},
        { A:'Incremental Model', Q:'Modification to this model allows development cycles to overlap'},
        { A:'Iterative Model', Q:'It is a particular implementation of a software development life cycle that focuses on an initial, simplified implementation, which then progressively gains more complexity and a broader feature set until the final system is complete.'},
        { A:'Iterative Model', Q:'It is a way of breaking down the software development of a large application into smaller pieces.'},
        { A:'Big Bang Model', Q:'It is focusing on all types of resources in software development and coding, with no or very little planning.'},
        { A:'Big Bang Model', Q:'The requirements are understood and implemented when they come.'},
        { A:'Big Bang Model', Q:'This model works best for small projects with smaller size development team which are working together.'},
        { A:'Big Bang Model', Q:'It is useful for academic software development projects.'},
        { A:'Big Bang Model', Q:'It is an ideal model where requirements are either unknown or final release date is not given.'},
        { A:'Prototyping Model', Q:'The developer and the user meet and define the purpose of the software, identify the needs, etc.'}
    ],
    
    // Personal Development
    ic1_mod1 = [
        { A:'Personality', Q:'It refers to all the factors within the person that influence his characteristic ways of behaving, thinking and feeling. It is your image on others.'},
        { A:'PHYSICAL', Q:'this includes the mode of dressing, manner of walking, posture, body build, health, complexion, and facial expression.'},
        { A:'INTELLECTUAL', Q:'this refers to how a person talks and what she talks about is what matters in the intellectual component of personality.'},
        { A:'SOCIAL', Q:'these are good manners or correct manners which are included in this aspect.'},
        { A:'EMOTIONAL', Q:'this component of personality includes a person’s likes or dislikes, whether he/she is outgoing or shy, whether he/she is calm or nervous, and whether he/she loses his/her temper easily or “keeps her cool.”'},
        { A:'VALUE SYSTEM', Q:'this includes a person’s attitudes, values, beliefs, and philosophy in life'},
        { A:'VALUE SYSTEM', Q:'This aspect  is referred to as character.'},
        { A:'VALUE SYSTEM', Q:'It is shown in the way we judge whether our actions and the actions of others are right or wrong.'},
        { A:'HEREDITY', Q:'this refers to the influences on your personality that you are born with – a set of genes and chromosomes.'},
        { A:'ENVIRONMENT', Q:'this is the nurturing aspect of our lives, in which we live and grow up. Environment  would consist of home, school, work, or other places that you spend a lot of timeand interact with.'},
        { A:'SITUATION', Q:'These are the experiences that each individual person goes through.'},
        { A:'Sanguine, Choleric, Melancholic, Phlegmatic', Q:'What is the 4 types of temperaments? (separate with comma)'}
    ],
    ic1_mod2 = [
        { A:'SELF-ESTEEM', Q:'is the extent to which you like, accept, and respect yourself.'},
        { A:'SELF-IMAGE', Q:'is made up of variables such as physical appearance, athletic ability, sense of humor, special talents, morals and ethics, aptitudes, and values and beliefs.'},
        { A:'High self-esteem', Q:'helps you to meet everyday challenges and stay on course to become all that you can be.'},
        { A:'Low self-esteem', Q:'often leads to loneliness, anxiety, resentment, irritability and little life satisfaction.'},
        { A:'Self-confidence', Q:'the difference between feeling unstoppable and feeling scared out of your wits.'},
        { A:'Self-confidence', Q:'displayed by a pleasant demeanor, a positive outlook on life, friends and satisfaction with life in general.'},
        { A:'Self-confidence', Q:'Those who lack it are often timid and fear failure.'},
        { A:'self-improvement plan', Q:'It is a life-long process that changes with your growth and experiences.'},
        { A:'knowledge, skills and attitudes', Q:'Learning is categorized into three types, which are?'},
        { A:'knowledge', Q:'It is acquired by reading, attending classes, using internet, talking with others, and life experiences.'},
        { A:'skills', Q:'It was obtained by learning how to play guitar or other musical instrument through constant practice and repetition.'},
        { A:'attitudes', Q:'are complex and develop over time. It is your outlook in life – how you respond to people and events. Also, it is guided by the mind.'},
        { A:'attitude', Q:'It is exceptionally vital for the reason that it drives your behavior.'},
        { A:'Behavior', Q:'is a manner of acting or reacting under a general set of circumstances.'},
        { A:'mental attitude', Q:'Your action and body language are results of your?'},
        { A:'Perception', Q:'is the process of attaining awareness or understanding based on sensory information – an immediate reaction of the senses.'},
        { A:'image', Q:'It is one of your most important assets.'},
        { A:'image', Q:'The set of qualities and characteristics that represent perceptions of you as judged by others is your?'},
        { A:'Etiquette', Q:'refers to the customs or rules of behavior regarded as correct in social and work life.'}
    ],
    
    
    // Professional Elective
    pe_mod2_1 = [
        { A:'Personality', Q:'It refers to all the factors within the person that influence his characteristic ways of behaving, thinking and feeling. It is your image on others.'},
        { A:'PHYSICAL', Q:'this includes the mode of dressing, manner of walking, posture, body build, health, complexion, and facial expression.'},
        { A:'INTELLECTUAL', Q:'this refers to how a person talks and what she talks about is what matters in the intellectual component of personality.'},
        { A:'SOCIAL', Q:'these are good manners or correct manners which are included in this aspect.'},
        { A:'EMOTIONAL', Q:'this component of personality includes a person’s likes or dislikes, whether he/she is outgoing or shy, whether he/she is calm or nervous, and whether he/she loses his/her temper easily or “keeps her cool.”'},
        { A:'VALUE SYSTEM', Q:'this includes a person’s attitudes, values, beliefs, and philosophy in life'},
        { A:'VALUE SYSTEM', Q:'This aspect  is referred to as character.'},
        { A:'VALUE SYSTEM', Q:'It is shown in the way we judge whether our actions and the actions of others are right or wrong.'},
        { A:'HEREDITY', Q:'this refers to the influences on your personality that you are born with – a set of genes and chromosomes.'},
        { A:'ENVIRONMENT', Q:'this is the nurturing aspect of our lives, in which we live and grow up. Environment  would consist of home, school, work, or other places that you spend a lot of timeand interact with.'},
        { A:'SITUATION', Q:'These are the experiences that each individual person goes through.'},
        { A:'Sanguine, Choleric, Melancholic, Phlegmatic', Q:'What is the 4 types of temperaments? (separate with comma)'}
    ],
    pe_mod2_2 = [
        { A:'SELF-ESTEEM', Q:'is the extent to which you like, accept, and respect yourself.'},
        { A:'SELF-IMAGE', Q:'is made up of variables such as physical appearance, athletic ability, sense of humor, special talents, morals and ethics, aptitudes, and values and beliefs.'},
        { A:'High self-esteem', Q:'helps you to meet everyday challenges and stay on course to become all that you can be.'},
        { A:'Low self-esteem', Q:'often leads to loneliness, anxiety, resentment, irritability and little life satisfaction.'},
        { A:'Self-confidence', Q:'the difference between feeling unstoppable and feeling scared out of your wits.'},
        { A:'Self-confidence', Q:'displayed by a pleasant demeanor, a positive outlook on life, friends and satisfaction with life in general.'},
        { A:'Self-confidence', Q:'Those who lack it are often timid and fear failure.'},
        { A:'self-improvement plan', Q:'It is a life-long process that changes with your growth and experiences.'},
        { A:'knowledge, skills and attitudes', Q:'Learning is categorized into three types, which are?'},
        { A:'knowledge', Q:'It is acquired by reading, attending classes, using internet, talking with others, and life experiences.'},
        { A:'skills', Q:'It was obtained by learning how to play guitar or other musical instrument through constant practice and repetition.'},
        { A:'attitudes', Q:'are complex and develop over time. It is your outlook in life – how you respond to people and events. Also, it is guided by the mind.'},
        { A:'attitude', Q:'It is exceptionally vital for the reason that it drives your behavior.'},
        { A:'Behavior', Q:'is a manner of acting or reacting under a general set of circumstances.'},
        { A:'mental attitude', Q:'Your action and body language are results of your?'},
        { A:'Perception', Q:'is the process of attaining awareness or understanding based on sensory information – an immediate reaction of the senses.'},
        { A:'image', Q:'It is one of your most important assets.'},
        { A:'image', Q:'The set of qualities and characteristics that represent perceptions of you as judged by others is your?'},
        { A:'Etiquette', Q:'refers to the customs or rules of behavior regarded as correct in social and work life.'}
    ],
    pe_mod2_3 = [
        { A:'SELF-ESTEEM', Q:'is the extent to which you like, accept, and respect yourself.'},
        { A:'SELF-IMAGE', Q:'is made up of variables such as physical appearance, athletic ability, sense of humor, special talents, morals and ethics, aptitudes, and values and beliefs.'},
        { A:'High self-esteem', Q:'helps you to meet everyday challenges and stay on course to become all that you can be.'},
        { A:'Low self-esteem', Q:'often leads to loneliness, anxiety, resentment, irritability and little life satisfaction.'},
        { A:'Self-confidence', Q:'the difference between feeling unstoppable and feeling scared out of your wits.'},
        { A:'Self-confidence', Q:'displayed by a pleasant demeanor, a positive outlook on life, friends and satisfaction with life in general.'},
        { A:'Self-confidence', Q:'Those who lack it are often timid and fear failure.'},
        { A:'self-improvement plan', Q:'It is a life-long process that changes with your growth and experiences.'},
        { A:'knowledge, skills and attitudes', Q:'Learning is categorized into three types, which are?'},
        { A:'knowledge', Q:'It is acquired by reading, attending classes, using internet, talking with others, and life experiences.'},
        { A:'skills', Q:'It was obtained by learning how to play guitar or other musical instrument through constant practice and repetition.'},
        { A:'attitudes', Q:'are complex and develop over time. It is your outlook in life – how you respond to people and events. Also, it is guided by the mind.'},
        { A:'attitude', Q:'It is exceptionally vital for the reason that it drives your behavior.'},
        { A:'Behavior', Q:'is a manner of acting or reacting under a general set of circumstances.'},
        { A:'mental attitude', Q:'Your action and body language are results of your?'},
        { A:'Perception', Q:'is the process of attaining awareness or understanding based on sensory information – an immediate reaction of the senses.'},
        { A:'image', Q:'It is one of your most important assets.'},
        { A:'image', Q:'The set of qualities and characteristics that represent perceptions of you as judged by others is your?'},
        { A:'Etiquette', Q:'refers to the customs or rules of behavior regarded as correct in social and work life.'}
    ],
    
    
    // Social Issues and Professional Practices
    sipp_mod1 = [
        { A:'Ethics', Q:'also called moral philosophy, the discipline concerned with what is morally good and bad and morally right and wrong'},
        { A:'Relativism', Q:'the theory that there is no universal moral norm of right and wrong.'},
        { A:'Subjective Relativism', Q:'holds that each person decides right and wrong for himself/herself.'},
        { A:'Cultural Relativism', Q:'the ethical theory that the meaning of “right” and “wrong” rests with a society’s actual moral guidelines.'},
        { A:'Divine Command Theory', Q:'based on the idea that good actions are those aligned with the will of God and bad actions are those contrary to the will of God.'},
        { A:'Ethical Egoism', Q:' the philosophy that each person should focus exclusively on his or her self- interest.'},
        { A:'Consequentialism', Q:'It is the consequence of an action which determines whether or not the action is moral.'},
        { A:'Utilitarianism', Q:'the philosophy that the right action is the one that produces the most intrinsic good for everyone affected.'},
        { A:'Kantianism', Q:'This theory emphasizes the type of action rather than the consequences of that action.'},
        { A:'Immanuel Kant', Q:'Deontology is an obligation-based theory whose chief author was?'},

        { A:'ETHICS', Q:'Describes standards or codes of behavior expected of an individual by a group to which an individual belongs.'},
        { A:'MORALS', Q:'Principles or habits with respect to right or wrong conduct. While it also prescribe dos and don`ts'},
        { A:'Morality', Q:'It seems to be used in two distinct broad senses: a descriptive sense and a normative sense.'},
        { A:'Law', Q:'A system of rules that tells us what we can and cannot do. This are enforced by a set of institutions.'}
    ],
    sipp_mod2 = [
        { A:'Analyst Programmer', Q:'Write, test, design and develop computer software and programs.'},
        { A:'AV Technician', Q:'Provide technical support for the production, recording, and broadcasting of media.'},
        { A:'Business Analyst', Q:'Evaluate and develop technology systems to help businesses run at optimal standards.'},
        { A:'Chief Information Officers', Q:'dWatch over organizations’ IT and telecommunication systems.'},
        { A:'Database and Systems Administrators and ICT Security', Q:' Maintain and operate databases, computer systems, IT security systems and networks.'},
        { A:'IT Manager', Q:'Organize and run IT departments in companies and organizations.'},
        { A:'IT Sales Professionals', Q:'Facilitate selling hardware, software and other information and communications technology.'},
        { A:'IT Security Specialist', Q:'Develop and maintain secure database management systems for organizations.'},
        { A:'IT Support and Test Engineers', Q:'Follow procedures and strategies to support, manage and test technical quality systems.'},
        { A:'IT Support Technician', Q:'Assist in the planning, installation and performance of computer systems and technology.'},
        { A:'IT Trainer', Q:'Plan and conduct IT training programs, and write user manuals for clients.'},
        { A:'Motion Graphics Designer', Q:'Use software and techniques to create digital or visual graphic images for web, television and film.'},
        { A:'Network Professional', Q:'Analyze network strategies and make recommendations for improvements.'},
        { A:'Programmer', Q:'Create and edit programs by converting the requirements of a project into code.'},
        { A:'Software and Application Programmer', Q:'Develop and test new software as well as tweak and test existing programs.'},
        { A:'Systems Analyst', Q:'Plan, implement, modify or coordinate data and information systems, to meet business needs.'},
        { A:'Telecommunications Technical Specialist', Q:'Problem solve to update and maintain communications devices and networks.'},
        { A:'Telecommunications Technician', Q:'Ensure that communications equipment is installed and maintained properly.'},
        { A:'Test Analyst', Q:'Offer support and testing to create and maintain functional systems based on technology.'},
        { A:'Web Developer', Q:'Specialize in website development, including design, structure and layout.'},
        { A:'Software Piracy', Q:' A common violation occurs when employees copy software from their work computers for use at home.'},
        { A:'Philippine Computer Society', Q:'the longest-existing professional association of computing and information technology professionals in the country.'},
        { A:'Philippine Computer Society', Q:'Established in 1967, it has a long and honored history of growing the development of the ICT industry and of ICT professionals in the Philippines.'},
        { A:'South East Asia Regional Computer Confederation', Q:'PCS is a founding member of the SEARCC, which acronym means?'},
        { A:'Association for Computing Machinery', Q:'brings together computing educators, researchers, and professionals to inspire dialogue, share resources, and address the field`s challenges.'},
        { A:'professional Code of Ethics', Q:'a set of principles designed to help professionals distinguish right from wrong in order to govern their decision-making.'}
    ],
    sipp_mod3 = [
        { A:'Privacy', Q:'refers to someone’s right to keep their personal matters and relationships secret.'},
        { A:'Internet', Q:'information would be available from the web.'},
        { A:'Social Media', Q:'invitations to users to submit all kinds of personal information'},
        { A:'Big Data', Q:'emerges from Internet transactions such as shopping, when being recorded by surveillance cameras in public or private spaces, or when using smartcard-based public transport payment systems.'},
        { A:'Mobile Devices', Q:'devices that contain a range of data-generating sensors, including GPS, movement sensors, and cameras, and may transmit the resulting data via the Internet or other networks.'},
        { A:'Internet of Things', Q:'devices that contain chips and/or are connected in the so-called?'},
        { A:'E-government', Q:'A variety of online citizen participation tools and platforms or online access to recordings of sessions of parliament and government committee meetings.'},
        { A:'Surveillance', Q:'CCTVs and other camera systems.'},
        { A:'Data Breaches', Q:'An alarming number of identity theft incidents involving large databases of personal information.'},
        { A:'Discovery', Q:'part of the pretrial phase of a lawsuit in which each party can obtain evidence from the other party by various means, including requests for the production of documents.'},
        { A:'Electronic Discovery', Q:'the collection, preparation, review, and production of electronically stored information for use in criminal and civil actions and proceedings.'},
        { A:'Consumer Profiling', Q:'Companies openly collect personal information about users when they register at Websites, complete surveys, fill out forms, or enter contests online.'},
        { A:'Event Data Recorder', Q:'A device that records vehicle and occupant data for a few seconds before, during, and after any vehicle crash that is severe enough to deploy the vehicle’s air bags.'},
        { A:'Right to Privacy', Q:'It is broadly defined as “the right to be left alone”.'},
        { A:'1987 Constitution', Q:'It protects against unreasonable searches and seizures, and renders inviolable the privacy of their communication and correspondence.'},
        { A:'Anti-Wiretapping Act', Q:'It is a law which allows to some extent that the privacy of individuals may be invaded, provided that some requirements are complied with.'},
        { A:'RA 4200', Q:'Anti-Wiretapping Law of 1965.'},
        { A:'RA 9995', Q:'Anti-Photo and Video Voyeurism Act of 2009'},
        { A:'RA 10175', Q:'Cybercrime Prevention Act of 2012'},
        { A:'RA 9372', Q:'Human Security Act of 2007'},
        { A:'Data Privacy Act', Q:'Iregulates the processing of personal information of individuals collected by both public and private entities as a way to protect one’s privacy.'}
    ],
    sipp_mod4 = [
        { A:'Freedom of Expression', Q:'a core human right which is guaranteed under international law and by virtually every constitutional bill of rights in the world.'},
        { A:'Freedom from Prior Restraint or Censorship', Q:'official governmental restrictions on the press or other forms of expression in advance of actual publication or dissemination.'},
        { A:'Discovery of Truth', Q:'The freedom of expression is essential for the search of truth.'},
        { A:'Libel', Q:'is public and malicious imputation of a crime, or of a vice or defect, real or imaginary, or any act, omission, condition, status, or circumstance tending to cause dishonor, discredit or contempt of a natural or juridical person, or to blacken the memory of one who is dead.'},
        { A:'Libel', Q:'committed by means of writing, printing, lithography, engraving, radio, phonograph, painting, theatrical exhibition, cinematographic exhibition, or any similar means.'},
        { A:'Cyber Libel', Q:'is committed through a computer system or any other similar means which may be devised in the future.'},
        { A:'Hate Speech', Q:'Persistent or malicious harassment aimed at a specific person'},
        { A:'Anonymity on the Internet', Q:'is the expression of opinions by people who do not reveal their identity.'}
    ],
    sipp_mod5 = [
        { A:'Intellectual property', Q:'Used to describe works of the mind—such as art, books, films, formulas, inventions, music, and processes—that are distinct and owned or created by a single person or group.'},
        { A:'Intellectual property', Q:'It can be an invention, a design, a brand name, or a literary and artistic work.'},
        { A:'Copyright', Q:'Protects literary and artistic works, such as books and other writings, musical works, films, paintings and other works, and computer programs.'},
        { A:'Copyright', Q:'It is the legal protection extended to the owner of the rights in an original work.'},
        { A:'Original work', Q:'refers to every production in the literary, scientific and artistic  domain.'},
        { A:'Economic Rights and Moral Rights', Q:'There are two (2) types of rights under the copyright system of the Philippines.'},
        { A:'Economic rights', Q:'consist of the exclusive right of the creator or author of a work to carry out, authorize or prevent acts such as the reproduction of the work, and MutationRecord.'},
        { A:'Moral rights', Q:'Entitle the author or creator to take measures to protect the connection between himself and the work.'},
        { A:'RA 10372, 2013', Q:'Which law was enacted in this year to amend and strengthen the provisions of the Intellectual Property Code? (Law, Year)'},
        { A:'Trademark', Q:'It  is a word, a group of words, sign, symbol, logo or a combination thereof that identifies and differentiates the source of the goods or services of one entity from those of others.'},
        { A:'Patent', Q:'This invention is a government-issued grant, bestowing an exclusive right to an inventor over a product or process that provides any technical solution to a problem in any field of human activity'},
        { A:'Utility Model', Q:'It is any technical solution to a problem in any field of human activity which is new and industrially applicable.'},
        { A:'Industrial Design', Q:'It is the ornamental or aesthetic aspect of an article.'},
        { A:'Plagiarism', Q:'It is an act of stealing someone’s ideas or words without acknowledging the original author.'},
        { A:'Plagiarism', Q:'It can be avoided by citing sources.'},
        { A:'Direct plagiarism', Q:'the word-for-word transcription of a section of someone else’s work, without attribution and without quotation marks.'},
        { A:'Self-plagiarism', Q:'occurs when a student submits his or her own previous work, or mixes parts of previous works, without permission from all professors involved.'},
        { A:'Mosaic plagiarism', Q:'occurs when a student borrows phrases from a source without using quotation marks, or finds synonyms for the author’s language while keeping to the same general structure and meaning of the original.'},
        { A:'Mosaic plagiarism', Q:'Sometimes called “patch writing,” this kind of paraphrasing, whether intentional or not.'},
        { A:'Accidental plagiarism', Q:'occurs when a person neglects to cite their sources, or misquotes their sources, or unintentionally paraphrases a source by using similar words, groups of words, and/or sentence structure without attribution.'},
        { A:'Copyright Infringement', Q:'it is a violation of the rights secured by the owner of a copyright.'},
        { A:'Copyright Infringement', Q:'occurs when someone copies a substantial and material part of another’s copyrighted work without permission.'},
        { A:'Trademark Infringement', Q:'Defined as the unauthorized use of a protected trademark or service mark, or the use of something very similar to a protected mark?'},
        { A:'Reverse Engineering', Q:'defined it as the process of taking something apart in order to understand it, build a copy of it, or improve it.'},
        { A:'Software Piracy', Q:'the act of illegally using, copying or distributing software without ownership or legal rights.'},
        { A:'Cybersquatting', Q:'An individual or company who intentionally purchases a domain and holds it until they can sell it at a premium price.'}
    ],
    sipp_mod6 = [
        { A:'Cyber', Q:'refers to a computer Or a computer network, the electronic medium in which online communication takes place.'},
        { A:'Cybercrime', Q:'any type of illegal activity that takes place via digital means.'},
        { A:'Cybercrime', Q:'It can be divided into two distinct categories: intentional damage and unintentional damage.'},
        { A:'Cyber Crime Prevention Act of 2012 or RA 10175', Q:'An act defining cybercrime, providing for the prevention, investigation, suppression and the imposition of penalties therefor and for other purposes.'},
        { A:'RA 10175', Q:'Recognizes the vital role of information and communications industries such as content production, telecommunications, broadcasting electronic commerce, and data processing, in the nation’s overall social and economic development.'},
        { A:'Anti-Photo and Video Voyeurism Act of 2009 or RA 9995', Q:'An act defining and penalizing the crime of photo and video voyeurism, prescribing penalties therefor, and for other purposes.'},
        { A:'Inadmissibility of Evidence', Q:'Any record, photo or video, or copy thereof, obtained or secured by any person in violation of the preceding sections shall not be admissible in evidence in any judicial, quasijudicial, legislative or administrative hearing or investigation.'},
        { A:'Illegal Access', Q:'The access to the whole or any part of a computer system without right.'},
        { A:'Illegal Interception', Q:'Made by technical means without right of any non-public transmission of computer data to, from, or within a computer system including electromagnetic emissions from a computer system carrying such computer data.'},
        { A:'Data Interference', Q:'The intentional or reckless alteration, damaging, deletion or deterioration of computer data, electronic document, or electronic data message, without right, including the introduction or transmission of viruses.'},
        { A:'System Interference', Q:'The intentional alteration or reckless hindering with the functioning of a computer or computer network by inputting, transmitting, damaging, deleting, deteriorating, altering or suppressing computer data or program, electronic document, or electronic data message, without right or authority, including the introduction or transmission of viruses.'},
        { A:'Cyber-squatting', Q:'The acquisition of a domain name over the internet in bad faith to profit, mislead, destroy reputation, and deprive others from registering the same.'},
        { A:'Computer-related Forgery', Q:'The input, alteration, or deletion of any computer data without right resulting in inauthentic data with the intent that it be considered or acted upon for legal purposes as if it were authentic, regardless whether or not the data is directly readable and intelligible.'},
        { A:'Computer-related Fraud', Q:'The unauthorized input, alteration, or deletion of computer data or program or interference in the functioning of a computer system, causing damage thereby with fraudulent intent.'},
        { A:'Computer-related Identity Theft', Q:'The intentional acquisition, use, misuse, transfer, possession, alteration or deletion of identifying information belonging to another, whether natural or juridical, without right.'},
        { A:'Cybersex', Q:'The willful engagement, maintenance, control, or operation, directly or indirectly, of any lascivious exhibition of sexual organs or sexual activity, with the aid of a computer system.'},
        { A:'Child Pornography', Q:'The unlawful or prohibited acts defined and punishable by Republic Act No. 9775 or the Anti-Child Pornography Act of 2009, committed through a computer system.'},
        { A:'Electronic Commerce Act of 2000 or RA 8792', Q:'An act providing for the recognition and use of electronic commercial and non-commercial transactions and documents, penalties for unlawful use thereof and for other purposes.'},
        { A:'E-commerce', Q:'defined as the process of buying and selling goods electronically by consumers and from company to company through computerized business transactions.'},
        { A:'Legal Recognition of Data Messages', Q:' Information shall not be denied legal effect, validity or enforceability solely on the grounds that it is in the data message purporting to give rise to such legal effect, or that it is merely referred to in that electronic data message.'},
        { A:'Legal Recognition of Electronic Documents', Q:'Electronic documents shall have the legal effect, validity or enforceability as any other document or legal writing.'},
        { A:'Libel', Q:'The unlawful or prohibited acts committed through a computer system or any other similar means which may be devised in the future.'}
    ],
    sipp_mod7 = [
        { A:'High-quality Software Systems', Q:'systems that are easy to learn and use because they perform quickly and efficiently; they meet their users’ needs; and they operate safely and reliably so that system downtime is kept to a minimum.'},
        { A:'Software Defect', Q:'It is any error that, if not removed, could cause a software system to fail to meet its users’ needs.'},
        { A:'Software Defect', Q:'The impact of these can be trivial, or it could lead to tragedy.'},
        { A:'Software Quality', Q:'The degree to which a software product meets the needs of its users.'},
        { A:'Quality Management', Q:'focuses on defining, measuring, and refining the quality of the development process and the products developed during its various stages.'},
        { A:'Deliverables', Q:' These products—including statements of requirements, flowcharts, and user documentation—are known as?'},
        { A:'Business Information System', Q:'It is a set of interrelated components—including hardware, software, databases, networks, people, and procedures—that collects and processes data and disseminates the output.'},
        { A:'Decision Support System', Q:'Used to improve decision making in a variety of industries.'},
        { A:'Decision Support System', Q:'Used to develop accurate forecasts of customer demand, recommend stocks and bonds for an investment portfolio, or schedule shift workers in such a way as to minimize cost while meeting customer service goals.'},
        { A:'Software Development Methodology', Q:'A standard, proven work process that enables systems analysts, programmers, project managers, and others to make controlled and orderly progress while developing high-quality software.'},
        { A:'Quality Assurance', Q:'Refers to methods within the development cycle designed to guarantee reliable operation of a product.'},
        { A:'Black-box Testing', Q:'Involves viewing the software unit as a device that has expected input and output behaviors but whose internal workings are unknown.'},
        { A:'Black-box Testing', Q:'It takes place without the tester having any knowledge of the structure or nature of the actual code.'},
        { A:'White-box Testing', Q:'Treats the software unit as a device that has expected input and output behaviors but whose internal workings are known.'},
        { A:'White-box Testing', Q:'Involves testing all possible logic paths through the software unit with thorough knowledge of its logic.'},
        { A:'Product Liability', Q:'The liability of manufacturers, sellers, lessors, and others for injuries caused by defective products is commonly referred to as?'},
        { A:'Warranty', Q:'Assures buyers or lessees that a product meets certain standards of quality.'},
        { A:'Capability Maturity Model Integration', Q:'It is a process-improvement approach that defines the essential elements of effective processes.'},
        { A:'Capability Maturity Model Integration', Q:'Developed by the Software Engineering Institute at Carnegie Mellon.'},
        { A:'Capability Maturity Model Integration', Q:'Defines five levels of software development maturity and identifies the issues that are most critical to software quality and process improvement.'},
        { A:'Initial', Q:'Process is ad hoc and chaotic; organization tends to overcommit and processes are often abandoned during times of crisis.'},
        { A:'Managed', Q:'Projects employ processes and skilled people; status of work products is visible to management at defined points.'},
        { A:'Defined', Q:'Processes are well defined and understood and are described in standards, procedures, tools, and methods; processes are consistent across the organization.'},
        { A:'Quantitatively Managed', Q:'Objectives for quality and process performance are established and are used as criteria in managing projects; specific measures of process performance are collected and statistically analyzed.'},
        { A:'Optimizing', Q:'Organization continually improves its processes; changes are based on a quantitative understanding of its business objectives and performance needs.'}
    ],
    sipp_mod8 = [
        { A:'Social Networking Web Site', Q:'Can creates an online community of Internet users that enables members to break down the barriers of time, distance, and cultural differences.'},
        { A:'Social Networking Web Site', Q:'Allows people to interact with others online by sharing opinions, insights, information, interests, and experiences.'},
        { A:'Facebook, 750M', Q:'Social networking site for keeping up with friends, uploading photos, sharing links and videos, and meeting new people online. (Website, monthly visitors)'},
        { A:'Tumblr, 300M', Q:'Microblogging platform and social network Web site that enables users to post multimedia and other content in short-form blog (Website, monthly visitors)'},
        { A:'Twitter, 250M', Q:'Real-time information service for friends, family members, and coworkers looking to stay connected through the exchange of messages that are a maximum of 140 characters (Website, monthly visitors)'},
        { A:'LinkedIn, 110M', Q:'Business-oriented social networking site used for professional networking; users create a network made up of people they know and trust in business (Website, monthly visitors)'},
        { A:'Pinterest, 86M', Q:'Social networking site that allows members to pin photos, videos, and other items to their pin board to share with others (Website, monthly visitors)'},
        { A:'MySpace, 70M', Q:'General social networking Web site used by teenagers and adults worldwide; allows members to communicate with friends via personal profiles, blogs, and groups, as well as to post photos, music, and videos to their personal pages (Website, monthly visitors)'},
        { A:'Google+, 65M', Q:'Social network operated by Google that integrates social services such as Google Profiles and Google Buzz, and introduces new services such as Circles, Hangouts, Sparks, and Huddles (Website, monthly visitors)'},
        { A:'Instagram, 59M', Q:'Online photo- and video-sharing social networking service (Website, monthly visitors)'},
        { A:'Live Journal, 21M', Q:'Social network where users can keep a blog, journal, or diary; also widely used to post political commentary (Website, monthly visitors)'},
        { A:'Tagged, 25M', Q:'Social network with a focus on helping members meet new people; suggests new friends based on shared interests; allows members to browse people, share tags and virtual gifts, and play games (Website, monthly visitors)'},
        { A:'Orkut, 18M', Q:'Social network for users to meet new and old friends and maintain existing friendships; it is very popular in Brazil and India, where it is one of the most frequently visited sites (Website, monthly visitors)'},
        { A:'Social Network Advertising', Q:'involves the use of social networks to communicate and promote the benefits of products and services.'},
        { A:'Biznik', Q:'Social networking site where entrepreneurs and small-business people.'},
        { A:'LinkedIn', Q:'Site focused on helping professionals build and maintain a list of contacts; frequently used by job seekers and recruiters alike to link professionals with job opportunities.'},
        { A:'Huddle', Q:'Networking site that can be used to manage projects, share files, and collaborate with people both inside and outside a company in a secure manner.'},
        { A:'Direct Advertising', Q:'involves placing banner ads on a social networking Web site.'},
        { A:'Direct Advertising', Q:'An ad can be displayed to every visitor to the Web site, or, by using the information in user profiles, an ad can be directed toward those members who would likely find the product most appealing.'},
        { A:'Advertising Using an Individuals Network of Friends', Q:'There are many ethical issues with this approach, as some people consider this to be exploiting an individual’s personal relationships for the financial benefit of a company.'},
        { A:'Indirect Advertising Through Groups', Q:'Innovative companies are also making use of a marketing technique by creating groups on social networking Web sites that interested users can join by becoming “fans.”'},
        { A:'46', Q:'How many percent of Internet users had used social networks to express their frustration with poor products or services.'},
        { A:'92', Q:'How many percent of respondents either use or plan to use some form of social media—such as Facebook, LinkedIn, or Twitter—in their recruiting.'},
        { A:'89', Q:'Estimated percent of advertisers use free tools such as Facebook, Twitter, or Pinterest to promote their products.'},
        { A:'75', Q:'How many percent of advertisers use paid media such as ads on Facebook or sponsored blog content.'},
        { A:'Cyberbullying', Q:'It is the harassment, torment, humiliation, or threatening of one minor by another minor or group of minors via the Internet or cell phone.'},
        { A:'Cyberstalking', Q:'It is threatening behavior or unwanted advances directed at an adult using the Internet or other forms of online and electronic communications.'}
    ]
];