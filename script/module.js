//public var - (quiz)
var moduleCode = '';



function displayModule(code, num){
    //display module content, hide sidebar, set module title, and set quiz title
    moduleCode = code;
    document.querySelector('.content').innerHTML = module(moduleCode);
    document.querySelector('.module-title').innerText = "Module " + num; 
    document.querySelector('.quiz-title').innerText = "QUIZ - Module " + num;
    window.scrollTo({ top: 0, behavior:"smooth" });
}



//functions choose display
function module(code){
    
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
                        <li><b>Confidentiality</b> - this is achieved by sending critical information by encrypting it with the public key of the receiver and the receiver decrypting it with his own private key</li>
                        <li><b>Authenticity using Digital Signatures</b> - a sender attaches his private key to the message as a digital signature and exchange with the receiver.</li>
                        <li><b>Integrity of Information Exchange</b> - one way hash of the data to be exchanged is created and encrypted using the private key of the sender</li>
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
                    </ul>
                    <br>
                    <h3>Firewall</h3>
                    <ul>
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
                        <li><b>Virtual Firewall.</b><ul> typically deployed as a virtual appliance in a private cloud or public cloud  to monitor and secure traffic across physical and virtual networks. A virtual firewall is often a key component in software-defined networks (SDN).</ul></li><br>
                    </ol>
                    <br>
                    <h3>Static Packet filtering</h3>
                    <ul>
                        <li>firewall technique that controls access to a network by analyzing the incoming and outgoing packets and letting them pass or halting them based on the IP addresses of the source and destination.</li> <br>                        
                    </ul>
                    <h3>Stateful Packet Inspection</h3>
                    <ul>
                        <li> is a computer or router that can monitor and filter the traffic coming across it dynamically, an architecture known as stateful packet inspection (SPI) or dynamic packet filtering.</li> <br>
                        <li> stateful firewalls are used when security is preferred over speed.</li> <br>                        
                    </ul>
                    <br>
                    <h3>3rd generation Hardware Firewalls</h3>
                    <ul>
                        <li> maintain records of all connections passing through the firewall, known as stateful packet inspection.</li> <br>
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
                    <p> Application Proxy Firewall</p>
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
                <h3>Server Operating Systems</h3>
                <br>
                <p><i> The Windows Server Operating Systems </i></p>
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

                <p><i> The UNIX Server Operating Systems </i></p>
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
                <h3>E-Commerce Service</h3>
                <ul>
                    <li> refer to the additional software needed for buying and selling, including online catalogs, shopping carts, checkout functions, connections to back-end databases within the firm, and links to outside organizations, such as banks.</li>
                    <li> needs to have network access to a number of systems external to itself, including servers within firms and servers outside the firm in merchant banks and companies that check credit card numbers for validity</li>
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
                            <td> More expensive to develop </td>
                        </tr>
                        <tr>
                            <td style="border: 1px solid"> Fully interactive </td>
                            <td> Time consuming to create </td>
                        </tr>
                        <tr style="border: 1px solid">
                            <td style="border: 1px solid"> User driven </td>
                            <td> Not effective for requirements gathering </td>
                        </tr>
                        <tr style="border: 1px solid">
                            <td style="border: 1px solid"> Clear definition of navigation </td>
                            <td> </td>
                        </tr>
                        <tr style="border: 1px solid">
                            <td style="border: 1px solid"> Look and feel of final product </td>
                            <td> </td>
                        </tr>
                        <tr style="border: 1px solid">
                            <td style="border: 1px solid"> Use for explorations and tests </td>
                            <td> </td>
                        </tr>
                    </table>
                    <br>
                    <br>
            `;
        default: return 'Empty Module';
    }
}


//Display Module Events
//displayModule('ias_mod7', 7);