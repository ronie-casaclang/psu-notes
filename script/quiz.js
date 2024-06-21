// elements
var btnSubmit = document.getElementById('btn-submit');
var closeQuiz = document.getElementById('btn-close');
var quizPanel = document.querySelector('.quiz-panel');
var quizResult = document.querySelector('.quiz-result');
var answerPanel = document.querySelectorAll('.answer-panel');

// variables
var arrCode = [];
var score = 0;
let shuffle = [];

// click Event
closeQuiz.addEventListener('click', ()=>{ closePanel(); });
btnSubmit.addEventListener('click', ()=>{ SubmitQuiz(); });
document.getElementById('takeQuiz').addEventListener('click', ()=>{ TakeQuiz(moduleCode); });


//Functions
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
    }
    quizPanel.style.display = "block";
    window.scrollTo({ top: 0, behavior:"smooth" });
    document.querySelector('.body').style.overflow = "hidden";
}

/* Create Questions & Answers :
1. create an element (li, input, p, div)
2. set element class names
3. append all element inside ol (list)
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

/* Load Quiz Content : 
1. set shuffle array value from shuffleNumber function
2.

*/
function LoadQuiz(arr){
    shuffle = ShuffleNumber(arr.length, 1);
    arrCode = arr;
    for (let i=0; i<arr.length; i++){
        let index = shuffle[i];
        CreateNewQuestion(arr[index].Q, arr[index].A);
    }
    inputColor(dark);
}


/* Close Quiz : 
------------------------------
1. scroll to top of quiz panel
2. reset score to 0
3. hide quiz result
4. hide quiz panel
5. display again the scroll/overflow of body/module
6. enable submit button
7. repeat til the end of answer_input
8. remove value of answer input * 
9. enable answer input * 
10. hide all answer * 
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

/* Submit Quiz : 
------------------------------
1. check the result of quiz with array_code
2. display quiz result
3. scroll quiz panel to top
4. disable submit button  
*/
function SubmitQuiz(){
    CheckQuiz(arrCode);
    quizResult.style.display = "flex";
    quizPanel.scrollTo({ top: 0, behavior:"smooth" });
    btnSubmit.disabled = true;
}

/* Check Quiz :
------------------------------
1. repeat til end of array(arr)
2. set index as shuffled number from shuffle[array]
3. compare arr[value] into answer_input[value] both converted lowercase
4. increment score by 1
5. set answer bg_color into green
6. if false, set answer bg_color into red
7. display correct answer *
8. disable answer input *
9. set and get passing score
10. set quiz result messages
11. set quiz result bg_color either (green/red)
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

/* Define Similarity :
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

/* Shuffle In-between Number :
------------------------------
1. create container for shuffle_number
2. repeat til container will not reach maximum limit
3. get random_number from the ranges of (max-min)
4. when container is empty, then insert random_number into it
5. compare if not similar from container[value] into random_number, then insert random_number into it
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


/* Create List of Modules for IAS :
1. set module code
2. set module answers
3. set module questions
*/
var modules = [
    ias_mod4 = [
        { A:'3-factor Authentication', Q:'Authenticates the user using what the user is; and, this usually means a body-part that can identify an individual'},
        { A:'Data Loss Prevention', Q:'Can stop people from uploading, forwarding, or even printing critical information in an unsafe manner'},
        { A:'Virtual Private Network', Q:'Encrypts the connection from an endpoint to a network, often over the Internet. Typically, it uses IPsec or Secure Sockets Layer to authenticate the communication between device and network.'},
        { A:'Email Security', Q:'Blocks incoming attacks and controls outbound messages to prevent the loss of sensitive data'},
        { A:'Port Scanner', Q:'Designed to probe a server or host for open ports. Such an application may be used by administrators to verify security policies of their networks and by attackers to identify network services running on a host and exploit vulnerabilities'},
        { A:'Security Information Event Management', Q:'These products come in various forms, including physical and virtual appliances and server software'},
        { A:'Web Security', Q:'Will control your staff\'s web use, block web-based threats, and deny access to malicious websites. It will protect your web gateway on site or in the cloud.'},
        { A:'Behavioral Analytics', Q:'Automatically discern activities that deviate from the norm. Your security team can then better identify indicators of compromise that pose a potential problem and quickly remediate threats.'},
        { A:'Network Security', Q:'Policies and practices adopted to prevent and monitor unauthorized access,misuse, modification, or denial of a computer network and/or network-accessible resources.'},
        { A:'SQL Injection', Q:'Used to attack data-driven applications, and will exploit a security vulnerability in an application\'s software'},
        { A:'Cross-site Scripting', Q:'A type of security vulnerability typically found in web applications, it may be used by attackers to bypass access controls such as the same-origin policy.'},
        { A:'Network Segmentation', Q:'You can assign access rights based on role, location, and more so that the right level of access is given to the right people and suspicious devices are contained and remediated.'},
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
        { A:'Hashing', Q:'A mathematical operation that converts data into a unique number generated from a string of text. The output is known as message digest'},
        { A:'Steganography', Q:'Designed to be hidden from a third party. It is data hidden within data, and also an encryption technique that can be used as an extra-secure method in which to protect data.'},
        { A:'Non-repudiation', Q:'It cannot disown the content and a transaction done online cannot be disowned by its originator.'},
        { A:'El Gamel', Q:'Digital Signatures and keys are exchanged through this logic.'},
        { A:'Digital Signature Algorithm', Q:'It will only used in digital signing.'},
        { A:'Rivest Shamir Adleman', Q:'It is uses for Encryption and Digital Signature.'},
        { A:'Diffie-Hellman Key Agreement', Q:'This was sharing key for exchange of information confidently.'},
        { A:'Data Encryption Standard', Q:'It is used across a wide range of applications, from ATM encryption to email privacy and secure remote access.'},
        { A:'David Kahn', Q:'The first people to systematically document cryptanalytic methods'},
        { A:'Symmetric-key Cryptography', Q:'Refers to encryption methods in which both the sender and receiver share the same key '},
        { A:'Steganography', Q:'More modern examples the use of invisible ink, microdots, and digital watermarks to conceal information'},
        { A:'Kryptos and Graphein', Q:'The term cryptography came from two ancient Greek words'},
        { A:'Data Encryption Standard', Q:'Block cipher designs that have been designated cryptography standards by the US government. Despite its deprecation as an official standard, still remains quite popular'},
        { A:'Confidentiality', Q:'This is achieved by sending critical information by encrypting it with the public key of the receiver and the receiver decrypting it with his own private key'},
        { A:'Symmetric Encryption', Q:'Uses One key for encryption and decryption.'},
        { A:'Asymmetric Encryption', Q:'Only the encrypted data is exchanged and the public key is available for anyone.'},
        { A:'Hashing', Q:'Best used for sending passwords, files and for searching..'},
        { A:'Elliptic Curve Cryptography', Q:'Functions are similar to RSA and it caters to cell devices.'},
        { A:'Cryptography', Q:'Exists at the intersection of the disciplines of mathematics, computer science, electrical engineering, communication science, and physics.'},
        { A:'Cryptographic Algorithms', Q:'Designed around computational hardness assumptions, making such algorithms hard to break in actual practice by any adversary.'}
    ],
    ias_mod6 = [
        { A:'Firewall', Q:'A network security device that monitors incoming and outgoing network traffic and decides whether to allow or block specific traffic based on a defined set of security rules.'},
        { A:'Proxy Firewall', Q:'It serves as the gateway from one network to another for a specific application. Proxy servers can provide additional functionality such as content caching and security by preventing direct connections from outside the network.'},
        { A:'Stateful Inspection Firewall', Q:'Allows or blocks traffic based on state, port, and protocol. It monitors all activity from the opening of a connection until it is closed.'},
        { A:'Unified Threat Management Firewall', Q:'Typically combines, in a loosely coupled way, the functions of a stateful inspection firewall with intrusion prevention and antivirus.'},
        { A:'Next Generation Firewall', Q:'Most companies are deploying it to block modern threats such as advanced malware and application-layer attacks.'},
        { A:'Threat-focused NGFW', Q:'This also provide advanced threat detection and remediation.'},
        { A:'Virtual Firewall', Q:'It is often a key component in software-defined networks (SDN).'},
        { A:'Virtual Firewall', Q:'Typically deployed as appliance in a private cloud or public cloud to monitor and secure traffic across networks.'},
        { A:'Static Packet Inspection', Q:'Controls access to a network by analyzing the incoming and outgoing packets and letting them pass or halting them based on the IP addresses of the source and destination.'},
        { A:'Stateful Firewall', Q:'It is a computer or router that can monitor and filter the traffic coming across it dynamically.'},
        { A:'3rd Generation Hardware Firewall', Q:'Maintain records of all connections passing through the firewall, known as stateful packet inspection.'},
        { A:'Stateful Packet Inspection', Q:'It used when security is preferred over speed.'},
        { A:'Network Address Translate', Q:'It is a router function that enables public and private network connections and allows single IP address communication.'},
        { A:'Network Address Translate', Q:'It was introduced as an effective, timely solution to heavy network volume traffic.'},
        { A:'Port-restricted-cone NAT', Q:'Like an address restricted cone NAT, but the restriction includes port numbers.'},
        { A:'Symmetric NAT', Q:'Each request from the same internal IP address and port to a specific destination IP address and port is mapped to a unique external source IP address and port.'},
        { A:'Proxy Firewall', Q:'It is a network security system that protects network resources by filtering messages at the application layer.'},
        { A:'Proxy Firewall', Q:'Considered to be the most secure type of firewall because they prevent direct network contact with other systems.'},
        { A:'Network Address Translate', Q:'It is a method of remapping an IP address space into another by modifying network address information in the IP header of packets while they are in transit across a traffic routing device.'},
        { A:'Firewall', Q:'They establish a barrier between secured and controlled internal networks that can be trusted and untrusted outside networks, such as the Internet.'}
    ],
    ias_mod7 = [
        { A:'Host', Q:'In networking, any device with an IP address is called?'},
        { A:'Host Hardening', Q:'It is the process of protecting a host against attacks.'},
        { A:'Baselines', Q:'Is a set of specific actions to be taken to harden all hosts of a particular type and of particular versions within each type.'},
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
        { A:'Baselines', Q:'You also need this for servers with different functions, such as webservers (Apache, IIS, nginx, etc.) and e-mail servers (Sendmail, Microsoft Exchange, Exim, etc.).'},        
        { A:'Graphical User Interface', Q:'Users spend most time working on this interface.'},
        { A:'WWW Root', Q:'Particularly owned by a webserver.'},
        { A:'E-Commerce Server', Q:'The webmaster or administrator often has no control over the security of other systems.'}        
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
    ]
];