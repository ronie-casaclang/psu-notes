//public var - (1reference: quiz.takeQuiz(Click))
var moduleCode = '';


/* Display Active Module
1. set moduleCode as code (public variable)
2. set active module button bgcolor
3. set content value from (ModuleContent())
4. set module title as (Module #)
5. set quiz title as (QUIZ - Module #)
6. scroll window into top
*/
function DisplayModule(index, code, num){
    moduleCode = code;
    SetActiveModule(index);
    document.querySelector('.content').innerHTML = ModuleContent(code);
    document.querySelector('.module-title').innerText = "Module " + num; 
    document.querySelector('.quiz-title').innerText = "QUIZ - Module " + num;
    window.scrollTo({ top: 0, behavior:"smooth" });
}


/* Set Active Module : (1reference: DisplayModule())
1. create btnModule as array from class (.module-select)
2. set all btnModule bgcolor (transparent)
3. set btnModule specified index bgcolor (rgba(219, 219, 219, 0.50)
*/
function SetActiveModule(index){
    var btnModule = document.querySelectorAll(".module-select");
    for (let i=0; i<btnModule.length; i++)
        btnModule[i].style.background = "transparent";
    btnModule[index].style.background = "rgba(219, 219, 219, 0.50)";
}


/* Set Module Content : (1reference: DisplayModule())
1. get condition code
2. return content from true condition
3. else, return Empty Module
*/
function ModuleContent(code){
    switch(code)
    {
        case 'ias_mod4': return ` 
            <h2 style="color:goldenrod"> COMPUTER NETWORK SECURITY</h2>
                    <br>
                    <h3>Network Security</h3>
                    <ul>
                        <li>policies and practices adapted to prevent unathorize access.</li>
                        <li>involves authorization of accessing data to the network</li>
                    </ul>
                    <br>
                    <h3>User Aunthentication</h3>
                    <ol>
                        <li><b>One-factor</b> - only username and password</li>
                        <li><b>Two-factor</b> - uses device, smartphone, ATM, security token, dongle, more...</li>
                        <li><b>Three-factor</b> - uses body part; fingerprint, retinal scan, and more.</li>
                    </ol>
                    <br>
                    <h3>Firewall</h3>
                    <ul>
                        <li>enforces access policies, what accessed by network users.</li>
                        <li>put barrier between internal and outer network.</li>
                        <li>it can be a hardware, software, or both.</li>
                    </ul>
                    <br>
                    <h3>Security Measures</h3>
                    <ol>
                        <li><b>Email Security</b> <ul> blocks incoming attacks and controls outbound messages.</ul></li><br>
                        <li><b>Anti-virus or Anti-malware Software </b><ul> "Malware," short for "malicious software," scan for malware.</ul></li><br>
                        <li><b>Network Segmentation</b><ul> can assign access rights based on role, location, and more. </ul></li><br>
                        <li><b>Application Security</b><ul> encompasses the hardware, software, and processes you use to close those holes</ul></li><br>
                        <li><b>Behavioral Security</b><ul> detect abnormal network behavior, you must know what normal behavior looks like.</ul></li><br>
                        <li><b>Cloud Security</b><ul> a broad set of technologies, policies, and applications applied to defend online IP, services, applications, and other imperative data.</ul></li><br>
                        <li><b>Data Loss Prevention (DLP)</b><ul> can stop people from uploading, forwarding, or even printing critical information in an unsafe manner.</ul></li><br>
                        <li><b>Intrusion Prevention Systems (IPS)</b><ul> scans network traffic to actively block attacks.</ul></li><br>
                        <li><b>Mobile Device Security</b><ul> Cybercriminals are increasingly targeting mobile devices and apps. You will need to configure their connections to keep network traffic private.</ul></li><br>
                        <li><b>Security Information Event Management (SIEM)</b><ul> These products come in various forms, including physical and virtual appliances and server software.</ul></li><br>
                        <li><b>Virtual Private Network (VPN)</b><ul> encrypts the connection from an endpoint to a network, often over the Internet. Typically, a remote-access VPN uses IPsec or Secure Sockets Layer to authenticate the communication between device and network.</ul></li><br>
                        <li><b>Web Security</b><ul> will control your staff's web use, block web-based threats, and deny access to malicious websites. It will protect your web gateway on site or in the cloud.</ul></li><br>
                        <li><b>Wireless Security</b><ul> Wireless networks are not as secure as wired ones. To prevent an exploit from taking hold, you need products specifically designed to protect a wireless network.</ul></li>
                    </ol>
                    <br>
                    <h3>Computer Network Attacks</h3>
                    <ol>
                        <li><b><u>Passive attacks </u></b> - when a network intruder intercepts data traveling through the network.</li> <br>
                        <li><b><u>Active attacks </u></b> - when an intruder initiates commands to disrupt the network's normal operation or to conduct reconnaissance and lateral movements to find and gain access to assets available via the network.</li>
                    </ol>
                    <br>
                    <p><i>Examples of passive attacks to computer networks: </i></p>
                    <ul>
                        <li><b>Wiretapping </b> - monitoring of telephone and Internet-based conversations by a third party, often by covert means.</li><br>
                        <li><b>Port scanner </b> - an application designed to probe a server or host for open ports.</li><br>
                        <li><b>Idle scan </b> - The idle scan is a TCP port scan method that consists of sending spoofed packets to a computer to find out what services are available.</li><br>
                        <li><b>Encryption </b> - this process converts the original representation of the information, known as plaintext, into an alternative form known as ciphertext.</li>                     
                    </ul>
                    <br>
                    <p><i>Examples of active attacks to computer networks: </i></p>
                    <ul>
                        <li><b>A computer virus </b> - computer virus is a type of computer program that, when executed, replicates itself by modifying other computer programs and inserting its own code.</li><br>
                        <li><b>Eavsdropping </b> - the act of secretly or stealthily listening to the private conversation or communications of others without their consent in order to gather information.</li><br>
                        <li><b>Denial-of-Service attacks </b> - a cyber-attack in which the perpetrator seeks to make a machine or network resource unavailable to its intended users by temporarily or indefinitely disrupting services of a host connected to the Internet.</li><br>
                        <li><b>DNS spoofing </b> -  also referred to as DNS cache poisoning, is a form of computer security hacking in which corrupt Domain Name System data is introduced into the DNS resolver's cache, causing the name server to return an incorrect result record, e.g. an IP address.</li><br>
                        <li><b>SQL injection </b> - is a code injection technique, used to attack data-driven applications, in which malicious SQL statements are inserted into an entry field for execution.</li><br>
                        <li><b>Phishing </b> - is the fraudulent attempt to obtain sensitive information or data, such as usernames, passwords and credit card details, by disguising oneself as a trustworthy entity in an electronic communication.</li><br>
                        <li><b>Cross-site scripting (XSS) </b> - is a type of security vulnerability typically found in web applications. XSS attacks enable attackers to inject client-side scripts into web pages viewed by other users.</li><br>                          
                    </ul>
            `;
        case 'ias_mod5': return ` 
            <h2 style="color:goldenrod"> CRYPTOGRAPHY </h2>
                    <br>
                    <h3>Cryptography</h3>
                    <ul>
                        <li> came from two ancient Greek words: kyrptos which means “hidden” and graphein which means “to write.”</li>
                        <li> techniques for secure communication in the presence of third parties called adversaries</li>
                        <li> constructing and analyzing protocols that prevent third parties or the public from reading private messages.</li>
                        <li> modern cryptography exists at the intersection of the disciplines of mathematics, computer science, electrical engineering, communication science, and physics</li>
                        <li> synonymous with encryption, converting information from a readable state to unintelligible nonsense.</li>
                        <li> cryptography literature often uses the names <br><b> Alice ("A") </b> for the sender, <br><b> Bob ("B") </b> for the intended recipient, and <br><b> Eve ("eavesdropper") </b> for the adversary.</li>
                    </ul>
                    <br>
                    <p><i>The following aspects of information security are central to modern cryptography: </i></p>
                    <ol>
                        <li>data confidentiality,</li>
                        <li>data integrity,</li>
                        <li>authentication, and</li>
                        <li>non-repudiation.</li>                     
                    </ol>
                    <br>
                    <h3>Modern Cryptography</h3>
                    <ul>
                        <li> modern cryptography exists at the intersection of the disciplines of mathematics, computer science, electrical engineering, communication science, and physics</li>
                        <li> heavily based on mathematical theory and computer science practice.</li>
                        <li> <b>cryptographic algorithms</b> are designed around computational hardness assumptions, making such algorithms hard to break in actual practice by any adversary.</li>
                    </ul>
                    </ul>
                    <br>
                    <h3>Classic Cryptography (Simple Codes) </h3>
                    <ul>
                        <li> <b><u>Transposition ciphers </u></b> - which rearrange the order of letters in a message.</li>
                        <li> <b><u>Substitution ciphers </u></b> - which systematically replace letters or groups of letters with other letters or groups of letters.</li>
                    </ul>
                    <br>
                    <p><i> Some famous examples are : </i></p>
                    <ul>
                        <li> <b>Caesar cipher</b> - each letter in the plaintext was replaced by a letter some fixed number of positions further down the alphabet.</li>
                        <li> <b>Scytale transposition cipher </u></b> - claimed to have been used by the Spartan military</li>
                        <li> <b>Steganography</b> - hiding the existence of a message to keep it confidential (first developed in ancient times).</li>
                    </ul>
                    <br>
                    <h3> David Kahn</h3>
                    <ul>
                        <li> he notes in <i><b>The Codebreakers</i></b> that modern cryptology originated among the Arabs, <i>the first people to systematically document cryptanalytic methods.</i></li>
                    </ul>
                    <br>
                    <h3> Al-Khalil </h3>
                    <ul>
                        <li> wrote the <i><b>Book of Cryptographic Messages</i></b>, which contains the first use of permutations and combinations to list all possible Arabic words with and without vowels.</li>
                    </ul>
                    <br>
                    <br>
                    <h3> Symmetric Encryption </h3>
                    <ul>
                        <li> Symmetric-key cryptography refers to encryption methods in which both the sender and receiver share the same key.</li>
                        <li> This was the only kind of encryption publicly known until June 1976.</li>
                        <li> Implemented as either block ciphers or stream ciphers</li>
                        <li> <b> Data Encryption Standard (DES) : </b></li>
                        <ul>
                            <li> The DES and Advanced Encryption Standard (AES) are block cipher designs that have been designated cryptography standards by the US government</li>
                            <li> Despite its deprecation as an official standard, DES remains quite popular</li>
                            <li> it is used across a wide range of applications, from ATM encryption to e-mail privacy and secure remote access</li>
                        </ul>
                    </ul>
                    <br>
                    <h3> Asymmetric Encryption </h3>
                    <ul>
                        <li> Also called as public key cryptography, uses private and public keys for encryption and decryption of the data.</li>
                        <li> The keys are simply large numbers which are paired together however they are asymmetric which means they are not identical.</li>
                        <li> Public Key is one of the key in the pair and can be shared with everyone</li>
                        <li> Private key is the other key in the pair and is kept secret.</li>
                        <li> Any key can be used to encrypt a message then the other key which is not used for encryption is used for decryption.</li>
                        <li> Public key and Private keys are generated in pairs randomly, using an algorithm and the keys have a mathematical relationship with each other.</li>
                        <li> The key should be longer in length (128 bits, 256 bits) to make it stronger and make it impossible to break the key even if other paired key is known.</li>
                        <li> The number of possible keys increases proportionally with the key length and hence cracking it also becomes tougher.</li>
                        <li> The data is encrypted using any one of the keys and decrypted with the other.</li>
                    </ul>
                    <br>
                    <p><i>The algorithm used in asymmetric encryption are : </i></p>
                    <table style="border: 1px solid; border-collapse:collapse">
                        <tr style="border: 1px solid">
                            <th style="border: 1px solid"> Name </th>
                            <th> Description </th>
                        </tr>
                        <tr>
                            <td style="border: 1px solid"> Diffie-Hellman Key Agreement </td>
                            <td> Sharing key for exchange of information confidently </td>
                        </tr>
                        <tr style="border: 1px solid">
                            <td style="border: 1px solid"> RSA (Rivest Shamir Adleman) </td>
                            <td> Encryption and Digital Signature </td>
                        </tr>
                        <tr style="border: 1px solid">
                            <td style="border: 1px solid"> ECC (Elliptic Curve Cryptography) </td>
                            <td> Functions are similar to RSA and it caters to cell devices.</td>
                        </tr>
                        <tr style="border: 1px solid">
                            <td style="border: 1px solid"> El Gamel</td>
                            <td> Digital Signatures and keys are exchanged through this logic.</td>
                        </tr>
                        <tr style="border: 1px solid">
                            <td style="border: 1px solid"> DSA (Digital Signature Algorithm)  </td>
                            <td> Used only in digital signing.</td>
                        </tr>
                    </table>
                    <br>
                    <p><i>Below are the different applications of Asymmetric Encryption </i></p>
                    <ul>
                        <li><b>Confidentiality</b> - this is achieved by sending critical information by encrypting it with the public key of the receiver and the receiver decrypting it with his own private key</li><br>
                        <li><b>Authenticity using Digital Signatures</b> - a sender attaches his private key to the message as a digital signature and exchange with the receiver.</li><br>
                        <li><b>Integrity of Information Exchange</b> - one way hash of the data to be exchanged is created and encrypted using the private key of the sender</li><br>
                        <li><b>Non-repudiation</b> - the digital signature encryption tool in place, the owner of a document or information who exchanged it with others, cannot disown the content and a transaction done online cannot be disowned by its originator.</li>
                    </ul>
                    <br>
                    <p><i> Difference between Symmetric and Asymmetric encryption : </i></p>
                    <table style="border: 1px solid; border-collapse:collapse">
                        <tr style="border: 1px solid">
                            <th style="border: 1px solid;"> Symmetric </th>
                            <th> Asymmetric </th>
                        </tr>
                        <tr>
                            <td style="border: 1px solid"> Uses One key for encryption and decryption. </td>
                            <td> Uses two keys, one for encryption and the other for decryption. </td>
                        </tr>
                        <tr style="border: 1px solid">
                            <td style="border: 1px solid"> Encrypted data and keys are exchanged. </td>
                            <td> Only the encrypted data is exchanged and the public key is available for anyone. </td>
                        </tr>
                        <tr style="border: 1px solid">
                            <td style="border: 1px solid"> Quicker </td>
                            <td> Slow </td>
                        </tr>
                        <tr style="border: 1px solid">
                            <td style="border: 1px solid"> Unmanageable if no of the participants become higher</td>
                            <td> Operations can be streamlined with pairs of public and private keys.</td>
                        </tr>
                        <tr style="border: 1px solid">
                            <td style="border: 1px solid"> Risk in exchanging the key in the network channel.</td>
                            <td> Private key is not exchanged. </td>
                        </tr>
                    </table>
                    <br>
                    <h3>Steganography</h3>
                    <ul>
                        <li> the data hidden within data</li>
                        <li> encryption technique that can be used along with cryptography as an extra-secure method in which to protect data</li>
                        <li> can be applied to images, a video file or an audio file</li>
                        <li> designed to be hidden from a third party</li>
                    </ul>
                    <br>
                    <h3> Hashing </h3>
                    <ul>
                        <li> mathematical operation that converts data into a unique number generated from a string of text</li>
                        <li> output is known as message digest or hash</li>
                        <li> input data can have an arbitrary length but the output is always fixed </li>
                        <li> it is not possible to convert it back to the original data</li>
                        <li> easier to perform, but it is difficult to reverse</li>
                        <li> MD5, SHA1, and SHA-256 are some hashing functions</li>
                    </ul>
                    <br>
                    <p><i> Difference between hashing and encryption : </i></p>
                    <table style="border: 1px solid; border-collapse:collapse">
                        <tr style="border: 1px solid">
                            <th style="border: 1px solid;"> Hashing </th>
                            <th> Encryption </th>
                        </tr>
                        <tr>
                            <td style="border: 1px solid"> cannot be converted back to the original message </td>
                            <td> can be converted back to the original message </td>
                        </tr>
                        <tr style="border: 1px solid">
                            <td style="border: 1px solid"> does not use any keys </td>
                            <td> uses keys </td>
                        </tr>
                        <tr style="border: 1px solid">
                            <td style="border: 1px solid"> verify data </td>
                            <td> transmit data securely  </td>
                        </tr>
                        <tr style="border: 1px solid">
                            <td style="border: 1px solid"> used for sending passwords, files and for searching </td>
                            <td> transferring sensitive business information, etc.</td>
                        </tr>
                    </table>
                    <br>
                    <br>
            `;
        case 'ias_mod6': return ` 
            <h2 style="color:goldenrod"> INTRODUCTION TO FIREWALLS</h2>
                    <br>
                    <h3>Firewall</h3>
                    <ul>
                        <li>a network security device that monitors incoming and outgoing network traffic and decides whether to allow or block specific traffic based on a defined set of security rules.</li>
                        <li>establish a barrier between secured and controlled internal networks that can be trusted and untrusted outside networks, such as the Internet.</li>
                        <li>can be hardware, software, or both. The following are the types of firewalls.</li>
                        <li>enforces access policies, what accessed by network users.</li>
                        <li>put barrier between internal and outer network.</li>
                        <li>it can be a hardware, software, or both.</li>
                    </ul>
                    <br>
                    <h3>Types of Firewalls</h3>
                    <ol>
                        <li><b>Proxy firewall</b> <ul> serves as the gateway from one network to another for a specific application. Proxy servers can provide additional functionality such as content caching and security by preventing direct connections from outside the network.</ul></li><br>
                        <li><b>Stateful inspection firewall </b><ul> allows or blocks traffic based on state, port, and protocol. It monitors all activity from the opening of a connection until it is closed.</ul></li><br>
                        <li><b>Unified Threat Management (UTM) firewall</b><ul> typically combines, in a loosely coupled way, the functions of a stateful inspection firewall with intrusion prevention and antivirus. It may also include additional services and often cloud management. UTMs focus on simplicity and ease of use. </ul></li><br>
                        <li><b>Next-generation Firewall (NGFW)</b><ul> Most companies are deploying next-generation firewalls to block modern threats such as advanced malware and application-layer attacks.</ul></li><br>
                        <li><b>Threat-focused NGFW</b><ul> These firewalls include all the capabilities of a traditional NGFW and also provide advanced threat detection and remediation..</ul></li><br>
                        <li><b>Virtual Firewall.</b><ul> typically deployed as a virtual appliance in a private cloud or public cloud  to monitor and secure traffic across physical and virtual networks. A virtual firewall is often a key component in software-defined networks (SDN).</ul></li>
                    </ol>
                    <br>
                    <h3>Static Packet Filtering</h3>
                    <ul>
                        <li>firewall technique that controls access to a network by analyzing the incoming and outgoing packets and letting them pass or halting them based on the IP addresses of the source and destination.</li> <br>                        
                    </ul>
                    <h3>Stateful Packet Inspection</h3>
                    <ul>
                        <li> is a computer or router that can monitor and filter the traffic coming across it dynamically, an architecture known as stateful packet inspection (SPI) or dynamic packet filtering.</li> <br>
                        <li> stateful firewalls are used when security is preferred over speed.</li> <br> 
                        <li> 3rd generation Hardware Firewalls maintain records of all connections passing through the firewall, known as stateful packet inspection.</li> <br>
                        <li> retain the ability to filter packets and also include a more sophisticated feature in monitoring and updating a dynamic state connection table, this provides a more advanced level of security.</li> <br>
                        <li> it require more processing power, and of course this would increase the cost of the product as well.</li> <br>                        
                    </ul>
                    <br>
                    <h3>Network Address Translation (NAT)</h3>
                    <ul>
                        <li> router function that enables public and private network connections and allows single IP address communication.</li> <br>
                        <li> NAT was introduced as an effective, timely solution to heavy network volume traffic.</li> <br>
                        <li> resolve problem to manages multiple client requests over one private IP address required by public networks.</li> <br>       
                        <li> method of remapping an IP address space into another by modifying network address information in the IP header of packets while they are in transit across a traffic routing device..</li> <br>                        
                    </ul>
                    <br>
                    <p><i>The following are classifications of NAT implementations: </i></p>
                    <ul>
                        <li><b>Full-cone NAT (one-to-one NAT) </b> - Any external host can send packets to iAddr:iPort by sending packets to eAddr:ePort.</li><br>
                        <li><b>(Address)-restricted-cone NAT </b> - An external host (hAddr:any) can send packets to iAddr:iPort by sending packets to eAddr:ePort only if iAddr:iPort has previously sent a packet to hAddr:any. "Any" means the port number doesn't matter.</li><br>
                        <li><b>Port-restricted cone NAT </b> - An external host (hAddr:hPort) can send packets to iAddr:iPort by sending packets to eAddr:ePort only if iAddr:iPort has previously sent a packet to hAddr:hPort..</li><br>
                        <li><b>Symmetric NAT </b> - Each request from the same internal IP address and port to a specific destination IP address and port is mapped to a unique external source IP address and port.</li>                     
                    </ul>
                    <br>
                    <h3> Proxy Firewall</h3>
                    <ul>
                        <li> network security system that protects network resources by filtering messages at the application layer.</li><br>
                        <li> also be called an application firewall or gateway firewall.</li><br>
                        <li> acts as an intermediary between in-house clients and servers on the Internet.</li><br>
                        <li> also monitors incoming traffic for layer 7 protocols, such as HTTP and FTP.</li><br>
                        <li> considered to be the most secure type of firewall because they prevent direct network contact with other systems.</li><br>                        
                    </ul>
            `;
        case 'ias_mod7': return ` 
            <h2 style="color:goldenrod"> INTRODUCTION TO HOST HARDENING AND APPLICATION SECURITY </h2>
                <br>
                <h3>Host</h3>
                <ul>
                    <li> In networking, any device with an IP address is host. </li>
                    <li> the term host includes servers, clients, routers, firewalls, and even many mobile phones.</li>
                </ul>
                <br>
                <h3>Host Hardening </h3>
                <ul>
                    <li> Process of protecting a host against attacks </li>
                    <li> Hardening is not a single protection but rather a number of protections that often have little in common with each other. </li>
                </ul>
                <br>
                <p><i> Among these protections are the following : </i></p>
                <ul>
                    <li> Back up the host regularly. </li>
                    <li> Restrict physical access to the host. </li>
                    <li> Install the operating system with secure configuration options. In particular, be sure that all default passwords are replaced by strong passwords. </li>
                    <li> Minimize the number of applications and operating system services that run on the host to reduce the ability of hackers to take over the host by compromising an application or service.</li>
                    <li> Harden all remaining applications on the host.</li>
                    <li> Download and install patches for known operating system vulnerabilities</li>
                    <li> Manage users and groups (additions, changes, deletions, etc.).</li>
                    <li> Manage access permissions for users and groups securely.</li>
                    <li> Encrypt data if appropriate.</li>
                    <li> Add a host firewall</li>
                    <li> Read operating system logs regularly to look for suspicious activities.</li>
                    <li> Run vulnerability tests against the system regularly to identify security weaknesses that were not caught in the normal course of installation or operation.</li>
                </ul>
                <br>
                <h3>Security Baselines</h3>
                <ul>
                    <li> set of specific actions to be taken to harden all hosts of a particular type and of particular versions within each type.</li>
                    <li> you need baselines for servers with different functions, such as webservers and e-mail servers.</li>
                    <li> security baselines are like pilot checklists for aircraft. </li>
                </ul>
                <br>
                <h3>Systems Administrators</h3>
                <ul>
                    <li> IT employees who manage individual hosts or groups of hosts.</li>
                    <li> Job of the systems administrator of a particular server to conduct the hardening effort.</li>
                    <li> Systems administrators do not, in general, administer the network. </li>
                </ul>
                <br>
                <h3>Server Operating Systems</h3>
                <ul>
                    <li>Attackers like to focus their efforts on servers because they contain valuable data, are a critical part of corporate information systems, and provide an excellent platform from which they can launch additional attacks. It is important to be familiar with these operating systems and know how to harden them against attacks.</li>
                </ul>
                <br>
                <p><i style="color:dodgerblue"> The Windows Server Operating Systems </i></p>
                <ul>
                    <li>Windows Server</li>
                    <ul>
                        <li>The Microsoft Windows Server operating system</li>
                        <li>Windows NT, 2003, and 2008</li>
                    </ul>
                    <br>
                    <li>Windows Server Security</li>
                    <ul>
                        <li>Has improved over time</li>
                        <li>Intelligently minimize the number of running programs and utilities by asking questions duringinstallation</li>
                        <li>Simple (and usually automatic) to get updates</li>
                        <li>Many other improvements</li>
                        <li>Still many patches to apply, but this is true of other operating systems</li>
                    </ul>
                    <br>
                    <li>Graphical User Interface (GUI)</li>
                    <ul>
                        <li>Looks like client versions of Windows for easy learning and use</li>
                        <li>Most administrative tools under Start / Programs / Administrative Tools</li>
                    </ul>
                    <br>
                    <li>Microsoft Management Consoles (MMCs)</li>
                    <ul>
                        <li>Used by systems administrators to manage a server</li>
                        <li>Standardized organization for ease of learning and use</li>
                        <li>Can add snap-ins for specific functionality</li>
                        <li>Usually located under Programs, Administrative Tools</li>
                    </ul>
                </ul>
                <br>

                <p><i style="color:dodgerblue"> The UNIX Server Operating Systems </i></p>
                <ul>
                    <li>There are many commercial versions of UNIX for large servers</li>
                    <ul>
                        <li>Compatible in the kernel (core part) of the operating system</li>
                        <li>Can generally run the same applications but may run many different management utilities, making cross-learning difficult</li>
                    </ul>
                    <br>
                    <li>Linux is a version of UNIX created for PCs</li>
                    <ul>
                        <li>Distributions include the Linux kernel plus application and programs, usually from the GNU project</li>
                        <li>Each distribution and version needs a different baseline to guide hardeningcost</li>
                        <li>Attractive because Linux is free (or at least inexpensive compared with commercial operating systems)</li>
                        <li>Buy one copy and install it on many servers but may take more labor to administer, making it economically unattractive</li>
                        <li>Has moved beyond PC, to use on servers and some desktops</li>
                    </ul>
                    <br>
                    <li>Multiple user interfaces are available (unlike Windows)</li>
                    <br>
                    <li>Graphical user interfaces (GUIs)</li>
                    <ul>
                        <li>Users spend most time working on a GUI interface</li>
                        <li>Many UNIX vendors have proprietary GUIs</li>
                        <li>Linux has multiple standard GUIs (Gnome, KDE, etc.)</li>
                    </ul>
                    <br>
                    <li>Command line interfaces (CLIs)</li>
                    <ul>
                        <li>At prompts, users type commands</li>
                        <li>Unix CLIs are called shells (Bourne, BASH, etc.)</li>
                        <li>Command-line interfaces are picky about syntax and spacing</li>
                        <li>However, they place a low processing burden on the computer</li>
                        <li>Sets of commands can be stored as a script and replayed when needed</li>
                    </ul>
                </ul>
                <br>

                <h3>Buffer Overflow</h3>
                <ul>
                    <li> most widespread vulnerabilities in application programs.</li>
                    <li> impact can range from nothing to the crashing of the server, or gaining the ability to execute any command on the server.</li>
                </ul>
                <br>
                <h3>Internet Information Server (IIS).</h3>
                <ul>
                    <li> dominates webserver use on Windows Server hosts</li>
                    <li> core Windows Server software and therefore free</li>
                </ul>
                <br>
                <h3>Apache Webserver Program.</h3>
                <ul>
                    <li> dominant software for Linux/Unix</li>
                </ul>
                <br>
                <h3>E-Commerce </h3>
                <ul>
                    <li> <b>e-commerce service</b> - refer to the additional software needed for buying and selling, including online catalogs, shopping carts, checkout functions, connections to back-end databases within the firm, and links to outside organizations, such as banks.</li>
                    <li> <b>e-commerce server</b> - needs to have network access to a number of systems external to itself, including servers within firms and servers outside the firm in merchant banks and companies that check credit card numbers for validity</li>
                    <li> The webmaster or e-commerce administrator often has no control over the security of other systems.</li>
                </ul>
                <br>
                <h3>Website Defacement</h3>
                <ul>
                    <li> taking over a computer and putting up a hacker-produced page instead of the normal home page.</li>                    
                </ul>
                <br>
                <h3>WWW Root</h3>
                <ul>
                    <li> particular directory owned by the webserver</li>                    
                    <li> It is one level down from the computer's true root</li>                    
                </ul>
                <br>
            `;
        
        case 'cs6_mod4.2': return ` 
            <h2 style="color:goldenrod"> USER INTERFACE PROTOTYPING </h2>
                    <br>
                    <h3>Prototype</h3>
                    <ul>
                        <li> An early version of a software system that is used to demonstrate concepts, try out design options, and find out more about the problem and its possible solutions</li>
                        <li> Rapid, iterative development of the prototype is essential so that costs are controlled and system stakeholders can experiment with the prototype early in the software process</li>
                        <li> Can be used in a software development process to help anticipate changes that may be required</li>
                    </ul>
                    <br>
                    <p><i>changes that may be required: </i></p>
                    <ol>
                        <li><b>Requirements Engineering Process </b> - a prototype can help with the elicitation and validation of system requirements.</li>
                        <li><b>System Design Process </b> - a prototype can be used to explore software solutions and in the development of a user interface for the system</li>
                    </ol>
                    <br>
                    <h3>(IEEE) Institute of Electrical and Electronics Engineers </h3>
                    <ul>
                        <li> defines prototyping as, <i>“A type of development in which emphasis is placed on developing prototypes early in the development process to permit early feedback and analysis in support of the development process.”</i></li>
                    </ul>
                    </ul>
                    <br>
                    <h3> Need for Prototyping </h3>
                    <ul>
                        <li> Enables us to explore the problem space with the stakeholders. </li>
                        <li> As a requirements artifact to initially envision the system. </li>
                        <li> As a design artifact that enables us to explore the solution space of your system. </li>
                        <li> A vehicle for you to communicate the possible UI design(s) of your system. </li>
                        <li> A potential foundation from which to continue developing the system. </li>
                    </ul>
                    <br>
                    <p style="color: dodgerblue"><i>Advantage and disadvantages of prototyping : </i></p>
                    <table style="border: 1px solid; border-collapse:collapse; max-width: 700px">
                        <tr style="border: 1px solid">
                            <th style="border: 1px solid"> ADVANTAGES </th>
                            <th> DISADVANTAGES </th>
                        </tr>
                        <tr>
                            <td style="border: 1px solid"> Users can try the system and provide constructive feedback during development </td>
                            <td> Each iteration builds on the previous iteration and further refines the solution. This makes it difficult to reject the initial solution as inappropriate and start over. </td>
                        </tr>
                        <tr style="border: 1px solid">
                            <td style="border: 1px solid"> An operational prototype can be produced in weeks </td>
                            <td> Formal end-of-phase reviews do not occur. Thus, it is very difficult to contain the scope of the prototype. </td>
                        </tr>
                        <tr style="border: 1px solid">
                            <td style="border: 1px solid"> Users become more positive about implementing the system as they see a solution emerging that will meet their needs </td>
                            <td> System documentation is often absent or incomplete,since the primary focus is on development of the prototype.</td>
                        </tr>
                        <tr style="border: 1px solid">
                            <td style="border: 1px solid"> Prototyping enables early detection of errors</td>
                            <td> System backup and recovery, performance, and security issues can be overlooked.</td>
                        </tr>
                    </table>
                    <br>
                    <h2> Prototype Development </h2>
                    <ul>
                        <li><b> Establish Prototype Objectives </b> - The objectives of prototyping should be made explicit from the start of the process. These may be to develop the user interface, to develop a system to validate functional system requirements, or to develop a system to demonstrate the application to managers.</li><br>
                        <li><b> Define Prototype Functionality </b> - The next stage in the process is to decide what to put into and, perhaps more importantly, what to leave out of the prototype system. </li><br>
                        <li><b> Evaluate Prototype </b> - The final stage of the process is prototype evaluation. Provision must be made during this stage for user training, and the prototype objectives should be used to derive a plan for evaluation. Potential users need time to become comfortable with a new system and to settle into a normal pattern of usage. Once they are using the system normally, they then discover requirements errors and omissions. </li>
                    </ul>
                    <br>
                    <h2> Risk in Prototyping </h2>
                    <ul>
                        <li><b> Client May Believe That System is Real </b> - Unrealistic expectations of the progress. </li>
                        <li><b> Implementers Make Poor Choice</b> - Justified in prototype but not in real system, and tempting to build real system same way. </li>
                        <li><b> Prototype is not Identical to the Real System </b> - Users may interact differently due to different response characteristics, and must interpret prototype experience with care. </li>
                    </ul>
                    <br>
                    <p style="color: dodgerblue"><i> The following are the different types of prototyping: </i></p>
                    <br>
                    <h2> 1. THROW AWAY PROTOTYPING </h2>
                    <ul>
                        <li> throwaway prototyping is a model created with the intention of discarding it after the testing process </li>
                        <li> the quickest and cheapest software prototyping method </li>
                        <li> it is developed from the initial requirements but is not used for the final project </li>
                        <li> written specifications of the requirements </li>
                        <li> some developers believe that this type is a waste of time because you don’t use it </li>
                        <li> regardless if prototype is discarded or kept for production, you must use an easy to use language. </li>
                    </ul>
                    <br>
                    <h2> 2. EVOLUTIONARY PROTOTYPING </h2>
                    <ul>
                        <li> considered as the most fundamental form of prototyping </li>
                        <li> main concept is to build a robust prototype and constantly improve it </li>
                        <li> objective to deliver a working system to the end user </li>
                        <li> According to <b>Steve McConnell, </b><i>"evolutionary delivery is a lifecycle model that straddles the ground between evolutionary prototyping and staged delivery."</i></li>
                    </ul>
                    <br>
                    <h2> 3. LOW-FIDELITY PROTOTYPING </h2>
                    <ul>
                        <li> generally limited function, limited interaction prototyping effort </li>
                        <li> constructed to depict concepts, design alternatives and screen layouts </li>
                        <li> intended to demonstrate general look and feel of the interface </li>
                        <li> created to educate, communicate and inform, but not to train, test or serve as a basis for which to code </li>
                        <li> used early in the design cycle to show general conceptual approaches without much investment in development. </li>
                    </ul>
                    <br>
                    <table style="border: 1px solid; border-collapse:collapse">
                        <tr style="border: 1px solid">
                            <th style="border: 1px solid;"> Advantages </th>
                            <th> Disadvantages </th>
                        </tr>
                        <tr>
                            <td style="border: 1px solid"> Lower development cost </td>
                            <td> Limited error checking </td>
                        </tr>
                        <tr style="border: 1px solid">
                            <td style="border: 1px solid"> Evaluate multiple design concept </td>
                            <td> Facilitator driven </td>
                        </tr>
                        <tr style="border: 1px solid">
                            <td style="border: 1px solid"> Useful communication device </td>
                            <td> Limited utility after requirements stablished </td>
                        </tr>
                        <tr style="border: 1px solid">
                            <td style="border: 1px solid"> Address screen layout issue </td>
                            <td> Navigational and flow limitations </td>
                        </tr>
                        <tr style="border: 1px solid">
                            <td style="border: 1px solid"> Useful for identifying requirements </td>
                            <td> Poor detailed specifications to code </td>
                        </tr>
                    </table>
                    <br>
                    <br>
                    <h2> 4. HIGH-FIDELITY PROTOTYPING </h2>
                    <ul>
                        <li> represent the core functionality of the products user interface. </li>
                        <li> fully interactive systems. Users can enter data in entry fields, respond to messages, select icon to open windows and interact with user interface as if it were a real system </li>
                        <li> they trade-off speed for accuracy </li>
                        <li> building high fidelity prototypes consume resources and have high cost. </li>
                    </ul>
                    <br>
                    <table style="border: 1px solid; border-collapse:collapse">
                        <tr style="border: 1px solid">
                            <th style="border: 1px solid;"> Advantage </th>
                            <th> Disadvantage </th>
                        </tr>
                        <tr style="border: 1px solid">
                            <td style="border: 1px solid;"> Complete functionality </td>
                            <td rowspan="2"> More expensive to develop </td>
                        </tr>
                        <tr>
                            <td style="border: 1px solid"> Fully interactive </td>
                            <td> </td>
                        </tr>
                        <tr style="border: 1px solid">
                            <td style="border: 1px solid"> User driven </td>
                            <td rowspan="2"> Time consuming to create </td>
                        </tr>
                        <tr style="border: 1px solid">
                            <td style="border: 1px solid"> Clear definition of navigation </td>
                            <td> </td>
                        </tr>
                        <tr style="border: 1px solid">
                            <td style="border: 1px solid"> Look and feel of final product </td>
                            <td rowspan="2"> Not effective for requirements gathering </td>
                        </tr>
                        <tr style="border: 1px solid">
                            <td style="border: 1px solid"> Use for explorations and tests </td>
                            <td> </td>
                        </tr>
                    </table>
                    <br>
                    <br>
            `;
        case 'cs6_mod5': return ` 
        <h2 style="color:goldenrod"> ARTIFICIAL INTELLIGENCE </h2>
                <br>
                <h3>Artificial Intelligence (AI)</h3>
                <ul>
                    <li> Artificial Intelligence is composed of two words Artificial and Intelligence</li>
                    <li> Artificial defines "man-made," and intelligence defines "thinking power", or “the ability to learn and solve problems” </li>
                    <li> Artificial Intelligence means "a man-made thinking power." </li>
                    <li> Branch of computer science by which we can create intelligent machines which can behave like a human, think like humans, and able to make decisions.</li>                    
                </ul>
                <br>
                <ul style="border: 1px solid; max-width:500px; padding: 5px 3px">
                    <li style="list-style:none" before=">"><b>Intelligence </b> - is the ability to acquire and apply knowledge.</li>
                    <li style="list-style:none"><b>Knowledge </b> - is the information acquired through experience.</li>
                    <li style="list-style:none"><b>Experience </b> - is the knowledge gained through exposure (training). </li>
                </ul>
                <p>Summing the terms up, we get <b>Artificial Intelligence</b> as the <br>
                    <i>“copy of something natural (i.e., human beings) WHO ‟is capable of acquiring and applying the information it has gained through exposure.” </i>
                </p>
                <br>
                <p>Intelligence is composed of:</p>
                <ul>
                    <li>Reasoning</li>
                    <li>Learning</li>
                    <li>Problem Solving</li>
                    <li>Perception</li>
                    <li>Lingustic Intelligence</li>
                </ul>
                <br>
                <p>High-profile examples of AI:</p>
                <ul>
                    <li>autonomous vehicles (such as drones and self-driving cars)</li>
                    <li>medical diagnosis, creating art (such as poetry)</li>
                    <li>proving mathematical theorems</li>
                    <li>playing games (such as Chess or Go) </li>
                    <li>search engines (such as Google search)</li>
                    <li>online assistants (such as Siri)</li>
                    <li>image recognition in photographs</li>
                    <li>spam filtering</li>
                    <li>prediction of judicial decisions and targeting online advertisements</li>
                </ul>
                <br>
                <h2> Machine Learning </h2>
                <ul>
                    <li>The study of computer algorithms that improve automatically through experience.</li>
                    <li>The term machine learning was introduced by <b>Arthur Samuel in 1959.</b></li>
                    <li><b>Neural networks</b> are biologically inspired networks that extract features from the data in a hierarchical fashion. </li>
                    <li>The field of neural networks with several hidden layers is called <b>deep learning.</b></li>
                </ul>
                <br>
                <p> Need for Artificial Intelligence </p>
                <ol>
                    <li> To create expert systems that exhibit intelligent behavior with the capability to learn, demonstrate, explain and advice its users. </li>
                    <li> Helping machines find solutions to complex problems like humans do and applying them as algorithms in a computer-friendly manner. </li>
                </ol>
                <br>
                <p> Goals of Artificial Intelligence </p>
                <ol>
                    <li> Replicate human intelligence </li>
                    <li> Solve Knowledge-intensive tasks  </li>
                    <li> An intelligent connection of perception and action </li>
                    <li> Building a machine which can perform tasks that requires human intelligence such as: </li>
                    <ul>
                        <li>Proving a theorem</li>
                        <li>Playing chess</li>
                        <li>Plan some surgical operation</li>
                        <li>Driving a car in traffic</li>
                    </ul>
                    <li> Creating some system which can exhibit intelligent behavior, learn new things by itself, demonstrate, explain, and can advise to its user. </li>
                </ol>
                <br>
                <p> What Comprises to Artificial Intelligence? </p>
                <ul>
                    <li> Computer Science </li>
                    <li> Psychology </li>
                    <li> Sociologogy </li>
                    <li> Mathematics </li>
                    <li> Neuron Science </li>
                    <li> Philosophy </li>
                    <li> Biology </li>
                </ul>
                <br>

                
                <p style="color: dodgerblue"><i>Advantage and disadvantages of AI : </i></p>
                <table style="border: 1px solid; border-collapse:collapse; max-width: 700px">
                    <tr style="border: 1px solid">
                        <th style="border: 1px solid"> ADVANTAGES </th>
                        <th> DISADVANTAGES </th>
                    </tr>
                    <tr>
                        <td style="border: 1px solid"> High Accuracy with fewer errors </td>
                        <td> High Cost </td>
                    </tr>
                    <tr style="border: 1px solid">
                        <td style="border: 1px solid"> High-Speed  </td>
                        <td> Can't think out of the box </td>
                    </tr>
                    <tr style="border: 1px solid">
                        <td style="border: 1px solid"> High Reliability </td>
                        <td> No feelings and emotions </td>
                    </tr>
                    <tr style="border: 1px solid">
                        <td style="border: 1px solid"> Useful for risky areas </td>
                        <td> Increase dependence on machines</td>
                    </tr>
                    <tr style="border: 1px solid">
                        <td style="border: 1px solid"> Digital Assistant </td>
                        <td rowspan="2"> No Original Creativity </td>
                    </tr>
                    <tr style="border: 1px solid">
                        <td style="border: 1px solid"> Useful as a public utility </td>
                        <td> </td>
                    </tr>
                </table>
                <br>

                <h2> History of AI </h2>
                <p style="color: dodgerblue"><i> A. Maturation of Artificial Intelligence (1943-1952) </i></p>
                <ul>
                    <li><b> 1943 </b> - The first work which is now recognized as AI was done by Warren McCulloch and Walter pits in 1943. They proposed a model of artificial neurons. </li> <br>
                    <li><b> 1949 </b> - Donald Hebb demonstrated an updating rule for modifying the connection strength between neurons. His rule is now called Hebbian learning. </li><br>
                    <li><b> 1950 </b> - The Alan Turing who was an English mathematician and pioneered Machine learning in 1950. Alan Turing publishes "Computing Machinery and Intelligence" in which he proposed a test. The test can check the machine's ability to exhibit intelligent behavior equivalent to human intelligence, called a Turing test. </li><br>
                </ul>
                <p style="color: dodgerblue"><i> B. The birth of Artificial Intelligence (1952-1956)  </i></p>
                <ul>
                    <li><b> 1955 </b> - An Allen Newell and Herbert A. Simon created the "first artificial intelligence program" Which was named "Logic Theorist". This program had proved 38 of 52 Mathematics theorems, and find new and more elegant proofs for some theorems. </li><br>
                    <li><b> 1956 </b> - The word "Artificial Intelligence" first adopted by American Computer scientist John McCarthy at the Dartmouth Conference. For the first time, AI coined as an academic field. At that time high-level computer languages such as FORTRAN, LISP, or COBOL were invented. And the enthusiasm for AI was very high at that time.  </li><br>
                </ul>
                <br>
                <p style="color: dodgerblue"><i> C. The golden years-Early enthusiasm (1956-1974)  </i></p>
                <ul>
                    <li><b> 1966 </b> - The researchers emphasized developing algorithms that can solve mathematical problems. Joseph Weizenbaum created the first chatbot in 1966, which was named as ELIZA </li><br>
                    <li><b> 1972 </b> - The first intelligent humanoid robot was built in Japan which was named WABOT-1. </li><br>
                </ul>
                <br>
                <p style="color: dodgerblue"><i> D. The first AI winter (1974-1980)   </i></p>
                <ul>
                    <li> The duration between the years 1974 to 1980 was the first AI winter duration.  </li><br>
                    <li> AI winter refers to the time period where computer scientists dealt with a severe shortage of funding from the government for AI researches.  </li><br>
                    <li> During AI winters, an interest in publicity on artificial intelligence was decreased.  </li><br>
                </ul>
                <br>
                <p style="color: dodgerblue"><i> E. A boom of AI (1980-1987) </i></p>
                <ul>
                    <li><b> 1980 </b> - After AI winter duration, AI came back with "Expert System". Expert systems were programmed that emulate the decision-making ability of a human expert. </li><br>
                    <li><b> 1980 </b> - the first national conference of the American Association of Artificial Intelligence was held at Stanford University.  </li><br>
                </ul>
                <br>
                <p style="color: dodgerblue"><i> F. The second AI winter (1987-1993)  </i></p>
                <ul>
                    <li> The duration between the years 1987 to 1993 was the second AI Winter duration.  </li><br>
                    <li> Again, Investors and government stopped in funding for AI research due to high cost but not efficient results. </li><br>
                    <li> The expert system such as XCON was very cost-effective.  </li><br>
                </ul>
                <br>
                <p style="color: dodgerblue"><i> G. The emergence of intelligent agents (1993-2011)  </i></p>
                <ul>
                    <li><b> 1997 </b> - In the year 1997, IBM Deep Blue beats world chess champion, Gary Kasparov, and became the first computer to beat a world chess champion.  </li><br>
                    <li><b> 2002 </b> - for the first time, AI entered the home in the form of Roomba, a vacuum cleaner. </li><br>
                    <li><b> 2006 </b> - AI came into the Business world until the year 2006. Companies like Facebook, Twitter, and Netflix also started using AI. </li><br>
                </ul>
                <br>
                <p style="color: dodgerblue"><i> H. Deep learning, big data and artificial general intelligence (2011-present)  </i></p>
                <ul>
                    <li><b> 2011 </b> - In the year 2011, IBM's Watson won jeopardy, a quiz show, where it had to solve complex questions as well as riddles. Watson had proved that it could understand natural language and can solve tricky questions quickly.  </li><br>
                    <li><b> 2012 </b> - Google has launched an Android app feature "Google now", which was able to provide information to the user as a prediction. </li><br>
                    <li><b> 2014 </b> - Chatbot "Eugene Goostman" won a competition in the infamous "Turing test." </li><br>
                    <li><b> 2018 </b> - The "Project Debater" from IBM debated on complex topics with two master debaters and also performed extremely well.  </li><br>
                    <li><b> 2018 </b> - Google has demonstrated an AI program "Duplex" which was a virtual assistant and which had taken hairdresser appointment on call, and the lady on the other side didn't notice that she was talking with the machine.  </li><br>
                </ul>
                <br>
                
                <br>
                <h2> Levels of AI </h2>
                <ol>
                    <li> Rule-Based Systems </li>
                    <li> Context Awareness and Retention  </li>
                    <li> Domain-Specific Expertise </li>
                    <li> Reasoning Machines </li>
                    <li> Self Awareness / Artificial General Interface (AGI) </li>
                    <li> Artificial Superintelligence (ASI) </li>
                    <li> Singularity and Transcendence </li>
                </ol>
                <br>
                <h2> Types of AI </h2>
                <p style="color: dodgerblue"><i> A. Based on Capabilities </i></p>
                <ol>
                    <li> <b> Weak AI or Narrow AI: </b> able to perform a dedicated task with intelligence</li><br>
                    <li> <b> General AI:</b> - could perform any intellectual task with efficiency like a human.</li><br>
                    <li> <b> Super AI:</b> - machines could surpass human intelligence, and can perform any task better than a human with cognitive properties. </li><br>                    
                </ol>
                <p style="color: dodgerblue"><i> B. Based on the functionality </i></p>
                <ol>
                    <li> <b> Reactive Machines: </b> most basic types of Artificial Intelligence. </li><br>
                    <li> <b> Limited Memory: </b> use stored data for a limited time period only. </li><br>
                    <li> <b> Theory of Mind: </b> understand human emotions, people, beliefs, and be able to interact socially like humans. </li><br>
                    <li> <b> Self-Awareness: </b> it is the future of Artificial Intelligence. </li><br>
                </ol>
                <br>
                <h2> Mapping Human Thinking to AI Components </h2>
                <p> Because AI is the science of simulating human thinking, it is possible to map the human thinking stages to the layers or components of AI systems. </p>
                <ul>
                    <li> In the first stage, humans acquire information from their surrounding environments through human senses, such as sight, hearing, smell, taste, and touch, through human organs, such as eyes, ears, and other sensing organs, for example, the hands. </li>
                    <li> The second stage is related to interpreting and evaluating the input data.</li>
                    <li> The third stage is related to taking action or making decisions. </li>
                </ul>
                <br>
                <h2> Influencers of AI </h2>
                <ul>
                    <li> Big data: Structured data versus unstructured data </li>
                    <li> Advancements in computer processing speed and new chip architectures  </li>
                    <li> Cloud computing and APIs </li>
                    <li> The emergence of data science </li>
                </ul>
                <br>
                <h2> Applications of AI </h2>
                <p> Artificial Intelligence has various applications in today's society. AI is making our daily life more comfortable and faster. </p>
                <ol>
                    <li> AI in Agriculture </li>
                    <li> AI in Healthcare </li>
                    <li> AI in Education </li>
                    <li> AI in Finance and E-commerce  </li>
                    <li> AI in Gaming  </li>
                    <li> AI in Data Security  </li>
                    <li> AI in Social Media </li>
                    <li> AI in Travel & Transport </li>
                    <li> AI in the Automotive Industry  </li>
                    <li> AI in Robotics  </li>
                    <li> AI in Entertainment </li>
                </ol>
                <br>
                <h2> AI Tools and Platforms </h2>
                <p>
                    AI platforms are defined as some sort of hardware architecture or software framework (including application frameworks), that allows the software to run. It involves the use of machines to perform the tasks that are performed by human beings. The platform simulates the cognitive function that human minds perform such as problem-solving, learning, reasoning, social intelligence as well as general intelligence.
                </p>
                <br>
                <br>
        `;
        case 'cs6_mod6': return ` 
        <h2 style="color:goldenrod"> INTERNET OF THINGS (IoT) </h2>
                <br>
                <h3>Overview of IoT</h3>
                <p>The most important features of IoT include artificial intelligence, connectivity, sensors, active engagement, and small device use. A brief review of these features is given below:</p>
                <ul>
                    <li> <b> AI </b> - IoT essentially makes virtually anything “smart”, meaning it enhances every aspect of life with the power of data collection, artificial intelligence algorithms, and networks. </li><br>
                    <li> <b> Connectivity </b> - New enabling technologies for networking and specifically IoT networking, mean networks are no longer exclusively tied to major providers. Networks can exist on a much smaller and cheaper scale while still being practical. IoT creates these small networks between its system devices. </li><br>
                    <li> <b> Sensors </b> -  IoT loses its distinction without sensors. They act as defining instruments that transform IoT from a standard passive network of devices into an active system capable of real-world integration.</li><br>
                    <li> <b> Active Engagement </b> - Much of today's interaction with connected technology happens through passive engagement. IoT introduces a new paradigm for active content, product, or service engagement.</li><br>
                    <li> <b> Small Devices </b> - Devices, as predicted, have become smaller, cheaper, and more powerful over time. IoT exploits purpose-built small devices to deliver its precision, scalability, and versatility.</li>
                </ul>
                <br>
                <h3>What is IoT? </h3>
                <p> According to the following : </p>
                <ul>
                    <li><b>Internet Architecture Board\'s (IAB)</b> - IoT is the networking of smart objects, meaning a huge number of devices intelligently communicating in the presence of internet protocol that cannot be directly operated by human beings but exist as components in buildings, vehicles or the environment.</li><br>
                    <li><b>Internet Engineering Task Force (IETF)</b> - IoT is the networking of smart objects in which smart objects have some constraints such as limited bandwidth, power, and processing accessibility for achieving interoperability among smart objects. </li><br>
                    <li><b>Institute of Electrical and Electronics Engineers (IEEE) </b> - IoT is a framework of all things that have a representation in the presence of the internet in such a way that new applications and services enable the interaction in the physical and virtual world in the form of <b>Machine-to-Machine (M2M)</b> communication in the cloud.</li><br>
                    <li><b>Oxford Dictionary </b> - IoT is the interaction of everyday object\'s computing devices through the Internet that enables the sending and receiving of useful data. </li><br>
                    <li><b>2020 Conceptual Framework </b> - the term IoT is expressed through a simple formula such as: <i><code style="background:rgba(240, 240, 0, 0.2); padding:3px"> IoT= Services + Data + Networks + Sensors</code></i></li>
                </ul>
                <br>
                <h3>History of IoT </h3>
                <p>
                    The Internet of Things has not been around for very long. However, there have been visions of machines communicating with one another since the early 1800s. Machines have been providing direct communications since the <b>Telegraph (the first landline)</b> was developed in the 1830s and 1840s. Described as “wireless telegraphy,” the first radio voice transmission took place on June 3, 1900, providing another necessary component for developing the Internet of Things. The development of computers began in the 1950s. 
                </p>
                <p>
                    The Internet, itself a significant component of the IoT, started out as part of <b>DARPA (Defense Advanced Research Projects Agency) in 1962</b> and evolved into <b>ARPANET in 1969.</b> In the 1980s, commercial service providers began supporting public use of ARPANET, allowing it to evolve into our modern Internet. <b>Global Positioning Satellites (GPS)</b> became a reality in early 1993, with the Department of Defense providing a stable, highly functional system of 24 satellites. This was quickly followed by privately owned, commercial satellites being placed in orbit. Satellites and landlines provide basic communications for much of the IoT. One additional and important component in developing a functional IoT was IPV6\'s remarkably intelligent decision to increase address space. 
                </p>
                <p>
                    The Internet of Things, as a concept, wasn\'t officially named until 1999. One of the first examples of an Internet of Things is from the early 1980s and was a <b>Coca Cola machine</b>, located at the Carnegie Melon University. Local programmers would connect by the Internet to the refrigerated appliance, and check to see if there was a drink available and if it was cold, before making the trip.
                </p>
                <p>
                    By the year 2013, the Internet of Things had evolved into a system using multiple technologies, ranging from the Internet to wireless communication and from <b>Micro-Electromechanical Systems (MEMS)</b> to embedded systems. The traditional fields of automation (including the automation of buildings and homes), wireless sensor networks, GPS, control systems, and others, all support the IoT. 
                </p>
                <p>
                    <b>Kevin Ashton</b>, the Executive Director of Auto-ID Labs at MIT, was the first to describe the Internet of Things, during his 1999 speech. Kevin Ashton stated that <b>Radio Frequency Identification (RFID)</b> was a prerequisite for the Internet of Things. He concluded if all devices were “tagged,” computers could manage, track, and inventory them. To some extent, the tagging of things has been achieved through technologies such as digital watermarking, barcodes, and QR codes. Inventory control is one of the more obvious advantages of the Internet of Things.
                </p>
                <br>
                <p style="color: dodgerblue"><i>Advantage and disadvantages of IoT : </i></p>
                <table style="border: 1px solid; border-collapse:collapse; max-width: 700px">
                    <tr style="border: 1px solid">
                        <th style="border: 1px solid"> ADVANTAGES </th>
                        <th> DISADVANTAGES </th>
                    </tr>
                    <tr>
                        <td style="border: 1px solid"> Improved Customer Engagement </td>
                        <td> As the number of connected devices increases and more information is shared between devices, the potential that a hacker could steal confidential information also increases. </td>
                    </tr>
                    <tr style="border: 1px solid">
                        <td style="border: 1px solid"> Technology Optimization   </td>
                        <td> If there\'s a bug in the system, it\'s likely that every connected device will become corrupted.  </td>
                    </tr>
                    <tr style="border: 1px solid">
                        <td style="border: 1px solid"> Reduced Waste </td>
                        <td> Since there\'s no international standard of compatibility for IoT, it\'s difficult for devices from different manufacturers to communicate with each other. </td>
                    </tr>
                    <tr style="border: 1px solid">
                        <td style="border: 1px solid"> Enhanced Data Collection </td>
                        <td> Enterprises may eventually have to deal with massive numbers maybe even millions of IoT devices and collecting and managing the data from all those devices will be challenging.</td>
                    </tr>
                </table>
                <br>
                <h3> Challenges of IoT </h3>
                <ul>
                    <li> Security  </li>
                    <li> Privacy </li>
                    <li> Complexity </li>
                    <li> Flexibility </li>
                    <li> Compliance </li>
                </ul>
                <br>
                <h3> Architecture of IoT </h3>
                <ol>
                    <li><b>Sensing Layer </b>- The main purpose of the sensing layer is to identify any phenomena in the devices\' peripheral and obtain data from the real world.</li><br>
                    <ul>
                        <li><b>A. Motion Sensors:</b> measure the change in motion as well as the orientation of the devices. 2 types of motions : <i>linear and angular motions.</i></li><br>
                        <li><b>B. Environmental Sensors:</b> sensors such as Light sensors, Pressure sensors, etc. are embedded in IoT devices to sense the change in environmental parameters in the device\'s peripheral.</li><br>
                        <li><b>C. Position sensors:</b> position sensors of IoT devices deal with the physical position and location of the device.</li>
                    </ul>
                    <br>
                    <li><b>Network Layer </b> - The network layer acts as a communication channel to transfer data, collected in the sensing layer, to other connected devices.</li> <br>
                    <li><b>Data Processing Layer </b> - The data processing layer consists of the main data processing unit of IoT devices.</li> <br>
                    <li><b>Application Layer </b> - The application layer implements and presents the results of the data processing layer to accomplish disparate applications of IoT devices.</li> <br>
                </ol>
                <br>
                <h3> Devices and Networks </h3>
                <p>
                    The devices can be categorized into <b>three main groups: consumer, enterprise and industrial.</b> Consumer connected devices include smart TVs, smart speakers, toys, wearables, and smart appliances. smart meters, commercial security systems and smart city technologies such as those used to monitor traffic and weather conditions are examples of industrial and enterprise IoT devices. Other technologies, including smart air conditioning, smart thermostats, smart lighting, and smart security, span home, enterprise, and industrial uses. <br><br>In the enterprise, smart sensors located in a conference room can help an employee locate and schedule an available room for a meeting, ensuring the proper room type, size and features are available. When meeting attendees enter the room, the temperature will adjust according to the occupancy, and the lights will dim as the appropriate PowerPoint loads on the screen and the speaker begins his presentation.
                </p>
                <br>
                <p> Management for Device and Network in the Internet of Things (M4DN. IoT) </p>
                <ul>
                    <li> This solution integrates and controls the individual functionalities of the devices in an IoT network as well as the status and characteristics of this network. </li>
                    <li> M4DN. IoT defines a management structure in two scopes: local management, where the platform runs in the same environment as the devices, and remote management, where the platform controls the devices in different networks.</li>
                </ul>
                <br>
                
                <h2> IoT Tools and Platforms </h2>
                <table style="border: 1px solid; border-collapse:collapse; max-width: 700px">
                    <tr style="border: 1px solid">
                        <th style="border: 1px solid"> IoT Platform </th>
                        <th> Key Features </th>
                    </tr>
                    <tr>
                        <td style="border: 1px solid; text-align:center"> KAA </td>
                        <td style="border: 1px solid">
                            <ul>
                                <li> Manage an unlimited number of connected devices </li>
                                <li> Set up cross-device interoperability </li>
                                <li> Perform real-time device monitoring </li>
                                <li> Perform remote device provisioning and configuration </li>
                                <li> Collect and analyze sensor data </li>
                                <li> Analyze user behavior and deliver targeted notifications </li>
                                <li> Create cloud services for smart products </li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td style="border: 1px solid; text-align:center"> SiteWhere </td>
                        <td style="border: 1px solid">
                            <ul>
                                <li> Run any number of IoT applications on a single SiteWhere instance</li>
                                <li> Spring delivers the core configuration framework </li>
                                <li> Add devices through self-registration </li>
                                <li> Integrates with 3rd-party integration frameworks such as Mule point </li>
                                <li> Default database storage is MongoDB</li>
                                <li> Eclipse Californium for CoAP messaging </li>
                                <li> InfluxDB for event data storage </li>
                                <li> Grafana to visualize SiteWhere data </li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td style="border: 1px solid; text-align:center"> ThingSpeak </td>
                        <td style="border: 1px solid">
                            <ul>
                                <li> Collect data in private channels </li>
                                <li> Share data with public channels </li>
                                <li> MATLABS analytics and visualizations </li>
                                <li> Alerts </li>
                                <li> Event scheduling </li>
                                <li> App integrations </li>
                                <li> Worldwide community </li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td style="border: 1px solid; text-align:center"> DeviceHive </td>
                        <td style="border: 1px solid">
                            <ul>
                                <li> Directly integrate with Alexa </li>
                                <li> Visualization dahboard of your choice </li>
                                <li> It supports big data solutions such as ElasticSeach, Apache Spark, Cassandra and Kafka for real-time and batch processing </li>
                                <li> Connect any device </li>
                                <li> It comes with Apache Spark and Spark Streaming support </li>
                                <li> Support libraries written in various programming languages, including Android and iOS libraries </li>
                                <li> It allows running batch analytics and machine learning on top of your device data </li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td style="border: 1px solid; text-align:center"> Zetta </td>
                        <td style="border: 1px solid">
                            <ul>
                                <li> Supports a wide range of hacker boards </li>
                                <li> Zetta allows you to assemble smartphone apps, device apps, and cloud apps </li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td style="border: 1px solid; text-align:center"> ThingsBoard </td>
                        <td style="border: 1px solid">
                            <ul>
                                <li> Real-time data visualization and remote device control </li>
                                <li> Customizable rules, plugins, widget and transport implementations </li>
                                <li> Allows monitoring client-side and provision server-side device atributes </li>
                                <li> Support multi-tenant installations out-of-the-box </li>
                                <li> Supports transport encryption for both MQTT and HTTP(s) protocols </li>
                            </ul>
                        </td>
                    </tr>
                </table>
                <br>

                <h3> Applications of IoT </h3>
                <ul>
                    <li> Agriculture </li>
                    <li> Consumer Use </li>
                    <li> Healthcare </li>
                    <li> Insurance </li>
                    <li> Manufacturing </li>
                    <li> Retail </li>
                    <li> Transportation </li>
                    <li> Utilities </li>
                </ul>
                <br>
                <h3> IoT Based Smart Home </h3>
                <ul>
                    <li><b> Remote Control Appliances: </b> - Switching on and off remotely appliances to avoid accidents and save energy. </li><br>
                    <li><b> Weather: </b> - Displays outdoor weather conditions such as humidity, temperature, pressure, wind speed and rain levels with the ability to transmit data over long distances. </li><br>
                    <li><b> Smart Home Appliances: </b> - Refrigerators with LCD screen telling what\'s inside, food that\'s about to expire, ingredients you need to buy and with all the information available on a smartphone app. Washing machines allowing you to monitor the laundry remotely, and. The kitchen ranges with the interface to a Smartphone app allowing remotely adjustable temperature control and monitoring the oven\'s self-cleaning feature. </li><br>
                    <li><b> Safety Monitoring: </b> -  cameras, and home alarm systems making people feel safe in their daily life at home. </li><br>
                    <li><b> Intrusion Detection Systems: </b> - Detection of window and door openings and violations to prevent intruders. </li><br>
                    <li><b> Energy and Water Use: </b> - Energy and water supply consumption monitoring to obtain advice on how to save cost and resources, & many more.  </li><br>
                </ul>
                <br>
                <h3> IoT Based Smart City </h3>
                <ul>
                    <li><b> Structural Health: </b> - Monitoring of vibrations and material conditions in buildings, bridges and historical monuments. </li><br>
                    <li><b> Lightning: </b> - intelligent and weather adaptive lighting in street lights. </li><br>
                    <li><b> Safety: </b> - Digital video monitoring, fire control management, public announcement systems. </li><br>
                    <li><b> Transportation: </b> - Smart Roads and Intelligent High-ways with warning messages and diversions according to climate conditions and unexpected events like accidents or traffic jams. </li><br>
                    <li><b> Smart Parking: </b> - Real-time monitoring of parking spaces available in the city making residents able to identify and reserve the closest available spaces </li><br>
                    <li><b> Waste Management: </b> - Detection of rubbish levels in containers to optimize the trash collection routes. Garbage cans and recycle bins with RFID tags allow the sanitation staff to see when garbage has been put out.  </li><br>
                </ul>
                <br>
                <h3> IoT Based Smart Farming </h3>
                <ul>
                    <li><b> Green Houses: </b> - Control micro-climate conditions to maximize the production of fruits and vegetables and its quality. </li><br>
                    <li><b> Compost: </b> - Control of humidity and temperature levels in alfalfa, hay, straw, etc. to prevent fungus and other microbial contaminants. </li><br>
                    <li><b> Animal Farming/Tracking: </b> - Location and identification of animals grazing in open pastures or location in big stables, Study of ventilation and air quality in farms and detection of harmful gases from excrements. </li><br>
                    <li><b> Offspring Care: </b> - Control of growing conditions of the offspring in animal farms to ensure its survival and health. </li><br>
                    <li><b> Field Monitoring: </b> - Reducing spoilage and crop waste with better monitoring, accurate ongoing data obtaining, and management of the agriculture fields, including better control of fertilizing, electricity and watering. </li><br>                    
                </ul>
                <br>
                <br>
        `;
        case 'cs6_mod7': return ` 
        <h2 style="color:goldenrod"> AUGMENTED REALITY (AR) </h2>
                <br>
                <h3>Overview of Augmented reality (AR)</h3>
                <p>
                    The fundamental idea of AR is to combine, or mix, the view of the real environment with additional, virtual content that is presented through computer graphics. Its convincing effect is achieved by ensuring that the virtual content is aligned and registered with the real objects. As a person moves in an environment and their perspective view of real objects changes, the virtual content should also be presented from the same perspective. <br><br>
                    Augmented reality is a form of emerging technology that allows users to overlay computer-generated content in the real world. AR refers to a live view of a physical real-world environment whose elements are merged with augmented computer-generated images creating a mixed reality. The augmentation is typically done in real-time and in semantic context with environmental elements. By using the latest AR techniques and technologies, the information about the surrounding real world becomes interactive and digitally usable. Through this augmented vision, a user can digitally interact with and adjust information about their surrounding environment. <br><br>
                    Augmented reality  as a real-time direct or indirect view of a physical real-world environment that has been enhanced/augmented by adding virtual computer-generated information to it. Augmented reality is the integration of digital information with the user's environment in real-time. Unlike virtual reality, which creates a totally artificial environment, augmented reality uses the existing environment and overlays new information on top of it. A live direct or indirect view of a physical, real-world environment whose elements are augmented by computer-generated sensory input such as sound, video, graphics or GPS data.
                </p>
                <br><br>
                <h3> Virtual reality (VR), Augmented Reality (AR) vs Mixed reality (MR) </h3>
                <p>
                    With constant development in computer vision and the exponential advancement of computer processing power, virtual reality (VR), augmented reality (AR), and mixed reality (MR) technology is becoming more and more prominent. With some overlap in the applications and functions of these emerging technologies, sometimes these terms get confused or are used incorrectly.                    
                </p>
                <br><br>
                <h3> Virtual Reality (VR) </h3>
                <ul>
                    <li> VR is fully immersive, which tricks your senses into thinking you\'re in a different environment or world apart from the real world. Using a head-mounted display (HMD) or headset, you\'ll experience a computer-generated world of imagery and sounds in which you can manipulate objects and move around using haptic controllers while tethered to a console or PC. It is also calleda computer-simulated reality. It refers to computer technologies using reality headsets to generate realistic sounds, images and other sensations that replicate a real environment or create an imaginary world. Advanced VR environment will engage all five senses (taste, sight, smell, touch, sound), but it is important to say that this is not always possible. </li><br>
                    <li> Using VR devices such as HTC Vive, Oculus Rift or Google Cardboard, users can be transported into a number of real-world and imagined environments. </li><br>
                    <li> The most advanced VR experiences even provide freedom of movement - users can move in a digital environment and hear sounds. Moreover, special hand controllers can be used to enhance VR experiences.</li><br>
                    <li>Most VR headsets are connected to a computer (Oculus Rift) or a gaming console (PlayStation VR) but there are standalone devices (Google Cardboard is among the most popular) as well. Most standalone VR headsets work in combination with smartphones - you insert a smartphone, wear a headset, and immerse in the virtual reality. </li><br>
                </ul>
                <br>
                <h3> Augmented Reality (AR) </h3>
                <ul>
                    <li> In augmented reality, users see and interact with the real world while digital content is added to it. If you own a modern smartphone, you can easily download an AR app and try this technology. </li><br>
                    <li> There\'s a different way to experience augmented reality, though - with special AR headsets, such as Google Glass, where digital content is displayed on a tiny screen in front of a user\'s eye. </li><br>
                    <li> AR adds digital elements to a live view often by using the camera on a smartphone. Examples of augmented reality experiences include Snapchat lenses and the game Pokemon Go. Augmented Reality (AR) is a live, direct or indirect view of a physical, real-world environment whose elements are augmented (or supplemented) by computer-generated sensory input such as sound, video, graphics or GPS data.</li><br>
                </ul>
                <br>
                <h3> Mixed Reality (MR) </h3>
                <ul>
                    <li> Mixed Reality (MR), sometimes referred to as hybrid reality, is the merging of real and virtual worlds to produce new environments and visualizations where physical and digital objects co-exist and interact in real-time. It means placing new imagery within a real space in such a way that the new imagery is able to interact, to an extent, with what is real in the physical world we know. </li><br>
                    <li> For example, with MR, you can play a virtual video game, grab your real-world water bottle, and smack an imaginary character from the game with the bottle. Imagination and reality have never been so intermingled. The key characteristic of MR is that the synthetic content and the real-world content are able to react to each other in real-time. </li><br>
                    <li> In mixed reality, you interact with and manipulate both physical and virtual items and environments, using next-generation sensing and imaging technologies. MR allows you to see and immerse yourself in the world around you even as you interact with a virtual environment using your own hands—all without ever removing your headset. </li><br>
                </ul>
                <br><br>
                <h3> The architecture of AR Systems </h3>
                <p><i> The first Augmented Reality Systems (ARS) were usually designed with a basis on three main blocks :</i></p>
                <ol>
                    <li> <b> Infrastructure Tracker Unit </b> - it was responsible for collecting data from the real world, sending them to the Processing Unit.</li><br>
                    <li> <b> Processing Unit </b> - which mixed the virtual content with the real content and sent the result to the Video Out module of the Visual Unit. Some designs used a Video In, to acquire required data for the Infrastructure Tracker Unit. </li><br>
                    <li> <b> Visual Unit </b> - can be classified into two types of system, depending on the followed visualization technology:</li><br>
                    <ol>
                        <li> <b>  Video see-through: </b> - It uses a Head-Mounted Display (HMD) that employs a video-mixing and displays the merged images on a closed-view HMD. </li><br>
                        <li> <b>  Optical see-through: </b> - It uses an HMD that employs optical combiners to merge the images within an open-view HMD. </li><br>
                    </ol>
                </ol>
                <br>
                <h3> Head-Mounted Display (HMD) </h3>
                <ul>
                    <li> HMDs are currently the dominant display technology in the AR field. However, they lack in several aspects, such as ergonomics, high prices and relatively low mobility due to their sizes and connectivity features. </li><br>
                    <li> An additional problem involving HMD is the interaction with the real environment, which places virtual interactive zones to the user, making the collision with these zones hard due to the difficulty to interact with multiple points in different depths. </li><br>
                    <li> Alternative approaches to developing ARS involve the use of monitors and tablets. Monitors are used as an option for indirect view since the user does not look directly into the mixed world. </li><br>
                    <li> Tablets are used in direct view since the user points the camera to the scene and looks directly into the mixed world. Both approaches still have difficulties in getting a collision. </li>
                </ul>
                <br>
                <h3> Applications of AR Systems </h3>
                <ul>
                    <li> Technology is ever-changing and ever-growing. One of the newest developing technologies is augmented reality (AR), which can be applied to many different disciplines such as education, medicine, entertainment, military, etc. Let us see some of its applications. </li>
                </ul>
                <br>
                <h3> AR in Education </h3>
                <ul>
                    <li> Augmented reality allows flexibility in use that is attractive to education. AR technology can be utilized through a variety of mediums including desktops, mobile devices, and smartphones. The technology is portable and adaptable to a variety of scenarios. </li><br>
                    <li> AR can be used to enhance content and instruction within the traditional classroom, supplement instruction in the special education classroom, extend content into the world outside the classroom, and be combined with other technologies to enrich their individual applications. </li><br>
                </ul>
                <br>
                <p><i> The following reasons for using augmented reality in education: </i></p>
                <ul>
                    <li> <b> Affordable learning materials </b> - posters, digital illustrations, physical models, prototypes are very expensive and it\'s impossible for schools to find enough money to purchase all the supplementary materials they would like to. Using AR technology allows for avoiding investments in physical materials. Besides, students can get access to learning materials and interact with them anytime.</li><br>
                    <li> <b> Interactive lessons </b> - when AR technology is used in classrooms, students can view models on their own smartphones and get a better idea of the concepts they are studying. That increases engagements and reinforces the learning.</li><br>
                    <li> <b> Higher engagement </b> - when teachers integrate augmented reality into their lectures, they attract the attention of their students and make lessons more effective. When students are interested, it is much easier to make them work more productively.</li><br>
                    <li> <b> Higher retention </b> - using the AR app, students can get access to augmented models that represent any real objects from a famous monument or work of art to a molecule. Besides, students can get access to a website with specific information. When learning with AR technology, students use different senses and retain more knowledge for a long time. </li><br>
                    <li> <b> Boost intellectual curiosity </b> - augmented reality makes students more excited about learning certain subjects. Modern students were born in a digital era so they will always be excited with innovative technologies that can help them learn new ideas and develop their critical thinking skills .</li><br>
                    <li> When using AR technology in the classroom, teachers can create an authentic learning environment for students with different learning styles .</li>
                </ul>
                <br>
                <h3> AR In Medicine </h3>
                <ul>
                    <li> Augmented reality is one of the current technologies changing all industries, including healthcare and medical education. </li><br>
                    <li> The purpose of any invention and technology is to simplify our life. Augmented reality has the potential to play a big role in improving the healthcare industry. Only a few years since the first implementations of augmented reality in medicine, it has already filled an important place in doctors\' and nurses\' routine, as well as patients\' lives. </li><br>
                    <li> This new technology is enhancing medicine and healthcare towards more safety and efficiency. </li><br>
                    <li> augmented reality has already made significant changes in the following medical areas: </li><br>
                    <ul>
                        <li> surgery (minimally invasive surgery); </li>
                        <li> education of future doctors; </li>
                        <li> diagnostics; </li>
                        <li> AR tools may also aid to detect the signs of depression and other mental illnesses by reading from facial expressions, voice tones, and physical gestures. </li>
                    </ul>
                </ul>
                <br>
                <p><i> In medicine, AR has the following applications: </i></p>
                <ol>
                    <li><b> Describing symptoms </b> - Have you ever been in a situation when it was hard to describe to the doctor what was bothering you? It is a common problem for all us, the roots of which extend to overreacting and lack of knowledge. And what is most important, it impacts on finding out the accurate diagnosis. The first steps to find the solutions are already made. To increase patients\' education, medical app AyeDecide is using augmented reality to show the simulation of the vision, harmed by the different diseases. It helps patients to understand their conditions and describe correctly their symptoms.</li><br>
                    <li><b> Nursing care </b> - About 40% of the first intravenous injections fail, and this ratio is even higher in the case of children and elderly patients. The AccuVein uses augmented reality to cope with this negative statistic. A handheld scanner projects on the skin and shows the patients\' veins. It increases the successful finding of the vein from the first try in 3,5 times. That is why this invention got the greatest recognition among the general public and medical staff.</li><br>
                    <li><b> Surgery </b> - In no sphere augmented reality does not have such practical application as in the medicine, especially in surgery, where it literally helps to save lives. Three-dimensional reconstructions of organs or tumors will help surgeons become more efficient at surgery operations. For example, spinal surgery, as usually, is a long and difficult process. But with the use of AR, it can reduce the time, cut the risks and improve the results. The Israeli startup Augmedics had created an augmented reality headset for spine surgeons. This technology overlays a 3D model of the CT-scan on the spine, so, the surgeon gets some kind of ―X-ray‖ vision. </li><br>
                    <li><b> Ultrasounds </b> - Some time ago ultrasound made a small revolution in medicine. Today, it has another one chance to make the same with using augmented reality. Already a few AR software companies developed handy ultrasound scanner, which with the help of smart glasses works as a traditional one. It is hard to overestimate the usefulness of this technology. Especially when we talk about using it in the developing countries, in military medicine (on the battlefields) and even in the ambulance. </li><br>
                    <li><b> Diabetes management </b> - In 2017, the number of people struggle with diabetes reached up to 425 million adults worldwide. And the amount of diagnosed people is increasing every year. In 2014, Google revealed the plans for creating a smart contact lens (Google Contact Lens), in which the main function will be to measure the glucose levels in the tears. It will help people with this disease to live the life they used to, without permanent worries about sugar level in the blood. </li><br>
                    <li><b> Navigation </b> - The using AR in navigation apps has already become a ―traditional‖ way. By pointing your phone to the city landscape, you get the information about nearby objects of your interest (museums, hotels, shops, metro stations, etc.). The same way AR can be useful to provide information about the nearest hospitals. For example, the EHBO app helps to find the nearest to you AEDs (automated external defibrillators). </li><br>                    
                </ol>
                <br>
                <p><i> Generally, AR provides the following benefits to patients and healthcare workers: Reduce the risks associated with minimally invasive surgery. </i></p>
                <ul>
                    <li>Better informed decisions about the right treatment and illness prevention. </li>
                    <li>Make procedures more tolerable.</li>
                    <li>Better aftercare</li>
                    <li>Medical training and education.</li>
                    <li>Assistance in medical procedures and routine tasks.</li>
                </ul>
                <br>
                <h3> AR in Entertainment </h3>
                <p>
                    Augmented reality can be used in various ―entertainment‖ industries as entertainment covers quite a number of different industries - music, movies, live shows, games - and all of them can benefit from using augmented reality.
                </p>
                <ul>
                    <li> <b>AR in games </b> - the AR games were praised for increasing physical activity in people - you actually have to move around to find your target, for example, Pokémon. At the same time, there are complaints that players could cause various incidents and accidents being too engrossed in the game. In any case, Pokémon GO has rightfully earned its popularity and opened the world of AR games to us. </li><br>
                    <li> <b>AR in music </b> - music is not only about listening to favorite tracks and putting together playlists. When we like a piece, we often want to find out more about its background: the performers\' bios, the lyrics of the song, the making of the recording or the music video. Augmented reality can do all that and much more providing complete information on the track or its performer. Augmented reality can enhance live performances by illustrating the story told by a track or displaying the way it was created by the band. </li><br>
                    <li> <b>AR on TV </b> - this may seem a bit far-fetched, as television already shows a virtual world, thus adding augmented reality will raise it to the second power. However, some experiments of fusing augmented reality on TV are already being made with the promise of future enhancements. One way of integrating augmented reality in television is adding supplementary information to what is going on the TV screen - such as match scores, betting options, and the like. </li><br>
                    <li> <b>AR in eSports </b> - recently, the industry of eSports has been gaining popularity in all parts of the globe. Competitive online gaming has become as fascinating as real sports, and the technology is following it closely with new solutions and unusual implementations. Augmented reality turns eSports shows into interactive experiences allowing the watchers to become participants.  </li><br>
                    <li> <b>AR in the theater </b> - in this sector, augmented reality can serve not only for entertainment purposes but also for the purposes of accessibility. The possibility to overlay virtual objects over the real environment can be used, for example, for subtitling in various theater shows. Now, many theaters use LED displays either to provide subtitles for translation or to assist hearing-impaired visitors. However, LED equipment is not available in each theater and even when it is, it can distract the viewers from the show. </li><br>
                </ul>
                <br>
        `;

        case 'sipp_mod11': return ` 
        <h2 style="color:goldenrod"> AUGMENTED REALITY (AR) </h2>
                <br>
                <h3>Overview of Augmented reality (AR)</h3>
                <p>
                    The fundamental idea of AR is to combine, or mix, the view of the real environment with additional, virtual content that is presented through computer graphics. Its convincing effect is achieved by ensuring that the virtual content is aligned and registered with the real objects. As a person moves in an environment and their perspective view of real objects changes, the virtual content should also be presented from the same perspective. <br><br>
                    Augmented reality is a form of emerging technology that allows users to overlay computer-generated content in the real world. AR refers to a live view of a physical real-world environment whose elements are merged with augmented computer-generated images creating a mixed reality. The augmentation is typically done in real-time and in semantic context with environmental elements. By using the latest AR techniques and technologies, the information about the surrounding real world becomes interactive and digitally usable. Through this augmented vision, a user can digitally interact with and adjust information about their surrounding environment. <br><br>
                    Augmented reality  as a real-time direct or indirect view of a physical real-world environment that has been enhanced/augmented by adding virtual computer-generated information to it. Augmented reality is the integration of digital information with the user's environment in real-time. Unlike virtual reality, which creates a totally artificial environment, augmented reality uses the existing environment and overlays new information on top of it. A live direct or indirect view of a physical, real-world environment whose elements are augmented by computer-generated sensory input such as sound, video, graphics or GPS data.
                </p>
                <br><br>
                <h3> Virtual reality (VR), Augmented Reality (AR) vs Mixed reality (MR) </h3>
                <p>
                    With constant development in computer vision and the exponential advancement of computer processing power, virtual reality (VR), augmented reality (AR), and mixed reality (MR) technology is becoming more and more prominent. With some overlap in the applications and functions of these emerging technologies, sometimes these terms get confused or are used incorrectly.                    
                </p>
                <br><br>
                <h3> Virtual Reality (VR) </h3>
                <ul>
                    <li> VR is fully immersive, which tricks your senses into thinking you\'re in a different environment or world apart from the real world. Using a head-mounted display (HMD) or headset, you\'ll experience a computer-generated world of imagery and sounds in which you can manipulate objects and move around using haptic controllers while tethered to a console or PC. It is also calleda computer-simulated reality. It refers to computer technologies using reality headsets to generate realistic sounds, images and other sensations that replicate a real environment or create an imaginary world. Advanced VR environment will engage all five senses (taste, sight, smell, touch, sound), but it is important to say that this is not always possible. </li><br>
                    <li> Using VR devices such as HTC Vive, Oculus Rift or Google Cardboard, users can be transported into a number of real-world and imagined environments. </li><br>
                    <li> The most advanced VR experiences even provide freedom of movement - users can move in a digital environment and hear sounds. Moreover, special hand controllers can be used to enhance VR experiences.</li><br>
                    <li>Most VR headsets are connected to a computer (Oculus Rift) or a gaming console (PlayStation VR) but there are standalone devices (Google Cardboard is among the most popular) as well. Most standalone VR headsets work in combination with smartphones - you insert a smartphone, wear a headset, and immerse in the virtual reality. </li><br>
                </ul>
                <br>
                <h3> Augmented Reality (AR) </h3>
                <ul>
                    <li> In augmented reality, users see and interact with the real world while digital content is added to it. If you own a modern smartphone, you can easily download an AR app and try this technology. </li><br>
                    <li> There\'s a different way to experience augmented reality, though - with special AR headsets, such as Google Glass, where digital content is displayed on a tiny screen in front of a user\'s eye. </li><br>
                    <li> AR adds digital elements to a live view often by using the camera on a smartphone. Examples of augmented reality experiences include Snapchat lenses and the game Pokemon Go. Augmented Reality (AR) is a live, direct or indirect view of a physical, real-world environment whose elements are augmented (or supplemented) by computer-generated sensory input such as sound, video, graphics or GPS data.</li><br>
                </ul>
                <br>
                <h3> Mixed Reality (MR) </h3>
                <ul>
                    <li> Mixed Reality (MR), sometimes referred to as hybrid reality, is the merging of real and virtual worlds to produce new environments and visualizations where physical and digital objects co-exist and interact in real-time. It means placing new imagery within a real space in such a way that the new imagery is able to interact, to an extent, with what is real in the physical world we know. </li><br>
                    <li> For example, with MR, you can play a virtual video game, grab your real-world water bottle, and smack an imaginary character from the game with the bottle. Imagination and reality have never been so intermingled. The key characteristic of MR is that the synthetic content and the real-world content are able to react to each other in real-time. </li><br>
                    <li> In mixed reality, you interact with and manipulate both physical and virtual items and environments, using next-generation sensing and imaging technologies. MR allows you to see and immerse yourself in the world around you even as you interact with a virtual environment using your own hands—all without ever removing your headset. </li><br>
                </ul>
                <br><br>
                <h3> The architecture of AR Systems </h3>
                <p><i> The first Augmented Reality Systems (ARS) were usually designed with a basis on three main blocks :</i></p>
                <ol>
                    <li> <b> Infrastructure Tracker Unit </b> - it was responsible for collecting data from the real world, sending them to the Processing Unit.</li><br>
                    <li> <b> Processing Unit </b> - which mixed the virtual content with the real content and sent the result to the Video Out module of the Visual Unit. Some designs used a Video In, to acquire required data for the Infrastructure Tracker Unit. </li><br>
                    <li> <b> Visual Unit </b> - can be classified into two types of system, depending on the followed visualization technology:</li><br>
                    <ol>
                        <li> <b>  Video see-through: </b> - It uses a Head-Mounted Display (HMD) that employs a video-mixing and displays the merged images on a closed-view HMD. </li><br>
                        <li> <b>  Optical see-through: </b> - It uses an HMD that employs optical combiners to merge the images within an open-view HMD. </li><br>
                    </ol>
                </ol>
                <br>
                <h3> Head-Mounted Display (HMD) </h3>
                <ul>
                    <li> HMDs are currently the dominant display technology in the AR field. However, they lack in several aspects, such as ergonomics, high prices and relatively low mobility due to their sizes and connectivity features. </li><br>
                    <li> An additional problem involving HMD is the interaction with the real environment, which places virtual interactive zones to the user, making the collision with these zones hard due to the difficulty to interact with multiple points in different depths. </li><br>
                    <li> Alternative approaches to developing ARS involve the use of monitors and tablets. Monitors are used as an option for indirect view since the user does not look directly into the mixed world. </li><br>
                    <li> Tablets are used in direct view since the user points the camera to the scene and looks directly into the mixed world. Both approaches still have difficulties in getting a collision. </li>
                </ul>
                <br>
                <h3> Applications of AR Systems </h3>
                <ul>
                    <li> Technology is ever-changing and ever-growing. One of the newest developing technologies is augmented reality (AR), which can be applied to many different disciplines such as education, medicine, entertainment, military, etc. Let us see some of its applications. </li>
                </ul>
                <br>
                <h3> AR in Education </h3>
                <ul>
                    <li> Augmented reality allows flexibility in use that is attractive to education. AR technology can be utilized through a variety of mediums including desktops, mobile devices, and smartphones. The technology is portable and adaptable to a variety of scenarios. </li><br>
                    <li> AR can be used to enhance content and instruction within the traditional classroom, supplement instruction in the special education classroom, extend content into the world outside the classroom, and be combined with other technologies to enrich their individual applications. </li><br>
                </ul>
                <br>
                <p><i> The following reasons for using augmented reality in education: </i></p>
                <ul>
                    <li> <b> Affordable learning materials </b> - posters, digital illustrations, physical models, prototypes are very expensive and it\'s impossible for schools to find enough money to purchase all the supplementary materials they would like to. Using AR technology allows for avoiding investments in physical materials. Besides, students can get access to learning materials and interact with them anytime.</li><br>
                    <li> <b> Interactive lessons </b> - when AR technology is used in classrooms, students can view models on their own smartphones and get a better idea of the concepts they are studying. That increases engagements and reinforces the learning.</li><br>
                    <li> <b> Higher engagement </b> - when teachers integrate augmented reality into their lectures, they attract the attention of their students and make lessons more effective. When students are interested, it is much easier to make them work more productively.</li><br>
                    <li> <b> Higher retention </b> - using the AR app, students can get access to augmented models that represent any real objects from a famous monument or work of art to a molecule. Besides, students can get access to a website with specific information. When learning with AR technology, students use different senses and retain more knowledge for a long time. </li><br>
                    <li> <b> Boost intellectual curiosity </b> - augmented reality makes students more excited about learning certain subjects. Modern students were born in a digital era so they will always be excited with innovative technologies that can help them learn new ideas and develop their critical thinking skills .</li><br>
                    <li> When using AR technology in the classroom, teachers can create an authentic learning environment for students with different learning styles .</li>
                </ul>
                <br>
                <h3> AR In Medicine </h3>
                <ul>
                    <li> Augmented reality is one of the current technologies changing all industries, including healthcare and medical education. </li><br>
                    <li> The purpose of any invention and technology is to simplify our life. Augmented reality has the potential to play a big role in improving the healthcare industry. Only a few years since the first implementations of augmented reality in medicine, it has already filled an important place in doctors\' and nurses\' routine, as well as patients\' lives. </li><br>
                    <li> This new technology is enhancing medicine and healthcare towards more safety and efficiency. </li><br>
                    <li> augmented reality has already made significant changes in the following medical areas: </li><br>
                    <ul>
                        <li> surgery (minimally invasive surgery); </li>
                        <li> education of future doctors; </li>
                        <li> diagnostics; </li>
                        <li> AR tools may also aid to detect the signs of depression and other mental illnesses by reading from facial expressions, voice tones, and physical gestures. </li>
                    </ul>
                </ul>
                <br>
                <p><i> In medicine, AR has the following applications: </i></p>
                <ol>
                    <li><b> Describing symptoms </b> - Have you ever been in a situation when it was hard to describe to the doctor what was bothering you? It is a common problem for all us, the roots of which extend to overreacting and lack of knowledge. And what is most important, it impacts on finding out the accurate diagnosis. The first steps to find the solutions are already made. To increase patients\' education, medical app AyeDecide is using augmented reality to show the simulation of the vision, harmed by the different diseases. It helps patients to understand their conditions and describe correctly their symptoms.</li><br>
                    <li><b> Nursing care </b> - About 40% of the first intravenous injections fail, and this ratio is even higher in the case of children and elderly patients. The AccuVein uses augmented reality to cope with this negative statistic. A handheld scanner projects on the skin and shows the patients\' veins. It increases the successful finding of the vein from the first try in 3,5 times. That is why this invention got the greatest recognition among the general public and medical staff.</li><br>
                    <li><b> Surgery </b> - In no sphere augmented reality does not have such practical application as in the medicine, especially in surgery, where it literally helps to save lives. Three-dimensional reconstructions of organs or tumors will help surgeons become more efficient at surgery operations. For example, spinal surgery, as usually, is a long and difficult process. But with the use of AR, it can reduce the time, cut the risks and improve the results. The Israeli startup Augmedics had created an augmented reality headset for spine surgeons. This technology overlays a 3D model of the CT-scan on the spine, so, the surgeon gets some kind of ―X-ray‖ vision. </li><br>
                    <li><b> Ultrasounds </b> - Some time ago ultrasound made a small revolution in medicine. Today, it has another one chance to make the same with using augmented reality. Already a few AR software companies developed handy ultrasound scanner, which with the help of smart glasses works as a traditional one. It is hard to overestimate the usefulness of this technology. Especially when we talk about using it in the developing countries, in military medicine (on the battlefields) and even in the ambulance. </li><br>
                    <li><b> Diabetes management </b> - In 2017, the number of people struggle with diabetes reached up to 425 million adults worldwide. And the amount of diagnosed people is increasing every year. In 2014, Google revealed the plans for creating a smart contact lens (Google Contact Lens), in which the main function will be to measure the glucose levels in the tears. It will help people with this disease to live the life they used to, without permanent worries about sugar level in the blood. </li><br>
                    <li><b> Navigation </b> - The using AR in navigation apps has already become a ―traditional‖ way. By pointing your phone to the city landscape, you get the information about nearby objects of your interest (museums, hotels, shops, metro stations, etc.). The same way AR can be useful to provide information about the nearest hospitals. For example, the EHBO app helps to find the nearest to you AEDs (automated external defibrillators). </li><br>                    
                </ol>
                <br>
                <p><i> Generally, AR provides the following benefits to patients and healthcare workers: Reduce the risks associated with minimally invasive surgery. </i></p>
                <ul>
                    <li>Better informed decisions about the right treatment and illness prevention. </li>
                    <li>Make procedures more tolerable.</li>
                    <li>Better aftercare</li>
                    <li>Medical training and education.</li>
                    <li>Assistance in medical procedures and routine tasks.</li>
                </ul>
                <br>
                <h3> AR in Entertainment </h3>
                <p>
                    Augmented reality can be used in various ―entertainment‖ industries as entertainment covers quite a number of different industries - music, movies, live shows, games - and all of them can benefit from using augmented reality.
                </p>
                <ul>
                    <li> <b>AR in games </b> - the AR games were praised for increasing physical activity in people - you actually have to move around to find your target, for example, Pokémon. At the same time, there are complaints that players could cause various incidents and accidents being too engrossed in the game. In any case, Pokémon GO has rightfully earned its popularity and opened the world of AR games to us. </li><br>
                    <li> <b>AR in music </b> - music is not only about listening to favorite tracks and putting together playlists. When we like a piece, we often want to find out more about its background: the performers\' bios, the lyrics of the song, the making of the recording or the music video. Augmented reality can do all that and much more providing complete information on the track or its performer. Augmented reality can enhance live performances by illustrating the story told by a track or displaying the way it was created by the band. </li><br>
                    <li> <b>AR on TV </b> - this may seem a bit far-fetched, as television already shows a virtual world, thus adding augmented reality will raise it to the second power. However, some experiments of fusing augmented reality on TV are already being made with the promise of future enhancements. One way of integrating augmented reality in television is adding supplementary information to what is going on the TV screen - such as match scores, betting options, and the like. </li><br>
                    <li> <b>AR in eSports </b> - recently, the industry of eSports has been gaining popularity in all parts of the globe. Competitive online gaming has become as fascinating as real sports, and the technology is following it closely with new solutions and unusual implementations. Augmented reality turns eSports shows into interactive experiences allowing the watchers to become participants.  </li><br>
                    <li> <b>AR in the theater </b> - in this sector, augmented reality can serve not only for entertainment purposes but also for the purposes of accessibility. The possibility to overlay virtual objects over the real environment can be used, for example, for subtitling in various theater shows. Now, many theaters use LED displays either to provide subtitles for translation or to assist hearing-impaired visitors. However, LED equipment is not available in each theater and even when it is, it can distract the viewers from the show. </li><br>
                </ul>
                <br>
        `;
        case 'sipp_mod1': return '<h2 style="color:goldenrod"> OVERVIEW OF ETHICS </h2>';
        case 'sipp_mod2': return '<h2 style="color:goldenrod"> ETHICS FOR ICT PROFESSIONALS AND ICT USERS </h2>';
        case 'sipp_mod3': return '<h2 style="color:goldenrod"> PRIVACY </h2>';
        case 'sipp_mod4': return '<h2 style="color:goldenrod"> FREEDOM OF EXPRESSION </h2>';
        case 'sipp_mod5': return 'OVERVIEW OF ETHICS';
        case 'sipp_mod6': return 'OVERVIEW OF ETHICS';
        case 'sipp_mod7': return 'OVERVIEW OF ETHICS';
        case 'sipp_mod8': return 'OVERVIEW OF ETHICS';
        default: return 'Empty Module';
    }
}
